---
title: UniRPG
keywords: unity3d, unirpg, rpg, game, maker
sidebar: unirpg_sidebar
toc: false
permalink: unirpg.html
folder: unirpg
---

[Database]: unirpg-database.html
[Actors]: unirpg-actors.html
[Global Settings]: unirpg-database.html#global
[Items]: unirpg-items.html
[Spawn Point]: unirpg-actors-spawn.html
[Patrol Path]: unirpg-actors-path.html
[Events]: unirpg-database-events.html
[Triggers]: unirpg-triggers.html

UniRPG
======

[Asset Store](https://www.assetstore.unity3d.com/#!/content/51078?aid=1101lGtB) | [Support](http://forum.plyoung.com/c/unirpg)


UniRPG is a tool that will help you create hack&slash type RPG games in Unity. The goal is to provide a tool with which to create a specific genre of game in Unity 3D without doing any code scripting. Full source is provided and the system supports plug-ins when you need to do more or expand on the existing features.

<span class="label label-inverse"><i class="icon-exclamation-sign icon-white"></i> Important</span> This documentation expects a basic understanding of the Unity 3D editor and terms used to describe it. You should head over to [Unity's Learning](http://unity3d.com/learn/tutorials/modules) site if you are new to Unity 3D. I will not explain everything specific to Unity in this documentation.

When talking about accessing something from the Unity 3D menu bar I will write it as; 

**menu: `top_level_menu_option -> child_option -> child_options`**.
ex, menu: `window -> unirpg -> database`.

When talking about accessing areas available in the [UniRPG Main Editor Window][Database] (also know as the Database editor), I will write it as; 

**database: `top_tab -> options_in_that_tab -> perhaps_some_shild_otion`**.
ex, database: `main -> global settings`.

Directories (folder structures/ paths) will be indicated as; **`Assets\folder\folder\...`**.

Getting Started 
===============

It is best to import UniRPG into a new/ clean project and then import any other assets after that until you are familiar with the process. This will also help identify where problems might lay if you encounter any.

<span class="label label-warning"><i class="icon-warning-sign icon-white"></i> Warning</span> You should not attempt to rename or move the UniRPG folders as it will break the tool. These includes, `UniRPG`, `UniRPG Data`, `Gizmos`, and `Editor Default Resources`.

The PLYProto kit is included with UniRPG and can be removed if you do not want to use it. It is simply a bonus package for UniRPG owners and not essential to UniRPG functioning. This documentation might refer to it when showing samples.

The UniRPG features can be accessed via the UniRPG Editor, the Menu and the Inspector, depending on what section you are working on. The sections and how to access them will be covered in detail in other parts of this documentation.

Menu
----

![](/img/unirpg/intro/menu1.png)

While UniRPG's features can be accessed from various parts of the Unity menu it also provides its own top-level menu in Unity's menu, called UniRPG. If you do not see it then you might need to enable it. Having this top-level menu active will make it easier and faster to access the various features of UniRPG.

The menu can be activated by opening the script, ``\Assets\UniRPG\Editor\Scripts\UniRPG\UniRPGEditorMenu.cs`` and uncomment the UNIRPG_MENU_ENABLED define by removing the two forward-slashes (//) in front of it, if any.

Change from ``//#define UNIRPG_MENU_ENABLED`` to ``#define UNIRPG_MENU_ENABLED``

Toolbar 
-------

![](/img/unirpg/intro/toolbar1.png)

The UniRPG Toolbar will give you quick access to commonly used areas, like opening the main UniRPG Editor window. You can activate the toolbar from menu: `window -> unirpg -> toolbar` or the UniRPG menu: `unirpg -> show toolbar`. The toolbar will appear as a floating window which you can then dock. A good spot is to the side of the Scene View.

### Toolbar Buttons ###


![](/img/unirpg/intro/tbutton1.png) This button will open the main UniRPG Editor window. See the [Database][] section for more information on this. This is a shortcut for menu: `window -> unirpg -> database`.

![](/img/unirpg/intro/tbutton2.png) This is the main way of running the game in the editor. This will make sure the game starts similar to how you would expect a player to experience it when starting the game. This is a shortcut for menu: `edit -> run unirpg game`. Note that you can still use the Unity play button to test scenes and if it is a UniRPG game scene then that scene will be loaded correctly for quick testing. Just don't expect everything to work correctly, for example you will play with a default character, which you need to set in the [UnIRPG Editor window][Database]. When I talk about **playing the game** in this documentation I will be referring to starting the game via this button and not the normal Unity Play Button (which is used to play the currently open scene).

![](/img/unirpg/intro/tbutton6.png) This button will cause the Cache to be refreshed. This will for example look for all your Actor (Player and Non-Player Character) and RPG Item definitions (prefabs) in the project folder.

![](/img/unirpg/intro/tbutton3.png) UniRPG expect certain GameObjects and Components to be present in a **Game Scene**. A Game Scene is the maps that your player plays on. This button will help you quickly create a new Game Scene and then add it to the UniRPG Database. This is a shortcut for menu: `assets -> create -> unirpg scene`. Refer to the section, Game Scenes, for more information.

![](/img/unirpg/intro/tbutton4.png) This will help you add a new **Spawn Point** to the Game Scene and is a shortcut for menu: `gameobject -> create other -> unirpg spawn point`. Please look at the [Spawn Point][] section for more information on Spawn Points.

![](/img/unirpg/intro/tbutton5.png) This button helps you add a new **Patrol Path** to the Game Scene. A Patrol Path is mostly used by the AI of an NPC to navigate when it logic is set to follow a specific path. This is a shortcut for menu: `gameobject -> create other -> unirpg patrol path`. Please refer to the [Patrol Path][] section for more information on Patrol Paths.

![](/img/unirpg/intro/tbutton7.png) This button helps you add a new **Trigger** to the Game Scene. A trigger is used to trigger specific events. This is a shortcut for menu: `gameobject -> create other -> unirpg trigger`. Please refer to the [Triggers][] section for more information.

Preferences 
-----------

![](/img/unirpg/intro/prefs.png)

UniRPG has a few options that you should set in the Unity Preferences window. menu: `edit -> preferences...`

**Auto-load 3D previews** allows you to set whether you wnat the such previews in the scene or not. The Spawn Points for example can load a preview of the Character it will spawn.

**Floor Layer-Mask** should be set to whatever layer your floor/ terrain is set to, to help the UniRPG placement tools figure out the best way to place something. The Spawn Point uses this to calculate how to correctly place the Spawn in the scene when you press the button on the toolbar. If this was not set then the Spawn Point might float under or above the terrain depending on ow you where viewing the scene when the Spawn Point was placed.

New Game 
--------

![](/img/unirpg/intro/tbutton1.png) The 1<sup>st</sup> thing you will need is a UniRPG Database. Simply click on the toolbar button to open the UniRPG Main Editor window or from the menu: `window -> unirpg -> database`. If there is no Database, one will be created in the Assets folder under `Assets\UniRPG Data`.

<span class="label label-warning"><i class="icon-warning-sign icon-white"></i> Warning</span> Do not delete or rename the **UniRPG Data** folder as it will break your game. You may delete the folder if you wish to start over or simply select from the menu: `assets -> unirpg database -> reset`.

Please have a look at the [Database][] section for more information on how to configure your game on the UniRPG Main Editor Window as there is a lot to explain.

![](/img/unirpg/intro/tbutton2.png) If you press the **UniRPG Play Button** now you should see the default splash screens come up and then an error, depending on whether you configured the game correctly or not. The error will be related to no default player character being set. Have a look at the [Global Settings][] to see how this should be configured.

Now that the Global Settings are set up you should be able to press the UniRPG Play Button and get up to where you see the game menu. Clicking on New Game now should give an error seeing as you did not yet create and added any Game Scenes to the Database. See the next section on adding game scenes.

![](/img/unirpg/intro/play1.png)

Game Scene 
----------

As mentioned before, the players will play in what is called a UniRPG Game Scene. This is the scenes where you create your terrain, place buildings, monsters and other NPCs, objects and items, etc.

The easiest and safest way to create a UnIRPG Game Scene is to use the toolbar button or from the menu: `assets -> create -> unirpg scene`.

If yo uwould like to turn an existin gscene into a UniRPG Game Scene then simply drag the UniRPG prefab int oyour scene. The rpefab can be found in `Assets\UniRPG\Default Assets\Prefabs\`. You should remove any cameras that are presnet in the game scene since UniRPG manage [cameras](unirpg-database-cameras.html).

All scenes that should be available to your game must appear in the UnIRPG Database, under `Main -> Project Scenes`. These include the interface (<abbr title="Graphical User Interface, like the Menu and HUD">GUI</abbr>) scenes, helper and UniRPG specific scenes, and the Game Scenes. You can add and remove Game Scenes in the editor window, further explained in the [Database][] section.

The 1<sup>st</sup> scene in the Game/Map Scenes will be the one loaded when the player starts a new game. If you try to play the game now you might still get an error when you choose the "new game" option form the in-game menu. You need to press the **Update Build Settings and Globals** button in database: `main -> project scenes` once so that everything is configured correctly in Unity. This button will for example setup the Unity Build Settings scene list which must contain all scenes that can be accessed by game code/ scripts.

![](/img/unirpg/intro/db1.png)

Now that everything is configured correctly you should be able to launch into your game map and run around, assuming you placed a floor and the player is not going to fall. Please read on to lean some basics of creating a game scene.

![](/img/unirpg/intro/play2.png)

### Game Scene Basics ###

You now know to use the UniRPG options to create a new Game Scene. This will add the UniRPG game object, with some component(s) on it, to the scene. Game scenes should not include any active cameras. Please look at the [Cameras](unirpg-database-cameras.html) documentation to se ehow you define the camera to be used in the game.

Your game scene will need some kind of floor for the player and monsters to move on else they will be in an endless falling state. This floor can be anything that a CharacterController can collide with, for example the default Unity Terrain or a mesh object with a collider on.

Look at the other sections of this documentation to see how to add certain game elements, like [Monsters][unirpg-actors] or [Items][] to the game and game scene(s). 