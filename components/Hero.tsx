import React from "react";
import HeroLayout from "./HeroLayout";

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, backgroundImage }) => {
  return (
    <HeroLayout title={title} subtitle={subtitle} backgroundImage={backgroundImage} />
  );
};

export default Hero;
