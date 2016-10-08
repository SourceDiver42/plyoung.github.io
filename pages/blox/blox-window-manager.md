---
title: Blox Window Manager
keywords: unity3d, blox, visual scripting, programming
sidebar: blox_sidebar
toc: false
permalink: blox-window-manager.html
folder: blox
---

Window Manager
==============

The window manager makes it easier to manage what UI elements should be visible by grouping elements into "windows". You can think of the main menu and settings/ options as a fullscreen windows which can be shown or hidden as needed. The player's status bars and actions panel could all be in one window (the HUD) which is shown when the player is in-game. The inventory/bags, skills panel, etc can all be separate windows which are shown when needed.

You may add more than one Window Manager in the project but keep in mind that the window manager uses objects names to uniquely identify "windows" and will throw a warning if you use duplicate names.

When the Window Manager start, during Awake(), it will disable all managed window objects so that no window is visible initially.

The most common way to show or hide windows is through the `Show/HideWindow()` functions of this component. These can easily be added to a Unity event to show or hide a window when a button is pressed for example.

There are also Blox Blocks for this system which you will find under `BloxGameSystems > UICommon`

![](img/blox/27.png)



