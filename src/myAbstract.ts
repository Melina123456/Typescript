abstract class TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}

  abstract getPicture(): void;

  getReelTime(): number {
    return this.burst * 1.5; // Reel time is 1.5 times longer than burst time
  }
}

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter, burst);
  }
  getPicture(): void {
    console.log(
      `Taking a picture with Instagram settings: ${this.cameraMode}, ${this.filter}, ${this.burst} burst`
    );
  }
}

const takephoto = new Instagram("Wide", "Black & White", 3);
takephoto.getReelTime();
