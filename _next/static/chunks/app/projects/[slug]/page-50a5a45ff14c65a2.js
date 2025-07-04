(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [419],
  {
    977: (e, r, t) => {
      "use strict";
      t.d(r, { default: () => x });
      var a = t(3345),
        s = t(9322),
        n = t(7307),
        l = t(6853),
        o = t(8272),
        i = t(6246),
        c = t(8411),
        d = t(9081),
        u = t(3635),
        g = t(4706),
        h = t(3045);
      i.Ay.registerPlugin(o.L, c.u);
      let x = (e) => {
        let { project: r } = e,
          t = (0, h.useRef)(null);
        return (
          (0, o.L)(
            () => {
              t.current &&
                (i.Ay.set(".fade-in-later", { autoAlpha: 0, y: 30 }),
                i.Ay.timeline({ delay: 0.5 }).to(".fade-in-later", {
                  autoAlpha: 1,
                  y: 0,
                  stagger: 0.1,
                }));
            },
            { scope: t }
          ),
          (0, o.L)(
            () => {
              window.innerWidth < 992 ||
                i.Ay.to("#info", {
                  filter: "blur(3px)",
                  autoAlpha: 0,
                  scale: 0.9,
                  scrollTrigger: {
                    trigger: "#info",
                    start: "bottom bottom",
                    end: "bottom top",
                    pin: !0,
                    pinSpacing: !1,
                    scrub: 0.5,
                  },
                });
            },
            { scope: t }
          ),
          (0, o.L)(
            () => {
              i.Ay.utils.toArray("#images > div").forEach((e, r) => {
                i.Ay.to(e, {
                  backgroundPosition: "center 0%",
                  ease: "none",
                  scrollTrigger: {
                    trigger: e,
                    start: () => (r ? "top bottom" : "top 50%"),
                    end: "bottom top",
                    scrub: !0,
                  },
                });
              });
            },
            { scope: t }
          ),
          (0, a.jsx)("section", {
            className: "pt-5 pb-14",
            children: (0, a.jsxs)("div", {
              className: "container",
              ref: t,
              children: [
                (0, a.jsxs)(l.A, {
                  back: !0,
                  href: "/",
                  className: "mb-16 inline-flex gap-2 items-center group h-12",
                  children: [
                    (0, a.jsx)(d.A, {
                      className:
                        "group-hover:-translate-x-1 group-hover:text-primary transition-all duration-300",
                    }),
                    "Back",
                  ],
                }),
                (0, a.jsx)("div", {
                  className: "top-0 min-h-[calc(100svh-100px)] flex",
                  id: "info",
                  children: (0, a.jsxs)("div", {
                    className: "relative w-full",
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "flex items-start gap-6 mx-auto mb-10 max-w-[635px]",
                        children: [
                          (0, a.jsx)("h1", {
                            className:
                              "fade-in-later opacity-0 text-4xl md:text-[60px] leading-none font-anton overflow-hidden",
                            children: (0, a.jsx)("span", {
                              className: "inline-block",
                              children: r.title,
                            }),
                          }),
                          (0, a.jsxs)("div", {
                            className: "fade-in-later opacity-0 flex gap-2",
                            children: [
                              r.sourceCode &&
                                (0, a.jsx)("a", {
                                  href: r.sourceCode,
                                  target: "_blank",
                                  rel: "noreferrer noopener",
                                  className: "hover:text-primary",
                                  children: (0, a.jsx)(u.A, { size: 30 }),
                                }),
                              r.liveUrl &&
                                (0, a.jsx)("a", {
                                  href: r.liveUrl,
                                  target: "_blank",
                                  rel: "noreferrer noopener",
                                  className: "hover:text-primary",
                                  children: (0, a.jsx)(g.A, { size: 30 }),
                                }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "max-w-[635px] space-y-7 pb-20 mx-auto",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "fade-in-later",
                            children: [
                              (0, a.jsx)("p", {
                                className:
                                  "text-muted-foreground font-anton mb-3",
                                children: "Year",
                              }),
                              (0, a.jsx)("div", {
                                className: "text-lg",
                                children: r.year,
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "fade-in-later",
                            children: [
                              (0, a.jsx)("p", {
                                className:
                                  "text-muted-foreground font-anton mb-3",
                                children: "Tech & Technique",
                              }),
                              (0, a.jsx)("div", {
                                className: "text-lg",
                                children: r.techStack.join(", "),
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "fade-in-later",
                            children: [
                              (0, a.jsx)("p", {
                                className:
                                  "text-muted-foreground font-anton mb-3",
                                children: "Description",
                              }),
                              (0, a.jsx)("div", {
                                className: "text-lg prose-xl markdown-text",
                                children: (0, s.Ay)(r.description),
                              }),
                            ],
                          }),
                          r.role &&
                            (0, a.jsxs)("div", {
                              className: "fade-in-later",
                              children: [
                                (0, a.jsx)("p", {
                                  className:
                                    "text-muted-foreground font-anton mb-3",
                                  children: "My Role",
                                }),
                                (0, a.jsx)("div", {
                                  className: "text-lg",
                                  children: (0, s.Ay)(r.role),
                                }),
                              ],
                            }),
                        ],
                      }),
                      (0, a.jsx)(n.A, {}),
                    ],
                  }),
                }),
                (0, a.jsx)("div", {
                  className:
                    "fade-in-later relative flex flex-col gap-2 max-w-[800px] mx-auto",
                  id: "images",
                  children: r.images.map((e) =>
                    (0, a.jsx)(
                      "div",
                      {
                        className:
                          "group relative w-full aspect-[750/400] bg-background-light",
                        style: {
                          backgroundImage: "url(".concat(e, ")"),
                          backgroundSize: "cover",
                          backgroundPosition: "center 50%",
                          backgroundRepeat: "no-repeat",
                        },
                        children: (0, a.jsx)("a", {
                          href: e,
                          target: "_blank",
                          className:
                            "absolute top-4 right-4 bg-background/70 text-foreground size-12 inline-flex justify-center items-center transition-all opacity-0 hover:bg-primary hover:text-primary-foreground group-hover:opacity-100",
                          children: (0, a.jsx)(g.A, {}),
                        }),
                      },
                      e
                    )
                  ),
                }),
              ],
            }),
          })
        );
      };
    },
    6853: (e, r, t) => {
      "use strict";
      t.d(r, { A: () => c });
      var a = t(3345),
        s = t(8272),
        n = t(6246),
        l = t(2135),
        o = t.n(l),
        i = t(8568);
      t(3045), n.Ay.registerPlugin(s.L);
      let c = (e) => {
        let { href: r, onClick: t, children: l, back: c = !1, ...d } = e,
          u = (0, i.useRouter)(),
          { contextSafe: g } = (0, s.L)(() => {}),
          h = g(async (e) => {
            e.preventDefault(),
              n.Ay.set(".page-transition", { yPercent: 100 }),
              n.Ay.set(".page-transition--inner", { yPercent: 100 });
            let a = n.Ay.timeline();
            a.to(".page-transition", { yPercent: 0, duration: 0.3 }),
              a.then(() => {
                c ? u.back() : r ? u.push(r.toString()) : t && t(e);
              });
          });
        return (0, a.jsx)(o(), { href: r, ...d, onClick: h, children: l });
      };
    },
    7307: (e, r, t) => {
      "use strict";
      t.d(r, { A: () => i });
      var a = t(3345),
        s = t(8272),
        n = t(6246),
        l = t(8411),
        o = t(3045);
      n.Ay.registerPlugin(l.u, s.L);
      let i = () => {
        let e = (0, o.useRef)(null),
          r = (0, o.useRef)(null),
          t = (0, o.useRef)(null);
        return (
          (0, s.L)(() => {
            var e, a, s, l;
            n.Ay.set("#banner-arrow-svg", {
              fill: "transparent",
              autoAlpha: 0,
            }),
              n.Ay.set(".svg-arrow-1", {
                strokeDasharray:
                  null === (e = r.current) || void 0 === e
                    ? void 0
                    : e.getTotalLength(),
                strokeDashoffset:
                  null === (a = r.current) || void 0 === a
                    ? void 0
                    : a.getTotalLength(),
              }),
              n.Ay.set(".svg-arrow-2", {
                strokeDasharray:
                  null === (s = t.current) || void 0 === s
                    ? void 0
                    : s.getTotalLength(),
                strokeDashoffset:
                  null === (l = t.current) || void 0 === l
                    ? void 0
                    : l.getTotalLength(),
              });
            let o = n.Ay.timeline({ repeat: -1 });
            o.to("#banner-arrow-svg", { autoAlpha: 1, duration: 0.1 }),
              o.to(".svg-arrow", {
                duration: 2,
                delay: 1,
                strokeDashoffset: 0,
              }),
              o.to("#banner-arrow-svg", {
                duration: 0.5,
                delay: 0.5,
                fill: "#ffffff08",
              }),
              o.to("#banner-arrow-svg", { duration: 1, y: 300 }),
              o.to("#banner-arrow-svg", { duration: 0, autoAlpha: 0 });
          }),
          (0, a.jsxs)("svg", {
            id: "banner-arrow-svg",
            width: "376",
            height: "111",
            viewBox: "0 0 376 111",
            fill: "transparent",
            xmlns: "http://www.w3.org/2000/svg",
            className: "absolute bottom-20 left-1/2 -translate-x-1/2 z-0",
            ref: e,
            children: [
              (0, a.jsx)("path", {
                className: "svg-arrow svg-arrow-1",
                d: "M1 1V39.9286L188 110V70.6822L1 1Z",
                stroke: "#2C2C2C",
                ref: r,
              }),
              (0, a.jsx)("path", {
                className: "svg-arrow svg-arrow-2",
                d: "M375 1V39.9286L188 110V70.6822L375 1Z",
                stroke: "#2C2C2C",
                ref: t,
              }),
            ],
          })
        );
      };
    },
    9091: (e, r, t) => {
      Promise.resolve().then(t.bind(t, 977));
    },
  },
  (e) => {
    var r = (r) => e((e.s = r));
    e.O(0, [461, 272, 222, 585, 910, 969, 358], () => r(9091)), (_N_E = e.O());
  },
]);
