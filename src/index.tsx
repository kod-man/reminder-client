import {
  ChakraProvider,
  ColorModeScript,
  Flex,
  Text,
  theme
} from "@chakra-ui/react";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";

import { configureStore } from "@reduxjs/toolkit";
import { ErrorBoundary } from "react-error-boundary";
import { Provider } from "react-redux";
import XIcon from "./icons/XIcon";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "./serviceWorker";
import DrawerReducers from "./store/Drawer/drawerSlice";
import ReminderReducers from "./store/Reminder/ReminderSlice";
import RefreshReducers from "./store/Refresh/RefreshSlice";
import LabelsReducers from "./store/Label/LabelsSlice";
import ProjectsReducers from "./store/Projects/ProjectsSlice";

function ErrorFallback({ error }: { error: any }) {
  return (
    <Flex
      w="100%"
      h="100vh"
      mt="8"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Flex
        w="60px"
        h="60px"
        bg="red.500"
        borderRadius="50%"
        alignItems="center"
        justifyContent="center"
        color="white"
      >
        <XIcon />
      </Flex>

      <Text as="b" mt="3" fontSize="5xl">
        Something went wrong
      </Text>
      <Text color="gray" fontSize="2xl" mt="2" style={{ color: "red" }}>
        {error.message}
      </Text>
    </Flex>
  );
}

const container = document.getElementById("root");
if (!container) {
  throw new Error("Failed to find the root element");
}
const root = ReactDOM.createRoot(container);

export const store = configureStore({
  reducer: {
    projects: ProjectsReducers,
    labels: LabelsReducers,
    reminder: ReminderReducers,
    drawer: DrawerReducers,
    refresh: RefreshReducers
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

root.render(
  <React.StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <App />
          </ErrorBoundary>
        </BrowserRouter>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
