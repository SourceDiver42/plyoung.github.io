---
title: plyGame Introduction
keywords: unity3d, plygame, rpg, game, maker
sidebar: plygame_sidebar
toc: false
permalink: plygame-intro.html
folder: plygame
---


Introduction
============

In this section I will quickly go over the various technical aspects of plyGame so that you have a better idea of how it works and how to set up the best work-flow.

Game Flow
---------

[plyBlox](plyblox.html), the Visual Scripting tool, plays a major part in plyGame and can control most of the flow of the game - how player moves between menus, panels, maps, and what gets loaded into scenes. Just about anything that can happen in plyGame can be handled via Events triggered in a Blox object. There are also various Blocks that can be used to access data or send commands to systems/ components in plyGame. The various sections of the documentation will further discuss the Blocks and Events specific to those system, but make yourself familiar with the plyBlox system as you will be using it a lot.

When a game is started the plyGame bootstrap scene needs to load, that is why this should always be the first scene in your build-list (do not change this). Bootstrap will then activate the plyGame [Screens system](screens.html) which will run through the Splash Screens, the language screen (if any) and finally end up in your selected Scene or Custom Screen (as setup in the Screens system editor).

Bootstrap will also make sure that some auto-load prefabs gets instantiated and ready for the game. These are normally internal to various game systems and not something you are concerned with. You will simply notice objects in the hierarchy, at run-time, that you did not add. Do not mess around with these objects as they are added by the internal systems that needs them to function. While we are on the topic of the bootstrap scene, do not edit the bootstrap scene in any way.

What happens next will depend on the loaded scene or custom screen. plyGame is done with the auto-startup procedure.

Folders
-------

After installing plyGame you will notice the "plyoung" folder was created in your project `/Assets/plyoung/`. This is where the plyGame, plyBlox and other resources related to the package is stored. You may rename this folder or move the contents but you should always keep all sub-folders together and not move them around. I suggest you simply leave the "plyoung" folder alone.

When you start using the plyGame editors a data folder called "plyData" will be created `/Assets/plyData/`. This folder should not be renamed or moved "manually". If you need to move it you can open the [plyBlox Settings](plyblox.md#settings) window and use the provided options to move the folder contents. I suggest you simply leave this folder alone.

You will also spot a "Gizmos" folder. Do not move this. Unity requires this folder at this location for the custom gizmos that plyGame draws. If you rename, move or delete it, some gizmos might not show up in the scene view.

Toolbar
-------

plyGame has a convenient toolbar that gives you quick access to some of the more commonly used features. You can open it from the menu: `Tools > PLYoung > plyGame > Show Toolbar` and the dock or position it as you like. When this documentation talks about the Toolbar it will be referring to this toolbar except when states otherwise.

Play & Refresh
--------------

You might have noticed that the Toolbar has its own Play Button. There is also the menu option: `Tools > PLYoung > plyGame > Run Game`. This play button works a bit different from the Unity Play button. With Unity's play button you will start in the scene currently open and being edited. With plyGame's Play Button you will start the game in the same way as the player will experience it, so if you created splash screens and load screens and a menu, etc, you will see all these and go through the same flow as the player would to get in-game.

There is also a Refresh button on the toolbar, just after the Play button. A similar option is on the menu: `Tools > PLYoung > plyGame > Update Build Settings'. This option will force plyGame to update and refresh some settings that it can only do when you tell it to do so. It is generally a good idea to hit this button after adding new scenes or after having created a lot of new Characters or Items and other Objects.

Tags & Layers
-------------

plyGame will set up the tags & layers that it needs and you should not mess with these, especially the position of the named layers. Tags are used at a lesser extend in plyGame so you can generally set these to whatever you want for your GameObjects. Layers are however very important and you should normally not make changes to any layer that plyGame might have selected for a GameObject. You will know plyGame made changes when the object is using a layer other than Default.

