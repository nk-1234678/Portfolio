import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const clickRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const showClick = (e) => {
      const el = document.createElement("div");
      el.className = "click-effect";
      el.style.left = `${e.clientX}px`;
      el.style.top = `${e.clientY}px`;
      document.body.appendChild(el);
      setTimeout(() => {
        document.body.removeChild(el);
      }, 400);
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("click", showClick);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("click", showClick);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor"></div>
    </>
  );
};

export default CustomCursor;
