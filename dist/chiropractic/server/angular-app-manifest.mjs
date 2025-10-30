
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
    'index.csr.html': {size: 13949, hash: '39e2fa6bebce8628ada442b2cd02ac235a422b9ed136f4c1f2c253a49269b27f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 14351, hash: 'd451af692da0b4b74309dfc9b32491c1c8aa6a0d5936223fa7a81f83a6b723a2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 30327, hash: 'c52e718308408732b094ee759bf7cb7d0e60e6eba9c38a4810620d000cbf257e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'treatments/index.html': {size: 23879, hash: '1928af5386cd470d8b073dba9bd1f4b27d185552d1d5607dccd1cb613a3a15ef', text: () => import('./assets-chunks/treatments_index_html.mjs').then(m => m.default)},
    'location/index.html': {size: 20862, hash: '4a6c826250d86350630b3d9dd18de8eac55e240001efa7cb8c531369ba1b6d3d', text: () => import('./assets-chunks/location_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 23352, hash: 'f432d230a3cfed34254b6ca0ecd9c95c39fee311ba59cfa1e8ea6a87938ee754', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-5AXVTDPM.css': {size: 1921, hash: 'MIUfX9aE2eg', text: () => import('./assets-chunks/styles-5AXVTDPM_css.mjs').then(m => m.default)}
  },
};
