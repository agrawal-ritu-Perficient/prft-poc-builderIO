//import { fetchPageData_GQ } from "@/lib/graphql-api";
import { RenderBuilderContent } from "../components/builder";
import { getPageData } from "@/lib/builder-sdk-api";

export default async function Home() {
  const builderModelName = "page";
  const homepageContent = await getPageData("page", "/");
  //const pageData= await fetchPageData_GQ();
  //const navigationLinks = await fetchNavigationLinks();
  console.log("pageData",homepageContent)
  return (
    <>
      {/* <Navigation/> */}
      {/* Render the Builder page */}
      <RenderBuilderContent
        content={homepageContent}
        model={builderModelName}
      />
    </>
  );
}
