import {ApolloClient, InMemoryCache, HttpLink, from} from "@apollo/client";
import {onError} from "@apollo/client/link/error";
import {setContext} from "@apollo/client/link/context";
import {getLocalKey, removeLocalKey} from "./src/sessionKey";
import {toast} from "react-toastify";
import {createUploadLink} from "apollo-upload-client";

const HOSTNAME = process.env.NEXT_PUBLIC_SERVER_URL;

export const DOWNLOAD_HOSTNAME = process.env.NEXT_PUBLIC_SERVER_DOWNLOAD_URL
const httpLink: any = createUploadLink({
  uri: `${HOSTNAME}`,
  credentials: 'same-origin',
})

const setAuthorizationLink = setContext((_, {headers}) => {
  // get the authentication token from local storage if it exists
  let token;
  if (getLocalKey("token")) {
    token = getLocalKey("token")
  }
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token ? `JWT ${token}` : null,
    },
  };
});

const errorLink = onError(({graphQLErrors, networkError}) => {
  // my error handling logic
  console.log(graphQLErrors)

  if (graphQLErrors) {
    for (const {message, locations, path} of graphQLErrors) {
      if (message === "Signature has expired" || message === "Error decoding signature") {
        removeLocalKey("token");
      } else {
        if (!window.location.href.includes("qrCode-Order")) {
          toast.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
        }
      }
      // console.log(JSON.parse(message),'message') //In this way we can extract error message from message
      // refetch token , if expire refetch
    }
  }
  if (networkError) {
    console.log(HOSTNAME, "hostname")

    console.log(`[Network error]: ${networkError}`);
    if (typeof window !== 'undefined' && !window.navigator.onLine) {
      toast.error("OOPS! No internet connection")
    } else {
      toast.error("OOPS! Somethings went wrong to the server")
    }
  }
});

const defaultOptions: any = {
  watchQuery: {
    fetchPolicy: 'cache-and-network',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'network-only',
    errorPolicy: 'all',
  },
  mutate: {
    errorPolicy: 'all',
  },
};

const apolloClient = new ApolloClient({
  ssrMode: typeof window === "undefined",
  link: from([setAuthorizationLink, errorLink,httpLink]),
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
})

export default apolloClient;
