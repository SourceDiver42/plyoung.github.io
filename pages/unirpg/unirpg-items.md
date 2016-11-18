---
title: UniRPG Items
keywords: unity3d, unirpg, rpg, game, maker
sidebar: unirpg_sidebar
toc: false
permalink: unirpg-items.html
folder: unirpg
---

[Database]: unirpg-database.html#itemcat
[Game Settings]: unirpg-database.html#game

RPG Items
=========

An RPG Item is something that can be used by the player, like a sword or potion.

To make an object or prefab into an RPG Item you need to add the RPG Item component to it. Select the Prefab or Game Object that you want to turn into an Item and then in the [Inspector](http://unity3d.com/learn/tutorials/modules/beginner/editor/the-inspector) select **Add Component** `UniRPG -> RPG Item`. You can also do this from menu: `Component -> UniRPG -> RPG Item`.

![](/img/unirpg/item/win1.png)
![](/img/unirpg/item/win2.png)
![](/img/unirpg/item/win3.png)

### Basic Info ### 

![](/img/unirpg/item/win4.png)

You can enter a name, description, some private notes and assign up to three images to the Item. It is up to your selected GUI Theme to decide how these are used. UnIRPG will use the 1<sup>st</sup> icon throughout the editor.

You can assign a Cost to the item which will dictate what its buy and sell price is.

The **Max Stack** field determines how many of this item can be stacked in a Bag. A stack is when more than one copy of the same item is in a bag slot. Things like potions are normally stacked to a certain amount, like (20), while items like swords would not stack and only (1) can occupy a bag slot at a time.

The **Allow auto-pickup** option can be set if you want the player to auto-pickup the item when he runs over it. The auto-pickup system must be on under [Game Settings][] if you want this to work. You also need to create a trigger for this to work.

You may set a **Category** and **Sub Type** if you defined these in the [Database][].

The **On use-from-nag** field is important and tells what kind of events should trigger when the Item is *Used* from the bag. For something like a Potion that the player drinks you might want to set this to **Trigger OnUse** while for a sword you would want to select **Equip**. So anything that the player can possibly wear in an equip slot should be set as *Equip* while the rest of the items will be *Trigger OnUse*.

If you chose "Trigger OnUse" you will also be able to set if it is **Consumable**. Is set then the item will be consumed when used. This is useful lfor something like a potion where you want the use of the item to also destroy it.

The rest of the options will depend on what you chose for *On use-from-bag*. If you chose *Equip* then you will be allowed to set some settings specific to equipping and item and will also see different Events.

### Equip ### 

The **Equip Target** is what might be the valid target(s) when the player try to equip the item. This should typically be set to **Player** since he would want to equip the item to himself.

The **Target Slots** determines to which equip slots the item can be equipped. The player won't be able to equip the item to any slots not selected here.

### Events & Actions ### 

The Events you see will depend on whether you chose this Item to Trigger OnUse or Equip.

**On Targeted** will trigger when the item is targeted. For example when the player clicks on it. The *Max Targetable Distance* is used to set from how far (in meters) the Item can be targeted. Use (0) if you want to disable this - make the distance unlimited. You will need a collider on the item if you want the player able to target the item.

**On UnTarget** will trigger when the item is deselected/ removed as target.

**On Pickup** is triggered when the item is being interacted with. The *Max Interact Distance* is how far the player has to be (in meters) from the Item before he can pick it up, if the auto-pickup system is not enabled. It is good to keep this to 1.5 to 2 meters. You will need a collider if you want the player able to target the Item and pick it up.

**On Use** will be triggered when the item is used from a bag. For example when the player try to use a potion from his bag.

**On Equip** is triggered when the player try to equip an item from the bag to one of his equip slots.

**On UnEquip** will be triggered when the player try to un-equip the item from an equip slot.

The Actions placed into these Event/ Queue Lists will receive the following Subject Types:

- Self: The RPGItem that the queue belongs to
- TargetedBy: The Character that is trying to Target/ UnTarget/ Pickup this Item
- All other types will be invalid, except where [indicated different](unirpg-actions.html)

In the case of **Use**/ **Equip** and **UnEquip** the Subject Types will be a bit different.

- Self: is still the Item itself
- TargetedBy: will be invalid
- Targeted: will be set to the object targeted by the Character while it was trying to **Use** this Item. This is still null for **Equip** and **UnEquip**
- EquipTarget: will be the character trying to Use/ Equip/ UnEquip this Item
- All other types will be invalid, except where [indicated different](unirpg-actions.html)

### Trigger & Collider ### 

For auto-pickup system to work there need to be a trigger on the Item. A trigger is used to detect when the player moves over the item. Simply add a collider, like a Box Collider component to the item, scale and offset the collider as needed and set the **Is Trigger** option. You can add the collider through the *Add Component* button in the Item's inspector (from Physics section), or from the menu: `component -> physics -> ...`. You can choose to use a Box, Sphere, or Capsule, whichever fits best.

A collider is needed when the player should be able to select/ target the Item. You follow the same steps as above but don't set the *Is Trigger* option.

![](/img/unirpg/item/win5.png)

