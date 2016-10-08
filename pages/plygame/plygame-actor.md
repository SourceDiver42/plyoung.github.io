---
title: plyGame Actor
keywords: unity3d, plygame, rpg, game, maker
sidebar: plygame_sidebar
toc: false
permalink: plygame-actor.html
folder: plygame
---

Actor
=============

![](/img/plygame/actor/01.png)

The Actor Component identifies an object as a character type object. The controller you add will determine if it is a [player](player.html) or [non-player](npc.html) character. The actor component carry some important information that defines the character. You will not normally have to add this component to an object as the controller you add will also add this component when needed.

At run-time you can click on **Show debug info** in the Actor's inspector to see some useful debug info like what the Actor's Attribute states are.

### Persistence ###

Turning this on will make the Actor (character) LoadSave aware and its state will be saved or restored when needed. The [Persistable Object](misc-components.html) component will be added and should not be manually removed as it is needed to create the interface between the object and the LoadSave system. You may want to remove the Persistable Object if there is one on the GameObject and you do not want persistence of the object activate.

There are a few options that will determine what gets saved. You should not turn on an option if you know the values will not change from the startup values. This will save on storage space and decrease the save/ load time. A good example is monsters - you would normally add all skills a monster knows as startup skills and therefore there would be no need to turn on persistence of the monsters skills since it does not learn any new skills at runtime.

- **Actor Data**: You normally want this enabled as it saves various runtime values related to the actor.
	+ Status towards player, and 'Is essential'.
- **Class Data**: Determine if the class data like selected class, current Level, and attribute states will be saved. You normally want this enabled for the player but it might not be needed for NPCs. Take for example a shop keeper who's HP, Level, etc will never change, you do not want to save this info. 
	+ Current class, Current Level, and Values of the actor's Attributes (incl. HP and XP).
- **Known Skills**: Will save and restore all Skills the actor knows. Known Skills differ from Start Skills in that the Actor could learn more Skills during run-time. You will normally only enable this for the player. For the NPC you would leave this disabled since an NPC do not normally learn new Skills at runtime and you tend to simply add all Skills it knows and can use in the inspector.
- **Factions**: Will save and restore the Factions that this Actor is associated with.

### Basic Definition ###

- **Ident**: This is a unique identifier you choose to give this definition. It is optional but can be used when you want to lookup and use a definition in plyBlox.
- **Screen Name**: This is the pretty name of the definition and what might be used when you want to show this definition to the player in-game.
- **Short Name**: A shorter name that you might want to use in-game or even as a way to lookup this definition in plyBlox.
- **Meta Data**: Can be any kind of data and is useful when you want to add some additional information to the definition to later use.
- **Description**: A description of the definition that you might want to present to the player in-game or simply use as a reminder or notes for yourself.
- **Images**: Definitions can have up to 3 different images. How you use this is up to you and adding images is optional.

### Actor Definition ###

- **Class**: Links the Actor with an [Actor Class](actor-classes.html) which determines what [Attributes](attributes.html) the character has and how those attributes behave.
- **Init Level**: Is the Level that the Actor will start with. This is normally used to define how strong an NPC is. Changing this one value can quickly set an NPC to be stronger if the Attributes where correctly linked to leveling.
- **Is Essential**: A helper that indicates that this character (normally quest or story NPCs) should not be killed/ destroyed.
- **Overwrite Status to Player**: [NPC Only] is used to overwrite the status of the NPC towards the player. If not set then the NPC's Faction status towards player faction will be used.

### Death ###

You can use the `plyGame > Actor > Actor Death` Event in a Blox of the character to respond when the character is killed.

- **Auto-detect Death**: With this option enabled the Actor will track the health attribute and if it goes to zero Death will be triggered on the character. You must have the Health Attribute set in the [Attributes Editor](attributes.html), the Actor must have a Class linked, and the linked [Actor Class](actor-classes.html) must contain the Health Attribute in its list of Attributes.
- **Method**: This is the method used when the character dies.
	+ Destroy: The character will be destroyed after a certain number of seconds.
	+ Sink and Destroy: The character will be destroyed after it sinked a certain distance. It will only start sinking after the specified amount of seconds.
- **Disable Components**: A list of components that should be disabled when the actor is enters a dead state. The Actor and Character Controllers disables various components of the character on death but you might have additional components, for example extra colliders, that needs to be disabled.

### Start Skills ###

A list of Skills that the Actor will start off, knowing. If a Skill is not in this list then the Actor will not be able to use it. This does not mean you have to add all skills the Actor can ever know to this list. You can teach Skills to the Actor at run-time, using for example [Blocks](plyblox.html) to add them to the known list.

### Start Factions ###

This is a list of the Factions this character belongs to at startup. Factions are used in various areas of plyGame, for example when NPCs decide which other NPCs to detect around it. See [Factions](factions.html) for more information.

