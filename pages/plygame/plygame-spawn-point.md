---
title: plyGame Spawn Point
keywords: unity3d, plygame, rpg, game, maker
sidebar: plygame_sidebar
toc: false
permalink: plygame-spawn-point.html
folder: plygame
---

Spawn Point
===========

![](/img/plygame/spawn/00.png)

The Spawn Point is used to spawn (create/ instantiate) non-player characters (NPC) at run-time. You could place NPCs in the scene directly but the spawn point provides an easy way to setup characters that should be created in intervals or when a character in the group was killed and should be replaced with another.

The Spawn Point has a different colour, depending on the the kind of NPCs in the group.

![](/img/plygame/spawn/01.png) The Spawn Point is not set to spawn any NPCs.
 
![](/img/plygame/spawn/02.png) The Spawn Point is set to only spawn Friendly NPCs (set as friendly in Status towards Player. Faction status ignored by this graphic)
 
![](/img/plygame/spawn/03.png) The Spawn Point is set to only spawn Neutral or Hostile NPCs (set as neutral or hostile in Status towards Player. Faction status ignored by this graphic.
 

- **Pesistence On**: The Spawn Point will save and restore its status as needed. It will keep track of how many NPCs it has spawned and can still spawn. Disable this if you spawn point is set to endlessly produce NPCs as it is pointless to save the data otherwise.
- **Ident**: A special Integer (number) identifier that you can give the Spawn Point to identify it from other Spawn Points. Defaults to '0'.
- **Notes**: You can enter some notes or comments concerning the Spawn Point.
- **(De)activation**: Determines when the spawn point will be enabled or disabled. It is pointless for a spawner to run if the player is very far from it.
	+ **Player Distance**: What is the max distance the player can be before the spawn point will be deactivated.
	+ **Check Interval**: At what rate is the distance of the player checked. It is advices to keep this value at least 1 second or more.
- **Detection**: This determines when the spawner will actually bother with spawning characters.
	+ **Player Distance**: If the player is further away than this then the spawner will not bother to spawn NPCs at all. You should normally have the '(De)activation Player Distance' at a value higher than this one.
	+ **Check Interval**: The rate at which the player's distance from the center of the spawn point is checked. This rate can be somewhat lower than that of the '(de)activation' system as you know the player will be quite close to the spawn point. Do not use a value of 0.2 or lower though as it helps with performance if the distance is not checked too often (or every frame).
- **Spawn Method**: is how the characters are spawned. It works within the limits of the max set for each character in the group and will stop spawning the specific character in the group if a max number of it has already been spawned.
	+ **Individual Respawn**: A character is created as soon as it is killed.
	+ **Group Respawn**: Characters are only re-spawned when the whole group is killed.
	+ **Group Continues**: There is a continues flow of characters being spawned, according to the rate set and up to the max allowed for the individual characters.
- **Min Wait Time**: (or Rate) is the time to wait, in seconds, between spawning of a group of characters.
- **Rate Between**: is the time to wait bewteen spawning the individual characters of a group. This is useful to give a character time to get out of the way and better than trying to spawn a bunch of characters (assuming there are more than one added to the group) all at the same time.

The Spawn Point works with a group of character. You can add a new one to the group via the **Add Character** button. It will add a new field where you can insert the prefab of the character.

- **Max**: is the maximum number of times this character can be re-spawned. You can have a different max among characters of a group. This is not the number of character spawned all at once. Say for example you want 2 Cubs and 1 Mother Wolf to spawn all at the same time then you would add 3 fields (press 'Add Character' 3 times) In the one you would add the prefab for the mother wolf and in the other two fields you would place the prefab for the cub. For all 3 you could then set max to 1, assuming you do not want re-spawning of characters from this group.
- **Prefab**: is the prefab of the NPC.
- **Lv**: is the initial level the NPC should be set to. This allows you to create areas that has characters that are stronger or weaker, assuming your characters are set up to make proper use of levels.

The [x] delete button can be used to delete a character entry while the button next to it can be used to see more options. The expanded options are related to the character's 'idle' mode. Have a look at the [NPC](npc.html) page to learn more about the options for idle mode.

The Spawn Point adds its own Events to plyBlox under `plyGame > SpawnPoint`




