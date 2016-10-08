---
title: TileEd Advanced
keywords: unity3d, tile editor, tileed
sidebar: tile_sidebar
toc: false
permalink: tile-ed-api.html
folder: tile-ed
---

Advanced
========

TileEd was developed as an editor side only tool for painting tiles. You can use the tile map data and manipulate it through a custom editor script. It is even possible to add your own TileEd tool. When I talk about TileEd tools I refer to tools like the Tiles Tool or the Props Tool. This section will explain how TileEd works and possible ways of interacting with the data.

All tiles are GameObject placed under the TileEd Map GameObject. Additionally TileEd makes entries in an asset file stored under `Assets\projectData\TileEd\Maps\`. The correct asset file is loaded and available to editor scripts when you have a TileEd map object selected (the inspector of TileEd is visible and the TileEd toolbar in the scene view)

- Mesh combine will remove the tile objects that was placed in the scene to be replaced with the combined objects.
- If you are to place any custom objects do not place them under the TileEd Map GameObject since they will be removed whenever a combine or map recreate is done. Except if you are manipulating tiles/ props directly in the scene and the associated asset file entry. TileEd reads the asset file to when restoring tiles during a map or group recreate. So if the asset file does not have an entry for an object it will not be restored to the scene.
- If you want to remove or replace a tile it needs to be done in both the TileEd Map asset and with the actual tile object in the scene, else what you see in the scene and what TileEd knows about, through its map asset, will go out of sync.

Scene Hierarchy
---------------

1. The `TileEd Map` is the main parent of all objects that TileEd can manipulate in the scene.
2. Directly under this will be the name of the tool involved with the objects placed, for example `Tiles` or `Props`.
3. In turn these will have numbered objects under them. These numbers relate to the identifier of a Tile Group/ Layer (as defined in the TileEd Map inspector). Note that these numbers are not indices into the list of defined Tile Layers but a uniquely created identity associated with each Layer.
4. Finally you will see GameObjects with names looking like a coordinate, ex. `(31x0x47)`. This is the actual Tile or Prop and the name is used to identify the object's TileEd Map grid position `x,y,z`. This position is not a world coordinate but grid position as calculated from the given grid tile size. In the case of tiles this name should be unique among all tiles placed within the same Tile Layer. Props however can share grid positions and it is possible to see more than one object with the same name under Props.

![](/img/tile-ed/29.png)

TileEd Map Data
---------------

Each TileEd map GameObject has a component called `TileEdMap` on it. This is a very simple component with only one property which identifies which map asset belongs to this TileEd map. This is a `string` value `TileEdMap.ident`. Note that `TileEdMap` is defined under the `plyLib` namespace since there is no runtime for TileEd. TileEd does not save any map data in your scene since it is an editor side tool and such map data would add unnecessary size to your scene files. See bottom of this page if this has changed - there might be plans to allow TileEd map data to be included at runtime for games that needs it for whatever reason.

The TileEd map data (asset files) can be found under `Assets\projectData\TileEd\Maps`. You will note that the names of these files looks like GUIDs. Never rename them since TileEd uses the file names to identify and load the correct map data. Each file name correspond to the string value in `TileEdMap.ident` of the TileEdMap component.

The TileEd map data are stores in asset files of type, `TileEdMapAsset`. This is a `ScriptableObject` and contains a list of all the Tile groups/ layers in the map `List<TileEdMapGroup> groups`. Each group in turn contains the list of tiles and props (they are all stored in the same list) of that group `List<TileEdMapTile> tiles` (you can't access this list directly but there are methods to access tiles in it).

These classes are all defined under the `TileEd` namespace and represents the data of a TileEd map.

TileEdMapAsset
--------------

This is the class that defined the TileEd map data (asset file). The easiest way to work with this would be through the `TileEd.Instance.map` property. It will be set to whatever TileEd map is currently active (it's inspector is shown) in the hierarchy.

```csharp
public class TileEdMapAsset
{
/// <summary> The unique identity of this map. It is the same as the map 
/// asset file name (without the .asset part or the directories of course) </summary>
public string ident

/// <summary> the Tile groups/ layers defined in this map 
/// (they are set up via the map inspector) </summary>
public List<TileEdMapGroup> groups

/// <summary> Used to create a new unique tile group/ layer ident when user
/// adds new group via the map inspector </summary>
public int GenerateGroupIdent()

/// <summary> Returns the tile layer/ group that corresponds to the specific id </summary>
public TileEdMapGroup GetGroup(int ident)
}
```

TileEdMapGroup
--------------

Each map has a list of Tile Groups/ Layers. These groups contain a list of the actual tiles (and props - they all saved in the same list). The group currently selected in the inspector can also be accessed via `TileEd.Instance.group`.

```csharp
public class TileEdMapGroup

/// <summary> Unique identifier for this group within the map.
/// this is the same as the name (number) used for the GameObject
/// that represents this group in the scene within each TileEd
/// tool (Tiles and Props) </summary>
public int ident

/// <summary> This is the name shown in the inspector and can be changed by the user. </summary>
public string name

/// <summary> Is this group visible? </summary>
public bool visible

/// <summary> Is this group's Tiles combined? Note that Props are never combined. </summary>
public bool combined

/// <summary> The size of a tile in the grid for this group. </summary>
public float tileSize

/// <summary> The height of a tile in the grid for this group. </summary>
public float tileHeight

// editor helpers
public int gridYPos		// Current height/y-pos of grid for this group
public int brushSize	// Current brush size for this group
public bool showPreview	// Should the tile preview be shown in scene while painting?

// the tile data (this list contains ALL tiles. A tile can be a Tile, Prop or 
// any other map object that other tools might define)
private List<TileEdMapTile> tiles

// used by the mesh combine tools.
public List<string> combinedMeshNames

/// <summary> The number of tiles (and props - they are all stored in same list) in this group </summary>
public int Count

/// <summary> Use to access a specific tile (or props - they are all stored in same list) in 
/// the list of tiles of this group </summary>
public TileEdMapTile this[int i]

/// <summary> Add a tile to the group. Note, this does nothing in the scene. It is up to you to create
/// the representing GameObject in the scene and under the correct GameObject hierarchy. </summary>
public void AddTile(TileEdMapTile tile)

/// <summary> Removes a tile from the group. Note that no GameObjects are removed from the scene.
/// It is up to you to remove any associated GameObject. </summary>
public void RemoveTile(TileEdMapTile tile)

/// <summary> Removes a tile from the group. Note that no GameObjects are removed from the scene.
/// It is up to you to remove any associated GameObject. Idx is an index into the tile list. </summary>
public void RemoveTile(int idx)

/// <summary> Removes all tiles of the specific tool (toolIdent) from the group. 
/// No GameObjects are removed by this. TileEd includes two tools and their IDs
/// can be found via TileEd_Ed_Tiles.TOOL_IDENT and TileEd_Ed_Props.TOOL_IDENT </summary>
public void RemoveAllTiles(int toolIdent)

/// <summary> Get the tile at grid position (pos) for the specific TilEd tool.
/// TileEd includes two tools and their IDs can be found via 
/// TileEd_Ed_Tiles.TOOL_IDENT and TileEd_Ed_Props.TOOL_IDENT </summary>
public TileEdMapTile GetTile(int toolIdent, IntVector3 pos)

/// <summary> Mainly used by Props tool to find a specific prop by comparing
/// the "val" with the tile's extraData[dataIdx]. This is necessary since props
/// share grid positions so the GetTile() method would not work so well. </summary>
public TileEdMapTile GetTileByExtraData(int toolIdent, string val, int dataIdx)

/// <summary> Get all tiles which are sharing the same position. Only really valid for Props 
/// since Tiles should never share a grid position within the same Tile Layer/ Group </summary>
public List<TileEdMapTile> GetTiles(int toolIdent, IntVector3 pos)

/// <summary> Get all tiles which are sharing the same position. Only really valid for Props 
/// since Tiles should never share a grid position within the same Tile Layer/ Group </summary>
public TileEdMapTile[] GetTiles(int toolIdent, IntVector3[] pos)
 
/// <summary> Get all tiles at XZ, ignoring the Y position of the tile. This means a list is returned 
/// of all the tiles on the same plane, above and below. Auto tiles uses this to find what tiles
/// to remove below or above. Note that only the 1st 2 above and below are returned for Tiles 
/// for performance reasons since this method is used often while painting auto-tiles.
/// For other tools (like Props) all above and below are returned. </summary>
public List<TileEdMapTile> GetTilesXZ(int toolIdent, IntVector3 pos)

/// <summary> Runs through all tiles in this group and calculates the min and max grid positions
/// occupied by the tiles. An array, with the min value 1st and max value 2nd, is returned. </summary>
public IntVector3[] GetMinMaxGridPosition()
```

TileEdMapTile
--------------

This is the tile in a group. What the tile is depends on the tool that adds it. In TileEd there are two tools which can manipulate tiles, the `Tile` and `Prop` tools. This one class represents both types of data. In fact, this class could be any other map object that a new TileEd Tool might define.

```csharp
public class TileEdMapTile
{
/// <summary> the TileEd tool that placed and knows how to edit this tile.
/// TileEd_Ed_Tiles.TOOL_IDENT (1)
/// TileEd_Ed_Props.TOOL_IDENT (2)
/// </summary>
public int toolIdent

/// <summary> Extra data associated with this tile. Each tool will use this differently.
/// Ex, the tile set this tile belongs to, the prefab from the tile, or even rotation. </summary>
public int[] data

/// <summary> The grid position of this tile. This is normally unique among tiles in the same group but
/// there are other objects, like Props, which can share a grid position. This is also the value used
/// to create the name of the tile GameObject in the scene, ex "(1x-3x4)" </summary>
public IntVector3 gridPos

/// <summary> Offset from the tile centre, if applicable. Mainly used by the Props tool. </summary>
public Vector3 offsPos

/// <summary> Additional data a tool might need to add to the tile. This is data that the 'int[] data'
/// can't handle. The props tool mainly uses this for things like prop scale, rotation, etc. </summary>
public string[] extraData
}

```

TileEd Global
-------------

When you select a TileEd Map object TileEd will load the associated asset file (map data) and make it available via the `TileEd` class. It is a singleton which can be accessed via `TileEd.Instance`. It has various properties and functions to get access to and manipulate the map data.

If you write a custom editor script to manipulate the TileEd data somehow you should design it such that it can perform on the selected TileEd Map GameObject. That way you can interact with the `TileEd.Instance` rather than having to read the `ident` from a `TileEdMap` component and then having to load the correct asset file (though you could do this too).

The `TileEd` class is responsible for drawing the currently selected `TileEdMap` component's inspector and the TileEd toolbar in the scene view.

```csharp
public class TileEd
{
public static TileEd Instance

/// <summary> A reference to the component on the currently selected map object. It inly contains the ident of the map. </summary>
public TileEdMap mapObj

/// <summary> Reference to the transform of the currently selected map object. </summary>
public Transform mapTr

/// <summary> Reference to the map data (asset file) of the currently selected map. </summary>
public TileEdMapAsset map

/// <summary> The index (into list of groups) of the currently selected Tile Layer/ Group (as seen in the Inspector). 
/// Static so that the active group is kept when switching away and back to map (will update group property in OnEnable) </summary>
public static int activeGroupIdx
	
/// <summary> Reference to the currently selected Tile Layer/ Group (as seen in the Inspector). </summary>
public TileEdMapGroup group

/// <summary> Reference to the TileEd grid. It does various things like drawing the grid, preview object and handing clicks. </summary>
public static TileEd_Grid grid

/// <summary> True while TileEd tools are building their caches. Do not do anything until this is done. </summary>
public bool buildingCache
}
```

Custom TileEd Tools
-------------------

A TileEd tool is something which manipulate the data in the map asset and the objects in the scene. It is normally defined as something which knows how to work with a specific object type. There are for example the `Tile` and `Prop` tools included with TileEd and you can switch between these two tools via the TileEd toolbar or in the inspector. You will notice that they have very different options in the Tile Settings window and in the Inspector. 

A new "TileEd tool" could be added to handle a object different from a tile or prop. You could for example create a tool which is used to place NPCs (monsters).

Please contact me for more information if you are interested in creating a new TIleEd tool.

Runtime
-------

The TileEd map data (asset files) are available at runtime but you need to reference them from a scene since they are not automatic included. The map assets are saved under `Assets\projectData\TileEd\Maps\` using a GUID for the file name. To see which GUID belongs to which TileEd Map you can go to the "Map Tools" section of the TileEd map in the inspector and see the "map ident" at the bottom.

See `Assets\plyoung\TileEd\packages\TileEd2Runtime.zip` for commented source code to learn more about the data format.

Callbacks
---------

TileEd can do a callback after adding a Tile or Prop. You can hook into either of these by adding a callback function to the `TileEd_Ed_Tiles.onPlacedTile` or `TileEd_Ed_Props.onPlacedProp`.

The callback will be passed information about the placed tile/ prop.

```csharp
GameObject go;        // the tile object that was placed in the scene
TileEdMapTile tile;   // tile/ prop data saved in the TileEd map
TileEdMapGroup group; // tile-group/ tile-layer this tile was placed under
```

