"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Footer from "./components/Footer/footer";
import Navigation from "./components/Navigation/Navigation";
import dynamic from "next/dynamic";

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

Builder.registerComponent(
  dynamic(() => import("./components/HeroBanner/heroBanner")),
  {
    name: "HeroBanner",
    image: "https://tabler-icons.io/static/tabler-icons/icons-png/list.png",
    inputs: [
      {
        name: "title",
        friendlyName: "Title",
        type: "string",
        defaultValue: "Hero Banner Title",
        required:true,
      },
      {
        name: "excerpt",
        friendlyName: "Description",
        type: "string",
        defaultValue: "Hero Banner Description",
        required:true,
      },
      {
        name: "backgroundImage",
        friendlyName: "Background Image",
        defaultValue:
          "https://cdn.builder.io/api/v1/image/assets%2Fccda6c7abf4c4b8195aa67d47de420dd%2F784e7fa828bd440391e222589df3968c",
        type: "file",
        allowedFileTypes: ["png", "jpg", "webp"],
        required:true,
      },
    ],
  }
);

// Builder.registerComponent(Heading, {
//   name: "Heading",
//   inputs: [
//     { name: "name", type: "text", defaultValue: "Enter Heading Title" },
//     {
//       name: "type",
//       type: "select",
//       options: ["h1", "h2", "h3"],
//       defaultValue: "h1",
//     },
//     { name: "content", type: "blocks" },
//   ],
// });

Builder.register("insertMenu", {
  name: "PRFT Components",
  items: [
    { name: "HeroBanner" },
    { name: "Heading" },
    { name: "Navigation" },
    { name: "Counter" },
    { name: "Footer" },
  ],
});
