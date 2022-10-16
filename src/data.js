import { DiFirebase, DiJava, DiMysql, DiReact,  } from 'react-icons/di';

export const projectsValue = [
    {
        name: "Blog Eduardo",
        imageUrl:"blog-eduardo.png",
        projectUrl:"https://eduardoblog.vercel.app/",
        technologies:[DiReact, DiJava, DiMysql],
        modal:{
            name: "Blog Eduardo",
            content:"Blog personal donde puedes el desarrollo de mis proyectos, estudios, etc.",
            projectUrl:"https://eduardoblog.vercel.app/",
            githubFrontUrl:"https://github.com/eduardoAns/Eduardo-blog",
            githubBackUrl:"https://github.com/eduardoAns/blogBack.git",
            listContent:[
                "Estado: En desarrollo",
                "Front-End: React, NextJs, Material UI, Axios, Context, Typescript, SSR, SSG", 
                "Back-End: Java, SpringBoot, JPA, Api-Rest, MySQL, JWT, Maven, Lombok, Intellij",
                "Despliegue: Railway, Vercel, RDS AWS",
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
                "Estado: Finalizado V1.0",
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
    }
]

