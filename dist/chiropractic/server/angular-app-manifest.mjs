
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
    'index.csr.html': {size: 21675, hash: '6b2db5ddc51fb839b745f60872d2617f93ec2e8a2bc54e64f034c48fea1a1684', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 22077, hash: 'a25eba9e9502742ec066c3e3323b335ad394e84f64aa7ffd238b25045672e767', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'treatments/index.html': {size: 31395, hash: 'f8a7cee643d0cb5b825e1ce2d7a28476ea7fa330aa182433abfeeb4278e9ab05', text: () => import('./assets-chunks/treatments_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 31096, hash: 'e466fe0384305a322984a102d7a63f095804dcf3edfc514111a7a31866d99831', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'location/index.html': {size: 28129, hash: 'df95d35f3f24161b7ed8de2b2e072d9636e9cc8d0e3e0dedb49c799cdb5e8c26', text: () => import('./assets-chunks/location_index_html.mjs').then(m => m.default)},
    'index.html': {size: 37666, hash: '739a8a146edbdd51725a1c0036792605e6826e4d0fd9e9dab889f9f73243ccb9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-7LBXA3M4.css': {size: 2028, hash: 'EVsyDxXQd7g', text: () => import('./assets-chunks/styles-7LBXA3M4_css.mjs').then(m => m.default)}
  },
};
