---
title: plyGame Sound Settings
keywords: unity3d, plygame, rpg, game, maker
sidebar: plygame_sidebar
toc: false
permalink: plygame-sound-settings.html
folder: plygame
---

Sound Settings 
======================

![](/img/plygame/audio/00.png)

plyGame has a way of handling and updating the volume of audio sources for you. The first step is to set the initial volume of the sound types that your game will be using. The editor can be found under *Sound Settings* of the plyGame main editor.

Here you will set what the initial volume should be.

**Main** is the main sound volume of the game. If this is set to 0 then no sound will be audible.

**Music** is used by plyGame to control the volume of music started via the `Audio > plyGame > Music` Block. Of course you can also use it to associate your own audio sources with this volume type.

The other options can be used any way you like. You can pick which of the sound volume types you want to use in your game.

### Settings ###

The plyGame Screens system can play one-shot sound clip when a button element is used. The **screens sound volume type** allows you set how the volume of this clip is determined.

If you do not want plyGame to auto-create a default audio listener then turn off **Auto-create Audio Listener**.

Audio Listener
--------------

![](/img/plygame/audio/01.png)

When the game starts plyGame will create an Audio Listener object in the pyGame Global object. This audio listener can be controller via Blocks in the Audio group. There can only be one audio listener active in a game so do not add your own but rather take control of the default one via blocks. If you want access to it from code you can access it via `GameGlobal.audioListener`.

When you create a new scene you will note that a camera object was created in the scene. This object will also have an audio listener on it. You need to delete this audio listener component else you will get warnings in the console when the game is run.
 

Volume Updater
--------------

This component can be found under menu: `Component > plyGame > Misc > Sound Volume Updater`. You need to add this component to any objects that has an Audio Source for which you want plyGame to handle the volume changes.

You will note that the component gives you an option to choose which sound volume type to associate the Audio Source with. You can also explicitly set which Audio Source this Updater will handle but if you do not set any then the first one on the GameObject will be handled.