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

Navigation
----------

TBRPG makes use of the [Unity Navigation system](https://docs.unity3d.com/Manual/Navigation.html). Please familiarise yourself with this system and be sure to create at least a NavMesh before testing a scene else there will be errors related to character movement.

Animation
---------

TBRPG makes use of [Unity Animation System](https://docs.unity3d.com/Manual/AnimationSection.html) (also referred to as mecanim).

The following parameters should be defined in the animator of a character, even if the animator will not make use of the parameters:

- speed: (float) This will be updated with the NavMeshAgent's velocity magnitude and is how you can tell how fast the character is moving. This can be used to determine when a character should play its movement animation. A simple transition can be from idle to walk when the `speed` is greater than 0.1 and then back to idle from walk when it is less than 0.1
- combat: (bool) Is True while the player party is in combat. Could be used to play combat stance animations.

	![](img/tbrpg/08.png)

Default Party
-------------

The Default Party will be loaded when play testing a scene so you need to add at least one [character template](tbpg-char-templates.html) and associated [character prefab](tbpg-charfabs.html) to have a playable character in the scene while testing.

Settings
--------

Movement

- Click Move Mask: Which layers the player can click on when trying to move the party or a character.
- Click Ray Length: How far the ray should be cast when checking what the player clicked on. Increase this if your camera can zoom out further.
- Party Position Check: Interval at which party members check their positions relative to the leader (seconds).

Detection

- Detection Obstacle: Objects in these layers will be considered obstacles which prevents detection. Useful to prevent enemies on floor above or behind wall from 'detecting' the player when they should not. Do not include the layers the Player or ENemy is on in this mask.
- Detection Range: Range at which Enemy NPC can detect a party member and initialise combat.
- Detection Check: Interval at which detection checks are done (seconds).

Sample Character Setup
----------------------

In this example I used the [MCS Female character](https://www.assetstore.unity3d.com/?asac=MnslCi8JXB#!/publisher/13832).

All you really need to add to a character object is the [Animator](https://docs.unity3d.com/Manual/AnimatorControllers.html) component and add a controller in the Controller property of the Animator.

You might also want to add a NavMeshAgent so that you can configure it. If you do not, one will be added automatically with default settings.

A Capsule Collider can also be added since a Collider will be needed for the character to be selectable and to be able to trigger Triggers in the scene. Again, this will be added automatically but the default settings might not be perfect for your character's shape. 

![](img/tbrpg/09.png)