---
title: UniRPG Database Cameras
keywords: unity3d, unirpg, rpg, game, maker
sidebar: unirpg_sidebar
toc: false
permalink: unirpg-database-cameras.html
folder: unirpg
---

[Advanced Documentation]: unirpg-advanced-camera.html
[Input Settings]: unirpg-database.html#input
[Input Binder]: unirpg-advanced-input.html

Cameras
=======

![](/img/unirpg/db/win21.png)

Here you will define the cameras that are used in your game. There should always be at least one camera  so you will notice that you can't delete the camera if there is only one.

When adding a new camera you will have a chance to select the type of camera. New camera controller can be created and added to UniRPG via the plugin system. Please have look at the [Advanced Documentation][] if you are interested in making new cameras.

All cameras will have an option to change the **Name** and set a **Camera Prefab**.

The Camera Prefab is optional and used if you want to define a Camera GameObject with various other components on it, especially needed for screen effects, or when you want to change the default settings of the Camera component. So you can create your camera object, which should contain at least the Camera component, and then place that prefab here so that it used when the camera object is instantiated.

Each camera type might also have its own [Input Binder][] which will set the Input that can be used with the camera. The input options can be changed in the [Input Settings][] area.

The options to follow will be specific to the Camera Type. I will only discuss the Camera Type(s) that are distributed as part of the UniRPG Core. Any Camera plugins will be documented separately.

DefaultCam1 
-----------

![](/img/unirpg/db/win22.png)

Default Cam 1 is a camera type that will provide a high 3<sup>rd</sup> person type view of the camera and world. It has options to allow the player to rotate the camera and zooming.

**Camera auto-rotate with player**

Does the camera auto rotate to look in the direction the player character is facing?

**Allow Camera Rotation**

Can the player rotate the camera? The default is for the player to hold the right mouse button and then drag the mouse left or right to rotate the camera around the player character. This can be changed in the [Input Settings][].

**Allow Camera Zoom**

Can the player zoom in and out? The default is for the player to use the mouse scroll wheel to zoom in and out. The default camera system also tilts up/ down when applying the zoom.

**Back Distance** is used to placed the camera further or closer from the player.

**Start Angle** is the angle around the player that the camera will start at.

**Center Offset** id the offset to the centre of character (this could be anything, for example the head's position could be the centre) if you change Y to be high enough. If this is not set (0x0x0) then the system will attempt to auto calculate an offset of 1/4 from top of character controller's hight.

**Zoom Speed** is how fast zooming in and out happens.

**Start Distance** is how far back zooming starts.

**Min/Max Zoom Distance** is how far or close can be zoomed to the player character.

**Rotation Stepping** determines is used when calculation a target rotation. So it determine how far you move the mouse to rotate a certain amount.

**Rotation Speed** is how fast the camera will try to reach the target rotation.

**Auto-Rotation Speed** is used when *Camera auto-rotate with player* is on and is how fast the camera will try to catch up to the player's rotation.



