---
title: UniRPG Camera
keywords: unity3d, unirpg, rpg, game, maker
sidebar: unirpg_sidebar
toc: false
permalink: unirpg-camera.html
folder: unirpg
---

Cameras
=======

![](/img/unirpg/adv/win9.png)

UniRPG allows 3<sup>rd</sup> parties create new Camera Controllers as plugins. The designer can then choose the camera in the main editor window and configure it there.

You can have a look at the scripts in `Assets\UniRPG\Default Assets\Cameras\` to see how the Default Camera(s) are defined.

UniRPG will create the camera GameObject and attach a Camera component, AudioListener and your script/ component to the object. If the designer chose a prefab for the "Camera Prefab" field in the editor, that prefab will rather be instantiate and then your camera script/ component will be added to it. So you should be able to get a reference to the actual camera object by simply calling `cam = gameObject.GetComponent<Camera>();`.

All cameras should derive from the base class `GameCameraBase`. The camera script will look like a typical Component/ Behaviour script but there are a few functions of the base class that you can/ should override.

~~~~~~~~~~ .csharp
using UnityEngine;
using System.Collections;
using UniRPG;

[AddComponentMenu("")]
public class MyCam : GameCameraBase 
{
	public int someVar = 0;

	// it is important that you include this so that all your cameras properties can
	// be correctly copied over to a duplicate camera when the designer choose
	// to make a copy of the camera definition
	public override void CopyTo(GameCameraBase targetCam)
	{
		base.CopyTo(targetCam);
		MyCam cam = targetCam as MyCam;	

		// copy your defined vars/ properties
		targetCam.someVar = this.someVar;
	}

	// this will be called after UniRPG created the camera. the camera will be
	// disabled at this point
	public override void CreatedByUniRPG() 
	{
		// do stuff
	}

	// this will be called after UniRPG activated the camera
	public override void ActivatedByUniRPG() 
	{ 
		base.ActivatedByUniRPG(); 
		// do stuff...
	}

	// this will be called after UniRPG deactivated the camera
	public virtual void DeactivatedByUniRPG()
	{
		base.ActivatedByUniRPG(); 
		// do stuff...
	}

	// rest of your camera's code.. like Start(), LateUpdate(), etc

}
~~~~~~~~~~

###Camera Editor###

The camera's editor script will tell UniRPG about the camera. It will also have an OnGUI() function which UniRPG will call when it wants the camera to show settings that the designer can configure. The editor script will look something like this and should be in a folder or sub folder(s) of a folder called `Editor`.

~~~~~~~~~~ .csharp
using UnityEngine;
using UnityEditor;
using System.Collections;
using UniRPG;

[GameCamera("My Camera", typeof(MyCam))]
public class MyCam_Editor : GameCameraEditorBase
{
	public override void OnGUI(DatabaseEditor ed, GameCameraBase gameCam)
	{
		MyCam cam = gameCam as MyCam;
		// render settings that designer can change
	}
}
~~~~~~~~~~



