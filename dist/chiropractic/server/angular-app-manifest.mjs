
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
    'index.csr.html': {size: 13949, hash: '5aaef97b0bcf1d2255a61c19457778dd7aab2ccae8567eefdc6af20a38f2eb38', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 14351, hash: '6aecbfac285f0589fa8aba850ea504520edb1512a843df38960bbb60b056cffc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'treatments/index.html': {size: 23801, hash: '01426c5cbeeb7c394e4037bd93928ca3c5c2c035e7e46751d8b8af2f8921c345', text: () => import('./assets-chunks/treatments_index_html.mjs').then(m => m.default)},
    'location/index.html': {size: 20784, hash: '48852e71635f2d92792a12493d1a990c7b999c3b0119af0706bf38c4117a2bfc', text: () => import('./assets-chunks/location_index_html.mjs').then(m => m.default)},
    'index.html': {size: 30249, hash: '2b58e6a17c41aee424fabefd251c528ac24fbcb2c32c58a67ed5254828aed3f6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 23274, hash: 'a5c16a6e4977159a18dc7874ee532ceed1ce8660bb5bd64b82fd9ea81d78d44f', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-5AXVTDPM.css': {size: 1921, hash: 'MIUfX9aE2eg', text: () => import('./assets-chunks/styles-5AXVTDPM_css.mjs').then(m => m.default)}
  },
};
