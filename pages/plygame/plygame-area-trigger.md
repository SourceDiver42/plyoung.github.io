---
title: plyGame Area Trigger
keywords: unity3d, plygame, rpg, game, maker
sidebar: plygame_sidebar
toc: false
permalink: plygame-area-trigger.html
folder: plygame
---

Area Trigger
====================

![](/img/plygame/trigger/00.png)

The area trigger allows you to create a volume that will trigger events when something enters, exit or stay in it. The area trigger can be added via the plyGame Toolbar by expanding the Systems button or from the menu: `GameObject > Create Other > Area Trigger`.

The trigger can be Circular or Rectangular. The size, rotation and position of the trigger is controlled via the Transform options, Position, Rotation and Scale.

The Area Trigger will trigger Events only in a plyBlox component that is on the trigger (on the same GameObject as the area trigger component).

The Events under `Trigger` can be used. The `Trigger > with info` Events are useful when you need to know what made the event trigger as it sends the GameObject too via the temporary variable `triggerObject`.

**Trigger Only On** allows you to set that the trigger will only call Enter, Exit, and Stay Events for the specific object type causing the trigger. Note that this is only applicable when using the `Trigger > Area Trigger` Events and not for any other trigger type event.