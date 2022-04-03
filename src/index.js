import "./assets/style.css";
import "./assets/add.css";
import { ComponentService } from "./component.service.js";

const componentService = new ComponentService();

const run = (componentService) => {
    componentService.renderImages();
    componentService.initializeCategories();
    componentService.initializeAddProject();
    componentService.initializeAddTask();
}

run(componentService);