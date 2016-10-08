---
title: UniRPG Actors Spawn
keywords: unity3d, unirpg, rpg, game, maker
sidebar: unirpg_sidebar
toc: false
permalink: unirpg-actors-spawn.html
folder: unirpg
---

[Patrol Path]: unirpg-actors-path.html
[Actor Class]: unirpg-database-classes.html#define

![](/img/unirpg/intro/tbutton4.png) Spawn Point
===========

A Spawn Point is a helper for Spawning Actors, mostly non-playe character. It can also be used to indicate where a Player should apear in the game scene.

It can be created via the menu: `gameobject -> create other -> unirpg spawn point` or by using the toolbar button.

![](/img/unirpg/actor/spawn1.png)
![](/img/unirpg/actor/spawn2.png)
![](/img/unirpg/actor/spawn3.png)
![](/img/unirpg/actor/spawn4.png)
![](/img/unirpg/actor/spawn5.png)

- The <font style="font-weight:bold;color:grey">Grey</font> icon indicates a spawn point that has not yet been setup.
- The <font style="font-weight:bold;color:blue">Blue</font> icon is a Player Character spawn point.
- The <font style="font-weight:bold;color:green">Green</font> icon is a Friendly Non-Player character spawn point.
- The <font style="font-weight:bold;color:yellow;background-color:grey">Yellow</font> icon is a Neutral Non-Player character spawn point.
- The <font style="font-weight:bold;color:red">Red</font> icon is a Hostile Non-Player character spawn point.

### Player Spawn Point ### 

![](/img/unirpg/actor/win9.png)

The player spawn helps setting up points where a player character can enter the game scene.

If you set **Is new game location** then the Spawn Point will be used as the location where a player character is placed after the player started a new game, assuming the Spawn Point is on the game scene used for new game.

There is also the option to give the Spawn Point a unique **Identifier** which can be used when deciding which Spawn Point the player character should be spawned at when loading a game scene. 

### Non-Player Spawn Point ### 

![](/img/unirpg/actor/win10.png)

The main use for Spawn Points are to spawn non-player characters (NPC). You could place NPCs directly into the game scene but a Spawn Point will help you setup a system where an NPC will only appear in the scene when the player is near the location, or a way to continually spawn new monsters as needed.

You can set whether the SpawnPoint is **Persistent** or not. If set, its state will be saved and restored when the player moves between scenes or choose to Save/ Load a game session. The state that is saved includes how many NPC where spawned (Max Spawn) and the custom variables.

**Actor Definition** is the NPC that will be spawned.

**Only when detect player** will cause the Spawn Point to only start spawning when it detected the player. The **Player detection radius** will determine the  area that the Spawn Point will cover looking for the player.

**Max Spawn** is the total amount of actors the spawn point can spawn. When this is reached it will not spawn any new actors. Setting this to (0) will disable this function and the spawn point will keep spawning actors according to the rest of the rules.

**Interval** is how long the spawn point will wait (in seconds) between spawning groups of Actors. Use (0) to ignore interval and to spawn a new NPC as soon as the group size becomes smaller than the value set for 'Group Size'.

**Groups Size** is how many Actors are spawned as a group. This still falls within the 'Max Spawn' limit.

**Group spawn delay** is how long to wait (in seconds) between spawning Actors of a group. Ignored if group is only size (1).

**Spawn when group <** tells to spawn when a group's size becomes smaller than this number. So when the group size was set to 3 and one of the NPCs are destroyed another will be spawned immediate if this field was set to 3 too. Use (0) to ignore this field and only work on 'Interval'.

**Move after Spawn** determines how far the NPC must move forward (in meters) after spawning and before AI takes over. Forward is the forward direction of the Spawn Point, the Blue arrow when you have the spawn point selected.

**Starting XP** can be used to set the XP (and Level) that the new NPCs should be spawned with. The Level is calculated according to the settings in the selected NPC's [Actor Class][].

The **Custom Variables** allows you a spot to define variables that are local/ private to the SpawnPoint. The use of these will depend on your needs and is optional.