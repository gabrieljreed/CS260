<template>
  <div class="home">
      <div class="wrapper" :class="$mq">
          <img class="headshot" alt="Gabe Reed" src="../assets/headshot.png">
          <div class="wrapperText" :class="$mq">
              <h1>Gabriel Reed</h1>
              <h2>Technical Artist & Programmer</h2>

              <p>
                  &emsp;I'm a junior studying Computer Science with an emphasis in Animation at Brigham Young University. I'm mainly interested in pipeline and workflow, especially how animation processes can be sped up through scripting, motion capture, and realtime rendering. I also enjoy modeling and procedural texturing as well as creating effects in UE4 Niagara.
              </p>
          </div>
      </div>

  </div>
</template>

<style>
img.headshot {
    border-radius: 500px;
    border: 8px solid #D8C3A5;
    width: 60%;
    height: auto;
    max-width: 400px;
}

.wrapper.mobile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}

.wrapper.desktop {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}



.wrapperText.desktop {
    padding-left: 20px;
    padding-right: 50px;
    word-break: break-all;
}

.wrapperText.mobile {
    padding: 10px;
    word-break: break-all;
}

.wrapperText p {
    color: #2C3D50;
    font-family: 'Cabin', sans-serif;
    font-weight: normal;
    max-width: 500px;
    word-break: normal;
    text-align: justify;
    line-height: 1.5;
}


p {
    color: #C8B59A;
    font-weight: bold;
}
</style>
