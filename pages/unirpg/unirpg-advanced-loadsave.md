---
title: UniRPG Advanced LoadSave
keywords: unity3d, unirpg, rpg, game, maker
sidebar: unirpg_sidebar
toc: false
permalink: unirpg-advanced-loadsave.html
folder: unirpg
---

Loading & Saving System
=======================

![](/img/unirpg/adv/win11.png)

UniRPG's Load&Save System takes care of saving and restoring the state of the game during scene changes and sessions. On this page I will explain both how a new LoadSave Provider can be added to UnIRPG and how your plugins can make use of the LoadSave System to save/ restore the state of variables in your plugin.

Using the LoadSave System
-------------------------

Hooking into the LoadSave System is not too hard but you need to be careful about when you make the calls to the system. Data is saved as Key-Value pairs. You call for example, `UniRPGGlobal.SaveInt(key, value)` to a value for a specific key. UniRPG will take care to attach the save slot's identifier to the key to make it unique among save slots. Try to use unique keys and not something like "key1", "key2", etc. to prevent possible clashes with key names in parts of UniRPG or other plugins. 

UniRPG has an event that can be hooked to, to be informed when saving (setting keys) should occur but you can also choose to "auto-save" depending on the situation/ your plugin. So if it makes sense for your plugin to save immediately when a value has changed then it make set the key immediately.

UniRPG will ask for listeners to save when the player choose to save the session or when a new game scene is loaded. To listen for Save callback, simply register for it. This can be done in Start() or perhaps you can keep a variable called "loading" which will be checked during Update() to first see if registration for saving should take place and loading should be done before other code is executed. I'll show you an example of this below but I can;t stress enough that it will be up to you to find the best place/ time to do these things since all plugins won't behave the same.

When the player chose to start a new game `UniRPGGlobal.Instance.DoNotLoad` will be true so you can check this before deciding if loading should take place or not. That variable will be true if the player chose to load/ continue a game session or if the player is moving from one game scene to another.

`UniRPGGlobal.Instance.IsAutoLoadSave` will be true if this is an auto load/ save when switching between game scenes, not a PROPER Load/Save. You would for example not bother to save/ restore the player's position when this is set, but in most other cases you will want to save the state of variables.

The available functions for saving and loading values are, they each take a key and value parameter. The load functions takes a default value that should be returned if the key was not found.

- UniRPGGlobal.SaveString(...)
- UniRPGGlobal.SaveInt(...)
- UniRPGGlobal.SaveFloat(...)
- UniRPGGlobal.SaveBool(...)
- UniRPGGlobal.SaveVector3(...)
- UniRPGGlobal.LoadString(...)
- UniRPGGlobal.LoadInt(...)
- UniRPGGlobal.LoadFloat(...)
- UniRPGGlobal.LoadBool(...)
- UniRPGGlobal.LoadVector3(...)

A key can be deleted by making a call to `DeleteSaveKey(key_name)`. You do not ahve to check if the key exist before hand since this call should fail silently.

~~~~~~~~~~ .csharp
public int valueToSave = 1;
private bool _loading = true;

void Start()
{
	_loading = true;
}

private void SaveState(System.Object sender)
{
	// do actual saving by making calls to UniRPGGlobal.Savexxx() functions
	UniRPGGLobal.SaveInt("unique_key", valueToSave);
}

private void LoadState()
{
	if (UniRPGGlobal.Instance.DoNotLoad) return;
	// do loading by making calls to UniRPGGlobal.Loadxxx() functions
	valueToSave = UniRPGGLobal.LoadInt("unique_key", valueToSave);
}

void Update()
{
	if (_loading)
	{
		UniRPGGlobal.RegisterForSaveEvent(SaveState);
		LoadState();
		_loading = false;
		return;		
	}

	// other Update() code follows...
}
~~~~~~~~~~


-----------------------------------------------------------------------------------------------------------------------
Creating new LoadSave Provider
------------------------------

You can have a look at the scripts in `\Assets\UniRPG\Default Assets\LoadSave\` if you would like to see what the default LoadSave Provider(s) looks like. There are two parts to the provider, the runtime and editor script (class).

The editor script is used to tell UniRPG about the LoadSave Provider and to present settings to the designer when he choose to use the provider, and assuming there are any settings. The editor class should be derived from `LoadSaveProviderEdBase` and should override `OnGUI()`. Since this is an Editor script it should be under a folder or sub folder(s) of a folder named Editor.

~~~~~~~~~~ .csharp
using UnityEngine;
using UnityEditor;
using UniRPG;

[LoadSaveProvider("My LoadSave", typeof(MyLoadSave))]
public class MyLoadSave_ed : LoadSaveProviderEdBase
{
	public override void OnGUI(DatabaseEditor ed, LoadSaveProviderBase loadSaveProvider)
	{
		//MyLoadSave provider = laodSaveProvider as MyLoadSave;
		//show setting ...
		EditorGUILayout.BeginVertical(UniRPGEdGui.BoxStyle, GUILayout.MaxWidth(350));
		{
			GUILayout.Label("If nothing else, at least show a little description of your LoadSave Provider here.");
		}
		EditorGUILayout.EndVertical();
	}
}
~~~~~~~~~~

The runtime class for your LoadSave Provider will do all the work of actually saving or restoring data. It must derive from `LoadSaveProviderBase` and override various functions which UniRPG will call to save or load values. UniRPG follows the Unity 3D convention of saving values to keys. The functions should be self explanatory.

The script will look something like this.

~~~~~~~~~~ .csharp
using UnityEngine;
using System.Collections;
using UniRPG;

[AddComponentMenu("")]
public class MyLoadSave : LoadSaveProviderBase
{

	public override void Load() 
	{  
		// called when the provider should load. good place to open and load data from file.
	}

	public override void Save() 
	{
		// called when the provider should save all data to file.
	}

	public override void SetString(string key, string value) 
	{
		// set a string value
	}

	public override void SetInt(string key, int value)
	{
		// set an integer value
	}

	public override void SetFloat(string key, float value)
	{
		// set a float value
	}

	public override string GetString(string key, string defaultVal)
	{
		// get a string value
	}

	//public override void SetBool(string key, bool value)
	//{
		// (optional) set a boolean value
	//}

	//public override void SetVector3(string key, Vector3 value) 
	//{
		// (optional) set a vector3 value
	//}

	public override int GetInt(string key, int defaultVal)
	{
		// get/ return an integer value
	}

	public override float GetFloat(string key, float defaultVal)
	{
		// get/ return a float value
	}

	//public override bool GetBool(string key, bool defaultVal)
	//{
		// (optional) get/ return a boolean value
	//}

	//public override Vector3 GetVector3(string key, Vector3 defaultVal)
	//{
		// (optional) get/ return a vector3 value
	//}

	public override bool HasKey(string key)
	{
		// return TRUE if the key is present, else FALSE
	}

	public override void DeleteKey(string key) 
	{
		// delete the key. should NOT fail with an exception if the key is not present.
	}

	public override void DeleteAll() 
	{
		// delete ALL keys. 
	}

}
~~~~~~~~~~


