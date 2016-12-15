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

You will normally interact with this system when another requires it. When you need to bind to a value a Data Binding window will come up. This is where you can select a constant value, property or other source to bind to.

![](img/blox/26.png)

Blackboard
----------

Some Data Providers will show an option to "set" a value. For example when you make use of the [Properties Manager](blox-property-manager.html) setter button or the [UI Button Action](blox-ui-updaters.html#button-action). In other cases, like the Member Bind, the bind might require one or more values to set a bound property/ field or when invoking a bound function.

The value(s) can come from either other Binds (DataProperty) or from the "Blackboard".

The Blackboard is an area where you can define a set of named values. In some cases, like the [Properties Manager](blox-property-manager.html), the system might add named values to the Blackboard (in this case a value called "value"). Only certain systems will present a Blackboard, like the [UI Button Action](blox-ui-updaters.html#button-action).

Data Providers
--------------

These are the providers defined in Blox and Blox Game Systems. There might be other providers defined by plugins; in which case you should find more information on them in the documentation for that plugin.

### Attribute

`Result: Float`

Return the Value of Max Value of an Attribute.

The "from" option is used to determine from where to get the Attribute.

- Caller: Is used to get the Attribute from the same owner (or the caller) making use of this Attribute Data provider. This is useful when setting up binds where you do not know ahead of time who the owner or target should be. For example when setting up the Value/ Max modifiers of Attribute Definitions.
- Target: Allows you to specify a target. This will normally come form a Property type bind.

For setter binds you need to specify how the value will be set. This can be from a value in the Blackboard or another data bind.

### Blox Event

`Result: Depends on Blox Variable's value Type`

This will trigger a Blox Event on the target object when the value changes of one of the bounds "params". The values of the bound params will also be send to the Event as Event Variables called `param0`, `param1`, etc.

The Event can do whatever calculations are needed and then store the final value in a Blox Variable. The value in this Blox Variable is what the DataProvider will use as its own return value.

### Comparison Check

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

### Constant

This allows you to bind to a value which will not change.

### Curve Data Map

`Result: Float`

This returns a value mapped to a curve. You need to specify an input value (float) which runs along the X axis (horizontal) of the curve. The Y axis value (vertical) will be the returned value depending on what the input value is.

You can choose to round the resulting value. This is useful when wanting to work with whole numbers since the curve is returning real numbers (numbers that have decimal representations).

Note that the curve is initialised to a value range of 0 to 1. You can use the mouse scroll wheel to "zoom out" and drag the end-point (last key) of the curve further to cover the range of values needed.

In this example the input value is `0.5` and will result in an output value of `0.25`.

![](img/blox/32.png)

### Graph Mapped Values

`Result: Float`

Similar to the Curve this will return a value dependant on an input value. You can however choose which of the axis the input value is measured against. The other axis will then be the return value.

If using input value as Y and X as return value the 1st Y value which matches or is close to the input value will be returned. So graphs with Y values going up and down over its length will not work. The Y values should gradually increase from left to right for the length of X as shown in the image below.

![](img/blox/34.png)

### Managed Property

`Result: Depends on Property Type`

Return the value of a [managed property](blox-property-manager.html).

For setter binds you need to specify how the value will be set. This can be from a value in the Blackboard or another data bind.

### Maths Operation

`Result: Float`

Does a mathematical operation on two values. The first one should be a Float, if you are working with float values, to prevent rounding problems. You can click on the 1st or 3rd button to bring up another Data Binding window. This allows you to select what to bind to and watch for changes. The operation to perform on the values can be selected with the middle button.

### Member Bind

This allows you to bind to a class member (public fields, properties and methods/ functions). You will only see members from types which was set to be included in the [Blocks Settings](blox-start.html#blox-settings).

If you choose a non-static property then a context object for that property must be specified. There are a few ways to get a reference to the context object.

- With Name: Find the first GameObject with the given Name. This object must have the component on it which the property is defined in.
- With Tag: Find the first GameObject with the given Tag. This object must have the component on it which the property is defined in.
- Of Type: This will find the first GameObject which has the component on it which the property is defined in.
- Instance: This will present you with a list of all static members which returns a reference to the type which declares the property. This is useful for working with singleton types.
- Owner: Is useful for binds done directly on a GameObject, for example when you are setting up a [Button Action](blox-ui-updaters.html) component. This refers to the object on which the data binding was done. If the data binding was done in the [Properties Manager](blox-property-manager.html) for example then chances are good you would not use 'owner' since the owner in that case is the Property Manager itself.

For setter binds you need to specify how the value will be set. This can be from a value in the Blackboard or another data bind.

For method binds (setter or getter) you might see one or more arguments which must be send on to the method when it is invoked. The values for tehse can be set from the Blackboard or another data bind.

### Variable

`Result: Depends on Variable's Value Type`

Return the value of a [Global, Object, or Blox Variable](blox-variables.html).

For the Blox and Object variable types you need to specify from which objects these variables will be retrieved. You can choose to find the object by its name or tag, or to use "owner" which is the object on which the data bind was created. "Owner" is useful for binds done directly on a GameObject, for example when you are setting up a [Button Action](blox-ui-updaters.html) component.

Blox variables also require that you select which Blox the variable was defined in.

For setter binds you need to specify how the value will be set. This can be from a value in the Blackboard or another data bind.
