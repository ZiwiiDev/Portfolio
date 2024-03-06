let $path = document.querySelector(".path"),
    $logo = document.querySelector(".logo"),
    repeat = false,
    animate = () => {
      const start = "M 0 100 V 50 Q 50 0 100 50 V 100 z";
      const end = "M 0 100 V 0 Q 50 0 100 0 V 100 z";
      new TimelineMax(repeat ? { paused: true } : {repeat: -1, repeatDelay: 1})
        .to($path, 0.8, {attr: { d: start }, ease: Power2.easeIn})
        .to($path, 0.4, {attr: { d: end }, ease: Power2.easeOut})
        .from($logo, .8, {y: 75}, '-=.8')
        .play(0);
    };

animate();
