---
title: UniRPG Actions Object
keywords: unity3d, unirpg, rpg, game, maker
sidebar: unirpg_sidebar
toc: false
permalink: unirpg-actions-object.html
folder: unirpg
---

Animation 
---------

The Animation Action allows you to manipulate animations on the target object. This Action is for use on the [Legacy animation system](http://docs.unity3d.com/Documentation/Manual/Animations40.html), not Mecanim.

You an choose to **Stop** the currently playing animation or **Play** another one; **Crossfade** the animation, play it **Backwards**, and what **Wrap Mode** should be used. See the Unity documentation on [animations](http://docs.unity3d.com/Documentation/Manual/Animations40.html) to learn more about these specific options.

The **Clip Name** and **Speed** fields give you the option to either enter the values directly or retrieve them from [Global Variables][]. The animation will not play if the clip name is wrong and not found on the target object.

Destroy 
-------

This action allows you to destroy an object. You have the option to specify that the object should only be destroyed after a specified amount of time elapsed.

EnDisable 
---------

You can choose to enable or disable an object.

If you select to specify a component you will be given the opportunity to enter the name of a component that will be enabled or disabled on the object, rather than the whole object. For example, if you wanted to turn off the NPC AI, for the default non-player character controller then you would enter "NPC" into the component field. The component will always be one word and is case sensitive. For example, a component like "Character Controller", read in the character inspector, would be entered as "CharacterController" - one word, no spaces; assuming that is the component you want to enable/ disable.

Move 
----

You can choose to move the target to a specified location other location of another target object.

If you choose a SpawnPoint as target then you also need to specify the identifier you entered for the SpawnPoint. Make sure to specify a unique value in the *ident* field in die Inspector of the SpawnPoint.

Spawn 
-----

The **Prefab** field can contain any Prefab (GameObject) that you want Instantiated in the game scene when this action is executed.

You can specify a location and rotation for the new object.

If you choose to make it a child object of another object, then you need to choose what the parent object will be. You can also choose whether the potion and rotation should be local - relative to the parent object.

A Spawn Point could make a good target for parent but it can be any kind of object in the scene, even an empty GameObject. As an example, you want to create something in the game scene while the game is running but to make it easier to "find" the exact location to place the the new object you could choose to make it a child object of something in the scene. This *something* can be an empty GameObject you placed in the scene, during design time, at the exact location you would want to create the new object later. You would choose *Specified* as the parent object and drag the empty GameObject into the field, and then set the position to `0x0x0` and make it local. Now the new object will be created exactly where you want it.

Toggle targeted 
---------------

This action allows you to set or clear the can-be-targeted flag on an interact object. This include objects like Actors, RPG Items and RPG Objects. This is useful when you want to prevent something, like the payer, from targeting the object.

