import { builder } from "@builder.io/sdk";

// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getPageData(builderModelName:string, urlPath:string){
    const content = await builder
    .get(builderModelName, {
      url: urlPath,
    })
    .promise();

    return content;
}