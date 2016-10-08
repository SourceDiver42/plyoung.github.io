---
title: UniRPG Actions
keywords: unity3d, unirpg, rpg, game, maker
sidebar: unirpg_sidebar
toc: false
permalink: unirpg-actions.html
folder: unirpg
---


[Advanced]: unirpg-advanced-actions.html

Actions
=======

![](/img/unirpg/action/win1.png)

Actions are the main driver in UniRPG and is used wherever you see the Event/ Action Queue systems. For example with the Skills' On Use event, or an RPG Item's On Equip event.

Actions are always executed from top to bottom in the event's action list. There might be actions that create conditions and decide to step over and skip an action or even step back to the previous action(s) to be executed again.

You can also create your own Actions if there is a need for it. Have a look at the [Advanced][] section for more information on this.

An Action will generally have one Subject (or Target). What this subject can be is determined by your option. Note that some Actions do not need a subject, for example the Delay Action. For those that do you will see the option to choose a Subject/ Target Type from a list. What the selected Type's meaning is will depend on the Action Queue that the action is used in, so look at the section of documentation that covers the specific Item, or Character, Event, Skill, etc. to find out what the exact meaning of the Subject Type is.

The types include: **Self**, **Targeted**, **TargetedBy**, **Specified**, **EquipTarget**, and **Player**.

The types **Player** and **Specified** are special and will always have the same meaning. Player being the player object and Specified being the object you specified. It is only the meaning of Self, Targeted, TargetedBy and EquipTarget which might change or not be valid at all, depending on the event/ action queue.

This documentation will only cove the Actions that are part of UniRPG Core. Some plugins might provide additional Actions and should have documentation on their use.

List of Actions
---------------

These are all the Actions available in UnIRPG Core.

- [Actor Actions](actions-actor.html)
  - Attribute (Change Attribute value)
  - Bag: Add or Remove Item
  - Currency: Change (Add, Remove or Set the gold)
  - DefaultNPC: Change Type (for example, make it Neutral or Hostile)
  - DefaultNPC: EnDisable AI (Turn the NPC AI on or off)
  - Equip Slot (Add or Remove Item from Equip Slot)
  - Skill: Add or Remove a Skill
  - Skill: Equip or UnEquip a Skill
  - State (Set or Clear a State)
- [Object Actions](actions-object.html)
  - Animation: Play or Stop
  - Destroy
  - EnDisable (Enable or Disable an Object or Component/Behaviour on an Object)
  - Move
  - Spawn (Create)
  - Toggle 'can be targeted'
- [System Actions](actions-sys.html)
  - Camera: Activate
  - Debug Log (Show messages on Unity Console)
  - Execution: Branching (If Then)
  - Execution: Delay
  - Execution: Stop
  - Load Scene (or Exit game to menu)
  - Message to GUI
  - Send message (to Object(s))
  - Set Custom Variable (a var on Character, Item, Trigger, etc)
  - Set Global Variable


