import Image from "next/image";
import React from "react";

export const BackgroundImage = () => {
  return (
    <div className=" w-full h-full sm:flex">
      <Image
        alt="nextui logo"
        src={"/bg-right.webp"}
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto"
        priority
        style={{
          zIndex: -100,
          position: "fixed",
          right: "-10%",
          top: "-20%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "end",
          transform: "scaleX(-1)",
          width: "auto",
          height: "auto",
        }}
      />
      <Image
        alt="nextui logo"
        src={"/bg-left.webp"}
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto"
        style={{
          zIndex: -100,
          position: "fixed",
          left: "-10%",
          bottom: "-20%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "end",
          transform: "rotate(180deg)",
          width: "auto",
          height: "auto",
        }}
      />
    </div>
  );
};
