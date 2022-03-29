import HomeIcon from "./home.svg";
import AddTaskIcon from "./add-task.svg";
import CalendarIcon from "./calendar.svg";

export class ComponentService {
    constructor() {
        this.content = document.getElementById("content");
    }

    renderImages() {
        this.content.querySelector(".home-icon").src = HomeIcon;
        this.content.querySelector(".add-task-icon").src = AddTaskIcon;
        // this.content.querySelector(".calendar-icon").src = CalendarIcon;
    }
}