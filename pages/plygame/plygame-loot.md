---
title: plyGame Loot Tables
keywords: unity3d, plygame, rpg, game, maker
sidebar: plygame_sidebar
toc: false
permalink: plygame-loot.html
folder: plygame
---

Loot Tables
===================

![](/img/plygame/loot/00.png)

Loot Tables provide a way to define what rewards to give the player when opening a chest or killing a monster. Blocks are used to select which table to use in a loot drop and the loot table's settings will take care of the rest.

The Loot Table can be used to give Item and Attribute rewards. Attribute rewards are normally used when giving the player XP (Experience Points).

Use the (+) button to add a new table. You can also rename the table but note that all tables must have unique names. On the right-hand side you will see a list where you can add the rewards. Choose to ad either an Item or Attribute.

- A. Press this button to select the Item or Attribute that should be given.
- B. This is the amount to give.
- C. The chance of this drop occurring.
- D. Enable this if the NPC level should be checked when deciding if this drop should be awarded. If enabled then this drop will only be given if the NPC level was greater than or equal to the number entered here. If no NPC was specified, when the drop was created, then an NPC level of 0 is assumed.
- E. Indicate if this reward should be grouped. (0) means it is not grouped. Grouped rewards will result in only one of the rewards in the group being chosen as a reward. First one of the rewards in the group is chosen and then the chance and NPC level options are applied to see if the reward is dropped.

The **Add Event** option allows you to add an Event that should be triggered when "dropping loot". You will need to enter the name of an Event to trigger and select in which Blox the event should be triggered. The options for Blox are the Player object and the Subject. Subject is set when you use the `Drop Loot` Block and can be an NPC or any other object. You may also enter a string value for `param1` which will be send on to the Event via its private variable named *param1*.

Blocks under the `Items > Loot` can be used to interact with the Loot Tables.


