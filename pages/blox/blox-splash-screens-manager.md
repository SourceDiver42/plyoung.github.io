---
title: Blox Splash Screens Manager
keywords: unity3d, blox, visual scripting, programming
sidebar: blox_sidebar
toc: false
permalink: blox-splash-screens-manager.html
folder: blox
---

Splash Screens Manager
======================

![](img/blox/24.png)

This component allows you to set up a list of "screens" which the manager will show/ hide depending on certain rules. This makes it easy to create a scene which contains a series of splash screens to show and hide without having to write any code.

The screenshot shows a typical setup but you can modify it to your needs. In this example the Manager is placed on a simple fullscreen Panel GameObject which has a black background. This panel contains the "screen" objects which to show one after the other. You will note that the first screen object is active while the other 2 are inactive. This does not really matter though since the manager will make all screens inactive when the game starts.

The 1st screen simply contains a logo image while the other two each has some text. Each of the screen objects only has a RectTransform on them. You could however have them be Panel, Images Text, etc. The manager does not care what they are. 

Add entries to the screens list via the [+] button, then drag-and-drop each screen into the provided field. Next you need to choose under which condition that screen will be hidden and the next shown. When the game starts all screens are hidden and the 1st shown. Then the rules are checked to decide when to hide the 1st and show the 2nd, and so on.

The **auto unload** option will autmatically unload the scene in which the splash sreen manager object is or delete the GameObject it is on, depending on the option you chose, when the splsah screens are done showing.

There are 3 types of rules and also the option to allow the player to skip a screen. "Player can skip" basically means the player can press any key or mouse button to skip the screen.

### Timeout

With this rule the manager will show the next screen after the specified number of seconds.

### Wait Screen End Trigger

The manager will wait until it is told to go to the next screen. To do this you would have to make call to `SplashScreensManager.TriggerScreenEnd();`; or if you are using Blox you can use the Block `BloxGameSystems > SplashScreensManager > TriggerScreenEnd`

### Watch Variable

This option allows you to set up a condition where some properties and values are compared. In the screenshot the last screen has this rule so that it stays active until the Blox Game Systems Bootstrap is done loading scenes in the background. In this case the last screen would be something which shows some text to indicate that loading is in progress.

The Bootstrap's `IsDone` property is watched and compared against a constant value.

You can click on the 1st or 3rd button to bring up the [Data Binding window](blox-databinding.html). This allows you to select what to bind to and watch for changes.

Note that the middle button `==` can be changed when you click on it.

![](img/blox/25.png)

Events
------

The Splash Screens Manager will trigger both Unity and Blox events when the splash screens changes and when it hides the last screen (is done). Note that it will not trigger the hide event when initially hiding all the splash screens before starting the sequence. The Blox Events are only triggered in Blox on the same object as the splash screens manager component.

- `onSpashScreenShown` This is triggered when a screen is shown. An integer value representing the index of the screen is send (screenIndex Event Variable in Blox). Indexing starts at 0 for the first screen, 1 for the second, and so on.
- `onSpashScreenHidden` This is triggered when a screen is hidden. An integer value representing the index of the screen is send (screenIndex Event Variable in Blox). Indexing starts at 0 for the first screen, 1 for the second, and so on.
- `onSpashScreensDone` This is triggered after the last splash screen is hidden and the splash screens manager is done.

The Blocks for this system can be found under `BloxGameSystems > UICommon`


