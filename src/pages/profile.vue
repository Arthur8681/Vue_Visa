<template>
     <header>
        <a class="underline-animation" href="/countries">Countries</a>
        <a class="underline-animation" href="/visaSelection">Visa Type</a>
        <a class="underline-animation" href="">Profile</a>
    </header>
    <div class="responsive-form">
        <form action="/action_page.php">
            <label for="fname">First Name:</label>
            <input type="text" id="fname" name="fname" placeholder="Your first name">
            <label for="lname">Last Name:</label>
            <input type="text" id="lname" name="lname" placeholder="Your last name">
            <label for="Email">Email:</label>
            <input type="text" id="Email" name="Email" placeholder="youremail@gmail.com">
            <label for="Phone">Phone:</label>
            <input type="text" id="Phone" name="Phone" placeholder="+7932324903">
            <label for="country">Country:</label>
            <select id="country" name="country">
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
                <option value="Russia">Russia</option>
            </select>
            <input type="submit" value="Submit">
        </form>
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
    top: 80%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}


.return {
    position: relative;
    top: -440px;
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

.responsive-form {
    margin-top: 200px;
    max-width: 600px;
    width: 100%;
    border-radius: 4px;
    border: 2px solid #064F34;;
    background-color:  #f2f2f2;
    padding: 20px;
}

form {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

label {
  min-width: 48%;
  margin-bottom: 10px;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
}

input[type=text], select {
  min-width: 45%;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
}


input[type=submit] {
  width: 100%;
  background-color: #064F34;
  color: white;
  padding: 14px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  font-size: large;
}

@media screen and (max-width: 600px) {
  label,
  input[type=text],
  input[type=submit],
  select, textarea {
    flex: 100%;
    min-width: 100%;
  }
}


</style>