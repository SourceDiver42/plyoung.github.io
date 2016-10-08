---
title: plyGame Misc Components
keywords: unity3d, plygame, rpg, game, maker
sidebar: plygame_sidebar
toc: false
permalink: plygame-misc-components.html
folder: plygame
---


Misc Components
===============

There are various helpers in plyGame that do not warrant their own help page. Those components are listed here.

### Auto-Destroy after Timeout

`Component > plyGame > Misc > Auto-Destroy after Timeout` Can be placed on an object that should auto-destroy itself after a specified time from becoming enabled/ active.

### Auto-Disable after Timeout

`Component > plyGame > Misc > Auto-Disable after Timeout` Can be placed on an object that should auto-disable itself after a specified time from becoming enabled/ active.

### Camera Facing Billboard 

`Component > plyGame > Misc > Camera Facing Billboard` Add this component to any object that should always face the player camera. This is most useful on textured planes that should rotate to face the camera so that the player never see it from the side or back, for example a marker over an NPC's head.

### Distance Based Activation

`Component > plyGame > Misc > Distance Based Activation` Placing this component onto an object will control when that object becomes active or goes inactive. This is useful since you do not want all the objects in the scene, like monsters, to be active all the time, especially when the player won't even notice them. This component works by checking how far the object is from the player and will deactivate it if further than the value you entered for **Inactive Player Distance**. The **Distance Check Timeout** can be used to control how regularly it will check how far the player is from the object (in seconds). When the player comes into range the object will be activated and stay active until the player moves far enough away. 

### Follow Target Object 

`Component > plyGame > Misc > Follow Target Object` Makes the object this is on continuesly update its position and/ or face direction to that of another object.

### Object Cam Relation Fade 

`Component > plyGame > Misc > Object Cam Relation Fade` This can be placed on the player character to have it fade in and out as the camera zoom closer or further from the character object. You can specify an offset that he camera should focus on from the target's position, how close it can come before fading starts and how far it can come before the object is totally hidden.

### OnClick Trigger BloxEvent 

Submitted by RaiuLyn: http://forum.plyoung.com/users/raiulyn

`Component > plyGame > Misc > OnClick Trigger BloxEvent` Should be used on a Unity GUI Button Element (uGUI). It will register with the OnClick Event of the Button and you can specify a Blox Event to trigger in a target plyBlox Component. You can also pass along up to 3 temporary variables to the Blox Event. Note that you would normally register a new OnClick Event in the Button Inspector and simply add the GameObject with a plyBlox component and then use plyBlox.TriggerEvent. This component is a special case where you want to also set the param1, param2, and param3 temporary variables of the triggered Event.

### Persistable Object 

`Component > plyGame > Misc > Persistable Object` This component will be automatically added by those plyGame objects that needs it. It adds persistence to the object, meaning that object can save and restore its own state via the LoadSave System. Note that only components that are LoadSave aware will partake in this. If you are working with the code then you want to look at the `IPersistable` interface for your own components.

### Start Animation when Enable 

`Component > plyGame > Misc > Start Anim State when Enable` Will play (restart) an animation when the object is enabled (set active).

