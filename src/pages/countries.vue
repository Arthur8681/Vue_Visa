<template>
     <header>
        <a class="underline-animation" href="">Countries</a>
        <a class="underline-animation" href="/visaSelection">Visa Type</a>
        <a class="underline-animation" href="/profile">Profile</a>
    </header>
    <div class="Center-button">
        <button class="Register-button" onclick="location.href='/usa'" type="button">
            United States
        </button>
    </div>
    <div class="Center-button2">
        <button class="Register-button" onclick="location.href='/uk'" type="button">
            United Kingdom
        </button>
    </div>
    <div class="Center-button3">
        <button class="Register-button" onclick="location.href='/canada'" type="button">
            Canada
        </button>
    </div>
    <div class="Center-button4">
        <button class="Register-button" onclick="location.href='/australia'" type="button">
            Australia
        </button>
    </div>
    <div class="Center-button5">
        <button class="Register-button" onclick="location.href='/nz'" type="button">
            New Zealand
        </button>
    </div>
    <div class="Center-button6">
        <button class="Register-button" onclick="location.href='/ireland'" type="button">
            Ireland
        </button>
    </div>
    <div class="Center-button7">
        <button class="Register-button" onclick="location.href='/japan'" type="button">
            Japan
        </button>
    </div>
    <div class="Center-button8">
        <button class="Register-button" onclick="location.href='/taiwan'" type="button">
            Taiwan
        </button>
    </div>
    <div class="Center-button9">
        <button class="Register-button" onclick="location.href='/singapore'" type="button">
            Singapore
        </button>
    </div>
    <a class="return" href="/">
        Back
    </a>

</template>



<style scoped>

body {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}


header {
    position: fixed;
    top: 0;
    left: 0;
    width: calc(100% - 20px);
    background-color: #1E1E1E;
    display: flex;
    align-items: center; 
    justify-content: center;
    gap: 40px;
    font-size: larger;
    padding: 10px 10px;
    z-index: 100;
}


header a {
    color: white;
    font-family: "Open Sans", sans-serif;
    font-weight: 700;
}


.underline-animation {
    position: relative;
    text-decoration: none;
    padding-bottom: 4px;
    margin: 20px;
    transition: color 0.3s ease-in-out;


}

.underline-animation::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: white;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out;

}

.underline-animation:hover {
    color: white;
}

.underline-animation:hover::after {
    visibility: visible;
    transform: scaleX(1);
}

.Register-button {
    position: relative;
    height: 65px;
    width: 269px;
    background-color: #064F34;
    color: white;
    border: none;
    border-radius: 20px;
    font-size: 170%;
    font-family: "Inter", sans-serif;
    font-weight: 900;
    transition: 0.5s;

}


.Register-button:hover {
    background-color: #1E1E1E;
}

.Center-button {
    margin: 0;
    position: absolute;
    top: 20%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

.Center-button2 {
    margin: 0;
    position: absolute;
    top: 29%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

.Center-button3 {
    margin: 0;
    position: absolute;
    top: 38%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

.Center-button4 {
    margin: 0;
    position: absolute;
    top: 47%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

.Center-button5 {
    margin: 0;
    position: absolute;
    top: 56%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

.Center-button6 {
    margin: 0;
    position: absolute;
    top: 65%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

.Center-button7 {
    margin: 0;
    position: absolute;
    top: 74%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

.Center-button8 {
    margin: 0;
    position: absolute;
    top: 83%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}


.Center-button9 {
    margin: 0;
    position: absolute;
    top: 92%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

.return {
    position: relative;
    top: 100px;
    left: 850px;
    color: #1E1E1E;
    font-family: "Open Sans", sans-serif;
    font-weight: bold;
    font-size: xx-large;
    text-decoration: none;
    padding-bottom: 4px;
    margin: 20px;
    transition: color 0.3s ease-in-out;
}

.return::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #1E1E1E;
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.3s ease-in-out;

}

.return:hover {
    color: #1E1E1E;
}

.return:hover::after {
    visibility: visible;
    transform: scaleX(1);
}



</style>