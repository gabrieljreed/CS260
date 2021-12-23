<template>
  <div class="contact">
    <h1><i>Say hi!</i></h1>

    <div class="cards" :class="$mq">
        <a href="https://github.com/gabrieljreed/">
        <div class="card">
            GITHUB
        </div></a>

        <a href="https://www.instagram.com/gabe.comics/">
        <div class="card">
            INSTAGRAM
        </div></a>

        <a href = "https://drive.google.com/file/d/1BRxEtO6xNlvBMcC0uheEt8E4VdgLmtvB/view?usp=sharing">
        <div class="card">
            MY RESUME
        </div></a>

        <a href = "mailto: gabrieljreed@gmail.com">
        <div class="card">
            EMAIL ME!
        </div></a>
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
    color: #C8B59A;
    font-weight: bold;
}

a:hover {
    color: #E85A4F;
}
</style>
