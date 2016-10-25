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

Character templates are used to define a character which can be spawned in the game. 

![](img/tbrpg/04.png)

Click on [+] or "Add new group" from the drop-down to create a new Group. You can then click the [+] button again to add a new template to this group. 

The template can be named anything you want. This name is only an identifier for the character template and not the name which will be presented to the player (this can be added via Meta Properties later). You should think of Character Templates as describing complete characters, be they Player characters, NPC, or Monsters. Use the group feature to keep the different kind of characters separate.

The meta properties area allows you to define any number of properties to describe the character. This could be its visible name, a texture for the portrait or a background story to show to the player. All the Blox Variable types are supported so you can even link prefabs or other Unity objects here. These should not be values which changes during game play though. Character Stats and Attributes for example will be defined in a separate section.

The meta properties added to one template will not be reflected on other. This allows you to create different properties for different templates or groups of templates. A template's property definitions can be copied and pasted to other templates to make setup of those templates' properties faster.

Character Stats
---------------

TODO

