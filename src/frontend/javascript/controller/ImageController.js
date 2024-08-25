export class ImageController {
  constructor(imageView, imageModel) {
    this._imageModel = imageModel;
    this._imageView = imageView;

    this._imageView.bindImageUpload(this.handleImageUpload);
  }

  handleImageUpload = ({ image }) => {
    if (!image) {
      alert("Please select an image to upload");
      return;
    }

    this._imageModel.image = URL.createObjectURL(image);
    console.info("Image uploaded successfully");
  };
}
