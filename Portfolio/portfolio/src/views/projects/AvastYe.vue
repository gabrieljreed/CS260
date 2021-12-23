<template>
<div class="AvastYe">

    <h1>Making procedural textures in Unreal Engine 4</h1>
    <h2><i>Avast Ye</i>, BYU Animation</h2>

    <p>
        &emsp;As a college freshman and an animation pre-major, I had the opportunity to work on the BYU Animation capstone game Avast Ye. Players take control of Captain Kate, an ant who is also a pirate captain and commands her crew as they battle evil cockroaches through the level. The terrain is composed of human-sized objects from a bug's perspective.
    </p>

    <img src="../../assets/AvastYe/avastYe.png"/>

    <p>
        &emsp;Being that the game was composed of assets at a bug-like scale, small sticks and twigs were commonly used as stakes, fences, ladders, bridges, and more. While I initially made separate textures for each of these assets, it soon became clear that this was severely limiting game performance.
    </p>

    <p>
        &emsp;In Substance Designer, I created a simple "stick" material that outputs PBR texture maps which I imported into Unreal. I created a custom material to vary the shading, tint, bump height and other parameters and wrapped that in a Blueprint. When objects with this material were placed in the level, random values were generated to give variety to the material.
    </p>

    <p>
        &emsp;This solved several problems simultaneously: the sticks and wood materials now had a consistent look throughout the entire level, individual assets could look much more unique and varied, and the game now ran much smoother with far fewer texture assets.
    </p>

    <div class="Sticks">
        <div class="image">
            <img src="../../assets/AvastYe/stickGraph.png"/>
        </div>

        <div class="image">
            <img src="../../assets/AvastYe/proceduralSticks.png"/>
        </div>
    </div>

    <br />

    <p>
        &emsp;I used a similar process to create different colors and patterns for bandanas that the enemy cockroaches would wear.
    </p>

    <div class="Bandanas">
        <img src="../../assets/AvastYe/bandana1.png"/>

        <img src="../../assets/AvastYe/bandana2.png"/>

        <img src="../../assets/AvastYe/bandana3.png"/>
    </div>

    <br />

    <p>
        Link: <a href="https://store.steampowered.com/app/1064170/Avast_Ye/"><i>Avast Ye</i> on Steam</a>
    </p>


</div>
</template>

<style>
/* .AvastYe {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
} */

.AvastYe p {
    text-align: left;
    padding-left: 100px;
    padding-right: 100px;
    font-weight: normal;
    font-family: 'Cabin', sans-serif;
    line-height: 1.5;
    color: #2C3E52;
}

.Sticks {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

.Sticks img {
    border-radius: 0px;
    object-fit: contain;
    height: 200px;
    width: auto;
    object-position: 50%, 50%;
}

.Bandanas {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

.Bandanas img {
    border-radius: 0px;
    object-fit: contain;
    height: 200px;
    width: auto;
    object-position: 50%, 50%;
}
</style>
