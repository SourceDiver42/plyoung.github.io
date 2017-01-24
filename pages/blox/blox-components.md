---
title: Blox Components
keywords: unity3d, blox, visual scripting, programming
sidebar: blox_sidebar
toc: false
permalink: blox-components.html
folder: blox
---

# Components

This page will document the various components that are available. While there are many components in Blox only those that do not fall under a specific system will be listed here. The other components are covered in their respective systems.

You can find these components under menu: `Component > Blox > Helpers`

## Disable on Awake

`Component > Blox > Helpers > Disable on Awake`

The GameObject that this component is on will be disabled as soon as the GameObject is added to the scene and then this component will remove itself from the GameObject.

## Don't Destroy On Load

`Component > Blox > Helpers > Don't Destroy On Load`

This component will mark the GameObject as `DontDestroyOnLoad` and then remove itself from the GameObject.

When loading a new level (non-additively) all objects in the scene are destroyed, then the objects in the new level are loaded. In order to preserve an object during level loading it needs to be marked as DontDestroyOnLoad. If the object is a component or game object then its entire transform hierarchy will not be destroyed either. Unity function [Object.DontDestroyOnLoad](http://docs.unity3d.com/ScriptReference/Object.DontDestroyOnLoad.html)

## Simple Follower

`Component > Blox > Helpers > Simple Follower`

Follows the target object.

## Sound Volume Updater

`Component > Blox > Helpers > Sound Volume Updater`

Add this component to any GameObject that has an AudioSource component on it to have it take care of the volume adjustment of that AudioSource.

## Trigger Blox Event on Click

`Component > Blox > Helpers > Trigger Blox Event on Click`

Triggers a Blox Event when Button is clicked. This components allows you to set values which will be send to send the triggered event similar to how the Trigger Event Block works.

The sent values will be available in the triggered Event as Event variables named param0, param1, param2, etc.

