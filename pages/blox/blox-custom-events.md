---
title: Blox Custom Events
keywords: unity3d, blox, visual scripting, programming
sidebar: blox_sidebar
toc: false
permalink: blox-custom-events.html
folder: blox
---

Custom Events
=============

Blox allows you to create new Events which a developer can choose from in the Blox Editor.

In many cases you can use the Blox API to simply make a call to a renamed `Custom` Event but if you are developing a Blox add-on it would be useful to create dedicated Blox Events which your game system can trigger in Blox; similar to how the Unity Events have dedicated Blox Event triggers.

To create new Events you simply need to create a new Blox Event Handler and define your events in it as functions with the `BloxEventAttribute`. You can choose to place all your events in one event handler or to create a separate handler for each - it all depends on what makes most sense for your case.

The Event Handler is simply a MonoBehaviour which will be attached to the GameObject at runtime. Keep in mind that if the developer uses the script-gen feature then the Event Handler component might not be attached but rather the generated script; so do not use the Event Handler for your system's logic; only use it to define the Blox events.

It is **important** that you choose unique function names for your events. At the very least do not use anything defined for the Unity events like Update() or Awake().

Here is what an Event Handler might look like. This is a runtime script.

```csharp
using UnityEngine;
using System.Collections.Generic;
using BloxEngine;

namespace MyNamespace
{
    // Hide it from the component menu so that a user 
    // may not manually attach it to a GameObject
    [AddComponentMenu("")]

    // Derive from BloxEventHandler, which is just a MonoBehaviour itself
    public class MyBloxEventHandler : BloxEventHandler
    {
        // Cache of events the user added to his Blox
        private List<BloxEvent> events1 = new List<BloxEvent>(1);
        private List<BloxEvent> events2 = new List<BloxEvent>(1);

        // Here is my first Event. This is the function which will
        // be called when the event must be triggered
        [BloxEvent("MyEvents/Event 1")]
        public void MyEvent1()
        {
            // and this is how I make sure the events the user added in the 
            // Blox will get to run when this event is triggered
            RunEvents(events1);
        }

        // This event takes parameters. Note how I make them available as
        // Event Variables in the event. It is a good idea to give the
        // parameters/variables descriptive names. Also be sure to
        // use the same names for both since the Blox Property Panel
        // looks at the function's parameter names to determine what
        // info to show about the Event Variables in that panel
        [BloxEvent("MyEvents/Event 2")]
        public void MyEvent2(int foo, string bar)
        {
            RunEvents(events2,
                new BloxEventArg("foo", foo), 
                new BloxEventArg("bar", bar));
        }

        // Every event handler must have this so that it can
        // populate its lists of events that must be called 
        // to run when an event is triggered
        public override void AddEvent(BloxEvent ev)
        {
            // simply check if the ident is the same as the ones
            // defined for the events in this handler and add
            // to the correct list
            if ("MyEvents/Event 1".Equals(ev.ident)) events1.Add(ev);
            else if ("MyEvents/Event 2".Equals(ev.ident)) events2.Add(ev);
            else Debug.LogError("This event handler can't handle: " + ev.ident);
        }
    }
}

```

### Register Event at runtime

Blox will not automatically pick up the event(s) types at runtime. This was a design choice so that the game starts up faster. Registering the events are easy though and you can use the following template to do so. This follows on the example Events given above.

```csharp
using UnityEngine;
using BloxEngine;
namespace MyNamespace
{
    public class MyBloxEventHandlerRegister
    {
        [RuntimeInitializeOnLoadMethod(RuntimeInitializeLoadType.BeforeSceneLoad)]
        private static void RegisterEventsHandlers()
        {
            BloxGlobal.RegisterEventHandlerType("MyEvents/Event 1", typeof(MyBloxEventHandler));
            BloxGlobal.RegisterEventHandlerType("MyEvents/Event 2", typeof(MyBloxEventHandler));
        }
    }
}
```

**BloxEventAttribute**

This must be added to any function which must be seen as a Blox Event. By default you only have to specify the `ident` which also acts as a path to grouping the Event in the Events selection window.

To use any of the non-default ones you simply add them as named parameters; for example

`[BloxEvent("MyEvents/Event 2", Order=5, YieldAllowed=true)]`

- string **Ident**: this is the identifier for the event. It must be in the form of `Path/To/Event Name`.
- int **Order**: can be used to change the order of the Event in the list of events. Default = 99999 to sort it to the bottom.
- string **IconName**: this can be used to specify a special different icon to represent this event. By default a unity logo icon is used. You will note that the Custom event uses a custom Blox logo icon. See below for more info on how to register this icon with Blox.
- bool **YieldAllowed**: (default = false) set this to true for Events that allow yielding. If this is false then no Wait-type block will be allowed in the event. 

If you specified a custom icon name then you need to register the icon's texture with Blox as soon as Unity is done compiling scripts or at least before the user will see the Event in the Blox editor. That means the best time would be during `[InitializeOnLoad]`.

The icon must be added to the `BloxEdGUI.Instance.namedIcons` dictionary. By default icons named "folder", "blox", and "unity" are available. Be sure to choose a name which will be unique and not clash with other names added later.

The simplest way would be to create a new Editor script to do it in. An editor script is a script in a folder called `Editor` in any folder under `Assets` in your project and normally make calls to `UnityEditor` types.

For best results the icon should be a 16x16 texture set to `type: Editor GUI`, `filter mode: Point` and `format: True Color`.

![](img/blox/15.png)

Let's assume you want to add a new icon called `MyIcon`, then the script to load that icon will look something like this. In this example it is saved under `Assets\MyKit\Editor\res\MyIcon.png`. Note how I am not placing it in a folder named `Resources` - a mistake which would cause the icon to be included in the runtime builds of the project.

```csharp
using UnityEngine;
using UnityEditor;
using BloxEditor;
using plyLibEditor;

namespace MyNamespace
{
    [InitializeOnLoad]
    public class MyIconLoader
    {
        static MyIconLoader()
        {
            // you can use any method you know of loading textures. I'll use the 
            // plyEdGUI.LoadTexture() function from plyLibEditor to load it
            Texture2D icon = plyEdGUI.LoadTexture("Assets/MyKit/Editor/res/MyIcon.png");
            BloxEdGUI.Instance.namedIcons.Add("MyIcon", icon);
        }
    }
}
```

![](img/blox/16.png)

### Triggering the Event!

So far we've look at adding a new Event; but how do you actually trigger it? Remember that this is an event you are creating with the sole purpose of triggering from your system when it is time. Just like how the Unity events like Start() or Update() are triggered when it is time for them to run. The only event which the user is allowed to manually trigger is the `Custom` event.

To trigger the event basically comes down to making a call to the correct function in the event handler script. The easiest would be to make use of Unity's [GameObject.SendMessage](http://docs.unity3d.com/ScriptReference/GameObject.SendMessage.html) function. This is where it becomes important that you chose a very unique function name; not only so that it does not clash for existing or future events added to Blox but also so that `SendMessage` will be called on the correct function. You should also always use the `SendMessageOptions.DontRequireReceiver` in SendMessage since generated scripts will not include your named event (function) if the user did not use that event in a Blox and then throw errors.

You might be tempted to create a reference to the event handler since it would be a component attached to the GameObject at runtime (during Awake) - but don't do this. If the user generate scripts then your event handler will not be attached to the GameObject. Instead a new script (MonoBehaviour) is created with function names the same as the ones defined for each event (but only for those events actually used in the Blox). [_I was hoping to find a solution where you can use callbacks but nothing has presented itself yet while the user can generate scripts_]

Since SendMessage() allows only one value to be send you will need to wrap up any additional values in a middleman class. So the `MyEvent2` example above need to change to something like this.

```csharp
public class Middelman
{
    public int foo;
    public string bar;
}

[BloxEvent("MyEvents/Event 2")]
public void MyEvent2(Middelman data)
{
    RunEvents(events2,
        new BloxEventArg("foo", data.foo), 
        new BloxEventArg("bar", data.bar));
}

// and then it can be called with
gameObject.SendMessage("MyEvent2", new Middelman(){foo="a",bar=1}, SendMessageOptions.DontRequireReceiver);
```

The `BloxContainer` component has special versions of `SendMessage` which allows you to Invoke a method which requires more than one value so that you do not have to create a middleman class or use arrays/ lists of objects.

Since all GameObject which deals with Blox must have a BloxContainer you can simply check if there is one present on the target object and then call the SendMessage though it. 

```csharp
// you could do this in Awake()
BloxContainer blox = gameObject.GetComponent<BloxContainer>();

// and then use one of the SendMessage functions.

if (blox != null) blox.SendMessage("MyEvent2", "a", 1);

//or
if (blox != null) blox.SendMessage("MyEvent2", new System.Type[] { typeof(string), typeof(int) }, "a", 1);
```

There are two versions of SendMessage. The first will simply look at the function names and grab the first with the correct name in Components on the same GameObject as BloxContainer. If you know the function name you chose will not possibly be present in other components than your event handler then you can use the 1st variation. To be save you can use the second variation where you specify the expected types for the parameters. Be sure to send the exact number of expected values.

### Documentation

Blox can show documentation for Events and Blocks in the Blox Editor's Properties panel. To get your docs in there you simply need to create a text (json) file with a the needed info and request the user to add that file to his BloxDoc settings.

New documentation sources are added in the BloxDoc Settings; menu: `Blox > Settings`; then click on the [BloxDoc] button. In the new window simply add the file to the list and click [Done]. Unity must be restarted.

![](img/blox/17.png)

Have a look at `Assets\plyoung\Blox\editor\res\events.txt` for an example of what the file content must look like. Do not add your own to this since those changes will be lost as soon as the user updates to a new version of Blox.

The file is in JSON format. Please check that it loads properly since it is easy to make mistakes in these kind of files (for example leaving a comma in the last entry).

Here is what such a doc might look like for the event sample described in on this page.

```json
{
    "entries": [
        {
            "ident": "MyEvents/Event 1",
            "name": "Event 1",
            "url": "you can add the url to your online docs here",
            "doc": "Here comes the documentation",
            "parameters": []
        },
        {
            "ident": "MyEvents/Event 2",
            "name": "Event 2",
            "url": "",
            "doc": "Here comes the documentation",
            "parameters": []
        }
    ]
}
```










