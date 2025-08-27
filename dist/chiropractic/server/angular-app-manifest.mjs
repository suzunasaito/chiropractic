
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
    'index.csr.html': {size: 13835, hash: 'f20e4254ef575c2ac2c412d8defad900bbe578e22fb97e2bd6b9cb4633e31f31', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 14348, hash: 'abb20d8de9241ccbe08b73e4a4d861f7eebb237f68492a75b438bfa0c9610185', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 25007, hash: 'b675aa64fdad2d13578b594648023dc3f4803dbdd03a2303e54176702e10c704', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'location/index.html': {size: 21135, hash: 'd21d5d131369701963e8aa094cdb95901b40b5059c4681ff05ea0715f38fb93b', text: () => import('./assets-chunks/location_index_html.mjs').then(m => m.default)},
    'index.html': {size: 31133, hash: '92b132924c3f14d71adc5d7660c47ab029b5d2596101a77e1030f2f9f2f23e82', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'treatments/index.html': {size: 25591, hash: '55476b872ae4ac5a6c3b38d7639be89c7e88e74db4734bde0495f3d17ddedfe6', text: () => import('./assets-chunks/treatments_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
