// ==========================================================================
// メインビジュアル テキストフェードイン
// ==========================================================================
window.addEventListener("load", () => {
  const mainCopy = document.querySelector(".main__copy");
  const subCopy = document.querySelector(".sub__copy");

  gsap.fromTo(
    mainCopy,
    {
      autoAlpha: 0,
      filter: "blur(10px)",
    },
    {
      duration: 1,
      autoAlpha: 1,
      filter: "blur(0px)",
      ease: "power2.out",
    }
  );

  gsap.fromTo(
    subCopy,
    {
      autoAlpha: 0,
      filter: "blur(10px)",
    },
    {
      duration: 1,
      autoAlpha: 1,
      delay: 2,
      filter: "blur(0px)",
      ease: "power2.out",
    }
  );
});

// ==========================================================================
// aboutセクション フェードイン
// ==========================================================================

// 監視対象が現れたら実行する動作
const aboutFadein = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      gsap.utils.toArray(".about__img").forEach((img, index) => {
        gsap.fromTo(
          img,
          {
            autoAlpha: 0,
            filter: "blur(10px)",
          },
          {
            duration: 1,
            autoAlpha: 1,
            delay: index * 0.2,
            filter: "blur(0px)",
            ease: "power2.out",
          }
        );
      });

      // 監視解除（1回だけアニメーションしたい場合）
      observer.unobserve(entry.target);
    }
  });
};

// 監視の設定
const aboutObserver = new IntersectionObserver(aboutFadein, {
  threshold: 1,
});

// Aboutセクションを監視
aboutObserver.observe(document.querySelector("#about__imgArea"));

// ==========================================================================
// our activitiesセクション フェードイン
// ==========================================================================
const ourActivitiesItem = document.querySelectorAll(".our-Activities__item");

const ourActivitiesFadein = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      gsap.fromTo(
        entry.target,
        {
          autoAlpha: 0,
          filter: "blur(10px)",
        },
        {
          duration: 1.5,
          autoAlpha: 1,

          filter: "blur(0px)",
          ease: "power2.out",
        }
      );

      // 監視解除（1回だけアニメーションしたい場合）
      observer.unobserve(entry.target);
    }
  });
};
// 監視の設定
const ourActivitiesObserver = new IntersectionObserver(ourActivitiesFadein, {
  threshold: 1,
});

// ourActivitiesセクションのリストをそれぞれ監視
ourActivitiesItem.forEach((item) => {
  ourActivitiesObserver.observe(item);
});
