import HomeIcon from "./home.svg";
import AddTaskIcon from "./add-task.svg";
import DateCategoryIcon from "./calendar.svg";
import ProjectCategoryIcon from "./circle.svg";

export class ComponentService {
    constructor() {
        this.content = document.getElementById("content");
    }

    renderImages() {
        const renderImageFiles = (parentSelector,icon) => {
            const parent = Array.from(this.content.querySelectorAll(parentSelector));

            console.log(parent);
            for (let child of parent) {
                child.src = icon;
            }
        }

        renderImageFiles(".home-icon", HomeIcon);
        renderImageFiles(".add-task-icon", AddTaskIcon);
        renderImageFiles(".date-category-icon", DateCategoryIcon);
        renderImageFiles(".project-category-icon", ProjectCategoryIcon);
    }
}