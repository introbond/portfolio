import ImageQuiz from "../assets/project-quiz.png"
import ImageExchange from "../assets/project-exchange.png"
import ImageCalculator from "../assets/project-calculator.png"
import ImageContries from "../assets/project-contries-search.png"
import ImageSlideShow from "../assets/project-cir.png"
import ImageTodolist from "../assets/project-todolist.png"

class project {
    constructor(name, image, description, url, source, language, tools, note) {
        this.name = name;
        this.image = image;
        this.description = description;
        this.url = url;
        this.source = source;
        this.language = language;
        this.tools = tools;
        this.note = note; 
    }
}

export const ProjectList = [
    new project(
        "Quiz", 
        ImageQuiz, 
        "Simple quiz web application", 
        "https://introbond.github.io/micro-app-quiz/", 
        "https://github.com/introbond/micro-app-quiz/tree/main",
        "JavaScript",
        "ReactJS",
        `Learn about React hooks (state, probs & context) with the simple structure.`
        ),
    new project(
        "Currency Exchange", 
        ImageExchange, 
        "Simple currency converter web application", 
        "https://introbond.github.io/micro-app-api-currency-exchange/", 
        "https://github.com/introbond/micro-app-api-currency-exchange/tree/main",
        "JavaScript",
        "ReactJS",
        `Learn about how to fetching data from public API.`
        ),
    new project(
        "Calculator", 
        ImageCalculator, 
        "Simple calculator web application", 
        "https://introbond.github.io/micro-app-simple-calculator/",
        "https://github.com/introbond/micro-app-api-currency-exchange/tree/main",
        "JavaScript",
        "ReactJS",
        `Just a simple logic built with useState and JavaScript 'eval' trick.`
        ),
    new project(
        "Countries Search & Filter", 
        ImageContries, 
        "Search & filter countries data by name or capital name", 
        "https://introbond.github.io/micro-app-contries-search-filter/",
        "https://github.com/introbond/micro-app-contries-search-filter/tree/main",
        "JavaScript",
        "ReactJS",
        `Fetch data from restcountries API v2 then loop with simple JavaScript array method.`
        ),
    new project(
        "Cirtifications Slideshow", 
        ImageSlideShow, 
        "Simple image slide show web application", 
        "https://introbond.github.io/micro-app-cir-slide/",
        "https://github.com/introbond/micro-app-cir-slide/tree/main",
        "JavaScript",
        "ReactJS",
        `Just another React hooks practice.`
        ),
    new project(
        "To-Do List", 
        ImageTodolist, 
        "Simple to-do list web application", 
        "https://introbond.github.io/micro-app-todolist/",
        "https://github.com/introbond/micro-app-todolist/tree/main",
        "JavaScript",
        "ReactJS",
        `Learn about how to CRUD with React.`
        ),
]