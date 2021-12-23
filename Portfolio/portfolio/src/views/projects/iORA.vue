<template>
<div class="ProjectPage">
    <h1>Realtime procedural animations on iOS - iORA</h1>
    <h2>BYU Chemistry Department</h2>

    <p>
        &emsp;In 2020, I partnered with the BYU Chemistry department to make high quality animations of chemical reactions for students. Existing options were either outdated, or very low quality, and often came at a high price.
    </p>

    <p>
        &emsp;I worked with a research group within the chem department that ran simulations of chemical reactions. I was able to take some of their output and parse the data into a form I was able to bring into Maya. Once in Maya, I wrote a script to keyframe simple atom models to represent the animation. While this gave a good output render, it was completely static. We wanted to try and create something that students would be able to interact with.
    </p>

    <p>
        &emsp;We settled on creating an iPhone app and set out two parameters: first, the app had to be lightweight and run the animations in real time on an iPhone. Second, the animations needed to be procedural, not hand-animated, as animating them by hand would have been lengthy and expensive.
    </p>

    <div class="Image">
        <img src="../../assets/iORA/iORABasic.gif" />
    </div>

    <div class="Image">
        <img src="../../assets/iORA/iORANav.gif" />
    </div>

    <p>
        &emsp;I turned to Apple's SceneKit, a set of tools for 3D rendering on the iPhone. Luckily, molecules can be represented with basic spheres and cylinders, which came pre-built and rendered very quickly and efficiently. I created a system to use the same data from my Maya scripts and animate the same reactions in realtime on the iPhone. I also added buttons to control the animation and gave the user the ability to tap on individual atoms and see information on them. I also helped develop a complex bonding algorithm that calculated both full and partial bonds between atoms on every frame for maximum accuracy.
    </p>

    <div class="Image">
        <img src="../../assets/iORA/iORAControls.gif" />
    </div>

    <p>
        &emsp;My goal was not to make a beautiful and polished app, but rather a proof of concept to demonstrate that such an app would be viable, and I was able to meet the goals I had initially set. The app was very quick and smooth, the memory profile was in line with those of other lightweight apps. Additionally, the animations were completely procedural, adding more was very easy, and users could move around the atom in 3D space, examining individual atoms along with the lengths and angles between them. The app could also handle very complex reactions with ease.
    </p>

    <div class="Image">
        <img src="../../assets/iORA/ComplexReaction.png" />
    </div>

    <p>
        &emsp;I have since passed the project off to other students specializing in software design to flesh out, design, and test the rest of the app more thoroughly.
    </p>

    <p>
        &emsp;Link: <a href="https://github.com/gabrieljreed/iORA">See the code on GitHub</a>
    </p>

</div>
</template>

<style>

</style>
