import client from "lib/sanity";

export const getAllPosts = async () => {
  const posts = await client.fetch(
    `*[_type=="post"]{title,subtitle,dateandtime,"image":cover_image.asset->url,"slug":slug.current, "publisher":publisher->{title, "picture":avatar.asset->url}}`
  );
  return posts;
};
