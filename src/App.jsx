import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import '@mantine/core/styles.css';
import { Loader, LoadingOverlay, MantineProvider, Stack, Text } from '@mantine/core';
import { paths } from './utility/constants';
import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import NotFound from "./pages/NotFound/NotFound";
import useNetworkStatus from "./hooks/useNetworkStatus";
import { Notifications } from "@mantine/notifications";

function App() {
  const isOnline = useNetworkStatus()

  const router = createBrowserRouter([
    ...Object.values(paths?.publicRoutes)?.map((e) => {
      return {
        path: e?.path,
        element: <PublicRoute component={e?.element} />
      }
    }),
    ...Object.values(paths?.privateRoutes)?.map((e) => {
      return {
        path: e?.path,
        element: <PrivateRoute component={e?.element} />,
        children: [
          ...Object.values(e?.children)?.map((ele) => {
            return {
              path: ele?.path,
              element: <PrivateRoute component={ele?.element} path={ele?.path} />,
            }
          })
        ]
      }
    }),
    {
      path: "/unauthorized",
      element: <div>no access !!</div>,
    },
    {
      path: "*",
      element: <NotFound />
    }
  ]);

  return (
    <MantineProvider>
      <Notifications position="top-right"/>
      <LoadingOverlay
        visible={!isOnline}
        zIndex={1000}
        loaderProps={{
          children: <Stack align="center">
            <Loader size={30} type="dots" />
            <Text>Your offline check your internet connection</Text>
          </Stack>
        }}
        overlayProps={{ radius: "sm", blur: 1 }} />
      <RouterProvider router={router} />
    </MantineProvider>
  )
}

export default App;
