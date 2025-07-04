(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974],
  {
    996: (e, t, n) => {
      "use strict";
      n.d(t, { default: () => l });
      var i = n(3345),
        r = n(8272),
        s = n(6246),
        o = n(8411),
        a = n(3045);
      s.Ay.registerPlugin(o.u, r.L);
      let l = () => {
        let e = a.useRef(null);
        return (
          (0, r.L)(
            () => {
              s.Ay.timeline({
                scrollTrigger: {
                  id: "about-me-in",
                  trigger: e.current,
                  start: "top 70%",
                  end: "bottom bottom",
                  scrub: 0.5,
                },
              }).from(".slide-up-and-fade", {
                y: 150,
                opacity: 0,
                stagger: 0.05,
              });
            },
            { scope: e }
          ),
          (0, r.L)(
            () => {
              s.Ay.timeline({
                scrollTrigger: {
                  id: "about-me-out",
                  trigger: e.current,
                  start: "bottom 50%",
                  end: "bottom 10%",
                  scrub: 0.5,
                },
              }).to(".slide-up-and-fade", {
                y: -150,
                opacity: 0,
                stagger: 0.02,
              });
            },
            { scope: e }
          ),
          (0, i.jsx)("section", {
            className: "pb-section",
            id: "about-me",
            children: (0, i.jsxs)("div", {
              className: "container",
              ref: e,
              children: [
                (0, i.jsx)("h2", {
                  className:
                    "text-4xl md:text-6xl font-thin mb-20 slide-up-and-fade",
                  children:
                    "I believe in a user centered design approach, ensuring that every project I work on is tailored to meet the specific needs of its users.",
                }),
                (0, i.jsx)("p", {
                  className:
                    "pb-3 border-b text-muted-foreground slide-up-and-fade",
                  children: "This is me.",
                }),
                (0, i.jsxs)("div", {
                  className: "grid md:grid-cols-12 mt-9",
                  children: [
                    (0, i.jsx)("div", {
                      className: "md:col-span-5",
                      children: (0, i.jsx)("p", {
                        className: "text-5xl slide-up-and-fade",
                        children: "Hi, I'm Devendra.",
                      }),
                    }),
                    (0, i.jsx)("div", {
                      className: "md:col-span-7",
                      children: (0, i.jsxs)("div", {
                        className:
                          "text-lg text-muted-foreground max-w-[450px]",
                        children: [
                          (0, i.jsx)("p", {
                            className: "slide-up-and-fade",
                            children:
                              "I'm a software developer dedicated to turning ideas into creative solutions. I specialize in creating seamless and intuitive user experiences.",
                          }),
                          (0, i.jsx)("p", {
                            className: "mt-3 slide-up-and-fade",
                            children:
                              "My approach focuses on creating scalable, high-performing solutions tailored to both user needs and business objectives. By prioritizing performance, accessibility, and responsiveness, I strive to deliver experiences that not only engage users but also drive tangible results.",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      };
    },
    2243: (e, t, n) => {
      "use strict";
      n.d(t, { default: () => p });
      var i = n(3345),
        r = n(6644),
        s = n(9198),
        o = n(3818),
        a = n(8272),
        l = n(6246),
        c = n(8411),
        d = n(6595),
        A = n(3045),
        g = n(6853);
      l.Ay.registerPlugin(a.L);
      let u = (e) => {
        let { index: t, project: n, selectedProject: r, onMouseEnter: s } = e,
          c = (0, A.useRef)(null),
          { context: u, contextSafe: p } = (0, a.L)(() => {}, {
            scope: c,
            revertOnUpdate: !0,
          }),
          m =
            null == p
              ? void 0
              : p(() => {
                  var e, t, i;
                  s(n.slug);
                  let r =
                      null === (e = c.current) || void 0 === e
                        ? void 0
                        : e.querySelector("#arrow-line"),
                    o =
                      null === (t = c.current) || void 0 === t
                        ? void 0
                        : t.querySelector("#arrow-curb"),
                    a =
                      null === (i = c.current) || void 0 === i
                        ? void 0
                        : i.querySelector("#box");
                  l.Ay.set(a, {
                    opacity: 0,
                    strokeDasharray: null == a ? void 0 : a.getTotalLength(),
                    strokeDashoffset: null == a ? void 0 : a.getTotalLength(),
                  }),
                    l.Ay.set(r, {
                      opacity: 0,
                      strokeDasharray: null == r ? void 0 : r.getTotalLength(),
                      strokeDashoffset: null == r ? void 0 : r.getTotalLength(),
                    }),
                    l.Ay.set(o, {
                      opacity: 0,
                      strokeDasharray: null == o ? void 0 : o.getTotalLength(),
                      strokeDashoffset: null == o ? void 0 : o.getTotalLength(),
                    }),
                    l.Ay.timeline({ repeat: -1, repeatDelay: 1 })
                      .to(c.current, { autoAlpha: 1 })
                      .to(a, { opacity: 1, strokeDashoffset: 0 })
                      .to(r, { opacity: 1, strokeDashoffset: 0 }, "<0.2")
                      .to(o, { opacity: 1, strokeDashoffset: 0 })
                      .to(c.current, { autoAlpha: 0 }, "+=1");
                }),
          h =
            null == p
              ? void 0
              : p(() => {
                  u.kill();
                });
        return (0, i.jsxs)(g.A, {
          href: "https://github.com/dhakeddevendra5/".concat(n.slug),
          className:
            "project-item group leading-none py-5 md:border-b first:!pt-0 last:pb-0 last:border-none md:group-hover/projects:opacity-30 md:hover:!opacity-100 transition-all",
          onMouseEnter: m,
          onMouseLeave: h,
          children: [
            null === r &&
              (0, i.jsx)(
                d.default,
                {
                  src: n.thumbnail,
                  alt: "Project",
                  width: "300",
                  height: "200",
                  className: (0, o.cn)(
                    "w-full object-cover mb-6 aspect-[3/2] object-top"
                  ),
                  loading: "lazy",
                },
                n.slug
              ),
            (0, i.jsxs)("div", {
              className: "flex gap-2 md:gap-5",
              children: [
                (0, i.jsxs)("div", {
                  className: "font-anton text-muted-foreground",
                  children: ["_", (t + 1).toString().padStart(2, "0"), "."],
                }),
                (0, i.jsxs)("div", {
                  className: "",
                  children: [
                    (0, i.jsxs)("h4", {
                      className:
                        "text-4xl xs:text-6xl flex gap-4 font-anton transition-all duration-700 bg-gradient-to-r from-primary to-foreground from-[50%] to-[50%] bg-[length:200%] bg-right bg-clip-text text-transparent group-hover:bg-left",
                      children: [
                        n.title,
                        (0, i.jsx)("span", {
                          className:
                            "text-foreground opacity-0 group-hover:opacity-100 transition-all",
                          children: (0, i.jsxs)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "36",
                            height: "36",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            ref: c,
                            children: [
                              (0, i.jsx)("path", {
                                id: "box",
                                d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
                              }),
                              (0, i.jsx)("path", {
                                id: "arrow-line",
                                d: "M10 14 21 3",
                              }),
                              (0, i.jsx)("path", {
                                id: "arrow-curb",
                                d: "M15 3h6v6",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className:
                        "mt-2 flex flex-wrap gap-3 text-muted-foreground text-xs",
                      children: n.techStack
                        .slice(0, 3)
                        .map((e, t, n) =>
                          (0, i.jsxs)(
                            "div",
                            {
                              className: "gap-3 flex items-center",
                              children: [
                                (0, i.jsx)("span", {
                                  className: "",
                                  children: e,
                                }),
                                t !== n.length - 1 &&
                                  (0, i.jsx)("span", {
                                    className:
                                      "inline-block size-2 rounded-full bg-background-light",
                                  }),
                              ],
                            },
                            e
                          )
                        ),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      l.Ay.registerPlugin(c.u, a.L);
      let p = () => {
        let e = (0, A.useRef)(null),
          t = (0, A.useRef)(null),
          n = (0, A.useRef)(null),
          c = (0, A.useRef)(null),
          [g, p] = (0, A.useState)(s.jA[0].slug);
        (0, a.L)(
          (t, i) => {
            if (window.innerWidth < 768) {
              p(null);
              return;
            }
            let r =
              null == i
                ? void 0
                : i((t) => {
                    var i;
                    if (!e.current || !n.current) return;
                    if (window.innerWidth < 768) {
                      p(null);
                      return;
                    }
                    let r =
                        null === (i = e.current) || void 0 === i
                          ? void 0
                          : i.getBoundingClientRect(),
                      s = n.current.getBoundingClientRect(),
                      o = t.clientY - r.y;
                    if (
                      r.y > t.clientY ||
                      r.bottom < t.clientY ||
                      r.x > t.clientX ||
                      r.right < t.clientX
                    )
                      return l.Ay.to(n.current, { duration: 0.3, opacity: 0 });
                    l.Ay.to(n.current, {
                      y: o - s.height / 2,
                      duration: 1,
                      opacity: 1,
                    });
                  });
            return (
              window.addEventListener("mousemove", r),
              () => {
                window.removeEventListener("mousemove", r);
              }
            );
          },
          { scope: e, dependencies: [e.current] }
        ),
          (0, a.L)(
            () => {
              l.Ay.timeline({
                scrollTrigger: {
                  trigger: e.current,
                  start: "top bottom",
                  end: "top 80%",
                  toggleActions: "restart none none reverse",
                  scrub: 1,
                },
              }).from(e.current, { y: 150, opacity: 0 });
            },
            { scope: e }
          );
        let m = (e) => {
          if (window.innerWidth < 768) {
            p(null);
            return;
          }
          p(e);
        };
        return (0, i.jsx)("section", {
          className: "pb-section",
          id: "selected-projects",
          children: (0, i.jsxs)("div", {
            className: "container",
            children: [
              (0, i.jsx)(r.A, { title: "SELECTED PROJECTS" }),
              (0, i.jsxs)("div", {
                className: "group/projects relative",
                ref: e,
                children: [
                  null !== g &&
                    (0, i.jsx)("div", {
                      className:
                        "max-md:hidden absolute right-0 top-0 z-[1] pointer-events-none w-[200px] xl:w-[350px] aspect-[3/4] overflow-hidden opacity-0",
                      ref: n,
                      children: s.jA.map((e) =>
                        (0, i.jsx)(
                          d.default,
                          {
                            src: e.thumbnail,
                            alt: "Project",
                            width: "400",
                            height: "500",
                            className: (0, o.cn)(
                              "absolute inset-0 transition-all duration-500 w-full h-full object-cover",
                              { "opacity-0": e.slug !== g }
                            ),
                            ref: c,
                          },
                          e.slug
                        )
                      ),
                    }),
                  (0, i.jsx)("div", {
                    className: "flex flex-col max-md:gap-10",
                    ref: t,
                    children: s.jA.map((e, t) =>
                      (0, i.jsx)(
                        u,
                        {
                          index: t,
                          project: e,
                          selectedProject: g,
                          onMouseEnter: m,
                        },
                        e.slug
                      )
                    ),
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    3818: (e, t, n) => {
      "use strict";
      n.d(t, { cn: () => s });
      var i = n(9701),
        r = n(523);
      function s() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (0, r.QP)((0, i.$)(t));
      }
    },
    4860: (e, t, n) => {
      "use strict";
      n.d(t, { default: () => m });
      var i = n(3345),
        r = n(7307),
        s = n(2135),
        o = n.n(s),
        a = n(3045),
        l = n(3818);
      let c = (e) => {
          let { icon: t } = e;
          return (0, i.jsxs)("span", {
            className: "flex items-center justify-center gap-3",
            children: [
              (0, i.jsxs)("svg", {
                className: "animate-spin h-5 w-5 text-white",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
                children: [
                  (0, i.jsx)("circle", {
                    className: "opacity-25",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    strokeWidth: "4",
                  }),
                  (0, i.jsx)("path", {
                    className: "opacity-75",
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
                  }),
                ],
              }),
              !t && "Processing...",
            ],
          });
        },
        d = (e) => {
          let {
              loading: t,
              variant: n,
              className: r,
              children: s,
              as: a = "link",
              icon: d = !1,
              ...A
            } = e,
            g = {
              primary:
                "bg-primary text-primary-foreground  hover:bg-primary-hover",
              secondary:
                "bg-secondary text-secondary-foreground hover:bg-secondary-hover",
              success: "bg-green-500 text-white hover:bg-green-600",
              warning: "bg-orange-500 text-white hover:bg-orange-600",
              danger:
                "bg-destructive text-destructive-foreground hover:bg-destructive/70",
              info: "bg-blue-500 text-white hover:bg-blue-600",
              light:
                "bg-background-active text-foreground hover:bg-background-active",
              dark: "bg-foreground text-background hover:bg-foreground/80",
              link: "text-foreground hover:text-primary",
              "no-color": "",
            }[n || "primary"],
            u = (0, l.cn)(
              "min-w-9 aspect-square text-xl p-0 inline-flex items-center justify-center rounded-md",
              g
            ),
            p = (0, l.cn)(
              "group h-12 px-8 inline-flex justify-center items-center gap-2 text-lg uppercase font-anton tracking-widest outline-none transition-colors relative overflow-hidden",
              g,
              { [u]: d },
              r
            );
          return "link" === a
            ? "_blank" === A.target
              ? (0, i.jsxs)("a", {
                  className: p,
                  ...A,
                  href: A.href.toString() || "#",
                  children: [
                    "link" !== n &&
                      (0, i.jsx)("span", {
                        className:
                          "absolute top-[200%] left-0 right-0 h-full bg-white rounded-[50%] group-hover:top-0 transition-all duration-500 scale-150",
                      }),
                    (0, i.jsx)("span", {
                      className: "z-[1]",
                      children: t ? (0, i.jsx)(c, { icon: d }) : s,
                    }),
                  ],
                })
              : (0, i.jsxs)(o(), {
                  className: p,
                  ...A,
                  href: A.href || "#",
                  children: [
                    "link" !== n &&
                      (0, i.jsx)("span", {
                        className:
                          "absolute top-[200%] left-0 right-0 h-full bg-white rounded-[50%] group-hover:top-0 transition-all duration-500 scale-150",
                      }),
                    (0, i.jsx)("span", {
                      className: "z-[1]",
                      children: t ? (0, i.jsx)(c, { icon: d }) : s,
                    }),
                  ],
                })
            : "button" === a
            ? (0, i.jsxs)("button", {
                className: p,
                ...A,
                children: [
                  "link" !== n &&
                    (0, i.jsx)("span", {
                      className:
                        "absolute top-[200%] left-0 right-0 h-full bg-white rounded-[50%] group-hover:top-0 transition-all duration-500 scale-150",
                    }),
                  (0, i.jsx)("span", {
                    className: "z-[1]",
                    children: t ? (0, i.jsx)(c, { icon: d }) : s,
                  }),
                ],
              })
            : void 0;
        };
      var A = n(9198),
        g = n(8272),
        u = n(6246),
        p = n(8411);
      u.Ay.registerPlugin(p.u, g.L);
      let m = () => {
        let e = a.useRef(null);
        return (
          (0, g.L)(
            () => {
              u.Ay.timeline({
                scrollTrigger: {
                  trigger: e.current,
                  start: "bottom 70%",
                  end: "bottom 10%",
                  scrub: 1,
                },
              }).fromTo(
                ".slide-up-and-fade",
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 }
              );
            },
            { scope: e }
          ),
          (0, i.jsxs)("section", {
            className: "relative overflow-hidden",
            id: "banner",
            children: [
              (0, i.jsx)(r.A, {}),
              (0, i.jsxs)("div", {
                className:
                  "container h-[100svh] min-h-[530px] max-md:pb-10 flex justify-between items-center max-md:flex-col",
                ref: e,
                children: [
                  (0, i.jsxs)("div", {
                    className:
                      "max-md:grow max-md:flex flex-col justify-center items-start max-w-[544px]",
                    children: [
                      (0, i.jsxs)("h1", {
                        className:
                          "banner-title slide-up-and-fade leading-[.95] text-6xl sm:text-[80px] font-anton",
                        children: [
                          (0, i.jsx)("span", {
                            className: "text-primary",
                            children: "SOFTWARE",
                          }),
                          (0, i.jsx)("br", {}),
                          " ",
                          (0, i.jsx)("span", {
                            className: "ml-4",
                            children: "DEVELOPER",
                          }),
                        ],
                      }),
                      (0, i.jsxs)("p", {
                        className:
                          "banner-description slide-up-and-fade mt-6 text-lg text-muted-foreground",
                        children: [
                          "Hi! I'm",
                          " ",
                          (0, i.jsx)("span", {
                            className: "font-medium text-foreground",
                            children: "Devendra",
                          }),
                          ". A Software Developer with 1+ years of experience in building high-performance, scalable, and responsive applications.",
                        ],
                      }),
                      (0, i.jsx)(d, {
                        as: "link",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        href: "https://drive.google.com/file/d/1WvTg87KExRJjOPvL_fclwXysL6xYLruE/view?usp=drive_link",
                        variant: "primary",
                        className: "mt-9 banner-button slide-up-and-fade",
                        children: "Hire Me",
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className:
                      "md:absolute bottom-[10%] right-[4%] flex md:flex-col gap-4 md:gap-8 text-center md:text-right",
                    children: [
                      (0, i.jsxs)("div", {
                        className: "slide-up-and-fade",
                        children: [
                          (0, i.jsx)("h5", {
                            className:
                              "text-3xl sm:text-4xl font-anton text-primary mb-1.5",
                            children: "1+",
                          }),
                          (0, i.jsx)("p", {
                            className: "text-muted-foreground",
                            children: "Years of Experience",
                          }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className: "slide-up-and-fade",
                        children: [
                          (0, i.jsx)("h5", {
                            className:
                              "text-3xl sm:text-4xl font-anton text-primary mb-1.5",
                            children: "7+",
                          }),
                          (0, i.jsx)("p", {
                            className: "text-muted-foreground",
                            children: "Completed Projects",
                          }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className: "slide-up-and-fade",
                        children: [
                          (0, i.jsx)("h5", {
                            className:
                              "text-3xl sm:text-4xl font-anton text-primary mb-1.5",
                            children: "10K+",
                          }),
                          (0, i.jsx)("p", {
                            className: "text-muted-foreground",
                            children: "Hours Worked",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      };
    },
    5978: (e, t, n) => {
      Promise.resolve().then(n.bind(n, 996)),
        Promise.resolve().then(n.bind(n, 4860)),
        Promise.resolve().then(n.bind(n, 7850)),
        Promise.resolve().then(n.bind(n, 2243)),
        Promise.resolve().then(n.bind(n, 9097));
    },
    6644: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => o });
      var i = n(3345);
      n(3045);
      let r = (e) => {
        let { title: t, titleId: n, ...r } = e;
        return (0, i.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          xmlnsXlink: "http://www.w3.org/1999/xlink",
          fill: "none",
          viewBox: "0 0 25 29",
          "aria-labelledby": n,
          ...r,
          children: [
            t ? (0, i.jsx)("title", { id: n, children: t }) : null,
            (0, i.jsx)("path", {
              fill: "url(#section-flower_svg__a)",
              d: "M25 0H0v28.929h25z",
            }),
            (0, i.jsxs)("defs", {
              children: [
                (0, i.jsx)("pattern", {
                  id: "section-flower_svg__a",
                  width: 1,
                  height: 1,
                  patternContentUnits: "objectBoundingBox",
                  children: (0, i.jsx)("use", {
                    xlinkHref: "#section-flower_svg__b",
                    transform: "matrix(.00255 0 0 .0022 -.01 0)",
                  }),
                }),
                (0, i.jsx)("image", {
                  xlinkHref:
                    "data:image/png;base64,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",
                  id: "section-flower_svg__b",
                  width: 400,
                  height: 453,
                }),
              ],
            }),
          ],
        });
      };
      var s = n(3818);
      let o = (e) => {
        let { icon: t, title: n, className: o, classNames: a } = e;
        return (0, i.jsxs)("div", {
          className: (0, s.cn)(
            "flex items-center gap-4 mb-10",
            o,
            null == a ? void 0 : a.container
          ),
          children: [
            t ||
              (0, i.jsx)(r, {
                width: 25,
                className: (0, s.cn)(
                  "animate-spin duration-7000",
                  null == a ? void 0 : a.icon
                ),
              }),
            (0, i.jsx)("h2", {
              className: (0, s.cn)(
                "text-xl uppercase leading-none",
                null == a ? void 0 : a.title
              ),
              children: n,
            }),
          ],
        });
      };
    },
    6853: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => c });
      var i = n(3345),
        r = n(8272),
        s = n(6246),
        o = n(2135),
        a = n.n(o),
        l = n(8568);
      n(3045), s.Ay.registerPlugin(r.L);
      let c = (e) => {
        let { href: t, onClick: n, children: o, back: c = !1, ...d } = e,
          A = (0, l.useRouter)(),
          { contextSafe: g } = (0, r.L)(() => {}),
          u = g(async (e) => {
            e.preventDefault(),
              s.Ay.set(".page-transition", { yPercent: 100 }),
              s.Ay.set(".page-transition--inner", { yPercent: 100 });
            let i = s.Ay.timeline();
            i.to(".page-transition", { yPercent: 0, duration: 0.3 }),
              i.then(() => {
                c ? A.back() : t ? A.push(t.toString()) : n && n(e);
              });
          });
        return (0, i.jsx)(a(), { href: t, ...d, onClick: u, children: o });
      };
    },
    7307: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => l });
      var i = n(3345),
        r = n(8272),
        s = n(6246),
        o = n(8411),
        a = n(3045);
      s.Ay.registerPlugin(o.u, r.L);
      let l = () => {
        let e = (0, a.useRef)(null),
          t = (0, a.useRef)(null),
          n = (0, a.useRef)(null);
        return (
          (0, r.L)(() => {
            var e, i, r, o;
            s.Ay.set("#banner-arrow-svg", {
              fill: "transparent",
              autoAlpha: 0,
            }),
              s.Ay.set(".svg-arrow-1", {
                strokeDasharray:
                  null === (e = t.current) || void 0 === e
                    ? void 0
                    : e.getTotalLength(),
                strokeDashoffset:
                  null === (i = t.current) || void 0 === i
                    ? void 0
                    : i.getTotalLength(),
              }),
              s.Ay.set(".svg-arrow-2", {
                strokeDasharray:
                  null === (r = n.current) || void 0 === r
                    ? void 0
                    : r.getTotalLength(),
                strokeDashoffset:
                  null === (o = n.current) || void 0 === o
                    ? void 0
                    : o.getTotalLength(),
              });
            let a = s.Ay.timeline({ repeat: -1 });
            a.to("#banner-arrow-svg", { autoAlpha: 1, duration: 0.1 }),
              a.to(".svg-arrow", {
                duration: 2,
                delay: 1,
                strokeDashoffset: 0,
              }),
              a.to("#banner-arrow-svg", {
                duration: 0.5,
                delay: 0.5,
                fill: "#ffffff08",
              }),
              a.to("#banner-arrow-svg", { duration: 1, y: 300 }),
              a.to("#banner-arrow-svg", { duration: 0, autoAlpha: 0 });
          }),
          (0, i.jsxs)("svg", {
            id: "banner-arrow-svg",
            width: "376",
            height: "111",
            viewBox: "0 0 376 111",
            fill: "transparent",
            xmlns: "http://www.w3.org/2000/svg",
            className: "absolute bottom-20 left-1/2 -translate-x-1/2 z-0",
            ref: e,
            children: [
              (0, i.jsx)("path", {
                className: "svg-arrow svg-arrow-1",
                d: "M1 1V39.9286L188 110V70.6822L1 1Z",
                stroke: "#2C2C2C",
                ref: t,
              }),
              (0, i.jsx)("path", {
                className: "svg-arrow svg-arrow-2",
                d: "M375 1V39.9286L188 110V70.6822L375 1Z",
                stroke: "#2C2C2C",
                ref: n,
              }),
            ],
          })
        );
      };
    },
    7850: (e, t, n) => {
      "use strict";
      n.d(t, { default: () => d });
      var i = n(3345),
        r = n(6644),
        s = n(9198),
        o = n(8272),
        a = n(6246),
        l = n(8411),
        c = n(3045);
      a.Ay.registerPlugin(o.L, l.u);
      let d = () => {
        let e = (0, c.useRef)(null);
        return (
          (0, o.L)(
            () => {
              a.Ay.timeline({
                scrollTrigger: {
                  trigger: e.current,
                  start: "top 60%",
                  end: "bottom 50%",
                  toggleActions: "restart none none reverse",
                  scrub: 1,
                },
              }).from(".experience-item", { y: 50, opacity: 0, stagger: 0.3 });
            },
            { scope: e }
          ),
          (0, o.L)(
            () => {
              a.Ay.timeline({
                scrollTrigger: {
                  trigger: e.current,
                  start: "bottom 50%",
                  end: "bottom 20%",
                  scrub: 1,
                },
              }).to(e.current, { y: -150, opacity: 0 });
            },
            { scope: e }
          ),
          (0, i.jsx)("section", {
            className: "py-section",
            id: "my-experience",
            children: (0, i.jsxs)("div", {
              className: "container",
              ref: e,
              children: [
                (0, i.jsx)(r.A, { title: "My Experience" }),
                (0, i.jsx)("div", {
                  className: "grid gap-14",
                  children: s.sz.map((e) =>
                    (0, i.jsxs)(
                      "div",
                      {
                        className: "experience-item",
                        children: [
                          (0, i.jsx)("p", {
                            className: "text-xl text-muted-foreground",
                            children: e.company,
                          }),
                          (0, i.jsx)("p", {
                            className:
                              "text-5xl font-anton leading-none mt-3.5 mb-2.5",
                            children: e.title,
                          }),
                          (0, i.jsx)("p", {
                            className: "text-lg text-muted-foreground",
                            children: e.duration,
                          }),
                        ],
                      },
                      e.title
                    )
                  ),
                }),
              ],
            }),
          })
        );
      };
    },
    9097: (e, t, n) => {
      "use strict";
      n.d(t, { default: () => A });
      var i = n(3345),
        r = n(6644),
        s = n(9198),
        o = n(8272),
        a = n(6246),
        l = n(8411),
        c = n(6595),
        d = n(3045);
      a.Ay.registerPlugin(l.u, o.L);
      let A = () => {
        let e = (0, d.useRef)(null);
        return (
          (0, o.L)(
            () => {
              var t;
              let n =
                null === (t = e.current) || void 0 === t
                  ? void 0
                  : t.querySelectorAll(".slide-up");
              (null == n ? void 0 : n.length) &&
                a.Ay.timeline({
                  scrollTrigger: {
                    trigger: e.current,
                    start: "top 80%",
                    end: "bottom 80%",
                    scrub: 0.5,
                  },
                }).from(".slide-up", {
                  opacity: 0,
                  y: 40,
                  ease: "none",
                  stagger: 0.4,
                });
            },
            { scope: e }
          ),
          (0, o.L)(
            () => {
              a.Ay.timeline({
                scrollTrigger: {
                  trigger: e.current,
                  start: "bottom 50%",
                  end: "bottom 10%",
                  scrub: 1,
                },
              }).to(e.current, { y: -150, opacity: 0 });
            },
            { scope: e }
          ),
          (0, i.jsx)("section", {
            id: "my-stack",
            ref: e,
            children: (0, i.jsxs)("div", {
              className: "container",
              children: [
                (0, i.jsx)(r.A, { title: "My Stack" }),
                (0, i.jsx)("div", {
                  className: "space-y-20",
                  children: Object.entries(s.q2).map((e) => {
                    let [t, n] = e;
                    return (0, i.jsxs)(
                      "div",
                      {
                        className: "grid sm:grid-cols-12",
                        children: [
                          (0, i.jsx)("div", {
                            className: "sm:col-span-5",
                            children: (0, i.jsx)("p", {
                              className:
                                "slide-up text-5xl font-anton leading-none text-muted-foreground uppercase",
                              children: t,
                            }),
                          }),
                          (0, i.jsx)("div", {
                            className:
                              "sm:col-span-7 flex gap-x-11 gap-y-9 flex-wrap",
                            children: n.map((e) =>
                              (0, i.jsxs)(
                                "div",
                                {
                                  className:
                                    "slide-up flex gap-3.5 items-center leading-none",
                                  children: [
                                    (0, i.jsx)("div", {
                                      children: (0, i.jsx)(c.default, {
                                        src: e.icon,
                                        alt: e.name,
                                        width: "40",
                                        height: "40",
                                        className: "max-h-10",
                                      }),
                                    }),
                                    (0, i.jsx)("span", {
                                      className: "text-2xl capitalize",
                                      children: e.name,
                                    }),
                                  ],
                                },
                                e.name
                              )
                            ),
                          }),
                        ],
                      },
                      t
                    );
                  }),
                }),
              ],
            }),
          })
        );
      };
    },
    9198: (e, t, n) => {
      "use strict";
      n.d(t, {
        G4: () => i,
        jA: () => o,
        q2: () => s,
        sz: () => a,
        w7: () => r,
      });
      let i = {
          email: "dhakeddevendra5@gmail.com",
          emailSubject: "Let's collaborate on a project",
          emailBody: "Hi Devendra, I am reaching out to you because...",
          oldPortfolio: "",
          upworkProfile: "https://www.upwork.com/freelancers/dhakeddevendra5",
        },
        r = [
          { name: "github", url: "https://github.com/dhakeddevendra5" },
          {
            name: "linkedin",
            url: "https://www.linkedin.com/in/devendra-dhaked-98b14624a/",
          },
          { name: "facebook", url: "https://www.facebook.com/" },
          { name: "Old Version", url: i.oldPortfolio },
        ],
        s = {
          frontend: [
            { name: "HTML", icon: "" },
            { name: "CSS", icon: "" },
            { name: "Javascript", icon: "/logo/js.png" },
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
        o = [
          {
            title: "School Management System",
            slug: "School-Management-System",
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
            liveUrl: "",
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
        a = [
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
        ];
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    e.O(0, [461, 272, 222, 23, 595, 910, 969, 358], () => t(5978)),
      (_N_E = e.O());
  },
]);
