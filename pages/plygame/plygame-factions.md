---
title: plyGame Factions
keywords: unity3d, plygame, rpg, game, maker
sidebar: plygame_sidebar
toc: false
permalink: plygame-factions.html
folder: plygame
---

Factions
================

![](/img/plygame/faction/05.png)

Here you define the Factions (groups that characters belong to and how they are associated). Other systems in plyGame will use these when needed. The non-player character AI, for example, would use the Factions system to determine if the character can attack another.

### Definition ###

- **Ident**: This is a unique identifier you choose to give this definition. It is optional but can be used when you want to lookup and use a definition in plyBlox.
- **Screen Name**: This is the pretty name of the definition and what might be used when you want to show this definition to the player in-game.
- **Short Name**: A shorter name that you might want to use in-game or even as a way to lookup this definition in plyBlox.
- **Meta Data**: Can be any kind of data and is useful when you want to add some additional information to the definition to later use.
- **Description**: A description of the definition that you might want to present to the player in-game or simply use as a reminder or notes for yourself.
- **Images**: Definitions can have up to 3 different images. How you use this is up to you and adding images is optional.

### Variables ###

Below the Basic Definition you will see a grid of variables, assuming you defined any. The variables in this grid should be read as, for the selected Faction the variable in the row of the named labeled Faction has this value towards that Faction.

In the the screenshot the Villagers Faction (selected) has 0 Reputation towards Player, 100 Reputation towards Villagers and 5 Reputation towards the Monsters Faction. You can define various kinds of variables to use here and they can be accessed and manipulated via [Blocks](plyblox.html).

### Faction Manager ###

![](/img/plygame/faction/13.png)

Click on the 'gear' icon to open the editor panel where you can setup the faction manager, define faction variables and set the relation between factions.
 
![](/img/plygame/faction/15.png)

Here you can set whether the Faction Variables should persist. The **Edit Events** button is used to open the plyBlox editor where you can add Faction specific Events to respond to. The **Edit Variables** button opens the Faction Manager's plyBlox in the Inspector so that you can edit the Blox' Local Variables, it has nothing to do with the Faction Variables, which are defined in the factions editor.
 

### Faction Variables ###

![](/img/plygame/faction/12.png)

To define variables, click on the 'gear' icon in the factions toolbar. In the pane that comes up you will see a place where you can enter a name for the new variable, select its type and then press the (+) button to add it.

The value of the variables can be persisted (saved/ restored) by the LoadSave System if you set the option in the Faction Manager settings. Keep in mind that the Game Object, Unity Object and System Object types can not be saved so any changes you make to them at runtime will be lost when a game session is loaded/ restored (so they will be initialed with whatever was set during design/ edit time).
 

### Relationship ###

![](/img/plygame/faction/14.png)

Pressing the 'gear' icon in the Factions toolbar will open the relationship editor where you can change the Status of Factions towards each other. You click on the green/ blue/ red buttons to change the relationship.

The relationship is indicated by the coloured circle. It indicates the relationship of the Factions in A (row) towards the Factions in B (column) .

- ![](/img/plygame/faction/bullet_green.png) Friendly
- ![](/img/plygame/faction/bullet_blue.png) Neutral
- ![](/img/plygame/faction/bullet_red.png) Hostile

In the example image the Player is Friendly towards Villagers, as indicated by the Green icon in the Player row (A) and Villager column (B). The Villagers on the other hand is Neutral towards the Player Faction as indicated by the Blue icon in the VIllager row (A) and Player column (B).

Note that the relation order is not updated when you move Factions in the factions list so you will have to check the relations after moving factions up or down in the list of defined factions.
 
