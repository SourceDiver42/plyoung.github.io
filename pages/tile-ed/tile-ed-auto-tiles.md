---
title: TileEd Auto-Tiles
keywords: unity3d, tile editor, tileed
sidebar: tile_sidebar
toc: false
permalink: tile-ed-auto-tiles.html
folder: tile-ed
---

Auto-Tiles
==========

This section is about the requirements around auto tiles and is mostly information an artist would need but you can read over it to get a better understanding of how these work or if you are having trouble with a tile set and want to try fix the tiles to work with TileEd's auto tiles system. Be sure to first read about [how to create tile sets](tile-ed-setup.html) to get a better understanding of how and where these are used.

The auto tiles uses different auto-tile systems to determine how the wall and corner pieces should be placed when you place or remove a floor tile. This page will describe each of those under a separate heading since there are differences between the tiles of the various auto-tile systems.

I might also mention that TileEd supports random tiles and it can be set up to automatically select a random mode/ prefab to use when a tile is placed. So when you are creating tiles you should consider creating a few variations of the floor, or wall, or corner you are creating.

### Pivot

First you will want to set the tool handle in Unity to "Pivot" rather than "Center" else you will not see what the pivot's real location and direction is when viewing the tile in Unity. Also make sure that rotation is set to "Local" rather than "Global".

![](/img/tile-ed/25.png)

The tile's pivot position and direction is very important since TileEd will make assumptions about the pivot. The pivot is the point from where the gizmo's X, Y, and Z handle extends when you have the Translate tool selected and the handle is set to make use of pivot point as seen in this image.

TileEd includes a pivot editor, see topic below, but you may want fix this in a 3D editing tool before exporting the model especially if you are creating art to be distributed to other users.

![](/img/tile-ed/14.png)

As you can see here the pivot is at the top of the tile and the **Z Axis** (Blue) is pointing in the same direction as the wall's facing. This is what will differ depending on which auto-tile system you are using or whether you are using rotating or direction tiles.

The best way to change the pivot's position and rotation on the model would be to do it in your 3D editing software. Simply do a search for how to "adjust the pivot" and maybe even how to "reset xform" in your 3D editing software of choice. The best set-up tile is one which has a rotation of (0x0x0) after import and hopefully a scale of (1x1x1). Drag the model into a Unity scene and have a look at the Transform inspector to make sure about these and correct it in the 3D editor and re-export, if needed.

![](/img/tile-ed/15.png)

If editing the pivot in a 3D editing package is not an option then you can still make some changes to get it to work. You can simply create another GameObejct to contain the tile mode and then rotate and position the tile inside this container such that is points in the correct direction or is at an offset from the container's pivot position. You then save this GameObject as a prefab and use the prefab when setting up a tile set.

In this example I want the corner to face a different direction so I had to rotate it by 90*. I created a new GameObject, placed the tile model inside it and rotated the model by 90* on the Y axis. This prefab is then saved to be used later. Please ask on the support forum if you still have trouble understanding why the pivot position and rotation is important or how to affect it.

![](/img/tile-ed/16.png)

### Pivot Editor

*If possible, always use a 3D editing application to make the corrections since changes made with this tool can be lost when the model is reimported. Examples of doing it in [max](https://www.youtube.com/results?search_query=max+adjust+pivot) and [maya](https://www.youtube.com/results?search_query=maya+adjust+pivot).*

TileEd includes a pivot editor to help you in fixing problems with an incorrectly positioned or rotated pivot. The editor window can be opened from the menu: `Window > TileEd > Pivot Editor`

It is best to change the pivot of an object placed in the scene so that you can see what changes are applied to the mesh. Remember to press the **Apply** button in the Inspector to apply the changes to the object's prefab (or create a prefab from it if you did not yet).

You can also apply the changes to Prefabs directly. You might need to right click on the prefab and choose **Reimport** from the context menu after making changes so that TileEd thumbnails are updated.

![](/img/tile-ed/28.png)

Terrain
-------

Terrain tiles require 4 different tiles to describe the walls. A straight wall, convex corner, concave corner, and a special case corner. If you are using directional tiles then each of these will require 4 variations, or the 4 directions in which the wall might be turned to face north, east, south, or west.

![](/img/tile-ed/13.png)

The pivot of the tile must be at the top of the wall tile so that when a floor is placed the wall placed next to it will extend down to look like a cliff face.

![](/img/tile-ed/17.png)

### Rotating

Rotating tiles are tiles which TileEd can rotate to face the correct direction. This is why you need fewer tiles since TileEd can simply rotate a wall tile to face either north, east, south, or west when it needs a tile in that position and direction. If however the tile set does not tile well when used in a position other than that it was made for then you need to use the tile in a directional tile set and will require a different tile prefab for each of the 4 directions the tile could face.

The following image describes how the tile should face from a top-down perspective. Note that they all have a pivot facing down the Z-axis (Blue), as indicated. The floor tile is included though the rotation of the floor does not really matter, except in the case of directional tiles. The little icons above s used as a guide so you can see which of the tiles would be used in which position when setting up a tile set.

The last tile, the special corner, is optional. If you do not add it then some special case connections between tiles can't be created and will result in an empty tile which the designer need to fix by placing a floor in the spot. This limits his design choices somewhat when painting a terrain.

![](/img/tile-ed/18.png)

Note how the actual tile is not facing in the same direction as the icon (guide image), this is because those icons are rotated such that they represent the tile when previewed in the Unity editor (see example of the wall tile). This makes it easier for the developer who is setting up a tile-set in TIleEd, using the tiles. You just need to remember that when you create tiles they need to point in the directions as described above and they will look correct in the TileEd preview of the tiles and when placed in the scene by TileEd.

![](/img/tile-ed/19.png)

### Directional

As mentioned above, some tile sets might not work well when a wall or corner piece is rotated since its textures might not "connect" (or tile) well with that of the neighbouring tile or the mesh might not even align.

The directional tiles use the same wall, convex corner, concave corner, and special corner but require 4 tiles for each of them to represent the 4 directions that the tile can face in, North, East, South, and West. All it comes down to is that the pivot is rotated such that when the 4 walls are placed next to each other they would seem to face in different directions even though the it pivots all face the same direction (the blue arrows are in the same direction).

The following image might explain it better. As you can see, each tile appear to be rotated by a multiple 90* but remember that their pivots all face in the exact same direction (with the blue arrow pointing towards north/up). This is because the pivot was rotated in the 3D tool and the xform then reset (these are terms used with 3DS Max and might differ for your 3D tool).

You will note again that the guide icons are not facing in the same direction. As explained above, that is because of the guides being there to reflect the direction of the review of the tile in the Unity editor. You will see though that the the tiles are simply rotated clockwise by 90* each time so if you got your first one correct the rest should be easy to figure out.

![](/img/tile-ed/20.png)

Transitions
-----------

Transitions are used to create a nicer look when two tiles from different tile sets connect, for example grass and sand next to each other. The tiles required to create the transition follows a similar rule to the terrain definition tiles for both rotating and directional. You need a side, convex, concave, and special corner.

All the tiles are considered "floor" tiles so the pivot should be at the centre of the tile. There is no need for the pivot to be at the top or bottom of the tile as is the case with the tile set's walls. Refer to the information about the Terrain tiles for more information on how the tiles should be rotated since the same rules apply.

![](/img/tile-ed/21.png)

Dungeon
-------

The Dungeon auto-tile system can be used to draw caves, dungeons, sewers, basements, or even the interior of buildings. The idea is to create the kind of interiors that has a black background where no tiles are present. Similar to what you would see in typical isometric/ top-down view RPG games.

The walls do not have to connect with any tiles above or below it like the terrain walls/ cliffs which transition to a floor at lower level) but keep in mind that TileEd supports Tile Layers so it is possible to draw a dungeon floor under another at a lower level if that lower floor is drawn in a different Tile Layer. So you might consider creating walls in the set that can be used to connect upper and lower floors. Of course you can stick to the "old school" look where using stairs or ramps to go down or up would load a different map and you never actually see how the character moves up or down from one floor level to another.

![](/img/tile-ed/22.png)

When creating a dungeon wall you should think about adding a black mesh to its back side so that the player can't see through the backside of the wall. It will present better in a map which uses a black background. Of course it is up to your design and its requirements.

![](/img/tile-ed/23.png)

The Dungeon auto-tile system require the same kind of tiles as Terrain so read over the Terrain section if you did not yet since I will not be explaining it in detail here too.

The big difference between the Terrain walls and Dungeon walls is that the pivot of a dungeon wall is at the bottom of the tile and the wall should face towards a floor when placed. So when a wall is placed next to a floor the wall tile would be placed at the same Y position (height) as the floor tile and the art rises up to form a wall (and not down to form a cliff facing away from the placed floor as the case with terrain).

The floor tiles are included here so that you can see how the wall/ corner relates to the floor.

![](/img/tile-ed/24.png)

The details around directional Dungeon walls and transitions are the same as with Terrain so I will not go over those here again.

Art Pack Development
--------------------

Please [contact me](/contact.html) if you are creating a TileEd compatible kit.

This is additional information for publishers whom are creating art kits that are compatible with TileEd. To make it easier for a person using your pack with TileEd you can apply some of the following suggestions.

Probably the most important thing you can do is to include some instructions with your kit. Add a `readme.txt` with information that will be useful to someone who are using the kit.

In this "readme" you can provide info about the grid tile **size** and **height** so that when a user creates a new Tile Layer he knows which Size and Height values to apply so that when tiles are placed via the grid they will align perfectly. These values are in Unity units, not meters or centimetres or whatever units your 3D editing software shows. Import and test your art in Unity (which you are probably doing already) and have a look at the spacing/ size of the tiles inside of Unity.

Next you want to tell the user which of your tiles can be used with the Auto Tiles system of TileEd and how they should set it up. Keep the models or prefabs of the auto tiles 
in a separate folder or at the very least, name them such that they are easy to identify. You can indicate in the "readme" what folders these tiles are in or what your naming convention is when the user is trying to find them among other tiles in a folder. It would be good to follow a naming convention similar to that of TileEd but you can choose your own and then indicate in the "readme" which tiles belongs where in the auto tile setup.

Example, Rotating Terrain type Auto Tiles require 4 tiles. You can simply name your models or prefabs: `grass_floor, grass_wall, grass_concave, grass_convex, grass_special`, for the floor, wall, 2 types of corners and the special tile that TileEd requires.

You might even choose to simply call it `grass_1, grass_2, grass_3, grass_4, grass_4` meaning the tiles should be placed in that order into the spaces available when setting up a tile set. 

Keep in mind that your naming convention should allow for random tiles if you plan on adding variations; `grass_wall1, grass_wall2, grass_wall3` for 2 wall tiles that can be selected randomly by TileEd when placing a wall.

If your tile set is **Directional** then using numbers `1, 2, 3, 4` to identify the spot of the tile in the Tile Set might be the easiest. In this case you could still add random variation of a tile by adding the characters a, b, c, etc. `grass_wall_1_a, grass_wall_1_b, grass_wall_2_a, etc`

You could also choose characters like `N, E, S, W` to indicate the direction of the tile, "North, East, South, West". It will just make it a bit harder on the user since the file (model/prefab) ordering, which is by name, will be such that the tiles he wants to drag into slots 1, 2, 3, and 4 are not from top to bottom in the file list but mixed.

Example Readme:

```txt
Tile Pack Name
by Your Name/ Company

Support: url

Description of the pack. Description of the pack. Description of the pack. 
Description of the pack. Description of the pack. Description of the pack.

* Information for TileEd and similar editors *

Name: Forest
Location: Assets/path/to/forest/
Tile Size: 1.5
Tile Height: 3
Auto-Tiles: none (only simple tiles and props)

Name: Grass
Location: Assets/path/to/grass/
Tile Size: 1.5
Tile Height: 3
Auto-Tiles: Rotating, Terrain

Name: Sand
Location: Assets/path/to/sand/
Tile Size: 1.5
Tile Height: 3
Auto-Tiles: Directional, Terrain

Name: Cave
Location: Assets/path/to/cave-tiles/
Tile Size: 1
Tile Height: 1.5
Auto-Tiles: Rotating, Dungeon

Name: Basements
Location: Assets/path/to/basements/[Stone|Webed|Fungi]
Tile Size: 1
Tile Height: 2
Auto-Tiles: Rotating, Dungeon
```