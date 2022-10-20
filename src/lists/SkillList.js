class skill {
    constructor(name, image, url, topic) {
        this.name = name;
        this.image = image;
        this.url = url;
        this.topic = topic;
    }
}
// All topic = language, backend, frontend, database, os, tools, automation
export const SkillList = [
    // ========== Programming Language ==========
    new skill(
        "JavaScript", 
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg", 
        "https://developer.mozilla.org/en-US/docs/Web/JavaScript", 
        "language", 
        ),
    new skill(
        "TypeScript", 
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg", 
        "https://www.typescriptlang.org/", 
        "language", 
        ),
    // ========== Backend ==========
    new skill(
        "NodeJS", 
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg", 
        "https://nodejs.org", 
        "backend", 
        ),
    new skill(
        "ExpressJS", 
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg", 
        "https://expressjs.com", 
        "backend", 
        ),
    new skill(
        "Postman", 
        "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", 
        "https://postman.com", 
        "backend", 
        ),
    // ========== Frontend ==========
    new skill(
        "ReactJS", 
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg", 
        "https://reactjs.org/", 
        "frontend", 
        ),
    new skill(
        "HTML", 
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg", 
        "https://www.w3.org/html/", 
        "frontend", 
        ),
    new skill(
        "CSS", 
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg", 
        "https://www.w3schools.com/css/", 
        "frontend", 
        ),
    new skill(
        "Bootstrap", 
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg", 
        "https://getbootstrap.com", 
        "frontend", 
        ),
    // ========== Databases ==========
    new skill(
        "Firebase", 
        "https://www.vectorlogo.zone/logos/firebase/firebase-ar21.svg", 
        "https://firebase.google.com/", 
        "database", 
        ),
    new skill(
        "MongoDB", 
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg", 
        "https://www.mongodb.com/", 
        "database", 
        ),
    new skill(
        "Redis", 
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg", 
        "https://redis.io", 
        "database", 
        ),
    new skill(
        "MySQL", 
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg", 
        "https://www.mysql.com/", 
        "database", 
        ),
    // ========== OS ==========
    new skill(
        "Ubuntu", 
        "https://www.vectorlogo.zone/logos/ubuntu/ubuntu-icon.svg", 
        "https://ubuntu.com/", 
        "os", 
        ),
    new skill(
        "RaspberryPiOS", 
        " https://www.vectorlogo.zone/logos/raspberrypi/raspberrypi-ar21.svg", 
        "https://www.raspberrypi.com/software/", 
        "os", 
        ),
    // ========== DevOp & Other Tools ==========
    new skill(
        "Git", 
        "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg", 
        "https://git-scm.com/", 
        "tools", 
        ),
    new skill(
        "Docker", 
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg", 
        "https://www.docker.com/", 
        "tools", 
        ),
    new skill(
        "VMware", 
        "https://upload.wikimedia.org/wikipedia/commons/9/9a/Vmware.svg", 
        "https://www.vmware.com/", 
        "tools", 
        ),
    new skill(
        "Nginx", 
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg", 
        "https://www.nginx.com", 
        "tools", 
        ),
    new skill(
        "Heroku", 
        "https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg", 
        "https://heroku.com", 
        "tools", 
        ),
    new skill(
        "GoogleCloud", 
        "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg", 
        "https://cloud.google.com", 
        "tools", 
        ),
    // ========== Automation Stuff ==========
    new skill(
        "Rockwell", 
        "https://www.rockwellautomation.com/content/dam/rockwell-automation/sites/images/logos/2019_Logo_rgb_RA_Bug-LeftText_color.svg", 
        "https://www.rockwellautomation.com/en-us/tools/software-subscriptions-updated.html", 
        "automation", 
        ),
    new skill(
        "Arduino", 
        "https://www.vectorlogo.zone/logos/arduino/arduino-icon.svg", 
        "https://www.arduino.cc/", 
        "automation", 
        ),
    ]