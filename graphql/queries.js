import gql from "graphql-tag";

export const allArticlesQuery = gql`
  query allArticlesQuery {
    articles {
      data {
        id
        attributes {
          title
          slug
          description
          body
          date
          link
          img {
            data {
              attributes {
                alternativeText
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const singleArticleQuery = gql`
  query singleArticleQuery($id: ID!) {
    article(id: $id) {
      data {
        id
        attributes {
          title
          description
          date
          body
          slug
          link
          img {
            data {
              attributes {
                alternativeText
                url
              }
            }
          }
        }
      }
    }
  }
`;
