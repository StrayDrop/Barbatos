import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import history from '@tmp/history';


const Router = DefaultRouter;

const routes = [
  {
    "path": "/App.html",
    "exact": true,
    "component": require('../App.jsx').default
  },
  {
    "path": "/Banner0.html",
    "exact": true,
    "component": require('../Banner0.jsx').default
  },
  {
    "path": "/Content0.html",
    "exact": true,
    "component": require('../Content0.jsx').default
  },
  {
    "path": "/Content00.html",
    "exact": true,
    "component": require('../Content00.jsx').default
  },
  {
    "path": "/Content3.html",
    "exact": true,
    "component": require('../Content3.jsx').default
  },
  {
    "path": "/Content5.html",
    "exact": true,
    "component": require('../Content5.jsx').default
  },
  {
    "path": "/Footer1.html",
    "exact": true,
    "component": require('../Footer1.jsx').default
  },
  {
    "path": "/Nav0.html",
    "exact": true,
    "component": require('../Nav0.jsx').default
  },
  {
    "path": "/data.source.html",
    "exact": true,
    "component": require('../data.source.js').default
  },
  {
    "path": "/index.html",
    "exact": true,
    "component": require('../index.js').default
  },
  {
    "path": "/",
    "exact": true,
    "component": require('../index.js').default
  },
  {
    "path": "/users.html",
    "exact": true,
    "component": require('../users.js').default
  },
  {
    "path": "/utils.html",
    "exact": true,
    "component": require('../utils.js').default
  },
  {
    "component": () => React.createElement(require('/Users/panda/.config/yarn/global/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false })
  }
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

// route change handler
function routeChangeHandler(location, action) {
  plugins.applyForEach('onRouteChange', {
    initialValue: {
      routes,
      location,
      action,
    },
  });
}
history.listen(routeChangeHandler);
routeChangeHandler(history.location);

export { routes };

export default function RouterWrapper() {
  return (
<Router history={history}>
      { renderRoutes(routes, {}) }
    </Router>
  );
}
