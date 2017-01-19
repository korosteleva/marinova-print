function t113_highlight(recid){var url=window.location.href;var pathname=window.location.pathname;if(url.substr(url.length-1)=="/"){url=url.slice(0,-1)}
if(pathname.substr(pathname.length-1)=="/"){pathname=pathname.slice(0,-1)}
if(pathname.charAt(0)=="/"){pathname=pathname.slice(1)}
if(pathname==""){pathname="/"}
$(".t113__list_item a[href='"+url+"']").addClass("t-active");$(".t113__list_item a[href='"+url+"/']").addClass("t-active");$(".t113__list_item a[href='"+pathname+"']").addClass("t-active");$(".t113__list_item a[href='/"+pathname+"']").addClass("t-active");$(".t113__list_item a[href='"+pathname+"/']").addClass("t-active");$(".t113__list_item a[href='/"+pathname+"/']").addClass("t-active")}
function t113_showMenu(recid,pageid){var $flagmenudo="2ok";$(window).bind('scroll',function(){if($(window).scrollTop()>200){if($flagmenudo!="1ok"){$flagmenudo="1"}}
else{if($flagmenudo!="2ok"){$flagmenudo="2"}}
if($flagmenudo=="1"){$('.t113').addClass('t113__fixed');$('.t113').css('display','none');$('.t113').fadeIn("slow");$('#rec'+recid).find('.t113__space').hide();$flagmenudo="1ok"}
if($flagmenudo=="2"){$('.t113').removeClass('t113__fixed');$('#rec'+recid).find('.t113__space').show();$flagmenudo="2ok"}});var current_path=window.location.pathname.split('/').pop();if(current_path=="page"+pageid+".html"){$("#t113linktopage"+pageid).css("opacity",".7")}}
function t113_setWidth(recid){var t113timer;var el=$('#rec'+recid);$(window).resize(function(){if(t113timer){window.clearTimeout(t113timer)}
t113timer=window.setTimeout(function(){if($(window).width()>640){var w1=el.find("div[data-hook-left]").width()+20+50;el.find(".t113__list").css("padding-right",w1+"px")}else{el.find(".t113__list").css("padding-right",10+"px")}},100)});$(window).resize()}
function t132_unifyHeights(){$('.t132__box').children('.t132__wrappper').each(function(){$(this).children('a').children('div').css('width',$(this).outerWidth()-1);$(this).children('a').children('div').css('height',$(this).outerHeight()-40)})}
function t142_checkSize(recid){var el=$("#rec"+recid).find(".t142__submit");if(el.length){var btnheight=el.height()+5;var textheight=el[0].scrollHeight;if(btnheight<textheight){var btntext=el.text();el.addClass("t142__submit-overflowed");el.html("<span class=\"t142__text\">"+btntext+"</span>")}}}
function t179_showvideo(recid){$("#rec"+recid+" .t179__playbutton").css("display","none");$("#rec"+recid+" .t179__videocontainer").css("display","block");var height=$("#rec"+recid+" .t179__videocontainer").attr("data-height");var youtubeid=$("#rec"+recid+" .t179__videocontainer").attr("data-youtube-id");if(height=="")height="540";$("#youtubeiframe_carier"+recid).html("<iframe id=\"youtubeiframe{$a.id}\" width=\"100%\" height=\""+height+"\" src=\"//www.youtube.com/embed/"+youtubeid+"?autoplay=1&rel=0&fmt=18\" frameborder=\"0\" allowfullscreen></iframe>");if(height==""){var div=$("#youtubeiframe"+recid);var height=div.width()*0.5625;div.css("height",height)}}
function t190_scrollToTop(){$('html, body').animate({scrollTop:0},700)}
function t204_clickBurger(recid){var el=$("#rec"+recid);el.find('#t204__burger').click(function(e){t204_showMenu(recid);if(window.lazy=='y'){t_lazyload_update()}});el.find('#t204__closelayer').click(function(e){t204_hideMenu(recid)})}
function t204_showMenu(recid){var el=$("#rec"+recid);el.find("#t204__menu").finish();el.find('#t204__menu').css("visibility","visible");el.find('#t204__menu').css("opacity","0");el.find('#t204__menu').css("right","-300px");el.find('#t204__menu').animate({"opacity":"1","right":"0px"},300);el.find('#t204__closelayer').css("visibility","visible")}
function t204_hideMenu(recid){var el=$("#rec"+recid);el.find("#t204__menu").finish();el.find('#t204__menu').css("visibility","hidden");el.find('#t204__closelayer').css("visibility","hidden");el.find(".t204__item a").each(function(){$(this).on('click',function(e){t204_hideMenu(recid)})})}
function t213_init(recid){var el=$("#t213-marker"+recid);var cotimer;var wnd=$(window);var bdy=$('body');var needcolor=el.attr("data-bg-color");bdy.css("transition","background-color 1000ms linear");if(window.t213higher===undefined)window.t213higher=1000000;if(window.t213higher>el.offset().top){window.t213higher=el.offset().top;window.t213higher_id=recid}
var bodydefcolor=bdy.css("background-color");var timer_count=0;wnd.scroll(function(){if(cotimer){window.clearTimeout(cotimer);if(timer_count>=15){t212_timer_do(el,wnd,bdy,needcolor,bodydefcolor,recid)}
timer_count++}
cotimer=window.setTimeout(function(){t212_timer_do(el,wnd,bdy,needcolor,bodydefcolor,recid);timer_count=0},100)});wnd.scroll()}
function t212_timer_do(el,wnd,bdy,needcolor,bodydefcolor,recid){var a,c,d,bc;a=el.offset().top;c=wnd.scrollTop();d=wnd.height();bc=bdy.attr("data-bg-color");if((c+d)>=a){bdy.css("background-color",needcolor)}else{if(window.t213higher_id==recid){bdy.css("background-color",bodydefcolor)}}}
function t376_setbg(){var bg="no";$(".r").each(function(){var el=$(this);if(el.find('.t376').length){bg=el.find('.t376').attr('data-section-bg-color')}
if(el.is("[data-bg-color]")===!1){if(bg!=="no"){if(el.is("[data-t376-bg-manual-setted]")===!1||(el.is("[data-t376-bg-manual-setted]")&&el.attr('data-t376-bg-manual-setted')!==bg)){el.css('background-color',bg);el.attr('data-t376-bg-manual-setted',bg)}}
if(bg==="no"&&el.is("[data-t376-bg-manual-setted]")){el.css('background-color','');el.removeAttr('data-t376-bg-manual-setted')}}})}