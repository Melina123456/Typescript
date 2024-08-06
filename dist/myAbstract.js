"use strict";
class TakePhoto {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getReelTime() {
        return this.burst * 1.5; // Reel time is 1.5 times longer than burst time
    }
}
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter, burst);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getPicture() {
        console.log(`Taking a picture with Instagram settings: ${this.cameraMode}, ${this.filter}, ${this.burst} burst`);
    }
}
const takephoto = new Instagram("Wide", "Black & White", 3);
takephoto.getReelTime();
