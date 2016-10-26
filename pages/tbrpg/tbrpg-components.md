---
title: Turn Based RPG Components
keywords: unity3d, blox, visual scripting, programming, tactical, turn based rpg, tbrpg
sidebar: tbrpg_sidebar
toc: false
permalink: tbrpg-components.html
folder: tbrpg
---

Components
==========

HUD Manager
-----------

`Component > Blox > GUI > HUD Manager`

The HUD Manager should be on the main object of the GUI HUD scene. Do not use this in any other scenes but the one considered to be the HUD Scene. See TBRPG Settings area for more info on [the HUD Scene's](tbrpg-settings.html) use. A sample HUD scene can be found at `Assets/plyoung/TBRPG/GUI/UI_HUD.unity`.

The HUD has 3 canvases. Their Sort Orders differ so that Canvas 1 will draw over 0, and 2 over 1. UI elements are placed in the different canvases as needed. The canvas objects should be child objects of the HUD manager object.

[TBRPGMain](tbrpg-components.html#tbrpgmain) will ask the HUD Manager (and load the HUD scene if needed) to show the canvases when a game scene was loaded and hide it again when TBRPGMain is destroyed. A game scene is a scene which the player party can explore and where combat takes place.

The HUD scene must be in the list of available scenes as set in [BGS Scenes area](blox-scenes.html) but should not be marked to auto-load somce TBRPGMain will take care of that.

Movement Info Updater
---------------------

`Component > Blox > GUI > Updaters > Movement Info`

This components should be placed on a UI object which is used to provide information about a character's movement during combat. A sample prefab can be found at `Assets/plyoung/TBRPG/GUI/PlayerPathInfo.prefab` and can be seen used in the sample scene `Assets/plyoung/TBRPG/GUI/UI_HUD.unity`.

![](img/tbrpg/11.png)

The object will be shown, and the text elements updated, when there is a valid path. This object is shown near the mouse cursor.

You do not have to specify all of these properties. The missing ones will simply not be used.

- AP Cost Text Obj: The Text object which will be updated with the Action Point (AP) cost to perform the movement.
- Distance Text Obj: The Text object which will be updated with the distance of the calculated path.
- AP Cost String: `{0}AP` The string and format to use when updating the AP Text object. AP is an Integer value. This string allows any formatting supported by [String.Format](https://msdn.microsoft.com/en-us/library/system.string.format).
- Distance String: `{0:F1}m` The string and format to use when updating the Distance Text object. Distance is a Float value. This string allows any formatting supported by [String.Format](https://msdn.microsoft.com/en-us/library/system.string.format).

TBRPG Global
------------

`Blox > Turn Based RPG > Global Controller`

TBRPG has a Global object which needs to be loaded as soon as possible since it contains references to game data and manages various parts of the game. The best place to put this is in your startup scene. I talk more about the startup sequence and the startup scene in this [video](https://www.youtube.com/watch?v=eFK7cvJQiiQ&list=PLuaBtUXEKcdLEhNpwuBnUQxfKYJHS6PcK&index=13).

The startup scene typically holds objects which are set as DontDestroyOnLoad, meaning they will survive scene loads and will be present for the duration of the game session.

Only add the TBRPG Global to this one scene since it should not be loaded more than once per game session. It can be added via the menu: `Blox > Turn Based RPG > Global Controller`.

A typical startup scene might look something like this after the TBRPG Global and other common objects are added.

![](img/tbrpg/00.png)

This scene should be set to auto-load in the Blox Scenes Setup. This is done by marking it with a (1) meaning it will load first after and a (star) to indicate that it should be auto-loaded whenever you press the Unity Play button to test a game scene (since this scene's objects will most likely be needed by that scene).

![](img/tbrpg/01.png)

TBRPGMain
---------

`Blox > Turn Based RPG > Main Controller`

This object must be in all game scenes/ levels which your player party will explore. The Main Controller will make sure that the party is spawned in the correct spot in the scene and setup and manage various other things which are specific to the scene. 

A GameObject named `[TBRPG]` can be added to the game map/ level scene via menu: `GameObject > Turn Based RPG > Main Controller`.

![](img/tbrpg/02.png)

