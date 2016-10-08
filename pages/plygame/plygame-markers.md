---
title: plyGame Markers
keywords: unity3d, plygame, rpg, game, maker
sidebar: plygame_sidebar
toc: false
permalink: plygame-markers.html
folder: plygame
---

Markers 
===============

![](/img/plygame/markers/01.png)

plyGame's Markers System provides a way to create and add markers that can be used in various situations. One of the most common uses is with the Player Selectors which are used when showing what the player has currently selected via a marker at the feet of the targeted character or object. Another use is to highlight quest givers, shop keeper NPCs, etc. The Marker specific Blocks make it possible to use them in many different situations.

A marker can be any kind of object from a simple textured plane to a [projector](http://docs.unity3d.com/Documentation/Components/class-Projector.html) or animated model.

To create a marker you simply add the Marker component to the prefab, `Component > plyGame > Objects > Marker`

The Markers System adds various Blocks to plyBlox under the `Render` group.
 

Editor Window
-------------

![](/img/plygame/markers/00.png)

Only Prefabs will be collected as markers and you can view all detected markers in the plyGame Editor Window under the Markers tab. The **Refresh** button can be used to force a refresh of the list if it seems like one of your markers where not found. Remember, scene objects can't be markers, only prefabs can be.

The Markers Editor panel might contain other options in its menu, for example the **Player Selectors** option. These are normally systems that makes use of Markers and uese this editor panel to integrate their settings so that everything related to markers can be setup in one place.
 

### Player Selectors 

The selectors used to indicate what the player has selected/ targeted can be configured here. You simply select from the list of defined markers the one(s) that should be used. If you do not want a marker for a specific selection then simply do not choose a marker and it will be ignored.

For these selectors the selector (marker) will be placed at the pivot of the targeted character, which is normally at the feet of the character. Perhaps the best way to create these kind of markers is to use [projectors](http://docs.unity3d.com/Documentation/Components/class-Projector.html) but a simple plane is an option when the floor/ ground will be flat. Taking into account that the marker will be at the feet you should create your marker such that its own pivot is a little offset from y = 0 (for example y = 0.05) when using a simple object, like a plane, for the marker else it will seem to be inside the floor rather than just above it.
