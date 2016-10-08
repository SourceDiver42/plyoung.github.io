---
title: plyGame Custom Editor
keywords: unity3d, plygame, rpg, game, maker
sidebar: plygame_sidebar
toc: false
permalink: plygame-custom-editor.html
folder: plygame
---

Adding Custom Editor 
============================

![](/img/plygame/customed/01.png)

It is possible for 3<sup>rd</sup> party tools and plugins to add their own tabs and editors to the plyGame Main Editor window. What these editors do is up to the developer and the following page only explains the process of integrating closer with plyGame's editor.

### Editor ###

Like all editor related script, this script should go into a folder named `Editor`, anywhere in the Assets folder. The editor should be derived from `ChildEditorBase` and must use the attribute `ChildEditorAttribute`.

The following code example will give you an idea of how a typical editor would look ...

```csharp
using UnityEngine;
using UnityEditor;
using System.Collections;
using System.Collections.Generic;
using plyCommon;
using plyGame;
using plyCommonEditor;
using plyGameEditor

[ChildEditor("My Editor")] // the name shown in the tab
public class MyCoolEditor : ChildEditorBase
{
	// Called when this editor is focused. When the user click the tab to show it.
	// This is a good place to initialise some variables or load the data to edit.
	public override void OnFocus() 
	{ 
	}

	// Called when the editor should render. This is where you
	// present options to the designer.
	public override void OnGUI()
	{ 
	}
}
```