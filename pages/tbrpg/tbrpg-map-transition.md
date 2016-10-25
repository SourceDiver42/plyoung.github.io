---
title: Turn Based RPG Map Transition 
keywords: unity3d, blox, visual scripting, programming, tactical, turn based rpg, tbrpg
sidebar: tbrpg_sidebar
toc: false
permalink: tbrpg-map-transition.html
folder: tbrpg
---

Map Transition
==============

TBRPG provides a way to handle movement between maps (the scenes the player party explores) via the `MapEntrance` and `MapExit` objects. These can be added to a scene from the menu: `Blox > Turn Based RPG > Map >`. You may add any number of these objects to a scene.

Entrance
--------

![](img/tbrpg/06.png)

The map entrance is used to determine where in the scene a party should be spawned. Note that the party will also use the entrance's rotation to determine in which direction to face initially. The entrance forward direction is down the Z axis.

Each entrance in the same scene should have a unique "Ident" since this ident is used tell which one should be used when a scene is loaded. You will see below that map exits can be linked to an entrance via this ident.

Exit
----

![](img/tbrpg/10.png)

The map exit is a component which you can add to any object which will cause a scene change when the player interacts with that object. This component can be added from menu: `Component > Blox > TBRPG > Map Exit`.

You need to specify a scene to load and an ident for a map entrance in the target scene. You may leave out the entrance ident but then the first entrance found in the target scene will be used or position 0x0x0 if there are no map entrances defined in the target scene.

The object you place this on will need a collider so that mouse clicks on the objects can be detected.

Exit Trigger
------------

![](img/tbrpg/07.png)

The map exit is a trigger which will cause a scene change when a member of the party enters it. Make changes to the transform scale to determine how big an area the trigger should cover.

You need to specify a scene to load and an ident for a map entrance in the target scene. You may leave out the entrance ident but then the first entrance found in the target scene will be used or position 0x0x0 if there are no map entrances defined in the target scene.

You will probably be placing all your player characters in the same layer. This layer can be selected for the "Player payer mask" option. Note that you may leave it to "Everything" if you want since the MapExit will not trigger for anything other than a player party member.

You might also want to place this object in a layer, for example one called "Triggers" and then set up the project's layer collision matrix to exclude everything except the Player layer. You can read more about this in the Unity documentation for [Layer Collision Matrix](https://docs.unity3d.com/Manual/LayerBasedCollision.html).


