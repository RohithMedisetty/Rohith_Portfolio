import airline from "../assets/airlineproject.png";
import portfolio from "../assets/portfolio.png";
import todo from "../assets/todo.png";
import wikisearch from "../assets/wikisearch.png";

const ProjectCardData = [ 
    {
        imgsrc: airline,
        title: "Airline Reservation System",
        text: "The purpose of our website is to create a convenient and easy-to-use system for buying airline tickets",
        view: "",
        source: "https://github.com/RohithMedisetty/Airlineproject",
    },
    {
        imgsrc: portfolio,
        title: "Portolio page",
        text:"Portolio page using html,css,js,react containing four pages Home, Project, About and Contact. checkout code by clicking source button",
        view: "https://rohithmedisetty.netlify.app/",
        source: "https://github.com/RohithMedisetty/Rohith_Portfolio.git",
    },  
     {
        imgsrc: todo,
        title: "Todo Application",
        text:"A Simple ToDo Application built using HTML, CSS and JavaScript, that implements basic CRUD Functionality where one can create update and delete tasks",
        view: "",
        source: "https://github.com/RohithMedisetty/todocomplete",
    }, 
    {
        imgsrc: wikisearch,
        title: "wikisearch Application",
        text:"A Simple clone of wikipedia search Application built using HTML, CSS, JavaScript, and Fetch API that performs any search and provide result",
        view: "",
        source: "https://github.com/RohithMedisetty/wikisearch",
    }, 
    
];

export default ProjectCardData;