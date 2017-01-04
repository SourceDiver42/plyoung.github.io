---
title: Vinoma Actions
keywords: unity3d, visual novel, game maker
sidebar: vinoma_sidebar
toc: false
permalink: vinoma-actions.html
folder: vinoma
---

Vinoma Actions
==============

This page contains information on all the actions that are available to build Vinoma scenes with. Please have a look at the [Vinoma videos](https://www.youtube.com/playlist?list=PLuaBtUXEKcdJVi1eJIqIXqGcyNfU4la_5) which goes into more detail concerning these actions.

Story
-----

This group of actions are about the story and flow of the game (moving between actions and from one scene to another).

### Dialogue ###

The Dialogue action is used to show conversation text to the player. It works hand-in-hand with the Dialogue Panel, defined under the VinomaGUI object in the MainScene (Unity scene).

**Name**: Name of the character that is speaking. You may choose to leave this empty. The name of the speaking character can also be controller in the Dialogue Text field.

**Text**: This is the conversation text to display. The default dialogue panel does not include a scrollbar and it is not a common practice to use a scrollbar in Visual Novel type games so text/ paragraphs that are too long will be broken up into sections of text that are displayed one after the other when the player choose to advance in the conversation. You can also choose break up the text into smaller parts and the player will click (left mouse button) or use the spacebar key to skip through conversation text. Text is broken up by leaving an empty line between sections of text (creating paragraphs).

You can also change the name that is shown when a new line of text is encountered. You do this via a special marker that includes the name in curly brackets. It must be the first thing to appear on the new line of text. ex. `{name} The conversation text.`

Example text...

```text
This is a first line of text. It does not change the name from one given in the Name field.

There was a gap, so this is a second line of text to show after the player choose to skip the first line of text.

{Peter} This line of text will change the shown name to Peter.

Another line of text that again does not change the name, so it stays Peter while this line is shown.
```

The text can include the names of variables to insert the values of the variables in the place of the variable name. This is done by using the following format in the text ` _variable-name_ `. Notice that the opening ` _` has a space in front of it. The closing `_ ` must have a space after it if more text follows. Ex. `His name was _name_`

You may also use a variable for the name change text but you must leave a space between the opening `{` and `_` and closing `_` and `}` , ex

```text
{ _name_ } This line of text will also change the name to whatever te value of the name variable is.
```

The dialogue text also allows for stylising the text with special tags. You can read about these tags in the [Unity Documentation](http://docs.unity3d.com/Manual/StyledText.html).

- **b** Renders the text in boldface. Example `This text is <b>bold</b>`
- **i** Renders the text in italics. Example `This text is in <i>italics</i>`
- **size** Sets the size of the text according to the parameter value, given in pixels. Example `This is <size=30>bigger</size> text`
- **color** Sets the colour of the text according to the parameter value. The colour can be specified in the traditional HTML format. `#rrggbbaa` …where the letters correspond to pairs of hexadecimal digits denoting the red, green, blue and alpha (transparency) values for the color. For example, cyan at full opacity would be specified by `#00ffffff`. It might be easier to just use the name of the colour if you do not know what HTML colour format is. See the [Unity Documentation](http://docs.unity3d.com/Manual/StyledText.html) for a list of colour names. Example `This text is <color=red>red</red>`

**Sound** allows you to specify a sound clip that should be played when the dialogue action is executed.

You can also specify a sprite that should be used as a **Portrait**. Note that if you choose this then your Dialogue Panel must include an object named "Portrait" and it must have a `UI > Image` component on it. The Vinoma main scene template includes this object in the GUI by default since version 1.0.5.

A **typewriter effect** can be added to the dialogue text by adding the VinomaTypewriter component from `Component > Vinoma > Typewriter Effect` to the `VinomaGUI > Dialogue Panel > Text` object in the `projectData > Vinoma > MainScene` scene.  One is added by default since verison 1.2.2.

Simply remove this component if you do not want the effect on the dialogue.

- Delay is how to long to wait before adding next character/ word.
- Per Word is whether to add character or words after each delay.

![](/img/vinoma/09.png)

### Label ###

The Label action is used to mark an area in the scene with a named label (or tag). Labels are used by other actions. Be sure to give the label a unique name, if you don't then Goto and other actions might not redirect flow of the game to the correct action.

### Goto ###

This is one of the actions that makes use of the Label action. It can be used to redirect action execution to continue from a given label or even a different scene. 

Options include,

- **Label**: go to a label in the current scene
- **Scene**: go to a different scene and optionally a label in that scene
- **Scene Top**: go to the top (first action) of the current scene
- **Scene Bottom**: go to the bottom (after last action) of the current scene, thus the start of the next scene if there are more scenes following after the current scene


### Buttons ###

This action will display a number of buttons on the screen and wait for the player to click on one of them. Have a look at [this video](https://www.youtube.com/watch?v=UmcrYmdEEGg&index=4&list=PLuaBtUXEKcdJVi1eJIqIXqGcyNfU4la_5) to learn more about the GUI elements that are connected to this action.

You need to click on the small [+] button in this action to add more buttons. Note that by default you can only add up to 5 buttons but this can be increased or decreased if you modified the VinomaGUI Buttons Panel.

For each Button field you add the following options are available.

- **Text** to display on the button. The text can include the names of variables to insert the values of the variables in the place of the variable name. This is done by using the following format in the text ` _variable-name_ `. Notice that the opening ` _` has a space in front of it. The closing `_ ` must have a space after it if more text follows. Ex. `His name was _name_`
- **Action** to take when the button is clicked. The action can be be...
	* None - move to the next action
	* Goto - to go to the specified location in the scene or another scene
	* Variable - to change the value of a variable. The first field is the name of the variable, followed by the operation to apply to the variable and finally the value to use in the operation. The next action will be executed after the variable is modified.
	* Switch - to change the state of a switch The next action will be executed after the switch is modified.

The **timeout** option allows you to specify which button should be chosen by default if the buttons was shown for a certain amount of time (in seconds). With it enabled you will see a new toggle appear in each button you defined.

### Branch ###

This action is used to divert action execution to another area in the scene or a different scene by checking if conditions where met. The branches are checked from the top down and the first branch for which the condition(s) are met will be the one to be 

You need to click the [+] button to add branches.

- **Goto** is where the branch should lead to if all its conditions where met.
	* Label - go to named label in current scene
	* Scene - go to start of named scene or optionally (2nd text field) a label in that scene
	* Scene Top - go to top of current scene (1st action)
	* Scene End - go to end of current scene (after last action)
- **If** is the condition(s) that should be checked. Press the [+] button to add a condition. You can either check if a variable has a certain value or if a switch is in a specific state.

### Hotspots ###

Hotspots works almost similar to Buttons but rather than pressing a button the player have to click on an invisible rectangular area that you've defined. You would normally use this together with a Background. For example, you might show a background of a hallway with doors and create a hotspot over one of the doors which, when clicked, will change the active scene.

**Target** is the Hotspots Overlay to enable or disable. The list will be empty if you did not create any hotspots yet. Use the Hotspots editor to create overlays.

**Scale** determines what the overlay will use to determine the position and size of the hotspots. The default is to scale it according to the active background but you may also choose to use the Screen or Design sizes as guide.

**Wait** will cause Action execution to stop until a hotspot was clicked on. If the hotspot was set up to change the scene or go to a label then execution of actions will continue there, else execution will continue with the action following this one.

**You will normally want to have **Auto-disable** ticked so that the overlay is automatically removed after the player clicked on a hotspot.

Please have a look at this [tutorial video](https://www.youtube.com/watch?v=e_B_6ox_TBo&index=16&list=PLuaBtUXEKcdJVi1eJIqIXqGcyNfU4la_5) to learn more about creating Hotspots Overlays.

Character
---------

These actions are used to control the character in the scene, like making them enter and exit the scene or change the pose or facial expression of the character.

### Enter Scene ###

This action is used to make a character come into the scene. Its first field, **source**, is used to specify which character to enter. The source is a Unity prefab. You might want  to have a look at the [video tutorial](https://www.youtube.com/watch?v=PcePY8hyVd4&index=2&list=PLuaBtUXEKcdJVi1eJIqIXqGcyNfU4la_5) on characters to learn how this prefab is created but it is really simple.

A character prefab can be created in two ways and depends on the sprites you use to represent the character's base and various pose/ expressions the character might have.

If all character poses are different sprites that include the base (body and face) then you will create a new empty GameObject - Unity menu: `GameObject > Create Empty` and then drag and drop each sprite into this GameObject. Remember to rename the GameObject to the name of the character. To make a prefab you will drag-and-drop the GameObject from the Hierarchy panel into a folder in the Project panel. Then delete the GameObject from the Hierarchy/ scene since you are done with it now.

![](/img/vinoma/03.png)

Characters that has a base, a sprite with the body and head but face and other details missing, is created in almost the same way but you start off by dragging the base sprite into the Hierarchy to create a new GameObject. You could also create an empty GameObject and then add a SPrite Renderer component to it and drag the sprite into the Sprite field of the component. Then you add the various pose sprites to this main object.

Each sprite/ object under the main GameObject of the character is the pose of the character. When the character enters the scene all these child objects (sprites) will be hidden and only the one you selected in the Enter Scene's properties will be visible. Be sure to give these child objects nice names so that you can identify them easily since the pose names are taken from the names of these child objects.

![](/img/vinoma/04.png)

Now that you have some character prefabs you can drag and drop one of them into the Source field of the Enter Scene action. This will cause the rest of the action's fields to be displayed.

- **Name** Will take the name of the prefab by default but you can rename the character if you like. Only one character with the same name by be in the scene at any given time.
- **Pose** The pose that the character should enter with. A Pose is a child object (sprite) of the character prefab.
- **Sort** Determine if the character should enter in front of or behind other character. This only really matter when there are a lot of characters in the scene and they are starting to overlap.
- **Enter** Is used to tell how the character enters the scene. If you choose anything other than "In Place" then you will also be able to set the sped at which the character enters the scene (movement speed).
- **Move** The speed (in seconds) at which to enter/ move into the scene from whatever direction is chosen in the Enter field.
- **Fade** The speed (in seconds) at which the character should fade in (become visible). Set this to 0 to disable this option.
- **Location** is the location that the character should end up in the scene. This could be in the middle, to the left or to the right or you could specify a custom value. Other character will be moved to make space for the new character.
- **Offset** can be used to make small corrections to the character's position in the scene. Normally you would make the correction while creating the prefab by editing the Y value in the transform of the object and then saving the prefab with that value.
- **Mirror** will flip the whole character horizontally.
- **Wait** can be enabled to wait for the character to finish entering the scene before the next action is executed.

### Exit Scene ###

This action is used to remove a character from the scene. You can select the character from the **Name** drop-down. The **Exit** options controls how the character exits the scene. The **Move** option is available if Exit is anything other than "In Place" and sets how fast the character will move out of the scene in seconds. The **Fade** option is the seconds it takes the character to fade out. You can set this to 0 to make the fade out instant. The **Wait** option will have Vinoma wait for this action to complete before moving on to the next action.

### Change Pose ###

Change Pose is used to change the pose of the character. A pose is basically one of the child objects (sprites) of the character prefab being made visible.

- **Name** The character for which to change the pose. Only characters that was entered with the Enter Scene action will be listed here.
- **Pose** that the character should adopt.
- **Fade** is how long in seconds it should take to fade from the current pose to the new pose.
- **Wait** Enabled this to wait for the pose fade to complete before the next action is executed.

Visual
------

This group of actions are used to control the visibility of GameObjects, Sprites and UI Panels and Elements. It also include those actions that might make changes to an object, for example changing what Buttons are shown to the player.

### Change Background ###

This action is used to changed the background of the scene. A background is a simple sprite (image) that should be big enough to fill the whole screen.

- **Source** drag a sprite into this field. This is the sprite (image) that will be shown on the background.
- **Scaling** can be used to specify how the image should be rescaled to fit into the available screen space.
- **Fade** is the speed (in seconds) at which the image should fade in. If there is already a background image then that image will fade out at the same speed. You can set this to 0 to have the image displayed instantly.
- **Wait** can be set to have Vinoma wait for the fade to complete before the next action is executed.

### GameObject ###

The GameObject action is used to control the visibly of game objects or sprites. You can drag and drop the target object into the **Target** field. It is best to keep all your custom objects and sprites under the `_GameObjects_` group in the MainScene (Vinoma's main Unity scene) since Vinoma can then automatically restore the visibility of the objects when the player loads a saved game session.

![](/img/vinoma/05.png)

### Panel ###

Controls the visibility of Panels defined under the VinomaGUI group. Each object directly under the `VinomaGUI` object is known as a Panel in Vinoma.

Normally any visible panel will be hidden when you show another panel but with the **Additive** option set the new panel will be made visible without hiding any other panels.

![](/img/vinoma/06.png)

### Text ###

Used to change the text on a UI Text Element.

**Target** is the target element/ object that has a Unity Text Component on it. This object must be under the `VinomaGUI` object and you will normally place it inside one of the panels under the VinomaGUI object.

**Text** you want to set the target Text object with. The text can include the names of variables to insert the values of the variables in the place of the variable name. This is done by using the following format in the text ` _variable-name_ `. Notice that the opening ` _` has a space in front of it. The closing `_ ` must have a space after it if more text follows. Ex. `His name was _name_`

### Image ###

Allows you to change the Sprite of an object that has a SpriteRenderer Component (object created through GameObject > 2D Object > Sprite) or Image Component (object created through GameObject > UI > Image) on it.

**Group** tells Vinoma under which main group to find the object, that is either under the `VinomaGUI` object or the `_GameObjects_` object. Then you specify the path to the object via the **Target** field. This is the full path name to get to the object. In the sample screenshot that would be `TEST_1/MyImage` since `MyImage` is inside `TEST_1`, which is under the group `VinomaGUI`.

**Sprite** is the sprite image to set the target to. If you select "none" here then the target's image will be removed.

You can also choose that the image fade in (or out if Sprite is none). Set **Fade** to 0 to disable this. Finally you can select **Wait** if this actio's fade should complete before the next action is executed.

Media
-----

This group of actions are used to control music and sound effects.

### Play Sound ###

This is used to play a sound effect.

- **Source** Drag the audio clip to play into this field.
- **Name** This will be automatically filled with the name of the clip but you may rename it. The name is only needed if you set the clip to loop and then later need to use a Stop Sound action.
- **Balance** controls the stereo balance of playback.
- **Loop** can be set if you want the sound to loop until stopped by the Stop Sound action.

### Stop Sound ###

Used to stop a looping sound or a sound clip that might be very long.

### Start Music ###

This action is used to start a music clip. Any playing music will be stopped before the new music is started.

- **Source** Drag the audio clip to play into this field.
- **Fade** Control the fade in speed (in seconds) of the music. Can be disabled by setting to 0.
- **Loop** You normally want this enabled for music.

### Stop Music ###

Stop any currently playing music. You can also choose the music fade out speed (in seconds) or set the **Fade** option to 0 to have it stop immediately.

Effects
-------

Actions to apply an effect on an object or the scene.

### Wait ###

The Wait action can be used to stop action execution until a specific condition is met.

- **Seconds** Wait for a number of seconds before executing the next action.
- **Mouse Click** Wait for the player to press a mouse button before executing the next action.
- **Any Button** Wait for the player to press a key or mouse button before executing the next action.
- **Forever** Will basically cause a dead-lock. You do not normally use this option except when doing advanced things, like controlling the scene flow via script.

Other 
-----

This group contains various other actions.

### Blox Event ###

(Only available if you installed the [Blox Visual Scripting](https://www.assetstore.unity3d.com/#!/content/12859?aid=1101lGtB) system and imported the package: `\Assets\plyoung\vinoma\Packages\vinoma_blox.unitypackage`)

This action allows you to Trigger a Blox Event in the target GameObject. THe Target must have a Blox component on it and be in a State that has the Event that should be executed. If you leave **Target** to none then it will be assumed that the `VinomaGameGlobal` object is the target.

### Console ###

This action is useful when debugging since it is used to write messages to the Unity Console while the game is running. You could use this action to determine if a specific area in a scene is ever reached or to check the value of a variable or state of a switch. The Unity Console can be opened from the Unity menu: `Window > Console`.

**Message** is the message to write to the console. You can also that the value of a **Variable** or state of a **Switch** is displayed in the console.

### Script ###

Is used to invoke a function in one of your scripts. The script must be on the `CustomScripts` object in the `Assets/projectData/vinoma/MainScene` Unity scene.

### Switch ###

Is used to set the state of a switch. Other actions, like the Branch action, might later read this state to determine what to do next.

### Variable ###

Is used to set or change the value of a variable. The value can be either a string, like a name, or a number. Other actions, like the Branch action, might later read the variable's value to determine what to do next.

- **Name** is the name of the variable.
- **Operator** is what you want to do with the value of the variable.
	* Set - will set then value to the one specified
	* Append - will append the given value to the end of whatever the variable's value might already be and assume you are working with a string value.
	* Add - will add the given value and assume you are working with numbers
	* Subtract - will subtract the given value from the variable's current value and assume you are working with numbers.
	* Multiply - will multiply the given value with the variable's current value and assume you are working with numbers.
	* Divide - will divide the variables current value by the given value and assume you are working with numbers.





