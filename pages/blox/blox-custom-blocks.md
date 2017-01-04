---
title: Blox Custom Blocks
keywords: unity3d, blox, visual scripting, programming
sidebar: blox_sidebar
toc: false
permalink: blox-custom-blocks.html
folder: blox
---

Custom Blocks
=============

There are two ways in which Blocks are created in Blox. The 1st and easiest is to let Blox automatically create them from fields, properties, and methods. This is how it works for almost all the Blocks in the Blox system, like those found under the UnityEngine category.

However, sometimes it is not easy to describe a Block in one function and that is where you might want to create a Custom Block. In Blox all the Blocks under the Common, Flow, Maths, Comparison, and some in the Values category are custom Blocks.

Defining the Block
------------------

There are 3 parts to a Block. The runtime part which does the actual work, the Block drawer and the Block script-gen.

All custom Blocks must derive from `BloxBlock` and have the `BloxBlockAttribute` to describe that Block to Blox.

The basic framework of a Block looks like this.

```csharp
using UnityEngine;
using System.Collections;
using BloxEngine;

namespace MyNamespace
{
    // BloxBlock Attribute
    [BloxBlock("MyBlocks/My Awesome Block", BloxBlockType.Action)]

    // The Block
    public class MyAwesome_Block : BloxBlock
    {
        // Block Properties

        public string someBlockProperty;
        public int anotherOne;

        // The important functions to override

        protected override void InitBlock()
        {
        }

        protected override object RunBlock()
        {
            return null;
        }

        // this is needed if you define block properties since 
        // those values should be copied

        public override void CopyTo(BloxBlock block)
        {
            base.CopyTo(block);
            MyAwesome_Block b = (MyAwesome_Block)block;
            b.someBlockProperty = this.someBlockProperty;
            b.anotherOne = this.anotherOne;
        }
    }
}
```

### BloxBlock Attribute

The BloxBlock attribute requires two parameters be set; the first is the `ident` which looks like a path and determines how the Block will be sorted into the list of Blocks. The second is the `BlockType` which describes what kind of Block this is.

- `string Ident`: Name in form of a path /Group/Group/Name. This must be unique among all Blocks.
- `BloxBlockType BlockType`: Type of the Block. 
    + Value: A value like Int, String, or Vector3 (or a constructor, or comparison operator). You use this for a Block which can never be used like an Action. The Comparison Blocks for example uses this rather than Action.
    + Container: An Action Block which can have child Blocks. The IF and Loop Blocks are container blocks.
    + Action: Action Blocks and Blocks that can set/ return values (functions, getters and setters) - these can be used as either an action or as field in Context/ Parameters of other Blocks. Note, these can not be used as fields when they specify no *ReturnType*.
- `int Order`: Change order in blocks list.
- `System.Type ReturnType`: Return type of this block if it returns a value. This must be set when the Block is *Value* type and is optional of the Block is *Action* type. No point in setting this for *Container* bocks.
- `string IconName`: Icon to use. An editor script needs to register this icon with BloxEdGUI.namedIcons before Blocks are loaded (so [InitializeOnLoad] is probably the best place). See below for more info.
- `string Style`: Custom style name. There is no way to add new styles at this time. There are only alternate styles for Action Blocks available. Do not try change it for Value and Container Blocks. The available styles are: default, grey, red, orange, debug
- `System.Type ContextType`: If set then this Block requires a context block and that block should return a value be of this type.
- `System.Type[] ParamTypes`: Parameters that this Block takes, null if not used. Array must be exactly same length as ParamNames.
- `string[] ParamNames`: Names of the parameters. Array must be set and must be exactly same length as ParamTypes if ParamTypes is used. Name starting with "!" will not be shown in the block.
- `string[] ParamEmptyVal`: If used then it must be same length as ParamTypes and specify empty values to show for the parameters (or null if default value should be shown)
- `int OverrideRenderFields`: 0:no, 1:only-action, 2:only-when-field, 3:both, 4:suppress rendering head.
- `bool IsYieldBlock`: Should be set true by Wait blocks (those which can cause a yield) so that editor can prevent dropping them in events that does not support yielding

**Examples**

Here's some examples from Blox so that you can see how Context and ParamTypes are used. Please ask on the forum if you are not sure about the use of the properties for the Block you are trying to design.

Something interesting you will note with the Maths and Condition Blocks are how they have a 3rd parameter even though you never see or assign to it in the Blox editor. That is because they share Blox Drawers and I used this 3rd parameter as a way to carry data that the drawer needed (the "and", "-", "or", "+", etc operators). Of course if I created a separate Block drawer for each then I would not have created this 3rd entry. I could even have checked which Block I am dealing with `block.GetType() == typeof(AND_Block)` in the drawer and then draw the correct operator without the need for this extra parameter..

```csharp
// The Debug Block
[BloxBlock("Common/Debug", BloxBlockType.Action, Order = 200, OverrideRenderFields = 1, Style = "debug")]
public class Debug_Block : BloxBlock {}

// The Variable Block
[BloxBlock("Common/Variable", BloxBlockType.Action, Order = 200, OverrideRenderFields = 1,
ReturnType = typeof(object),
ParamNames = new string[] { "!value", "in" }, 
ParamTypes = new System.Type[] { typeof(object), typeof(GameObject) })]
public class Variable_Block : BloxBlock {}

// The Comment Block
[BloxBlock("Common/Comment", BloxBlockType.Action, Order = 200, OverrideRenderFields = 1, Style = "grey")]
public class Comment_Block : BloxBlock {}

// One of the Comparison Blocks
[BloxBlock("Comparison/a AND b", BloxBlockType.Value, Order = 100, OverrideRenderFields = 4,
ReturnType = typeof(bool), 
ParamNames = new string[] { "!a", "!b", "and" },  
ParamTypes = new System.Type[] { typeof(object), typeof(object), null })]
public class AND_Block : BloxBlock {}

// A Maths Block
[BloxBlock("Maths/a + b [addition]", BloxBlockType.Value, Order = 500, OverrideRenderFields = 4,
ReturnType = typeof(object), 
ParamNames = new string[] { "!a", "!b", "+" },  
ParamTypes = new System.Type[] { typeof(object), typeof(object), null })]
public class ADD_Block : BloxBlock {}

// The Self: GameObject value Block
[BloxBlock("Values/Self: GameObject", BloxBlockType.Value, ReturnType = typeof(GameObject), Order = 0)]
public class SelfGameObject_Block : BloxBlock {}

// The Loop Block
[BloxBlock("Flow/Loop", BloxBlockType.Container, Order = 310,
ParamNames = new string[] { "with", "from", "while less than" }, 
ParamTypes = new System.Type[] { typeof(plyVar), typeof(int), typeof(int) },
ParamEmptyVal = new string[] { "-no-var-", "0", "0" } )]
public class Loop_Block : BloxBlock {}
```

**Loading Custom Icon**

If you specified a custom icon name then you need to register the icon's texture with Blox as soon as Unity is done compiling scripts or at least before the user will see the Block in the Blox editor. That means the best time would be during `[InitializeOnLoad]`.

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

### Block Properties

Normally you will use the Context and Param Blocks to get data that your Block needs but there is the option to add additional properties via public fields. Be sure to add them to the `CopyTo` function else their values will not carry over if the user copy/cut the Block in the Blox editor. 

The Debug Block makes use of these properties. It has one for the text message you can enter in the Blox Properties panel and also one for the Log type drop-down. 

![](img/blox/18.png)

Blox will serialize the values for these properties as long as you define them as public and they are of the primitive value types or types that Unity can serialize. `GameObject`, `Component`, and other `UnityEngine.Object` types can not be serialized. Rather use Param Blocks to get access to these kind of values (references).

You are responsible for drawing these properties on the Blox Properties Panel if the user is supposed to enter values. See Block Drawer section.

### Functions

All the functions are optional and which ones you use depends on what your Block does.

**protected override void InitBlock()**

WCalled after the block was created and linked at runtime. The `contextBlock` and `paramBlocks` blocks of this block is initialised before this is called so you can safely make calls to them if needed. Will only be called if the Block (and Event) is active.

This is where you can cache some values if needed. Do not cache the GameObject or Components that this Block is running on at the time since Blox does not create a unique copy for each GameObject the Blox is added to. Blox are shared among GameObejct they are on; unlike script components where there is a unique instance of the component for each GameObject. [This design choice might change in the future]

You can also use this function to check if the properties, context block, or param blocks of the Block is valid. if not then simply make a call to `this.LogError(message)` to write an error message to the console and mark the block as invalid. Rather use `LogError` than `Debug.Log` since it will add some additional information to the console which the suer can use to find the Blocks that printed the message. Internally the `isValid` flag will be set False so that `RunBlock()` will not execute.

**protected override object RunBlock()**

This is where your Block does all its work. Will only run if the Block (and event) is active. This will only run if the `isValid` flag is true so setting that flag to False during IniBlock or in this function is a good way to prevent the Block from running again if a serious error occurred.

If the Block can be and is used as a field (Context or param) in another Block then it must return some value. If it will only even be an Action block, like the Debug Block, then simply return null. You can detect whether it is used as a field by simply looking checking if it has an owner.

```csharp
if (this.owningBlock != null)
{
    // this Block is used as context or param of another
    // it should probably return some kind of value
}
else
{
    // this Blocks is standing alone, an Action
}
```

Of course you can simply ignore the check and always return a valid value if your Block can be used as either an Action or Value. The reason you return a value is because another Block, using your Block as a context (or param), could do something like this 

`object target = contextBlock.Run();`.

Similarly, to get values from the context and param blocks you will make a call to Run() to run the target Block and then use the returned value. The `IF` Block for example has one parameter Block and does something like this to get the result. 

`bool result = (bool)paramBlocks[0].Run();`

It can assume the value will be a `bool` since it specified that it should be such a value in its attribute. Note how `paramBlocks` is an array of Blocks. It will be initialised with the umber of parameters you specified in the BloxBlock attribute of this Block.

Be sure to check if an expected Context or Param Blocks is present before using it. If it should always be present then do that check in `InitBlock` and call `LogError` if it is not; but if a user may omit it for a default value then you will want to check and use the default value if it is missing.

For example; most Blocks allow a context for `Self: GameObject` when they expect a GameObject.

`GameObject target = contextBlock == null ? owningEvent.container.gameObject : (GameObject)contextBlock.Run();`

For param blocks you might assume a value of `0` where you expect a number. The `Maths.Abs` Block for example could do something like this.

`float val = paramBlocks[0] == null ? 0.0f : (float)paramBlocks[0].Run();`

![](img/blox/19.png)

**public override void CopyTo(BloxBlock block)**

Only needed when you defined properties (public fields) and want to be able to transfer the values the user entered when the Block is copied or cut.

### The BloxBlock base class

These are the properties and methods available in the BloxBlock base class. I will only list those you should use. The rest are for advanced or internal use.

- `BloxBlock next`: The block following after this one
- `BloxBlock firstChild`: The first child of this Block if this Block is a container block (like the IF and Loop Blocks)
- `BloxBlock contextBlock`: This is the context Block if this Block requires a context (the 1st field shown at the front of the Block)
- `BloxBlock[] paramBlocks`: These are the Blocks used as fields (parameters) of this Block
- `bool isValid`: This will be set false when LogError() is called and the RunBlock() will no be executed again

Functions

- `object Run()`: You will call this on a context or param Block to get some value from it. See RunBlock() section above where I describe it in more detail.
- `void RunChildBlocks()`: This is called by Blocks that has child Blocks. Container Blocks like the `IF` and `Loop` uses this to execute the child Blocks when certain conditions are met.
- `void LogError(string message, System.Exception e = null)`: Use this to show an error message on the console and to set the Block as invalid so that its RunBlock() does not get called again. You can pass an optional Exception object. If you use this in RunBlock() should return immediately after the call tun LogError().
- `void LogWarning(string message)`: This can be used to print the extra Block information that LogError() does without setting the Block as invalid.

Documentation
-------------

Blox can show documentation for Events and Blocks in the Blox Editor's Properties panel. To get your docs in there you simply need to create a text (json) file with a the needed info and request the user to add that file to his BloxDoc settings.

New documentation sources are added in the BloxDoc Settings; menu: `Blox > Settings`; then click on the [BloxDoc] button. In the new window simply add the file to the list and click [Done]. Unity must be restarted.

![](img/blox/17.png)

Have a look at `Assets\plyoung\Blox\editor\res\blocks.txt` for an example of what the file content must look like. Do not add your own to this since those changes will be lost as soon as the user updates to a new version of Blox.

The file is in JSON format. Please check that it loads properly since it is easy to make mistakes in these kind of files (for example leaving a comma in the last entry).

Here's an extract from the included custom Block's BloxDoc file.

The `ident` must be exactly same as the one you specified in the Block's BloxBloxk attribute. The `url` is optional.

The `parameters` entry can be used to add documentation describing each of the parameters of the Block. The `name` should be same as the names you entered in `ParamNames`. The `type` can be any descriptive sentence and does not have to be the exact Type Name. For example, where I require a *plyVar* type for the Loop Block I would simply describe it as a *Variable* here.

```json
{
    "entries": [
        {
            "ident": "Values/Self: GameObject",
            "url": "",
            "doc": "A reference to the GameObject this Blox is currently executing on."
        },
        {
            "ident": "Values/Boolean",
            "url": "https://msdn.microsoft.com/en-us/library/system.boolean",
            "doc": "Represents a Boolean (true or false) value."
        },
        {
            "ident": "Flow/Loop",
            "url": "",
            "doc": "The Loop Block is .....",
            "parameters": [
                {
                    "name": "with",
                    "type": "Variable",
                    "doc": "An optional Variable that will be used as counter."
                },
                {
                    "name": "from",
                    "type": "Integer",
                    "doc": "The value the loop will start counting from."
                },
                {
                    "name": "while less",
                    "type": "Integer",
                    "doc": "The loop will continue until ..."
                }
            ]
        }
    ]
}
```

Block Drawer
------------

Creating a Block Drawer is optional and Blox will use the information from the BloxBlock Attribute to determine how to render the Block if you did not create any Block Drawer. The If, Loop, and many other custom Blocks do not use a Block Drawer. Of course if you want control over how the Block is drawn or if you need the sesr to provide values for Block properties (public fields) then a Block Drawer is needed.

The Block Drawer is an editor-side script. That means it must go in a folder or sub-folder of a folder named `Editor`. The Block drawer must derive from `BloxBlockDrawer` and use the `BloxBlockDrawerAttribute` to describe which Blocks it is a drawer for.

```csharp
using UnityEngine;
using UnityEditor;
using BloxEngine;
using BloxEditor;

namespace MyNamespace
{
    [BloxBlockDrawer(typeof(MyAwesome_Block))]
    public class MyAwesome_BlockDrawer : BloxBlockDrawer
    {
        // this is called when the head part of the Block should be drawn
        // this is where the block's context and name is drawn
        public override void DrawHead(BloxEditorWindow ed, BloxBlockEd bdi)
        {
        }

        // this is where the block's fields (paramBlocks) and their labels are drawn
        public override void DrawFields(BloxEditorWindow ed, BloxBlockEd bdi)
        {
        }

        // this is called when the block can draw in the Blox Editor Properties panel
        public override void DrawProperties(BloxEditorWindow ed, BloxBlockEd bdi)
        {
        }
    }
}
```

You may use the same drawer for more than one block, simply specify them all via the BloxBlockDrawer Attribute. The Maths Blocks for example are all drawn with only one drawer by simply specifying each of them. 

```csharp
[BloxBlockDrawer(typeof(ADD_Block))]
[BloxBlockDrawer(typeof(SUB_Block))]
[BloxBlockDrawer(typeof(etc))]
public class Maths_BlockDrawer : BloxBlockDrawer
```

### BloxBlockDrawer

You will note that each of the functions send the same parameters.

- `BloxEditorWindow ed`: This is a reference to the editor that is making the call to this function. This gives you access to some important functions defined in the BloxEditorWindow class, like DrawBlockContext() and DrawBlockField(). See below.
- `BloxBlockEd bdi`: This is a reference to the Block; or rather, a container of the Block and the associated Block Definition. This provides you with all the information you need about the editor side of the Block. See below for more info on this class.

**DrawHead()**

Here you would normally write the name of the Block `GUILayout.Label("My Awesome Block");` and if it has a Context you will want to render that too. To show the context Block you simply make a call to `ed.DrawBlockContext(null, bdi);`

![](img/blox/20.png)

**DrawFields()**

This is where you can show the Block's fields (paramBlocks) for editing. You could also show other data here. The Debug Block for example shows the message you entered in the properties panel. So using GUI/GUILayouer/GUIEditorLayout functions is what you might use here.

To call a paramBlock (field) to draw is very easy; and remember, you could even call this in the DrawHead() if you wanted. Simply make a call to `ed.DrawBlockField(null, bdi, idx);` where `idx` is the index into the array of defined ParamTypes. So the 1st param would be `0`, the second `1`, etc.

![](img/blox/21.png)

**DrawProperties()**

This is called when the properties panel is drawn for this Block (so only if this Block is selected by the user). You can use this area to draw the edit fields for the properties of your block. The Debug Block for example uses this to allow you to enter the message to show. It also do some other advanced stuff like add/ remove paramBock from here.

Taking the Block example shown at the top of this page those properties might be edited like this ...

```csharp
public override void DrawProperties(BloxEditorWindow ed, BloxBlockEd bdi)
{
    MyAwesome_Block target = (MyAwesome_Block)bdi.b;
    target.someBlockProperty = EditorGUILayout.TextField("Label here", target.someBlockProperty);
    target.anotherOne = EditorGUILayout.IntField("Another one", target.anotherOne);
}
```

![](img/blox/22.png)

### BloxBlockEd

- `BloxBlock b`: The Block. You might want this when drawing the block's properties. See the DrawProperties() example above
- `BloxBlockDef def`: The Block's Definition data
- `BloxBlockEd next`: Block following on this one
- `BloxBlockEd prev`: Block that this one follows on
- `BloxBlockEd firstChild`: First child of this block if it is a container
- `BloxBlockEd parentBlock`: The block this one is used in if this is a child of a container (if null then this is directly under event)
- `BloxBlockEd owningBlock`: The block that owns this one if this is used as a field/ context; else null
- `int fieldIdx`: Only if owningBlock!=null. This is -1: context or 0..n: used as field at index of owner's paramBlocks.
- `BloxBlockEd contextBlock`: The context block of this block. Note that is could be null if user did not insert any block yet
- `BloxBlockEd[] paramBlocks`: The parameter/ field blocks of this block. Note that they might contain null values when user did not insert any block yet in that spot


### Samples

Here's extracts from existing Blocks' drawers to give you an idea of how they can be created.

The `Value > Self:GameObject` Block

```csharp
[BloxBlockDrawer(typeof(SelfGameObject_Block))]
public class SelfGameObject_BlockDrawer : BloxBlockDrawer
{
    private static readonly GUIContent GC_Self = new GUIContent("self: GameObject");

    public override void DrawHead(BloxEditorWindow ed, BloxBlockEd bdi)
    {
        GUILayout.Label(GC_Self, BloxEdGUI.Styles.FieldLabel);
    }

    public override void DrawFields(BloxEditorWindow ed, BloxBlockEd bdi)
    { }

    public override void DrawProperties(BloxEditorWindow ed, BloxBlockEd bdi)
    { }
}
```

The `Common > Debug` Block

```csharp
[BloxBlockDrawer(typeof(Debug_Block))]
public class Debug_BlockDrawer : BloxBlockDrawer
{
    private static readonly GUIContent GC_Head = new GUIContent("Debug");
    private static readonly GUIContent GC_Message = new GUIContent("Message");
    private static readonly GUIContent GC_Info = new GUIContent("Use the [+] and [-] buttons to increase or decrease the number of Block fields to show. These can be used to include additional values in the message.");
    private static readonly GUIContent GC_Add = new GUIContent(Ico._add, "Add a field");
    private static readonly GUIContent GC_Remove = new GUIContent(Ico._remove, "Remove last added field");
    private static readonly GUIContent GC_Comma = new GUIContent(",");

    public override void DrawHead(BloxEditorWindow ed, BloxBlockEd bdi)
    {
        GUILayout.Label(GC_Head, BloxEdGUI.Styles.ActionLabel);
    }

    public override void DrawFields(BloxEditorWindow ed, BloxBlockEd bdi)
    {
        if (bdi.b.paramBlocks == null) bdi.b.paramBlocks = new BloxBlock[0];

        Debug_Block target = (Debug_Block)bdi.b;
        GUILayout.Label(target.message, BloxEdGUI.Styles.FieldLabel);

        if (bdi.paramBlocks.Length > 0)
        {
            for (int i = 0; i < bdi.paramBlocks.Length; i++)
            {
                if (i != 0) GUILayout.Label(GC_Comma, BloxEdGUI.Styles.FieldLabel);
                ed.DrawBlockField(null, bdi, i);
            }
        }
    }

    public override void DrawProperties(BloxEditorWindow ed, BloxBlockEd bdi)
    {
        if (bdi.b.paramBlocks == null) bdi.b.paramBlocks = new BloxBlock[0];

        Debug_Block target = (Debug_Block)bdi.b;
        EditorGUILayout.PrefixLabel(GC_Message);
        target.message = EditorGUILayout.TextField(target.message);
        target.logType = (Debug_Block.DebugBlockLogType)EditorGUILayout.EnumPopup(target.logType);

        EditorGUILayout.Space();
        EditorGUILayout.BeginHorizontal();
        {
            if (GUILayout.Button(GC_Add, plyEdGUI.Styles.MiniButtonLeft, GUILayout.Width(30)))
            {
                ArrayUtility.Add(ref bdi.paramBlocks, null);
                ArrayUtility.Add(ref bdi.b.paramBlocks, null);
                GUI.changed = true;
            }

            GUI.enabled = bdi.paramBlocks.Length > 0;
            if (GUILayout.Button(GC_Remove, plyEdGUI.Styles.MiniButtonRight, GUILayout.Width(30)))
            {
                ArrayUtility.RemoveAt(ref bdi.paramBlocks, bdi.paramBlocks.Length - 1);
                ArrayUtility.RemoveAt(ref bdi.b.paramBlocks, bdi.b.paramBlocks.Length - 1);
                GUI.changed = true;
            }
            GUI.enabled = true;
            GUILayout.FlexibleSpace();
        }
        EditorGUILayout.EndHorizontal();
        GUILayout.Label(GC_Info, plyEdGUI.Styles.WordWrappedLabel);

    }
}
```

The `Flow > Trigger Event` Block

```csharp
[BloxBlockDrawer(typeof(TriggerEvent_Block))]
public class TriggeEvent_BlockDrawer : BloxBlockDrawer
{
    private static readonly GUIContent GC_Head = new GUIContent("Trigger Event");
    private static readonly GUIContent GC_Seconds = new GUIContent("seconds");
    private static readonly GUIContent GC_With = new GUIContent("with");
    private static readonly GUIContent GC_EventsVars = new GUIContent("Events Parameters");
    private static readonly GUIContent GC_Add = new GUIContent(Ico._add, "Add a field");
    private static readonly GUIContent GC_Remove = new GUIContent(Ico._remove, "Remove last field");
    private static readonly GUIContent GC_Param = new GUIContent("");
    private static readonly GUIContent GC_EventVar = new GUIContent(Ico._event_variable);

    public override void DrawHead(BloxEditorWindow ed, BloxBlockEd bdi)
    {
        GUILayout.Label(GC_Head, BloxEdGUI.Styles.ActionLabel);
    }

    public override void DrawFields(BloxEditorWindow ed, BloxBlockEd bdi)
    {
        ed.DrawBlockField(null, bdi, 0);
        ed.DrawBlockField(null, bdi, 1);
        ed.DrawBlockField(null, bdi, 2);
        GUILayout.Label(GC_Seconds, BloxEdGUI.Styles.FieldLabel);

        if (bdi.paramBlocks.Length > 3)
        {
            TriggerEvent_Block target = (TriggerEvent_Block)bdi.b;
            GUILayout.Label(GC_With, BloxEdGUI.Styles.FieldLabel);
            for (int i = 3; i < bdi.paramBlocks.Length; i++)
            {
                GC_Param.text = "param" + (i - 2).ToString() + "=";
                GUILayout.Label(GC_EventVar, BloxEdGUI.Styles.IconLabel);
                GUILayout.Label(GC_Param, BloxEdGUI.Styles.FieldLabel);
                ed.DrawBlockField(null, bdi, i);
            }
        }
    }

    public override void DrawProperties(BloxEditorWindow ed, BloxBlockEd bdi)
    {
        TriggerEvent_Block target = (TriggerEvent_Block)bdi.b;
        GUILayout.Label(GC_EventsVars);
        EditorGUILayout.BeginHorizontal();
        {
            if (GUILayout.Button(GC_Add, plyEdGUI.Styles.MiniButtonLeft, GUILayout.Width(30)))
            {
                ArrayUtility.Add(ref bdi.paramBlocks, null);
                ArrayUtility.Add(ref bdi.b.paramBlocks, null);
                GUI.changed = true;
            }

            GUI.enabled = bdi.paramBlocks.Length > 3;
            if (GUILayout.Button(GC_Remove, plyEdGUI.Styles.MiniButtonRight, GUILayout.Width(30)))
            {
                ArrayUtility.RemoveAt(ref bdi.paramBlocks, bdi.paramBlocks.Length - 1);
                ArrayUtility.RemoveAt(ref bdi.b.paramBlocks, bdi.b.paramBlocks.Length - 1);
                GUI.changed = true;
            }
            GUI.enabled = true;
            GUILayout.FlexibleSpace();
        }
        EditorGUILayout.EndHorizontal();
    }
}
```


Block Script-Gen
----------------

Blox uses [CodeDOM](https://msdn.microsoft.com/en-us/library/y2k85ax6.aspx) to generate scripts so you need to be familiar with how it works to complete this part of a Block. You can leave script-gen out if you are not comfortable with working with it but will have to warn users that they can't use the script-gen when using your Blocks.

Each Block script-gen class must derive from `BloxBlockScriptGenerator` and override some function. It must also have the `BloxBlockScriptGenerator` attribute to describe the target Block the script generator was made for.

```csharp
[BloxBlockScriptGenerator(typeof(My_Block))]
public class My_ScriptGenerator : BloxBlockScriptGenerator
{
    // BloxBlockEd bdi is provided since it is the main script-gen worker and contains some 
    // useful functions to help you while generating scripts

    public override CodeExpression CreateBlockCodeExpression(BloxBlockEd bdi)
    {
        // this is called when the Block is used as an expression. Simply pass back null
        // if it can never be used as an expression. An expression is something which
        // can be used as a field of another expression or statement.
        // A function which can not return a value can not be used as an expression.
        // an IF or While can also not be used as expression.

        return null;
    }

    public override bool CreateBlockCodeStatements(BloxBlockEd bdi, CodeStatementCollection statements)
    {
        // this is called when a statement should be generated a statement is a piece of
        // stand-alone code, like invoking a function or the code for an IF statement or
        // While loop. You need to insert the new statement into tje "statements" param
        // Return False if there was an error or if this Block can't be used as a
        // statement, else True

        return false;
    }
}
```

What your script-gen functions will look like depends on your Block but here are some examples from Blox' script generators.

The `Value > Self:GameObject` Block

```csharp
[BloxBlockScriptGenerator(typeof(SelfGameObject_Block))]
public class SelfGameObject_ScriptGenerator : BloxBlockScriptGenerator
{
    public override CodeExpression CreateBlockCodeExpression(BloxBlockEd bdi)
    {
        // Blox Editor allows for GameObject and Component types to be mixed
        // Check what type is actually expected by the owning Blocks and
        // return best possible match

        System.Type expectedType = bdi.fieldIdx == -1 ? bdi.owningBlock.def.contextType : bdi.owningBlock.ParameterTypes()[bdi.fieldIdx];

        if (expectedType != null && expectedType != typeof(GameObject))
        {
            // change the return type to prevent possible casting code being generated
            bdi.sgReturnType = expectedType;

            // return "this.GetComponent<T>()"
            return new CodeMethodInvokeExpression(new CodeMethodReferenceExpression(new CodeThisReferenceExpression(), "GetComponent", new CodeTypeReference(expectedType)));
        }

        return new CodePropertyReferenceExpression(new CodeThisReferenceExpression(), "gameObject");
    }

    public override bool CreateBlockCodeStatements(BloxBlockEd bdi, CodeStatementCollection statements)
    {
        // can never be used as statement
        return false;
    }
}
```

The `Common > Debug` Block

```csharp
[BloxBlockScriptGenerator(typeof(Debug_Block))]
public class Debug_ScriptGenerator : BloxBlockScriptGenerator
{
    public override CodeExpression CreateBlockCodeExpression(BloxBlockEd bdi)
    {
        // this block can only be used as a statement
        return null;
    }

    public override bool CreateBlockCodeStatements(BloxBlockEd bdi, CodeStatementCollection statements)
    {
        Debug_Block b = (Debug_Block)bdi.b;

        string methodName = "UnityEngine.Debug.";

        if (bdi.paramBlocks == null || bdi.paramBlocks.Length == 0)
        {
            switch (b.logType)
            {
                case Debug_Block.DebugBlockLogType.Log: methodName += "Log"; break;
                case Debug_Block.DebugBlockLogType.Warning: methodName += "Warning"; break;
                case Debug_Block.DebugBlockLogType.Error: methodName += "Error"; break;
            }

            CodeExpression[] parameters = new CodeExpression[1] { new CodePrimitiveExpression(b.message) };
            statements.Add(new CodeExpressionStatement(new CodeMethodInvokeExpression(null, methodName, parameters)));
            return true;
        }
        else
        {
            switch (b.logType)
            {
                case Debug_Block.DebugBlockLogType.Log: methodName += "LogFormat"; break;
                case Debug_Block.DebugBlockLogType.Warning: methodName += "WarningFormat"; break;
                case Debug_Block.DebugBlockLogType.Error: methodName += "ErrorFormat"; break;
            }

            CodeExpression[] parameters = new CodeExpression[bdi.paramBlocks.Length + 1];

            string s = b.message;
            for (int i = 0; i < bdi.paramBlocks.Length; i++)
            {
                s += (i == 0 ? " " : ", ") + "{" + i + "}";
                parameters[i + 1] = BloxScriptGenerator.CreateBlockCodeExpression(bdi.paramBlocks[i]) ?? new CodePrimitiveExpression("null");
            }

            parameters[0] = new CodePrimitiveExpression(s);
            statements.Add(new CodeExpressionStatement(new CodeMethodInvokeExpression(null, methodName, parameters)));
            return true;
        }
    }
}
```	

The `Flow > Trigger Event` Block

```csharp
[BloxBlockScriptGenerator(typeof(TriggerEvent_Block))]
public class TriggerEvent_ScriptGenerator : BloxBlockScriptGenerator
{
    public override CodeExpression CreateBlockCodeExpression(BloxBlockEd bdi)
    {
        return null;
    }

    public override bool CreateBlockCodeStatements(BloxBlockEd bdi, CodeStatementCollection statements)
    {
        // get target object to trigger event in
        CodeExpression targetExpr = null;
        if (bdi.paramBlocks[1] == null)
        {
            // "this.bloxContainer" - there will be a container property on this component (set during awake)
            targetExpr = new CodeFieldReferenceExpression(new CodeThisReferenceExpression(), "bloxContainer");
        }
        else
        {
            // get the target from paramBlock
            CodeExpression paramExpr = BloxScriptGenerator.CreateBlockCodeExpression(bdi.paramBlocks[1]);
            if (paramExpr == null) return false;

            // "BloxUtil.GetComponent<BloxContainer>(target).bloxContainer"
            targetExpr = new CodeFieldReferenceExpression(new CodeMethodInvokeExpression(new CodeMethodReferenceExpression(new CodeTypeReferenceExpression(typeof(BloxUtil)), "GetComponent", new CodeTypeReference(typeof(BloxContainer))), paramExpr), "bloxContainer");
        }

        // [0]:EventName, [1]:Delay, [2]:args
        CodeExpression[] paramExprs = new CodeExpression[bdi.paramBlocks.Length > 3 ? 3 : 2];

        // get event name
        paramExprs[0] = BloxScriptGenerator.CreateBlockCodeExpression(bdi.paramBlocks[0], typeof(string));
        if (paramExprs[0] == null) { Debug.LogError("Event name missing."); return false; }

        // get the delay, if any
        paramExprs[1] = BloxScriptGenerator.CreateBlockCodeExpression(bdi.paramBlocks[2], typeof(float)) ?? new CodePrimitiveExpression(0.0f);

        // add args, if any
        if (bdi.paramBlocks.Length > 3)
        {
            CodeExpression[] initializers = new CodeExpression[bdi.paramBlocks.Length - 3];
            for (int i = 3; i < bdi.paramBlocks.Length; i++)
            {
                CodeExpression valExpr = BloxScriptGenerator.CreateBlockCodeExpression(bdi.paramBlocks[i]) ?? new CodePrimitiveExpression(null);
                initializers[i - 3] = new CodeObjectCreateExpression(typeof(BloxEventArg), new CodePrimitiveExpression("param" + (i - 3)), valExpr);
            }

            paramExprs[2] = new CodeArrayCreateExpression(typeof(BloxEventArg), initializers);
        }

        // call method
        statements.Add(new CodeExpressionStatement(new CodeMethodInvokeExpression(targetExpr, "TriggerEvent", paramExprs)));
        return true;
    }
}
```