import ImageQuiz from "../assets/project-quiz.png"
import ImageExchange from "../assets/project-exchange.png"
import ImageCalculator from "../assets/project-calculator.png"


class project {
    constructor(name, image, description, url, source) {
        this.name = name;
        this.image = image;
        this.description = description;
        this.url = url;
        this.source = source;
    }
}

export const ProjectList = [
    new project(
        "Quiz", 
        ImageQuiz, 
        "Simple quiz app built with ReactJS", 
        "https://introbond.github.io/micro-app-quiz/", 
        "https://github.com/introbond/micro-app-quiz/tree/main"),

    new project(
        "Currency Exchange", 
        ImageExchange, 
        "Simple currency convert app built with ReactJS", 
        "https://introbond.github.io/micro-app-api-currency-exchange/", 
        "https://github.com/introbond/micro-app-api-currency-exchange/tree/main"),

    new project(
        "Simple Calculator", 
        ImageCalculator, 
        "Simple calculator app built with ReactJS", 
        "https://introbond.github.io/micro-app-simple-calculator/",
        "https://github.com/introbond/micro-app-api-currency-exchange/tree/main"),
]