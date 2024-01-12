import * as esbuild from 'esbuild'

// FIXME: this doesn't convert to esm
// Probably need to use rollup? maybe try rspack?
esbuild.build({
  entryPoints: [
    './target/cljs_release/metabase.lib.js'
  ],

  target: 'esnext',
  format: 'esm',
  outdir: "./__generated/cljs",
  plugins: [

    // externalCjsToEsmPlugin([])
  ]
})