import Image from "next/image";
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
      className={`py-3 px-3  flex items-center justify-between   rounded-lg space-x-[10px] ${
        variant === "primary"
          ? "bg-primary ring-0 text-white"
          : "bg-opacity-0 ring-[2px] ring-primary text-dark"
      } hover:scale-95 lg:py-3 lg:px-6`}
    >
      <Link href={url} className="font-semibold font-poppin text-h4">
        <a>{text}</a>
      </Link>
      {icon && (
        <Image
          width={20}
          height={20}
          className="inline-block h-[20px]"
          src={icon.src}
          alt=""
        />
      )}
    </button>
  );
};

export default Button;
