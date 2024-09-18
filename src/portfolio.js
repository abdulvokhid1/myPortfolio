/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ali",
  title: "Hi all, I'm Ali",
  subTitle: emoji(
    "JavaScript / React.js / Next.js / Node.js / Nest.js와 기타 라이브러리 및 프레임워크를 사용하여 웹 애플리케이션을 개발한 경험이 있는 열정적인 풀스택 소프트웨어 개발자입니다. 🚀"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/abdulvokhid1",
  // linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "leodevelop299@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  instagram: "https://www.instagram.com/ibrakhimov_299/",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks")
    // emoji(
    //   "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    // )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "nestjs"
    },
    {
      skillName: "nextjs"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },

    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },

    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    }
    // {
    //   Stack: "Programming",
    //   progressPercentage: "60%"
    // }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Chonnam National University",
      logo: require("./assets/images/chonnam.jpg"),
      subHeader: "The Degree of Bachelor in Software Engineering",
      duration: "2018.03 - 2024.02"
    }
  ]
};
// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "풀스택 개발자",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      // date: "June 2018 – Present",
      desc: "풀스택 개발자: GraphQL 및 REST API 서버, 배치 서버를 위한 모노레포 프로젝트를 관리했습니다. NodeJs, TypeScript 및 NestJs GraphQL을 통합하여 효율적인 데이터 가져오기와 유연한 API 를 구현했습니다. Docker Compose, PM2, ShellJS 및 NGINX를 사용하여 Docker 컨테이너를 배포했습니다. MVC, 미들웨어, 의존성 주입(Dependency Injection), 데코레이터 및 캐싱 아키텍처와 같은 인기 있는 패턴을 구현했습니다. NEXTJS를 활용하여 Next-AppRouter 및 Next-PagesRouter를 포함한 기능을 사용했습니다. Axios, Fetch, Apollo Client를 통한 API 통합 및 React-Query를 통한 상태 관리를 처리했습니다. WebSocket, SocketIO 및 TCP를 통한 구독을 사용하여 실시간 애플리케이션을 구현했습니다.",
      descBullets: []
    },
    {
      role: "백엔드 개발자",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      // date: "Jan 2015 – Sep 2015",
      desc: "백엔드 개발자 NodeJS,TypeScript 및 NESTJS를 사용하여 확장 가능한 백엔드 서비스를 구축했습니다. GraphQL 및 Apollo Server를 사용하여 데이터 쿼리 기능을 구현했습니다. Mongoose를 사용하여 스키마 기반 데이터 모델링을 통해 MongoDB 데이터베이스를 관리했습니다. WebSocket 및 Socket.IO를 사용하여 실시간 통신을 관리했습니다.Cookie-Parser를 사용하여 세션 관리를 하고, DotEnv를 사용하여 보안 환경 구성을 했습니다. Nestjs-Schedule을 사용하여 API를 설계하고 데이터 스크래핑 및 배치 처리를 수행했습니다.MVC, 미들웨어, 의존성 주입(Dependency Injection) 등 다양한 디자인 패턴을 적용했습니다. Linux Ubuntu를 실행하는 VPS에 애플리케이션을 배포하고, NGINX 및 UFW로 구성했습니다. Docker 및 Docker Compose를 사용하여 애플리케이션을 컨테이너화했습니다"
    },
    {
      role: "프론트엔드 개발자",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      // date: "May 2017 – May 2018",
      desc: "프론트엔드 개발자: HTML, Css, JavaScript, TypeScript, React, 및 EJS를 사용하여 SPA 애플리케이션을 개발했습니다. NEXTJS를 활용하여 Next-AppRouter 및 Next-PagesRouter를 포함한 기능을 사용했습니다. REDUX 및 Context를 사용하여 상태 관리를 구축했습니다. MaterialUI, Bootstrap 및 Tailwind를 활용하여 사용자 친화적인 인터페이스를 만들었니다. React-i18next를 사용하여 국제화를 구현했습니다. SCSS, SASS를 사용하여 게시물을 작성하고 코드 리팩토링을 수행했습니다"
    }
  ]
};

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

const bigProjects = {
  title: "Big Projects",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    // greenshop
    {
      image: require("./assets/images/Logo.png"),
      projectName: "Greenshop",
      projectDesc:
        "풀스택 웹 예약 플랫폼 저는 현대적인 기술과 아키텍처 패턴을 활용하여 견고한 풀스택 웹 예약 플랫폼을 개발했습니다. 백엔드는 NESTJS 모노레포 아키텍처를 사용해 구축되었으며, GraphQL API뿐만 아니라 배치 및 크롤링 서버도 포함되었습니다. 이 구조 덕분에 코드베이스가 매우 모듈화되고 유지 보수가 용이해졌습니다. MVC(Model-View-Controller)와 DI(Dependency Injection)와 같은 핵심 아키텍처 패턴을 구현했으며, 미들웨어와 데코레이터 같은 고급 설계 패턴도 적용했습니다. 보안을 위해 Guards와 토큰 검증을 사용하여 포괄적인 인증 및 권한 부여 메커니즘을 통합했습니다. 프론트엔드는 Next.js를 활용하여 원활한 사용자 경험을 제공했습니다. 애플리케이션은 Apollo 캐시 아키텍처를 사용해 효율적인 데이터 관리와 최적화된 UI/UX를 보장합니다. 사용자는 카테고리별로 꽃과 식물을 쉽게 검색하고 예약할 수 있어, 플랫폼이 직관적이고 사용자 친화적입니다.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://greenshops.uz/"
        },
        {
          name: "Visit Website Admin Panel",
          url: "http://greenshops.uz/_admin/users"
        }
        //  you can add extra buttons here.
      ]
    },
    // megacoffee
    {
      image: require("./assets/images/mega-logo.png"),
      projectName: "MegaCoffee",
      projectDesc:
        "풀스택 전자상거래 웹 애플리케이션, 저는 MVC 아키텍처 프레임워크 내에서 React.js를 사용하여 강력한 풀스택 웹 애플리케이션을 개발했습니다.이 플랫폼은 사용자가 다양한 고품질 커피를 탐색하고 구매할 수 있는 원활하고 신뢰할 수 있는 경험을 제공합니다.커피 외에도, 애플리케이션은 다양한 종류의 음료 포함한 광범위한 음료 선택을 제공하여 다양한 취향을 충족시킵니다. 직관적인 인터페이스와 효율적인 백엔드는 원활한 사용자 경험을 보장하며, 고객이 원하는 제품을 쉽게 찾고 구매할 수 있도록 합니다. 이 프로젝트는 사용자 경험을 향상시키기 위해 종합적인 기능 세트를 포함하고 있습니다. 핵심 요소 중 하나는 사용자 인증 및 로그인 기능으로, 사용자가 개인화된 계정을 생성하고 안전하게 로그인하여 맞춤형 기능에 접근할 수 있게 합니다. 로그인 후, 사용자는 제품 카탈로그를 쉽게 탐색하고, 장바구니에 아이템을 추가하며, 선택 사항을 손쉽게 관리할 수 있습니다.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://megacoffee.uz/"
        },
        {
          name: "Visit Website Admin Panel",
          url: "http://156.67.221.152:3003/admin/"
        }
      ]
    },

    // nexton
    {
      image: require("./assets/images/airbnbLogo.png"),
      projectName: "Nexton",
      projectDesc:
        "내 기여: 저는 Nexton의 매력적인 프론트엔드 개발에서중요한 역할을 했습니다. JavaScript, JQuery, EJS,HTML, CSS, Axios, Bootstrap, SweetAlert2, Swiper,PixelJS 등 다양한 최신 기술을 활용하여 시각적으로 뛰어나고 원활하게 상호작용하는 사용자 경험을 제공하는 데중점을 두었습니다. 제 기여는 Nexton의 사용자들이 몰입감 있는 보람 있는 온라인 쇼핑을 경험할 수 있도록 하는 데 목표를 두었습니다.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://Nexton.uz/"
        }
        // {
        //   name: "Visit Website Admin Panel",
        //   url: "http://156.67.221.152:3003/admin/"
        // }
      ]
    },
    {
      image: require("./assets/images/engin.png"),
      projectName: "EnginX",
      projectDesc:
        "설명: Enginx는 MERN 스택과 인공지능 같은 주제를 포함한 다양한 유료 강좌를 제공하는 강력한 elearning 플랫폼입니다. 학생들은 계정을 생성하고 강좌를 구매하며, 관리자가 통제하는 상호작용적인 튜토리얼에 참여할 수 있습니다. 강사는 승인된 강좌를업로드할 수 있는 권한을 가지고 있습니다. 내 기여: 저는 Enginx의 매력적인 프론트엔드 개발에서중요한 역할을 했습니다. JavaScript, JQuery, EJS,HTML, CSS, Axios, Bootstrap, SweetAlert2, Swiper,PixelJS 등 다양한 최신 기술을 활용하여 시각적으로 매력적이고 원활한 상호작용을 제공하는 사용자 경험을구현했습니다. 제 기여는 Enginx의 학습자들이 몰입감있는 보람 있는 온라인 학습 여정을 경험할 수 있도록하는 데 중점을 두었습니다.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://enginx.uz/index.php"
        }
        // {
        //   name: "Visit Website Admin Panel",
        //   url: "http://156.67.221.152:3003/admin/"
        // }
      ]
    }
  ],
  github: "https://github.com/abdulvokhid1",

  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  address: "Address: 서울 관악구 서림길 103",
  number: "Phone number: +8210 5504 9698",
  email_address: "Email:leodevelop299@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
