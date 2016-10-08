---
title: Blox Components
keywords: unity3d, blox, visual scripting, programming
sidebar: blox_sidebar
toc: false
permalink: blox-components.html
folder: blox
---

Components
==========

This page will document the various components that are available. While there are many components in Blox only those that do not fall under a specific system will be listed here. The other components are covered in their respective systems.

You can find these components under menu: `Component > Blox > Helpers`

### Disable on Awake ###

The GameObject that this component is on will be disabled as soon as the GameObject is added to the scene and then this component will remove itself from the GameObject.

### Don't Destroy On Load ###

This component will mark the GameObject as `DontDestroyOnLoad` and then remove itself from the GameObject.

When loading a new level (non-additively) all objects in the scene are destroyed, then the objects in the new level are loaded. In order to preserve an object during level loading it needs to be marked as DontDestroyOnLoad. If the object is a component or game object then its entire transform hierarchy will not be destroyed either. Unity function [Object.DontDestroyOnLoad](http://docs.unity3d.com/ScriptReference/Object.DontDestroyOnLoad.html)

### Sound Volume Updater ###

Add this component to any GameObject that has an AudioSource component on it to have it take care of the volume adjustment of that AudioSource.

