
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
    'index.csr.html': {size: 13835, hash: 'abf2a93f1b14ffd4b549b8e37626927b15057b6456373f29ec6812b2f85ec6c6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 14348, hash: 'c394c27b81eaa610e65be08d3d7abf442ed3061832dfd44ba872e87604d6fe35', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 25098, hash: 'a1b00cd86d4f8c58687a3e58db8d16076f0695b64108f5842caa9fbd48c18c21', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'treatments/index.html': {size: 25728, hash: 'e7202d04c683583396f7816ffe2d31a7b66959e2861b8ca4e8612cbad7c793fd', text: () => import('./assets-chunks/treatments_index_html.mjs').then(m => m.default)},
    'location/index.html': {size: 20703, hash: '1b3eaec7b444b39eb46be9d29db1702d7adc63dc78c9c8ecd550b96bc511bcbb', text: () => import('./assets-chunks/location_index_html.mjs').then(m => m.default)},
    'index.html': {size: 31261, hash: '83c1030a6074463526fc773777b5ff046239ccf4bd36f3980cd39f96234a3f61', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
