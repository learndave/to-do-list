import HomeIcon from "./assets/home.svg";
import AddIcon from "./assets/add.svg";
import DateCategoryIcon from "./assets/calendar.svg";
import CircleIcon from "./assets/circle.svg";

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
        renderImageFiles(".date-category-icon", DateCategoryIcon);
        renderImageFiles(".project-category-icon", CircleIcon);
        renderImageFiles(".add-project-icon",AddIcon);
        renderImageFiles(".task-icon",CircleIcon);
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

    initializeAddProject() {

        const showAddProjectForm = () => {
            const addProject = document.querySelector(".add-project");
            const icon = addProject.querySelector(".add-project-icon")
            const label = addProject.querySelector(".add-project-label");
            const input = addProject.querySelector(".add-project-input");
            const button = addProject.querySelector(".add-project-button");
            icon.style.display = "none";
            label.style.display = "none";
            input.style.display = "block";
            button.style.display = "block";
            addProject.classList.add("showing-form");
        }

        document.querySelector(".add-project").addEventListener("click", () => showAddProjectForm());
    }
}