 window.onload = () => {
    const loading = document.getElementById("loading-screen");

    // ローディングを0.6秒で非表示
    setTimeout(() => {
      const loading = document.getElementById("loading-screen");
      loading.style.opacity = "0";
      loading.style.pointerEvents = "none";
      setTimeout(() => loading.remove(), 500); // 完全に消す

        // タイトルをふわっと
        gsap.from(".mv-title", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
        });

        // サブタイトルを少し遅れて
        gsap.from(".mv-subtitle", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power2.out"
        });

        // テキスト本文をさらに遅れて
        gsap.from(".mv-text", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.6,
        ease: "power2.out"
        });
    }, 600); // ローディング演出時間（ms）
  };