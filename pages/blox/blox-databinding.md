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

Like mentioned, you will normally interact with this system when another requires it. When you need to bind to a value a Data Binding window will come up. This is where you can select a constant value or some property to bind to.

![](img/blox/26.png)

### Constant

This option allows you to bind to a value which will not change. This could be a value which to check the value of a bound property against. In the splash screens manager example a boolean value (true) is bound to for the second field of a condition check.

### Property

Here you will find a list of properties that can be bound to. In terms of code these would be fields and properties. In the splash screens manager example the Bootstrap's "IsDone" property was chosen to watch when that turns from False to True.

If you choose a non-static property then a context object for that property must be specified. There are a few ways to get a reference to the wanted object.

- With Name: Find the first GameObject with the given Name. This object must have the component on it which the property is defined in.
- With Tag: Find the first GameObject with the given Tag. This object must have the component on it which the property is defined in.
- Of Type: This will find the first GameObject which has the component on it which the property is defined in.
- Instance: This will present you with a list of all static members which returns a reference to the type which declares the property. This is useful for working with singleton types.
- Owner: Is useful for binds done directly on a GameObject, for example when you are setting up a [Button Action](blox-ui-updaters) component. This refers to the object on which the data binding was done.

### Data Provider

Here you can bind to another data provider. Further options will be presented depending on what Data Provider is chosen.


Data Providers
--------------

These are the providers defined in Blox and Blox Game Systems. There might be other providers defined by plugins; in which case you should find more information on them in the documentation for that plugin.

### Common/Blox Variable

`Result: Depends on Variable Type`

Return the value of a Global, Object, or [Blox Variable](blox-variables).

For the Blox and Object variable types you need to specify from which objects these variables will be retrieved. You can choose to find the object by its name or tag, or to use "owner" which is the object on which the data bind was created. "Owner" is useful for binds done directly on a GameObject, for example when you are setting up a [Button Action](blox-ui-updaters) component.

Blox variables also require that you select which Blox the variable was defined in.

### Common/Comparison Check

`Result: Boolean (True or False)`

A condition where some properties and values are compared. You can click on the 1st or 3rd button to bring up another Data Binding window. This allows you to select what to bind to and watch for changes. Note that the middle button `==` can be changed when you click on it.

The `And` and `Or` options should only be used with values which result in a Boolean value. Here you are testing for the following kind of results:

- True and True = True
- False and False = False
- True and False = False
- False and True = False

- True or True = True
- False or False = False
- True or False = True
- False or True = True

### Common/Managed Property

`Result: Depends on Property Type`

Return the value of a [managed property](blox-property-manager.html).

### Common/Maths Operation

`Result: Float`

Does a mathematical operation on two values. The first one should be a Float to prevent rounding problems. You can click on the 1st or 3rd button to bring up another Data Binding window. This allows you to select what to bind to and watch for changes. The opeation to perform on the values can be selected with the middle button.




