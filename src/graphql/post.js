import { gql } from "@apollo/client";

export const GET_POST_QUERY = gql`
  query Post($slug: String!) {
    post(slug: $slug, include: [author, tags]) {
      id
      title
      poster
      tags {
        id
        name
        slug
      }
      author {
        id
        name
        avatar
        username
        createdAt
        location
      }

      createdAt
      readTime
      content
      _count {
        hearts
        unicorns
        bookmarks
      }
    }
  }
`;
