(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [177],
  {
    2118: (e, n, t) => {
      "use strict";
      t.d(n, { default: () => m });
      var i = t(3345),
        r = t(3818),
        a = t(3045),
        s = t(3294),
        o = t(8568),
        l = t(9198);
      let c = [
          "bg-yellow-500 text-black",
          "bg-blue-500 text-white",
          "bg-teal-500 text-black",
          "bg-indigo-500 text-white",
        ],
        d = [
          { name: "Home", url: "/" },
          { name: "About Me", url: "/#about-me" },
          { name: "Experience", url: "/#my-experience" },
          { name: "Projects", url: "/#selected-projects" },
        ],
        m = () => {
          let [e, n] = (0, a.useState)(!1),
            t = (0, o.useRouter)();
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)("div", {
                className: "sticky top-0 z-[4]",
                children: (0, i.jsxs)("button", {
                  className: (0, r.cn)(
                    "group size-12 absolute top-5 right-5 md:right-10 z-[2]"
                  ),
                  onClick: () => n(!e),
                  children: [
                    (0, i.jsx)("span", {
                      className: (0, r.cn)(
                        "inline-block w-3/5 h-0.5 bg-foreground rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 -translate-y-[5px] ",
                        {
                          "rotate-45 -translate-y-1/2": e,
                          "md:group-hover:rotate-12": !e,
                        }
                      ),
                    }),
                    (0, i.jsx)("span", {
                      className: (0, r.cn)(
                        "inline-block w-3/5 h-0.5 bg-foreground rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 translate-y-[5px] ",
                        {
                          "-rotate-45 -translate-y-1/2": e,
                          "md:group-hover:-rotate-12": !e,
                        }
                      ),
                    }),
                  ],
                }),
              }),
              (0, i.jsx)("div", {
                className: (0, r.cn)(
                  "overlay fixed inset-0 z-[2] bg-black/70 transition-all duration-150",
                  { "opacity-0 invisible pointer-events-none": !e }
                ),
                onClick: () => n(!1),
              }),
              (0, i.jsxs)("div", {
                className: (0, r.cn)(
                  "fixed top-0 right-0 h-[100dvh] w-[500px] max-w-[calc(100vw-3rem)] transform translate-x-full transition-transform duration-700 z-[3] overflow-hidden gap-y-14",
                  "flex flex-col lg:justify-center py-10",
                  { "translate-x-0": e }
                ),
                children: [
                  (0, i.jsx)("div", {
                    className: (0, r.cn)(
                      "fixed inset-0 scale-150 translate-x-1/2 rounded-[50%] bg-background-light duration-700 delay-150 z-[-1]",
                      { "translate-x-0": e }
                    ),
                  }),
                  (0, i.jsx)("div", {
                    className:
                      "grow flex md:items-center w-full max-w-[300px] mx-8 sm:mx-auto",
                    children: (0, i.jsxs)("div", {
                      className:
                        "flex gap-10 lg:justify-between max-lg:flex-col w-full",
                      children: [
                        (0, i.jsxs)("div", {
                          className: "max-lg:order-2",
                          children: [
                            (0, i.jsx)("p", {
                              className: "text-muted-foreground mb-5 md:mb-8",
                              children: "SOCIAL",
                            }),
                            (0, i.jsx)("ul", {
                              className: "space-y-3",
                              children: l.w7.map((e) =>
                                (0, i.jsx)(
                                  "li",
                                  {
                                    children: (0, i.jsx)("a", {
                                      href: e.url,
                                      target: "_blank",
                                      rel: "noreferrer",
                                      className:
                                        "text-lg capitalize hover:underline",
                                      children: e.name,
                                    }),
                                  },
                                  e.name
                                )
                              ),
                            }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className: "",
                          children: [
                            (0, i.jsx)("p", {
                              className: "text-muted-foreground mb-5 md:mb-8",
                              children: "MENU",
                            }),
                            (0, i.jsx)("ul", {
                              className: "space-y-3",
                              children: d.map((e, a) =>
                                (0, i.jsx)(
                                  "li",
                                  {
                                    children: (0, i.jsxs)("button", {
                                      onClick: () => {
                                        t.push(e.url), n(!1);
                                      },
                                      className:
                                        "group text-xl flex items-center gap-3",
                                      children: [
                                        (0, i.jsx)("span", {
                                          className: (0, r.cn)(
                                            "size-3.5 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-[200%] transition-all",
                                            c[a]
                                          ),
                                          children: (0, i.jsx)(s.A, {
                                            size: 8,
                                            className:
                                              "scale-0 group-hover:scale-100 transition-all",
                                          }),
                                        }),
                                        e.name,
                                      ],
                                    }),
                                  },
                                  e.name
                                )
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, i.jsxs)("div", {
                    className: "w-full max-w-[300px] mx-8 sm:mx-auto",
                    children: [
                      (0, i.jsx)("p", {
                        className: "text-muted-foreground mb-4",
                        children: "GET IN TOUCH",
                      }),
                      (0, i.jsx)("a", {
                        href: "mailto:".concat(l.G4.email),
                        children: l.G4.email,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
    },
    2262: (e, n, t) => {
      Promise.resolve().then(t.t.bind(t, 5588, 23)),
        Promise.resolve().then(t.bind(t, 8871)),
        Promise.resolve().then(t.bind(t, 2118)),
        Promise.resolve().then(t.bind(t, 4226)),
        Promise.resolve().then(t.bind(t, 5685)),
        Promise.resolve().then(t.bind(t, 6941)),
        Promise.resolve().then(t.bind(t, 3517)),
        Promise.resolve().then(t.bind(t, 8245)),
        Promise.resolve().then(t.bind(t, 9988)),
        Promise.resolve().then(t.bind(t, 1909)),
        Promise.resolve().then(t.t.bind(t, 5948, 23)),
        Promise.resolve().then(t.t.bind(t, 8102, 23)),
        Promise.resolve().then(t.t.bind(t, 7100, 23)),
        Promise.resolve().then(t.t.bind(t, 3478, 23));
    },
    3818: (e, n, t) => {
      "use strict";
      t.d(n, { cn: () => a });
      var i = t(9701),
        r = t(523);
      function a() {
        for (var e = arguments.length, n = Array(e), t = 0; t < e; t++)
          n[t] = arguments[t];
        return (0, r.QP)((0, i.$)(n));
      }
    },
    4226: (e, n, t) => {
      "use strict";
      t.d(n, { default: () => o });
      var i = t(3345),
        r = t(8272),
        a = t(6246),
        s = t(3045);
      a.Ay.registerPlugin(r.L);
      let o = () => {
        let e = (0, s.useRef)([]);
        return (
          (0, r.L)(() => {
            e.current.forEach((e) => {
              a.Ay.set(e, {
                width: 3 * Math.random() + 1,
                height: 3 * Math.random() + 1,
                opacity: Math.random(),
                left: Math.random() * window.innerWidth,
                top: Math.random() * (window.innerHeight + 1),
              }),
                a.Ay.to(e, {
                  y: window.innerHeight,
                  duration: 10 * Math.random() + 10,
                  opacity: 0,
                  repeat: -1,
                  ease: "none",
                });
            });
          }, []),
          (0, i.jsx)("div", {
            className: "fixed inset-0 z-0 pointer-events-none",
            children: [...Array(100)].map((n, t) =>
              (0, i.jsx)(
                "div",
                {
                  ref: (n) => {
                    e.current.push(n);
                  },
                  className: "absolute rounded-full bg-white",
                },
                t
              )
            ),
          })
        );
      };
    },
    5588: () => {},
    5685: (e, n, t) => {
      "use strict";
      t.d(n, { default: () => o });
      var i = t(3345),
        r = t(8272),
        a = t(6246),
        s = t(3045);
      a.Ay.registerPlugin(r.L);
      let o = () => {
        let e = (0, s.useRef)(null);
        return (
          (0, r.L)(
            () => {
              let n = a.Ay.timeline({ defaults: { ease: "power1.inOut" } });
              n.to(".name-text span", { y: 0, stagger: 0.05, duration: 0.2 }),
                n
                  .to(".preloader-item", {
                    delay: 1,
                    y: "100%",
                    duration: 0.5,
                    stagger: 0.1,
                  })
                  .to(".name-text span", { autoAlpha: 0 }, "<0.5")
                  .to(e.current, { autoAlpha: 0 }, "<1");
            },
            { scope: e }
          ),
          (0, i.jsxs)("div", {
            className: "fixed inset-0 z-[6] flex",
            ref: e,
            children: [
              (0, i.jsx)("div", {
                className: "preloader-item h-full w-[10%] bg-black",
              }),
              (0, i.jsx)("div", {
                className: "preloader-item h-full w-[10%] bg-black",
              }),
              (0, i.jsx)("div", {
                className: "preloader-item h-full w-[10%] bg-black",
              }),
              (0, i.jsx)("div", {
                className: "preloader-item h-full w-[10%] bg-black",
              }),
              (0, i.jsx)("div", {
                className: "preloader-item h-full w-[10%] bg-black",
              }),
              (0, i.jsx)("div", {
                className: "preloader-item h-full w-[10%] bg-black",
              }),
              (0, i.jsx)("div", {
                className: "preloader-item h-full w-[10%] bg-black",
              }),
              (0, i.jsx)("div", {
                className: "preloader-item h-full w-[10%] bg-black",
              }),
              (0, i.jsx)("div", {
                className: "preloader-item h-full w-[10%] bg-black",
              }),
              (0, i.jsx)("div", {
                className: "preloader-item h-full w-[10%] bg-black",
              }),
              (0, i.jsxs)("p", {
                className:
                  "name-text flex text-[20vw] lg:text-[200px] font-anton text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none overflow-hidden",
                children: [
                  (0, i.jsx)("span", {
                    className: "inline-block translate-y-full",
                    children: "D",
                  }),
                  (0, i.jsx)("span", {
                    className: "inline-block translate-y-full",
                    children: "E",
                  }),
                  (0, i.jsx)("span", {
                    className: "inline-block translate-y-full",
                    children: "V",
                  }),
                  (0, i.jsx)("span", {
                    className: "inline-block translate-y-full",
                    children: "E",
                  }),
                  (0, i.jsx)("span", {
                    className: "inline-block translate-y-full",
                    children: "N",
                  }),
                  (0, i.jsx)("span", {
                    className: "inline-block translate-y-full",
                    children: "D",
                  }),
                  (0, i.jsx)("span", {
                    className: "inline-block translate-y-full",
                    children: "R",
                  }),
                  (0, i.jsx)("span", {
                    className: "inline-block translate-y-full",
                    children: "A",
                  }),
                ],
              }),
            ],
          })
        );
      };
    },
    6941: (e, n, t) => {
      "use strict";
      t.d(n, { default: () => a });
      var i = t(3345),
        r = t(3045);
      let a = () => {
        let e = (0, r.useRef)(null);
        return (
          (0, r.useEffect)(() => {
            let n = () => {
              if (e.current) {
                let { scrollHeight: n, clientHeight: t } =
                    document.documentElement,
                  i = window.scrollY;
                e.current.style.transform = "translateY(-".concat(
                  100 - (i / (n - t)) * 100,
                  "%)"
                );
              }
            };
            return (
              n(),
              window.addEventListener("scroll", n),
              () => window.removeEventListener("scroll", n)
            );
          }, []),
          (0, i.jsx)("div", {
            className:
              "fixed top-[50svh] right-[2%] -translate-y-1/2 w-1.5 h-[100px] rounded-full bg-background-light overflow-hidden",
            children: (0, i.jsx)("div", {
              className: "w-full bg-primary rounded-full h-full",
              ref: e,
            }),
          })
        );
      };
    },
    8871: (e, n, t) => {
      "use strict";
      t.d(n, { default: () => o });
      var i = t(3345),
        r = t(8272),
        a = t(6246),
        s = t(3045);
      a.Ay.registerPlugin(r.L);
      let o = () => {
        let e = (0, s.useRef)(null);
        return (
          (0, r.L)((n, t) => {
            if (window.innerWidth < 768) return;
            let i =
              null == t
                ? void 0
                : t((n) => {
                    if (!e.current) return;
                    let { clientX: t, clientY: i } = n;
                    a.Ay.to(e.current, {
                      x: t,
                      y: i,
                      ease: "power2.out",
                      duration: 0.25,
                      opacity: 1,
                    });
                  });
            return (
              window.addEventListener("mousemove", i),
              () => {
                window.removeEventListener("mousemove", i);
              }
            );
          }),
          (0, i.jsx)("svg", {
            width: "27",
            height: "30",
            viewBox: "0 0 27 30",
            className:
              "hidden md:block fixed top-0 left-0 opacity-0 z-[50] pointer-events-none",
            fill: "none",
            id: "cursor",
            strokeWidth: "2",
            opacity: "0",
            xmlns: "http://www.w3.org/2000/svg",
            ref: e,
            children: (0, i.jsx)("path", {
              d: "M20.0995 11.0797L3.72518 1.13204C2.28687 0.258253 0.478228 1.44326 0.704999 3.11083L3.28667 22.0953C3.58333 24.2768 7.33319 24.6415 8.3792 22.7043C9.5038 20.6215 10.8639 18.7382 12.43 17.7122C13.996 16.6861 16.2658 16.1911 18.6244 15.9918C20.8181 15.8063 21.9811 12.2227 20.0995 11.0797Z",
              className: "fill-foreground stroke-background/50",
            }),
          })
        );
      };
    },
    9198: (e, n, t) => {
      "use strict";
      t.d(n, {
        G4: () => i,
        jA: () => s,
        q2: () => a,
        sz: () => o,
        w7: () => r,
      });
      let i = {
          email: "dhakeddevendra5@gmail.com",
          emailSubject: "Let's collaborate on a project",
          emailBody: "Hi Devendra, I am reaching out to you because...",
          oldPortfolio: "https://www.legacy.me.toinfinite.dev",
          upworkProfile: "https://www.upwork.com/freelancers/~01f7a35718ec5a5660",
        },
        r = [
          { 
            name: "github", url: "https://github.com/dhakeddevendra5" 
         },
          {
            name: "linkedin", url: "https://www.linkedin.com/in/devendra-dhaked-98b14624a/",
          },
          { 
            name: "facebook", url: "https://www.facebook.com/" 
          },
          { 
            name: "Old Version", url: i.oldPortfolio 
          },
        ],
        a = {
          frontend: [
            { name: "HTML", icon: "" },
            { name: "CSS", icon: "" },
            { name: "Javascript", icon: "" },
            { name: "React", icon: "/logo/react.png" },
            { name: "Bootstrap", icon: "/logo/bootstrap.svg" },
          ],
          backend: [
            { name: "Node.js", icon: "/logo/node.png" },
            { name: "SpringBoot", icon: "/logo/nest.svg" },
            // { name: "", icon: "" },
          ],
          database: [
            { name: "MySQL", icon: "/logo/mysql.svg" },
            { name: "PostgreSQL", icon: "/logo/postgreSQL.png" },
            { name: "MongoDB", icon: "/logo/mongodb.svg" },
            { name: "Oracle", icon: "/logo/" },
          ],
          tools: [
            { name: "Git", icon: "/logo/git.png" },
            { name: "Docker", icon: "/logo/docker.svg" },
            { name: "AWS", icon: "/logo/aws.png" },
            { name: "Postman", icon: "/logo/postman.png" },
          ],
        },
        s = [
          {
            title: "School Management System",
            slug: "SchoolManagementSystem",
            liveUrl: "https://github.com/dhakeddevendra5/SchoolManagementSystem",
            year: 2025,
            description:
              "<p> A modern <strong>School Management System</strong> built with <strong>Spring Boot</strong>, <strong>React</strong>, <strong>PostgreSQL</strong>, and <strong>Docker</strong> to efficiently manage students, teachers, classes, and administrative tasks. <br/><br/>  <strong>Key Features:</strong><br/>  <ul>    <li>📚 Student & Teacher Management: Create, update, and track academic records and personal details</li>    <li>📅 Timetable Scheduling: Efficiently assign classes and manage schedules</li>   <li>📈 Performance Tracking: Monitor student progress and generate report cards</li>   <li>🔐 Role-Based Authentication: Secure login for Admins, Teachers, and Students</li>  <li>📱 Fully Responsive Design: Accessible across mobile, tablet, and desktop devices</li>  </ul>  <br/>  <strong>Technical Highlights:</strong> <ul>  <li>✅ Backend powered by RESTful APIs using Spring Boot with layered architecture</li>   <li>✅ Frontend developed with React using reusable components and hooks</li>   <li>✅ PostgreSQL for reliable, relational data storage and querying</li>  <li>✅ Dockerized for consistent local development and deployment</li>  <li>✅ Clean codebase with separation of concerns and scalable structure</li>  </ul> </p>",

            role: "<p><strong>Role:</strong> Full-Stack Developer<br/>Owned the entire development lifecycle:<ul><li>✅ <strong>Backend:</strong> Developed RESTful APIs using Spring Boot for managing students, teachers, subjects, attendance, and authentication</li><li>🎨 <strong>Frontend:</strong> Built intuitive and responsive UI using React and Tailwind CSS</li><li>🔄 <strong>State Management:</strong> Implemented efficient client-side state handling using React hooks and Context API</li><li>🗄️ <strong>Database:</strong> Designed normalized schemas in PostgreSQL and wrote optimized queries</li><li>🐳 <strong>DevOps:</strong> Dockerized backend, frontend, and database with Docker Compose for streamlined local development and deployment</li><li>🔐 <strong>Security:</strong> Integrated role-based access control for Admin, Teacher, and Student roles</li></ul></p>",
            techStack: [
              "React",
              "Docker",
              "Spring Boot",
              "PostgreSQL",
            ],
            thumbnail: "",
            longThumbnail: "",
            images: [
              "",
              "",
            ],
          },
          {
            title: "Travelling Management System",
            slug: "TravellingManagementSystem",
            techStack: [
              "Spring Boot",
              "Html-Css",
              "PostgresSQL",
            ],
            thumbnail: "",
            longThumbnail: "",
            images: [
              "",
              "",

            ],
            liveUrl: "https://github.com/dhakeddevendra5/TravellingManagementSystem",
            year: 2024,
            description: "Travelling Management System is a streamlined platform designed to manage travel packages, bookings, customer records, and itineraries. Built with Spring Boot, PostgreSQL, HTML, and CSS, it offers robust backend support with a clean, user-friendly interface for travel agencies and customers alike.",
            role: "As the full-stack developer of the Travelling Management System, I:<br/>- Designed and implemented the backend using Spring Boot with layered architecture and PostgreSQL for persistent storage.<br/>- Developed the frontend with HTML and CSS, ensuring responsive design and clean UX.<br/>- Built features such as package listing, booking management, and itinerary tracking.<br/>- Ensured secure data flow and form validation for smooth user interactions.<br/>- Containerized the app using Docker for consistent development and deployment.",
          },
          {
            title: "Vechile BreakDown System",
            slug: "VechileBreakDownSystem",
            techStack: [
              "Spring Boot",
              "Html-Css",
              "PostgresSQL",
            ],
            thumbnail: "",
            longThumbnail: "",
            images: [
              "",
              "",
            ],
            liveUrl: "https://github.com/dhakeddevendra5/VechileBreakDownSystem",
            year: 2025,
            description: "Vehicle Breakdown Management System is a web-based application designed to streamline the reporting and tracking of vehicle breakdown incidents. Built with Spring Boot, PostgreSQL, HTML, and CSS, the system enables users to log breakdown events, assign mechanics, and monitor repair status in real time. It ensures faster response times, better coordination between service providers and vehicle owners, and improved overall efficiency for transport and logistics operations.",
            role: "As the sole developer, I:<br/>  - Designed and developed the entire platform using Spring Boot, PostgreSQL, HTML, and CSS.<br/>   - Implemented RESTful APIs for reporting, assigning, and tracking vehicle breakdowns.<br/>          - Structured the database for efficient query performance and real-time status updates.<br/>          - Focused on responsive UI design for seamless usage by drivers, service providers, and admins.",
          },
          {
            title: "Password Generator",
            slug: "PasswordGenerator",
            techStack: [
              "Spring Boot",
              "Html",
              "Css",
            ],
            thumbnail: "",
            longThumbnail: "",
            images: [
              "",
              "",
              "",
            ],
            liveUrl: "https://github.com/dhakeddevendra5/PasswordGenerator",
            year: 2025,
            description: "A simple yet secure Password Generator web application built with Spring Boot for the backend and HTML/CSS for the frontend. It allows users to generate strong, random passwords based on customizable criteria like length, inclusion of special characters, numbers, and uppercase letters.",
            role: "As the sole developer, I:<br/>         - Developed a Spring Boot backend to handle password generation logic securely.<br/>         - Designed a user-friendly UI using HTML and CSS for input configuration and results display.<br/>         - Ensured strong password entropy and applied validation checks for input options.<br/>         - Maintained clean architecture and modular code for easy scalability.",
          },
        ],
        o = [
          {
            title: "Software Developer",
            company: "",
            duration: "",
          },
          {
            title: "Software Developer",
            company: "",
            duration: "",
          },
        //   {
        //     title: "Software Developer",
        //     company: "",
        //     duration: "",
        //   },

        ];
    },
  },
  (e) => {
    var n = (n) => e((e.s = n));
    e.O(0, [463, 461, 272, 23, 783, 910, 969, 358], () => n(2262)),
      (_N_E = e.O());
  },
]);
