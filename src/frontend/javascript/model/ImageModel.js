export default class ImageModel {
  constructor(imageBuffer) {
    this._imageBuffer = imageBuffer;
  }

  get imageBuffer() {
    return this._imageBuffer;
  }

  set imageBuffer(imageBuffer) {
    this._imageBuffer = imageBuffer;
  }
}
