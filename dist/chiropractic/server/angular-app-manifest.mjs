
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
    'index.csr.html': {size: 13835, hash: '94fc09bae8a347cc838c8baa1614b057efdb828eef0c5beee6ff3ac84a112ba6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 14348, hash: 'e4e5443cdd315ea9f944bc52565a3c0382235a2ad0a3aca131161dd3eda85229', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 25143, hash: 'b79d533557005e1a838938eef61c8addb29d8328e91679270d87ccbd189c7dcb', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 31332, hash: 'bd43b97047d4cd000c83c14873bdcec9814087c5d75583a947c266ed1c1a6139', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'location/index.html': {size: 20703, hash: '67a537d5c3ad1dab0462c6dac7170daef5e2290085e76e136fe3d99cc570f5b9', text: () => import('./assets-chunks/location_index_html.mjs').then(m => m.default)},
    'treatments/index.html': {size: 25728, hash: '42c720eb9dc6ae4b8d249190667e348747c60dc8294c670400548f9cc01944a8', text: () => import('./assets-chunks/treatments_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
