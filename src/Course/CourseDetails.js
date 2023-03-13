import multimedia from "../assets/multimedia.jpg";
import english from "../assets/eng.jpg";
import korean from "../assets/korean.jpg";
import japan from "../assets/japan.jpg";
import sne from "../assets/sne.jpg";
import cs from "../assets/cs.jpg";
import web from "../assets/web.jpg";

export const CourseDetails = [
  {
    id: 1,
    cTitile: "Diploma in System Hardware and Network Engineering",
    cDesc:
      "This is a special course for those who want to serve as a Design Professional in IT workplaces, as well as painting, designing, photography, and short video editing.",
    cType: "Technology",
    cOutlines: [
      { outline: "Hardware Theory and Knowledge (CompTIA A+)" },
      { outline: "System Administration" },
      { outline: " Network Theory (CompTIA N+) and Practical" },
      {
        outline:
          " Cable Network ,Wire Network Creation and Sharing, Server Configuration",
      },
      { outline: " Linux Administration" },
      { outline: "CCNA (200-301)" },
    ],
    cProgram: "Diploma",
    src: sne,
  },
  {
    id: 2,
    cTitile: "Diploma in Cybersecurity",
    cDesc:
      "This is a special course for those who want to serve as a Design Professional in IT workplaces, as well as painting, designing, photography, and short video editing.",
    cType: "Technology",
    cOutlines: [
      { outline: "System and Network Fundamental" },
      { outline: "Expert Secure Computer User" },
      { outline: "Cyber Security and Ethical Hacking" },
      { outline: "Open Source Intelligence Techniques" },
      { outline: "Technologies in Cyber Security" },
      { outline: "Ethics in hacking" },
    ],
    cProgram: "Diploma",
    src: cs,
  },
  {
    id: 3,
    cTitile: "Diploma in Web Development",
    cDesc:
      "This is a special course for those who want to serve as a Design Professional in IT workplaces, as well as painting, designing, photography, and short video editing.",
    cType: "Technology",
    cOutlines: [
      { outline: "Programming (Java/PHP)" },
      { outline: "Internet and Web Technologies" },
      { outline: "Web Designing(HTML, CSS, Javascript, Bootstrap)" },
      { outline: "RDBMS using MYSQL" },
      { outline: "Application Development using Java,PHP" },
      { outline: "Project Management" },
      { outline: "Final Project" },
    ],
    cProgram: "Diploma",
    src: web,
  },
  {
    id: 4,
    cTitile: "Diploma in Multimedia",
    cDesc:
      "This is a special course for those who want to serve as a Design Professional in IT workplaces, as well as painting, designing, photography, and short video editing.",
    cType: "Technology",
    cOutlines: [
      { outline: "Adobe Illustrator" },
      { outline: "Adobe Photoshop" },
      { outline: "Adobe After Effects" },
      { outline: "Adobe Premire" },
      { outline: "Color Theory and color composition" },
      { outline: "Typography" },
      { outline: "Understand in Graphic Designs Concepts" },
    ],
    cProgram: "Diploma",
    src: multimedia,
  },
  // {
  //   id: 5,
  //   cTitile: "Diploma in Vocational Education",
  //   cDesc:
  //     "This is a special course for those who want to serve as a Design Professional in IT workplaces, as well as painting, designing, photography, and short video editing.",
  //   cType: "Technology",
  //   cProgram: "Diploma",
  //   src: "https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/319097964_692770615854505_4093262883823295442_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=J_3KMwHBuykAX8DbzOr&_nc_ht=scontent-lga3-2.xx&oh=00_AfDVhIIEaM3_CXATER23sEXzl03V3hAbJVQtmt8l8mRYNw&oe=63D3089F",
  // },
  // {
  //   id: 6,
  //   cTitile: "Foundation Class for International Education",
  //   cDesc:
  //     "This is a special course for those who want to serve as a Design Professional in IT workplaces, as well as painting, designing, photography, and short video editing.",
  //   cType: "International Education",
  //   src: "https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/319097964_692770615854505_4093262883823295442_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=J_3KMwHBuykAX8DbzOr&_nc_ht=scontent-lga3-2.xx&oh=00_AfDVhIIEaM3_CXATER23sEXzl03V3hAbJVQtmt8l8mRYNw&oe=63D3089F",
  // },
  {
    id: 7,
    cTitile: "Certificate in Japanese Language",
    cDesc:
      "Our Institue offers online language education and courses for Japanese language starting at beginner level to proficient level. Learning a new language is always challenging. But Japanese is a wonderful language to learn for job or fun. Are you looking to expand your language skills as a hobby? Do you need to learn Japanese for business? Or do you simply want to travel to Japan? Whatever the case, learning Japanese can be incredibly rewarding.",
    cType: "Language",
    cOutlines: [
      { outline: "N(5)" },
      { outline: "N(4)" },
      { outline: "N(3)" },
      { outline: "N(2)" },
      { outline: "N(1)" },
    ],
    cProgram: "Certificate",
    src: japan,
  },
  {
    id: 8,
    cTitile: "Certificate in General English",
    cDesc:
      "General English course aims to improve students’ skills in all areas of the English language and the courses cover all main aspects of the language which are, reading, writing, speaking and listening as well as grammar, although most General English courses focus more on improving speaking and listening.Find out about how the English language is used in a variety of global contexts and develop your creative writing skills.",
    cType: "Language",
    cOutlines: [
      { outline: "A1 (Beginner)" },
      { outline: "A2(Elementary English)" },
      { outline: "B1(Lower Intermediate)" },
      { outline: "B2(Upper Intermediate)" },
      { outline: "C1(Advanced English)" },
      { outline: "C2(Profiency English)" },
    ],
    cProgram: "Certificate",
    src: english,
  },
  {
    id: 9,
    cTitile: "Certificate in Korean Language",
    cDesc:
      "Are you planning a trip to Korea? Or are you fascinated by Korean culture and you want to get to know it better? No matter what your reason for wanting to learn Korean is, we can only encourage you to make your wish come true! Korean is a beautiful language, and it’s fairly easy to learn. Yes, even the Korean alphabet isn’t as hard as you think. And if you’re going to learn Korean online, you’ll undoubtedly have a very relaxed yet engaging learning experience.",
    cType: "Language",
    cOutlines: [
      { outline: "Level 1 (A) / Level 1 (B)" },
      { outline: "Level 2 (A) / Level 2 (B)" },
      { outline: "Level 3 (A) / Level 3 (B)" },
      { outline: "Level 4 (A) / Level 4 (B)" },
      { outline: "Level 5 (A) / Level 5 (B)" },
    ],
    cProgram: "Diploma",
    src: korean,
  },
];
