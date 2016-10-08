---
title: plyGame Simple Customizer
keywords: unity3d, plygame, rpg, game, maker
sidebar: plygame_sidebar
toc: false
permalink: plygame-simple-customizer.html
folder: plygame
---

Simple Customizer 
=========================

![](/img/plygame/cust/00.png)

The Simple Customizer can be used when creating customizable player characters. It allows for a way to easily change the material, colour, and textures used on objects and enable/ disable objects.

The component can be added to objects via menu: `Component > plyGame > System > Simple Customizer` and the configured in the Inspector of the object. This customizer settings consists of 4 sections, which you can switch between with the 4 buttons. 

The Customizer was created to work on the child objects of the object this component is.

### Object Groups ###

This allows you to set the objects groups. In a group only one object can be active so the other objects will be disabled when you choose which object should be enabled. Use **Add Group** to add a group, then give the group a name (important as you use this in the Blocks), and then add fields to insert (drag and drop) the objects that makes up the group. 

### Material Groups ###

Here you set material groups. Each group should be given a name as this name is used to find the object(s) that the material will be applied to when you make a call to set a material. The depth field is used to control how deep in the parent object's hierarchy child objects will be looked for. The parent object being the object on which the customizer component is placed. Child objects are found be comparing the start of their names with the name you entered for the group. Each child object that starts with the same name will have its material influence, up to the specified depth of child objects. The name test is case sensitive.

If you specified the "Target Object" then the name will not be used to find the object.

You will note that each material entry has a field where you can enter a number. This is used to specify the index of the material in the renderer to influence when working with objects that have more than one material (indexes starts at 0). You can leave this to 0 if you are not use such objects.

![](/img/plygame/cust/02.png)

### Texture Groups ###

This works the same as Material Groups but for Textures.

### Colour Groups ###

This works the same as Material Groups but for Colour.


Apply Customization 
-----------------------------

With the customizer set up you can use either Blocks or the Customizer API to apply customization choices. The Blocks can be found under `Object > Customizer`.

![](/img/plygame/cust/01.png)

The first field takes an Integer value indicating the index into the target Group's list of defined materials, colours, objects or textures. The count, as with all indexes, starts at 0.

The 2nd field is a String value, the name of the Group and the last field should be the GameObject that has a Simple Customizer component on it.

Have a look at this [video](http://www.youtube.com/watch?v=MOn-eZ9gLvY) for more information and example use of the simple customizer.