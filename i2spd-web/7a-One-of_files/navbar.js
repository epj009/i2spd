$(document).ready(function(){function e(e){if(!i){var n=[];t.find(e).each(function(){n.push($(this).parent()),i=!0}),1==n.length&&(i=!0,-1==window.location.href.indexOf("/search?q")&&(n[0].addClass("active"),n[0].find("a").append('<span class="course-navbar-selected-marker">(selected)</span>')))}}$(".course-navbar-container li").removeClass("active"),$(".course-navbar-container li").remove(".course-navbar-selected-marker");var t=$(".course-navbar-container li"),i=!1;e('a[href="'+window.location.href+'"]');var n=window.location.href.split("?")[0];e('a[href^="'+n+'"]');var s=window.location.href.substr(0,window.location.href.lastIndexOf("/")+1)+"index";e('a[href^="'+s+'"]')});