
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
    'index.csr.html': {size: 13835, hash: 'c615016de26fd927234b19d6f85ff3194e38808c25ff65c39f56525fd2191d46', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 14348, hash: 'c07bcb7333dcade66df3409dd0ebbb6e18e6e8f761cf22625eeb890593715cfa', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 25098, hash: '30b58d2ae258b540f5f5d14620aacb64d69a534463687cc17ddefe028270c1aa', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'treatments/index.html': {size: 25728, hash: 'd08d6e8227608d891d7ad9c4a2185ce5caf45e8304ecef5ba3f4db3241286ed6', text: () => import('./assets-chunks/treatments_index_html.mjs').then(m => m.default)},
    'index.html': {size: 31261, hash: 'ff5996c36f47caad0908a1ea90e84c41f15b157fb6010469b7f42f46ad480b16', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'location/index.html': {size: 20703, hash: '7dbd02f4b43b8c394049bb02d6c6c53f67466af0fc2999899782741d410eac3a', text: () => import('./assets-chunks/location_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
