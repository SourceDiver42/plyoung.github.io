---
title: Blox Property Manager
keywords: unity3d, blox, visual scripting, programming
sidebar: blox_sidebar
toc: false
permalink: blox-property-manager.html
folder: blox
---

Property Manager
================

The properties manager allows you to create named properties which can then be accessed via property manager Blocks to set values on or get values from these properties. The setters and getters of these properties can be bound to static fields, properties or methods allowing you to specify what to invoke when the property's value should be set or get.

This differ from [Blox Global Variables](blox-variables) in that it allows you to easily set or get values in APIs like UnityEngine or 3rd party tools without having to use Blocks specific to those APIs. Other systems, like the [UI Updaters](blox-ui-updaters), can then make use of these properties to read and write the property values as needed.

It was mainly developed to make it easier to manage game settings, like setting the game to fullscreen or changing the quality settings but can be used with any member that the system can bind to. There is an option to save the value you set and to automatically restore it when the game starts. This is useful for when you want to use the Properties Manager to manage your game settings and restore them when the game starts.

The Property Manager's editor is in the BGS Main Editor window. menu: `Blox > Game Systems Window` and then `Properties Manager` under the `Main` tab.

![](img/blox/28.png)

Select the option in front of the property name if the property is the kind that should persist and auto-restore its value on game startup. You will want to keep this on for properties related to game settings and off for anything else.

Next you see the property name. Be sure to select a unique name which you will not want to change later since changes here will require you to change the name anywhere else you used it. Properties are always lookup by this name.

Next to the name you will see the type of the property's value. This could be an Integer, Boolean, String, etc. If it shows up in red then it means the setter and getter are not using the same type and it is very likely that this will cause an error when the game runs.

The getter button allows you to bind to the member which will be used when you want to the value from this property.

The setter buttons allows you to bind to the member which will be used when you change the value of this property.

**Be careful** with the kind of properties you bind to. If you get an error during the Databinding Initialize then you are probably trying to bind to something which is not be ready to read from by the time the property manager is starting up (which happens very early in game startup).

