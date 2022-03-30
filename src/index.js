import "./assets/style.css";
import { ComponentService } from "./component.service.js";

const componentService = new ComponentService();

const run = (componentService) => {
    componentService.renderImages();
    componentService.initializeCategories();
}

run(componentService);