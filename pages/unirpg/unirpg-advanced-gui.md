---
title: UniRPG Advanced GUI
keywords: unity3d, unirpg, rpg, game, maker
sidebar: unirpg_sidebar
toc: false
permalink: unirpg-advanced-gui.html
folder: unirpg
---


[Input Binder]: unirpg-advanced-input.html

Creating a GUI Theme
====================

UniRPG allows you to create GUI Themes which define how the main menu and in-game GUI/ HUD looks and works. You need to follow a few simple rules to make your new Theme visible to and compatible with UniRPG and can do just about anything you want in these themes.

The *Default Fantasy* theme that is distributed with UniRPG can be found under `\Assets\UniRPG\Default Assets\GUI\`. I suggest you follow best practises when creating a new Theme for UniRPG and create a new uniquely named folder for your Theme in the `\Assets\UniRPG Plugins\` folders as explained [here](unirpg-advanced.html) (especially if you intend on distributing your Theme to other developers using UniRPG).

GUI Themes are selected in the UniRPG Main Editor/ Database window under `Main -> Project Scenes`, by clicking on the **Select GUI Theme** button. A list of all the Themes that UniRPG detected will be presented.

GUI Themes are given their own tab in the Main Editor where they can present options to the designer, under **GUI**. Your theme can draw anything it want in that space. How this is done is explained later.

The GUI in UniRPG is broken into two areas ...

The **Main Menu** is what the player sees when he started the game and this would include GUI areas like selecting a player character, settings some options like audio or graphics settings, watching credits, choosing top load a start a new game, or exit the game.

The **In-Game GUI** is what the player see while playing the game. This would battle screen info, status info, character sheet, character bag/ inventory, etc.

![](/img/unirpg/adv/win4.png)
![](/img/unirpg/adv/win5.png)

-----------------------------------------------------------------------------------------------------------------------
Editor Script 
-------------

Each GUI Theme must have an editor script that tells UniRPG about the new Theme. Lets assume we created a new Theme called "PLY Modern Theme" in the plugin folder `Assets\UniRPG Plugins\PLY Modern Theme\`.

Since this is an editor script it needs to be in a sub folder called *Editor*. The editor script will be saved as `Assets\UniRPG Plugins\PLY Modern Theme\Editor\PLYModernGUIEditor.cs`.

The boilerplate/ skeleton for this script will look like this.

~~~~~~~~~~ .csharp
using UnityEngine;
using UnityEditor;
using System.Collections.Generic;
using UniRPG;

[UniRPGGUITheme("PLY Modern", 
	"Assets/UniRPG Plugins/PLY Modern Theme/Scenes/menugui.unity", 
	"Assets/UniRPG Plugins/PLY Modern Theme/Scenes/gamegui.unity", 
	typeof(PLYModern_MenuGUIData), typeof(PLYModern_GameGUIData) )]
public class PLYModernGUIEditor : GUIEditorBase
{
	public override void InitDefaults(GameObject menuGUIDataPrefab, GameObject gameGUIDataPrefab)
	{
		PLYModern_MenuGUIData menuData = menuGUIDataPrefab.GetComponent<PLYModern_MenuGUIData>();
		PLYModern_GameGUIData gameData = gameGUIDataPrefab.GetComponent<PLYModern_GameGUIData>();

		// your code here to set the defaults for the theme
		// all theme data is saved in menuGUIDataPrefab and gameGUIDataPrefab
		// ...

		// save
		EditorUtility.SetDirty(menuGUIDataPrefab);
		EditorUtility.SetDirty(gameGUIDataPrefab);
	}

	public override InputBinderBase GetInputBinder()
	{
		return new PLYModern_GUIInputBinder();
	}

	public override void Update(GameObject menuGUIDataPrefab, GameObject gameGUIDataPrefab)
	{ 
		// optional, your code here
	}

	public override void OnGUI(GameObject menuGUIDataPrefab, GameObject gameGUIDataPrefab)
	{
		PLYModern_MenuGUIData menuData = menuGUIDataPrefab.GetComponent<PLYModern_MenuGUIData>();
		PLYModern_GameGUIData gameData = gameGUIDataPrefab.GetComponent<PLYModern_GameGUIData>();

		// your code here
		// present options to the designer who is using the theme
		// ...

		// check if data changed and should be saved
		if (GUI.changed)
		{
			EditorUtility.SetDirty(menuGUIDataPrefab);
			EditorUtility.SetDirty(gameGUIDataPrefab);
		}
	}
}
~~~~~~~~~~

### Theme Info ###

This is how you tell UniRPG about the various parts of the theme.

The first thing to enter is the name of the theme and this is the name that will be presented to a designer looking for the theme in the theme list.

Then follow the paths to where UnIRPG will find the Theme's menu and game gui/ hud scenes.

Finally you tell UniRPG what classes are used to save data for the menu and in-game gui. These will be data that a designer can change in the GUI tab in the Main Editor.

All GUI Theme Editors should inherit from `GUIEditorBase`.

~~~~~~~~~~ .csharp
[UniRPGGUITheme("PLY Modern", 
	"Assets/UniRPG Plugins/PLY Modern Theme/Scenes/menugui.unity", 
	"Assets/UniRPG Plugins/PLY Modern Theme/Scenes/gamegui.unity", 
	typeof(PLYModern_MenuGUIData), typeof(PLYModern_GameGUIData) )]
public class PLYModernGUIEditor : GUIEditorBase
{ 
~~~~~~~~~~

### Functions ###

![](/img/unirpg/adv/win6.png)

**InitDefaults()** is called when a designer chose the Theme and gives you an opportunity to set the default values for the data that the designer can change. It is also a good idea to provide some kind of reset button in the theme's editor. Note, this would be a button you provide in the OnGUI() function and not something UniRPG draws by default since you are in total control of what is shown in the Theme's editor area.

The parameters that are send to this and other functions in this class are the main menu and in-game gui/ hud data objects, the prefabs carrying the data. Simply do something like this to get a reference that you can then use to modify the stored data.

~~~~~~~~~~ .csharp
PLYModern_MenuGUIData menuData = menuGUIDataPrefab.GetComponent<PLYModern_MenuGUIData>();
PLYModern_GameGUIData gameData = gameGUIDataPrefab.GetComponent<PLYModern_GameGUIData>();
~~~~~~~~~~

**GetInputBinder()** is called by UniRPG when it wants to know more about the GUI's input requirements. More info in the [Input Binder][] section.

**Update()** is optional and can be used if you need it for whatever reason.

**OnGUI()** is where you will draw the settings that are available for the theme. What is drawn here is what will be shown in UniRPG's Main Editor/ Database  window when the designer select the GUI tab.

-----------------------------------------------------------------------------------------------------------------------
Data Classes 
------------

UniRPG can save the configurable data of your Theme in prefabs and present it to the theme when needed at runtime, but it needs to know what that data is. For this purpose you create two data classes, one for the main menu and one for the in-game GUI/ HUD.

A data class is simply a behaviour/ component class (a class derived from `MonoBehaviour`) and you add public variables to it that twill carry the settings. You are free to also add functions if it makes sense for your design.

~~~~~~~~~~ .csharp
using UnityEngine;
using System.Collections;
using UniRPG;

[AddComponentMenu("")]
public class PLYModern_MenuGUIData : MonoBehaviour
{
	// your code here
}
~~~~~~~~~~

-----------------------------------------------------------------------------------------------------------------------
Scenes 
------

Two scenes are required as seen in the Editor Script's Theme Info area. One for the Main Menu and one for the In-Game GUI. These scenes will be loaded and unloaded by UniRPG as needed, so the In-Game GUI Scene will only be loaded when the player loads a scene/ map to play on. You can do anything you want in these scenes, preferably GUI related stuff.

The scenes can be saved anywhere as long as you provide the proper paths to them in the Editor Script. It is best to keep everything together, so for our example I would save them as ..

`Assets/UniRPG Plugins/PLY Modern Theme/Scenes/menugui.unity`

and

`Assets/UniRPG Plugins/PLY Modern Theme/Scenes/gamegui.unity`

There is just one requirement for the scenes and that is that they each contain a main object named a specific way so that UniRPG can detect these objects and send commands to them when needed. One of the Behaviours (components/ scripts) you place on the main object should have the needed optional functions that can cat on SendMessage() call if supported.

Internally UniRPG will save references to the main GUI objects so that is is easy for Actions and other plugins to find and send commands to the GUI object as needed. `UniRPGGlobal.MainMenuObject` and `UniRPGGlobal.GameGUIObject`. These references are only valid while the player is in the specific area of the game, main menu or in-game.

It is generally a good idea to place all the scene's objects under this main object. It keeps the Hierarchy panel clean at runtime and makes the scene a bit more future proof. 

#### Main Menu ####

In the main menu scene you need to add an object called, **MainMenu**.

![](/img/unirpg/adv/win7.png)

A typical MainMenu script's skeleton will look something like this. This is the component/ script you would place on the **MainMenu** GameObject to all the work.

~~~~~~~~~~ .csharp
using UnityEngine;
using System.Collections;
using UniRPG;

[AddComponentMenu("")]
public class PLYModern_MenuGUI : MonoBehaviour 
{
	// all the gui settings and data is in here
	public PLYModern_MenuGUIData guiData { get; private set; }

	void Awake()
	{
#if UNITY_EDITOR
		// check if UniRPGGLobal is loaded, if not then load it now. This is a hack which is only needed during development
		// time to allow develper to run this scene in unity editor but still load the needed global scene
		if (!UniRPGGlobal.Instance) Application.LoadLevelAdditive("unirpg");
#endif
	}

	void Start() 
	{
		// access the UnIRPG Database to retreive a reference to the prefab storing the GUI data
		guiData = UniRPGGlobal.DB.menuGUIData.GetComponent<PLYModern_MenuGUIData>();
		
		// some more code...
	}

	// ...
}
~~~~~~~~~~

#### Game GUI ####

The in-game GUI or HUD is what the player sees while running around with his character. This require a main object called **GameGUI**.your main script.

![](/img/unirpg/adv/win8.png)

You will place a main script/ component on **GameGUI**. This script will have any of the optional functions that could be called during game-play. In future version of UniRPG these functions could increase but they will be optional and you can choose to support some or none.

As an example, one of the functions that could be called is `public void ShowDialogue(GUIDialogueData data)`. This is something that might called by an Action to inform the GUI that the player is trying to chat with an NPC. If your GUI Theme do not support conversations then simply ignore this.

The skeleton for the Game GUI's main script will look something like this.

~~~~~~~~~~ .csharp
using UnityEngine;
using System.Collections;
using UniRPG;

[AddComponentMenu("")]
public class PLYModern_GameGUI : MonoBehaviour 
{
	// all the gui settings and data is in here
	public PLYModern_GameGUIData guiData { get; private set; }

#if UNITY_EDITOR
	void Awake()
	{
		// check if UniRPGGLobal is loaded, if not then load it now. This is a hack which is only needed during development
		// time to allow develper to run this scene in unity editor but still load the needed global scene
		if (!UniRPGGlobal.Instance) Application.LoadLevelAdditive("unirpg");
	}
#endif

	void Start()	
	{
		// access the UnIRPG Database to retreive a reference to the prefab storing the GUI data
		guiData = UniRPGGlobal.DB.gameGUIData.GetComponent<PLYModern_GameGUIData>();
		
		// tell UniRPG I want to know when a scene is being loaded so that I can hide the GUI!
		UniRPGGlobal.Instance.RegisterLoadGameSceneListener(OnLoadingScene);

		// load the input bindings related to this gui theme
		InputManager.Instance.LoadInputFromBinder(new PLYModern_GUIInputBinder());
	}

	void OnDestroy()
	{
		if (UniRPGGlobal.Instance) 
		{	// tell UniRPG that I will not be listening for scene loads any longer
			UniRPGGlobal.Instance.RemoveLoadGameSceneListener(OnLoadingScene);
		}
	}

	// will be called when UniRPGGlobal broadcasts that it will start ot stop loading a game scene.
	// UniRPG will be showing the Load screen, so do not show this GUI then
	public void OnLoadingScene(bool starting)
	{
		// do whatever you need to do to hide/ show your gui
		//if (starting) hide the gui
		//else show the gui
	}
	
	// ----------------------------------------------
	// Messages that are send to the Game GUI
	// Note that you do not depend on these to open certain window. You will use the Input Binder and/ or buttons 
	// you render in the GameGUI scene to decide when to show something. These messages here are for other plugins
	// and Actions to have a way to ask the GUI to perform certain functions
	
	
	// Can be used to ask GUI to open something. What the options are should be explained to the designer and depends on the GUI Theme.
	public void ShowCustom(string param)
	{
		Debug.Log("This GUI Theme does not support ShowCustom(" + param + ")");
	}

	public void ShowPlayerInfo()
	{
		// show the player sheet/ info window
	}

	public void ShowBag()
	{
		// show the player's bag/ inventory
	}

	public void ShowSkills()
	{
		// show the payer's skills
	}

	public void ShowOptions()
	{
		// show in-game options menu
	}

	public void ShowDialogue(GUIDialogueData data)
	{
		// show the dialogue window, the player is having a conversation
		// all the conversation info will be inside data.
		// this function is called each time the converation is udpated
		// to show new text
	}

	// ----------------------------------------------
	// These are the messages to hide certain GUI areas

	public void HideCustom(string param)
	{
		Debug.Log("This GUI Theme does not support HideCustom(" + param + ")");
	}

	public void HidePlayerInfo()
	{ }

	public void HideBag()
	{ }

	public void HideSkills()
	{ }

	public void HideOptions()
	{ }

	public void HideDialogue()
	{ }
}
~~~~~~~~~~


-----------------------------------------------------------------------------------------------------------------------
Input Binder 
------------

Please have a look at the [Input Binder][] documentation for information how this class is written.

The Input Binder is needed to register the input/ shortcuts that your In-Game GUI might need. This could for example be the key `P` to option the Player Sheet, or `Esc` to show the in-game options menu.

~~~~~~~~~~ .csharp
using UnityEngine;
using System.Collections.Generic;
using UniRPG;

// set EditorAutoLoad = false since it will be loaded by editor when needed (when it makes the call to activate this gui theme)
[InputBinder(EditorAutoLoad = false)]
public class PLYModern_GUIInputBinder : InputBinderBase
{
	public override List<InputDefinition> GetInputBinds()
	{
		List<InputDefinition> defs = new List<InputDefinition>()
		{
			new InputDefinition()
			{
				inputName = "Character Profile",
				groupName = "GUI",
				useOnButtonDown = true,
				primaryButton = KeyCode.P,
				secondaryButton = KeyCode.C,
				callback = ShowCharacterSheet,
			},
			new InputDefinition()
			{
				inputName = "Open Bag",
				groupName = "GUI",
				useOnButtonDown = true,
				primaryButton = KeyCode.B,
				secondaryButton = KeyCode.I,
				callback = ShowBag,
			},
		};

		return defs;
	}

	public void ShowCharacterSheet(InputManager.InputEvent e, System.Object[] args)
	{
		// example ..
		UniRPGGlobal.GameGUIObject.GetComponent<PLYModern_GameGUI>().SomeFunctionThatTogglesCharacterSheet()
		// or even simpler ..
		UniRPGGlobal.GameGUIObject.SendMessage("ShowPlayerInfo");
	}

	public void ShowBag(InputManager.InputEvent e, System.Object[] args)
	{
		// example
		UniRPGGlobal.GameGUIObject.GetComponent<PLYModern_GameGUI>().SomeFunctionThatTogglesBag()
		// or even simpler ..
		UniRPGGlobal.GameGUIObject.SendMessage("ShowBag");
	}
}
~~~~~~~~~~