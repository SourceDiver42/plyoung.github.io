---
title: UniRPG Actions System
keywords: unity3d, unirpg, rpg, game, maker
sidebar: unirpg_sidebar
toc: false
permalink: unirpg-actions-sys.html
folder: unirpg
---


[Global Variables]: unirpg-database.html#vars
[Cameras]: unirpg-database-cameras.html

Camera Activate 
---------------

This action allows you to tell UniRPG which camera to activate from the [Cameras][] you previously defined. The currently active camera will be deactivated.

Debug Log 
---------

This action will write the **Text value** and optional **Numeric value** to the Unity Console. You can enter the values directly or retrieve them from [Global Variables][].

The **Log Type** is the same as Unity's and will print Info in a white colour, Warning in a yellow colour, and Error in a red, to the console.

Execution- Branching (IfThen) 
-----------------------------

This Action allows you to perform tests and then decide what should happen if the test succeed (is True).

The first part, "If these results in True", is where you setup the tests that should be performed. The second part tells what should happen if the tests resulted in True. If the tests resulted in False then the next Action will be called. You can select that action execution stop immediately if the result is True, or that the next Action is skipped or that the system jump to a specific action in the queue. The number you enter for the action to jump to will be the same as the number you see next to the action in the queue/ list.

The tests that can be performed are always between two parameters and then the result is compared to the previous test (except if this is the first test). The comparison can be AND or OR.

If an AND test is performed between two tests and one is False then all further testing will be stopped and the result of the tests will be False. If an OR is performed and any test was True then testing will continue to the next test, if any.

Execution- Delay 
----------------

This simple action allows you to pause the execution of actions. This is useful when you want to have something finish before executing the actions to follow. For example when you want to wait for an animation, of a certain length, to finish before starting another animation on the same object or doing some other actions that had to wait for the animation to finish.

Execution- Stop 
---------------

This action will cause execution of Actions to Stop. No further actions will be called even if there are more in the list/ queue after this action.

Load Scene 
----------

This action allows you to load a scene. You can choose to load a game scene/ map or to load the menu scene. Loading the menu scene is the same as exiting the game to the menu.

You also have the option to enter the "ident" of a SpawnPoint if you chose to load a game scene. This will cause the player character to be spawned at the specified SpawnPoint.

Message to GUI 
--------------

This action allows you send a message to the GUI System to open or close a specific Window/ Panel. Whether the option is supported depends on your selected GUI Theme. There is also the option to send a custom message to the GUI System. This is useful when the Theme supports calls that are not predefined.

Send message 
------------

This action makes use of the Unity SendMessage() function. You specify the target option, the name of the message (function to call) and the parameter (option) to send along. You can also choose to send the message to all [objects with a specific Tag](http://docs.unity3d.com/Documentation/Components/Tags.html) set.

Set Custom Variable 
-------------------

Most objects (Character, Trigger, SpawnPoint, RPGItem, and RPGObject) in UniRPG have custom variables. This can be defined in the Inspector for the object. This action allows you to set the value of the defined variable. If the variable does not exist then it will be created and the value set.

Set Global Variable 
-------------------

This action allows you to set the value of a global variable. If the variable is not defined then it will be created and the value will be set to what you indicated.