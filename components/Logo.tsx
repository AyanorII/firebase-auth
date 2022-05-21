import React from "react";
import Image from "next/image";

type Props = {};

const Logo = (props: Props) => {
  return (
    <Image
      src="/devchallenges.svg"
      height="18"
      width="130"
      alt="Dev Challenges"
    />
  );
};

export default Logo;
