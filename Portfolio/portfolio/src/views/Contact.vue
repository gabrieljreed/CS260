<template>
  <div class="contact">
    <h1><i>Say hi!</i></h1>

    <div class="cards" :class="$mq">
        <div class="card">
            <!-- <a href="https://github.com/gabrieljreed/"> <img alt="GitHub logo" src="../assets/github.png"> </a> -->
            <p style="text-align: center;"> <a href="https://github.com/gabrieljreed/">GITHUB</a> </p>
        </div>
        <div class="card">
            <!-- <a href="https://www.instagram.com/gabe.comics/"> <img alt="Instagram logo" src="../assets/instagram.png"> </a> -->
            <p style="text-align: center;"> <a href="https://www.instagram.com/gabe.comics/">INSTAGRAM</a> </p>
        </div>
        <div class="card">
            <a href = "https://drive.google.com/file/d/1BRxEtO6xNlvBMcC0uheEt8E4VdgLmtvB/view?usp=sharing">MY RESUME</a>
        </div>
        <div class="card">
            <a href = "mailto: gabrieljreed@gmail.com">EMAIL ME!</a>
        </div>
    </div>


  </div>
</template>

<style>
.cards.desktop {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
}

.cards.mobile {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}

.card {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 10px;
    border-style: solid;
    border-color: #D8C3A5;
    border-radius: 5px;
    width: 300px;
    height: 85px;
    font-family: 'Cabin', sans-serif;

    transition: transform .2s; /* Animation */
}

.card img {
    width: 75px;
    height: 75px;
    border-radius: 0px;
}

.card:hover {
    transform: scale(1.1);
}

a {
    text-decoration: none;
    color: #D8C3A5;
    font-weight: bold;
}

a:hover {
    color: #E85A4F;
}
</style>
