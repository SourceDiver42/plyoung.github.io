---
title: Vinoma UI Updaters
keywords: unity3d, visual novel, game maker
sidebar: vinoma_sidebar
toc: false
permalink: vinoma-ui-updaters.html
folder: vinoma
---

Vinoma UI Updaters
==================

The UI Updater makes it easier to manage the values on UI Elements by setting up ways to automatically update the UI element from Vinoma variable or switch values.

These components can be found under menu: `Component > Vinoma > GUI` and should be placed on the same object for which it needs to update the related Unity UI component (or read values from to update a Vinoma switch or variable's value).

Some of the updaters work in both directions. That is, if the player enter some text into the input field the linked Vinoma Variable's value will be updated too.

For each of these components you must set the `variableName` or `switchName` to the name of a Vinoma Switch or Variable to link to. `target` is the Unity UI component which must be linked to a Switch or Variable.

The following can be linked to a Vinoma **Switch**

- Active State: Will change the Active state of the GameObject depending on the value of a linked Switch. True = Active, False = Inactive.
- Toggle: Link the "is on" property of the Toggle component to a Vinoma Switch. The updater will update either the Toggle's value or the linked Switch's value depending on which changes.

These can be linked to a Vinoma **Variable**

- Input Field: The updater will update either the input field's value or the linked Variable's value depending on which changes.
- Slider: Link the value property of the Slider component. The updater will update either the slider's value or the linked Variable's value depending on which changes. Keep in mind the slider's max value and whole number options. If you wanted to represent a player's health out of 100 it might be easiest to set max to 100 and enable whole numbers.
- Text: Link the text property of the Text component. The updater will update the Text component's value when the linked Variable value changes.

![](/img/vinoma/11.png)

![](/img/vinoma/12.png)

