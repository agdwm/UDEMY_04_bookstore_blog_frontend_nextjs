import PageCardImage from "@/components/PageCardImage";
import PageHeading from "@/components/PageHeading";
import { fetchApi } from "@/helpers/fetch-api";
import { Post } from "@/interfaces/post";

const getData = async (page = 1, pageSize = 2) => {
  const path = "/posts";
  // "urlParamsObject" contains configuration query parameters for an API request to Strapi
  const urlParamsObject = {
    populate: "*",
    sort: { createdAt: "asc" },
    pagination: {
      page: page,
      pageSize: pageSize,
    },
  };

  const { data, meta } = await fetchApi(path, urlParamsObject);
  return { data, pagination: meta.pagination };
};

const Blog = async () => {
  const { data } = await getData();

  return (
    <div>
      <PageHeading text="Latest Posts" />
      <div className="grid gap-4">
        {data.map((post: Post) => (
          <PageCardImage key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};
export default Blog;
