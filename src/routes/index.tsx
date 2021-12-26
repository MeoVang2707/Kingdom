import React, { Fragment, lazy, Suspense } from "react";
import LoadingScreen from "src/component/LoadingScreen";
import { Redirect, Route, Switch } from "react-router-dom";
import AuthGuard from "src/component/AuthGuard";
import MainLayout from "src/layout/MainLayout";
import MyAccountLayout from "src/layout/MyAccountSider";

interface RouteProps {
  exact?: boolean;
  path?: string;
  guard?: React.ReactNode;
  layout?: React.ElementType;
  component?: React.ElementType;
  routes?: RouteProps[];
}

const routesConfig: RouteProps[] = [
  {
    exact: true,
    path: "/",
    guard: AuthGuard,
    layout: MainLayout,
    component: lazy(() => import("src/page/Metrics")),
  },
  {
    exact: true,
    path: "/login",
    guard: AuthGuard,
    layout: MainLayout,
    component: lazy(() => import("src/page/Login")),
  },
  {
    exact: true,
    path: "/marketplace",
    guard: AuthGuard,
    layout: MainLayout,
    component: lazy(() => import("src/page/Marketplace")),
  },
  {
    path: "/account",
    // guard: AuthGuard,
    layout: MainLayout,
    component: lazy(() => import("src/layout/MyAccountSider")),
    routes: [
      {
        exact: true,
        path: "/account",
        guard: AuthGuard,
        layout: MyAccountLayout,
        component: lazy(() => import("src/page/Account/MyAccount")),
      },
      {
        exact: true,
        path: "/account/activity",
        // guard: AuthGuard,
        layout: MyAccountLayout,
        component: lazy(() => import("src/page/Account/Activity")),
      },
      {
        exact: true,
        path: "/account/inventory",
        // guard: AuthGuard,
        layout: MyAccountLayout,
        component: lazy(() => import("src/page/Account/Inventory")),
      },
      {
        exact: true,
        path: "/account/inventory/:id",
        guard: AuthGuard,
        layout: MyAccountLayout,
        component: lazy(() => import("src/page/Account/InventoryDetail")),
      },
      {
        exact: true,
        path: "/account/claim-tokens",
        guard: AuthGuard,
        layout: MyAccountLayout,
        component: lazy(() => import("src/page/Account/Claim")),
      },
      {
        exact: true,
        path: "/account/settings",
        guard: AuthGuard,
        layout: MyAccountLayout,
        component: lazy(() => import("src/page/Account/Setting")),
      },
    ],
  },
  {
    exact: true,
    path: "/:type/:id",
    guard: AuthGuard,
    layout: MainLayout,
    component: lazy(() => import("src/page/ItemDetail")),
  },
  {
    path: "*",
    routes: [
      {
        component: () => <Redirect to="/" />,
      },
    ],
  },
];

const renderRoutes = (routes: RouteProps[]) =>
  routes ? (
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
        {routes.map((route, i) => {
          const Guard = (route.guard || Fragment) as React.ElementType;
          const Layout = route.layout || Fragment;
          const Component = route.component || Fragment;

          return (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              render={(props) => (
                <Guard>
                  <Layout>
                    {route.routes ? (
                      renderRoutes(route.routes)
                    ) : (
                      <Component {...props} />
                    )}
                  </Layout>
                </Guard>
              )}
            />
          );
        })}
      </Switch>
    </Suspense>
  ) : null;

function Routes() {
  return renderRoutes(routesConfig);
}

export default Routes;
