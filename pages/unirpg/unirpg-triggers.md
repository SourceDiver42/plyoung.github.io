---
title: UniRPG Triggers
keywords: unity3d, unirpg, rpg, game, maker
sidebar: unirpg_sidebar
toc: false
permalink: unirpg-triggers.html
folder: unirpg
---

[Actions]: uirpg-actions.html

![](/img/unirpg/intro/tbutton7.png) Triggers
========

![](/img/unirpg/trigger/win1.png)

Triggers are used to "trigger" Events which will run the [Actions][] associated with that event.

A new trigger can be created via the menu: `gameobject -> create other -> unirpg trigger` or the toolbar button.

A trigger can be set to **None**, in which case it will only have the **On Loaded** event available. This event is called as soon as the Trigger was loaded, which means, as soon as the game scene/ map, that it is in, was loaded.

Setting the Trigger to **Rectangular or Circular** will allow for more trigger events and an area that should be checked (indicated by a shaded pink sphere or block). The kind of events that can be triggered includes ...

- **On Player Enter**: called when the Player enters the trigger area
- **On Player Exit**: called when the Player exits the trigger area
- **On Player Stay**: called each frame as long as the Player stays in the trigger area
- **On Actor Enter**: called when any kind of Actor (Player or non-Player) enters the trigger area
- **On Actor Exit**: called when the Actor exits the trigger area
- **On Actor Stay**: called each frame as long as the Actor stays in the trigger area

The Actions placed into these Event/ Queue Lists will receive the following Subject Types:

- Self: The Trigger that the queue belongs to (this trigger)
- Target: Is the Player that triggered one of the Player related events. It is also Character that triggered one of the Actor related events
- All other types will be invalid, except where [indicated different](unirpg-actions.html)
