---
title: Blox Game Global
keywords: unity3d, blox, visual scripting, programming
sidebar: blox_sidebar
toc: false
permalink: blox-gameglobal.html
folder: blox
---

Game Global
===========

Game Global is a helper which provides access to global and commonly used properties. Most of these will also have Blocks which you will find under `GameSystems > GameGlobal` and can also be accessed by the Data Binding system.

**GamePaused**: Set this boolean to True to "pause" the game. Game systems with Player and NPC control are expected to make use of this flag but it is still up to individual systems to decide whether to honour this flag or not. The default state is False.
