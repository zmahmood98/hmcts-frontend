import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Loading() {
  const svgRef = useRef(null);

  useEffect(() => {
    if (svgRef.current) {
      const balls = gsap.utils.toArray(".ball");
      balls.forEach((ball, i) => {
        gsap.to(ball, {
          y: 60,
          duration: 0.6,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          delay: i * 0.2,
        });
      });
    }
  }, []);

  return (
    <div className="loading-container">
      <svg ref={svgRef} viewBox="0 0 200 100" className="bouncing-balls">
        <circle className="ball red-ball" cx="30" cy="30" r="10" />
        <circle className="ball blue-ball" cx="70" cy="30" r="10" />
        <circle className="ball green-ball" cx="110" cy="30" r="10" />
      </svg>
    </div>
  );
}

export default Loading;
