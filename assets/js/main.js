(function () {
  "use strict";

  const EASE = "cubic-bezier(0.22, 0.61, 0.36, 1)";

  function initReveal(root) {
    root = root || document;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const elements = root.querySelectorAll("[data-reveal]");
    elements.forEach(function (el) {
      el.style.opacity = "0";
      el.style.transform = "translateY(28px)";
      el.style.transition = "opacity 0.8s " + EASE + ", transform 0.8s " + EASE;
      var delay = Number(el.dataset.delay || 0);
      if (delay) el.style.transitionDelay = delay + "s";
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.unobserve(el);
          el.addEventListener(
            "transitionend",
            function () {
              el.style.opacity = "";
              el.style.transform = "";
              el.style.transition = "";
              el.style.transitionDelay = "";
            },
            { once: true }
          );
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  function initTextType(container) {
    if (!container) return;

    var texts = JSON.parse(container.dataset.texts || '[""]');
    var typingSpeed = Number(container.dataset.typingSpeed || 45);
    var pauseDuration = Number(container.dataset.pauseDuration || 1800);
    var deletingSpeed = Number(container.dataset.deletingSpeed || 25);
    var loop = container.dataset.loop !== "false";
    var startOnVisible = container.dataset.startOnVisible === "true";
    var color = container.dataset.color || "inherit";

    var contentEl = container.querySelector(".text-type__content");
    var cursorEl = container.querySelector(".text-type__cursor");

    var textIndex = 0;
    var charIndex = 0;
    var isDeleting = false;
    var displayed = "";
    var started = !startOnVisible;
    var timer;

    if (cursorEl) {
      var visible = true;
      setInterval(function () {
        visible = !visible;
        cursorEl.style.opacity = visible ? "1" : "0";
      }, 500);
    }

    function tick() {
      var current = texts[textIndex];

      if (isDeleting) {
        if (displayed.length === 0) {
          isDeleting = false;
          textIndex = loop ? (textIndex + 1) % texts.length : Math.min(textIndex + 1, texts.length - 1);
          charIndex = 0;
          timer = setTimeout(tick, pauseDuration);
          return;
        }
        displayed = displayed.slice(0, -1);
        contentEl.textContent = displayed;
        timer = setTimeout(tick, deletingSpeed);
        return;
      }

      if (charIndex < current.length) {
        displayed += current[charIndex++];
        contentEl.textContent = displayed;
        contentEl.style.color = color;
        timer = setTimeout(tick, typingSpeed);
        return;
      }

      if (!loop && textIndex === texts.length - 1) return;
      timer = setTimeout(function () {
        isDeleting = true;
        tick();
      }, pauseDuration);
    }

    function start() {
      if (started) return;
      started = true;
      tick();
    }

    if (startOnVisible) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              start();
              observer.disconnect();
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(container);
    } else {
      start();
    }
  }

  function initAllTextTypes() {
    document.querySelectorAll("[data-text-type]").forEach(initTextType);
  }

  function initNavbar() {
    var nav = document.getElementById("site-nav");
    var menuBtn = document.getElementById("mobile-menu-open");
    var closeBtn = document.getElementById("mobile-menu-close");
    var overlay = document.getElementById("mobile-menu-overlay");
    var panel = document.getElementById("mobile-menu-panel");
    var backdrop = document.getElementById("mobile-menu-backdrop");

    if (!nav) return;

    function onScroll() {
      nav.classList.toggle("nav-scrolled", window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    function openMenu() {
      if (overlay) overlay.classList.remove("opacity-0", "pointer-events-none");
      if (panel) panel.classList.remove("translate-x-full");
      document.body.style.overflow = "hidden";
    }

    function closeMenu() {
      if (overlay) overlay.classList.add("opacity-0", "pointer-events-none");
      if (panel) panel.classList.add("translate-x-full");
      document.body.style.overflow = "";
    }

    if (menuBtn) menuBtn.addEventListener("click", openMenu);
    if (closeBtn) closeBtn.addEventListener("click", closeMenu);
    if (backdrop) backdrop.addEventListener("click", closeMenu);
    if (panel) {
      panel.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", closeMenu);
      });
    }

    var current = window.location.pathname.split("/").pop() || "home.html";
    document.querySelectorAll("[data-nav-link]").forEach(function (link) {
      var href = link.getAttribute("href");
      if (href && href.split("/").pop() === current) {
        link.classList.add("text-primary", "font-semibold");
        link.classList.remove("text-white/90");
      }
    });
  }

  function initMigrationModal() {
    var modal = document.getElementById("migration-modal");
    if (!modal) return;

    var openBtns = document.querySelectorAll("[data-open-migration-modal]");
    var closeBtns = modal.querySelectorAll("[data-close-migration-modal]");
    var backdrop = modal.querySelector("[data-migration-backdrop]");
    var tabDemo = modal.querySelector('[data-migration-tab="demo"]');
    var tabTrial = modal.querySelector('[data-migration-tab="trial"]');
    var titleEl = modal.querySelector("[data-migration-title]");
    var subtitleEl = modal.querySelector("[data-migration-subtitle]");
    var form = modal.querySelector("#migration-form");
    var activeTab = "trial";

    function setTab(tab) {
      activeTab = tab;
      if (tabDemo) {
        tabDemo.classList.toggle("bg-[#00C4D4]", tab === "demo");
        tabDemo.classList.toggle("text-slate-950", tab === "demo");
        tabDemo.classList.toggle("font-bold", tab === "demo");
        tabDemo.classList.toggle("text-slate-400", tab !== "demo");
      }
      if (tabTrial) {
        tabTrial.classList.toggle("bg-[#FACC15]", tab === "trial");
        tabTrial.classList.toggle("text-slate-950", tab === "trial");
        tabTrial.classList.toggle("font-bold", tab === "trial");
        tabTrial.classList.toggle("text-slate-400", tab !== "trial");
      }
      if (titleEl) {
        titleEl.textContent =
          tab === "trial"
            ? "Activate Your 30-Day Free Workspace"
            : "Schedule Your Guided Platform Tour";
      }
      if (subtitleEl) {
        subtitleEl.textContent =
          tab === "trial"
            ? "Full access to all 16 capabilities. No credit card required. Instant activation."
            : "See how EkklésiaOne unifies your church software in a 25-minute tailored walkthrough.";
      }
    }

    function open() {
      modal.classList.remove("hidden");
      document.body.style.overflow = "hidden";
      setTab("trial");
    }

    function close() {
      modal.classList.add("hidden");
      document.body.style.overflow = "";
    }

    openBtns.forEach(function (btn) {
      btn.addEventListener("click", open);
    });
    closeBtns.forEach(function (btn) {
      btn.addEventListener("click", close);
    });
    if (backdrop) backdrop.addEventListener("click", close);
    if (tabDemo) tabDemo.addEventListener("click", function () { setTab("demo"); });
    if (tabTrial) tabTrial.addEventListener("click", function () { setTab("trial"); });

    window.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !modal.classList.contains("hidden")) close();
    });

    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        console.log("Submitted Migration Form:", { activeTab: activeTab });
        close();
      });
    }
  }

  function initFaqAccordion() {
    var items = document.querySelectorAll("[data-faq-item]");

    items.forEach(function (item, index) {
      var button = item.querySelector("[data-faq-trigger]");
      var panel = item.querySelector("[data-faq-panel]");
      var icon = item.querySelector("[data-faq-icon]");

      function setOpen(open) {
        item.classList.toggle("border-primary/30", open);
        item.classList.toggle("bg-cream", open);
        item.classList.toggle("shadow-soft", open);
        item.classList.toggle("border-slate-200", !open);
        item.classList.toggle("bg-white", !open);

        if (panel) {
          panel.classList.toggle("grid-rows-[1fr]", open);
          panel.classList.toggle("opacity-100", open);
          panel.classList.toggle("grid-rows-[0fr]", !open);
          panel.classList.toggle("opacity-0", !open);
        }

        if (icon) {
          icon.classList.toggle("bg-primary", open);
          icon.classList.toggle("text-white", open);
          icon.classList.toggle("rotate-180", open);
          icon.classList.toggle("bg-slate-100", !open);
          icon.classList.toggle("text-slate-500", !open);
        }
      }

      setOpen(index === 0);

      if (button) {
        button.addEventListener("click", function () {
          items.forEach(function (other) {
            var otherPanel = other.querySelector("[data-faq-panel]");
            var wasOpen = otherPanel && otherPanel.classList.contains("grid-rows-[1fr]");
            if (other === item) {
              setOpen(!wasOpen);
            } else {
              setOpen(false);
            }
          });
        });
      }
    });
  }

  function initContactForm() {
    var form = document.getElementById("contact-form");
    var success = document.getElementById("contact-success");
    if (!form || !success) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      form.reset();
      success.classList.remove("hidden");
      setTimeout(function () {
        success.classList.add("hidden");
      }, 4000);
    });
  }

  function initSmoothScroll() {
    if (!window.Lenis) return;
    var lenis = new window.Lenis({ lerp: 0.12, smoothWheel: true });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  function initHeroAnimations() {
    document.querySelectorAll("[data-hero-animate]").forEach(function (el, i) {
      el.style.opacity = "0";
      el.style.transform = "translateY(36px)";
      el.style.transition =
        "opacity 0.8s cubic-bezier(0.22, 0.61, 0.36, 1), transform 0.8s cubic-bezier(0.22, 0.61, 0.36, 1)";
      el.style.transitionDelay = i * 0.12 + "s";
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        });
      });
    });

    var heroImage = document.querySelector("[data-hero-image]");
    if (heroImage) {
      heroImage.style.opacity = "0";
      heroImage.style.transform = "translateX(50px)";
      heroImage.style.transition =
        "opacity 0.9s cubic-bezier(0.22, 0.61, 0.36, 1) 0.35s, transform 0.9s cubic-bezier(0.22, 0.61, 0.36, 1) 0.35s";
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          heroImage.style.opacity = "1";
          heroImage.style.transform = "translateX(0)";
        });
      });
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    initNavbar();
    initReveal();
    initAllTextTypes();
    initMigrationModal();
    initHeroAnimations();
    initFaqAccordion();
    initContactForm();
    initSmoothScroll();

    if (window.lucide && window.lucide.createIcons) {
      window.lucide.createIcons();
    }
  });
})();
