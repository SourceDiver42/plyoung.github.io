---
title: Blox Getting Started
keywords: unity3d, blox, visual scripting, programming
sidebar: blox_sidebar
toc: false
permalink: blox-start.html
folder: blox
---

Getting Started
===============

Also see [Blox YouTube play-list](https://www.youtube.com/playlist?list=PLuaBtUXEKcdLEhNpwuBnUQxfKYJHS6PcK) for videos on how to use Blox.

Blox includes the [Blox Game Systems](blox-scenes.html). If you want to use this system then you first need to run menu: `Blox > Check Game Data`, then open the Blox Game Systems editor, menu: `Blox > Game Systems Window` and go to the `Main > Settings` area and make sure `Auto-Load Bootstrap` is on.

Blox Definitions are created and opened via the Blox List panel. menu: `Blox > Blox List`.

![](img/blox/09.png)

A Blox definition is like a Script. It needs to be placed on a GameObject before to apply its behaviour to that script. To add Blox to a script you need a `BloxContainer` component on that GameObject; `Component > Miscellaneous > Blox Visual Script`.

![](img/blox/10.png)

After adding this component you can drag-and-drop Blox from the Blox List onto the GameObject's Inspector or use the [+] button to add the Blox.

![](img/blox/11.png)

Blox are edited in the Blox Editor. This is opened by double-clicking on a definition or using the [edit] button in the Blox List.

Blox need an entry point to executing the included Blocks (actions). This is done by triggering Events. The first thing you need to add the event to respond to.

![](img/blox/12.png)

Next you need to add Blocks (actions) the Event. Which Blocks you use will depend on what it is that must happen when the event is triggered. Blocks are added from the Blocks list to the right-hand side. Simply drag-and-drop them into the canvas. They must be inserted into the event graph to execute.

![](img/blox/13.png)

### Blox Settings

You might note that not all Unity functions are available in the Blocks list by default. It is better not add things you will never use so that the Blocks List and Blox editor load faster.

You can add missing functions and even those from your own scripts or other assets via the Blox settings window; opened by the small gear icon in the Blox editor or menu: `Blox > Settings`.

Click the [Blocks Setup] buttons and you will see a list of namespaces and types to be scanned. By default the UnityEngine namespace is included since all the Unity runtime functions will be in there. This is where you can add the namespace from your own scripts (or * for scripts not in a namespace) or add those from scripts of other assets.

Click the [Scan namespaces] button and a list of all types and members (functions, fields, and properties) that can be turned into Blocks will appear. From this list you can select the ones you want and then press [Save] so that the Blocks are reloaded with your new selection.

![](img/blox/14.png)
