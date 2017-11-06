/**
 * Connoisseur Theme - Hugo
 * @since 11-02-2017
 * @author Joseph Rex <josephrexme>
 *
 */

// http://dustindiaz.com/smallest-domready-ever
function ready(cb) {
  /in/.test(document.readyState) // in = loadINg
    ? setTimeout(ready.bind(null, cb), 9)
    : cb();
}
ready(function(){
  // Highlight with Prism
  Prism.highlightAll();
  // Typeset MathJax
  // MathJax.Hub.Queue(['Typeset', MathJax.Hub]);
});
