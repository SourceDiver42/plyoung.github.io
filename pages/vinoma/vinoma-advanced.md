---
title: Vinoma Advanced
keywords: unity3d, visual noval, game maker
sidebar: vinoma_sidebar
toc: false
permalink: vinoma-advanced.html
folder: vinoma
---

Vinoma Advanced
===============

This section will describe some more advanced features. These might require additional scripting to use.

Dialogue Text Handler
---------------------

If you place a component which implements the IDialogueTextHandler interface on the Dialogue Text object then all text will be send to this interface rather than the Text component directly. You can then manipulate this text as needed; for example to create a text writer effect.

The Interface require you to implement two functions.

```csharp
// called when new text should be set on dialogue text field
void SetText(string text);

// called after the dialogue is made visible and conversation about to start
void Clear();
```
