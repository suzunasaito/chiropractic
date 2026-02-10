
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
    'index.csr.html': {size: 13949, hash: '4af2fb6d07e5cb2d3b66c8b89a720d55ea4b554f3f9bad2b1ddb4a927499f4fd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 14351, hash: 'a4c21f09317aae5c78a8772ac7c7b22f75830f54cc50247a3e4425c3af44a821', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 23220, hash: 'f17a3a9483bd0fa7768db53bf1b5a060d1b9f89f45c9d4cc811a976567290e0a', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 31338, hash: 'd76b33af382dbd1b05419b4e03eb2ce570851eff994516876a9eda2382ca919b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'treatments/index.html': {size: 23648, hash: '96ca95cdeb456b2df9bfa8921b56d31d2cf3599104c4bad63493c2ffffe2ddf5', text: () => import('./assets-chunks/treatments_index_html.mjs').then(m => m.default)},
    'location/index.html': {size: 20383, hash: '0650d053ac3503b3ac0ef919b3ed861af08d6b5a855af096870c29a9fd1be233', text: () => import('./assets-chunks/location_index_html.mjs').then(m => m.default)},
    'styles-7LBXA3M4.css': {size: 2028, hash: 'EVsyDxXQd7g', text: () => import('./assets-chunks/styles-7LBXA3M4_css.mjs').then(m => m.default)}
  },
};
