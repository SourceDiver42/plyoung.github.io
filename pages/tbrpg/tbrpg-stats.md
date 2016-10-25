---
title: Turn Based RPG Character Stats
keywords: unity3d, blox, visual scripting, programming, tactical, turn based rpg, tbrpg
sidebar: tbrpg_sidebar
toc: false
permalink: tbrpg-stats.html
folder: tbrpg
---

Character Stats
===============

_TODO: This System does not currently serve any function but will be how you define the attributes and other stats which can be associated with characters_

When you select a stat you will notice an area where you can create any number of meta properties to describe the stat. This could be its visible name, a texture for an icon, or a description to show to the player. All the Blox Variable types are supported so you can even link prefabs or other Unity objects here. These should not be values which changes during game play though. These meta properties are mainly to hold data that was entered at edit time and used at runtime.

The meta properties added to one stat will not be reflected on other. This allows you to create different properties for different stats or groups of stats. A stat's property definitions can be copied and pasted to other stats to make setup of those stats' properties faster.
