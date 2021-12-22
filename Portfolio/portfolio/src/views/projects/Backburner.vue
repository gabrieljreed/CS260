<template>
<div class="ProjectPage">
    <h1>Scripting with Backburner: IPA pronunciation</h1>
    <h2>BYU Media Services</h2>

    <p>
        &emsp;One of the projects I helped with at BYU Media Services was IPA pronunciation for French and German classes. We were to create renders of the human head and mouth making every possible sound in the target languages. The final shot would include a front on view of the mouth and a side view with a cutaway to a "mouth bag," showing how the vocal muscles would flex to make the given sound.
    </p>

    <div class="Image">
        <img src="../../assets/Pronounce/pronounce.gif" />
    </div>

    <p>
        &emsp;While animators created their animation in a single file, each would need 3 different renders, (front view, side view, and mouth bag view,) which would later be composited in After Effects. So each file needed to be configured in 3 different ways before being sent to Autodesk Backburner, a software that managed our render farm.
    </p>

    <div class="Image">
        <img src="../../assets/Pronounce/maya.png" />
    </div>

    <p>
        &emsp;There were well over 200 individual Maya files, so manually setting up each one with the proper settings would have taken the team well over a week of working. Additionally, the render settings were very precise, and it would have been easy to make errors requiring re-rendering later.
    </p>

    <p>
        &emsp;To fix this, I wrote a python script to set the correct render settings (showing and hiding different meshes, selecting cameras, tweaking render settings, etc.) It then generated a temp file for Backburner, saved the scenes properly, and started the Backburner jobs. It also automatically organized the output renders into a neat file system so compositers could easily bring the files into After Effects later.
    </p>

    <p>
        &emsp;Once the script worked on individual files, I extended it to automatically search for other Maya files in the same or sub-directories and do the same process to them. When the script was finished, it ran over the course of an afternoon and through the night sending everything to the render farm with no complications or problems. What would have taken the entire team over a week to do was reduced to one day of work for me.
    </p>

    <p>
        &emsp;Link: <a href="https://github.com/gabrieljreed/BYUMediaServices/blob/main/IPABackburner_German_recursive.py ">See the code on GitHub</a>
    </p>

</div>
</template>

<style>
.ProjectPage p {
    text-align: left;
    padding-left: 100px;
    padding-right: 100px;
    font-weight: normal;
    font-family: 'Cabin', sans-serif;
    line-height: 1.5;
}
</style>
