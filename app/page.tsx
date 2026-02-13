"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

// ============ CUSTOMIZE YOUR VALENTINE'S WISH HERE ============
const CONFIG = {
  name: "Marvelyn",
  greetingText: "I really like your name btw!",
  wishText:
    "Every moment with you is a blessing. You make my world brighter, warmer, and infinitely more beautiful. ❤️",
  imagePath: "/vv.jpg",
};
// ==============================================================

export default function ValentinePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Split chars that need to be animated individually
    const textBoxChars = containerRef.current.querySelector(
      ".hbd-chatbox",
    ) as HTMLElement;
    const hbd = containerRef.current.querySelector(".wish-hbd") as HTMLElement;

    if (textBoxChars) {
      textBoxChars.innerHTML = `<span>${textBoxChars.innerText
        .split("")
        .join("</span><span>")}</span>`;
    }

    if (hbd) {
      hbd.innerHTML = `<span>${hbd.innerText
        .split("")
        .join("</span><span>")}</span>`;
    }

    const ideaTextTrans = {
      opacity: 0,
      y: -20,
      rotationX: 5,
      skewX: "15deg",
    };

    const ideaTextTransLeave = {
      opacity: 0,
      y: 20,
      rotationY: 5,
      skewX: "-15deg",
    };

    const tl = gsap.timeline();

    tl.to(".container", { duration: 0.1, visibility: "visible" })
      .from(".one", { duration: 0.7, opacity: 0, y: 10 })
      .from(".two", { duration: 0.4, opacity: 0, y: 10 })
      .to(".one", { duration: 0.7, opacity: 0, y: 10 }, "+=2.5")
      .to(".two", { duration: 0.7, opacity: 0, y: 10 }, "-=1")
      .from(".three", { duration: 0.7, opacity: 0, y: 10 })
      .to(".three", { duration: 0.7, opacity: 0, y: 10 }, "+=2")
      .from(".four", { duration: 0.7, scale: 0.2, opacity: 0 })
      .from(".fake-btn", { duration: 0.3, scale: 0.2, opacity: 0 })
      .to(".hbd-chatbox span", {
        duration: 0.5,
        visibility: "visible",
        stagger: 0.05,
      })
      .to(".fake-btn", {
        duration: 0.1,
        backgroundColor: "rgba(255, 46, 150, 1)",
      })
      .to(".four", { duration: 0.5, scale: 0.2, opacity: 0, y: -150 }, "+=0.7")
      .from(".idea-1", { duration: 0.7, ...ideaTextTrans })
      .to(".idea-1", { duration: 0.7, ...ideaTextTransLeave }, "+=1.5")
      .from(".idea-2", { duration: 0.7, ...ideaTextTrans })
      .to(".idea-2", { duration: 0.7, ...ideaTextTransLeave }, "+=1.5")
      .from(".idea-3", { duration: 0.7, ...ideaTextTrans })
      .to(".idea-3 strong", {
        duration: 0.5,
        scale: 1.2,
        x: 10,
        backgroundColor: "rgba(255, 65, 160, 1)",
        color: "#fff",
      })
      .to(".idea-3", { duration: 0.7, ...ideaTextTransLeave }, "+=1.5")
      .from(".idea-4", { duration: 0.7, ...ideaTextTrans })
      .to(".idea-4", { duration: 0.7, ...ideaTextTransLeave }, "+=1.5")
      .from(
        ".idea-5",
        {
          duration: 0.7,
          rotationX: 15,
          rotationZ: -10,
          skewY: "-5deg",
          y: 50,
          z: 10,
          opacity: 0,
        },
        "+=0.5",
      )
      .to(".idea-5 span", { duration: 0.7, rotation: 90, x: 8 }, "+=0.4")
      .to(".idea-5", { duration: 0.7, scale: 0.2, opacity: 0 }, "+=2")
      .from(".idea-6 span", {
        duration: 0.8,
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: "expo.out",
        stagger: 0.2,
      })
      .to(
        ".idea-6 span",
        {
          duration: 0.8,
          scale: 3,
          opacity: 0,
          rotation: -15,
          ease: "expo.out",
          stagger: 0.2,
        },
        "+=1",
      )
      .from(".baloons img", {
        duration: 2.5,
        opacity: 0.9,
        y: 1400,
        stagger: 0.2,
      })
      .to(".baloons img", {
        duration: 2.5,
        opacity: 1,
        y: -1000,
        stagger: 0.2,
      })
      .from(
        ".girl-dp",
        {
          duration: 0.5,
          scale: 3.5,
          opacity: 0,
          x: 25,
          y: -25,
          rotationZ: -45,
        },
        "-=2",
      )
      .from(".wish-hbd span", {
        duration: 0.7,
        opacity: 0,
        y: -50,
        rotation: 150,
        skewX: "30deg",
        ease: "elastic.out(1, 0.5)",
        stagger: 0.1,
      })
      .fromTo(
        ".wish-hbd span",
        {
          scale: 1.4,
          rotationY: 150,
        },
        {
          duration: 0.7,
          scale: 1,
          rotationY: 0,
          color: "#ff69b4",
          ease: "expo.out",
          stagger: 0.1,
        },
        "party",
      )
      .from(
        ".wish h5",
        {
          duration: 0.5,
          opacity: 0,
          y: 10,
          skewX: "-15deg",
        },
        "party",
      )
      .to(".eight svg", {
        duration: 1.5,
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.4,
        stagger: 0.3,
      })
      .to(".six", {
        duration: 0.5,
        opacity: 0,
        y: 30,
        zIndex: "-1",
      })
      .from(".nine p", {
        duration: 1,
        ...ideaTextTrans,
        stagger: 1.2,
      })
      .to(".last-smile", { duration: 0.5, rotation: 90 }, "+=1");

    timelineRef.current = tl;

    return () => {
      tl.kill();
    };
  }, []);

  const handleReplay = () => {
    if (timelineRef.current) {
      timelineRef.current.restart();
    }
  };

  return (
    <div className="container" ref={containerRef}>
      {/* Section 1: Greeting */}
      <div className="one">
        <h1 className="one">
          Hey <span>{CONFIG.name}</span>
        </h1>
        <p className="two">{CONFIG.greetingText}</p>
      </div>

      {/* Section 3: It's Valentine */}
      <div className="three">
        <p>It&apos;s Valentine!!! :D</p>
      </div>

      {/* Section 4: Fake chat box */}
      <div className="four">
        <div className="text-box">
          <p className="hbd-chatbox">
            Happy Valentine&apos;s Day!! Yeee! Love and blah blah...
          </p>
          <p className="fake-btn">Send</p>
        </div>
      </div>

      {/* Section 5: Story text sequence */}
      <div className="five">
        <p className="idea-1">That&apos;s what I was going to do.</p>
        <p className="idea-2">But then I stopped.</p>
        <p className="idea-3">
          I realised, I wanted to do something <strong>special</strong>.
        </p>
        <p className="idea-4">Because,</p>
        <p className="idea-5">
          You are Special
          <span> :)</span>
        </p>
        <p className="idea-6">
          <span>S</span>
          <span>O</span>
        </p>
      </div>

      {/* Section 6: Image + Wish */}
      <div className="six">
        <Image
          src={CONFIG.imagePath}
          alt="Valentine"
          className="girl-dp"
          width={400}
          height={400}
          priority
        />
        <div className="wish">
          <h3 className="wish-hbd">Happy Valentine&apos;s Day Gorgeous</h3>
          <h5>{CONFIG.wishText}</h5>
        </div>
      </div>

      {/* Section 7: Floating balloons/hearts */}
      <div className="seven">
        <div className="baloons">
          <Image src="/balloon.svg" alt="" width={200} height={200} />
          <Image src="/smiling.svg" alt="" width={200} height={200} />
          <Image src="/heart.svg" alt="" width={200} height={200} />
          <Image src="/balloon.svg" alt="" width={200} height={200} />
          <Image src="/heart.svg" alt="" width={200} height={200} />
          <Image src="/balloon.svg" alt="" width={200} height={200} />
          <Image src="/music-note.svg" alt="" width={200} height={200} />
          <Image src="/heart.svg" alt="" width={200} height={200} />
          <Image src="/balloon.svg" alt="" width={200} height={200} />
          <Image src="/heart.svg" alt="" width={200} height={200} />
          <Image src="/balloon.svg" alt="" width={200} height={200} />
          <Image src="/heart.svg" alt="" width={200} height={200} />
          <Image src="/heart.svg" alt="" width={200} height={200} />
          <Image src="/music-note.svg" alt="" width={200} height={200} />
          <Image src="/smiling.svg" alt="" width={200} height={200} />
          <Image src="/happy.svg" alt="" width={200} height={200} />
          <Image src="/balloon.svg" alt="" width={200} height={200} />
          <Image src="/heart.svg" alt="" width={200} height={200} />
          <Image src="/smiling.svg" alt="" width={200} height={200} />
        </div>
      </div>

      {/* Section 8: Confetti circles */}
      <div className="eight">
        {Array.from({ length: 9 }).map((_, i) => (
          <svg key={i} viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" />
          </svg>
        ))}
      </div>

      {/* Section 9: Outro */}
      <div className="nine">
        <p>Okay, now come back and tell me if you liked it.</p>
        <p id="replay" onClick={handleReplay}>
          Or click, if you want to watch it again.
        </p>
        <p className="last-smile">:)</p>
      </div>
    </div>
  );
}
