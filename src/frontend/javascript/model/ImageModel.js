export default class ImageModel {
  constructor(imageURL) {
    this._image = new Image(imageURL);
  }

  get image() {
    return this._image;
  }

  set image(imageURL) {
    this._image.src = imageURL;
  }
}
