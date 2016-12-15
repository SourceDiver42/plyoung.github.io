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

These settings are found in the `TBRPG > Character` section of the Blox Game Systems [main editor window](blox-bgs.html).

**Movement**

- Sneak Speed: Movement Speed to use when character is sneaking.
- Walk Speed: Movement Speed to use when character is walking.
- Run Speed: Movement Speed to use when character is running.
- Run When Distance: The character will choose the Run Speed when this far from destination. Except when sneaking. Set to 0 to disabled this option.

**Combat**

- Combat Movement: The movement system used during combat.
	+ Action Points: The character can move a certain distance per Action Points spend (AP). The system will keep track of how far the character moved in the same turn and not deduct extra AP if moving only a small lengths. Example; let's assume it costs 1AP to move a total of 3 meters. The player choose to move 2 meter so 1AP is deducted. In the same combat turn the player can move another 1 meter without losing another Action Point since there is still a distance of 1 meter left he could move on the previously spend AP. If however the player moved 2 meter another 1AP is needed before he could move that far.
	+ Distance Based: There is a set distance the character can move per turn. This option is used when it should not cost any AP to move. You will have to bind two attributes below to indicate the normal and max distances the character can move per turn. Normal is when the character can move and use a skill. If the character moves the max distance however then he might not be able to use a skill (depending on further settings).
- Max Distance Per AP: Only when Combat Movement is set to Action Points. How far the character can move per AP spend.
- Normal Moved AP Deduction: Only when Combat Movement is set to Distance Based. This is the amount of Action Points (AP) to deduct when the character moved. The 'Max Moved AP Deduction', below, will subtract additional AP if set. You cna hcoose to leave this to 0 if you only wnat to deduct AP when the character moved further than the normal diatnce, thus only the 'Max Moved AP Deduction' would apply. The normal distance is defined via the Attribute 'Move Distance' below.
- Max Moved AP Deduction: Only when Combat Movement is set to Distance Based. This is the amount of Action Points (AP) to deduct from the character's AP pool when it moved the max distance or part of it (anything higher than normal). This is normally used in combination with a game design where you do not want the character to perform any skills after moving the max distance or be able to use only a sub-set of skills or other actions. For example; a player could have a total of 2AP per turn. It costs 2AP to fire a weapon but if the character moved a max distance you can deduct 2AP and thus prevent the player from using his weapon. You could even select to deduct only 1AP and thus still allow an action which costs only 1AP, for example healing self or using an item from the inventory (of you set these actions to cost only 1AP). The max move distance is defined via the attribute 'Move Distance Max' below.

**Attributes**

Character Attributes can be defined in the [Attributes](blox-attributes.html) editor. Click on the (define attributes) link to be taken to the attributes editor.

In this section you will tell TBRPG which attribute belongs to the required character stats. These must be set up before a character will work properly.

- Health: The character Health (HP). When this reaches 0 the character is considered defeated/ dead.
- Action Points: The attribute representing the character action points (AP). Action Points are used to determine what actions a character can perform during combat. Everything from movement to usage of a skill or an item will require a certain amount of AP to perform. Once all AP is used the character will not be able to perform more actions until AP is restored. AP is normally restored per turn.
- Move Distance: Only when Combat Movement is set to Distance Based. The Attribute Definition representing the character's 'Normal' Combat Movement Distance allowed per turn. The Attrbute's Max Value must be higher than 0. 'Reset value=Max' should be enabled.
- Move Distance Max: Only when Combat Movement is set to Distance Based. The Attribute Definition representing the character's 'Max' Combat Movement Distance allowed per turn. The Attrbute's Max Value must be higher than 0. 'Reset value=Max' should be enabled.


Navigation
----------

TBRPG makes use of the [Unity Navigation system](https://docs.unity3d.com/Manual/Navigation.html). Please familiarise yourself with this system and be sure to create at least a NavMesh before testing a scene else there will be errors related to character movement.

Animation
---------

TBRPG makes use of [Unity Animation System](https://docs.unity3d.com/Manual/AnimationSection.html) (also referred to as mecanim).

The following parameters should be defined in the animator of a character, even if the animator will not make use of the parameters:

- speed: (float) This will be updated with the NavMeshAgent's velocity magnitude and is how you can tell how fast the character is moving. This can be used to determine when a character should play its movement animation. A simple transition can be from idle to walk when the `speed` is greater than 0.4 and then back to idle from walk when it is less than 0.1.
- combat: (bool) Is True while the character is in combat. Could be used to play combat stance animations.
- sneaking: (bool) Is True while the character is in sneak mode.

![](img/tbrpg/08.png)

Sample Character Setup
----------------------

In this example I used the [MCS Female character](https://assetstore.unity3d.com/#!/publisher/13832?aid=1101lGtB).

All you really need to add to a character object is the [Animator](https://docs.unity3d.com/Manual/AnimatorControllers.html) component and add a controller in the Controller property of the Animator.

You might also want to add a NavMeshAgent so that you can configure it. If you do not, one will be added automatically with default settings.

A Capsule Collider can also be added since a Collider will be needed for the character to be selectable and to be able to trigger Triggers in the scene. Again, this will be added automatically but the default settings might not be perfect for your character's shape. 

![](img/tbrpg/09.png)