---
title: Turn Based RPG Global and Main
keywords: unity3d, blox, visual scripting, programming, tactical, turn based rpg, tbrpg
sidebar: tbrpg_sidebar
toc: false
permalink: tbrpg-global.html
folder: tbrpg
---

TBRPG Global
============

TBRPG has a Global object which needs to be loaded as soon as possible since it contains references to game data and manages various parts of the game. The best place to put this is in your startup scene. I talk more about the startup sequence and the startup scene in this [video](https://www.youtube.com/watch?v=eFK7cvJQiiQ&list=PLuaBtUXEKcdLEhNpwuBnUQxfKYJHS6PcK&index=13).

The startup scene typically holds objects which are set as DontDestroyOnLoad, meaning they will survive scene loads and will be present for the duration of the game session.

Only add the TBRPG Global to this one scene since it should not be loaded more than once per game session. It can be added via the menu: `Blox > Turn Based RPG > Global Controller`.

A typical startup scene might look something like this after the TBRPG Global and other common objects are added.

![](img/tbrpg/00.png)

This scene should be set to auto-load in the Blox Scenes Setup. This is done by marking it with a (1) meaning it will load first after and a (star) to indicate that it should be auto-loaded whenever you press the Unity Play button to test a game scene (since this scene's objects will most likely be needed by that scene).

![](img/tbrpg/01.png)

TBRPGMain
---------

This component must be in all game scenes/ levels which your player party will explore. The Main Controller will make sure that the party is spawned in the correct spot in the scene and setup and manage various other things which are specific to the scene. 

A GameObject named `[TBRPG]` can be added to the game map/ level scene via menu: `GameObject > Turn Based RPG > Main Controller`.

![](img/tbrpg/02.png)
