let info = {
  name: "Cristian Cantillo",
  logo_name: "Cristian",
  flat_picture: require("./src/assets/Cristian_Cantillo.jpg"),
  description:
    "I'm Cristian Cantillo, A senior Computer Science student at Champlain College with an interest in Software Development, Front-end and Back-end developing.",
  links: {
    linkedin: "https://www.linkedin.com/in/cristian-cantillo-985387197/",
    github: "https://github.com/CrxJr",
    resume:
      "https://docs.google.com/document/d/1gJMseJTXe-54v7KADPR7B_gjN5d2ofHd1-o61FW-1Wk/edit?usp=sharing"
  },
  education: [
    {
      name: "Champlain College",
      place: "Saint Lambert, Canada",
      date: "Aug, 2018 - Currently",
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
      skills: ["PHP", "Laravel", "MySQL", "Html5"]
    },
  ],
  skills: [
    {
      title: "Language",
      info: [
        "Python","Javascript","Java","C#", 'PHP'
      ],
      icon: "fa fa-code"
    },
    {
      title: "Front-end",
      info: [
        "HTML5","CSS3","Bootstrap3","JQuery", "Tailwind CSS"
      ],
      icon: "fa fa-cubes"
    },
    {
      title: "Web Technologies",
      info: ["Vue", "Laravel", "Angular"
      ],
      icon: "fas fa-laptop-code"
    },
    {
      title: "Databases",
      info: ["MySQL", "SQL Server"],
      icon: "fa fa-database"
    },
    {
      title: "Operating systems & tools",
      info: [ "Ubuntu", "Windows", "Agile", "Scrum", "JIRA","Firebase"],
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
  blog: [
    {
      name: "First Blog",
      date: "May 12, 2022",
      technologies: ["Javascript", "Html", "CSS", "Ajax", "jQuery"],
      pictures: [
        {
          img: require("./src/assets/blog/UsefulTrash.png"),
        },
      ],
      desc: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore aut neque consectetur voluptatem quam nihil, facere earum adipisci, animi beatae dicta maiores, ipsam delectus ab molestias dolorum aperiam? Sapiente?",
    },
    {
      name: "Second Blog",
      date: "May 12, 2022",
      technologies: ["Javascript", "Html", "CSS", "Ajax", "jQuery"],
      pictures: [
        {
          img: require("./src/assets/blog/UsefulTrash.png"),
        },
      ],
      desc: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempore aut neque consectetur voluptatem quam nihil, facere earum adipisci, animi beatae dicta maiores, ipsam delectus ab molestias dolorum aperiam? Sapiente?",
    }
  ],
};

export default info;
