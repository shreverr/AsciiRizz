export class ImageController {
  constructor(imageView, imageModel) {
    this._imageModel = imageModel;
    this._imageView = imageView;

    this._imageView.bindImageUpload(this.handleImageUpload);
  }

  handleImageUpload = ({ image }) => {
    console.info("Image upload handler called");
    if (!image) {
      alert("Please select an image to upload");
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = (event) => {
      // ArrayBuffer from the image file
      const imageBuffer = event.target.result;
      
      this._imageModel.imageBuffer = imageBuffer;
    };
  }
}
