"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Footer from "./components/Footer/footer";
import HeroBanner from "./components/HeroBanner/heroBanner";
import Navigation from "./components/Navigation/Navigation";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});

Builder.registerComponent(Navigation, {
  name: "Navigation",
});

Builder.registerComponent(Footer, {
  name: "Footer",
});

Builder.registerComponent(HeroBanner, {
  name: "HeroBanner",
});
