---
title: Blox Startup & Scenes
keywords: unity3d, blox, visual scripting, programming
sidebar: blox_sidebar
toc: false
permalink: blox-scenes.html
folder: blox
---

Startup & Scenes
================

![](img/blox/23.png)

This is a list of all the scenes available at runtime.

The two buttons in front of the scene controls auto-loading of scenes. The 1st one is for scenes that represents your splash screens and menus (**StartupScenes**) and the second for scenes that contains objects you want to be auto-loaded too (**AutoLoad**).


The reason there are two ways of marking auto-load scenes is because of the way you play test scenes in Unity. When you press the Unity Play Button the scenes marked with the 1st button (*StartupScenes*) will not be loaded since you would probably want to bypass your splash screens and main menu. The scenes marked with the second one (*AutoLoad*) however will be loaded so that their objects are available to you. Note that they will be loaded in the `Awake()` of the bootstrap so do not rely on these objects during Awake.

The scenes marks via the first button will be loaded first and then the ones marked with the 2nd button. You can also safely mark one scene with both buttons. If it was loaded from the first set then it will not be loaded again. This is useful when you have a scene which must be loaded before any other scenes, so you want to mark it with a [1] in the *StartupScenes* list but you also want it to be loaded when using the Unity Play Button (which would cause the *StartupScenes* to not load).

Under "normal" conditions, for example when you play a final build of the game or use the menu: `Blox > Start Game`, the bootstrap scene will run first. Bootstrap will then immediately load the 1st scene you marked as a *StartupScenes* scene. After that the rest of the *StartupScenes* and the *AutoLoad* will be loaded asynchronously and additivity. No scenes will be automatically unloaded at this point so it is important that you [disable objects](blox-components.html) that should not be visible or active until it is time for them.

You will typically want to mark the scene containing your splash screens and intro movies as the 1st or 2nd *StartupScenes* so that they can show up while other scenes are loading in the background. I mention 2nd since you might have a scene which contains some of your common objects like the AudioListener, a GUI Camera, and EventSystem and would then want to have this one load first. Of course these could be included in the splash screens scene or even the bootstrap scene (I recommend you do not edit the bootstrap scene though) and then marked to [not unload](blox-components.html).

Have a look at the [splash screens manager](blox-splash-screens-manager.html) to learn how to control when splash screens are shown.

Events 
------

The Bootstrap will trigger bother Unity and Blox events. The Blox Events are only triggered in Blox on the same object as the bootstrap component.

- `onBootstrapDone` This is triggered when the bootstrap is done loading scenes and is about to unload the bootstrap scene.
