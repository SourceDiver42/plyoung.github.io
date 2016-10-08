---
title: plyGame Data Provider
keywords: unity3d, plygame, rpg, game, maker
sidebar: plygame_sidebar
toc: false
permalink: plygame-dataprovider.html
folder: plygame
---

Data Provider System 
============================

Data Providers are used by various systems to get data from each other. Systems that are able to provide data will hook into the system and be available for selection when you are editing a property.

Data providers can both provide data (to get a variable value) and accept data (to set a variable value).

The [DiaQ Debug Node](diaq.html) is an example of something that makes use of Data Providers to get data while the DiaQ Set Value Node makes sue of Data Providers to set values in other systems.

In the editor you will be presented with a window where you can set up what data provider you want to interact with.

First you select the **Data Provider**. What is available in this list will depend on the plugins installed and whether they registered data providers or not.

Next you will see options unique to the selected data provider.

Data provider: DiaQ
----------------------------

![](/img/plygame/dataprov/01.png)

[DiaQ](diaq.html) allows access to the value of metaData defined for DiaQ, a Graph or a Node.

The 1st property, **named**, is the name of such a metaData entry.

Next you select whether the metaData belongs to the DiaQ global, a Graph, or a Node. If you choose Graph or Node then you need to specify which Graph and/ or Node to look in for the data entry.
 

