---
title: UniRPG Database Events
keywords: unity3d, unirpg, rpg, game, maker
sidebar: unirpg_sidebar
toc: false
permalink: unirpg-database-events.html
folder: unirpg
---

[Attributes]: unirpg-database-classes.html#attribs
[Actions]: unirpg-actions.html
[Advanced]: unirpg-advanced.html

Events
======

![](/img/unirpg/db/win18.png)

Events are used by certain systems of UnIRPG. The [Attributes][], setup in the Actor Class, is one such system. In this case you  can choose which Event to execute when an Attribute's value reaches the minimum or maximum value or even when it changes.

Because Events make use of [Actions][] they could be used to do just about anything since there are Actions to perform a wide variety of things in the game, and it is actually quite easy to add new actions to UniRPG if you are a programmer. See the [Advanced][] section for more information on how to create your own Actions.

### Basic Settings ### 

You can define a **Screen Name** and supply up to 3 **Icons** and enter a **Description**. It is up to the selected GUI Theme to decide how and which of these fields it uses. UniRPG uses the 1<sup>st</sup> icon to display in various places in the editor, if set.

The **Notes** field is a special field where you can enter some notes or a reminder and is not supposed to be accessed in-game.

The **GUI Helper** is another special field which is used by the selected GUI Theme. The GUI Theme's documentation will indicate if it needs you to fill something into this field.

### Actions ### 

This is the list of actions that will be performed when the Event is called/ executed. Note that when an Attribute makes a call to the Event then only the user of the Event (Self) will be set, and no other targets.

Please have a look for detailed information on [Actions][] and the various actions that are available for use. 

The Actions placed into this Event/ Queue List will receive the following Subject Types:

- All types will be invalid except for Self and where [indicated different](unirpg-actions.html)
- When the Event is called by a **[State](unirpg-database-states.html)** then **Self** will be set to the owner of the State. Most likely a Character object.
- When the Event is called by an **[Attribute](unirpg-database-classes.html#attribs)** Value event (on Min/Max/Change) then **Self** will be set to the Character that the Class is on and the Attribute thus belongs to.
- So, Self will never be the Event itself but rather be the Character that the Event is running on because of how it landed on the Character via a State or an Attribute of the Character, via ActorClass, changing.

Actions are executed in order from top to bottom, so in our example targeting of the object is prevented while its death animation play and it is finally destroyed and removed from the scene.

![](/img/unirpg/db/win19.png)