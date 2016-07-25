document.addEventListener('DOMContentLoaded', function(event) {
  var toggleButton = Sizzle('.mobile-docs-toggle')[0];
  var sidebar = Sizzle ('aside.sidebar')[0];
  var body = Sizzle ('body')[0];

  toggleButton.addEventListener("click", function(e){
    sidebar.classList.toggle('open');
    body.classList.toggle('menu-open');
  });

  var languageSelect = Sizzle('#language-select')[0];
  languageSelect.addEventListener("change", function(e){
    var currentUrl = window.location.href;
    var urlArray = currentUrl.replace(/https?:\/\//i, '').split('/');
    urlArray.shift();
    var newUrl = e.target.value + urlArray.join('/');
    window.location = newUrl;
  });
  /*function resize() {
      if (window.innerWidth>=820 && sidebar.classList.contains('open'))
          sidebar.classList.toggle('open');
  }
  window.addEventListener("resize", resize);*/
});
