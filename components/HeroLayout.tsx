import React from "react";
import Header from "./Header";

interface HeroLayoutProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  children?: React.ReactNode;
}

const HeroLayout: React.FC<HeroLayoutProps> = ({
  title,
  subtitle,
  backgroundImage,
  children
}) => {

  return (
    <div className="relative min-h-screen">
      <Header />

      <section
        className="relative flex justify-start items-center text-white bg-cover bg-center min-h-[120vh] xl:min-h-[100vh] pb-36"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 px-6"></div>

      {/* Content on Top */}
      <div className="relative z-10 w-full px-6 xl:pl-32 flex flex-col items-start justify-center text-white max-w-screen-xl mx-auto">
        <h1 className="text-[40px] md:text-[56px] xl:text-[68px] leading-[45px] md:leading-[65px] font-bold capitalize md:max-w-[550px] xl:max-w-[750px] my-1 md:my-3">
          {title}
        </h1>

        {subtitle && (
          <p className="text-lg md:max-w-[500px] my-1 md:my-3">{subtitle}</p>
        )}

        {/* Show Buttons only on Home Page */}
        {children && <div className="mt-2 w-full">{children}</div>}
      </div>
    </section>
    </div>
  );
};

export default HeroLayout;
