import { RenderBuilderContent } from "../../components/builder";
import { getPageData } from "@/lib/builder-sdk-api";

type PageProps = Promise<{ page: string[] }>;

export default async function Page(props: { params: PageProps }) {
  const { page } = await props.params;
  const urlPath = "/" + (page.join("/") || "");
  const content = await getPageData("page", urlPath);

  return (
    <>
      {/* Render the Builder page */}
      <RenderBuilderContent content={content} model="page" />
    </>
  );
}
