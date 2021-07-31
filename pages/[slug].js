import { Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";
import BlockContent from "@sanity/block-content-to-react";
import Layout from "components/layout";
import { getPostBySlug, getAllPosts, getPaginatedPosts } from "lib/api";
import HighlightCode from "components/highlightCode";
import { urlFor } from "lib/api";
import PostHeader from "components/post-header";
import PreviewAlert from "components/preview-alert";

export default ({ post, preview }) => {
  const router = useRouter;

  if (router.isFallback)
    return (
      <Layout>
        <div>tvr hvleene vv?</div>
      </Layout>
    );
  if (!router.isFallback && !post?.slug)
    return (
      <Layout>
        <div>Уучлаарай ийм пост байхгүй байна...</div>
      </Layout>
    );

  return (
    <Layout>
      <Row>
        <Col md="12">
          {preview && <PreviewAlert />}
          {/* <pre>{JSON.stringify(post, null, 2)}</pre> */}
          <PostHeader post={post} />
          <br />
          <BlockContent
            blocks={post.content}
            serializers={serializers}
            imageOptions={{ w: 320, h: 240, fit: "max" }}
          />
        </Col>
      </Row>
    </Layout>
  );
};

const serializers = {
  types: {
    code: (props) => (
      <HighlightCode language={props.node.language}>
        {props.node.code}
        <div className="code-filename">{props.node.filename}</div>
      </HighlightCode>
    ),
    image: (props) => (
      <div className={`blog-image blog-image-${props.node.position}`}>
        <img src={urlFor(props.node).height(400).url()} />
        <div className="code-filename" style={{ textAlign: "center" }}>
          {props.node.alt}
        </div>
      </div>
    ),
  },
};

export const getStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  console.log(preview, previewData);

  const post = await getPostBySlug(params.slug, preview);

  console.log("-------", post);

  return {
    props: {
      post: post.length > 1 ? post[1] : post.length > 0 ? post[0] : {},
      preview,
    },
  };
};

export const getStaticPaths = async () => {
  const posts = await getPaginatedPosts(0, 4);
  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: true,
  };
};
