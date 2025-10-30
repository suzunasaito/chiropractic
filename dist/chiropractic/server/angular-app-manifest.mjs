
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
    'index.csr.html': {size: 13946, hash: 'fa8360379405fb2756489baadebbbe55dc2203d74494e8ae8afb88bac6af3cdb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 14348, hash: '19a97f87760154673ea4b53d483ed2c0a73cee62d13395e09330bfbddc3bd449', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 23011, hash: 'e78781b9c4677ad616e50429fb4caf04cea5f3b3abf791803f7edab084231f50', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'location/index.html': {size: 20521, hash: '23965123979e93111f2ae6b3b96d67de14bd2c94a6a211229d24b9594e76e843', text: () => import('./assets-chunks/location_index_html.mjs').then(m => m.default)},
    'treatments/index.html': {size: 23538, hash: 'bec6ea949f3cc9512f887fdb023d42b1b7f8961d54f1301fa8884cfaeab22924', text: () => import('./assets-chunks/treatments_index_html.mjs').then(m => m.default)},
    'index.html': {size: 29651, hash: '40561115a1fa6f506fbaec181ad148bbdb7f6d41ef7a2493c642f5a2339dfd42', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5AXVTDPM.css': {size: 1921, hash: 'MIUfX9aE2eg', text: () => import('./assets-chunks/styles-5AXVTDPM_css.mjs').then(m => m.default)}
  },
};
