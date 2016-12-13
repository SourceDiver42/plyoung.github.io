---
title: Blox UI Element Updater
keywords: unity3d, blox, visual scripting, programming
sidebar: blox_sidebar
toc: false
permalink: blox-ui-updaters.html
folder: blox
---

UI Element Updater
==================

The UI Updater makes it easier to manage the values on UI Elements by setting up ways to automatically set these values or get the values when there is user input (for example when the player enters text into an Input Field).

![](img/blox/29.png)

These components can be found under menu: `Component > Blox > GUI > Updaters`

They all have similar properties:

- Target: is the UI Element which this updater will manage. If you do not set this then the updater will automatically look for the correct element on he same object as the UI updater.
- Property Name: The [Properties Manager](blox-property-manager.html) will be used to bind the data. You need to specify the name of the property to use as set up in the Properties Manager.

The rest of the options will depend on what kind of UI Updater you are using.

- Active State: Will change the Active state of the GameObject depending on the value of a Boolean bind. True = Active, False = Inactive.
- Color: Updates the colour property of a UI Element.
- Dropdown: Bind to the Value (Integer) property of a Dropdown component. The updater will update either the drop down value or the bound value depending on which changes. The updater also requires an "Options source" for the Dropdown Options. Note that you can also set up these Options in the Dropdown Component's inspector. If you do this then do not specify any options source. The options source must return either an array or list of string values.
- Image: Updates an image (sprite) property of a UI Element.
- Input Field: Bind with the text property of an Input Field component. The updater will update either the input field's value or the bound value depending on which changes.
- RawImage: Bind to the texture property of the RawImage component.
- Slider: Bind with the value property of the Slider component. The updater will update either the slider's value or the bound value depending on which changes.
- Text: Bind to the text property of the Text component. The updater will update either the Text component's value or the bound value depending on which changes.
- Toggle: Bind to the "is on" property of the Toggle component. The updater will update either the Toggle's value or the bound value depending on which changes.

Button Action
-------------

The Button Action gives you a way to trigger a bind of a DataProvider when a UI Button's Click event is triggered. The most common use would be to bind to a member (which can be either property, field or method members of a type). It also allows you to send values to the bound method or set the value on a bound property or field.

The [Blackboard](blox-databinding.html#blackboard) allows you to define values which can be accessed in the Data bind. YTou could for example use this to send values to a Member Bind like a function which requires one or more arguments when invoked.
