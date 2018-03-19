/* global NexT: true */

$(document).ready(function () {

  $(document).trigger('bootstrap:before');

  NexT.utils.isMobile() && window.FastClick.attach(document.body);

  NexT.utils.lazyLoadPostsImages();

  NexT.utils.registerESCKeyEvent();

  NexT.utils.registerBackToTop();

  // Mobile top menu bar.
  $('.site-nav-toggle button').on('click', function () {
    var $siteNav = $('.site-nav');
    var ON_CLASS_NAME = 'site-nav-on';
    var isSiteNavOn = $siteNav.hasClass(ON_CLASS_NAME);
    var animateAction = isSiteNavOn ? 'slideUp' : 'slideDown';
    var animateCallback = isSiteNavOn ? 'removeClass' : 'addClass';

    $siteNav.stop()[animateAction]('fast', function () {
      $siteNav[animateCallback](ON_CLASS_NAME);
    });
  });

  /**
   * Register JS handlers by condition option.
   * Need to add config option in Front-End at 'layout/_partials/head.swig' file.
   */
  CONFIG.fancybox && NexT.utils.wrapImageWithFancyBox();
  CONFIG.tabs && NexT.utils.registerTabsTag();

  NexT.utils.embeddedVideoTransformer();
  NexT.utils.addActiveClassToMenuItem();


  // Define Motion Sequence.
  NexT.motion.integrator
    .add(NexT.motion.middleWares.logo)
    .add(NexT.motion.middleWares.menu)
    .add(NexT.motion.middleWares.postList)
    .add(NexT.motion.middleWares.sidebar);

  $(document).trigger('motion:before');

  // Bootstrap Motion.
  CONFIG.motion.enable && NexT.motion.integrator.bootstrap();

  $(document).trigger('bootstrap:after');
});
console.log("%c你要给我两个选择，一个是越老越值钱的行业，熬资历磨日子混关系，\n压着你的都是哆哆嗦嗦的大叔人老珠黄的阿姨；\n等老到不能享受的时候才实现了财富自由；\n一个是年纪轻轻就有很多机会，\n日新月异，千变万化，不学习就要失业，不奋斗就要贫穷，\nwork hard play harder，工作起劲，玩得尽兴。\n打死我都要选第二个。","text-shadow: 0 0 2px #0789e0;color: #fff;background:#0eb0f6");
console.log('%c程序员是一碗青春饭，吃了它永葆青春!!!~','font-size:20px;text-shadow: 0 0 2px #0789e0;color:#fff;background:#0eb0f6;');
console.log("%c", "padding:90px 700px;background:url('http://mozlee.com/uploads/mmz.gif')no-repeat;");


