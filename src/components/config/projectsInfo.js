import rushHour from '../../assets/rushHour.png';
import olaDoc from '../../assets/olaDoc.jpg';
import resturant from '../../assets/resturant.png';
import clustering from '../../assets/clustering.png';
import multiThread from '../../assets/treasureHunter.png';
import brickBreaker from '../../assets/brickBreaker.png';
import bTree from '../../assets/bTree.png';
import uefaLeague from '../../assets/uefaLeague.png';
import academicPortal from '../../assets/flexPortal.png';
import hamiltonian from '../../assets/hamiltonian.png';
import retinal from '../../assets/retinal.png';
import housing from '../../assets/housing.jpeg';

import cppLogo from '../../assets/c-logo.png'
import pythonLogo from '../../assets/python-logo.png';
import sqlLogo from '../../assets/microsoft-sql-server-logo.png';
import javaLogo from '../../assets/java-logo-2.png';
import reactLogo from '../../assets/react-logo.png';
import dotNetLogo from '../../assets/dotnet-logo.png';
import htmlLogo from '../../assets/html5-logo.png';
import assemblyLogo from '../../assets/assembly-icon.png';
import langchainLogo from '../../assets/langchainLogo.png';
import jupyterLogo from '../../assets/jupyterLogo.png';

let projectsInfo = [
{
    "name":'Churn Prediction + RAG',
    "date":'September 2024 - October 2024',
    "description":'End to End machine learning project to detect customer churn based on set number of features. Project also includes Text2SQL and RAG based report generation from both SQL and Vector DB',
    "repoLink":'https://github.com/Mobeen0/ChurnPredictionPipeline',
    "tags":['Python','Machine Learning','RAG','Text2SQL','FastAPI','LLM'],
    "image":retinal,
    "main":'Python',
    "logo": langchainLogo
},
{
    "name":'Data Science Projects',
    "date":'January 2024 - Present',
    "description":'A collection of Data Science projects that showcase my joruney to becoming a Machine learning Engineer. From basic linear regression problems all the way to fine tuning large languange models can be found here.',
    "repoLink":'https://github.com/Mobeen0/Data_Science_Projects',
    "tags":['Python','Machine Learning','Deep Learning','LLM','Fine Tuning','Jupyter Notebook'],
    "image":jupyterLogo,
    "main":'Python',
    "logo": jupyterLogo
},
{
    "name": 'Glaucoma Detection',
    "date": "April 2024 - May 2024",
    "description": 'Worked in a group to train CNN models to detect the Optic Disc Cup ratio through Retinal Fundus Images. The models were used to segment optic disc region and optic cup region and remove any noise. Both models achieved over 96% accuracy on test data.',
    "repoLink": 'https://github.com/Huzaifah0/Optic-Disc-and-Cup-Segmentation-from-Retinal-Fundus-Images-',
    "tags":['Python','TensorFlow','Machine Learning','Deep Learning','OpenCV','CNN','U-NET','Data Augmentation'],
    "image": retinal,
    "main":'Python',
    "logo": pythonLogo
},
{
    "name":'MHH Housing',
    "date": "March 2024 - May 2024",
    "description": 'A full stack website built using MERN stack for a housing society Management system. The website allows for prospective homeowners and tenants to buy or rent a property in the MHH Housing Society. The management staff can send notifications to the society members. The society Members can also manage their monthly utilities.',
    "repoLink":'https://github.com/Mobeen0/hsms',
    "tags":['JavaScript','HTML','CSS','React JS','NOSQL','MONGODB','Website','Full-Stack','Express JS','Node JS'],
    "image":housing,
    "main": 'Javascript',
    "logo": reactLogo
},
{
    "name":"Comic Dex",
    "date":"November 2023 - January 2024",
    "description": 'A full stack application built using java. Oracle DB was used as database and JavaFX along with screenbuilder to create the frontend. The application allowed the publishers to add new comic books from their file system while the customers can purchase the comic books.',
    "repoLink":"https://github.com/Mobeen0/ComicDex",
    "tags":['Java', 'Oracle', 'SQL','Full-Stack','JavaFX'],
    "image":housing,
    "logo": javaLogo
},
{
    "name":'Flex Academic Portal',
    "date": "March 2023 - May 2023",
    "description": 'A full stack website built using ASP.NET framework. The website has different views for Students, Faculty and Acadmic officers. The students are only allowed to view their marks and gpa where as the faculty members can manage a students attendance and add marks.',
    "repoLink":'https://github.com/Mobeen0/Academic_Portal_Website',
    "tags":['C#','HTML','CSS','ASP.NET','SQL','Microsoft-SQL-Server','Website','Full-Stack'],
    "image":academicPortal,
    "main": 'ASP.Net',
    "logo":dotNetLogo
},
{
    "name":'Hamiltonian Circuit',
    "date": "March 2023 - April 2023",
    "description":'Given a set of edges of an undirected graph, this algorithm can find the cheapest hamiltonian circuit in the graph and output the path along with the minimum cost. I used the backtracking algorithm to achieve this result and the time factorial was O(n!).',
    "repoLink":'https://github.com/Mobeen0/Cheapest_Hamiltonian_Circuit',
    "tags":['C++','Algorithms','Graphs','Undirected','Nodes','minimum-cost','Efficient'],
    "image": hamiltonian,
    "main": `C++`,
    "logo":cppLogo
},
{
    "name":'UEFA Database Insights',
    "date": "Feburary 2023 - March 2023",
    "description":'Generating useful insights from UEFA Champions League data of 10+ years. Using SQL queries we were able to find important information such as greatest goal scoring duo and win percentage of teams in their home grounds.',
    "repoLink":'https://github.com/Mobeen0/UEFA_DataBase_Queries',
    "tags":['SQL','MicroSoft-SQL-Server','Database','Queries','CRUD','Data-Handling'],
    "image":uefaLeague,
    "main": 'SQL',
    "logo":sqlLogo
},
{
    "name":"Treasure Hunters",
    "date": "Feburary 2023 - March 2023",
    "description": 'A multiplayer console based game built using SFML (for graphics) and POSIX (for threads) libraries. Each player is a separate thread and is controlled independent of other players. The game is time limited and player with the highest score at the end is the winner.',
    "repoLink": 'https://github.com/Mobeen0/Multiplayer_ThreadBased_Game',
    "tags":['C++','SFML','Operating Systems','Threads','Processes','POSIX','Game','2D'],
    "image":multiThread,
    "main":'C++ (SFML)',
    "logo":cppLogo
},
{
    "name":'DataBase Management System',
    "date": "December 2022 - January 2023",
    "description":'Indexing large amount of csv data in a B Tree data structure and then calling CRUD operations on the data. The indexing also can be done on any field of the dataset (not only primary field) and duplicate cases are handled by creating a linked list inside the B Tree array.',
    "repoLink":'https://github.com/Mobeen0/BTree_Txt_Based_Notes',
    "tags":['C++','Data-Structures','Terminal-Based','Data-Indexing','Database','Algorithms','Nodes'],
    "image":bTree,
    "main":'C++',
    "logo":cppLogo
},
{
    "name":'Brick Breaker',
    "date": "December 2022 - January 2023",
    "description":'A legacy 2d game remade in assembly language. The purpose of the game is to control the trajectory of the ball to break finite bricks in each level. The brick healths also change as the player progresses up each level after breaking all the bricks in the previous levels.',
    "repoLink":'https://github.com/Mobeen0/BrickBreaker-MASM-',
    "tags":['Assembly','MASM','x86','asm','low-level-language','Game','2D','Terminal-based'],
    "image":brickBreaker,
    "main":'MASM (x86)',
    "logo":assemblyLogo
},
{
    "name": 'Image Clustering Algorithms',
    "date": "September 2022 - October 2022",
    "description": 'Using OpenCV library in C++ to detect lesion areas in medical images. I used K-mean (unsupervised learning) algorithm and Connected Component Clustering to seperate lesion areas from the non lesion areas in the Image and then compare both approaches side by side.',
    "repoLink": 'https://github.com/Mobeen0/Clustering-Algorithms',
    "tags":['C++','Data-Structures','Terminal-based','OpenCV','Images','machine-learning','Algorithms'],
    "image": clustering,
    "main":'C++',
    "logo":cppLogo
},
{
    "name":'Hospital Management System',
    "date": "March 2022 - April 2022",
    "description":'A console based management system for oladoc Hospital. The system allows login and sign up for doctors and patients. Patients can check the availability of doctors and book their appointments, likewise doctors can accept or decline appointments and set their availability.',
    "repoLink":'https://github.com/Mobeen0/Hospital_Management_System',
    "tags":['C++','OOP','Terminal-Based','File-Handling','Object-Files','Management-System'],
    "image":olaDoc,
    "main":'C++ (OOP)',
    "logo":cppLogo
},
{
    "name":'Rush Hour Game',
    "date": "December 2021 - January 2022",
    "description":'Rush Hour is a game where the player is tasked to pick passengers and drop them off to their requested destinations. The game calculates score based on the amount of passengers dropped and a time limit is determines when the game should end.',
    "repoLink":'https://github.com/Mobeen0/Rush_Hour_Game', // remember to change this to the correct link
    "tags":['C++','Glut','Terminal-Based','Programming Fundamentals','Game','2D','File-Handling'],
    "image":rushHour,
    "main":'C++ (GLUT)',
    "logo":cppLogo
},
{
    "name":'Restaurant Website',
    "date": "November 2021 - December 2021",
    "description":'A sample website made with only HTML and CSS. The website had an interactive menu for the user to order from and then proceed to the checkout page. Attention was given to key details and the end goal was to achieve a very user friendly experience.',
    "repoLink":'https://github.com/Mobeen0/Simple_Restaurant_Website',
    "tags":['HTML','CSS','Bootstrap','Website','UI/UX'],
    "image":resturant,
    "main":'HTML & CSS',
    "logo":htmlLogo
}
]

export default projectsInfo;