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

This section provides a way to define Attributes. These are normally used to track data about a character; its Health, Attributes, Stats, Talents, etc. You only define attributes here and they are not automatically bound to any of your game characters since Blox Core has no concept of what characters are. This system mainly exist to be used by plugins which binds these definitions to characters or other objects as needed. 

An attribute consist of a Value and a Max. These are Float values. The Value can never go beyond the Max. Neither can go below 0. Attributes can be used to define a character Health, Level, Experience, Talent level, Intelligence, Strength, etc. It is used for basically anything which would be considered the character's stats.

Settings
--------

- Initial Value: This is the value to initialise this Attribute to at runtime.
- Initial Max: The value to initialise the Attribute's Max to at runtime. This is the maximum value the attribute can reach. For something like Heath this will be the character's max HP and Value should be initialised to this. This is a max value which can change over time. For Strength, Level or XP you would set this to some absolute max the character can even reach during the game.
- Init Value=Max: Should Value be set to Max whenever Max changes? This would normally be enabled for attributes like the character's Health, Stamina, Mana, or other values which can be consumed during a game session. Each time Max is updated the Value will be updated too and 'reset' to the Max value.

Meta Properties
---------------

When you select an attribute you will notice an area where you can create any number of meta properties to describe it. This could be its visible name, a texture for an icon, or a description to show to the player. All the Blox Variable types are supported so you can even link prefabs or other Unity objects here. These should not be values which changes during game play though. These meta properties are mainly to hold data that was entered at edit time and used at runtime.

The meta properties added to one attribute will not be reflected on other. This allows you to create different properties for different attributes or groups of attributes. An attribute's property definitions can be copied and pasted to other attributes to make setup of those attribute's properties faster.
