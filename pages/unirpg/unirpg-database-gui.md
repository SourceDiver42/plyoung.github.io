---
title: UniRPG Database GUI
keywords: unity3d, unirpg, rpg, game, maker
sidebar: unirpg_sidebar
toc: false
permalink: unirpg-database-gui.html
folder: unirpg
---

[Styles]: unirpg-database-gui.html#styles
[Global Settings]: unirpg-database.html#global
[Skills]: unirpg-database-skills.html
[Attributes]: unirpg-database-attribs.html
[Equip Slots]: unirpg-database.html#slots
[Actor]: unirpg-actors.html
[Attribute]: dunirpg-atabase-attribs.html
[Class]: unirpg-database-classes.html#attribs

GUI Themes
==========

![](/img/unirpg/gui/win1.png)

This is where you will find the options for your selected **GUI Theme**. Each Theme will have its own unique options so I will only cover the options available in the **Default Fantasy** theme here.

Basic Settings 
--------------

This Theme uses Unity's OnGUI() to render the GUI.

The **Reset Theme** button can be used to reset this theme to its default values.

The Design Size is the size that the GUI is designed for and used by the Theme to determine how to apply scale to the GUI when a different screen resolution is used.

You can quickly change the look of this Theme by simply applying a compatible skin in the Skin field or making changes to the default skin. A GUi Skin is compatble with the Default Fantasy Theme when it contains all the same Custom Styles that are defined in the default Fantasy GUISkin `Assets\UniRPG\Default Assets\GUI\Fantasy GUISkin`. See [Styles][] section for more information.

Main Menu 
---------

The options here allows you to set a custom Logo to be displayed on the Main Menu. The widt and height field should be the same as your image's size.

![](/img/unirpg/gui/win4.png)
![](/img/unirpg/gui/win3.png)

New Game 
--------

The Character Background field allows you to set a prefab that will be used as the background or "scene" that the characte stands in when selecting a character. This Theme honours the [Global Settings][] and will not allow the player to choose a character, or class or name if you set it such.

When a player choose New Game he will first select a Slot into which the game session will be saved. UniRPG auto saves between scene changes and this Theme also allows a player to choose to save the current session at any time.

![](/img/unirpg/gui/win6.png)
![](/img/unirpg/gui/win5.png)

Load Game 
---------

This option will allow a player to restore a session from a specified Save Slot.

 
Options 
-------

-

 
Action Bar 
----------

Here you can set how the Action Bar acts. The action bar is where the player equip skills. The action bar's slots are also bound to the keys, 1 to 9, and 0. The two slots to the right are for the primary and secondary actions slots which by default binds to the left and right mouse buttons.

The Queued Skill indicator is used when showing the skill that is queued to execute next. By default this is a red frame around the skill slot.

The Out-of-Range indicator is used to show when a skill can't be used on a target because it is not in range. This is by default a translucent red colour over the slot.

The Skill Cooldown animation consists of various frames to show when a skill is in a cooldown state. Have a look at the [Skills][] section to learn more.

The player can either left click on the action bar slot or use the associated bind key (default 1,2..9) to use the skill. A right-click on the action slot will remove the action, which can be equipped again from the player skills panel.

![](/img/unirpg/gui/win7.png)
![](/img/unirpg/gui/win8.png)

 
Status Panels 
-------------

The Status Panels show the status of the player character and the selected NPC (non-player character).

You can set which [Attributes][] should appear in the status panel and what texture to use as "fill colour". There is also options to show the value of the attributes, or a percentage of the value, on the bar. Please note that the [Attributes][] you choose to show should be present in the [Class][] selected for the Actor, else it will not show up correctly.

You will find some default colour textures for the bars and the background in, `Assets\UniRPG\Default Assets\GUI\Art\Common\`.

![](/img/unirpg/gui/win9.png)
![](/img/unirpg/gui/win10.png)

 
Character Sheet 
---------------

The Character Sheet shows the Equip Slots and a list of the Character's Attributes. Clicking on an equip slot will give options to remove or destroy the equipped item. The equip slots are as defined in [Equip Slots][].

If you enter any text into the GUI Helper field of an [Attribute][] then that attribute will not be shown on the Character Sheet. It is a way of telling the Theme which attributes you do not want listed/ visible. The Icons and Description fields of an Attribute are not used by this Theme.

![](/img/unirpg/gui/win11b.png)
![](/img/unirpg/gui/win11.png)

 
Character Bag 
-------------

The Bag contains all the Items the player is carrying. The number of bag slots available are as defined in the [Actor][] Inspector for the player character. Clicking on a bag slot (with an item in it) allows the player to take an action like, use/ equip an item or destroying the item. The Theme uses the 1<sup>st</sup> Icon in the Item's definition to display.

![](/img/unirpg/gui/win12.png)
![](/img/unirpg/gui/win12b.png)

 
Character Skills 
----------------

The Character Skills panel shows all the [Skills][] available to the player. Clicking on a skill allows the player to equip the skill to an action bar slot. The Theme uses the 1<sup>st</sup> Icon in the Skill's definition to display.

![](/img/unirpg/gui/win13.png)
![](/img/unirpg/gui/win13b.png)
    
