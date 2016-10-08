---
title: plyGame Attributes
keywords: unity3d, plygame, rpg, game, maker
sidebar: plygame_sidebar
toc: false
permalink: plygame-attributes.html
folder: plygame
---

Attributes
==================

![](/img/plygame/attribs/06.png)

Attributes describe properties of an Actor - a Character like the Player or Non-Player Characters (NPC). These include values like the Actor's Health Points, Experience Points, Intelligence, Mana Point, etc.

In this section you simply define the Attributes that are available in plyGame but it does not mean the Actor has these attributes. You use the Actor Class to define what attributes an Actor will have and the Actor will only have those from the Class it uses. More on this in the [Actor Classes](actor-classes.html) section.

There are two main types of Attributes, **Health** and **Experience** and you should at least define these two and link them in the editor. The rest are up to your game's needs.

### Values ###

It is important to understand that an Attribute has two kinds of ways to represent its "value" and how you use them depends on what kind of Attribute it is. You will see the Blocks and Events and other areas of plyGame referring to them. 

There are the **Value** and **Consumable Value**.

The Value of an Attribute is normally used and referred to when dealing with attributes where the value do not go up and down often, like when you want to talk about a character's Strength, Intelligence, Wisdom, etc. In this case you would totally ignore the Consumable Value and never reference it from Blocks as it will be considered "invalid". When you want to increase the players Strength you will want to modify the Attribute's *Value*.

The Consumable Value is used when you are working with attributes where the attribute has not only a value but also a 'current value'. Take Health for example. The player's Health could go up to say 20 but at any given time it might be lower cause he is receiving damage. So the player might have 5 our of 20 health. The 'Consumable Value' would be the 5 and 'Value' would be the max the health attribute can reach, 20. When you want to increase the player's total Health you will want to modify the Attribute's *Value*, and when you want to cause damage to or heal the player you will modify the *Comsumable Value*.

There is also the 'upper limit' an Attribute's value can reach and a base value it is initialized to (the value it has at level 1). These can be edited in the Actor Class where you add the Attribute to the Class.

![](/img/plygame/attribs/09.png)
When manipulating the **XP (Experience) Attribute** (the one linked to the Experience field) you need to increase the 'Value'. The consumable value is not used with XP. When manipulating the **HP (health) Attribute** (the one linked to the Health field) you will want to change the 'Value' when increasing the maximum HP and the 'Consumable Value' when you want to cause damage (decrease value) or heal (increase value) the character.

### Definition ###

- **Ident**: This is a unique identifier you choose to give this definition. It is optional but can be used when you want to lookup and use a definition in plyBlox.
- **Screen Name**: This is the pretty name of the definition and what might be used when you want to show this definition to the player in-game.
- **Short Name**: A shorter name that you might want to use in-game or even as a way to lookup this definition in plyBlox.
- **Meta Data**: Can be any kind of data and is useful when you want to add some additional information to the definition to later use.
- **Description**: A description of the definition that you might want to present to the player in-game or simply use as a reminder or notes for yourself.
- **Images**: Definitions can have up to 3 different images. How you use this is up to you and adding images is optional.

 

-----------------------------------------------------------------------------------------------------------------------
### plyBlox ###

This systems adds new Events under `plyGame > Attributes` which can be used to respond on the Attribute's value or consumable value changing. These Events will normally be added to Blox of the Character or the Actor Class. Keep in mind that if you use the Blox object of an Actor Class then all Characters sharing that Class would have similar Events fire on them and Blocks reacting on those events, so if a character needs to react in a very unique way, for example a Boss character, then rather respond to these events in the character's Blox object (or create an Actor Class specific to that character).

The Change Events for Attributes will *not* trigger if the change in value occurred because of a change in Level.

There are also Blocks that can be used to manipulate Attributes and these can be found under: `Character > Actor (plyGame)`. These blocks could be used by Skill events to apply damage to a character (by changing the HP) or give the payer XP.



