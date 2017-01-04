---
title: Attributes
keywords: unity3d, blox, visual scripting, programming, tactical, turn based rpg, tbrpg
sidebar: blox_sidebar
toc: false
permalink: blox-attributes.html
folder: blox
---

Attributes
==========

**This system is under development and not ready for use**

![](img/blox/33.png)

This system provides a way to define Attributes. These are normally used to track data about a character; its Health, Attributes, Stats, Talents, etc. You only define attributes here and they are not automatically bound to any of your game characters since Blox Core has no concept of what characters are. This system mainly exist to be used by plugins which binds these definitions to characters or other objects as needed. 

An attribute consist of a Value and a Max. These are Float values. The Value can never go beyond the Max. Neither can go below 0. Attributes can be used to define a character Health, Level, Experience, Talent level, Intelligence, Strength, etc. It is used for basically anything which would be considered the character's stats.

Settings
--------

- Initial Value: This is the value to initialise this Attribute to at runtime.
	+ modifier: The modifier is used to update the value automatically. For example, updating the Level value when the XP value changes.
- Initial Max: The value to initialise the Attribute's Max to at runtime. This is the maximum value the attribute can reach. For something like Heath this will be the character's max HP and Value should be initialised to this. This is a max value which can change over time. For Strength, Level or XP you would set this to some absolute max the character can even reach during the game.
	+ modifier: The modifier is used to update the max value automatically. For example, changing the Max Health when the character's Level increases.
- Init Value=Max: Should Value be set to Max whenever Max changes? This would normally be enabled for attributes like the character's Health, Stamina, Mana, or other values which can be consumed during a game session. Each time Max is updated the Value will be updated too and 'reset' to the Max value.

Meta Properties
---------------

When you select an entry you will notice an area where you can create any number of meta properties to describe it. This could be its visible name, a texture for an icon, or a description to show to the player. All the Blox Variable types are supported so you can even link prefabs or other Unity objects here. These should not be values which changes during game play though. These meta properties are mainly to hold data that was entered at edit time and used at runtime.

The meta properties added to one entry will not be reflected on another. This allows you to create different properties for different entries or groups of entries. An entry's meta properties can be copied and pasted to other entries to make setup of those entries' properties faster.
