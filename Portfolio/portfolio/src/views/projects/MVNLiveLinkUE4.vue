<template>
<div class="LiveLink">

    <h1>MVN Live Link to Unreal Engine: Realtime motion capture in UE4</h1>
    <h2>BYU Media Services</h2>

    <p>
        &emsp;At BYU Media Services, there are many clients who want animation produced quickly and cheaply. Anybody who has done any kind of animation knows that the only real way to do this is through motion capture. While we were able to quickly get animations with an Xsens mocap suit, we still faced the long process of rendering in Maya. We hoped to pair the speed of mocap with that of rendering in Unreal Engine, and luckily UE4 is especially equipped to handle live link mocap, totally eliminating the need to even pass through Maya or MotionBuilder.
    </p>

    <p>
        &emsp;Unfortunately, there is little documentation on this specific live link process, so I'll detail the process I developed that we now use here.
    </p>

    <br />

    <p>
        &emsp;Inside MVN Animate, ensure that the Network streaming is properly configured.
    </p>

    <div class="Image">
        <img src="../../assets/MVNLiveLink/1_MVNStream.png" />
    </div>

    <p>
        &emsp;Install and enable the LiveLink plugin and the MVNXsensLiveLink plugin.
    </p>

    <p>
        &emsp;Import your character making sure to check the "Force front X Axis" box in the import settings. Create a T-Pose animation of the character with a single keyframe on frame 0.
    </p>

    <div class="Image">
        <img src="../../assets/MVNLiveLink/2_TposeAsset.png" />
    </div>

    <p>
        &emsp;Right click on the character's rig and choose "Xsens > Create Remap Asset". Select the T-Pose animation you created earlier. Remap the Live Link bones to the bones of your character. Unfortunately, there was no documentation I could find online of what each bone was, so this is the best configuration we came up with. Our character, HAL, was rigged with the standard Maya IK skeleton.
    </p>

    <div class="ImagesTall">
        <img src="../../assets/MVNLiveLink/2.5_Remap1.png" />
        <img src="../../assets/MVNLiveLink/2.6_Remap2.png" />
    </div>

    <p>
        &emsp;Create an Animation blueprint with no parent class and a Target Skeleton of your character's skeleton. Inside the graph editor, put a single LiveLinkPose node feeding into the Output Pose node. The subject name should be your actor from MVN and within the LiveLinkPose node, make sure to select the remap asset you created in the last step under "Retarget Asset".
    </p>

    <div class="Image">
        <img src="../../assets/MVNLiveLink/3_AnimBP.png" />
    </div>

    <p>
        &emsp;We used this to get full-body mocap, including fingers.
    </p>

    <div class="Images">
        <img src="../../assets/MVNLiveLink/MVNwalk.gif" />
        <img src="../../assets/MVNLiveLink/robotWalk.gif" />
        <img src="../../assets/MVNLiveLink/robotHands.gif" />
    </div>

    <br />

    <p>
        &emsp;This process allowed us to record our motion capture directly into Unreal Engine, where it could then be placed into the scene and rendered in realtime. Animations could also be corrected directly within UE4 or exported to another software like Maya.
    </p>

    <p>
        &emsp;Link: <a href="https://www.youtube.com/watch?v=v7dmg7jn1EM&list=PLZKvR1Gixb-6lK00B_tzV-EBpP4-SYPsZ&index=1">Video walkthrough of the entire process</a>
    </p>


</div>
</template>

<style>
.LiveLink p {
    text-align: left;
    padding-left: 100px;
    padding-right: 100px;
    font-weight: normal;
    font-family: 'Cabin', sans-serif;
    line-height: 1.5;
    color: #2C3E52;
}

.Image, .Images, .ImagesTall {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

.Image img {
    border-radius: 0px;
    object-fit: contain;
    height: auto;
    width: 50%;
    object-position: 50%, 50%;
}

.Images img {
    border-radius: 0px;
    object-fit: contain;
    height: 200px;
    width: auto;
    object-position: 50%, 50%;
}

.ImagesTall img {
    border-radius: 0px;
    object-fit: contain;
    height: 400px;
    width: auto;
    object-position: 50%, 50%;
}
</style>
