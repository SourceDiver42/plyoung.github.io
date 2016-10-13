---
title: Turn Based RPG Camera
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

Note that a `TBRPG` object (menu: `GameObject > Turn Based RPG > Main Controller`) must be present in all game map/ level scenes since it will add the camera to the scene at runtime/ play-time.

You should remove any camera that was automatically added to the scene when you create a new scene.

Properties
----------

```
[Tooltip("Offset the camera pivot by this position. This is useful to have the camera look at the target's head rather than feet.")]
public Vector3 offset = new Vector3(0f, 1.8f, -1f);
[Tooltip("Speed the camera uses to catch up when following a target.")]
public float followSpeed = 7f;
[Tooltip("Enabling this will cause any existing AudioListener object to follow the camera. If there is no existing AudioListener a new one will be created on the camera object. The AudioListener will follow the pivot object of the camera which is closer to the ground than the actual camera object.")]
public bool attachAudioListener = true;

[Header("Rotation")]
[Tooltip("Can this camera be rotated?")]
public bool canRotate = true;		
[Tooltip("Initial rotation.")]
public float rotation = 0f;
[Tooltip("How fast camera can be rotated.")]
public float rotateSpeed = 200f;
[Tooltip("Set to -1 to inverse rotation input, else 1.")]
public float inverseRotation = 1f;
[Tooltip("Minimum allowed rotation angle.")]
public float minRotation = -360f;
[Tooltip("Maximum allowed rotation angle.")]
public float maxRotation = 360f;

[Header("Tilt")]
[Tooltip("Can this camera be tilted up/down?")]		
public bool canTilt = false;
[Tooltip("If this option is on then a tilt angle will be applied relative to the zoom and tilt min/max values when the camera zoom in or out. 'canTilt' should be off if this is on since you do not want the player to control the tilt in such a case.")]
public bool zoomTilt = true;
[Tooltip("Initial tilt.")]
public float tilt = 45f;
[Tooltip("How fast camera can be tilted.")]
public float tiltSpeed = 200f;
[Tooltip("Set to -1 to inverse tilt input, else 1.")]
public float inverseTilt = -1f;
[Tooltip("Minimum allowed tilt angle.")]
public float minTilt = 40f;
[Tooltip("Maximum allowed tilt angle.")]
public float maxTilt = 55f;

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
[Tooltip("How much faster or slower to move the camera when zoomed in relative to when zoomed out.")]
public float TODO_zoomedMoveSpeedMulti = 1f;

[Header("Clipping")]
[Tooltip("This is used to determine if there is an obstacle between the camera and its pivot or follow target. The camera will attempt to auto zoom towards the pivot to get in front of the obstacle. Set this to the collision layers that should be checked.")]
public LayerMask clipCheckMask = 0;
[Tooltip("How fast to move forward when there is an obstacle in the way.")]
public float clipMoveTime = 0.05f;
[Tooltip("How fast to move to original zoom position when no obstacle in way.")]
public float returnTime = 0.4f;
[Tooltip("Determines how wide an area is used to determine if there is an obstacle between the camera and target.")]
public float sphereCastRadius = 0.3f;
[Tooltip("The closest the camera is allowed to get to the target when there is obstacle in way.")]
public float closestDistance = 0.5f;
```