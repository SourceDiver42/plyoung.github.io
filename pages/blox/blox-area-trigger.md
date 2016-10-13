---
title: Blox Area Trigger
keywords: unity3d, blox, visual scripting, programming
sidebar: blox_sidebar
toc: false
permalink: blox-area-trigger.html
folder: blox
---

Area Trigger
============

Menu: `Blox > Game Systems > Area Trigger`

The Area Trigger will trigger a Blox Event when an object in the specified layer interacts with it.

For a trigger to work there must be a Collider and RigidBody on the object(s) which can trigger it. You may choose for the trigger to contain the RigidBody then the other object(s) do not need this but they should still have colliders. The "Is Trigger" option on the Collider maybe on or off - either will work and still cause the Area Trigger to trigger when the object enter or exit it.

Optionally you may add the Trigger(s) to a unique Layer and configure what can interact with it in the [Layer Collision Matrix](https://docs.unity3d.com/Manual/LayerBasedCollision.html). You might for example tun off interaction between the floor and the trigger's layer. Menu: `Edit > Project Settings > Physics`
