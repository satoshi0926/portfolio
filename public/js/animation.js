window.onload = () => {
  const loading = document.getElementById("loading-screen");

  // まずローディング画面をフェードアウト
  setTimeout(() => {
    loading.style.opacity = "0";
    loading.style.pointerEvents = "none";

    // ここで0.2秒後にGSAP開始（フェードアウト完了後）
    setTimeout(() => {
        loading.remove();

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

        }, 200); // ← フェードアウトが完了してからGSAP開始
    }, 500); // ローディング表示時間
};