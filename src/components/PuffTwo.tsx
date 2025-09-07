import type { ReactNode } from "react";
import "./PuffTwo.css";

type Props = {
  title?: ReactNode;
  subTitle?: ReactNode;
  content?: ReactNode;
};

export const PuffTwo = ({ title, subTitle, content }: Props) => {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "330px",
        color: "#37493a",
        marginBottom: "1rem",
      }}
      className="puff puffTwo"
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "95%",
          height: "100%",
          backgroundImage: "url('/assets/puff2.svg')",
          backgroundSize: "100% auto",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "3rem 2rem 1rem 1rem",
          height: "100%", // ensures content is vertically centered
        }}
      >
        <h2 className="rotated">{title}</h2>
        <div className="rotated">{subTitle}</div>
        <div className="content">{content}</div>
      </div>
    </div>
  );
};
