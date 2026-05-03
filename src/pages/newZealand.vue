<template>
    <header>
        <a class="underline-animation" href="/countries">Countries</a>
        <a class="underline-animation" href="/visaSelection">Visa Type</a>
        <a class="underline-animation" href="/profile">Profile</a>
    </header>
    <div class="image-text">
        <img class="background-image" src="/images/nz.webp" alt="background image">
        <div class="bottom-left">New Zealand</div>
    </div>
    <div class="lower-background">
        <div class="line"></div>
        <p class="country-description">
            New Zealand entices billionaires with robust economic prospects, strong legal protections, and opulent lifestyles. As a dynamic Asia-Pacific economy,<br>
            it features hubs like Auckland (tech and finance), Christchurch (innovation and biotech), and Wellington (government and startups),<br>
            bolstered by solid IP laws aligned with international standards and access to regional markets.<br>
            Tax perks include a 4-year exemption on foreign-sourced income for new residents, plus tools like trusts and<br> 
            the new Revenue Account Method offering a 30% discount on foreign investment gains. 
        </p>
        <div class="Center-button">
            <button class="Register-button">
                Tourism Visa
            </button>
        </div>
        <div class="Center-button2">
            <button class="Register-button">
                Work Visa
            </button>
        </div>
        <div class="Center-button3">
            <button class="Register-button">
                Student Visa
            </button>
        </div>
        <div class="Center-button4">
            <button class="Register-button">
                Immigration Visa
            </button>
        </div>
    </div>    
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

.image-text {
    position: relative;
    text-align: center;
    color: white;
    font-family: "Inter", sans-serif;
    font-size: 64px;
    font-weight: 900;
}

.bottom-left {
    position: absolute;
    bottom: 30px;
    left: 80px;
}

.background-image {
    margin-top: 65px;

}

.lower-background {
    background-color: #1E1E1E;
    height: 505px;
    width: 100vw;
    position: relative;
    bottom: -10px;
    margin-top: -25px;
}


.line {
    position: relative;
    top: 70px;
    left: 80px;
    background-color: #A2A2A2;
    height: 2px;
    width: 1770px;
}



.country-description {
    position: relative;
    top: 100px;
    left: 80px;
    color: white;
    font-size: 24px;
    font-family: "Open Sans", sans-serif;
}




.Register-button {
    position: relative;
    height: 65px;
    width: 269px;
    background-color: #064F34;
    color: white;
    border: 2px solid transparent;
    border-radius: 20px;
    font-size: 32px;
    font-family: "Inter", sans-serif;
    transition: 0.5s;

}


.Register-button:hover {
    border-color: white;
}

.Center-button {
    margin: 0;
    position: absolute;
    top: 75%;
    left: 11%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}


.Center-button2 {
    margin: 0;
    position: absolute;
    top: 75%;
    left: 27%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}


.Center-button3 {
    margin: 0;
    position: absolute;
    top: 75%;
    left: 43%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}


.Center-button4 {
    margin: 0;
    position: absolute;
    top: 75%;
    left: 59%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}
</style>