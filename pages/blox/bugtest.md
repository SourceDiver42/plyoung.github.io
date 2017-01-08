---
title: bugtest
keywords: bugtest
sidebar:
toc: false
permalink: bugtest.html
folder: blox
---

Notes on bug test
=================

- Project file: [Download](img/bug/bugtest.unitypackage)
- DLL Source: [Download](img/bug/source.zip)
- This was tested with 64bit Unity 5.5.0p3 on Windows 10.

Problem 1
---------

Editor code not working depending on where runtime DLLs are placed in project.

With the following folder structure the error will come up when you use the menu command: `Bug Test > ReCreate Test Asset`

`FileNotFoundException: Could not load file or assembly 'Library2, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null' or one of its dependencies.`

![](img/bug/00.png)

If the DLLs are moved one folder up, then it works.

![](img/bug/01.png)

It also works if you place the runtime DLLs in a sub-folder too.

![](img/bug/02.png)

I did not test other combinations since this is the one I use for my asset store products now and is happy with organising the DLLs in that way.

![](img/bug/03.png)


Problem 2
---------

Types derived from ScriptableObject "disappear" depending on location of the dependant DLLs.

For this test I defined `BaseClass: ScriptableObject` in Library1.DLL and `Class1: BaseClass` in Library2.DLL. If These two DLLs are not in the same folder then `Class1` will disappear and cause missing script errors.

To test we 1st need a working setup. Any of the working ones mentioned above; for example this folder structure.

![](img/bug/02.png)

Now use menu: `Bug Test > Recreate Test Asset` so that you end up with a new asset file `Assets/test.asset`. Click on it and in inspector see two properties.

![](img/bug/04.png)

Now move the Library2.DLL somewhere else. For example this kind of setup I used to use with my asset store products before this problem started. Note that there is now a missing script error in inspector of test asset.

![](img/bug/05.png)

You can also no longer expand Library2 to see Class1 defined in it like you could before.

![](img/bug/06.png)



