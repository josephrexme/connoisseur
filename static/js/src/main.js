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
  var disqusContainer = document.getElementById('disqus_thread');
  // Progressive reading indicator
  var indicator = document.querySelector('.scroll-progress');
  if(indicator){
    document.addEventListener('scroll', function(e) {
      var dh = document.body.scrollHeight;
      var wh = window.innerHeight;
      var pos = window.scrollY;
      var footerHeight = 590;
      var perc = pos / (dh - footerHeight - wh) * 100;
      indicator.style.setProperty('--scale', (perc / 100));
    })
  }
  // Highlight with Prism
  Prism.highlightAll();
  // Toggle Disqus comments
  var commentTrigger = document.getElementById('toggleComments');
  if(commentTrigger){
    var disqus_config = function() {
      this.page.url = document.querySelector('[rel="canonical"]').href;
      this.page.identifier = document.querySelector('[property="og:title"]')
      .content.replace(' ', '-');
    };
    commentTrigger.addEventListener('click', function() {
      var ch = disqusContainer.clientHeight;
      document.querySelector('.comments').classList.add('comments__animate');
      // document.querySelector('.comments__animate').style
      // .setProperty('--origin', ch > 0 ? 'bottom' : 'top')
      disqusContainer.classList.toggle('u-ghost');
      setTimeout(function() {
        document.querySelector('.comments').classList.remove('comments__animate');
      }, 2000);
      disqusComments();
    });
  }
});

function disqusComments() {
  var disqus_shortname = document.querySelector('[data-disqus]').dataset.disqus;
  var dsq = document.createElement('script');
  dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
  if(typeof(DISQUS) === 'undefined') {
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0])
    .appendChild(dsq);
  }
}
