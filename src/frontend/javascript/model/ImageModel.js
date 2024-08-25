export default class ImageModel {
  constructor() {
    this._image = new Image();
    this._canvas = document.createElement("canvas");
    this._context = this._canvas.getContext("2d", {
      willReadFrequently: true,
    });
  }

  get image() {
    return this._image;
  }

  set image(imageURL) {
    this._image.src = imageURL;

    this._image.onload = () => {
      this._drawImage();
      this._imagePixelData = this._context.getImageData(
        0,
        0,
        this._canvas.width,
        this._canvas.height
      ).data
    };
  }

  _drawImage() {
    this._canvas.width = this._image.width;
    this._canvas.height = this._image.height;

    this._context.drawImage(this._image, 0, 0);
  }

  get imagePixelData() {
    return this._imagePixelData;
  }
}
