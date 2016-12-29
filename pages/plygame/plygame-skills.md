---
title: plyGame Skills
keywords: unity3d, plygame, rpg, game, maker
sidebar: plygame_sidebar
toc: false
permalink: plygame-skills.html
folder: plygame
---


Skills 
==============

Skills are what Actors (player and non-player character) use to perform actions. They are normally used for combat related actions but could also be used for other purposes.

A Skill will execute according to the rules you set up and create its **Effect(s)** accordingly. A Skill's Effect is independent of the Skill after being created except for triggering Events in the Skill's plyBlox. Effects will always fizzle when the character loses the ability to use that Skill (for example, unlearn it via plyBlox or dies).

At run-time Skills are created as child objects of their owning characters (if the character knows the skill). If you expand the character object in the Hierarchy view and select the Skill you will see **Show Debug info** in the inspector of that Skill. Activating this will give you a nice visual representation of the Skill's settings and can be helpful when trying to find problems with the Skill.

![](/img/plygame/skills/00.png)
### Definition ###

- **Ident**: This is a unique identifier you choose to give this definition. It is optional but can be used when you want to lookup and use a definition in plyBlox.
- **Screen Name**: This is the pretty name of the definition and what might be used when you want to show this definition to the player in-game.
- **Short Name**: A shorter name that you might want to use in-game or even as a way to lookup this definition in plyBlox.
- **Meta Data**: Can be any kind of data and is useful when you want to add some additional information to the definition to later use.
- **Description**: A description of the definition that you might want to present to the player in-game or simply use as a reminder or notes for yourself.
- **Images**: Definitions can have up to 3 different images. How you use this is up to you and adding images is optional.

All Skills have their own plyBlox which can be edited by using the **Edit Events** button. The **Edit Variables** button will allow you to edit the [Local Variables](plyblox.md#vars) of the Skill. The Local Variables of Skills do to persist (get saved when the game session is saved). You can use the Skill's plyBlox to act on Events that are triggered when the Skill's effect hits something, or when the effect fizzle (a fireball did not reach it target or hit a wall).

 
![](/img/plygame/skills/01.png)
### Basic ###

- **Execution Time**: (seconds) how long it takes to execute the skill. In this time the actor can't start a new skill. This is needed because technically the Skill is executed instantly and creates an effect that then does its thing. You can set this to be long enough so that the animation being played on the character will finish properly before another skill can be executed.
- **Cooldown Time**: (seconds) how long before the skill can be used again after being used.
- **Perform while move**: Actor may perform skill while moving? If not set (False) then the skill will be dropped from the queue if queued and the character moves.
- **Force Stop**: Only used when 'Perform while move' is not set. It will force the character to stop to perform the Skill. If not set then the Skill can not be performed until the character is not moving.
- **Can be queued**: Set to allow a Skill to be queued, else it will prevent this skill from being queued. The Skill can then only be used if the Actor is not currently using another Skill. Only one Skill is queued at a time and the previously queued will be removed if another Skill should become queued. It is a good idea to enable this setting for Skills used by NPCs.
- **Auto Queue**: Will cause the Skill to automatically queue when used, if the **Can be queued** option is set.

 
![](/img/plygame/skills/02.png)
### Activation ###

Activation adds the rules that determine how and if a skill can be activated/ used.

- **Activation**: How a skill is activated
	+ User: The Skill must be asked to activate, for example through a Block, or AI, or player action.
	+ Passive: Skill is simply a data entry that can be checked. Example use: Skill to 'Wear Plate Armour'.
- **Delivery**: How the skill's effect is delivered.
	+ Instant: Normally used for Melee, Self-Heals, and ranged non-projectile type skills.
	+ Projectile: Projectile(s) will be created that should hit target(s) before effects can be applied. The projectiles movement is determined by settings described later on this page.
- **Targeting Methods**: How the skill collect its possible targets.
	+ Self: Skill should include character performing the skill as possible target. Self-heals might use this.
	+ Selected: Skill should include the skill user's selected object/ character as possible target. This should normally be the option used with NPCs.
	+ Auto: Skill should auto select from valid targets in specified range. This is normally the option for the player attack skill, except if your game design require a selected target before a skill can be executed (then use previous option).
- **Valid Target(s)**: What are valid targets for the skill's effect or when it is selecting targets.
	+ Player: Player can be targeted, regardless the status of the user's faction towards the player.
	+ Friendly Actor: Any Actor that the user of Skill is Friendly towards. The status of Factions of the user towards the target Actor is used in the check. For NPCs towards the Player the NPC's status towards the player is also checked (if it is set as an overwrite).
	+ Neutral Actor: Any Actor that the user of Skill is Neutral towards. See 'friendly' above, for more info.
	+ Hostile Actor: Any Actor that the user of Skill is Hostile towards. See 'friendly' above, for more info.
		- For the Friendly, Neutral and Hostile tests the Skill will go through all the factions belonging to the user and target to find the 'highest' status that the user's faction is towards the target. So if the user is in factions that are Friendly and Hostile to the target's faction then the user will be assumed to be hostile towards the target as Hostile is higher than Friendly.
	+ RPG Object: An object can be targeted.
- **ObstacleCheckMask**: Check if something is between target and skill user? Use this layer mask to determine what are considered obstacles.
- **Obstacle height offset**: Ray is cast from this height offset from user's position (normally the feet) when checking for obstacles.

 
![](/img/plygame/skills/03.png)
### Instant Delivery ###

These options are shown when you chose `Delivery = Instant` under Activation.

- **Direction/Location**: In what direction or location the skill is executed.
	+ ActorDirection: Execution is in direction the user (character) faces.
	+ MouseDirection: Execution is, for Player - in direction from character to mouse, for NPC - from character to its selected target.
	+ SelectedDirection: Execution is in direction of selected target. Skill will not perform if no target selected.
	+ AtClickPosition: Need the player to click on a spot where the skill will collect targets in a specified radius. 'Click' does not necessarily mean a mouse-button click. You could be holding the mouse cursor over an area and press any action key which would then register a "click" at the location.
	+ AtSelected: Skill can only be used if a target is selected and is performed at the target's position.
	+ MouseOver: This works like typical aRPG where mouse click on valid enemy would cast spell on it. It is similar to AtClickPosition but there must be a valid target under the mouse cursor. It is position based like AtSelected without the need to have a target already selected.
	+ CameraForward: Executed in exact forward direction of camera.
	+ CameraDirection: In direction of camera on the XZ plane, ignoring camera's tilt (up/ down).
- **Hit Height %**: Determine the offset used to calculate where the hit was landed based on the height of the target.
- **Hit Delay**: How long to delay (seconds) before the Hit Event is triggered. If this is 0 then the Hit Event will be called as soon as valid target(s) are collected. Can be useful when you are trying to synchronize effects and sounds with the skill user's animation.
- **Max Targets Select**: What are the maximum amount of targets that the skill can collect.
- **Max Distance from self**: Determine how far from the skill user the skill can trigger or affect targets. Direction based Skills will use this to find targets between the user and the distance while Location based Skills uses this to determine what the maximum valid distance from the user is that the Skill can be performed.
- **Targteting Range**: is used to determine the angle at which a direction skill collect targets and creates it effects or the radius in which locational skill collect targets.

 
![](/img/plygame/skills/04.png)
### Projectile Delivery ###

These options are shown when you chose `Delivery = Projectile` under Activation.

- **Prefab(s)**: The prefab(s) used when creating projectile(s). Will choose randomly from these. I you choose to not add any prefabs here then you need to handle the projectiles yourself via the triggered Skill Effects Event. You must add prefabs here if you want the Skill to handle the projectile and hit detection.
- **Move Method**: Determines how the projectile's direction is chosen and how it moves.
	+ ActorFaceDirection: Projectile move straight from user till it hits or fizzle.
	+ AngledFromEach: Only useful when creating more than one projectile where they should shoot in face direction but at different angles from each other.
		- Random Angle: The projectiles will normally choose angles equally spaced in the Targeting Range angle, except when this is set.
	+ DirectToTarget: Projectile will find a target first and move towards it.
		- Follow: can be set so that the projectile follows the target, else the projectile will move to the position the target was at when the projectiles was created and started moving for first time.
		- Hit Height % is used when calculating the position the projectile should reach. This is a percentage from the target's feet to its top. 0% = at feet, 50% = somewhere near middle of body, and 100% might just fly over its head.
- **Max Projectiles**: How many projectiles will be created.
- **Create Delay**: How long to wait before creating the (1st) projectile. Useful to get the projectile creations synced with animation.
- **Between Create Delay**: Determines how long to delay between creating projectiles.
- **Use Vector offset**: Choose weather the next option should use a Vector3 or Dummy Object for the offset.
	+ **Create at Offset**: Determine where the projectile(s) will be created before being send on their way. The default is little up and in front of user of skill.
	+ **Create at Tagged**: If you chose to not use vector then this option will be available. Here you enter the name of a tag. You can then tag an object (like a bone or dummy object) in one of the child objects of the Skill user/ owner (for example the player) with the same tag. The projectile will be created at the position of this object. Note that the tagged object can be any object that is a child of the main (user/ owner) object. So you could even have a dummy object at the tip of a Staff from which you would like the projectile to be fired. If this staff is equipped (mounted in the player hierarchy) then the dummy object will be found (if using the correct tag) and the projectile created at the tip of the staff.
- **Move Speed**: How fast projectiles move.
- **Collision Ray Width**: Used by the projectile to check when it hits something. 0 = ray cast (a thin line) is used, else a spherical cast is used (a thick line with indicated width). You can play around with this setting. '0' is the preferred value but you might have to make the width higher if the projectile often fails to hit.
- **Fizzle Distance**: Max distance, without hitting, that the projectile will move before it fizzles. The 'Direct to Target' Move Method does not have this option since the projectile will either fizzle after reaching the target location, if not following, else fizzle when the timeout is reached while following.
- **Max Live Time**: (seconds) How long it can live before it fizzle. You will normally want to use either this or Fizzle Distance. If you want to use time then make distance a very high value, else if you want to use distance then make this time a high value like 60. You can also set this to 0 if you do not want this property to have an influence.
- **Trigger Secondary On Fizzle**: Should the secondary effect trigger when the projectile fizzled?
- **... only if obstacle**: Should the secondary only trigger if the fizzle was cause by the projectile colliding with an obstacle?
- **Destroy Projectile on Hit**: Normally this is set for projectiles but you can turn it off when doing something special, like a beam effect, where the projectile should trigger the hit event but pass through the object that was hit so that it can potentially trigger additional hit event. The projectile will then only disappear when the skill fizzle.
- **Actor Direction**: The method used to determine what direction the actor should be facing when trying to create projectiles.
	+ ActorDirection: Execution is in direction the user (character) faces.
	+ MouseDirection: Execution is, for Player - in direction from character to mouse, for NPC - from character to its selected target.
	+ SelectedDirection: Execution is in direction of selected target. Skill will not perform if no target selected.
	+ AtClickPosition: Need the player to click on a spot where the skill will collect targets in a specified radius. 'Click' does not necessarily mean a mouse-button click. You could be holding the mouse cursor over an area and press any action key which would then register a "click" at the location. The projectile execute in direction of targets.
	+ AtSelected: Skill can only be used if a target is selected and is performed in the direction of target's position.
	+ MouseOver: This works like typical aRPG where mouse click on valid enemy would cast spell on it. It is similar to AtClickPosition but there must be a valid target under the mouse cursor. It is position based like AtSelected without the need to have a target already selected. Projectile executes in direction of collected target.
	+ CameraForward: Executed in exact forward direction of camera.
	+ CameraDirection: In direction of camera on the XZ plane, ignoring camera's tilt (up/ down).
- **Max Distance from self**: Determine how far from the skill user the skill can trigger or affect targets. Direction based Skills will use this to find targets between the user and the distance while Location based Skills uses this to determine what the maximum valid distance from the user is that the Skill can be performed. 
- **Targteting Range**: is used to determine the angle at which a direction skill collect targets and creates it effects or the radius in which locational skill collect targets.

#### Note on custom projectile logic ####
When a projectile is created, plyGame will add a SkillProjectile component onto the projectile GameObject. This component drives the projectile. It is possible to use your own projectile logic. You need to derive your projectile controller/ component from SkillProjectile, rather than MonoBehaviour, and then override the functions as needed. This component you created must then be placed on the projectile prefab that you add to the prefabs field in the Skill editor. This is the only case where you should be adding the projectile controller onto the prefab as plyGame will add the SkillProjectile component by default if no other component that derives from SkillProjectile is found on the prefab.

 
![](/img/plygame/skills/05.png)
### Secondary Hit ###

When an effect hits a target it can trigger a secondary effect. The secondary effect will collect targets in a specified radius around where the primary effect triggered (hit).

Set **max secondary targets** to zero to disable this feature.

**Obstacle check** can be set to indicate that what is considered obstacles. The effect will not reach a target if there is an obstacle between it and the effect's center.

 

-----------------------------------------------------------------------------------------------------------------------
### plyBlox ###

Skills can trigger various Events which you will find under `plyGame > Skill`. The Event will only be triggered in the Skill's Blox object and not on the character or other object.

There are also blocks related to skills, for example the Block used to ask an Actor to use a Skill. These can be found under `Character > Actions (plyGame)`.
