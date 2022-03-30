import HomeIcon from "./home.svg";
import AddTaskIcon from "./add-task.svg";
import DateCategoryIcon from "./calendar.svg";
import CircleIcon from "./circle.svg";
import TaskEditIcon from "./task-edit.svg";

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
        renderImageFiles(".project-category-icon", CircleIcon);
        renderImageFiles(".task-icon",CircleIcon);
        renderImageFiles(".task-edit-icon",TaskEditIcon);
    }
}