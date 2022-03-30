import HomeIcon from "./assets/home.svg";
import AddTaskIcon from "./assets/add-task.svg";
import DateCategoryIcon from "./assets/calendar.svg";
import CircleIcon from "./assets/circle.svg";
import TaskEditIcon from "./assets/task-edit.svg";

export class ComponentService {
    constructor() {
        this.content = document.getElementById("content");
    }

    renderImages() {
        const renderImageFiles = (parentSelector,icon) => {
            const parent = Array.from(this.content.querySelectorAll(parentSelector));

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

    initializeCategories() {
        this.categories = Array.from(document.querySelectorAll(".category"));

        const selectCategory = (category) => {
            unselectAllCategories(this.categories);
            category.classList.add("selected");
            // renderTasksInCategory(category.id); //PENDING CODE
        }

        const unselectAllCategories = (categories) => {
            for (let category of categories) {
                category.classList.remove("selected");
            }
        }

        const listenToClicks = (categories) => {
            for (let category of categories) {
                category.addEventListener('click', (e) => selectCategory(e.target));
            }
        }

        unselectAllCategories(this.categories);
        listenToClicks(this.categories);
        selectCategory(document.querySelector("#today.category"));
    }
}