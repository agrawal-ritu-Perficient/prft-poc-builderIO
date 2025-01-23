"use client";

import { BuilderComponent } from "@builder.io/react";

const HeroBanner = () => {
  return (
    <section className="hero-banner">
      {/* This will load content from Builder.io */}
      <BuilderComponent model="hero-banner" />
    </section>
  );
  // return (
  //   <section
  //     className="relative w-full h-screen bg-cover bg-center mb-16"
  //     style={{
  //       backgroundImage:
  //         "url('https://t3.ftcdn.net/jpg/03/35/51/06/360_F_335510693_HY7mLg3ARdLccKoXk3m66NLDpJRJh51p.jpg')", // Replace with your image path
  //     }}
  //   >
  //     {/* Overlay for better text visibility */}
  //     <div className="absolute inset-0 bg-black opacity-50"></div>

  //     {/* Hero Content */}
  //     <div className="absolute inset-0 flex items-center justify-center text-center text-white px-6 md:px-12">
  //       <div>
  //         {/* Main Headline */}
  //         <h1 className="text-4xl md:text-5xl font-poppins text-yellow-400 leading-tight mb-4">
  //           Welcome to Who Cooks 🍽
  //         </h1>

  //         {/* Subheadline */}
  //         <p className="text-xl md:text-2xl text-yellow-100">
  //           Savor the best flavors from around the world.
  //         </p>
  //       </div>
  //     </div>
  //   </section>
  // );
};

export default HeroBanner;
