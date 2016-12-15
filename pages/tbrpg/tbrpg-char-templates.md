---
title: Turn Based RPG Character Templates
keywords: unity3d, blox, visual scripting, programming, tactical, turn based rpg, tbrpg
sidebar: tbrpg_sidebar
toc: false
permalink: tbrpg-char-templates.html
folder: tbrpg
---

Character Templates
===================

Character templates are used to define information about a character which can be spawned in the game. 

![](img/tbrpg/04.png)

Click on [+] or "Add new group" from the drop-down to create a new Group. You can then click the [+] button again to add a new template to this group. 

The template can be named anything you want. This name is only an identifier for the character template and not the name which will be presented to the player (this can be added via Meta Properties later). You should think of Character Templates as describing complete characters, be they Player characters, NPC, or Monsters. Use the group feature to keep the different kind of characters separate.

Attributes
----------

This area allows you to override initial values and even the modifiers of defined [Attributes](blox-attributes.html). 

You could for example use this area to override the modifiers in the Health attribute of a Boss enemy to give it much more health points than it would have from the default definition which might be use the character's level to determine who much max HP it should have.

Meta Properties
---------------

When you select an entry you will notice an area where you can create any number of meta properties to describe it. This could be its visible name, a texture for an icon, or a description to show to the player. All the Blox Variable types are supported so you can even link prefabs or other Unity objects here. These should not be values which changes during game play though. These meta properties are mainly to hold data that was entered at edit time and used at runtime.

The meta properties added to one entry will not be reflected on another. This allows you to create different properties for different entries or groups of entries. An entry's meta properties can be copied and pasted to other entries to make setup of those entries' properties faster.

