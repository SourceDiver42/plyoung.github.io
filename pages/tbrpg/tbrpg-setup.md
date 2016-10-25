---
title: Blox Turn Based RPG Setup
keywords: unity3d, blox, visual scripting, programming, tactical, turn based rpg, tbrpg
sidebar: tbrpg_sidebar
toc: false
permalink: tbrpg-setup.html
folder: tbrpg
---

Setup
=====

The Blox package should be installed before installing the TBRPG package. This documentation will assume you are familiar with using Blox and the Blox Game Systems. Please refer to the Blox [documentation](https://plyoung.github.io/blox.html) and [videos](https://www.youtube.com/playlist?list=PLuaBtUXEKcdLEhNpwuBnUQxfKYJHS6PcK) to learn more about Blox.

Make sure that `Auto-load Bootstrap` is *enabled* in the Blox Settings since TBRPG makes use of the Blox Game Systems.

TBRPG adds various functions and properties which can be turned into Blocks. Open the Blox Settings, click on [Block Setup] and then enter "TBRPGEngine" into the list and click [Scan Namespaces]. After the scan you will be presented with a list of types which can be turned into Blocks. Mark "TBRPGEngine" and then click [Save] to have it added to the available Blocks.

A lot of setup will take place in the Blox Game Systems editor window. This can be opened via menu: `Blox > Game Systems Window` and docked somewhere. The Turn Based RPG related settings will be under the TBRPG and other tabs of this window.

TBRPG has a Global object which needs to be loaded as soon as possible since it contains references to game data and manages various parts of the game. The best place to put this is in your startup scene. I talk more about the startup sequence and the startup scene in this [video](https://www.youtube.com/watch?v=eFK7cvJQiiQ&list=PLuaBtUXEKcdLEhNpwuBnUQxfKYJHS6PcK&index=13).

The startup scene topically holds objects which are set as DontDestroyOnLoad, meaning they will survive scene loads and will be present for the duration of the game session.

Only add the TBRPG Global to this one scene since it should not be loaded more than once per game session. It can be added via the menu: `Blox > Turn Based RPG > Global Controller`.

A typical startup scene might look something like this after the TBRPG Global and other common objects are added.

![](img/tbrpg/00.png)

This scene should be set to auto-load in the Blox Scenes Setup. This is done by marking it with a (1) meaning it will load first after and a (star) to indicate that it should be auto-loaded whenever you press the Unity Play button to test a game scene (since this scene's objects will most likely be needed by that scene).

![](img/tbrpg/01.png)

Game Maps/ Levels
-----------------

Each game map or level, the scenes which your player party will explore, must contain a TBRPGMain Controller. This can be added via menu: `Blox > Turn Based RPG > Main Controller`. Note, this is the Main Controller and not the Global, which should be added to only one scene.

The Main Controller will make sure that the party is spawned in the correct spot in the scene and setup and manage various other things which are specific to the scene.

![](img/tbrpg/02.png)

Player Party
------------

You will have to define at least one character and add it to the Default Player Party before testing game scenes.

Have a look at the [Player Setup](tbrpg-player-setup.html) section to learn more about adding a character since it is a multi-part step.

Further reading
---------------

TBRPG is a big system with many systems to handle various parts of the game. It also relies on systems from the Blox Game Systems. It can't all be covered in one page and you will have to read over the other sections of the [documentation](https://plyoung.github.io/blox.html) to learn more about the various systems and how they fit together to create your game.

TODO
----

Describe a basic game flow/ session from Startup, through Main Menu, and loading a Game Scene. This can only be completed once more supporting systems are in place.









