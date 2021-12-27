import React, { Fragment, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AuthGuard from 'src/component/AuthGuard';
import LoadingScreen from 'src/component/LoadingScreen';
import MainLayout from 'src/layout/MainLayout';
import {
  default as MyAccountLayout,
  default as MyAccountSider,
} from 'src/layout/MyAccountSider';
import Activity from 'src/page/Account/Activity';
import Claim from 'src/page/Account/Claim';
import Inventory from 'src/page/Account/Inventory';
import InventoryDetail from 'src/page/Account/InventoryDetail';
import MyAccount from 'src/page/Account/MyAccount';
import Setting from 'src/page/Account/Setting';
import ItemDetail from 'src/page/ItemDetail';
import Login from 'src/page/Login';
import Marketplace from 'src/page/Marketplace';
import Metrics from 'src/page/Metrics';

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
    path: '/',
    guard: AuthGuard,
    layout: MainLayout,
    component: Metrics,
  },
  {
    exact: true,
    path: '/login',
    guard: AuthGuard,
    layout: MainLayout,
    component: Login,
  },
  {
    exact: true,
    path: '/marketplace',
    guard: AuthGuard,
    layout: MainLayout,
    component: Marketplace,
  },
  {
    path: '/account',
    // guard: AuthGuard,
    layout: MainLayout,
    component: MyAccountSider,
    routes: [
      {
        exact: true,
        path: '/account',
        guard: AuthGuard,
        layout: MyAccountLayout,
        component: MyAccount,
      },
      {
        exact: true,
        path: '/account/activity',
        // guard: AuthGuard,
        layout: MyAccountLayout,
        component: Activity,
      },
      {
        exact: true,
        path: '/account/inventory',
        // guard: AuthGuard,
        layout: MyAccountLayout,
        component: Inventory,
      },
      {
        exact: true,
        path: '/account/inventory/:id',
        guard: AuthGuard,
        layout: MyAccountLayout,
        component: InventoryDetail,
      },
      {
        exact: true,
        path: '/account/claim-tokens',
        guard: AuthGuard,
        layout: MyAccountLayout,
        component: Claim,
      },
      {
        exact: true,
        path: '/account/settings',
        guard: AuthGuard,
        layout: MyAccountLayout,
        component: Setting,
      },
    ],
  },
  {
    exact: true,
    path: '/:type/:id',
    guard: AuthGuard,
    layout: MainLayout,
    component: ItemDetail,
  },
  // {
  //   path: '*',
  //   routes: [
  //     {
  //       component: () => <Redirect to="/" />,
  //     },
  //   ],
  // },
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
