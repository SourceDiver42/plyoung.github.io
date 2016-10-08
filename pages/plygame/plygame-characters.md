---
title: plyGame Characters
keywords: unity3d, plygame, rpg, game, maker
sidebar: plygame_sidebar
toc: false
permalink: plygame-characters.html
folder: plygame
---
Characters 
==================

Characters include the Player and Non-Player Characters (NPC) or Actors of a game.

All character objects must have the Actor component and one of the plyGame Character Controller components on it. Additional components might be required, for example NPCs make use of components that can navigate the scene and the player object might require a camera controller too.

Please read the documentation related to the different controllers very carefully so that you do not miss a step that might cause the character to not work.

-----------------------------------------------------------------------------------------------------------------------
### plyBlox ###

The Character System adds new Events and Blocks to plyBlox. Most of the events related to characters will be found under `plyGame > Actor` while the Blocks are in the `Character` group. What is available will change over time and this page will not be updated with all the events and blocks available. Simply have a look below the mentioned categories in the Blox Editor to find out what Events and Blocks are available. They should be self explanatory and has build-in help that shows up in the Blox Editor.

One thing to keep in mind is that the Character events will normally only trigger in Blox of the character or child objects of the character. Child objects include Skills the character knows and the character's Actor Class. This is also indicated in the Event's documentation.
