---
title: UniRPG Database
keywords: unity3d, unirpg, rpg, game, maker
sidebar: unirpg_sidebar
toc: false
permalink: unirpg-database.html
folder: unirpg
---

[Actors Section]: unirpg-actors.html
[GUI Theme]: unirpg-database-gui.html
[GUI Section]: unirpg-database-gui.html
[Spawn Point]: unirpg-actor-spawn.html
[RPG Items]: unirpg-items.html
[RPG Objects]: unirpg-objects.html
[Actions]: unirpg-actions.html
[Actors]: unirpg-actors.html

![](/img/unirpg/intro/tbutton1.png) UniRPG Database
===============

You use the the **UniRPG Main Editor Window** to edit the UniRPG Database. This window can be opened from menu: `window -> unirpg -> database` or via the toolbar button.

The UnIRPG Database contains various settings and definitions used throughout the game and is broken into various sections which can be accessed via the tab buttons at the top of the UniRPG Main Editor Window. Each sections is covered separately. Use the Database drop-down menu above to access the documentation on the other sections.

The Database is saved in the `Assets\UniRPG Data\` folder. If you ever want to start from scratch you simply need to remove this folder and all your work will be undone. Note that any prefabs, like your player character, that access definitions in the database will be broken. The game scenes you created via the UniRPG options are also saved here, in `Assets\UniRPG Data\Scenes`. The UniRPG Data folder further contains various assets and prefabs containing the settings and definitions you create in the UniRPG Editor Window.

Project Settings 
----------------

![](/img/unirpg/db/win1.png)

Project Settings are the settings that define what scenes UniRPG needs to use for your game.

The **Update Builds Settings and Globals** button is used to setup various internal globals and various settings in Unity to get a game ready for play testing (or final build). You should press this button if you added any new game scenes and wish to test them. The internal globals will be auto-setup when you use the UnIRPG play option so you do not have to press this button each time you make a change and want to test.

Next you will see the **Main Scenes**. These are the UniRPG system scenes and the selected <abbr title="Graphical User Interface, like the Menu and HUD">GUI</abbr> Theme's scenes. The **Select GUI Theme** button will allow you to select from the installed UnIRPG compatible GUI Themes. UniRPG has one default theme installed, called **Default Fantasy**. See the [GUI Section][] for more information on GUI Themes.

The **Game Maps/Scenes** area lists all the scenes that makes out the game world, the terrain maps, towns, and dungeons that your player will visit in his adventure. You can use the **Add Scene** button to add or create new Game Scenes and add them to the list.

The 1<sup>st</sup> scene in this list will be the scene that the player is placed in when he chooses to start a new game. By default a player will appear in the centre of the world, at position `0x0x0`, except if you place a [Spawn Point][] for him to indicate exactly where you would like the player to start on the map/ scene.

Loading & Saving 
----------------

![](/img/unirpg/db/win23.png)

UniRPG allows the designer to choose what will handle the Loading & Saving of game state via Plugins (or LoadSave Providers). Please have a look at the advanced docs to learn how a new [LoadSave Provider](advanced-loadsave.html) can be created for UniRPG or how plugins access the Loading & Saving System of UnIRPG.

The Default LoadSave Provider makes use of Unity's [PlayerPrefs](http://docs.unity3d.com/Documentation/ScriptReference/PlayerPrefs.html) feature. Other providers might provide different ways of saving data, like saving it to an XML file on disc.

You can use the **Clear All Save Data** button to have all save data deleted. This is useful while testing your game as you will end up with entries that may not be used depending on how much you change things.

Note that when you test the Loading and Saving of data that you should run the game from the UniRPG Player button for proper testing. Using the Unity Play Button to test a game scene is fine but note that some data might not be saved & restored correctly while moving between scenes.

Plugins and Action for UniRPG do not get automatically integrated with the LoadSave System and it is up to the plugin developer to add support, so if a plugin don't seem to be saving you need to contact the developer of that plugin for support on the failure to save.

The Global Variables for Object type is not saved as it can't be reliably restored. Do not depend on the Object Type Global variable between game sessions. You can still rely on it to be valid between game scene changes.

The Number and String type Global Variables and the Custom Variables of objects like Character, Trigger, RPGItem, etc. are saved and restored as expected, even the variables that where created during runtime via Actions.

Global Settings 
---------------

![](/img/unirpg/db/win2.png)

This area covers various global settings that are accessed throughout the game.

You have the option to choose whether the player can select a player character from a list of characters, enter a unique name for his character and if the player can choose a class for the character. Note that UniRPG do not actually demand a class based system and this is just an option. Also note that it is up to your selected [GUI Theme][] to determine if it will apply to these settings or not as UnIRPG gives GUi Themes a lot of freedom in how they work.

The next option, **Player Character** is important for testing and should be set if you want to play-test scenes via the Unity Play Button. It expects a Player Character Prefab. Please have a look at the [Actors Section][] to see how player character prefabs are created.

The **Layers** will help UniRPG in various sections of the game code and to an effect determine how your game functions. Take for example the **Floor**, while you can keep this to Default you could create a new Layer called "Floor" and rather set it to that. This will help the point-and-click navigation system to determine what is floor and what is other objects. If you kept it and the other layers to Default then the player character would move to just about anything that is clicked on. Setting the Floor Layer to "Floor" and then setting the layer for any Unity Terrain or Floor/Terrain meshes in your game scene to "Floor" too will help UniRPG determine what the player can lick on when trying to move the character. [Unity Documentation](http://docs.unity3d.com/Documentation/Components/Layers.html) on how to create and apply layers.

![](/img/unirpg/db/physicsoptions.png)

While we are covering layers I need to mention another option you have when making use of unique layers for the Floor, Player, NPCs, Objects and Items. UnIRPG makes heavy use of colliders and triggers and you might not always want things to be able to collide but they might need a collider for UniRPG to function correctly. For example, you might not want the player to collide with monsters - you want him to be able to run through them. To set this up, open the physics inspector, menu: `edit -> project settings -> physics` and look at the options in the Inspector panel. You will notice in the screenshot to the right that I've unticked the options related to Player and Player, NPC and NoCollide. This will allow my player, with the Player layer applied on him, and NPCs with NPC layer applied and any other objects with NoColide Layer applied, to not stop the player character moving through.

Note that if a collider is set to **Is Trigger** then something like the player character would not "collide" with it anyway and can move through it, so you do not have to do the above mentioned setup for those kind of objects, for example [RPG Items][] would make use of the trigger feature so that the item can be auto picked up.

Please have a look at the following links to the Unity documentation for more information on the topics I've described above.

* [Beginner Physics](http://unity3d.com/learn/tutorials/modules/beginner/physics)
* [Box Collider](http://docs.unity3d.com/Documentation/Components/class-BoxCollider.html)
* [Physics Manager](http://docs.unity3d.com/Documentation/Components/class-PhysicsManager.html)

Startup Settings 
----------------

![](/img/unirpg/db/win3.png)

The Startup Settings defines what the player see when starting the game. This include the **Splash Screens** where you might want to show company logos and the **Loading Screen** that UniRPG display when loading the main menu and the game scenes.

UniRPG uses the Unity OnGUI() system to display the loading and splash screens. The rest of the GUI system's needs are determined by the GUI Theme, so while the Default Fantasy theme also makes use of OnGUI() you might find Themes that makes use of NGUI or EZGUI or maybe even the new GUI system coming on a future Unity update. Don't worry if you did not understand any of this, it is information for those who care about these kind of things.

The **Design Size** helps UniRPG determine how to scale when the game's resolution is in different aspect ratios. The default is for a 4:3 ratio but you can set it to something else if you design your splash screens and loading screen for a different default scale.

If you want to display the loading text in a different style then you can either edit the `Assets\UniRPG\Default Assets\GUI\Startup\DefaultStartSkin` or create a new [GUISkin](http://docs.unity3d.com/Documentation/Components/class-GUISkin.html) and set it to be used. You need to make your changes to the **Label Field** in the GUISkin.

The rest of the options should be self explanatory. The width and height option you see under Image Settings should be set to the width and height of the image(s) you choose to use if any.

Input Settings 
--------------

![](/img/unirpg/db/win5.png)

Each system and plug-ins of UnIRPG can define key binds which will appear here. Here you can decide which of the binds you wish to support by turning them on or off with the check box in front of the bind name.

The next set of check boxes determine of the keys function, for example, a key might only be applied when it goes down or are release or while it is being held. The default options should typically be fine for most uses. 

Next you can select what the two keys are that can be used with the bind. You can select both, or only the primary, or none at all.

The final option is a GUI helper which tells the selected GUI Theme whether you want the player to be able to change the bind values or not. It is up to your selected GUI Theme to decide if it will honour this option or not and it might not even have a system in place that allow players to change the keys in-game.

After making changes you need to press the **Save Changes** button to apply and save your changes.

Game Settings 
-------------

![](/img/unirpg/db/win4.png)

UniRPG support the use of **Currency** and the name of this currency can be set here. It can be anything you want, like Gold, Credit, Coin, Gil, or whatever name you can come up with for it. It is up to the GUI Theme to read these names if it wants to display it somewhere.

**Auto-move to selected (on 2nd click)**

This will determine if the player character should move to the selected object on a 2nd click or not. The 1st click on the object or actor will select the object.

**Auto-move to Skill range**

Tells whether the character should auto-move into range for a skill. For example, if you created a skill like a sword attack that can only hit a monster that is within a range of 1 meter and this option is set, then the player character will automatically run closer to the monster when the player select to use the skill on the targeted monster.

**Auto-interact with selected**

This will allow the player character the trigger the On Interact event on an object when he is in interaction range. The [RPG Objects][] section has more information on interaction.

**Item auto-pickup system on**

This determines if the auto-pickup system is active or not. You can still set per item whether the item can be auto picked up or not. See the [RPG Items][] section for more information on this and the requirements to make auto-pickup work.

Global Variables 
----------------

This is where you define Variables that can be read or even set (value changed) by system during game play. Many of the [Actions][] for example give the option to set their settings from global variables if you need it to do so.

You have the option to define two kinds of variables and set the initial value for the variable. The **Number** variable can carry decimal values and the **String** variable can carry text values. The **Object** variable can carry any kind of Unity object that can be serialised, which is just about any Unity object but you will mostly use this to carry around a reference to a Prefab, or a GameObject or Component in the scene.

There is not much else to this. You simply define them here and can then access them in other parts of UnIRPG while designing your game. You will notice them especially in the [Actions][] when we cover those.

![](/img/unirpg/db/win6.png)

Item Categories 
---------------

You define Item Categories here. [RPG Items][] can belong to a **main category**, like Weapon, or Armour and a **sub-category**, like Sword, Dagger, or Cloth Armour.

What you define here can be applied in the RPG Item Inspector and accessed and used by other parts of UniRPG like the GUI Theme and UniRPG plug-ins. You can also choose to ignore this setup if your game do not need to distinguish between types of Items.

![](/img/unirpg/db/win7.png)

 
Equip Slots 
-----------

Equip Slots help UniRPG determine where a player can place an item when the player try to equip it on his character. For example, you might define a Necklace Slot and then set a Necklace Item to be only equip-able in that slot of the player's character.

![](/img/unirpg/db/win8.png)

 
Actors 
------

This is where you will see the cached [Actors][] (Player and Non-Player Characters). You need to press the **Refresh** button whenever you created a new Character as UniRPG will not find them automatically (the scan can be a slow process when your project becomes big so you don't want this running automatically). Note that Actors (character prefabs in your project folder) which are set to Inactive will not be added to this list.

![](/img/unirpg/db/win17.png)

 
RPG Items 
---------

This is where you will see all [RPG Items][] prefabs that you defined. You need to press the **Refresh** button whenever you created a new RPG Items as UniRPG will not find them automatically. UniRPG needs to know of all RPG Items that you define but scanning your Project folder each time you wish to play-test the game or a scene is a slow process, especially when the project becomes bigger, so I decided to make this a manual process so that you can choose when UniRPG should look for the Item prefabs.

Any RPG Item prefabs that are Disabled will not be added to the list, or removed if already present.

![](/img/unirpg/db/win9.png)

