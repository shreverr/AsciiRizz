import { ImageController } from "./controller/ImageController.js";
import ImageModel from "./model/ImageModel.js";
import { ImageView } from "./view/ImageView.js";

const main = () => {
  const app = new ImageController(new ImageView(), new ImageModel());
}

main()
