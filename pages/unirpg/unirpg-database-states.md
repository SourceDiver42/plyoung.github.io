---
title: UniRPG Database States
keywords: unity3d, unirpg, rpg, game, maker
sidebar: unirpg_sidebar
toc: false
permalink: unirpg-database-states.html
folder: unirpg
---

[Event]: unirpg-database-events.html
[Actions]: unirpg-actions.html

States
======

![](/img/unirpg/db/win11.png)

States are used to place the Actor in a certain *state*. For example, when the player equips a two-handed weapon you would like to prevent him from equipping a weapon to his off-hand equip slot, in which case you simply define a State that will do that and apply the state to him via an Action.

States can also call Events at specific intervals. In this way you could place an effect on the player, for example, being poisoned.
 
### Basic Settings ### 

You can define a **Screen Name** and supply up to 3 **Icons** and enter a **Description**. It is up to the selected GUI Theme to decide how and which of these fields it uses. UniRPG uses the 1<sup>st</sup> icon to display in various places in the editor, if set.

The **Notes** field is a special field where you can enter some notes or a reminder and is not supposed to be accessed in-game.

The **GUI Helper** is another special field which is used by the selected GUI Theme. The GUI Theme's documentation will indicate if it needs you to fill something into this field.

**Max Instances** is how you tell how many copies of this State may exist on an Actor. If you set this to (0) then an unlimited number can be placed onto the ACtor.

### Definition ## 

Here you choose what the effect of the new State will be. You will see different options depending on what you choose.

**Call Event** is the [Event][] that will be called. An event is something with a list of [Actions][] that are executed when the vent is called.

**Every (seconds)** is at what rate the Event will be called. So here you can set that the Event should be called every 2 seconds, or every 3.6 seconds, etc.

**Auto-remove** is a way to tell the State that it should remove itself from the ACtor after a specific time-out (in seconds). Enter (0) if this should be ignored.




