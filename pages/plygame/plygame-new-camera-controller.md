---
title: plyGame Creating New Camera Controller
keywords: unity3d, plygame, rpg, game, maker
sidebar: plygame_sidebar
toc: false
permalink: plygame-new-camera-controller.html
folder: plygame
---

Adding new Camera Controller
====================================

The runtime source for plyRPG is available in `\Assets\plyoung\plyRPG\Documentation\plyRPG-src.zip`. Extract this to see some sample classes from the included controllers. 

In plyGame you do not have to use the default camera controller and can easily add your own. Camera control normally go hand-in-hand with the player controller so you might want to also look at the page on [creating character controllers](plygame-new-character-controller.html).

The camera controllers of plyGame is simply Components that you choose to place on the Player character or camera object (or other object), depending on the camera controller's needs.

When creating your own camera controller you do it as you would normally do in Unity, by creating a new Component. There is really not that much to say about this topic.

One thing you need to look out for it plyGame's need to know what camera the player's camera is as it uses this camera reference now and then in various places. You can set the reference in your camera controller's Start() function. Another thing you might want to do, especially if you are going to make calls to plyGame in your controller, it to make sure the GameGlobal is created. 

```csharp
public Camera targetCamera;

protected void Awake()
{
	// make sure global is available, in case user is running scene via Unity play button. 
	GameGlobal.Create();
}

protected void Start()
{
	// tell plyGame this is the player camera
	Player.Camera = targetCamera;
}
```

Finally you need to decide whether you want to make use of plyGame's input manager or not as you could make use of Unity's input class like you would normally. The following sample will make use of [plyGame's Input Manager](input-settings.html). The Input Manager API reference can be found [here](http://www.plyoung.com/api/index.html). 

```csharp
public Camera targetCamera;

// These will hold the cache to the various input definitions used
private int Key_HoldToRotate = -1;
private int Key_RotateAxis = -1;
private int Key_HoldToTilt = -1;

protected void Awake()
{
	// make sure global is available, in case user is running scene via Unity play button.
	GameGlobal.Create();
}

protected void Start()
{
	// tell plyGame this is the player camera
	Player.Camera = targetCamera;

	// need to grab the IDs for the input definitions used by the camera controller
	// the names you pass is as defined in the plyGame main editor. these are the
	// default names that plyGame init the input manager with for 3rd person cam
	Key_HoldToRotate = plyInput.GetInputIdx("Camera 3rd Person/Hold to Rotate");
	Key_RotateAxis = plyInput.GetInputIdx("Camera 3rd Person/Rotate Axis");
	Key_HoldToTilt = plyInput.GetInputIdx("Camera 3rd Person/Hold to Tilt");
}

protected void Update()
{
	// example of how you would check if button held to rotate
	if (plyInput.GetButton(Key_HoldToRotate))
	{
		// example of how you would read the axis value to see if camera should be rotated
		rotationAmount = plyInput.GetAxis(Key_RotateAxis) * rotationSpeed;
	}
}
```
