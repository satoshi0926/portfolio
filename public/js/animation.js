// MVアニメーション
gsap.from(".mv-title", {
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
});

gsap.from(".mv-subtitle", {
    y: 40,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: "power2.out"
});

gsap.from(".mv-text", {
    y: 40,
    opacity: 0,
    duration: 1,
    delay: 0.6,
    ease: "power2.out"
});