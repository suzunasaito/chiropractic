
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
    'index.csr.html': {size: 13946, hash: '833177eea309988ce4998e267d07b75fa5ce77796dbac8d65a5adc3ba7c45263', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 14348, hash: '37b8de404c40d946d684d2af7008716ab7a958e6bcd937d3028d2e354b45618e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 22977, hash: '4afd5a9aa4e2c9f3f8443a3323fcbd4769f6398e48619c9cddf46e39cb3257c9', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 29617, hash: 'ee417f3bdef560751231aeaec9df84330f59035c7a755a031f86658a38cd57bd', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'treatments/index.html': {size: 23504, hash: 'f452cbe16c69b2e58e212be890fc42665aaf80e72203918295aa6a2ed409e66f', text: () => import('./assets-chunks/treatments_index_html.mjs').then(m => m.default)},
    'location/index.html': {size: 20487, hash: '358a03be3c800bc5e6931eeca898cdaddf1c07bb71523557cc8e42460fe3642c', text: () => import('./assets-chunks/location_index_html.mjs').then(m => m.default)},
    'styles-5AXVTDPM.css': {size: 1921, hash: 'MIUfX9aE2eg', text: () => import('./assets-chunks/styles-5AXVTDPM_css.mjs').then(m => m.default)}
  },
};
