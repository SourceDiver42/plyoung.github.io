---
title: UniRPG Actors Default
keywords: unity3d, unirpg, rpg, game, maker
sidebar: unirpg_sidebar
toc: false
permalink: unirpg-actors-default.html
folder: unirpg
---

[Spawn Point]: unirpg-actor-spawn.html
[Patrol Path]: unirpg-actors-path.html

Default Characters
==================

This page covers the default character types that are distributed with UniRPG. If you are using a different kind of character (from a plugin) then it will differ from what you see here and you should read the documentation for that plugin.

To create a new Character, select the Prefab or Game Object that you want to turn into a character and then in the [Inspector](http://unity3d.com/learn/tutorials/modules/beginner/editor/the-inspector) select **Add Component** `UniRPG -> Default Player Character` or `UniRPG -> Default Non-Player Character`. You can also do this from menu: `Component -> UniRPG -> ...`.

![](/img/unirpg/actor/win1.png)
![](/img/unirpg/actor/win2.png)
![](/img/unirpg/actor/win3.png)

A [Character Controller](http://docs.unity3d.com/Documentation/Components/class-CharacterController.html) Component will be added to the object. This is used for the physics and the collider might not be the correct size or on the correct offset, as shown in the screenshot. You will need to move this so that is sitting perfectly over the character, else the character might fall through the floor when you run the game.

![](/img/unirpg/actor/win4.png)
![](/img/unirpg/actor/win5.png)

 
### Animation & Movement ### 

![](/img/unirpg/actor/win14.png)

The Player and NPC Characters will both have options to set the speed for walking and running and the animations that should be played.

 
### NPC Settings ###  

![](/img/unirpg/actor/win15.png)

The NPC has an option to select if it is Friendly, Neutral or Hostile. A Friendly NPC can't be attacked and is use for creating characters like quest givers and shop keepers. The Neutral NPC will not attack the player but can be attacked by the player and will turn Hostile and then attack the player. The Hostile NPC will attack the player as soon as it detects the player.

You can also setup the AI for the NPC. These options are similar to the ones found on the [Spawn Point][] and will be overwritten by the spawn point's options if the NPC is spawned in that manner.

**Action after spawned** tells the NPC what it should do after it was spawned.

- Stay will cause the NPC to stay in the spot.
- Wander will tell the NPC to wander around the spawn point but stay within a certain radius of it. You can also set a random amount of time (in seconds) that the NPC will idle before deciding where next to wander to.
- Patrol will tell the NPC to start following a specified path via a [Patrol Path][].

 
### Events & Actions ### 

![](/img/unirpg/actor/win7.png)

This section allows you to specify actions that will be executed on specific events.

**On Targeted**, for example, is useful on a an NPC to detect when the player targets it and then call some actions that can be performed, perhaps showing a selection marker under the targeted NPC. Similarly the Player character will receive this event when an NPC targets it. The *Max Targetable Distance* is used to set from how far (in meters) the Actor can be targeted. Use (0) if you want to disable this, make the distance unlimited.

**On UnTarget** is when the targeted character is cleared as target.

**On Interact** is called when interaction with this character takes place. For example, the player targets a Quest Giver NPC but is too far from it, So he runs closer and once in range the On Interact event will trigger and a action can be called that would show the Dialogue Interface. The *Max Interact Distance* is how far something has to be (in meters) from the Actor before interaction can start. It is good to keep this to 1.5 to 2 meters.

**On GetHit** is called whenever the value of Attribute you specified is decreased. If no attribute is set then adding actions to the list is pointless.

**On Death** is called whenever the value Attribute you specified reaches zero (0). If no attribute is set then adding actions to the list is pointless.

The Actions placed into these Event/ Queue Lists will receive the following Subject Types:

- Self: The Character that the queue belongs to
- TargetedBy: The Character that is trying to target/untarget/interact with this Character (Not set on GetHit and Death)
- All other types will be invalid, except where [indicated different](actions.html)

 
### Detect Player ### 

An NPC like a shop-keeper do not really need this, but something like a monster that needs to detect and chase after and attack the player needs a way to detect the player. This is done via Triggers. A trigger is a [Collider](http://docs.unity3d.com/Documentation/Components/class-SphereCollider.html) with the **Is Trigger* option enabled.

Because the NPC has most like another physics object on it already, for example a [Character Controller](http://docs.unity3d.com/Documentation/Components/class-CharacterController.html), you will not be able to add the new Trigger (collider component) onto it directly.

UniRPG allows the Trigger to be a child object of the NPC. Create a new empty GameObject in the scene, menu: `gameobject -> create empty` and then add a Sphere Collider to it, menu: `component -> physics -> sphere collider`.

1. Make the new GameObject a child object of the NPC object by dragging it into it.
2. Make sure the position is `0x0x0`, of whatever the centre of the NPC object is.
3. Set *Is Trigger*. If you forget this then the NPC will not detect the player and the player will probably collider against this invisible sphere.
4. Choose a radius. This is the NPCs detection range.

![](/img/unirpg/actor/win12.png)
![](/img/unirpg/actor/win13.png)
