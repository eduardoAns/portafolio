import { DiCss3, DiFirebase, DiJava, DiMysql, DiReact,  } from 'react-icons/di';

export const projectsValue = [
    {
        name: "Blog Eduardo",
        imageUrl:"blog-eduardo.png",
        projectUrl:"https://eduardoblog.vercel.app/",
        technologies:[DiReact, DiJava, DiMysql],
        modal:{
            name: "Blog Eduardo",
            content:"Blog personal donde puedes ver el desarrollo de mis proyectos, estudios, etc. Ademas puedes dejar comentarios y crear un usuario para hacer publicaciones. Al crear un usuario podras hacer publicaciones y tener un perfil.",
            projectUrl:"https://eduardoblog.vercel.app/",
            githubFrontUrl:"https://github.com/eduardoAns/Eduardo-blog",
            githubBackUrl:"https://github.com/eduardoAns/blogBack.git",
            listContent:[
                "Estado: En desarrollo",
                "Front-End: React, NextJs, Material UI, Context, Typescript, SSG", 
                "Back-End: Java, SpringBoot, JPA, Api-Rest, MySQL, JWT",
                "Despliegue: Railway, Vercel, RDS AWS",
                "Credenciales: usuario1carrasco@gmail.com:12345",
            ]
        }
    },
    {
        name:"Manage Landing page",
        imageUrl:"landing-intermediate.jpg",
        projectUrl:"https://manage-lading-page-alpha.vercel.app/",
        technologies:[DiReact, DiCss3],
        modal:{
            name: "Manage Landing page",
            content:" Landing Page creada para desafio intermedio de front-end mentor",
            projectUrl:"https://manage-lading-page-alpha.vercel.app/",
            githubFrontUrl:"https://github.com/eduardoAns/manage-lading-page.git",
            githubBackUrl:"",
            listContent:[
                "Estado: Finalizado V1.0",
                "Front-End: React, Css, Tailwind, Tsx", 
                "Despliegue: Vercel",
            ]
        }
    },
    {
        name: "Tienda online HappyPet",
        imageUrl:"happyPet.png",
        projectUrl:"https://happy-pet.vercel.app/",
        technologies:[DiReact, DiJava, DiMysql],
        modal:{
            name: "Tienda online HappyPet",
            content:"Tienda online de mascotas, donde puedes comprar productos para tu mascota, como comida, juguetes, accesorios, etc. Además, puedes crear una cuenta y registrar todas tus compras para revisarlas a futuro.",
            projectUrl:"https://happy-pet.vercel.app/",
            githubFrontUrl:"https://github.com/eduardoAns/tiendaHappyPet",
            githubBackUrl:"https://github.com/ruben0032/api-HappyPet",
            listContent:[
                "Estado: Finalizado V1.0, buscando donde servir la API",
                "Front-End: React,NextJs, Material UI, Axios, Context, Typescript, SSR, SSG",
                "Back-End: Java,SpringBoot, JPA, Api-Rest, MySQL, JWT, Maven, Lombok, Intellij",
                "Despliegue: Heroku, Vercel",
                "Credenciales: admin@prueba.com:123456",
                "Desarrollado junto a Rubén Quispe para proyecto final de curso"
            ]
        }
    },
    {
        name:"Aplicacion de tareas",
        imageUrl:"todoApp.png",
        projectUrl:"https://heuristic-lewin-c6752f.netlify.app/",
        technologies:[DiReact, DiFirebase],
        modal:{
            name: " Aplicacion de tareas",
            content:" Aplicacion de tareas, donde puedes crear una cuenta y crear tareas, editarlas, eliminarlas, etc.",
            projectUrl:"https://heuristic-lewin-c6752f.netlify.app/",
            githubFrontUrl:"https://github.com/eduardoAns/Journal-project",
            githubBackUrl:"",
            listContent:[
                "Estado: Finalizado V1.0",
                "Front-End: React, Css, Axios, Redux", 
                "Back-End: Firebase, Firestore, Authentication",
                "Despliegue: Netlify",
                "Credenciales:nando@gmail.com:123456"    
            ]
        }
    },
    {
        name:"Landing page dark theme",
        imageUrl:"landing.jpg",
        projectUrl:"https://lading-page-dark-theme.vercel.app/",
        technologies:[DiReact, DiCss3],
        modal:{
            name: " Landing page dark theme",
            content:" Landing Page creada para desafio junior de front-end mentor",
            projectUrl:"https://lading-page-dark-theme.vercel.app/",
            githubFrontUrl:"https://github.com/eduardoAns/lading-page-dark-theme.git",
            githubBackUrl:"",
            listContent:[
                "Estado: Finalizado V1.0",
                "Front-End: React, Css, Tailwind, Tsx", 
                "Despliegue: Vercel",
            ]
        }
    },
]

