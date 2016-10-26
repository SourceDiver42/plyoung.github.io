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

[TBRPGMain](tbrpg-global.html#tbrpgmain) will ask the HUD Manager (and load the HUD scene if needed) to show the canvases when a game scene was loaded and hide it again when TBRPGMain is destroyed. A game scene is a scene which the player party can explore and where combat takes place.

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