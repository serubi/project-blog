import { getBlogPostList } from "@/helpers/file-helpers";
import { BLOG_TITLE, BLOG_DESCRIPTION } from "@/constants";
import RSS from "rss";

export async function GET() {
  const blogPosts = await getBlogPostList();

  const feedOptions = {
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION,
    feed_url: "http://localhost:3000/rss.xml",
    site_url: "http://localhost:3000",
  };

  const feed = new RSS(feedOptions);

  blogPosts.map(({ title, abstract, publishedOn, slug }) => {
    feed.item({
      title,
      description: abstract,
      date: publishedOn,
      url: `${feedOptions.site_url}/${slug}`,
    });
  });

  return new Response(feed.xml({ indent: true }), {
    status: 200,
    headers: { "Content-Type": `application/xml` },
  });
}
