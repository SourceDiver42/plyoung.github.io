---
title: UniRPG Advanced Actions
keywords: unity3d, unirpg, rpg, game, maker
sidebar: unirpg_sidebar
toc: false
permalink: unirpg-advanced-actions.html
folder: unirpg
---

[Actions]: unirpg-actions.html

Creating new Actions
====================

Creating new [Actions][] and making them visible to UniRPG is very simple and requires only two scripts.

UniRPG's core Actions can be found in the following locations, if you want to study them.
The Actions, `\Assets\UniRPG\Scripts\Game\Actions\`
and action editors, `\Assets\UniRPG\Editor\Scripts\Wizards\Actions`

Do not place your new actions in these folders. Please follow the best practices as laid out [here](unirpg-advanced.html).

I will explain how an action is made via a little example. For the example we want to create an action that will simply output text to the Unity console. Lets call this action, `PLYDebugAction`, and lets assume it is part of a pack of Actions that I will be creating and distributing, so I will be saving my plugin's scripts in `\Assets\UniRPG Plugins\PLY Actions\`.

The Action Class 
----------------
The first thing you will need is the actual action class, which will do the work. This I will save as `\Assets\UniRPG Plugins\PLY Actions\plyDebugAction.cs`.

The boilerplate code (the skeleton code that all Actions must have) looks something like this.

~~~~~~~~~~ .csharp
using UnityEngine;
using System.Collections;
using UniRPG;

[AddComponentMenu("")]
public class PLYDebugAction : Action
{
	public override void CopyTo(Action act)
	{
		base.CopyTo(act);
		// copy your action's properties to the target action (act)
	}

	public override bool ExecuteWhenLoadSaveRestore()
	{
		// overriding this is OPTIONAL. It return FALSE by default as Action do not normally care about Events fired
		// while the LoadSave System was busy restoring the state of the game.
		// If you do need to have the action executed during LoadSave then return TRUE here.
	}

	public override void Init(GameObject self, GameObject targeted, GameObject selfTargetedBy, GameObject equipTarget)
	{
		// your code here ...
	}

	public override ReturnType Execute(GameObject self, GameObject targeted, GameObject selfTargetedBy, GameObject equipTarget)
	{
		// your code here ...

		return ReturnType.Done;
	}
}
~~~~~~~~~~

All actions *must* be derived from the base class `Action`.

The action does all its work in the Execute() function and then use a ReturnType to indicate that it is done or not, or instruct the Action Queue to do something else, like exit completely.

The Init() function is called for all Actions in the queue/ list just before they are executed one after the other. Note that this is an optional function. This is how an Action can reset or initialise some values that it will be using in Execute. This is only really needed by actions who's Execute() might be called a few times before it is done.

The **ReturnType** tells what UniRPG should do after giving the action a chance to run.

* ReturnType.Done - The action is done and UnIRPG can now execute the next one in the list. An action will use this most of the time.
* ReturnType.CallAgain - The action is not yet done so UnIRPG must call it again in the next Update/ frame. The Delay Action is a good example of why this might be needed.
* ReturnType.Exit - If an action returns this then UniRPG will stop executing the action list/ queue. This means that any actions following after an action that send this will *not* be executed, so be careful how and why you use this.

If you did not know, `[AddComponentMenu("")]` is a way to tell Unity that the script/ component should not show up in Unity's Component menu. It is just a way to keep things neat and not a requirement for Actions.

To complete our example. The designer will enter some text into a field called *text* (in the action's editor, discussed below) and when the action is executed I simply call `Debug.Log(text);`, to print the text and then tell UniRPG that this action is done.

~~~~~~~~~~ .csharp
using UnityEngine;
using System.Collections;
using UniRPG;

[AddComponentMenu("")]
public class PLYDebugLogAction : Action
{
	public string text = "";

	public override void CopyTo(Action act)
	{
		base.CopyTo(act);
		PLYDebugLogAction a = act as PLYDebugLogAction;
		a.text = this.text;
	}

	public override ReturnType Execute(GameObject self, GameObject targeted, GameObject selfTargetedBy, GameObject equipTarget)
	{
		Debug.Log(text);
		return ReturnType.Done;
	}
}
~~~~~~~~~~

-----------------------------------------------------------------------------------------------------------------------
Action Editor Class 
-------------------
Each Action must have an editor. It is how you tell UnIRPG about the action and how you give the user of the action a place to configure it. In our example I would like to give the designer a way to enter some text that must be printed to the Unity console.

The action editor is an editor scripts and therefore it should be in a sub folder called `Edit`. The example action editor script could be saved as, `Assets\UniRPG Plugins\PLY Actions\Editor\plyDebugAction_Ed.cs`. Notice how the script is inside a sub folder called *Editor*. This is very important.

The skeleton code for the action editor looks like this,

~~~~~~~~~~ .csharp
using UnityEngine;
using UnityEditor;
using System.Collections;
using UniRPG;

[ActionInfo(typeof(PLYDebugAction), "Name of Action", Description = "A description of your action or plugin package")]
public class PLYDebugLogAction_Ed : ActionsEdBase
{
	public override string ActionShortNfo(Object actionObj)
	{
		PLYDebugAction action = actionObj as PLYDebugAction;
		return "some string";
	}

	public override void OnGUI(Object actionObj)
	{
		PLYDebugAction action = actionObj as PLYDebugAction;
		// put your editor code here
	}
}
~~~~~~~~~~

![](/img/unirpg/adv/win1.png)

All Action editors must derive from the base class `ActionsEdBase`.

You must specify the `ActionInfo`, it is how you tell UniRPG about the existence of the action. Let look at the different sections of this ActionInfo.

**typeof(PLYDebugAction)** - This tells UniRPG what the new action's class name is.

**"Name of Action"** - Tells UniRPG what the name of the action is and how it is presented to the designer in the Action Window's drop down. You can also group your actions by using a format like this `Group Name/Action Name`. In the image below, the Debug Log Action is grouped under System by providing the name `"System/Debug Log"`.

**Description = "..."** - Here you can enter a description for your Action. It is not required by UnIRPG and is an optional field.

**Functions**

`ActionShortNfo()` is called by UniRPG when it needs to show the Action in the list of actions. You can create any string that should be shown.

![](/img/unirpg/adv/win2.png)

`OnGUI()` is where you add the fields that should be presented to the designer. This is where we will allow the designer to enter the text for our debug log example. The fields here will be shows in the Action wizard. The wizard will create scroll bars if you have a lot of options to show.

![](/img/unirpg/adv/win3.png)

You will notice this line in each of the functions, `PLYDebugAction action = actionObj as PLYDebugAction;`. UniRPG send the action as an Object type to your function and this line is simply how it is cast to the correct type so that you can easily access the variables you defined in the action class.

Finally, our editor script for the sample Action will look like this,

~~~~~~~~~~ .csharp
using UnityEngine;
using UnityEditor;
using System.Collections;
using UniRPG;

[ActionInfo(typeof(PLYDebugLogAction), "PLY Actions/Debug Log", Description = "Shows the text in the Unity Console")]
public class PLYDebugLogAction_Ed : ActionsEdBase
{
	public override string ActionShortNfo(Object actionObj)
	{
		PLYDebugLogAction action = actionObj as PLYDebugLogAction;
		return string.Format("Debug: {0}", action.text);
	}

	public override void OnGUI(Object actionObj)
	{
		PLYDebugLogAction action = actionObj as PLYDebugLogAction;
		action.text = EditorGUILayout.TextField("Text to show", action.text);
	}
}
~~~~~~~~~~
