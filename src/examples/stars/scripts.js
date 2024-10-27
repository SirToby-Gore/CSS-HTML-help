
let nightSkies = document.getElementsByClassName("night-sky");

/**
 * ## `random_int`
 * This is part of the random.js part of JS-mods made by Toby Gore
 * 
 * Returns a random integer between `min` and `max`, inclusive
 * ### Args
 * * `min`
 *      - **int**
 *      - The minimum value
 * * `max`
 *      - **int**
 *      - The maximum value
 */
function random_int(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * ## `random_float`
 * This is part of the random.js part of JS-mods made by Toby Gore
 * 
 * Returns a random float between `min` and `max`, inclusive
 * ### Args
 * * `min`
 *      - **float**
 *      - The minimum value
 * * `max`
 *      - **float**
 *      - The maximum value
 */
function random_float(min, max) {
    return Math.random() * (max - min) + min;
}


function makeAStar(speed = 1) {
    let newStar = document.createElement("div");
    
    newStar.classList.add("shooting-star");

    newStar.style.setProperty("--x", random_int(0, 70) + "%");
    newStar.style.setProperty("--y", random_int(0, 70) + "%");

    const moveAmount = random_int(7, 50) * speed;
    newStar.style.setProperty("--travel-distance-x", moveAmount + "vh")
    newStar.style.setProperty("--travel-distance-y", moveAmount + "vh")
    
    newStar.style.setProperty("--delay", random_float(0, 3) + "s");

    return newStar;
}


for (i in nightSkies) {

    if (i === "item") break

    let nightSky = nightSkies[i];

    let numberOfStars =  Number.parseInt(nightSky.style.getPropertyValue("--number-of-stars"));

    for (let i = 0; i < numberOfStars; i++) {
        nightSky.appendChild(
            makeAStar(
                random_float(0.8, 3)
            )
        );
    }   
}

