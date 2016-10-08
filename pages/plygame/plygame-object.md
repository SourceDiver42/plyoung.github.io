---
title: plyGame Object
keywords: unity3d, plygame, rpg, game, maker
sidebar: plygame_sidebar
toc: false
permalink: plygame-object.html
folder: plygame
---

Objects (Interactable)
==============================

The Interactable Object is something the player can choose to interact with similar to how the player can interact with a friendly NPC like shop keeper. These kind of objects could be doors, chests, or even traps that can be disabled.

To create such an object you simply add `Component > plyGame > Objects > Interact Object` to a GameObject. You will probably want a [plyBlox](plyblox.html) on the the object too so that you can create responses to Events triggered by the interaction. The `plyGame > Object` group contains events that are triggered on the object or character being interacted with while you will also find interact related events in `plyGame > Actor` that are triggered for the character doing the interaction.
