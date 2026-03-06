
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
    'index.csr.html': {size: 21675, hash: '2dcaa20107a89d7e8aa0e48126f2139b97d40900026a25d592703174b8e0b107', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 22077, hash: 'f15c8b71deb3298638cbdb7fbf7ccc8ade0a8e12ecdfc5dd66c46d65863227a3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'treatments/index.html': {size: 31128, hash: 'c519de9b5af6e8cabb024e385b604f0b56c17b7664a42b92d3953bd81961cc4f', text: () => import('./assets-chunks/treatments_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 30860, hash: 'a6013a1a7c02aed3a714dc58a50e765ddacea71ba6d2c32b49f347a12aa06834', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'location/index.html': {size: 28129, hash: '0b94b68dea151fcb5cbd9ff4da5fa6445bc478b8d7bea7d8491bd415f81efd35', text: () => import('./assets-chunks/location_index_html.mjs').then(m => m.default)},
    'index.html': {size: 37482, hash: '67881ea206dd8440b2bb856a5e515003cb698c9cf174e5c045e2e7cfc6ff6025', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-7LBXA3M4.css': {size: 2028, hash: 'EVsyDxXQd7g', text: () => import('./assets-chunks/styles-7LBXA3M4_css.mjs').then(m => m.default)}
  },
};
