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

Variables API
-------------

The Variables can also be accessed from script and all follow a similar way to read or set the value of a variable.

### plyVar

This is a single variable and exposes a few functions to work with a variable. You will normally use the short-cuts defined in other classes and not work with this directly.

- `System.Type variableType`: This property returns the Type of the value hold by the variable.
- `object GetValue()`: Returns the value of a variable.
- `void SetValue(object v)`: Set the value of a variable.

```
plyVar v = GlobalVariables.Instance.FindVariable("mystringvar");
v.SetValue("Hello");
```

### plyVariables

Variables are grouped into a container called `plyVariables`. It has the functions needed to access and find the variables by name.

- `plyVar FindVariable(string name)`: Returns reference to a plyVar.
- `bool SetVarValue(string name, object value)`: Set the value of a variable.
- `object GetVarValue(string name)`: Get the value of a variable.

```
plyVariables vars = GlobalVariables.Instance.variables;
vars.SetValue("mystringvar", Hello");
```

### Global Variables

To access these you simply go through the `GlobalVariables.Instance.variables` which will give you a reference to the `plyVariables` type object. The Global Variables exist on a GameObject at runtime which has the `GlobalVariables` component, derived from `plyVariablesBehaviour`, on it.

There are also a few short-cuts so that you do not have to work through the `variables` field.

- `plyVar FindVariable(string name)`: Returns reference to a plyVar.
- `SetVarValue(string name, object value)`: Set the value of a variable.
- `GetVarValue(string name)`: Get the value of a variable.
- `GameObject GetGameObjectVarValue(string name)`: Get the value of a variable as a GameObject. This can be used even if the variable is storing a reference to a Component.
- `T GetComponentVarValue<T>(string name)`: Get the value of a variable as a Component of type T. This can be used even if the variable is storing a reference to a GameObject or different Component of the same GameObject.

```
GlobalVariables.Instance.SetVarValue("mystringvar", Hello");
```

### Object Variables

If a GameOject has the Object Variables component on it you can access and manipulate these variables. The `ObjectVariables` component is also derived from `plyVariablesBehaviour` just like `GlobalVariables` and therefore has the same functions.

- `plyVar FindVariable(string name)`: Returns reference to a plyVar.
- `SetVarValue(string name, object value)`: Set the value of a variable.
- `GetVarValue(string name)`: Get the value of a variable.
- `GameObject GetGameObjectVarValue(string name)`: Get the value of a variable as a GameObject. This can be used even if the variable is storing a reference to a Component.
- `T GetComponentVarValue<T>(string name)`: Get the value of a variable as a Component of type T. This can be used even if the variable is storing a reference to a GameObject or different Component of the same GameObject.

```
GameObject go = Find("player");
ObjectVariables vars = go.GetComponent<ObjectVariables>();
float currHp = vars.GetVarValue("hp");
float newHp = currHp - 10;
vars.SetVarValue("hp", newHp);
```

### Blox Variables

Blox Variables are accessed through the `BloxContainer` component. You will need to know the `ident` of the Blox in which the variable was created. It is more likely that you will only know the name of the Blox. The find the `ident` simply use `BloxGlobal.Instance.FindBloxIdentByName("blox_name")`

- `plyVar FindVariable(string bloxIdent, string varName)`: Return reference to a variable.
- `BloxVariables GetBloxVariables(string bloxIdent)`: Returns the container for variables of a Blox.

The `BloxVariables` is derived from `plyVariables` and has the same functions for working with variables.

- `plyVar FindVariable(string name)`: Returns reference to a plyVar.
- `bool SetVarValue(string name, object value)`: Set the value of a variable.
- `object GetVarValue(string name)`: Get the value of a variable.

```
// Get a reference to the Blox Container on a Player object called "player"
GameObject go = Find("player");
BloxContainer container = go.GetComponent<BloxContainer>();

// Now find the ident for a Blox named "player logic"
string ident = BloxGlobal.Instance.FindBloxIdentByName("player logic");

// stop now since the ident is invalid (name might be incorrect)
if (ident == null) return;

// Get the variables of the Blox
BloxVariables vars = container.GetBloxVariables(ident);

// stop now since the variables could not be found. guess the blox is not in this container
if (vars == null) return;

// Now I can set the value of a variable
float currHp = vars.GetVarValue("hp");
float newHp = currHp - 10;
vars.SetVarValue("hp", newHp);

```

### Event Variables

Event Variables should not be accessed from script since these variables are only valid inside a Blox Event that created them.