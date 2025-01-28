import { BuilderBlocks } from "@builder.io/react";

export const Heading = ({ name, type, content }) => {
  const Tag = type || "h1";
  return (
    <Tag>
      {name}
      <BuilderBlocks blocks={content} />
    </Tag>
  );
};
