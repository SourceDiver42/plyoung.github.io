---
title: plyGame Character Animation
keywords: unity3d, plygame, rpg, game, maker
sidebar: plygame_sidebar
toc: false
permalink: plygame-character-animation.html
folder: plygame
---

Character Animation
===========================

The Character Animation controller is used to control when and what movement related animations a character should play. One of these is normally needed except when the character controller specifically noted to not add one. Before adding one of these to your character make sure it is actually needed by the selected [Player](player.html) or [NPC controller](npc.html) as some of them might have build-in functionality to control the character's animation.

These components can be added to a character from the component menu: `plyGame > Character > Animation`.

-----------------------------------------------------------------------------------------------------------------------
![](/img/plygame/npc/00.png)

Legacy
------

The Legacy Animation controller is used when the character and animations makes use of the [legacy animation system of Unity](http://docs.unity3d.com/412/Documentation/Manual/Animations40.html).

- **Animation**: The animation component of the character.
- **Characte Controller**: The character controlled from where info like movement speed can be read.
- **Min Speed Detect**: Minimum movement speed considered to be significant enough movement.

**Use Lower-body Rotation**

This controller is able to turn the lower part of the character's body. This is useful when the character moves sideways and there is no sideways movement animation. You need to specify the the **Hub/Bip** that is the root part that will be rotated, normally *Bip001*, and the **Upper Spine** part, normally *Spine1*. You will have to play around with what you use here to get the right looking rotation for your character setup. 

**Definition**

An animation definitions consist of the following fields.

- **Clip**: The name of the clip to play. You can also press the small button after the text-field to select the animation from a drop-down list.
- **Mode**: This tells if the animation should loop, play once, etc. The default selected option is normally fine. Most will need to be looped except for the jump and fall related animations.
- **Speed**: Allows you to tweak the speed the animation plays at.
- **(R)everse**: Is used to tell if the animation should play in reverse. This is useful where you do not have an animation for a specific definition. For example, if you do not have a backward walk animation you could use the normal walk animation and simply play it in reverse to get a similar effect.

**Animations**

- **idle**: This is played while the character is not moving.
- **death**: This is played when the character dies.
- **jump**: This is played when the character jumps.
- **fall**: This is played when the character falls.
- **land**: This is played when the character lands.
- **Jump delay**: Can be set when you want the upward movement of the character to be delayed to sync properly with what the jump animation is doing.
- **Land-Move Multi**: Will modify how fast the land animation plays when the character is moving.

**Movement Animations**

You can add more than one movement animation via the **Add movement definition** button at the bottom of the component's inspector. You tell the controller via the **Speed Detect** field when the animation should be used. 

You will normally want to add a catch-all animation definition that would play when the character is moving at its maximum speed, for example the Run animation. This catch-all definition will use a value like 999 for the speed detect.

The other definitions you add will then use an "upper limit" that represent when that definition should be used or not. Lets take for example a case where you want to add a Run, Walk and Sneak animation definition for a character. When sneaking, the character might be moving at a speed of '1', when walking it might move at a speed between '1' and '4' and when running it will be moving at a speed of between '4' and '6'. 

The speed detect for each will look like this...

- Sneak: 1 (this animation will be chosen when the character moves a speed of 1 or lower)
- Walk: 4 (this animation will e chosen when the character moves at a speed of 4 or lower)
- Ruin: 999 (even though run will only go up t 6 you can use 999 since it is the catch-all entry that will play when the character moves faster than a speed of 4)

For each definition you can specify if body rotation is used or not and what the max angle is that the body can be turned. This option will do nothing if **Lower-body Rotation** is not turned on and setup.

 
-----------------------------------------------------------------------------------------------------------------------
![](/img/plygame/npc/01.png)

Basic Mecanim
-------------

The basic mecanim character animation controller can be used when your character animations is set up for use with [Unity's Mecanim](http://docs.unity3d.com/Documentation/Manual/MecanimAnimationSystem.html) system.

Root motion will be disabled for the animator as this controller assumes the character controller to handle all movement and rotation.

- **Animator**: The Animator component of the character.
- **Character**: The plyGame character controlled from where info like movement speed can be read.
- **Speed Param**: [float] Name of the Speed Parameter as defined in the character's animator. The character's overall speed (velocity.magnitude).
- **Forward Param**: [float] The character's forward or backward movement speed. A positive number is forward while a negative is backward movement.
- **LeftRight Param**: [float] The character side movement (left/ right).
- **Jump Param**: [float] Used to tell if the character is jumping/ falling. A positive value means the character is moving upwards, else it is moving downwards.
- **Ground Param**: [bool] Indicates whether the character is grounded or not. You can use this in combination with the Jump parameter to check when the character has landed. The Jump will be negative while the ground parameter will already be set.
- **OnDeath Param**: [trigger] This is triggered when the character dies. Use this to detect the moment it should start playing the death animation.
- **Dead Param**: [bool] This is True/ set while the character is dead. 

 