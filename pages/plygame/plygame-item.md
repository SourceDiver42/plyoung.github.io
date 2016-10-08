---
title: plyGame Item
keywords: unity3d, plygame, rpg, game, maker
sidebar: plygame_sidebar
toc: false
permalink: plygame-item.html
folder: plygame
---

Items 
=============

Items are normally things that the player can pick up and use (like a potion), or equip (like a sword). You would not normally have the player 'use' the sword but rather  define a Skill which knows what animations to play and what kind of effects and damage to apply to a target. With potions you could use it from the bag and respond in the use event to apply effects to the user.

Create Item 
----------------------

![](/img/plygame/items/00.png)

First create an empty GameObject in a scene. Then add the `Components > plyGame > Item System > Item` component on it. This component identifies the object as an Item.

Items consist of two types of art (models), the one used when the Item is laying in the scene (on floor or table) and one for when the player is holding the Item (sword held in hand). For potions and the like you would normally not need the 2nd type of model.

The models need to be placed in the Item GameObject as child objects and positioned and rotated correctly in relation to the Item object's pivot. This is important as the Item object's pivot is used when placing and item in the scene or equipping it.

![](/img/plygame/items/01.png)

In the screen shot you can see a Sword Item I am creating. There are two models in the item object. The "floor" model is standing upright and has a collider around it. The "held" model is positioned and rotated such that its pivot is in the correct relation to that of the item object so that the weapon will appear correctly in the character's hand when held. When an Item is equipped it made a child object of an object in the hierarchy of the character and positioned at local space `0x0x0`. It then adopts the same rotation as the object it is placed under.

![](/img/plygame/items/02.png)

I normally disable the "held" model and leave the "floor" model enabled but you can choose to leave both enabled as it is controlled by the Item at runtime. Next you need to tell the Item which model by setting the Art fields in the Item inspector. You can also change other options of the Item. Finally you need to make a prefab of the Item. If you do not make a prefab of it then the Items System will not detect it.

You will know you did it correctly when you see the Item in the list of Items. Open the plyGame main editor and go to the Items tab to see this.

![](/img/plygame/items/03.png)

Settings
---------------------

![](/img/plygame/items/04.png)
With the Items System settings you can specify if your game's Item Bag (Inventory) makes use of Slots, Weight or whether it is unlimited. This will determine what options you have in the Item's Inspector when setting up the item. Unlimited will allow the player to pick up items and store them without limitations. Weight based will calculate the combined weight of items in the bag and not allow more if the bag's maximum weight is reached. Slot based allow you to specify how big the bag is in slots and items will take up a certain number of slots.

The **Item Disable Distance* will determine when the Item will deactivate itself. When the player is further away from the Item than this distance then the item will deactivate itself and only occasionally check to see if the player is in range. This helps with performance by deactivating an object that does not need to be active when the player can't see it.

**Runtime Items Persist** is used to tell the system that items placed in the scene at run-time should persists, that is, if the player drops an item in the scene and leave the scene he will see the item in the scene when he returns to the scene. If you turn this option off the item will be gone if the player leaves and then returns to the scene.
 

### Item Types 

![](/img/plygame/items/05.png)

Here you can define Item types and sub-types. You may choose to ignore these as they have no real meaning in the Items System and is only here for your own grouping needs.
 

### Equip Slots 

![](/img/plygame/items/06.png)

Here you can define what slots are available for equipping Items to. If you want an equipped item to actually show up, visually mounted to the character, you will have to configure a few more placed but first you need to define the slots here.

The Item must have the `Art - Item Held` field set if you want the Item to show up visually. This is normally for bigger Items like Swords. Something smaller, like a ring or necklace, can also be equipped but you might not want to actually show a ring model. In this case you would simply leave the "Item Held" field empty and not add the additional model under the Item object.

Models that should be shown (sword) will normally have to be placed in the character hierarchy. For example, the sword needs to be attached to the hand so that it animates/ moves correctly with the hand holding it. This hand (or mount point) needs to be tagged and this is where the equip slot name comes in. The tag should always start with `EquipSlot` (with space at end) and then followed by the slot name as defined under equip slots. For example `EquipSlot WeaponHand` or `EquipSlot Head`.

When an item is mounted its object will be made a child of the mount point (object) and its 'local position' set to 0x0x0. It will then be rotated so that its forward (down the z axis) is the same as the mount point's forward.

![](/img/plygame/items/07.png)

Item Inspector 
--------------------------

The first set of fields are the basic data/ info of the Item. These values can be accessed with the object data retrieval Blocks under `Object > plyGame`.

- **Ident**: This is a unique identifier you choose to give this definition. It is optional but can be used when you want to lookup and use a definition in plyBlox.
- **Screen Name**: This is the pretty name of the definition and what might be used when you want to show this definition to the player in-game.
- **Short Name**: A shorter name that you might want to use in-game or even as a way to lookup this definition in plyBlox.
- **Meta Data**: Can be any kind of data and is useful when you want to add some additional information to the definition to later use.
- **Description**: A description of the definition that you might want to present to the player in-game or simply use as a reminder or notes for yourself.
- **Images**: Definitions can have up to 3 different images. How you use this is up to you and adding images is optional.

**Type**: Here you can choose the Item Type and sub-type if you chose to define these.

![](/img/plygame/items/08.png)

**Art**: This is where you specify what the models means that where placed as child objects of the Item object. You normally want to specify at least the floor art so that the item is visible to the player in the scene. You will also need to add a collider to this floor art model so that the player can pick it up (with for example a right-mouse click). This collider can be set as a trigger if you want to allow the player to move through the Item. Another method is to set up what can collide in the physics settings. Here you could for example set that the player and items do not collide with each other.
 

Under **Interact** you will set how the item reacts to being interacted with.

- **Is Currency** tells that this item is currency. Enabling this will allow you to set a min and max value between which are randomly chosen. This is useful to create a drop that will give the player coins. You could for example set the floor art to be a coin purse and then when this item is picked up it will add currency to the player's bag rather than adding an item to the bag.
- **Base Value** is what this Item's base purchase/ sell value is.
- **Auto-pickup** tells the system that the player will automatically pick up the item when close to it. This setting is normally only used for small items that can stack, for example potions, scrolls and currency. Do not set this for bigger items that the player might not want to pick up, like a sword.
- **Drop-rot-freeze** when the drop option "to scene" is used then this will be used to determine how the item reacts when dropped in the scene in front of the player. A rigidbody is temporarily added to the item object and this is used to give the item a nice drop effect. If you want to prevent the item from falling over when hitting the floor then you will want to set freeze. This can be useful for things like potions but for bigger items you normally do not want to freeze the rotation so that the fall effect looks better. Experiment with it and decide what looks best for the item when dropped.

The **Use** options specifies how the Item can be used from a bag.

- **Consumed on Use** tells that the item will be consumed when used from the bag. This is normally the setting you want to use for potions.
- **Can be Equipped** is set for things that can be equipped, like a sword or ring.
- **Slot** specifies which equipment slot the item can be equipped to.

**Bag** options you see will depend on what you choose in the Items System settings.

- **Stack size** is how many of the item can be in the same slot (Stacked)
- **Slot Layout** is used to specify how many slots and in what pattern the slots are taken when the item is in a bag. If there is not enough space for the specific pattern then the item will not fit in the bag. Click on the blocks to create the pattern. Blue represents the pattern of slots that will be occupied.
- **Weight** is the weight of the item when weight based system is used.

Blox and Variables 
---------------------------

![](/img/plygame/items/09.png)

Additional properties can be added to an Item via the plyBlox system. Add a `Components > plyGame > plyBlox` component on the Item object and you will have access to defining local variables for the the Item. Here you can define data that can later me accessed or manipulated via Blocks. 

You could use this to for example specify how much Defense a Shield adds when equipped, or even give items stats like Durability. For values that will change and which needs to be persisted you need to make sure that persistence is on for that variable (the blue P icon next to the variable). Variables which are only used for information should not be set to persist as it will be a waste (must have black P icon). The `Components > plyGame > Misc > Persistable Object` component should also be on the Item Object with `Persist Block Local Vars` enabled. If these are not set then the values will not carry over when the item moves from scene to bag to being equipped to bag to scene, or when scenes are changed.

Note that Items that can stack will not be persisted even if you set it up to do so. This is a limitation of the bag system and not something that can be worked around. This is normally not a problem since only things like potions or scroll will be stacking and they normally do not have the kind of values that can change, for example, a potion do not need a Durability value since it is used up when used. 
 

Item Bag
----------------

Before an Item can be picked up and keep you need to add the `Components > plyGame > Item System > Item Bag` component to a character. If the character does not have a bag on it then it can't carry anything.

There is not much to set up here. You will normally leave persistence on. It means the items that are in the bag will be saved and restored when the player loads the game or changes scenes.

Depending on the Items System settings you will either be able to set the slot layout of the bag or its max weight.

The "allowMultiStackSame" option can be disabled if you do not want to allow multiple stacks of the same item. Note that this means the player will not be able to pick up a second copy of the same sword already in the bag.

If "autoSortOnAddRemove" is set then the items will be sorted to fill up slots from the start of the bag first when items are added or removed. Should not be used in bags that contain items which spans multiple sltos.

Equipment Slots 
-------------------------

The `Components > plyGame > Item System > Equipment Slots` component is needed on a character if you want that character to be able to equip Items. You normally want to leave the persistence option on as it means the character will re-equip items it has when changing scenes or after the player restored a session.

