---
title: Blox TBRPG Camera
keywords: unity3d, blox, visual scripting, programming
sidebar: blox_sidebar
toc: false
permalink: tbrpg-camera.html
folder: blox
---

TBRPG Camera
============

This controller provides a camera which acts similar to what you would expect in a turn based RPG games like Wasteland 2 or Divinity, Original Sin. It exposes various options so that you can configure how it acts uniquely to your game but the overall design if for a top-down type camera.

The camera can be configured in the BGS Main Window; `Blox > Game Systems Window > TBRPG > Camera`. Please have a look at the [Unity documentation](https://docs.unity3d.com/Manual/class-Camera.html) for information related to the general camera settings found at the bottom of this editor.

TODO

<!--
- **offset**: Offset the camera pivot by this position. This is useful to have the camera look at the target's head rather than feet.
- **followSpeed**: Speed the camera uses to catch up when following a target.
		[Tooltip("Enabling this will move any existing AudioListener object into the camera hierarchy that it follows the camera. Note that it moves the complete object that the AudioListener is on. If there is no existing AudioListener a new one will be created.")]
		public bool attachAudioListener = true;

Rotation

- **canRotate**: Can this camera be rotated?
- **rotation**: Initial rotation.
- **rotateSpeed**: How fast camera can be rotated.
- **inverseRotation**: Set to -1 to inverse rotation input, else 1.
- **minRotation**: Minimum allowed rotation angle.
- **maxRotation**: Maximum allowed rotation angle.

Tilt

- **canTilt**: Can this camera be tilted up/down?
- **zoomTilt**: If this option is on then a tilt angle will be applied relative to the zoom and tilt min/max values when the camera zoom in or out. 'canTilt' should be off if this is on since you do not want the player to control the tilt in such a case.
- **tilt**: Initial tilt.
- **tiltSpeed**: How fast camera can be tilted.
- **inverseTilt**: Set to -1 to inverse tilt input, else 1.
- **minTilt**: Minimum allowed tilt angle.
- **maxTilt**: Maximum allowed tilt angle.

[Header("Zoom")]
[Tooltip("Can this camera zoom in/out?")]		
public bool canZoom = true;
[Tooltip("Initial zoom.")]
public float zoom = 15f;
[Tooltip("Set to -1 to inverse zoom input, else 1.")]
public float inverseZoom = 1f;
[Tooltip("Minimum allowed zoom. How close camera can get to its pivot point or follow target.")]
public float minZoom = 5f;
[Tooltip("Maximum allowed zoom. How far camera can get from its pivot point or follow target.")]
public float maxZoom = 25f;
[Tooltip("How much zoom to apply when input occur.")]
public float zoomSpeed = 400f;
[Tooltip("Used to smooth out the zoom.")]
public float zoomSmooth = 0.1f;

[Header("Pan")]
[Tooltip("Can this camera be moved by the player? The camera will stop following any set target if the player moves it manually.")]
public bool canPan = true;
[Tooltip("How fast camera can be moved by player input.")]
public float moveSpeed = 50f;

[Header("Clipping")]
[Tooltip("This is used to determine if there is an obstacle between the camera and its pivot or follow target. The camera will attempt to auto zoom towards the pivot to get in front of the obstacle. Set this to the collision layers that should be checked.")]
private LayerMask clipCheckMask = 0;
[Tooltip("How fast to move forward when there is an obstacle in the way.")]
private float clipMoveTime = 0.05f;
[Tooltip("How fast to move to original zoom position when no obstacle in way.")]
private float returnTime = 0.4f;
[Tooltip("Determines how wide an area is used to determine if there is an obstacle between the camera and target.")]
private float sphereCastRadius = 0.3f;
[Tooltip("The closest the camera is allowed to get to the target when there is obstacle in way.")]
private float closestDistance = 0.5f;

[Header("Input")]
[Tooltip("The button to hold when wanting to rotate or tilt.")]
public string holdForControlButton = "Fire2";
[Tooltip("The axis to check for rotation input.")]
public string rotateAxis = "Mouse X";
[Tooltip("The axis to check for tilt input.")]
public string tiltAxis = "Mouse Y";
[Tooltip("The axis to check for zoom input.")]
public string zoomAxis = "Mouse ScrollWheel";
[Tooltip("The axis to check for horizontal (left/right) camera panning.")]
public string hMoveAxis = "Horizontal";
[Tooltip("The axis to check for vertical (forward/backward) camera panning.")]
public string vMoveAxis = "Vertical";
-->