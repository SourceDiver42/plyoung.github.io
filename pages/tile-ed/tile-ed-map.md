---
title: TileEd Map
keywords: unity3d, tile editor, tileed
sidebar: tile_sidebar
toc: false
permalink: tile-ed-map.html
folder: tile-ed
---

TileEd Map
==========

TileEd requires a special GameObject to be added to the scene. This object will be the container for all the tiles and props placed by TileEd. You should not edit any of the child objects added to the TileEd Map object. TileEd is in control of the objects and editing/ moving/ deleting the child objects can cause problems.

To create a new **TileEd Map** go menu: `GameObject > TileEdMap` or `Window > TileEd > Create TileEd Map`

TileEd painting has two areas to it. The **Palette** which will initially be docked in the Unity Scene View and the TileEd Map's **Inspector**. What you see in these two areas will depend on what it is you are painting, tiles or props.

![](/img/tile-ed/07.png)

Palette
-------

![](/img/tile-ed/08.png)

The palette will initially be docked at the bottom of the Unity Scene View and be visible whenever the **TileEd Map** is selected in the Hierarchy.

The 1st button is a short-cut to opening the [TileEd Settings](tile-ed-setup.html) where you can create tile sets.

Next is a button which allow you to turn TileEd Mode on or off. With TileEd mode off you will not be able to draw tiles but it is useful for when you want to view the selected TielEd Map without the TileEd editor functions active.

The *Tiles* and *Props* buttons allows you to switch between painting tiles or placing props on the map.

To the right are buttons for changing the preview size of tiles/ props and changing whether the preview area is docked at the bottom the Scene View or to the left-hand side of it.

The palette can be un-docked with the "Undock Panel" button to the far right. This will allow you to dock the palette any way you like with other Unity panels. Simply close the panel/ window to dock it back in the scene view.

Painting
--------

With one of the Tiles or Props selected you simply move the cursor to where you want to place the tile and left-click to place it.

Auto tiles have a special tile, listed first in the palette and marked with a special icon to indicate that it is an auto tile. WHen you place an auto tile it will also place walls and change the transitions of tiles around it if those were set up for the tile set. The Shift modifier will also act differently than from simple tiles and will depend on which auto-tile system is used. The rest of the tiles all act like simple tiles and the Shift modifier will simply delete a tile without affecting surrounding tiles (see below for info on modifiers).

![](/img/tile-ed/09.png)

There are different modes in which the cursor might be and it will change colour to indicate which mode it is in. This documentation assumes the default colour scheme (you can change it in the TileEd settings).

![](/img/tile-ed/10.png)

- **Blue** is the normal mode and left-click mouse will cause a tile to be placed. With a *Terrain* auto-tile system this will cause lowered terrain to be raised to the level of the grid.
- **Orange** is sculpting mode. Hold the `Shift` key to activate this mode. A left-click will cause Terrain to be lowered on level from the grid's current hight. Dungeon floors will be removed and surrounding walls updated.
- **Red** is removal mode. Hold the `Shift` key to activate this mode. A left-click will cause Tiles to be removed. With Terrain and Dungeon auto tiles it will also update the walls around the removed tile. With props this will remove all props that are bound to the grid position that the cursor is over.
- **Yellow** is mark mode. Hold the `Ctrl` key to activate this mode. It is used to mark tiles for copying or duplication. With the Props tool this will mark all props that shares a grid tile space. Simply release `Ctrl` and right-click anywhere in the grid to clear the selection. Left-click, while Ctrl is not held, will also clear the selection in the Terrain tool. Left-clicking in the Props tool act like selection too if clicking on a prop. You can also use `Esc` to clear the selection or while pasting from the copy buffer.

`Shift + F` will center the view over the map/ grid's 0x0x0 position while `F` can be used to center over the tile where the cursor is currently.

The **grid position** (height/ level) can be changed by holding `Ctrl + Shift` and moving the mouse scroll wheel up/ down. You can also change it in the Inspector.

The Cursor (Brush) size can be changed by holding `Ctrl` and moving the mouse scroll wheel or by changing it in the Inspector.

A tile/ prop can be rotated by holding `Alt` and moving the mouse scroll wheel, or via the Inspector.

#### Note on Props

Props can be marked by simply clicking on one while you have no prop selected from the prop set. As mentioned before you may also use `Ctrl + Click` to mark a whole group of props that shared the tile space that was clicked on.

A prop's custom Y-offset can be changed by holding `Ctrl + Alt` and moving the mouse scroll wheel, or via the Inspector. Note that this will place the Prop tool's Y-offet field in "Csutom" mode.

The props tools allow tweaking of a selected prop's position, rotation and size. The shortcut keys for accessing these options are `W` Move, `E` Rotate, and `R` Scale, and `Q` to restore the normal prop mode. 

Inspector
---------

**Note**: You can hover over the various buttons and fields in the inspector to get a tooltip explaining what the button or field does so I will not be listing every option avialable here.

TileEd supports Tile Layers. These can help you to logically group tiles and props or to place tiles which shares a tile space and would otherwise not be possible to paint without removing an existing tile. It is also useful for when you have tile sets with different tile sizes from each other since each Tile Layer's grid tile size and height can be set individually form each other.

The TileEd grid's tile size and tile height is controlled by the layers. To change it, simply click on the edit button while a layer is selected and a window will come up where you can change the tile size. It is important to select the correct size and height else tiles will be placed incorrectly in the scene. If you started painting some tiles and realise that the grid size is wrong you can simply click on the recreate button (the one next to the layer's visibility/ eye icon) after changing the tile size/ height of a layer to recreate the layer with the correct tile size.

![](/img/tile-ed/11.png)

Templates & marking
-------------------

You can create templates by marking tiles in the scene, then press Copy, and then Save to Template.

To mark, hold the `Ctrl` key and click on the tile(s) to mark. You can also click and drag over tiles. To un-mark tiles (while still in mark mode) you simply click on the marked tile again and it will be removed from the selection. Note that this method of marking with props will mark all the props bound to that grid position/ tile area.

You can only mark and copy tiles/ props that are all in the same Tile Layer. To paste marked tiles you can click on the copy buffer image in the inspector or use the Unity shortcut key for pasting. The shortcut keys to copy, duplicate, and delete are also supported for marked tiles. To clear the selection you can click anywhere in the grid.

To place a template you simply click on the preview image of the template and it will become available for playing in your currently selected Tile Layer. Press the `Esc` key to cancel template placement.

![](/img/tile-ed/12.png)