import type { ReactNode } from "react";
import "./PuffOne.css";

type Props = {
  title?: ReactNode;
  subTitle?: ReactNode;
  content?: ReactNode;
};

export const PuffOne = ({ title, subTitle, content }: Props) => {
  return (
    <div
      style={{
        position: "relative",
        marginBottom: "1rem",
      }}
      className="puff puffOne"
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "95%",
          height: "100%",
          backgroundImage: "url('/assets/puff1.svg')",
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
        <h4 className="rotated">{title}</h4>
        <div className="rotated">{subTitle}</div>
        <div className="content">{content}</div>
      </div>
    </div>
  );
};
