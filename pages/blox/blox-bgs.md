---
title: Blox Game Systems
keywords: unity3d, blox, visual scripting, programming, tactical, turn based rpg, tbrpg
sidebar: blox_sidebar
toc: false
permalink: blox-bgs.html
folder: blox
---

Blox Game Systems
=================

Blox includes various commonly needed game systems referred to as the Blox Game Systems (BGS). Most of these systems can be configured in BGS Main Editor Window; menu: `Blox > Game Systems Window`.

- [Bootstrap](blox-scenes.html): This handles automatic loading of scenes during game startup.
- [Splash Screens Manager](blox-splash-screens-manager.html): is used to manage the game's splash screens. The main use of this is to add a loading screen which the player will see while waiting for the game's initial scenes and resources to finish loading.
- [Settings Manager](blox-settings-manager.html): Makes is easier to access and manage various game settings like sound volume or graphics resolution and quality.
- [Properties Manager](blox-property-manager.html): The managed properties is mainly used to create a link between values in the settings manager and the UI. It can auto restore saved values during game startup and is thus the way you will handle game settings. It is the main way [UI Updaters](blox-ui-updaters.html) bind to data.
- [Window Manager](blox-window-manager.html): Helps manage visibility of groups of UI elements.
- [UI Updaters](blox-ui-updaters.html): are used to automatically update UI Elements with values or to set values in bound properties when the player make a change in a UI element like a text field, toggle, or slider.
- [Area Trigger](blox-area-trigger.html): The Area Trigger will trigger a Blox Event when an object in the specified layer interacts with it.
- [Attributes](blox-attributes.html): For defining things like character stats, attributes, and other properties and relation between them.


<!--
- [Attribute Definitions](blox-attributes): Provides a way to define and work with attributes or character stats.
- [LoadSave System](#): _TODO: will make it easier to handle saving and restoring game sessions_ 
-->
