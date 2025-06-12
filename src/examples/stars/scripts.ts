class RandomCoordinates {
    x: string;
    y: string;

    constructor() {
        this.x = Math.random() * 100 + '%';
        this.y = Math.random() * 100 + '%';
    }
}


class ShootingStar {
    star: HTMLDivElement;
    start: RandomCoordinates;
    
    constructor() {
        this.star = document.createElement('div');
        this.star.classList.add('star');

        this.start = new RandomCoordinates();

        this.setStyles();
    }

    setStyles() {
        this.setNewStyleVar('--start-x', this.start.x);
        this.setNewStyleVar('--start-y', this.start.y);

        this.setNewStyleVar('--duration', Math.random() * 6 + 5 + 's'); 

        this.setNewStyleVar('--delay', Math.random() + 's');

        this.setNewStyleVar('--top', Math.random() * 100 - 30 + '%');
        this.setNewStyleVar('--left', Math.random() * 100 - 30+ '%');

        this.setNewStyleVar('--size', (Math.random() + 0.5).toString());

        this.setNewStyleVar('--angle', Math.random() * 360 + 'deg');
    }

    setNewStyleVar(styleName: string, styleValue: string) {
        this.star.style.setProperty(styleName, styleValue);
    }

    getStar() {
        return this.star;
    }
}

new ShootingStar();

class NightSky {
    nightSky: HTMLDivElement;
    numberOfStars: number;

    constructor() {
        const nightSky = document.getElementById('night-sky');

        if (!nightSky) {
            throw Error("No night sky element found")
        }

        this.nightSky = nightSky as HTMLDivElement;

        this.numberOfStars = Number.parseInt(this.nightSky.style.getPropertyValue('--number-of-stars') ?? '10');
        this.addStars(this.numberOfStars);
    }

    addStars(numberOfStars: number) {
        for (let i = 0; i < numberOfStars; i++) {
            this.nightSky.appendChild(new ShootingStar().getStar());
        }
    }
}

new NightSky();
