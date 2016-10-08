---
title: Blox Variables
keywords: unity3d, blox, visual scripting, programming
sidebar: blox_sidebar
toc: false
permalink: blox-variables.html
folder: blox
---

Variables
=========

Variables is a way to add and manipulate data in the game. A variable is something which holds a value, or in the case of List/Array variables a list if values.

There are 4 kinds of Variables and they are all accessed via the `Common > Variable` Block in Blox. This Block allows you to either get the value of a variable or set the value of a variable.

### Event Variables

The `Event Variables` are variables which are temporary and only valid in the event they are defined and until that event exist. These variables are identified by the _{e}_ icon. They are the kind of variables you will use while manipulating data in an event; for example using them as counters in a loop. They can't be defined anywhere and is created on the spot when the Variable Block try to access one. Any other kind of variable would cause the Variable Block to throw an error if that variable was not defined yet. See below for how the other kind of variables are defined.

![](img/blox/02.png)

### Blox Variables

`Blox Variables` are related to the Blox they are defined in but unique among instances of Blox attached to GaemObjects. This means that each GameObject that has the same Blox on it will allow you to separately edit the Blox variables (properties) for it. This Variable is identified by the _{b}_ icon. They are normally used where you want to give a Blox properties which can be changed in the Inspector to later be read and used by Blocks. 

To define the Blox variables you need to change to the Variables editor of the Blox editor.

![](img/blox/03.png)

Now you can add variables to the Blox via the [+] button. You must specify the value type of the variable and give it a name. The name must be unique among variables in this list. The values you enter here will have no meaning and only be used as defaults when adding the variables to the Blox instance of the GameObject for the first time.

![](img/blox/04.png)

The variables defined in the Blox editor will be available as properties in the BloxContainer Inspector. This is where you can change the values of the variables per GameObject.

![](img/blox/05.png)

There variables can then be read/ set with the Variable Block set to "Blox" ad the name of the variable.

![](img/blox/06.png)

### Object Variables

Next we have `Object Variables`. These are useful when you want to add data to a GameObject but will not be adding any Blox to that GameObject. If you were to add a Blox to the GameObject and that Blox will be needing the data then you could just as well use Blox Variables. 

These variables are identified by the _{x}_ icon. They are added to a GameObject via menu: `Component > Blox > Object Variables`. 

You will note that that Variable Block changes when working with Object Variables. It requires additional information, the GameObject which has the ObjectVariables component from where to get the named variable. It defaults to `self: GameObject`, meaning the GameObject on which this Blox is currently running but you can change this to another GameObject if needed.

![](img/blox/07.png)

### Global Variables

Finally there is the `Global Variables`. These are defined in one place and there can be only one of these kind of variables in the game (they are global after all). These variables are identified by the _{g}_ icon and is defined in the `BloxGlobal` prefab found under `Assets/projectData/Blox/`.

![](img/blox/08.png)

