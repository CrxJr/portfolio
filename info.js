let info = {
  name: "Cristian Cantillo",
  logo_name: "Cristian",
  flat_picture: require("./src/assets/Cristian_Cantillo.jpg"),
  description:
    "I'm Cristian Cantillo, A senior Computer Science student at Champlain College with an interest in Software Development, Front-end and Back-end developing.",
  links: {
    linkedin: "https://www.linkedin.com/in/crxjr/",
    github: "https://github.com/CrxJr",
    resume:
      "https://www.moncvparfait.fr/feedback/session/a0efee1f-0e3c-435b-964f-3c9042d168ce"
  },
  education: [
    {
      name: "Champlain College",
      place: "Saint Lambert, Canada",
      date: "Aug, 2018 - May 2022",
      degree: "College Diploma",
      description:
        "",
      skills: [
        "Java", "C#", "C++", "Python",
        "Web programming", "JavaScript",
        "Back-end developing",
        "Front-end developing",
      ]
    },
  ],
  experience: [
    {
      name: "Delisoft",
      place: "Longueuil, Canada",
      date: "Feb., 2022 - May, 2022",
      position: "Intern",
      description:
        "",
      skills: ["PHP","Laravel","MySQL","Html5","API integration"]
    },
  ],
  skills: [
    {
      title: "Language",
      info: [
        "Python","Javascript","Java",'PHP'
      ],
      icon: "fa fa-code"
    },
    {
      title: "Front-end",
      info: [
        "HTML5","CSS3","Bootstrap3","JQuery","Tailwind CSS"
      ],
      icon: "fa fa-cubes"
    },
    {
      title: "Web Technologies",
      info: ["VueJS", "Laravel", "Angular"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "APIs",
      info: [
        "RESTful API","Parcelz","Freightcom","Zoho Inventory","Zoho Books","Square Up","Stripe API"
      ],
      icon: "fa fa-sitemap"
    },
    {
      title: "Databases",
      info: ["MySQL", "SQL Server"],
      icon: "fa fa-database"
    },
    {
      title: "Operating systems & tools",
      info: [ "Ubuntu","Windows","Agile","Scrum","JIRA","Firebase","Zoho"],
      icon: "fas fa-tools"
    },
  ],
  portfolio: [
    {
      name: "Tank Shop",
      pictures: [
        {
          img: require("./src/assets/portfolio/TankShop/1.png")
        },
        {
          img: require("./src/assets/portfolio/TankShop/2.png")
        },
        {
          img: require("./src/assets/portfolio/TankShop/3.png")
        },
      ],
      technologies: ["Javascript", "Html", "CSS", "Ajax", "jQuery"],
      category: "Web App",
      date: "February 26 - 49 days",
      github:
        "https://github.com/CrxJr/TankShop.git",
      visit: "https://github.com/CrxJr/TankShop.git",
      description:
        " Web Development Final Project "
    },
    {
      name: "Loisirs Et   Repit Sans Limites",
      pictures: [
        {
          img: require("./src/assets/portfolio/Loisirs_Sans_Limites/1.png")
        },
        {
          img: require("./src/assets/portfolio/Loisirs_Sans_Limites/2.png")
        },
        {
          img: require("./src/assets/portfolio/Loisirs_Sans_Limites/3.png")
        },
        {
          img: require("./src/assets/portfolio/Loisirs_Sans_Limites/4.png")
        },
        {
          img: require("./src/assets/portfolio/Loisirs_Sans_Limites/5.png")
        }
      ],
      technologies: ["HTML", "Tailwind CSS", "PHP", "MySQL", "Laravel", "VueJs"],
      category: "Web App",
      date: "Dec , 2021 - March, 2022",
      github: "https://github.com/ShiiroFX/apex-management.git",
      visit: "https://github.com/ShiiroFX/apex-management.git",
      description:
        "This project was decided as a final project of my time in college. The project consists on re-modelling the page for Loisirs et Repit Sans Limites" +
          "into a more modern looking website as well as including a management system to help the director manage the organization.  "
    },
  ],
};

export default info;
