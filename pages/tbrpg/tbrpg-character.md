---
title: Turn Based RPG Characters
keywords: unity3d, blox, visual scripting, programming, tactical, turn based rpg, tbrpg
sidebar: tbrpg_sidebar
toc: false
permalink: tbrpg-character.html
folder: tbrpg
---

TBRPG Character
===============

The character component handles the movement of player and enemy characters. It also contains references to information describing the character, like the Character Template it is using and the runtime Stats of the character.

Settings
--------

These settings are found in the `TBRPG > Character` section of the Blox Game Systems [main editor window](blox-bgs).

**Movement**

- Sneak Speed: Movement Speed to use when character is sneaking.
- Walk Speed: Movement Speed to use when character is walking.
- Run Speed: Movement Speed to use when character is running.
- Run When Distance: The character will choose the Run Speed when this far from destination. Except when sneaking. Set to 0 to disabled this option.

**Attributes**

Character Attributes can be defined in the [Attributes](blox-attributes) editor. Click on the (define attributes) link to be taken to the attributes editor.

In this section you will tell TBRPG which attribute belongs to the required character stats. These must be set up before a character will work properly.

- Health: The character Health (HP). When this reaches 0 the character is considered defeated/ dead.
- Action Points: The attribute representing the character action points (AP). Action Points are used to determine what actions a character can perform during combat. Everything from movement to usage of a skill or an item will require a certain amount of AP to perform. Once all AP is used the character will not be able to perform more actions until AP is restored. AP is normally restored per turn.

Navigation
----------

TBRPG makes use of the [Unity Navigation system](https://docs.unity3d.com/Manual/Navigation.html). Please familiarise yourself with this system and be sure to create at least a NavMesh before testing a scene else there will be errors related to character movement.

Animation
---------

TBRPG makes use of [Unity Animation System](https://docs.unity3d.com/Manual/AnimationSection.html) (also referred to as mecanim).

The following parameters should be defined in the animator of a character, even if the animator will not make use of the parameters:

- speed: (float) This will be updated with the NavMeshAgent's velocity magnitude and is how you can tell how fast the character is moving. This can be used to determine when a character should play its movement animation. A simple transition can be from idle to walk when the `speed` is greater than 0.4 and then back to idle from walk when it is less than 0.1. The speed at which characters move can be set up in the [Player > Movement](tbrpg-player-setup) section of TBRPG editor window.
- combat: (bool) Is True while the character is in combat. Could be used to play combat stance animations.
- sneaking: (bool) Is True while the character is in sneak mode.

	![](img/tbrpg/08.png)

Enemy
-----

This Component must be on any character which can start combat with the player party.
