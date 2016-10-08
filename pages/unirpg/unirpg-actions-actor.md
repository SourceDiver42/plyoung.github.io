---
title: UniRPG Actions Actor
keywords: unity3d, unirpg, rpg, game, maker
sidebar: unirpg_sidebar
toc: false
permalink: unirpg-actions-actor.html
folder: unirpg
---


[Attribute]: unirpg-database-attribs.html
[Self]: unirpg-actions.html

Attribute Action 
----------------

The Attribute Action allows you to manipulate an [Attribute][] on a target Actor. One of the obvious uses for this action is to subtract a value from an attribute that indicates an Actor's health when something attacks the Actor.

The **Affect Attribute** is which attribute to affect and whether you want to affect the Value, Minimum or Maximum of the Attribute.

You then choose if a value should be Added to or Subtracted from the selected attribute or if the attribute's value should be set to a specific value.

The next block is the value that should be applied. Here you can choose to enter values directly or read them from [Global Variables][]. If you enable *use random range* then you will be able to enter a second value and this action will choose a random value between the two values you entered.

You can also choose if the value(s) you entered should be a percentage value of the attribute's current value or its maximum value.

The Modifiers allows you to specify how the value should be modified before it is applied to the target attribute. You can add any number of modifiers and they will be applied one after the other from the top down.

A modifier has 4 fields. The 1<sup>st</sup> tells how the modifier's value should be applied to the value before moving on to the next modifier. Then follows the two parameters of the modifier and how these parameters are combined to create the modifier's value. You can choose to add only one parameter in which case that parameter becomes the modifier's value. If you choose two parameters then the will be added/ subtracted/ divided/ multiplied with each other to create the modifier value which will be applied to the value.

The modifier parameters can get their values from, 

- *Numeric* - a value you enter directly or a global variable
- *The Value* - at its current state after previous modifiers where applied
- *Level* - the current level of [Self][]
- *Attribute* - the current value of Self's [Attribute][].

Bag: Add or Remove Item 
-----------------------

This action allows you to manipulate items in Bag slots.

You can choose to ...

- Add an item from an equip slot into the bag. The item in the equip slot will *not* be removed. For that you need another action to also be performed. This action will basically make a clone of the equip slot's item in the bag. The next block will give you the option to select from which equip slot to copy the item

- Add a specified item to the bag. In the next block you select the item and how many copies you want to put in the bag. Note that the item must be present in the [Database][Item Database].

- Remove and item from a specified bag slot. In the next block you choose from which slot number an item should be removed and how many of should be removed from the slot, if there are more than one of the item stacked in the mentioned bag slot.

The last option you have is to decide if the whole action execution queue should be exited if this action failed to perform. A scenario where this is useful is when you want to unequip the off-hand item. First you want to make a copy in the bag but if that fails because the bag is full then you do not want the next action, which removes the item from the off-hand, to actually run.

Currency: Change 
----------------

With this action you can Add, Remove or Set the Currency of the selected Subject. The Subject must be a character else this Action will fail.


DefaultNPC: Change Type 
-----------------------

This action works only for the [Default NPC](actors-default.html). It is sued to change the NPC's type between Friendly, Neutral and Hostile.

EnDisable Character 
-------------------

This action works only for the Character Types like the [Default NPC & Player](actors-default.html). It is used to turn on/ off the AI (or player control) of the Character.

Equip Slot 
----------

This action allows you to manipulate Equip Slots. The **Subject** field, the target, will most likely be *Equip Target*.

You can choose to ...

- Equip Item from Bag allows you to equip an item from the Bag. The item will not be removed from the bag, you need to do that with another action. You can choose to which equip slot to equip and from which bag slot.

- Equip specified item. You can select the item that should be equipped. Note that the item must be present in the [Database][Item Database].

- UnEquip item from a slot.

The last option you have is to decide if the whole action execution queue should be exited if this action failed to perform. A scenario where this is useful is when you want to equip an item from the bag but for some reason it failed. In that case you would not want the next action, which removes the item from the bag, to execute.

Skill: Add or Remove 
--------------------

This action allows you to give an Actor a skill or remove it. This will not equip the skill to the action slots/ bar, which is handled by another action.

You simply select whether to add or remove a skill and which skill it should be.

The skill will also be unequipped from the action slots when you chose to remove a skill.

Skill: Equip or UnEquip 
-----------------------

This action will equip or unequip a skill to/ from a specified action slot or the primary/ secondary action slots. The skill will also be added to the actor's list of available skills if it is not present so you do not need to call the *Add or Remove* action.

State 
-----

This action allows you to set or clear/ remove a state on the subject. The subject should be an Actor.
