export class ImageView {
  constructor() {
    this._app = document.getElementById("app");
    this._form = document.createElement("form");
    this._imageInput = document.createElement("input");
    this._submitButton = document.createElement("button");

    this._imageInput.type = "file";
    this._imageInput.accept = "image/*";
    this._submitButton.type = "submit";
    this._submitButton.textContent = "Convert";

    this._form.append(this._imageInput, this._submitButton);
    this._app.append(this._form);
  }

  bindImageUpload = (imageUploadHandler) => {
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
      imageUploadHandler({
        image: this._imageInput.files[0]
      })
    })
  }
}
