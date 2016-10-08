---
title: UniRPG Database Attributes
keywords: unity3d, unirpg, rpg, game, maker
sidebar: unirpg_sidebar
toc: false
permalink: unirpg-database-attribs.html
folder: unirpg
---

[Skills]: unirpg-database-skills.html
[Actor Classes]: unirpg-database-classes.html

Attributes
==========

![](/img/unirpg/db/win10.png)

Attributes are not only values that define an Actor (actors include the player character and non-player characters), but values that could be used for other purposes too.

It has been the goal with UnIRPG to create a system which would allow the designer to have as much freedom as possible when creating a game, therefore I decided early on not to create predefined ways of describing systems in the game. That is why the Attributes system exist. It allows the designer to decide what is important value to have on a character.

Attributes can include values such as Health, Intelligence, Wisdom, Mana, XP, and various other values that describes the character. These attributes can be accessed by other systems in UniRPG to decide how to take further action.

The [Actor Classes][] are the main users of Attributes and the way Attributes are linked to Characters.

### Basic Settings ### 

You can define a **Screen Name** and **Short Name** and supply up to 3 **Icons** and enter a **Description**. It is up to the selected GUI Theme to decide how and which of these fields it uses. UniRPG uses the 1<sup>st</sup> icon to display in various places in the editor, if set.

The **Notes** field is a special field where you can enter some notes or a reminder and is not supposed to be accessed in-game.

The **GUI Helper** is another special field which is used by the selected GUI Theme. The Default Fantasy theme for example uses this field to determine which Attributes to list on the character sheet panel. If this field contains *any* text then the attribute will not be shown, so keep this field empty if it is an attribute the player should see on the character sheet.