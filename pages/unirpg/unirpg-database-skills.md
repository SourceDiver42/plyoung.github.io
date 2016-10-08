---
title: UniRPG Database Skills
keywords: unity3d, unirpg, rpg, game, maker
sidebar: unirpg_sidebar
toc: false
permalink: unirpg-database-skills.html
folder: unirpg
---

[Attributes]: unirpg-database-attribs.html
[Actions]: unirpg-actions.html
[Advanced]: unirpg-advanced.html

Skills
======

![](/img/unirpg/db/win12.png)

Skill are used as the Skills or Abilities that a player or non-player character has, for example the ability to deal damage via a melee or ranged attack (decrease an attribute value), or the ability/ skill to heal itself or others (increase an attribute value).

Because Skills make use of [Actions][] they could be used to do just about anything since there are Actions to perform a wide variety of things in the game, and it is actually quite easy to add new actions to UniRPG if you are a programmer. See the [Advanced][] section for more information on how to create your own Actions.

### Basic Settings ### 

You can define a **Screen Name** and supply up to 3 **Icons** and enter a **Description**. It is up to the selected GUI Theme to decide how and which of these fields it uses. UniRPG uses the 1<sup>st</sup> icon to display in various places in the editor, if set.

The **Notes** field is a special field where you can enter some notes or a reminder and is not supposed to be accessed in-game.

The **GUI Helper** is another special field which is used by the selected GUI Theme. The GUI Theme's documentation will indicate if it needs you to fill something into this field.

### Definition ### 

![](/img/unirpg/db/win13.png)

The **Valid Targets** field allow you to set what will be valid targets for the skill. If it is a Skill that the player can use on a monster then you will most likely want to have Neutral and Hostile set. If it is a self-heal that the player, or NPC can use then you want to have Self set. If it is a Skill that a monster can use on the player, for example the monster's attack skill, then you want to set the target as Player.

The **Max Target Distance** is how far the targeted object/ actor can be from the user of the skill before the skill will trigger its Actions.

**Cast/ Use Time** determine how longs it takes to perform the skill. You might want to make this about the same length as your animation(s) that will be playing, if any, else they will be cut off when this timer runs out.

**Cooldown Time** is the time it takes, after using the skill, before the skill can be used again. A 1 second time-out is generally a good idea.

**Wait Cast finish** tells if the cooldown timer should wait for the cast timer to first finish. Lets say you have a very long casting spell (10 seconds) but the cooldown is only 1 second then you have the option to set cast time to 10 and cooldown to 1 and enable this option, or you could leave this option off and set the cooldown to 11 since it will start counting down when the cast timer starts.

**Can be Interrupted** : not supported.

**Owner can Interrupt** indicates if the user of the skill can interrupt his own skill or not. If set to false and the player is casting this skill then he will not be able to move until the Skill has finished performing (Use Time).

### On Use ### 

The OnUse Actions is the list of actions that will be performed when the Skill is "used".

Please have a look for detailed information on [Actions][] and the various actions that are available for use. 

The Actions placed into this Event/ Queue List will receive the following Subject Types:

- Self: The user of the skill
- Targeted: The Current target of the user of this skill
- All other types will be invalid, except where [indicated different](actions.html)

Actions are executed in order from top to bottom. In our little example here you can see that the Subject's (Targeted) Health Attribute will be affected (decreased) and then an animation called "attack_swing1" will be started on 'Self' (the user of the Skill). It will be a good idea to make the "Use Time" the same length as this animation but is not necessary since this skill can be "interrupted". The important action, which was almost instant - decreasing the HP, already took place by the time the animation starts.

![](/img/unirpg/db/win14.png)