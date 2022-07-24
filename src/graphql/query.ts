import {gql} from '@apollo/client'

export const QUERY_WEBSITE_PRODUCT=gql`
query {
  websiteProducts(first: 10) {
    edges {
      node {
        id
        title
        isTaxable
        price
        media{
          media
        }
      }
    }
  }
}
`
export const QUERY_PRODUCT_CATEGORY=gql `
query {
  websiteCategory {
    totalCount
    edgeCount
    edges {
      node {
        id
        name
        productsByCategory{
          totalCount
        }
      }
    }
  }
}
`
export const SEARCH_PRODUCT= gql`
query QUERY_SEARCH_PRODUCT($title: String) {
  websiteProducts(title: $title) {
    edges {
      node {
        id
        title
        isTaxable
        price
        media{
          media
        }
      }
    }
  }
}
`
export const QUERY_TOP_SELLING_PRODUCT =gql `
query GET_TOP_SELLING_BY($productID: [ID]) {
  topSellingProducts(category: $productID) {
    edges {
      node {
        id
        title
        price
        category{
          edges{
            node{
              id
              name
              status
            }
          }
        }
        media {
          media
        }
      }
    }
  }
}

`
export const QUERY_GET_CATEGORY_BY_ID=gql `
query GET_CATEGORY_BY($categoryID: [ID]) {
  topSellingProducts(first: 10,category: $categoryID) {
    edges {
      node {
        id
        title
        price
        category{
          edges{
            node{
              id
            }
          }
        }
        media {
          media
        }
      }
    }
  }
}
`
export const QUERY_FEATURE_PRODUCT=gql `
query GET_FEATURE_BY($featureID: [ID]) {
  websiteProducts(first: 5,category: $featureID) {
    edges {
      node {
        id
        title
        price
        category{
          edges{
            node{
              id
              name
              status
            }
          }
        }
        media {
          media
        }
      }
    }
  }
}

`

export const QUERY_NEW_PRODUCT=gql `
query GET_FEATURE_BY($newProductID: [ID]) {
  websiteProducts(first: 10,category: $newProductID) {
    edges {
      node {
        id
        title
        price
        category{
          edges{
            node{
              id
              name
              status
            }
          }
        }
        media {
          media
        }
      }
    }
  }
}
`
export const QUERY_TOP_10_PRODUCT=gql `
query GET_FEATURE_BY($topProductID: [ID],$searchTitle:String) {
  websiteProducts(first: 10,category: $topProductID,search:$searchTitle) {
    edges {
      node {
        id
        title
        price
        category{
          edges{
            node{
              id
              name
              status
            }
          }
        }
        media {
          media
        }
      }
    }
  }
}
`
export const QUERY_TOP_PRODUCT=gql `
query  {
  websiteProducts(first: 3) {
    edges {
      node {
        id
        title
        price
        category{
          edges{
            node{
              id
              name
              status
            }
          }
        }
        media {
          media
        }
      }
    }
  }
}
`
export const QUERY_DYNAMIC_FORM=gql `
query{
  dynamicForms{
    edges{
      node{
        id
        name
        fields
        pk
      }
    }
  }
}

`
export const QUERY_FEATURE_PRODUCT_CATEGORY=gql `
query QUERY_NAVIGATION_BY_SLUG($slug: String) {
  navigationMenuBySlug(slug: $slug) {
    name
    id
    slug
    order
    title
    children {
      id
      name
      slug

    }
    items(first:5) {
      edges {
        node {
          title
          price
          media {
            media
          }
        }
      }
    }
  }
}
`
export const QUERY_CAROUSEL = gql`
query {
  carousels {
    edges {
      node {
        id
        name
        media{
          media
        }
      }
    }
  }
}
`
export const SEARCH_PRODUCTS=gql `
query SEARCH_PRODUCTS_BY($search:String) {
  websiteProducts(first: 10,search:$search) {
    edges {
      node {
        id
        title
        price
        category{
          edges{
            node{
              id
              name
              status
            }
          }
        }
        media {
          media
        }
      }
    }
  }
}
`