---
title: plyGame Player Manager
keywords: unity3d, plygame, rpg, game, maker
sidebar: plygame_sidebar
toc: false
permalink: plygame-player-manager.html
folder: plygame
---

Player Manager 
======================

![](/img/plygame/playerman/00.png)

The Player Manager makes it easier to get a player character into a game scene. The Player Manager is configured in the plyGame main editor under `Actor > Player manager`.

The first field indicates the default character to use when the unity Play button is pressed to test a scene or when you did not set what player, from the defined characters, to spawn.

You may also choose to leave the default prefab field empty and specify that a character defined in the the Player Character list be used. Here you simply enter the index of the character as it appears in the list, starting at 0 for the 1st entry. If you do not want to use this feature then set the values here to (-1).

If you do not set this first field and you did not set any of the default indexes to use (or they are invalid) then the player manager will not function.

Next you see buttons that gives you access to the plyBlox associated with the Player Manager. The manager has events that trigger in its own Blox, for example `plyRPG > Player Manager > On Player Created`.

### Player Characters ###

In this section you setup the different characters that you might want to use as players in the game. Press the (+) next to **Player prefab** to add fields into which you can insert the player prefabs. Player prefabs are objects that has all the typical components of a player character object, like Actor, a player controller, an animation controller, etc. This prefab differs from the normal character setup procedure (and the default player character prefab) in that it will not have any child objects and a model. The model or art of the character is specified in another list.

![](/img/plygame/playerman/01.png)

Click on a field in the **player prefab** list and you will see an **art prefab** list becomes available. Here you can add fields to insert the art prefabs/ models of the character. When the Player Manager spawns a character it will also instantiate a model from this list to associate with that player character. Note that you may choose to ignore the art prefab list and not add any models so that you can create your player prefab in the normal way and have that instantiated without any additional art instantiated for it.

Spawn Player 
----------------------

You will use Blocks to spawn a Player Character. It is also possible to do this via script if you choose. See the API docs for the Player Manager.

The Blocks for the Player Manager can be found under `Character > PlayerMan`.

![](/img/plygame/playerman/02.png)

First you need to set what *player prefab* and *art prefab* will be used.  First call `Set Player` which allows you to set which player prefab will be used from the list of player prefabs. You will note it takes an Integer value; this is an index into the list of prefabs and start the count at 0.

After calling the `Set Player` you can call `Set Player Art` to indicate which art prefab should be used from the list of art prefabs associated with the player prefab. If you do not have any set up then simply don't make this call. Again, this Blocks takes one Integer value to indicate which prefab in the list of art prefabs to use, starting at 0.

After the prefabs to use are set you simply call `Spawn Player` to spawn the character in the scene. This block's first field can be set to any GameObject in the scene and the Block will then use that object's position and rotation as a reference for the newly created player character object's position and rotation.

Note that the Player Manager will not spawn a player character if there is already a player character present (when Player.Instance is not null). This means the player manager will also work nice with the LoadSave system and your call to `Spawn Player` will be ignored when the LoadSave system restored a player character during loading.

For additional info, have a look at the video tutorials like [this one](http://www.youtube.com/watch?v=MOn-eZ9gLvY)

