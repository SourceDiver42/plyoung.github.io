---
title: Blox UI Element Updaters
keywords: unity3d, blox, visual scripting, programming
sidebar: blox_sidebar
toc: false
permalink: blox-ui-updaters.html
folder: blox
---

UI Element Updaters
===================

The UI Updaters makes it easier to manage the values on UI Elements by setting up ways to automatically set these values or get the values when there is user input (for example when he enters text into an Input Field).

![](img/blox/29.png)

These components can be found under menu: `Component > Blox > GUI > Updaters`

They all have similar properties:

* Target: is the UI Element which this updater will manage. If you do not set this then the updater will automatically look for the correct element on he same object as the UI updater.
* Data Source: This is used to specify where the data will come from which the UI Element will be updated with.
  * Properties Manager: The [Properties Manager](blox-property-manager) will be used to provide the data. You need to specify the name of the property to use as set up in the Properties Manager.

The rest of the options will depend on what kind of UI Updater you are using.

The **Dropdown** updater requires an "Options source" for the Dropdown Options. Note that you can also set up these Options in the Dropdown Component's inspector. If you do this then do not specify any options source. The options source must return either an array or list of string values.


