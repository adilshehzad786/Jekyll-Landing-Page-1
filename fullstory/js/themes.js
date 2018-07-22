var themes = {
   "default": "/fullstory/css/default.css",
   "dark": "/fullstory/css/dark.css",

      //etc... add your stylesheet from https://bootswatch.com/
      //example:
      // "ADDNAME": "//bootswatch.com/ADDNAME/bootstrap.min.css"
}

//switches
$(function() {
   var themesheet = $('<link href="' + themes['default'] + '" rel="stylesheet" />');
   themesheet.appendTo('head');
   $('.theme-link').click(function() {
      var themeurl = themes[$(this).attr('data-theme')];
      themesheet.attr('href', themeurl);
   });
});
