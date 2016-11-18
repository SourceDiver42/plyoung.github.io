---
title: UniRPG Objects
keywords: unity3d, unirpg, rpg, game, maker
sidebar: unirpg_sidebar
toc: false
permalink: unirpg-objects.html
folder: unirpg
---

RPG Objects
===========

An RPG Object is something that the player can interact with. For example a Chest that he can open to reveal RPG Items that he can pickup, or even a trap that will be triggered when he moves over it.

To make an object or prefab into an RPG Object you need to add the RPG Object component to it. Select the Prefab or Game Object that you want to turn into an RPG Object and then in the [Inspector](http://unity3d.com/learn/tutorials/modules/beginner/editor/the-inspector) select **Add Component** `UniRPG -> RPG Object`. You can also do this from menu: `Component -> UniRPG -> RPG Object`.

![](/img/unirpg/object/win1.png)
![](/img/unirpg/object/win2.png)
![](/img/unirpg/object/win3.png)

### Basic Info ### 

![](/img/unirpg/object/win4.png)

You can enter a name, description, some private notes and assign up to three images to the RPG Object. It is up to your selected GUI Theme to decide how these are used. UnIRPG will use the 1<sup>st</sup> icon throughout the editor

### Events & Actions ### 

**On Targeted** will trigger when the RPG Object is targeted. For example when the player clicks on it. The *Max Targetable Distance* is used to set from how far (in meters) the RPG Object can be targeted. Use (0) if you want to disable this - make the distance unlimited. You will need a collider on the RPG Object if you want the player able to target the RPG Object.

**On UnTarget** will trigger when the RPG Object is deselected/ removed as target.

**On Interact** is triggered when the RPG Object is being interacted with. The *Max Interact Distance* is how far the player has to be (in meters) from the RPG Object before he can interact with it. It is good to keep this to 1.5 to 2 meters but you might have to set it wider if the RPG Object's collider it big and the player cannot move through RPG Objects.

The Actions placed into these Event/ Queue Lists will receive the following Subject Types:

- Self: The RPGObject that the queue belongs to
- TargetedBy: The Character that is trying to Target/ UnTarget/ Inteact this Object
- All other types will be invalid, except where [indicated different](unirpg-actions.html)

### Collider ### 

A collider is needed when the player should be able to select/ target the RPG Object. Simply add a collider, like a Box Collider component to the RPG Object and scale and offset the collider as needed. You can add the collider through the *Add Component* button in the Object's inspector (from Physics section), or from the menu: `component -> physics -> ...`. You can choose to use a Box, Sphere, or Capsule, whichever fits best.

![](/img/unirpg/object/win5.png)
