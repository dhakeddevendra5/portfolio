(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [397],
  {
    5643: (e, n, t) => {
      "use strict";
      t.r(n), t.d(n, { default: () => a });
      var r = t(3345),
        i = t(8272),
        s = t(6246);
      function a(e) {
        let { children: n } = e;
        return (
          (0, i.L)(() => {
            s.Ay.timeline()
              .to(".page-transition--inner", { yPercent: 0, duration: 0.2 })
              .to(".page-transition--inner", { yPercent: -100, duration: 0.2 })
              .to(".page-transition", { yPercent: -100 });
          }),
          (0, r.jsxs)("div", {
            children: [
              (0, r.jsx)("div", {
                className:
                  "page-transition w-screen h-screen fixed top-0 left-0 bg-background-light z-[5]",
                children: (0, r.jsx)("div", {
                  className:
                    "page-transition--inner w-screen h-screen fixed top-0 left-0 bg-primary z-[5] translate-y-full",
                }),
              }),
              n,
            ],
          })
        );
      }
      s.Ay.registerPlugin(i.L);
    },
    8294: (e, n, t) => {
      Promise.resolve().then(t.bind(t, 5643));
    },
  },
  (e) => {
    var n = (n) => e((e.s = n));
    e.O(0, [461, 272, 910, 969, 358], () => n(8294)), (_N_E = e.O());
  },
]);
