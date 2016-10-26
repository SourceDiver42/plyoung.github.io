---
title: Turn Based RPG Camera
keywords: unity3d, blox, visual scripting, programming, tactical, turn based rpg, tbrpg
sidebar: tbrpg_sidebar
toc: false
permalink: tbrpg-camera.html
folder: tbrpg
---

Camera
======

This controller provides a camera which acts similar to what you would expect in a turn based RPG games like Wasteland 2 or Divinity, Original Sin. It exposes various options so that you can configure how it acts uniquely to your game but the overall design if for a top-down type camera.

The camera can be configured in the BGS Main Window; `Blox > Game Systems Window > TBRPG > Camera`. Please have a look at the [Unity documentation](https://docs.unity3d.com/Manual/class-Camera.html) for information related to the general camera settings found at the bottom of this editor.

Note that a [TBRPG Main](tbrpg-components.html#tbrpgmain) object (menu: `GameObject > Turn Based RPG > Main Controller`) must be present in all game map/ level scenes since it will add the camera to the scene at runtime/ play-time.

You should remove any camera that was automatically added to the scene when you create a new scene.

Properties
----------

- offset: Offset the camera pivot by this position. This is useful to have the camera look at the target's head rather than feet.
- followSpeed: Speed the camera uses to catch up when following a target.
- attachAudioListener: Enabling this will cause any existing AudioListener object to follow the camera. If there is no existing AudioListener a new one will be created on the camera object. The AudioListener will follow the pivot object of the camera which is closer to the ground than the actual camera object.


Rotation

- canRotate: Can this camera be rotated?
- rotation: Initial rotation.
- rotateSpeed: How fast camera can be rotated.
- inverseRotation: Set to -1 to inverse rotation input, else 1.
- minRotation: Minimum allowed rotation angle.
- maxRotation: Maximum allowed rotation angle.

Tilt

- canTilt: Can this camera be tilted up/down?		
- zoomTilt: If this option is on then a tilt angle will be applied relative to the zoom and tilt min/max values when the camera zoom in or out. 'canTilt' should be off if this is on since you do not want the player to control the tilt in such a case.
- tilt: Initial tilt.
- tiltSpeed: How fast camera can be tilted.
- inverseTilt: Set to -1 to inverse tilt input, else 1.
- minTilt: Minimum allowed tilt angle.
- maxTilt: Maximum allowed tilt angle.

Zoom

- canZoom: Can this camera zoom in/out?		
- zoom: Initial zoom.
- inverseZoom: Set to -1 to inverse zoom input, else 1.
- minZoom: Minimum allowed zoom. How close camera can get to its pivot point or follow target.
- maxZoom: Maximum allowed zoom. How far camera can get from its pivot point or follow target.
- zoomSpeed: How much zoom to apply when input occur.
- zoomSmooth: Used to smooth out the zoom.

Pan

- canPan: Can this camera be moved by the player? The camera will stop following any set target if the player moves it manually.
- moveSpeed: How fast camera can be moved by player input.
- TODO_zoomedMoveSpeedMulti: How much faster or slower to move the camera when zoomed in relative to when zoomed out.

Clipping

- clipCheckMask: This is used to determine if there is an obstacle between the camera and its pivot or follow target. The camera will attempt to auto zoom towards the pivot to get in front of the obstacle. Set this to the collision layers that should be checked.
- clipMoveTime: How fast to move forward when there is an obstacle in the way.
- returnTime: How fast to move to original zoom position when no obstacle in way.
- sphereCastRadius: Determines how wide an area is used to determine if there is an obstacle between the camera and target.
- closestDistance: The closest the camera is allowed to get to the target when there is obstacle in way.
