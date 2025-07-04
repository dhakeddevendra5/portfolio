(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [783],
  {
    1301: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        Object.defineProperty(e, "setAttributesFromProps", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let i = {
          acceptCharset: "accept-charset",
          className: "class",
          htmlFor: "for",
          httpEquiv: "http-equiv",
          noModule: "noModule",
        },
        s = [
          "onLoad",
          "onReady",
          "dangerouslySetInnerHTML",
          "children",
          "onError",
          "strategy",
          "stylesheets",
        ];
      function n(t) {
        return ["async", "defer", "noModule"].includes(t);
      }
      function r(t, e) {
        for (let [r, o] of Object.entries(e)) {
          if (!e.hasOwnProperty(r) || s.includes(r) || void 0 === o) continue;
          let l = i[r] || r.toLowerCase();
          "SCRIPT" === t.tagName && n(l)
            ? (t[l] = !!o)
            : t.setAttribute(l, String(o)),
            (!1 === o ||
              ("SCRIPT" === t.tagName && n(l) && (!o || "false" === o))) &&
              (t.setAttribute(l, ""), t.removeAttribute(l));
        }
      }
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    1909: (t, e, i) => {
      "use strict";
      function s(t, e, i) {
        return Math.max(t, Math.min(e, i));
      }
      i.d(e, { ReactLenis: () => m });
      var n = class {
          isRunning = !1;
          value = 0;
          from = 0;
          to = 0;
          currentTime = 0;
          lerp;
          duration;
          easing;
          onUpdate;
          advance(t) {
            if (!this.isRunning) return;
            let e = !1;
            if (this.duration && this.easing) {
              this.currentTime += t;
              let i = s(0, this.currentTime / this.duration, 1),
                n = (e = i >= 1) ? 1 : this.easing(i);
              this.value = this.from + (this.to - this.from) * n;
            } else if (this.lerp) {
              var i, n, r;
              (this.value =
                ((i = this.value),
                (n = this.to),
                (1 - (r = 1 - Math.exp(-(60 * this.lerp) * t))) * i + r * n)),
                Math.round(this.value) === this.to &&
                  ((this.value = this.to), (e = !0));
            } else (this.value = this.to), (e = !0);
            e && this.stop(), this.onUpdate?.(this.value, e);
          }
          stop() {
            this.isRunning = !1;
          }
          fromTo(
            t,
            e,
            { lerp: i, duration: s, easing: n, onStart: r, onUpdate: o }
          ) {
            (this.from = this.value = t),
              (this.to = e),
              (this.lerp = i),
              (this.duration = s),
              (this.easing = n),
              (this.currentTime = 0),
              (this.isRunning = !0),
              r?.(),
              (this.onUpdate = o);
          }
        },
        r = class {
          constructor(t, e, { autoResize: i = !0, debounce: s = 250 } = {}) {
            (this.wrapper = t),
              (this.content = e),
              i &&
                ((this.debouncedResize = (function (t, e) {
                  let i;
                  return function (...s) {
                    let n = this;
                    clearTimeout(i),
                      (i = setTimeout(() => {
                        (i = void 0), t.apply(n, s);
                      }, e));
                  };
                })(this.resize, s)),
                this.wrapper instanceof Window
                  ? window.addEventListener("resize", this.debouncedResize, !1)
                  : ((this.wrapperResizeObserver = new ResizeObserver(
                      this.debouncedResize
                    )),
                    this.wrapperResizeObserver.observe(this.wrapper)),
                (this.contentResizeObserver = new ResizeObserver(
                  this.debouncedResize
                )),
                this.contentResizeObserver.observe(this.content)),
              this.resize();
          }
          width = 0;
          height = 0;
          scrollHeight = 0;
          scrollWidth = 0;
          debouncedResize;
          wrapperResizeObserver;
          contentResizeObserver;
          destroy() {
            this.wrapperResizeObserver?.disconnect(),
              this.contentResizeObserver?.disconnect(),
              this.wrapper === window &&
                this.debouncedResize &&
                window.removeEventListener("resize", this.debouncedResize, !1);
          }
          resize = () => {
            this.onWrapperResize(), this.onContentResize();
          };
          onWrapperResize = () => {
            this.wrapper instanceof Window
              ? ((this.width = window.innerWidth),
                (this.height = window.innerHeight))
              : ((this.width = this.wrapper.clientWidth),
                (this.height = this.wrapper.clientHeight));
          };
          onContentResize = () => {
            this.wrapper instanceof Window
              ? ((this.scrollHeight = this.content.scrollHeight),
                (this.scrollWidth = this.content.scrollWidth))
              : ((this.scrollHeight = this.wrapper.scrollHeight),
                (this.scrollWidth = this.wrapper.scrollWidth));
          };
          get limit() {
            return {
              x: this.scrollWidth - this.width,
              y: this.scrollHeight - this.height,
            };
          }
        },
        o = class {
          events = {};
          emit(t, ...e) {
            let i = this.events[t] || [];
            for (let t = 0, s = i.length; t < s; t++) i[t]?.(...e);
          }
          on(t, e) {
            return (
              this.events[t]?.push(e) || (this.events[t] = [e]),
              () => {
                this.events[t] = this.events[t]?.filter((t) => e !== t);
              }
            );
          }
          off(t, e) {
            this.events[t] = this.events[t]?.filter((t) => e !== t);
          }
          destroy() {
            this.events = {};
          }
        },
        l = 100 / 6,
        a = { passive: !1 },
        h = class {
          constructor(t, e = { wheelMultiplier: 1, touchMultiplier: 1 }) {
            (this.element = t),
              (this.options = e),
              window.addEventListener("resize", this.onWindowResize, !1),
              this.onWindowResize(),
              this.element.addEventListener("wheel", this.onWheel, a),
              this.element.addEventListener("touchstart", this.onTouchStart, a),
              this.element.addEventListener("touchmove", this.onTouchMove, a),
              this.element.addEventListener("touchend", this.onTouchEnd, a);
          }
          touchStart = { x: 0, y: 0 };
          lastDelta = { x: 0, y: 0 };
          window = { width: 0, height: 0 };
          emitter = new o();
          on(t, e) {
            return this.emitter.on(t, e);
          }
          destroy() {
            this.emitter.destroy(),
              window.removeEventListener("resize", this.onWindowResize, !1),
              this.element.removeEventListener("wheel", this.onWheel, a),
              this.element.removeEventListener(
                "touchstart",
                this.onTouchStart,
                a
              ),
              this.element.removeEventListener(
                "touchmove",
                this.onTouchMove,
                a
              ),
              this.element.removeEventListener("touchend", this.onTouchEnd, a);
          }
          onTouchStart = (t) => {
            let { clientX: e, clientY: i } = t.targetTouches
              ? t.targetTouches[0]
              : t;
            (this.touchStart.x = e),
              (this.touchStart.y = i),
              (this.lastDelta = { x: 0, y: 0 }),
              this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: t });
          };
          onTouchMove = (t) => {
            let { clientX: e, clientY: i } = t.targetTouches
                ? t.targetTouches[0]
                : t,
              s = -(e - this.touchStart.x) * this.options.touchMultiplier,
              n = -(i - this.touchStart.y) * this.options.touchMultiplier;
            (this.touchStart.x = e),
              (this.touchStart.y = i),
              (this.lastDelta = { x: s, y: n }),
              this.emitter.emit("scroll", { deltaX: s, deltaY: n, event: t });
          };
          onTouchEnd = (t) => {
            this.emitter.emit("scroll", {
              deltaX: this.lastDelta.x,
              deltaY: this.lastDelta.y,
              event: t,
            });
          };
          onWheel = (t) => {
            let { deltaX: e, deltaY: i, deltaMode: s } = t,
              n = 1 === s ? l : 2 === s ? this.window.width : 1,
              r = 1 === s ? l : 2 === s ? this.window.height : 1;
            (e *= n),
              (i *= r),
              (e *= this.options.wheelMultiplier),
              (i *= this.options.wheelMultiplier),
              this.emitter.emit("scroll", { deltaX: e, deltaY: i, event: t });
          };
          onWindowResize = () => {
            this.window = {
              width: window.innerWidth,
              height: window.innerHeight,
            };
          };
        },
        c = class {
          _isScrolling = !1;
          _isStopped = !1;
          _isLocked = !1;
          _preventNextNativeScrollEvent = !1;
          _resetVelocityTimeout = null;
          __rafID = null;
          isTouching;
          time = 0;
          userData = {};
          lastVelocity = 0;
          velocity = 0;
          direction = 0;
          options;
          targetScroll;
          animatedScroll;
          animate = new n();
          emitter = new o();
          dimensions;
          virtualScroll;
          constructor({
            wrapper: t = window,
            content: e = document.documentElement,
            eventsTarget: i = t,
            smoothWheel: s = !0,
            syncTouch: n = !1,
            syncTouchLerp: o = 0.075,
            touchInertiaMultiplier: l = 35,
            duration: a,
            easing: c = (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            lerp: u = 0.1,
            infinite: d = !1,
            orientation: p = "vertical",
            gestureOrientation: f = "vertical",
            touchMultiplier: m = 1,
            wheelMultiplier: g = 1,
            autoResize: v = !0,
            prevent: w,
            virtualScroll: y,
            overscroll: S = !0,
            autoRaf: _ = !1,
            __experimental__naiveDimensions: b = !1,
          } = {}) {
            (window.lenisVersion = "1.1.16"),
              (t && t !== document.documentElement && t !== document.body) ||
                (t = window),
              (this.options = {
                wrapper: t,
                content: e,
                eventsTarget: i,
                smoothWheel: s,
                syncTouch: n,
                syncTouchLerp: o,
                touchInertiaMultiplier: l,
                duration: a,
                easing: c,
                lerp: u,
                infinite: d,
                gestureOrientation: f,
                orientation: p,
                touchMultiplier: m,
                wheelMultiplier: g,
                autoResize: v,
                prevent: w,
                virtualScroll: y,
                overscroll: S,
                autoRaf: _,
                __experimental__naiveDimensions: b,
              }),
              (this.dimensions = new r(t, e, { autoResize: v })),
              this.updateClassName(),
              (this.targetScroll = this.animatedScroll = this.actualScroll),
              this.options.wrapper.addEventListener(
                "scroll",
                this.onNativeScroll,
                !1
              ),
              this.options.wrapper.addEventListener(
                "pointerdown",
                this.onPointerDown,
                !1
              ),
              (this.virtualScroll = new h(i, {
                touchMultiplier: m,
                wheelMultiplier: g,
              })),
              this.virtualScroll.on("scroll", this.onVirtualScroll),
              this.options.autoRaf &&
                (this.__rafID = requestAnimationFrame(this.raf));
          }
          destroy() {
            this.emitter.destroy(),
              this.options.wrapper.removeEventListener(
                "scroll",
                this.onNativeScroll,
                !1
              ),
              this.options.wrapper.removeEventListener(
                "pointerdown",
                this.onPointerDown,
                !1
              ),
              this.virtualScroll.destroy(),
              this.dimensions.destroy(),
              this.cleanUpClassName(),
              this.__rafID && cancelAnimationFrame(this.__rafID);
          }
          on(t, e) {
            return this.emitter.on(t, e);
          }
          off(t, e) {
            return this.emitter.off(t, e);
          }
          setScroll(t) {
            this.isHorizontal
              ? (this.rootElement.scrollLeft = t)
              : (this.rootElement.scrollTop = t);
          }
          onPointerDown = (t) => {
            1 === t.button && this.reset();
          };
          onVirtualScroll = (t) => {
            if (
              "function" == typeof this.options.virtualScroll &&
              !1 === this.options.virtualScroll(t)
            )
              return;
            let { deltaX: e, deltaY: i, event: s } = t;
            if (
              (this.emitter.emit("virtual-scroll", {
                deltaX: e,
                deltaY: i,
                event: s,
              }),
              s.ctrlKey || s.lenisStopPropagation)
            )
              return;
            let n = s.type.includes("touch"),
              r = s.type.includes("wheel");
            if (
              ((this.isTouching =
                "touchstart" === s.type || "touchmove" === s.type),
              this.options.syncTouch &&
                n &&
                "touchstart" === s.type &&
                !this.isStopped &&
                !this.isLocked)
            ) {
              this.reset();
              return;
            }
            let o = 0 === e && 0 === i,
              l =
                ("vertical" === this.options.gestureOrientation && 0 === i) ||
                ("horizontal" === this.options.gestureOrientation && 0 === e);
            if (o || l) return;
            let a = s.composedPath();
            a = a.slice(0, a.indexOf(this.rootElement));
            let h = this.options.prevent;
            if (
              a.find(
                (t) =>
                  t instanceof HTMLElement &&
                  (("function" == typeof h && h?.(t)) ||
                    t.hasAttribute?.("data-lenis-prevent") ||
                    (n && t.hasAttribute?.("data-lenis-prevent-touch")) ||
                    (r && t.hasAttribute?.("data-lenis-prevent-wheel")))
              )
            )
              return;
            if (this.isStopped || this.isLocked) {
              s.preventDefault();
              return;
            }
            if (
              !(
                (this.options.syncTouch && n) ||
                (this.options.smoothWheel && r)
              )
            ) {
              (this.isScrolling = "native"),
                this.animate.stop(),
                (s.lenisStopPropagation = !0);
              return;
            }
            let c = i;
            "both" === this.options.gestureOrientation
              ? (c = Math.abs(i) > Math.abs(e) ? i : e)
              : "horizontal" === this.options.gestureOrientation && (c = e),
              (!this.options.overscroll ||
                this.options.infinite ||
                (this.options.wrapper !== window &&
                  ((this.animatedScroll > 0 &&
                    this.animatedScroll < this.limit) ||
                    (0 === this.animatedScroll && i > 0) ||
                    (this.animatedScroll === this.limit && i < 0)))) &&
                (s.lenisStopPropagation = !0),
              s.preventDefault();
            let u = n && this.options.syncTouch,
              d = n && "touchend" === s.type && Math.abs(c) > 5;
            d && (c = this.velocity * this.options.touchInertiaMultiplier),
              this.scrollTo(this.targetScroll + c, {
                programmatic: !1,
                ...(u
                  ? { lerp: d ? this.options.syncTouchLerp : 1 }
                  : {
                      lerp: this.options.lerp,
                      duration: this.options.duration,
                      easing: this.options.easing,
                    }),
              });
          };
          resize() {
            this.dimensions.resize(),
              (this.animatedScroll = this.targetScroll = this.actualScroll),
              this.emit();
          }
          emit() {
            this.emitter.emit("scroll", this);
          }
          onNativeScroll = () => {
            if (
              (null !== this._resetVelocityTimeout &&
                (clearTimeout(this._resetVelocityTimeout),
                (this._resetVelocityTimeout = null)),
              this._preventNextNativeScrollEvent)
            ) {
              this._preventNextNativeScrollEvent = !1;
              return;
            }
            if (!1 === this.isScrolling || "native" === this.isScrolling) {
              let t = this.animatedScroll;
              (this.animatedScroll = this.targetScroll = this.actualScroll),
                (this.lastVelocity = this.velocity),
                (this.velocity = this.animatedScroll - t),
                (this.direction = Math.sign(this.animatedScroll - t)),
                (this.isScrolling = "native"),
                this.emit(),
                0 !== this.velocity &&
                  (this._resetVelocityTimeout = setTimeout(() => {
                    (this.lastVelocity = this.velocity),
                      (this.velocity = 0),
                      (this.isScrolling = !1),
                      this.emit();
                  }, 400));
            }
          };
          reset() {
            (this.isLocked = !1),
              (this.isScrolling = !1),
              (this.animatedScroll = this.targetScroll = this.actualScroll),
              (this.lastVelocity = this.velocity = 0),
              this.animate.stop();
          }
          start() {
            this.isStopped && ((this.isStopped = !1), this.reset());
          }
          stop() {
            this.isStopped ||
              ((this.isStopped = !0), this.animate.stop(), this.reset());
          }
          raf = (t) => {
            let e = t - (this.time || t);
            (this.time = t),
              this.animate.advance(0.001 * e),
              this.options.autoRaf &&
                (this.__rafID = requestAnimationFrame(this.raf));
          };
          scrollTo(
            t,
            {
              offset: e = 0,
              immediate: i = !1,
              lock: n = !1,
              duration: r = this.options.duration,
              easing: o = this.options.easing,
              lerp: l = this.options.lerp,
              onStart: a,
              onComplete: h,
              force: c = !1,
              programmatic: u = !0,
              userData: d,
            } = {}
          ) {
            if ((!this.isStopped && !this.isLocked) || c) {
              if ("string" == typeof t && ["top", "left", "start"].includes(t))
                t = 0;
              else if (
                "string" == typeof t &&
                ["bottom", "right", "end"].includes(t)
              )
                t = this.limit;
              else {
                let i;
                if (
                  ("string" == typeof t
                    ? (i = document.querySelector(t))
                    : t instanceof HTMLElement && t?.nodeType && (i = t),
                  i)
                ) {
                  if (this.options.wrapper !== window) {
                    let t = this.rootElement.getBoundingClientRect();
                    e -= this.isHorizontal ? t.left : t.top;
                  }
                  let s = i.getBoundingClientRect();
                  t =
                    (this.isHorizontal ? s.left : s.top) + this.animatedScroll;
                }
              }
              if ("number" == typeof t) {
                if (
                  ((t += e),
                  (t = Math.round(t)),
                  this.options.infinite
                    ? u &&
                      (this.targetScroll = this.animatedScroll = this.scroll)
                    : (t = s(0, t, this.limit)),
                  t === this.targetScroll)
                ) {
                  a?.(this), h?.(this);
                  return;
                }
                if (((this.userData = d ?? {}), i)) {
                  (this.animatedScroll = this.targetScroll = t),
                    this.setScroll(this.scroll),
                    this.reset(),
                    this.preventNextNativeScrollEvent(),
                    this.emit(),
                    h?.(this),
                    (this.userData = {});
                  return;
                }
                u || (this.targetScroll = t),
                  this.animate.fromTo(this.animatedScroll, t, {
                    duration: r,
                    easing: o,
                    lerp: l,
                    onStart: () => {
                      n && (this.isLocked = !0),
                        (this.isScrolling = "smooth"),
                        a?.(this);
                    },
                    onUpdate: (t, e) => {
                      (this.isScrolling = "smooth"),
                        (this.lastVelocity = this.velocity),
                        (this.velocity = t - this.animatedScroll),
                        (this.direction = Math.sign(this.velocity)),
                        (this.animatedScroll = t),
                        this.setScroll(this.scroll),
                        u && (this.targetScroll = t),
                        e || this.emit(),
                        e &&
                          (this.reset(),
                          this.emit(),
                          h?.(this),
                          (this.userData = {}),
                          this.preventNextNativeScrollEvent());
                    },
                  });
              }
            }
          }
          preventNextNativeScrollEvent() {
            (this._preventNextNativeScrollEvent = !0),
              requestAnimationFrame(() => {
                this._preventNextNativeScrollEvent = !1;
              });
          }
          get rootElement() {
            return this.options.wrapper === window
              ? document.documentElement
              : this.options.wrapper;
          }
          get limit() {
            return this.options.__experimental__naiveDimensions
              ? this.isHorizontal
                ? this.rootElement.scrollWidth - this.rootElement.clientWidth
                : this.rootElement.scrollHeight - this.rootElement.clientHeight
              : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
          }
          get isHorizontal() {
            return "horizontal" === this.options.orientation;
          }
          get actualScroll() {
            return this.isHorizontal
              ? this.rootElement.scrollLeft
              : this.rootElement.scrollTop;
          }
          get scroll() {
            var t;
            return this.options.infinite
              ? ((this.animatedScroll % (t = this.limit)) + t) % t
              : this.animatedScroll;
          }
          get progress() {
            return 0 === this.limit ? 1 : this.scroll / this.limit;
          }
          get isScrolling() {
            return this._isScrolling;
          }
          set isScrolling(t) {
            this._isScrolling !== t &&
              ((this._isScrolling = t), this.updateClassName());
          }
          get isStopped() {
            return this._isStopped;
          }
          set isStopped(t) {
            this._isStopped !== t &&
              ((this._isStopped = t), this.updateClassName());
          }
          get isLocked() {
            return this._isLocked;
          }
          set isLocked(t) {
            this._isLocked !== t &&
              ((this._isLocked = t), this.updateClassName());
          }
          get isSmooth() {
            return "smooth" === this.isScrolling;
          }
          get className() {
            let t = "lenis";
            return (
              this.isStopped && (t += " lenis-stopped"),
              this.isLocked && (t += " lenis-locked"),
              this.isScrolling && (t += " lenis-scrolling"),
              "smooth" === this.isScrolling && (t += " lenis-smooth"),
              t
            );
          }
          updateClassName() {
            this.cleanUpClassName(),
              (this.rootElement.className =
                `${this.rootElement.className} ${this.className}`.trim());
          }
          cleanUpClassName() {
            this.rootElement.className = this.rootElement.className
              .replace(/lenis(-\w+)?/g, "")
              .trim();
          }
        },
        u = i(3045),
        d = i(3345),
        p = (0, u.createContext)(null),
        f = new (class {
          set(t) {
            for (let e of ((this.state = t), this.listeners)) e(this.state);
          }
          subscribe(t) {
            return (
              (this.listeners = [...this.listeners, t]),
              () => {
                this.listeners = this.listeners.filter((e) => e !== t);
              }
            );
          }
          get() {
            return this.state;
          }
          constructor(t) {
            (this.listeners = []), (this.state = t);
          }
        })(null),
        m = (0, u.forwardRef)((t, e) => {
          let {
              children: i,
              root: s = !1,
              options: n = {},
              className: r,
              autoRaf: o = !0,
              props: l,
            } = t,
            a = (0, u.useRef)(null),
            h = (0, u.useRef)(null),
            [m, g] = (0, u.useState)(void 0);
          (0, u.useImperativeHandle)(
            e,
            () => ({ wrapper: a.current, content: h.current, lenis: m }),
            [m]
          ),
            (0, u.useEffect)(() => {
              var t;
              let e = new c({
                ...n,
                ...(!s && { wrapper: a.current, content: h.current }),
                autoRaf:
                  null !== (t = null == n ? void 0 : n.autoRaf) && void 0 !== t
                    ? t
                    : o,
              });
              return (
                g(e),
                () => {
                  e.destroy(), g(void 0);
                }
              );
            }, [s, JSON.stringify(n)]);
          let v = (0, u.useRef)([]),
            w = (0, u.useCallback)((t, e) => {
              v.current.push({ callback: t, priority: e }),
                v.current.sort((t, e) => t.priority - e.priority);
            }, []),
            y = (0, u.useCallback)((t) => {
              v.current = v.current.filter((e) => e.callback !== t);
            }, []);
          return (
            (0, u.useEffect)(() => {
              if (s && m)
                return (
                  f.set({ lenis: m, addCallback: w, removeCallback: y }),
                  () => f.set(null)
                );
            }, [s, m, w, y]),
            (0, u.useEffect)(() => {
              if (!m) return;
              let t = (t) => {
                for (let i = 0; i < v.current.length; i++) {
                  var e;
                  null === (e = v.current[i]) || void 0 === e || e.callback(t);
                }
              };
              return (
                m.on("scroll", t),
                () => {
                  m.off("scroll", t);
                }
              );
            }, [m]),
            (0, d.jsx)(p.Provider, {
              value: { lenis: m, addCallback: w, removeCallback: y },
              children: s
                ? i
                : (0, d.jsx)("div", {
                    ref: a,
                    className: r,
                    ...l,
                    children: (0, d.jsx)("div", { ref: h, children: i }),
                  }),
            })
          );
        });
    },
    3048: (t, e, i) => {
      "use strict";
      i.d(e, { A: () => a });
      var s = i(3045);
      let n = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        r = function () {
          for (var t = arguments.length, e = Array(t), i = 0; i < t; i++)
            e[i] = arguments[i];
          return e
            .filter((t, e, i) => !!t && "" !== t.trim() && i.indexOf(t) === e)
            .join(" ")
            .trim();
        };
      var o = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      };
      let l = (0, s.forwardRef)((t, e) => {
          let {
            color: i = "currentColor",
            size: n = 24,
            strokeWidth: l = 2,
            absoluteStrokeWidth: a,
            className: h = "",
            children: c,
            iconNode: u,
            ...d
          } = t;
          return (0, s.createElement)(
            "svg",
            {
              ref: e,
              ...o,
              width: n,
              height: n,
              stroke: i,
              strokeWidth: a ? (24 * Number(l)) / Number(n) : l,
              className: r("lucide", h),
              ...d,
            },
            [
              ...u.map((t) => {
                let [e, i] = t;
                return (0, s.createElement)(e, i);
              }),
              ...(Array.isArray(c) ? c : [c]),
            ]
          );
        }),
        a = (t, e) => {
          let i = (0, s.forwardRef)((i, o) => {
            let { className: a, ...h } = i;
            return (0, s.createElement)(l, {
              ref: o,
              iconNode: e,
              className: r("lucide-".concat(n(t)), a),
              ...h,
            });
          });
          return (i.displayName = "".concat(t)), i;
        };
    },
    3294: (t, e, i) => {
      "use strict";
      i.d(e, { A: () => s });
      let s = (0, i(3048).A)("MoveUpRight", [
        ["path", { d: "M13 5H19V11", key: "1n1gyv" }],
        ["path", { d: "M19 5L5 19", key: "72u4yj" }],
      ]);
    },
    3478: (t) => {
      t.exports = {
        style: {
          fontFamily: "'Roboto Flex', 'Roboto Flex Fallback'",
          fontStyle: "normal",
        },
        className: "__className_fb12db",
        variable: "__variable_fb12db",
      };
    },
    3517: (t, e, i) => {
      "use strict";
      let s;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.GoogleAnalytics = function (t) {
          let {
            gaId: e,
            debugMode: i,
            dataLayerName: l = "dataLayer",
            nonce: a,
          } = t;
          return (
            void 0 === s && (s = l),
            (0, r.useEffect)(() => {
              performance.mark("mark_feature_usage", {
                detail: { feature: "next-third-parties-ga" },
              });
            }, []),
            (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(o.default, {
                  id: "_next-ga-init",
                  dangerouslySetInnerHTML: {
                    __html: "\n          window['"
                      .concat(l, "'] = window['")
                      .concat(
                        l,
                        "'] || [];\n          function gtag(){window['"
                      )
                      .concat(
                        l,
                        "'].push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '"
                      )
                      .concat(e, "' ")
                      .concat(i ? ",{ 'debug_mode': true }" : "", ");"),
                  },
                  nonce: a,
                }),
                (0, n.jsx)(o.default, {
                  id: "_next-ga",
                  src: "https://www.googletagmanager.com/gtag/js?id=".concat(e),
                  nonce: a,
                }),
              ],
            })
          );
        }),
        (e.sendGAEvent = function () {
          for (var t = arguments.length, e = Array(t), i = 0; i < t; i++)
            e[i] = arguments[i];
          if (void 0 === s) {
            console.warn("@next/third-parties: GA has not been initialized");
            return;
          }
          window[s]
            ? window[s].push(arguments)
            : console.warn(
                "@next/third-parties: GA dataLayer ".concat(
                  s,
                  " does not exist"
                )
              );
        });
      let n = i(3345),
        r = i(3045),
        o = (function (t) {
          return t && t.__esModule ? t : { default: t };
        })(i(7045));
    },
    5948: () => {},
    7045: (t, e, i) => {
      "use strict";
      i.r(e), i.d(e, { default: () => n.a });
      var s = i(8102),
        n = i.n(s),
        r = {};
      for (let t in s) "default" !== t && (r[t] = () => s[t]);
      i.d(e, r);
    },
    7100: (t) => {
      t.exports = {
        style: {
          fontFamily: "'Anton', 'Anton Fallback'",
          fontWeight: 400,
          fontStyle: "normal",
        },
        className: "__className_6fce18",
        variable: "__variable_6fce18",
      };
    },
    8102: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        !(function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          default: function () {
            return w;
          },
          handleClientScriptLoad: function () {
            return m;
          },
          initScriptLoader: function () {
            return g;
          },
        });
      let s = i(3726),
        n = i(2231),
        r = i(3345),
        o = s._(i(6280)),
        l = n._(i(3045)),
        a = i(5701),
        h = i(1301),
        c = i(9961),
        u = new Map(),
        d = new Set(),
        p = (t) => {
          if (o.default.preinit) {
            t.forEach((t) => {
              o.default.preinit(t, { as: "style" });
            });
            return;
          }
          if ("undefined" != typeof window) {
            let e = document.head;
            t.forEach((t) => {
              let i = document.createElement("link");
              (i.type = "text/css"),
                (i.rel = "stylesheet"),
                (i.href = t),
                e.appendChild(i);
            });
          }
        },
        f = (t) => {
          let {
              src: e,
              id: i,
              onLoad: s = () => {},
              onReady: n = null,
              dangerouslySetInnerHTML: r,
              children: o = "",
              strategy: l = "afterInteractive",
              onError: a,
              stylesheets: c,
            } = t,
            f = i || e;
          if (f && d.has(f)) return;
          if (u.has(e)) {
            d.add(f), u.get(e).then(s, a);
            return;
          }
          let m = () => {
              n && n(), d.add(f);
            },
            g = document.createElement("script"),
            v = new Promise((t, e) => {
              g.addEventListener("load", function (e) {
                t(), s && s.call(this, e), m();
              }),
                g.addEventListener("error", function (t) {
                  e(t);
                });
            }).catch(function (t) {
              a && a(t);
            });
          r
            ? ((g.innerHTML = r.__html || ""), m())
            : o
            ? ((g.textContent =
                "string" == typeof o ? o : Array.isArray(o) ? o.join("") : ""),
              m())
            : e && ((g.src = e), u.set(e, v)),
            (0, h.setAttributesFromProps)(g, t),
            "worker" === l && g.setAttribute("type", "text/partytown"),
            g.setAttribute("data-nscript", l),
            c && p(c),
            document.body.appendChild(g);
        };
      function m(t) {
        let { strategy: e = "afterInteractive" } = t;
        "lazyOnload" === e
          ? window.addEventListener("load", () => {
              (0, c.requestIdleCallback)(() => f(t));
            })
          : f(t);
      }
      function g(t) {
        t.forEach(m),
          [
            ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
            ...document.querySelectorAll('[data-nscript="beforePageRender"]'),
          ].forEach((t) => {
            let e = t.id || t.getAttribute("src");
            d.add(e);
          });
      }
      function v(t) {
        let {
            id: e,
            src: i = "",
            onLoad: s = () => {},
            onReady: n = null,
            strategy: h = "afterInteractive",
            onError: u,
            stylesheets: p,
            ...m
          } = t,
          {
            updateScripts: g,
            scripts: v,
            getIsSsr: w,
            appDir: y,
            nonce: S,
          } = (0, l.useContext)(a.HeadManagerContext),
          _ = (0, l.useRef)(!1);
        (0, l.useEffect)(() => {
          let t = e || i;
          _.current || (n && t && d.has(t) && n(), (_.current = !0));
        }, [n, e, i]);
        let b = (0, l.useRef)(!1);
        if (
          ((0, l.useEffect)(() => {
            if (!b.current) {
              if ("afterInteractive" === h) f(t);
              else if ("lazyOnload" === h)
                "complete" === document.readyState
                  ? (0, c.requestIdleCallback)(() => f(t))
                  : window.addEventListener("load", () => {
                      (0, c.requestIdleCallback)(() => f(t));
                    });
              b.current = !0;
            }
          }, [t, h]),
          ("beforeInteractive" === h || "worker" === h) &&
            (g
              ? ((v[h] = (v[h] || []).concat([
                  { id: e, src: i, onLoad: s, onReady: n, onError: u, ...m },
                ])),
                g(v))
              : w && w()
              ? d.add(e || i)
              : w && !w() && f(t)),
          y)
        ) {
          if (
            (p &&
              p.forEach((t) => {
                o.default.preinit(t, { as: "style" });
              }),
            "beforeInteractive" === h)
          )
            return i
              ? (o.default.preload(
                  i,
                  m.integrity
                    ? {
                        as: "script",
                        integrity: m.integrity,
                        nonce: S,
                        crossOrigin: m.crossOrigin,
                      }
                    : { as: "script", nonce: S, crossOrigin: m.crossOrigin }
                ),
                (0, r.jsx)("script", {
                  nonce: S,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([i, { ...m, id: e }]) +
                      ")",
                  },
                }))
              : (m.dangerouslySetInnerHTML &&
                  ((m.children = m.dangerouslySetInnerHTML.__html),
                  delete m.dangerouslySetInnerHTML),
                (0, r.jsx)("script", {
                  nonce: S,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([0, { ...m, id: e }]) +
                      ")",
                  },
                }));
          "afterInteractive" === h &&
            i &&
            o.default.preload(
              i,
              m.integrity
                ? {
                    as: "script",
                    integrity: m.integrity,
                    nonce: S,
                    crossOrigin: m.crossOrigin,
                  }
                : { as: "script", nonce: S, crossOrigin: m.crossOrigin }
            );
        }
        return null;
      }
      Object.defineProperty(v, "__nextScript", { value: !0 });
      let w = v;
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    8245: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.sendGTMEvent = void 0),
        (e.GoogleTagManager = function (t) {
          let {
            gtmId: e,
            gtmScriptUrl: i = "https://www.googletagmanager.com/gtm.js",
            dataLayerName: l = "dataLayer",
            auth: a,
            preview: h,
            dataLayer: c,
            nonce: u,
          } = t;
          o = l;
          let d = "dataLayer" !== l ? "&l=".concat(l) : "";
          return (
            (0, n.useEffect)(() => {
              performance.mark("mark_feature_usage", {
                detail: { feature: "next-third-parties-gtm" },
              });
            }, []),
            (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)(r.default, {
                  id: "_next-gtm-init",
                  dangerouslySetInnerHTML: {
                    __html:
                      "\n      (function(w,l){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        "
                        .concat(
                          c ? "w[l].push(".concat(JSON.stringify(c), ")") : "",
                          "\n      })(window,'"
                        )
                        .concat(l, "');"),
                  },
                  nonce: u,
                }),
                (0, s.jsx)(r.default, {
                  id: "_next-gtm",
                  "data-ntpc": "GTM",
                  src: ""
                    .concat(i, "?id=")
                    .concat(e)
                    .concat(d)
                    .concat(a ? "&gtm_auth=".concat(a) : "")
                    .concat(
                      h ? "&gtm_preview=".concat(h, "&gtm_cookies_win=x") : ""
                    ),
                  nonce: u,
                }),
              ],
            })
          );
        });
      let s = i(3345),
        n = i(3045),
        r = (function (t) {
          return t && t.__esModule ? t : { default: t };
        })(i(7045)),
        o = "dataLayer";
      e.sendGTMEvent = (t, e) => {
        let i = e || o;
        (window[i] = window[i] || []), window[i].push(t);
      };
    },
    8568: (t, e, i) => {
      "use strict";
      var s = i(4472);
      i.o(s, "useRouter") &&
        i.d(e, {
          useRouter: function () {
            return s.useRouter;
          },
        });
    },
    9961: (t, e) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        !(function (t, e) {
          for (var i in e)
            Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
        })(e, {
          cancelIdleCallback: function () {
            return s;
          },
          requestIdleCallback: function () {
            return i;
          },
        });
      let i =
          ("undefined" != typeof self &&
            self.requestIdleCallback &&
            self.requestIdleCallback.bind(window)) ||
          function (t) {
            let e = Date.now();
            return self.setTimeout(function () {
              t({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - e));
                },
              });
            }, 1);
          },
        s =
          ("undefined" != typeof self &&
            self.cancelIdleCallback &&
            self.cancelIdleCallback.bind(window)) ||
          function (t) {
            return clearTimeout(t);
          };
      ("function" == typeof e.default ||
        ("object" == typeof e.default && null !== e.default)) &&
        void 0 === e.default.__esModule &&
        (Object.defineProperty(e.default, "__esModule", { value: !0 }),
        Object.assign(e.default, e),
        (t.exports = e.default));
    },
    9988: (t, e, i) => {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = function (t) {
          let {
            html: e,
            height: i = null,
            width: r = null,
            children: o,
            dataNtpc: l = "",
          } = t;
          return (
            (0, n.useEffect)(() => {
              l &&
                performance.mark("mark_feature_usage", {
                  detail: { feature: "next-third-parties-".concat(l) },
                });
            }, [l]),
            (0, s.jsxs)(s.Fragment, {
              children: [
                o,
                e
                  ? (0, s.jsx)("div", {
                      style: {
                        height: null != i ? "".concat(i, "px") : "auto",
                        width: null != r ? "".concat(r, "px") : "auto",
                      },
                      "data-ntpc": l,
                      dangerouslySetInnerHTML: { __html: e },
                    })
                  : null,
              ],
            })
          );
        });
      let s = i(3345),
        n = i(3045);
    },
  },
]);
