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

This section provides a way to define Attributes. These are normally used to track data about a character; its Health, Attributes, Stats, Talents, etc. You only define attributes here and they are not automatically bound to any of your game characters since Blox Core has not concept of characters. This system mainly exist to be used by plugins which binds these definitions to characters or other objects. 

When you select an attribute you will notice an area where you can create any number of meta properties to describe it. This could be its visible name, a texture for an icon, or a description to show to the player. All the Blox Variable types are supported so you can even link prefabs or other Unity objects here. These should not be values which changes during game play though. These meta properties are mainly to hold data that was entered at edit time and used at runtime.

The meta properties added to one attribute will not be reflected on other. This allows you to create different properties for different attributes or groups of attributes. An attribute's property definitions can be copied and pasted to other attributes to make setup of those attribute's properties faster.