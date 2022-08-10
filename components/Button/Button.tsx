import Link from "next/link";
import React, { FC } from "react";

interface Ibutton {
  text: string;
  icon: Ticon;
  variant: string;
  url: string;
}

type Ticon = {
  height: number;
  width: number;
  src: string;
};

const Button: FC<Ibutton> = ({ text, icon, url, variant = "primary" }) => {
  return (
    <button
      className={`flex items-center justify-between py-3 px-6 rounded-lg space-x-[10px] ${
        variant === "primary"
          ? "bg-primary ring-0 text-white"
          : "bg-opacity-0 ring-[2px] ring-primary text-dark"
      } hover:scale-95`}
    >
      <Link href={url} className="font-semibold font-poppin text-h4">
        <a>{text}</a>
      </Link>
      {icon && <img className="inline-block h-[20px]" src={icon.src} alt="" />}
    </button>
  );
};

export default Button;
