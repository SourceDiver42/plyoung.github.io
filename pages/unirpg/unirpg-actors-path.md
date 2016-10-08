---
title: UniRPG Actors Path
keywords: unity3d, unirpg, rpg, game, maker
sidebar: unirpg_sidebar
toc: false
permalink: unirpg-actors-path.html
folder: unirpg
---

[Spawn Point]: unirpg-actors-spawn.html

![](/img/unirpg/intro/tbutton5.png) Patrol Path
===========

A Patrol Path can be used by an Non-Player Character (NPC) to move to pre-determined points on a path in the game scene. This can be linked to an NPC via the [Spawn Point][]'s **Action after spawned** option.

A Patrol Path can be created via menu: `gameobject -> create other -> unirpg patrol path` or by using the toolbar button.

![](/img/unirpg/actor/win11.png)

After creating a new Patrol Path you will be presented with a path with 3 points. The points as the destinations that am NPC will try to reach when following the path. You can move the whole path around via its gizmo or select a point on the path and move that where needed. You can also rotate the direction that the points face.

You will also notice that the inspector shows the points as buttons. You can select a point via these buttons or by clicking on them directly in the scene view. The inspector will also show the position and rotation of the selected point. Next to the point's button is an [X] which is used to delete the point.

Use the **Add Patrol Point** button to add a new point. The point will be inserted directly after the currently selected point.

