import Top from "../assets/top.svg";
import type { CSSProperties } from "react";

export const SectionHero = () => {
  const sectionStyle: CSSProperties = {
    backgroundColor: "#ebbf54",
    minWidth: "100vh",
    width: "100%",
    height: "430px",
  };
  return (
    <section style={sectionStyle}>
      <img
        src={Top}
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          height: "430px",
          overflow: "hidden",
        }}
      />
    </section>
  );
};
