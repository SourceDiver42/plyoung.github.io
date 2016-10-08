---
title: plyGame Creating new Character Controller
keywords: unity3d, plygame, rpg, game, maker
sidebar: plygame_sidebar
toc: false
permalink: plygame-new-character-controller.html
folder: plygame
---

Adding new Character Controller 
=======================================

The runtime source for plyRPG is available in `\Assets\plyoung\plyRPG\Documentation\plyRPG-src.zip`. Extract this to see some sample classes from the included controllers. 

All character controllers should be derived from the `CharacterControllerBase` base class. You might however want to derive your Player Controller from the `PlayerBaseController` as it contains some useful helpers and defaults.

The player and camera controllers normally work closely together so you might also want to look at how to [create your own camera controller](plygame-new-camera-controller.html).

Player Controller
-----------------

Via the classes you derive from you will have access to the `Actor` property which gives you access to the `Actor` and `ActorClass` which contains a lot of info about the character, like HP and other Attributes it has, Skills, name, etc.

Your controller needs to tell plyGame that it is the active player when it is ready. This can be done in the Start(). The following code sample will also show you how input IDs are cached for later use. plyGame's Input manager require that you cache the Ids and not make calls by the input definition's name.

Be sure to look at the virtual functions defined in `CharacterControllerBase` and overwrite them as needed.

```csharp
public class MyPlayerController : PlayerBaseController
{
	private int Key_LRMove = -1;
	private int Key_FBMove = -1;
	private int Key_TurnLR = -1;
	private int Key_Jump = -1;

	new protected void Start()
	{
		// call base so it can init too
		base.Start();

		// tell plyGame this is the active player character
		Player.Instance = this;

		// cache some input Ids. The names used here are as defined 
		// in the plyGame Main Editor under input settings
		// and only examples ...
		Key_FBMove = plyInput.GetInputIdx("Player 3rd Person/ForwardBack Move");
		Key_LRMove = plyInput.GetInputIdx("Player 3rd Person/LeftRight Move");
		Key_TurnLR = plyInput.GetInputIdx("Player 3rd Person/LeftRight Turn");
		Key_Jump = plyInput.GetInputIdx("Player 3rd Person/Jump");
	}

	new protected void Update()
	{
		// let PlayerBaseController do what it needs to do
		base.Update();

		// your controller code...

		// example of how to check if player should move forward/ backward
		moved = plyInput.GetAxis(Key_FBMove);

		// jump key pressed?
		if (plyInput.GetButton(Key_Jump))
		{
			// ...
		}
	}
```