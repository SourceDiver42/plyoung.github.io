---
title: UniRPG Advanced
keywords: unity3d, unirpg, rpg, game, maker
sidebar: unirpg_sidebar
toc: false
permalink: unirpg-advanced.html
folder: unirpg
---

Creating Plugins
================

UniRPG can be extended by various plugins. The kind of plugin you are creating will have specific rules associated with it and ways to make it visible to UniRPG. Please check the appropriate topic under the Advanced section of the documentation.

It is a **best practice** to keep all plugins in the `Assets\UniRPG Plugins` folder. Each plugin should have its own unique sub-folder in the Plugins folder so that we can keep the project organised. For example, `Assets\UniRPG Plugins\Parley UniRPG Plugin` or `Assets\UniRPG Plugins\UDEA UniRPG Plugin`.

Also be sure to name your classes (scripts) uniquely so that possible name clashes to not occur. For example, do not use a name like `MyGUITheme` but rather tag it uniquely. A good idea is to use your initials, company name or product name if it is a unique product. `PLYFantasyFUI`, `PLYModernGUI`, `UniRPGParley`, `ParleyEventAction`.

This rest of this section will look at making plugins that are not covered by the other topics and how plugins can integrate with parts of UniRPG default editor areas.

Main Editor Window 
------------------

![](/img/unirpg/db/win20.png)

The UniRPG Main Editor Window (also known as *Database* Editor Window) is where a lot of the setup and configuration of a game happens. Any plugin can insert a new TAB into this widow and do not necessarily have to do with the UniRPG Database.

This is how you can provide an integrated way for a designer to access the options for your plugin. How you use this space and how you save the data that is edited here is up to you. Have a look at the scripts in `\Assets\UniRPG\Editor\Scripts\Editors\Database\` to see what UniRPG's own Main Window editor scripts look like and how they make use of this space. If you use this area to create new Assets or Prefabs I would suggest saving them in the `Assets\UniRPG Data` folder.

You will create a new script that should go inside a sub-folder called "Editor" since it is an Editor script. This could for example be, `Assets\UniRPG Plugins\My Plugin\Editor\MyPluginEditor.cs`.

Below is what the skeleton of such a script would look like. The first thing you will notice is `[DatabaseEditor("TabName")]`. This is how you tell UniRPG that is it an Editor that should be inserted in the Main Editor Window. The *TabName* is the name that will appear in the list of tabs. When a designer clicks on the Tab your editor's functions will be called to render its options in the window. Note that UniRPG do not create scrollbars when your editor's render area is bigger than the window so you need to add those too if needed. 

~~~~~~~~~~ .csharp
using UnityEngine;
using UnityEditor;
using System.Collections;
using UniRPG;

[DatabaseEditor("TabName")]
public class CameraEditor : DatabaseEdBase
{
	// Called when the Tab is selected and this Editor is made active
	public override void OnEnable(DatabaseEditor ed)
	{
		base.OnEnable(ed);
		// your code ...
	}

	// Called while this Editor is active
	public override void Update(DatabaseEditor ed)
	{
		base.Update(ed);
		// your code ...
	}

	// Called while this Editor is active and should draw its GUI
	public override void OnGUI(DatabaseEditor ed)
	{
		base.OnGUI(ed);
		// your code ...
	}
}
~~~~~~~~~~

