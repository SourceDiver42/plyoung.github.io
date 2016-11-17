---
title: Turn Based RPG Player Setup
keywords: unity3d, blox, visual scripting, programming, tactical, turn based rpg, tbrpg
sidebar: tbrpg_sidebar
toc: false
permalink: tbrpg-player-setup.html
folder: tbrpg
---

Player Setup
============

Player and party setup.The player and party settings can be found in Blox Game Systems Window under `TBRPG > Player`.

Default Party
-------------

The Default Party will be loaded when play testing a scene so you need to add at least one [character template](tbpg-char-templates.html) and associated [character prefab](tbpg-charfabs.html) to have a playable character in the scene while testing.

Settings
--------

Movement

- Click Move Mask: Which layers the player can click on when trying to move the party or a character.
- Click Ray Length: How far the ray should be cast when checking what the player clicked on. Increase this if your camera can zoom out further.
- Hold Move Min: How close to the character can the hold-move input (hold mouse button down) occur to be valid. Set this to 0 to disable hold-moving.
- Hold Move Interval: (seconds) Checking for hold-move is not done every frame. This interval will determine how often the check is done and character destination adjusted as if a click event occured.
- Party Position Check: (seconds) Interval at which party members check their positions relative to the leader.

Detection

- Detection Obstacle: Objects in these layers will be considered obstacles which prevents detection. Useful to prevent enemies on floor above or behind wall from 'detecting' the player when they should not. Do not include the layers the Player or ENemy is on in this mask.
- Detection Range: Range at which Enemy NPC can detect a party member and initialise combat.
- Detection Check: Interval at which detection checks are done (seconds).

Sample Character Setup
----------------------

In this example I used the [MCS Female character](https://assetstore.unity3d.com/#!/publisher/13832?aid=1101lGtB).

All you really need to add to a character object is the [Animator](https://docs.unity3d.com/Manual/AnimatorControllers.html) component and add a controller in the Controller property of the Animator.

You might also want to add a NavMeshAgent so that you can configure it. If you do not, one will be added automatically with default settings.

A Capsule Collider can also be added since a Collider will be needed for the character to be selectable and to be able to trigger Triggers in the scene. Again, this will be added automatically but the default settings might not be perfect for your character's shape. 

![](img/tbrpg/09.png)