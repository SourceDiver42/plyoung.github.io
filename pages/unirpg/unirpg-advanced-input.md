---
title: UniRPG Advanced Input
keywords: unity3d, unirpg, rpg, game, maker
sidebar: unirpg_sidebar
toc: false
permalink: unirpg-advanced-input.html
folder: unirpg
---

Input Binder
============

![](/img/unirpg/adv/win10.png)

An Input Binder is how you tell UniRPG that you would like to receive notifications on input events. The Default GUI Theme and Default Player are some examples of systems that makes use of input binders.

For some sample code you can look at `\Assets\UniRPG\Default Assets\Character\Scripts\DefaultPlayerInputBinder.cs` and `\Assets\UniRPG\Default Assets\GUI\Scripts\DefaultGUIInputBinder.cs`.

The inputs that are defined will show up in the main editor window where a designer can then choose different settings.

To create a new input binder you simply create a new class that uses `InputBinderBase` as base class. You also need to add the `[InputBinder(EditorAutoLoad = true)]` line above the class. You need to override the `GetInputBinds()` function and pass back a list of input binds that are created in this function. This is all that is needed for the UniRPG editor scripts to recognise the new input binder and display it in the main editor window.

At runtime you will have to perform an additional step but before we look at that lets first have a look at a typical input binder's source. This sample code shows how two input definitions are created, the second also passing a parameter to the callback function.

~~~~~~~~~~ .csharp
using UnityEngine;
using System.Collections.Generic;
using UniRPG;

[InputBinder(EditorAutoLoad = true)]
public class MyInputBinder : InputBinderBase
{
	public override List<InputDefinition> GetInputBinds()
	{
		List<InputDefinition> defs = new List<InputDefinition>()
		{	
			// my 1st input definition
			new InputDefinition()
			{
				inputName = "A Unique Name",
				groupName = "A Group Name",
				useOnButtonHeld = true,
				primaryButton = KeyCode.Mouse0,
				secondaryButton = KeyCode.BackQuote,
				callback = Callback1,
			},

			// the 2nd input definition
			new InputDefinition()
			{
				inputName = "Another Unique Name",
				groupName = "A Group Name",
				useOnButtonHeld = true,
				primaryButton = KeyCode.W,
				callback = Callback2,
				callbackParams = new System.Object[] { 1 },
			},
		}
	}

	private static void Callback1(InputManager.InputEvent e, System.Object[] args)
	{
		// do something because input occurred
	}

	private static void Callback1(InputManager.InputEvent e, System.Object[] args)
	{
		int passedParam = (int)args[0];
		// do something because input occurred
	}

}
~~~~~~~~~~

####Input Definition####

The Input Definition has the following properties.

- **isUsed**: not something you will typically set. It is changed depending on the designers choices when selecting to have this definition enabled or not.
- **showInGUI**: a helper to tell the selected GUI Theme that you want this input to be changeable in the Options section of the game (in-game).
- **order**: this helps determine how important the input definition is and if it should receive certain input before another definition when two or more definitions use the same key binds.
- **isActive**: something that is typically used at runtime to deactivate the definition if needed.
- **inputName**: name of the input, for example "Move Forward", "Turn Right", "SkillSlot1", etc. Try to keep this unique.
- **groupName**: group that this input belongs to, "Movement", "Actions", "My GUI", etc. All definitions in an input binder wil lnormally use the same group name but they might sometimes use different group names or even be placed in groups that are defined in other binder too.
- **useOnButtonDown**: tells if this input responds when a button goes down
- **useOnButtonHeld**: tells if this input responds while a button is held
- **useOnButtonUp**: tells if this input responds when a button is released
- **primaryButton**: the primary button/ key to bind to and watched for events
- **secondaryButton**: an optional secondary button to bind to and watched for events
- **callback**: the function which should be called when an event is triggered
- **callbackParams**: optional parameters to send to the called function

####Runtime####

As mentioned, at runtime you will have to tell UniRPG that the Input Binder should be loaded. UniRPG do not automatically load them because they are not all needed at the same time. For example, the player's input binder should only be loaded and used when the player's character is visible and he is controlling it.

Where you make the call to load the input binder will depend on your needs. The Default Camera loads its input binder after it was informed by UniRPG that the camera was created. The default camera then manages the input binder and turn it on or off depending on whether UniRPG turns the camera on or off (there could be more than one camera used in scenes and only one is active at any time). The default player loads the input binder during its "init" stage which occurs right after Unity is done with Awake and Start.

To load a binder you simply call, `InputManager.Instance.LoadInputFromBinder(new MyInputBinder());`
You can also call it like this if you would like to keep track of the binder like the default camera does.

~~~~~~~~~~ .csharp
inputBinder = new DefaultCam1InputBinder();
InputManager.Instance.LoadInputFromBinder(inputBinder);
~~~~~~~~~~

The input binder can be enabled/ disabled by calling `inputBinder.SetActive(true/false);`.