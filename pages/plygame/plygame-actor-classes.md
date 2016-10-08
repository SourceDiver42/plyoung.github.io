---
title: plyGame Actor Classes
keywords: unity3d, plygame, rpg, game, maker
sidebar: plygame_sidebar
toc: false
permalink: plygame-actor-classes.html
folder: plygame
---

Actor Classes
=====================

![](/img/plygame/actclass/07.png)

All Actors (Character) must have an Actor Class set and you define those classes here. You can think of classes in terms of the typical RPG definition of the word: Warrior, Wizard, Mage, Thief, etc. or in a more general purpose way of: Player, Monster, Default. plyGame does not try to force you to use a system based on classic classes but you need to at least define something here so that an Actor can be linked to [Attributes](attributes.html) via the Class.

All classes has their own plyBlox and you might want to add Events that can listen for changes in Attribute values, for example when the Health Attribute reaches zero and you want to play the death animation. Note, this is just an example and a better place to act on HP reaching zero would be in the plyBlox on a Character object.

The **Edit Events** button will open the plyBlox editor for the selected class. The **Edit Variables** button will allow you to edit the [Local Variables](plyblox.md#vars) of the class.

### Definition  

- **Ident**: This is a unique identifier you choose to give this definition. It is optional but can be used when you want to lookup and use a definition in plyBlox.
- **Screen Name**: This is the pretty name of the definition and what might be used when you want to show this definition to the player in-game.
- **Short Name**: A shorter name that you might want to use in-game or even as a way to lookup this definition in plyBlox.
- **Meta Data**: Can be any kind of data and is useful when you want to add some additional information to the definition to later use.
- **Description**: A description of the definition that you might want to present to the player in-game or simply use as a reminder or notes for yourself.
- **Images**: Definitions can have up to 3 different images. How you use this is up to you and adding images is optional.

### Leveling  

As mentioned, you do not have to use the class based system and therefore Leveling, so this section is optional. Here you can indicate what the maximum experience is that the character can accumulate and what the maximum level is that it can reach. You will also notice a graph or curve, clicking on this will open the Curve editor where you can tweak how experience and level relate to each other.

### Attributes  

Here is where you assign the defined Attributes to a Class, which in turn will assign them to the Actor using the class. You should at least add the Experience and Health attributes here but it is not necessary if you do not make sue of these kind of attributes.

An Attribute will have a starting or **base value**, and a **max value** it can reach. You will not be allowed to push the Value of the attribute beyond its max when manipulating Attributes via Blocks in plyBlox.

![](/img/plygame/actclass/11.png)
Attributes has two major kinds of values. The "Value" and "Consumable Value" and you will notice the reference to these on Blocks that can access and manipulate Attributes in plyBlox. Which kind you use will depend on the kind of attribute it is. 'Value' typically indicates the upper limits for a 'Cosumable Value'. Health's "Value" indicates what the maximum health is while "Cosumable Value" would indicate the current Health a character has. So something like 20/50 HP indicates, 20 'consumable value' out of 50 'value' (or total).

The **Grows with Level** option can be enabled when you want the Attribute's "Value" to change when the Level of the character changes. You can edit the curve to tweak how the Value changes with each level.

Enable **Update Consumable** if you want the consumable value to also be updated and set to the be the same as 'Value'. This is how you would restore a character's Health, Mana, etc to the maximum value it can be when the character levels up.
 

-----------------------------------------------------------------------------------------------------------------------
### plyBlox 

The Actor Class adds events like the 'Level Change' under `plyGame > Attribute`.

Blocks to modify or read the Level can be found in `Character > Actor(plyGame)`.

