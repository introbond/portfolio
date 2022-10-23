import plc from "../assets/skill-plc.svg";

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
    new skill(
        "PLC", 
        plc, 
        "https://en.wikipedia.org/wiki/Programmable_logic_controller#Programming", 
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
        "SocketIO", 
        "https://www.vectorlogo.zone/logos/socketio/socketio-icon.svg", 
        "https://socket.io/", 
        "backend", 
        ),
    new skill(
        "Postman", 
        "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg", 
        "https://postman.com", 
        "backend", 
        ),
    new skill(
        "json", 
        "https://www.vectorlogo.zone/logos/json/json-icon.svg", 
        "https://www.json.org/json-en.html", 
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
    new skill(
        "SQLserver", 
        "https://static.cdnlogo.com/logos/m/62/microsoft-sql-server.svg", 
        "https://www.microsoft.com/en-us/sql-server/sql-server-downloads", 
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
        "https://www.vectorlogo.zone/logos/raspberrypi/raspberrypi-ar21.svg", 
        "https://www.raspberrypi.com/software/", 
        "os", 
        ),
    new skill(
        "Windows", 
        "https://www.vectorlogo.zone/logos/microsoft/microsoft-ar21.svg", 
        "https://www.microsoft.com/en-us/windows", 
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
        "GitHub", 
        "https://www.vectorlogo.zone/logos/github/github-icon.svg", 
        "https://github.com/", 
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
        "Apache", 
        "https://www.vectorlogo.zone/logos/apache/apache-icon.svg", 
        "https://www.apache.org/", 
        "tools", 
        ),
    new skill(
        "Xampp", 
        "https://icons.iconarchive.com/icons/papirus-team/papirus-apps/64/xampp-icon.png", 
        "https://www.apachefriends.org/", 
        "tools", 
        ),
    new skill(
        "Heroku", 
        "https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg", 
        "https://heroku.com", 
        "tools", 
        ),
    new skill(
        "Netlify", 
        "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg", 
        "https://www.netlify.com/", 
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
        "Arduino", 
        "https://www.vectorlogo.zone/logos/arduino/arduino-icon.svg", 
        "https://www.arduino.cc/", 
        "automation", 
        ),
    new skill(
        "Rockwell", 
        "https://www.rockwellautomation.com/content/dam/rockwell-automation/sites/images/logos/2019_Logo_rgb_RA_Bug-LeftText_color.svg", 
        "https://www.rockwellautomation.com/en-us/tools/software-subscriptions-updated.html", 
        "automation", 
        ),
    new skill(
        "Aveva", 
        "https://www.aveva.com/content/experience-fragments/aveva/en/site/header-2/master/_jcr_content/root/responsivegrid/globalheader/logo.coreimg.svg/1655394323761/header-logo.svg", 
        "https://www.aveva.com/en/solutions/operations/operations-control-hmi/", 
        "automation", 
        ),
    ]