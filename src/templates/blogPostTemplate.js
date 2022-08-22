import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Seo from '../components/seo';

import { ContentfulBlogPost as Query } from '../queries';
import ContentfulBlogPost from '../components/contentful/contentfulBlogPost/contentfulBlogPost';

const BlogPostTemplate = ({ data }) => {
  const {
    blogPostTitle,
    blogPostLanguage,
    blogPostSeoTitle,
    blogPostSeoDescription,
    coverImage,
  } = data.contentfulBlogPost;

  return (
    <Layout>
      <Seo
        title={blogPostSeoTitle || blogPostTitle}
        description={blogPostSeoDescription}
        previewImage={coverImage}
        lang={blogPostLanguage}
      />
      <ContentfulBlogPost content={data.contentfulBlogPost} />
    </Layout>
  );
};

export default BlogPostTemplate;

export const blogPostQuery = graphql`
  query blogPostQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      ...ContentfulBlogPostFragment
    }
  }
`;
