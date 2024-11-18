import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const FadingHeading = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const element = headingRef.current;

    if (element) {
      gsap.fromTo(
        element,
        { opacity: 0 },
        { opacity: 1, duration: .3 , ease: "power2.out", repeat: Infinity }
      );
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1
        ref={headingRef}
        className="text-4xl font-bold text-blue-600"
      >
        Welcome to the Fading Heading!
      </h1>
    </div>
  );
};

const FadingHeadingMemo = React.memo(FadingHeading);

export default FadingHeadingMemo;
