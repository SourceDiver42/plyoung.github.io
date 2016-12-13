---
title: Turn Based RPG Combat
keywords: unity3d, blox, visual scripting, programming, tactical, turn based rpg, tbrpg
sidebar: tbrpg_sidebar
toc: false
permalink: tbrpg-combat.html
folder: tbrpg
---

Combat
======

Combat will automatically start when an enemy character detects a player party member. Combat will end when there are no more enemies or player characters which can take a valid turn.

Blox Events
-----------

These Events are triggered globally, meaning they can be in a Blox on any GameObject. The Events can be found under `TBRG > Combat`.

- `OnCombatStarted` Called when Combat has started. This is called after the first character's turn started . So OnCombatTurnChange will be called before this.
- `OnCombatEnded` Called when Combat ended.
- `OnCombatTurnChange` Called when it becomes another character's turn.
