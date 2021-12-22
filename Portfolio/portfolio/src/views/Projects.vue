<template>
  <div class="about">
    <h1>Things I've worked on</h1>

    <div class="Projects">

        <router-link to="/projects/AvastYe"><div class="Project">
            <div class="Thumbnail">
                <img src="../assets/AvastYe/proceduralSticks.png"/>
            </div>
            <h2>Making procedural textures in Unreal Engine 4 - Avast Ye, BYU Animation</h2>
        </div></router-link>

        <router-link to="/projects/LiveLink"><div class="Project">
            <div class="Thumbnail">
                <img src="../assets/MVNLiveLink/1_MVNStream.png" style="object-position: left top;"/>
            </div>
            <h2>MVN Live Link to Unreal Engine: Realtime motion capture in UE4 - BYU Media Services</h2>
        </div></router-link>

        <router-link to="/projects/BackburnerScripting"><div class="Project">
            <div class="Thumbnail">
                <img src="../assets/Pronounce/pronounce.png" style="object-position: left top;"/>
            </div>
            <h2>Scripting with Backburner: IPA pronunciation - BYU Media Services</h2>
        </div></router-link>

    </div>


  </div>
</template>

<style>
.Projects {
    display: flex;
    flex-direction: column;
}

.Project {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 10px;
    border-style: solid;
    border-color: #D8C3A5;
    border-radius: 5px;

    /* height: 150px; */

    transition: transform .2s; /* Animation */
}

.Project:hover {
    transform: scale(1.03);
}

.Thumbnail {
    display: flex;
    justify-content: center;
}

.Project img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    padding: 10px;
    border: 2px solid #333;
    /* border-radius: 0px; */
    /* padding: 5px; */
}

.Project h2 {
    text-align: left;
    padding-left: 20px;
}
</style>
