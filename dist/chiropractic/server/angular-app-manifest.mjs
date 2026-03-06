
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
    'index.csr.html': {size: 21675, hash: 'b98295b85e01513d24457c6a6c0a38608a50405de460f5dc6216ce409e737deb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 22077, hash: '4ccd61c714ef0884899b59a5556693faf6d5b74cd8e6f1b73c303aea958faae4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 31096, hash: 'eb17cba89491ebea4910ea6ea44d3919cf3c1f2b7cfbd9b113128372c9584cdb', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'location/index.html': {size: 28129, hash: 'cfc808f14db1dd2b55e571ccd2184d37d9069a6f73670aea64d89d7f618e9dfc', text: () => import('./assets-chunks/location_index_html.mjs').then(m => m.default)},
    'index.html': {size: 37482, hash: '43cf2151c768a146f89086c1bee7031c723d2e53c1acf09747489f2556380983', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'treatments/index.html': {size: 31128, hash: 'd13c85baf8de37fe2b70cf1ac2a3a7faeea7e98d5821aded9a2a5e3cacb5611f', text: () => import('./assets-chunks/treatments_index_html.mjs').then(m => m.default)},
    'styles-7LBXA3M4.css': {size: 2028, hash: 'EVsyDxXQd7g', text: () => import('./assets-chunks/styles-7LBXA3M4_css.mjs').then(m => m.default)}
  },
};
