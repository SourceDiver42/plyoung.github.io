---
title: UniRPG Database Classes
keywords: unity3d, unirpg, rpg, game, maker
sidebar: unirpg_sidebar
toc: false
permalink: unirpg-database-classes.html
folder: unirpg
---

[Global Settings]: unirpg-database.html#global
[Attributes]: unirpg-database-attribs.html
[Events]: unirpg-database-events.html

Classes
=======

![](/img/unirpg/db/win15.png)

Classes are how Attributes are connected to Actors (player and non-player characters). There must be at least one Class even if your game do not make of a class based system, so you will not be allowed to delete the class if there is only one defined.

Basic Settings 
--------------
You can define a **Screen Name** and supply up to 3 **Icons** and enter a **Description**. It is up to the selected GUI Theme to decide how and which of these fields it uses. UniRPG uses the 1<sup>st</sup> icon to display in various places in the editor, if set.

The **Notes** field is a special field where you can enter some notes or a reminder and is not supposed to be accessed in-game.

The **GUI Helper** is another special field which is used by the selected GUI Theme. The GUI Theme's documentation will indicate if it needs you to fill something into this field.

Definition 
----------
The **Available at Start** options is a hint to the GUI Theme that you want this Class to be available for selection when the player starts a new game, that is if you allow it in the [Global Settings][] and the GUI Theme honours the setting.

#### Level Settings #### 

![](/img/unirpg/db/win16.png)

If you choose to use the Level System then you need to assign an *Experience Attribute*. This can be any of the attributes you defined, but best would be to call the attribute, *Experience*. This attribute must also be added to the Class' list of attributes.

The **Max Level** should be the absolute maximum level that a character of this class can reach.

The **Max XP** is the total XP that the character must have to reach the *Max Level*. Note that this is linked to the XP Attribute's *Max Base Value* field.

You will also notice a curve/ graph. This tells how Levels relates to XP. Levels are calculated by looking at the value of the Attribute set as the XP attribute. So if Max Level is set to 10 and Max XP is set to 1,000 and you are using a linear curve/ graph then, 326 XP mean the character is at level 3.

If you click on the graph a bigger window will open where you can edit it. Here you can select from predefined curves or customise it by adding keys that you can drag around to change the shape of the curve. The Vertical **(1)** is the **Level**. The Horizontal **(2)** is the **XP**.

*The following is from Unity's documentation on [editing curves](http://docs.unity3d.com/Documentation/Components/EditingCurves.html).*

A key can be added to a curve by double-clicking on the curve at the point where the key should be placed. It is also possible to add a key by right-clicking on a curve and select Add Key from the context menu.

Once placed, keys can be dragged around with the mouse:

* Click on a key to select it. Drag the selected key with the mouse.
* To snap the key to the grid while dragging it around, hold down Command on Mac / Control on Windows while dragging.

It is also possible to select multiple keys at once:

* To select multiple keys at once, hold down Shift while clicking the keys.
* To deselect a selected key, click on it again while holding down Shift.
* To select all keys within a rectangular area, click on an empty spot and drag to form the rectangle selection.
* The rectangle selection can also be added to existing selected keys by holding down Shift.

Keys can be deleted by selecting them and pressing Delete, or by right-clicking on them and selecting Delete Key from the context menu.

**Navigating the Curve View**

When working with the Animation View you can easily zoom in on details of the curves you want to work with or zoom out to get the full picture.

You can always press F to frame-select the shown curves or selected keys in their entirely.

**Zooming**

You can zoom the Curve View using the scroll-wheel of your mouse, the zoom functionality of your trackpad, or by holding Alt while right-dragging with your mouse.

You can zoom on only the horizontal or vertical axis:

zoom while holding down Command on Mac / Control on Windows to zoom horizontally.
zoom while holding down Shift to zoom vertically.
Furthermore, you can drag the end caps of the scrollbars to shrink or expand the area shown in the Curve View.

**Panning**

You can pan the Curve View by middle-dragging with your mouse or by holding Alt while left-dragging with your mouse.

Attributes 
----------

Here you can select which [Attributes][] the Class makes use of (or contains). You do not have to add all or any attributes to the class but they better be there if an Action is looking for them, else you will see errors in the Unity console. For example, a Skill calls an Action which wants to decrease the Health Attribute Value on a Monster non-player character which is linked to a Class that does not include the Health Attribute - will throw an error message.

### Default Values ###

Attributes are connected with an Actor (player and non-player characters) via the Actor Class and you define here the value(s) for the attribute.

The **Base Value** is the value to initialise the Attribute with. The **Min** and **Max** values are the values that the Attribute's Value can reach. You can also select whether this Attribute's Value can regenerate, to the Max value, after a certain time-out and with how much per second. The time-out starts counting down from the last time the Attribute value was changed from an outside source.

As an example, you might define the Health Attribute (HP). You would like the player's health to auto regenerate when he is not in combat. The easiest way to detect the player not being in combat is when he did not take damage (decrease in HP) for a certain amount of time. So you simply set the Time-out to something like 10 seconds and the Health value will start increasing at the specified rate if the player was not hit (HP decreased) in the last 10 seconds.

### Events ###

There are 3 kinds of events that can fire and which can then make calls to [Events][] that you have previously defined. The Event will execute its actions immediately when called by the Attribute.

Example, you might define an Event called \_DEAD\_ and it has all the needed Actions to play the death animation and remove the Actor when its Health reaches zero. This Event would be set to be called by the "On Min Value" event.








