
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/treatments"
  },
  {
    "renderMode": 2,
    "route": "/location"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 13949, hash: 'c4d6f77b1146d05ca60213c698f9a3e44a73bf8d276479c185bed75f2dcbf1f2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 14351, hash: '5286a2179dc378e6041c2521ccc88b5d085dd8d35d2da85c1e7d5c6f5ac604a1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'treatments/index.html': {size: 23801, hash: '3f9c0abb5a04eb82f4125c2de8bcb45e4d91f61463d37f3579829040ae6a65d4', text: () => import('./assets-chunks/treatments_index_html.mjs').then(m => m.default)},
    'location/index.html': {size: 20784, hash: 'f57ea8ff32d51606c7ffb62cada7bb120562d01b899d7ddf5d8cf0e977303c7e', text: () => import('./assets-chunks/location_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 23274, hash: '178aa345e2c3bd830b8ac1082b534cbc76eef54b34d5c383f2bbe8ba7066b3a7', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 30249, hash: 'b8a4666d0c695834245b4fb8d69d91e2663dd3db3c15fbe8a9c945894a2015f9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5AXVTDPM.css': {size: 1921, hash: 'MIUfX9aE2eg', text: () => import('./assets-chunks/styles-5AXVTDPM_css.mjs').then(m => m.default)}
  },
};
