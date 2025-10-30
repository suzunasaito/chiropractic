
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
    'index.csr.html': {size: 13835, hash: '62b20e21ff382ed27032a01847ab8ebe32e453b753e53f17eaa7b0c90a5222d5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 14348, hash: '86bcc2dbfb39c8d082630744b98238c47751fc398a8fcdab1ea70526a66cd273', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 25143, hash: '4793b15f23ad4d25a08e4e5e6aef47c666b7440a2710acd040e12eee74f4f386', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'treatments/index.html': {size: 25728, hash: '813d0f1165c46668bca9fbb18e92f6cb27c98ac9f30c2c2b85e82340f245eda7', text: () => import('./assets-chunks/treatments_index_html.mjs').then(m => m.default)},
    'index.html': {size: 31355, hash: '9779f917248756e3b758120b796c52f66119c62f231af22dcf597078923b0b03', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'location/index.html': {size: 20703, hash: 'fa0ce664118928b72ead08b3e793774e546f0c993e999a0a4c57e6ea3e8af440', text: () => import('./assets-chunks/location_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
