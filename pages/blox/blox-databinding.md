---
title: Blox Data Binding
keywords: unity3d, blox, visual scripting, programming
sidebar: blox_sidebar
toc: false
permalink: blox-databinding.html
folder: blox
---

Data Binding
============

The Blox Data Binding system supports other systems in making it easier to check data and perform actions without having to write code. The [Splash Screens Manager](blox-splash-screens-manager.html) is one such system where it allows you to set up a condition, checking for a change of values before taking action.

**NOTE** This system is still under development and might change. Some features will not be available yet.

Like mentioned, you will normally interact with this system when another requires it. When you need to bind to a value a Data Binding window will come up. This is where you can select a constant value or some property to bind to.

![](img/blox/26.png)

### Constant

This option allows you to bind to a value which will not change. This could be a value which to check the value of a bound property against. In the splash screens manager example a boolean value (true) is bound to for the second field of a condition check.

### Global Property

Here you will find a list of "global" properties that can be bound to. In terms of code these would be static fields and properties. In the splash screens manager example the Bootstrap's "IsDone" property was chosen to watch when that turns from False to True.


