---
title: plyGame Screens
keywords: unity3d, plygame, rpg, game, maker
sidebar: plygame_sidebar
toc: false
permalink: plygame-screens.html
folder: plygame
---

Screens
===============

![](/img/plygame/screens/00.png)
The Screens System is an interface solution. It is mainly used to create the intro/ splash screens, the language selection screen and loading screens but can also be used to create screens like the main menu and in-game HUD and panels.

Screens are based on the Unity OnGUI() solution. You might want to create your game menu(s) and in-game HUD and panels with a solution like the new Unity GUI, NGUI, Daikon Forge, etc. as they are more robust. Only the Splash Screens and Language Selection screens should always be created with the Screens editor. Loading screens are normally very simple and might also be worth doing in the Screens editor rather than another solution.

The screens editor can be opened from the Toolbar or menu: `Tools > PLYoung > plyGame > Screens Editor` and is divided into several tabs, used to edit various types of screens.

Splash Screens 
-------------------------

These are what you will see once the game has started. They normally show company logos or short videos. Each splash screen you define will follow on the one before it until no screen is left to be shown, after which time the language screen will be shown, if any was created.

For each of the screens you define you will be able to set the following:

- **Timeout**: how long the screen will be displayed before it is hidden.
- **After movie**: can be used to tell the screen to move to the next one as soon as the specified movie is done paying.
- **Allow skipping**: can be enabled to allow the player to skip the screen. Normally by a mouse click or key press.

Language Screen 
------------------------

The Language Screen follows on the Splash Screens and is used by the player to select the language to play in, if any is defined. To skip this screen you simply don't add any elements to it.

<span class="label label-warning">Important</span> You need to set either the Screens or Scene option in this screen's settings, else plyGame will not know how to move on from this screen.

The following options are specific to this screen, under its settings:

- **Min Load Time**: allows you to set a minimum amount of time the load screen should be displayed. 
- **Screen**: here you can select which Custom Screen should be shown by plyGame after the Language Screen is closed.
- **Scene**: or you can select that this scene be loaded. This could be a scene containing your main menu. If you do not specify any Screen or Scene then the first scene, other than bootstrap, will be loaded and a warning will be displayed in the console.
- **Language Buttons**: The number of options you see under the language select buttons will depend on how many languages you defined in the [language editor](languages.html). Here you basically link the button elements placed for the screen with a language. This means that when the player press that button he will in fact be choosing the linked language.

Loading Screens 
------------------------

plyGame has a default loading screen that simply shows "Now Loading ..." when you do not define any screens here. There are only two cases in which plyGame will automatically show a loading screen and it will only be this default screen. They are when the game starts for the first time and then again after the language screen is closed. In both cases loading might be so fast that you will never noticed the loading message.

For any other time you want a Loading screen visible you will make use of Blocks to show or hide the screen.

The **Min Load Time** option allows you to add an artificial delay before the screen will be hidden. This will cause the screen to be visible for a minimum amount of time even if you make a call (via Blocks) to hide the loading screen.

The **Click to Continue** option will cause the screen to stay visible and wait for the player to press a button before the loading screen will be hidden. The player will not be able to click until you made call to hide the screen. It would be good to add an element to the screen that tells the player that he needs to press a button to continue. This element could be hidden by default and then when you make the call to hide the load screen you can set this element to visible. The player will then see the notification and the screens system will be in a state where it is waiting for the button press before actually hiding the loading screen.

**Text** (by default "now loading ...") can be changed to what you want it to be. Tip: if you are using uGUI for all your interface work then you might want to simply set this to an empty value to prevent some cases where this text would be shown for a split seconds while your UI is already visible.

![](/img/plygame/screens/01.png)
<span class="label label-primary">Tip</span> If it seems the loading screen won't go away then it is possibly because you forgot to make a call to do it. plyGame do not automatically hide the loading screen after a level/ scene has loaded as it can't predict whether you might want to load additional scenes or not. You have to actually make a call for it to be hidden via a Block like `GUI > Hide All Screens`. A good place to put this Block is in the `Common > On Start` or `Common > On State Enter` Event of a Blox in the game scene. Normally you will have a GameObject in your game scenes for the sole purpose of handling misc things like this.

Custom Screens 
-------------------------

Here you can define menus, panels, HUD, etc that is used in your game. Showing and hiding these screens are done by using Blocks (in plyBlox). There are no unique settings for these screens. Have a look at the next section to learn more about the settings that all screens have in common.

-----------------------------------------------------------------------------------------------------------------------
Settings or Properties
================================

Just under the list of screens, to the left-hand side of the Screens editor is the properties of the Screen and/ or selected Element.

The Screen properties include:

- **Skin**: a Unity GUI Skin that should be used with the Screen. 
- **Clear Background**: set this and specify a colour to clear the background. You want to disable this for screens that are part of the in-game HUD or panels of your game.

Below the Screen properties will follow a list of all Elements placed on the screen or, if an Element is selected, the properties for that Element.

### UI Element ###

With a screen element selected you will notice the first set of properties for that element under 'UI Element'. These are settings/ properties common to all screen elements.

- **Name**: the name of the element.
- **Depth**: the sort order that determine if the element appears above or below other elements.
- **Anchor**: determine to which side of the screen the element will stick to.
- **Scale**: determine how the element will scale with the screen.
- **Offset**: is the offset from the anchor point. The (r) button is used to reset the values.
- **Size**: is ho big the element appears to be on the screen.
- **Style**: is the style this element will use from the Skin specified for the screen. Note that all elements have a default style. Buttons for example uses 'button' by default and text uses 'label' by default.
- **Visible**: indicate if this element should be visible on the screen at run-time. You might want to only show it when the time is right and can use this option to have it hidden till then.
- **Enabled**: can be used to indicate if elements, like buttons, should be enabled (player can click on the button) or not (the player can't click on the button).

-----------------------------------------------------------------------------------------------------------------------
The Screen Elements 
=============================

Along the top of the screen editor is a toolbar containing buttons to create the elements that can be placed on a screen.

![](/img/plygame/screens/02.png)
### Text ###

The Text element is used to, well, show some text on the screen.

![](/img/plygame/screens/03.png)
### Button ###

A Button is something a player can click on. It won't do anything if you do not link an Event to it. To link an event you simply enter the name of a `Common > Custom` Event that should be called in the GUI plyBlox when the button is pressed. You can click on the 'Edit' button to open the Screens' plyBlox prefab in the plyBlox Editor and add the event.

![](/img/plygame/screens/04.png)
### Text Field ###

The Text Field is used by the player to enter text or numbers which you can then later retrieve for whatever use.

![](/img/plygame/screens/05.png)
### Toggle ###

A Toggle has an On (True) or Off (False) state.

![](/img/plygame/screens/06.png)
### Image ###

The Image element is used to show an Image on the screen.

![](/img/plygame/screens/07.png)
### Box ###

The Box or Frame element is used to show a simple box shape on the screen.

![](/img/plygame/screens/08.png)
### Movie ###

 The Movie element is used to show video stream on the screen and can also play an audio stream when the video is started.<br>
 <span class="label label-info"><i class="fa fa-info-circle"></i> Unity Pro:</span> Video playback requires Unity Pro. Windows, OSX and Linux only.

-----------------------------------------------------------------------------------------------------------------------
plyBlox 
================

The Screens System does not trigger any specific Events. The Screens system has its own Blox object where its elements can trigger Events on. The Button can for example trigger a `Common > Custom` Event. The Blox object is stored in a prefab called "ongui" in `Assets/plyData/System/`.

Blocks related to the Screens System is provided in the category: `GUI > Screens (plyGame)`. They include Blocks that can show and hide screens. Since the Screens System is based on Unity's OnGUI() you might also be interested in the OnGUI Event and the Blocks in `GUI > OnGUI`. These could be used to extend what is shown on a screen.






