---
title: UniRPG Actors
keywords: unity3d, unirpg, rpg, game, maker
sidebar: unirpg_sidebar
toc: false
permalink: unirpg-actors.html
folder: unirpg
---


[Classes]: unirpg-database-classes.html
[Items]: unirpg-items.html
[Skills]: unirpg-database-skills.html
[Equip Slots]: unirpg-database.html#slots
[State]: unirpg-database-states.html
[Spawn Point]: unirpg-actors-spawn.html
[Default Character]: unirpg-actors-default.html

Actors
======

**Actor** is the base Component that all character-like objects must contain. When you make an object/ prefab into a Player or Non-Player Character it will also receive this [Component](http://unity3d.com/learn/tutorials/modules/beginner/editor/game-objects-and-components), which will carry all the common data of a character, like its Name, Class, Initial Items, etc.

UniRPG has two character types, the **Default Player** and **Default Non-Player**. Other types will be come available via plugins for UniRPG. Please note that this documentation will cover the default ones and that other characters, from plugins, could differ considerably.

The rest of this page will cover the options available in the inspector for the Actor. Please refer to the [Default Character][] page to learn more about the other options (or the documentation for the character plugin you are using).

 
### Basic Info ### 

![](/img/unirpg/actor/win6.png)

The Actor is broken into several section, the 1<sup>st</sup> being the Basic Info where you can enter a Name, Description, some private notes and assign up to 3 images to the Actor. The images (Portraits) can be any scale and it depends on the GUI Theme how it will use these. The UniRPG editor code will always use the 1<sup>st</sup> image where ever it can show it in the Editor.

The **Available at Start** option is a hint to the GUI Theme that the player can select this Character when starting a new game. Of course the GUI Theme must support this feature. Note that this option is not available on the Actor Component for a Non-Player Character.

As mentioned in the [Classes][] documentation, each Actor must be linked to a class, even if your game makes use of a class-less system. You choose the **Class** for the character under the Basic Info section.

You can specify what the starting **Level** of this Actor should be by setting the **Start XP** it has. The Level and XP will be clamped to whatever maximum values where set in the [Class Editor][Classes].

 
### Initial Items ### 

This is where you specify with what [Items][] the character starts. The section is broken into two areas, the **Equipped** Items and Items in the **Bag**.

The "Slots" you see here is as defined in the Database's [Equip Slots][]. Note that items that need to perform certain actions, like applying a [State][] to the actor, will not be able to do so since no equip actions will be executed from inside the editor. Rather place such an item in the bag so that the player can equip the item when in-game.

Under Bag you can also specify with how much **Currency** the character starts and how many **Bag Slots** are available for storing items.

 
### Equipped Skills ### 

These are the [Skills][] that the character will start with. You will want to set at least a Primary Skill for Non-Player Characters, like monsters, so that they are able to attack (perform a skill against the player).

The **Slots Count** is an indication of how many slots are available to equip on. You will have to make sure this is at least the same number or more than what you set in the GUI Theme's settings when the GUI Theme supports showing an Action Bar with equipped skills.

 
### Starting State ### 

You can add starting [State][]s onto the Actor. Equipping can for example not perform the On Equip actions when you add Initial Items so this allows you a way to place a State onto the Actor that the item might have added. You could of course add states as you see fit for your game design.