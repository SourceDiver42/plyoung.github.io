---
title: Turn Based RPG Character Prefabs
keywords: unity3d, blox, visual scripting, programming, tactical, turn based rpg, tbrpg
sidebar: tbrpg_sidebar
toc: false
permalink: tbrpg-charfabs.html
folder: tbrpg
---

Character Prefabs
=================

This section is used to define character prefabs. These prefabs will then be avialable in systems which need acces to character rpefabs.

![](img/tbrpg/05.png)

Click on [+] or "Add new group" from the drop-down to create a new Group. You can then click the [+] button again to add a new prefab to this group. 

Each character prefab definition must be given a unique name. You can drag-an-drop an actual Prefab into the second field of the definition.

Meta Properties
---------------

When you select an entry you will notice an area where you can create any number of meta properties to describe it. This could be its visible name, a texture for an icon, or a description to show to the player. All the Blox Variable types are supported so you can even link prefabs or other Unity objects here. These should not be values which changes during game play though. These meta properties are mainly to hold data that was entered at edit time and used at runtime.

The meta properties added to one entry will not be reflected on another. This allows you to create different properties for different entries or groups of entries. An entry's meta properties can be copied and pasted to other entries to make setup of those entries' properties faster.
