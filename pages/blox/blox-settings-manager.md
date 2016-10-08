---
title: Blox Settings Manager
keywords: unity3d, blox, visual scripting, programming
sidebar: blox_sidebar
toc: false
permalink: blox-settings-manager.html
folder: blox
---

Settings Manager
================

The settings manager is a helper class which makes it easier to access and change game settings like the quality settings, resolution or sound volume. It provides new Blocks and methods which data binders can bind to.

Graphics
--------

- bool **Fullscreen**: Get or Set whether the game is in fullscreen mode or not
- int **ScreenResolutionIndex**: Get or Set the screen resolution index. This is an integer value representing a resolution from the list of supported resolutions. The list of resolutions can be retrieved via ScreenResolutions. It will return -1 if the resolution index could not be determined.
- List<string> **ScreenResolutions**(): A list of strings representing the available screen resolutions. It is in the format "WxH", ex "1920x1080". Note that this will return a test entry of "640x480" when running in the Unity Editor since Unity does not allow changing of resolution when running the inside the editor.
- string[] **GFXQualityLevels**: An array of quality level names as set up in Quality Settings editor; menu: Edit > Project Settings > Quality
- int **GFXQualityLevelIndex**: Get or Set the quality level to use by the index into the list of defined quality levels. The 1st defined level's index will be 0, the 2nd will be 1, the 3rd will be 2, and so on. These quality levels are created in the Quality Settings editor; menu: Edit > Project Settings > Quality </summary>

Sound
-----

Except for the main sound volume there are also 10 sound types defined: Music, Ambient, Effects, Voice, GUI, Other1, Other2, Other3, Other4, Other5. How and when you use these are up to you. You might use all of them or only some of them. The [Sound Volume Updater component](blox-components) will be the most common way to interact with the sound volume settings.

- float **SoundVolume_Main**: Set or Get the Main sound volume. The value is a float value between 0 (no sound) and 1 (full). So (0.5) is half the sound volume.
- float **SoundVolume_Music**: Set or Get the Music sound volume. The value is a float value between 0 (no sound) and 1 (full). So (0.5) is half the sound volume.
- float **SoundVolume_Ambient**: Set or Get the Ambient sound volume. The value is a float value between 0 (no sound) and 1 (full). So (0.5) is half the sound volume.
- float **SoundVolume_Effects**: Set or Get the Effects sound volume. The value is a float value between 0 (no sound) and 1 (full). So (0.5) is half the sound volume.
- float **SoundVolume_Voice**: Set or Get the Voice sound volume. The value is a float value between 0 (no sound) and 1 (full). So (0.5) is half the sound volume.
- float **SoundVolume_GUI**: Set or Get the GUI sound volume. The value is a float value between 0 (no sound) and 1 (full). So (0.5) is half the sound volume.
- float **SoundVolume_Other1**: Set or Get the Other1 sound volume. The value is a float value between 0 (no sound) and 1 (full). So (0.5) is half the sound volume.
- float **SoundVolume_Other2**: Set or Get the Other2 sound volume. The value is a float value between 0 (no sound) and 1 (full). So (0.5) is half the sound volume.
- float **SoundVolume_Other3**: Set or Get the Other3 sound volume. The value is a float value between 0 (no sound) and 1 (full). So (0.5) is half the sound volume.
- float **SoundVolume_Other4**: Set or Get the Other4 sound volume. The value is a float value between 0 (no sound) and 1 (full). So (0.5) is half the sound volume.
- float **SoundVolume_Other5**: Set or Get the Other5 sound volume. The value is a float value between 0 (no sound) and 1 (full). So (0.5) is half the sound volume.
- **SetMainSoundVolume**(float value): Set main sound volume. The value is a float value between 0 (no sound) and 1 (full). So (0.5) is half the sound volume.
- float **GetMainSoundVolume**(): Get main sound volume. The value is a float value between 0 (no sound) and 1 (full). So (0.5) is half the sound volume.
- **SetSoundVolume**(SoundVolumeType type, float value): Set sound volume of specified sound type. The value is a float value between 0 (no sound) and 1 (full). So (0.5) is half the sound volume.
- float **GetSoundVolume**(SoundVolumeType type): Get sound volume of specified sound type. The value is a float value between 0 (no sound) and 1 (full). So (0.5) is half the sound volume.

