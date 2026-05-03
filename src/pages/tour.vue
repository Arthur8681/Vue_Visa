<template>
     <header>
        <a class="underline-animation" href="/countries">Countries</a>
        <a class="underline-animation" href="">Visa Type</a>
        <a class="underline-animation" href="/profile">Profile</a>
    </header>
    <h1>United States</h1>
    <p class="visy">
        Tourism Visa (B-2)<br>
        Requirements
    </p>
    <ul>
        <li> Printed copy of your appointment letter</li>
        <li>DS-160 confirmation page</li>
        <li> one photograph taken within the last six months</li>
        <li> current and all old passports</li>
        <li> original visa fee payment receipt</li>
    </ul>

    <div class="Center-button">
        <button class="Register-button" onclick="location.href=''" type="button">
            Apply
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
    top: 67%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}


.return {
    position: relative;
    top: -480px;
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


h1 {
    margin-top: 125px;
    font-size: 65px;
    font-family: "Inter", sans-serif;
    font-weight: 900;
    
}


.visy {
    margin-top: -30px;
    font-family: "Open Sans", sans-serif;
    font-size: xx-large;
    text-align: center;
}

ul li {
    padding: 5px 1px;
    font-family: "Open Sans", sans-serif;
    font-size: x-large;
}

</style>