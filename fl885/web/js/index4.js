(function(a,b){conf={web_context:"/c",web_session_timeout:parseInt("1440"),scroll_to_duration:200,login_processing_url:"/c/pc/login_process",block_options:{defaultBlock:false,message:'<div class="blockui-bg"></div><div class="blockui-txt"></div><div class="blockui-loading"></div>',css:{},overlayCSS:{}},tipsy_options:[{selector:".text-tooltip",options:{opacity:1,gravity:"nw",fade:true}}],};a.conf=conf})(window);
conf.tipsy_options=[{selector:".text-tooltip",options:{opacity:1,gravity:"nw",fade:true}},{selector:".text-tooltip-left",options:{opacity:1,gravity:"ne",fade:true}}];
(function(f,h){util={showView:function(i){var j=i.attr("data-model");$("#"+j).show()},hideView:function(i){var j=i.attr("data-model");$("#"+j).hide()},toggleView:function(i){if(jQuery.type(i)==="string"){i=$(i)}i.closest(".toggle-view-container").find(".toggle-view").toggle()},getUrlParam:function(i){var j=new RegExp("(^|&)"+i+"=([^&]*)(&|$)"),k=f.location.search.substr(1).match(j);if(k!=null){return unescape(k[2])}return null},showPaginationLoading:function(i){$(i).closest(".pagination-bar").find(".pagination-loading").show()},blockUI:function(i){if($.type(i)==="undefined"){i=conf.block_options}$.blockUI(i)},unblockUI:function(){$.unblockUI()},getIcon:function(i){return conf.web_context+"/static/i/"+i},scrollTo:function(j,i){if(i==null){$.scrollTo(j,conf.scroll_to_duration)}else{$.scrollTo(j,conf.scroll_to_duration,i)}},decode:function(i){return decodeURIComponent(i)},removeRow:function(j){var i=$(PrimeFaces.escapeClientId(j.source));i.closest("tr").remove()},removeMe:function(j){var i=$(PrimeFaces.escapeClientId(j.source));i.remove()},escapeClientId:function(i){return i.replace(/:/g,"\\:")},scrollbar:function(){var j=f.innerWidth;if(!j){var i=document.documentElement.getBoundingClientRect();j=i.right-Math.abs(i.left)}return{bodyIsOverflowing:document.body.clientWidth<j,fullWindowWidth:j,scrollbarWidth:c()}},modalPopup:function(j,i,k){if(i=="show"){$("body").css({overflow:"hidden"});b();j.show();j.find(".j_close").click(function(){util.modalPopup(j,"hide",k)});if(k&&typeof k=="function"){k(util.scrollbar)}if($.support.transition){setTimeout(function(){j.addClass("in")},5)}}else{if($.support.transition){j.removeClass("in");j.one($.support.transition.end,function(){a();j.hide();if(k&&typeof k=="function"){k(util.scrollbar)}})}else{if(i=="hide"){a();j.hide();if(k&&typeof k=="function"){k()}}}$("body").css({overflow:"auto"})}},mobileModalPopup:function(i,j,k){if(j=="show"){i.show();if(i.find(".dialog-operate-change").length>0){i.find(".dialog-operate-change").show().animate({opacity:1})}$(".ui-page").css({overflow:"hidden",height:"100%"});i.find(".j_close").click(function(){util.mobileModalPopup(i,"hide");if(i.find(".dialog-operate-change").length>0){i.find(".dialog-operate-change").hide()}});if(k&&typeof k=="function"){k()}setTimeout(function(){i.addClass("in")},5)}else{$(".ui-page").css({overflowX:"hidden",overflowY:"visible",height:"auto"});i.removeClass("in");i.one($.support.transition.end,function(){i.hide();if(k&&typeof k=="function"){k()}})}},affixFun:function(){$(".j_affix").each(function(){var j=$(this);j.affix({offset:{top:function(){return(this.bottom=j.parent().position().top+25)}}});var m=$("footer"),i,l=$(document),k=$(f);if(m.length>0){i=m.offset().top-j.outerHeight();k.scroll(function(){if(l.scrollTop()>i){j.css({position:"absolute",top:i})}else{j.removeAttr("style")}})}})},mobileAffixFun:function(){$(".j_affix").each(function(k,m){var l=$(this);l.wrap('<div class="'+(l.data("class")||"")+'" id="affix-wp'+k+'" style="height:'+l.height()+'px">');var j=$("#affix-wp"+k);l.affix({offset:{top:function(){return(j.offset().top)}}})})},mobileShiftTab:function(){$(".j_affix a").click(function(){$("body,html").animate({scrollTop:$($(this).attr("href")).offset().top-$(".j_affix").height()},500);return false})},dialogExtendShow:function(k){$("body").css({overflow:"hidden"});PF(k).show();var i=$("#"+k),j;i.css({height:"100%",width:"100%",left:0,top:0});j=i.find(".dialog-width").val();i.find(".ui-dialog-content").css({width:j});i.data("extend",true);i.find(".j_close").click(function(){util.dialogExtendHide(k)});b();if($.support.transition){setTimeout(function(){i.addClass("fade")},5)}},dialogExtendHide:function(k){var j=$("#"+k),l=false,i=function(){PF(k).hide();a()};if($.support.transition){j.removeClass("fade");j.one($.support.transition.end,i)}else{i()}$(".ui-dialog").each(function(){if($(this).get(0).clientWidth>0&&$(this).attr("id")!=k){l=true}});if(!l){$("body").css({overflow:"auto"})}},getQrTicket:function(i){$.ajax({type:"get",url:"http://localhost:8080/message/rs/wechat/qr/customer/accountassociation?id="+i+"&systemtoken=xxxtoken",success:function(j){return j}})},centerImage:function(k){var j,i,m,l;if(($(k.wrapper).width()/$(k.wrapper).height())>k.imageRatio){j=$(k.wrapper).width();i=$(k.wrapper).width()/k.imageRatio;if(k.valign=="top"){m=0}if(k.valign=="middle"){m=($(k.wrapper).height()-i)/2}if(k.valign=="bottom"){m=$(k.wrapper).height()-i}$(k.image).css({width:j,height:i,top:m,left:0})}else{j=$(k.wrapper).height()*k.imageRatio;i=$(k.wrapper).height();if(k.halign=="left"){l=0}if(k.halign=="center"){l=($(k.wrapper).width()-j)/2}if(k.halign=="right"){l=$(k.wrapper).width()-j}$(k.image).css({width:j,height:i,top:0,left:l})}},showSlideMask:function(i){if(jQuery.type(i)==="string"){i=$(i)}i.slideDown();$("body").css("overflow","hidden")},hideSlideMask:function(i){if(jQuery.type(i)==="string"){i=$(i)}i.slideUp();$("body").css("overflow","auto")},expandPanel:function(j){if(jQuery.type(j)==="string"){j=$(j)}var k,i;k=j.parents(".expand-panel-content-wrapper").find(".expand-panel-content");i=j.parents(".expand-panel-content-wrapper");i.height(k.height()+10);i.css({overflow:"visible"});j.hide();j.siblings(".fold-btn").show()},foldPanel:function(j){if(jQuery.type(j)==="string"){j=$(j)}var i;i=j.parents(".expand-panel-content-wrapper");var k=i.attr("data-height");i.css({overflow:"hidden"});i.height(k);j.hide();j.siblings(".expand-btn").show()},showError:function(i,j){i.text(j).show()},clearError:function(i){i.text("").hide()},bindToolTips:function(){if($.fn.tipsy!=h){if(conf.tipsy_options!=h&&conf.tipsy_options.length>0){$(conf.tipsy_options).each(function(i,j){$(j.selector).tipsy(j.options)})}}},checkScroll:function e(){if($.mobile!=h&&$(".ui-page-active .btn-more").length>0){scrolled=$(f).scrollTop(),target=$(".list-more").offset().top;windowHeight=$(f).height();if(scrolled>=target-windowHeight*0.8){$(".btn-more").click()}}},isWechatBrowser:function d(){if(navigator.userAgent.indexOf("MicroMessenger")!=-1){return true}return false},sortParams:function g(j){var k,i;i=Object.keys(j);i.sort();i.each(function(l){k+=j[l]})},deparam:function(l,i){var k={},j={"true":!0,"false":!1,"null":null};$.each(l.replace(/\+/g," ").split("&"),function(o,t){var n=t.split("="),s=util.decode(n[0]),m,r=k,p=0,u=s.split("]["),q=u.length-1;if(/\[/.test(u[0])&&/\]$/.test(u[q])){u[q]=u[q].replace(/\]$/,"");u=u.shift().split("[").concat(u);q=u.length-1}else{q=0}if(n.length===2){m=util.decode(n[1]);if(i){m=m&&!isNaN(m)?+m:m==="undefined"?h:j[m]!==h?j[m]:m}if(q){for(;p<=q;p++){s=u[p]===""?r.length:u[p];r=r[s]=p<q?r[s]||(u[p+1]&&isNaN(u[p+1])?{}:[]):m}}else{if($.isArray(k[s])){k[s].push(m)}else{if(k[s]!==h){k[s]=[k[s],m]}else{k[s]=m}}}}else{if(s){k[s]=i?h:""}}});return k},replaceHtmlLineSeparator:function(i){return i.replace(/<[bB][rR]\s*\/?>/g,"\n")}};f.util=util;function c(){var j,i;j=document.createElement("div");j.className="modal-scrollbar-measure";$("body").append(j);i=j.offsetWidth-j.clientWidth;$("body")[0].removeChild(j);return i}function b(){var i=parseInt(($("body").css("padding-right")||0),10);originalBodyPad=document.body.style.paddingRight||"";if(util.scrollbar.bodyIsOverflowing){$("body").css({"padding-right":i+util.scrollbar.scrollbarWidth})}}function a(){$("body").css({"padding-right":originalBodyPad})}})(window);
$(document).ready(function(){var c;b();function b(){$(".j_bxslider").bxSlider({pager:false})}$(document).on("click",".show-modal-popup",function(){var d=$(this).attr("data-modal");util.modalPopup($("#"+d),"show");$(document).on("click","#"+d+" .j_close",function(){util.modalPopup($("#"+d),"hide")})});if($(".expand-panel-wrapper").length>0){$(".expand-btn").each(function(){var e,d;e=$(this).parents(".expand-panel-content-wrapper").find(".expand-panel-content");d=$(this).parents(".expand-panel-content-wrapper");if(d.height()>=e.height()){$(this).css({display:"none"})}})}$(document).delegate(".expand-panel-wrapper .expand-btn","click",function(){util.expandPanel($(this))});$(document).delegate(".expand-panel-wrapper .fold-btn","click",function(){util.foldPanel($(this))});if($(".qrcode-banner-bottom").length>0){$(document).delegate(".qrcode-banner-bottom-close","click",function(){$(".qrcode-banner-bottom").hide()})}$(document).on("click",".closable-note .j_close",function(){$(this).parent().fadeOut()});if($(".login-model").length>0){var a=$("header");$(".login-model").each(function(f,g){var d=$(this);d.find(".j_close").click(function(){util.modalPopup($("#"+d.attr("id")),"hide",function(e){a.css("margin-right",0)})});d.find(".j_switch").click(function(){var h=$(this),e=$("#"+d.attr("id"));util.modalPopup(e,"hide",function(i){a.css("margin-right",0)});if($.support.transition){e.one($.support.transition.end,function(){util.modalPopup($(h.attr("href")),"show",function(i){a.css("margin-right",-i.scrollbarWidth)})})}else{util.modalPopup($(h.attr("href")),"show",function(i){a.css("margin-right",-i.scrollbarWidth)})}return false})})}if($(".btn-many-lawsuit-category").length>0){$(".many-lawsuit-category-select input[type=checkbox]").change(function(){$(".btn-many-lawsuit-category").removeClass("display-none");$(".btn-many-lawsuit-category-disabled").addClass("display-none");if($(".many-lawsuit-category-select input:checked").length>0){$(".btn-many-lawsuit-category").removeClass("display-none");$(".btn-many-lawsuit-category-disabled").addClass("display-none")}else{$(".btn-many-lawsuit-category").addClass("display-none");$(".btn-many-lawsuit-category-disabled").removeClass("display-none")}})}util.bindToolTips();$(document).on("click",".btn-upload-file",function(d){var f=$(this).attr("data-model");$("#"+f).find(".upload-file").trigger("click")});$(document).on("click",".j_lawsuit_banner_popup",function(){$(".lawsuit-compare-popup").slideDown();$(".j_lawsuit_banner_popup").hide();$(".j_lawsuit_banner_close").show()});$(document).on("click",".j_lawsuit_banner_close",function(){$(".lawsuit-compare-popup").slideUp();$(".j_lawsuit_banner_close").hide();$(".j_lawsuit_banner_popup").show();util.scrollTo("header")})});
$(document).ready(function(){if($("#page-home").length==0){return}if($.browser.msie&&($.browser.version=="9.0"||$.browser.version=="8.0"||$.browser.version=="7.0")){setInterval(bumpingArrowAnimate,1100)}initBanner();navScroll();$(window).resize(function(){setTimeout(initBanner(),100)});$(window).scroll(function(){navScroll()});$(".bumping-arrow a").click(function(){$("body").scrollTo(".main-title",{axis:"y",offset:-95,duration:600,easing:"easeInOutExpo"})})});function initBanner(){var g=100;var f=600;var h=$(window).height();var c=$(".banner").width();var e=1600/580;if(h<500){var b=f}else{var b=h-g}$(".banner").css({height:b});var d=b*e;if(d<c){d=c;a=c/e}else{var a=b}$(".banner img").css({width:d,height:a,bottom:0,left:(c-d)/2});$(".banner-text").css({top:(b-$(".banner-text").height())/2+30,left:(c-$(".banner-text").width())/2});$(".bumping-arrow").css({left:(c-$(".bumping-arrow").width())/2-1});$(".banner-text").show();$(".banner img").show();if(h<700){$(".bumping-arrow").hide()}else{$(".bumping-arrow").show()}}function navScroll(){var a=$(window).scrollTop();if(a>0){$(".nav-banner").hide().removeClass("nav-banner").fadeIn()}else{$(".nav").addClass("nav-banner")}}function bumpingArrowAnimate(){$(".bumping-arrow a").animate({bottom:20},500);$(".bumping-arrow a").animate({bottom:0},500)};
$(document).ready(function(){if($("#page-lawsuitentry").length==0){return}function b(){util.centerImage({wrapper:".lawyer-query",image:".lawyer-query img",imageRatio:1600/463,halign:"left",valign:"bottom"})}b();$(window).resize(function(){setTimeout(b(),100)});$(".show-multi-selection").click(function(){var d=$(this).parents("tr");if(d.find(".multiple-selection-panel").hasClass("hide")){a(d)}});$(".btn-cancel").click(function(){c($(this).parents("tr"))});$(".multiple-selection-tooltip-helper").each(function(){$(this).children("li").each(function(e,g){var d=e;var f=$(this).parents(".multiple-selection-tooltip-helper").siblings(".ui-selectmanycheckbox");if($(this).hasClass("tooltip-on")){f.find("td label").eq(e).append("<span class='text-tooltip' title='"+$(this).text()+"'></span>")}})});$(".text-tooltip").tipsy({opacity:1,gravity:"nw",fade:true});function c(d){d.find(".multiple-selection-panel").addClass("hide");d.find(".single-selection-panel").removeClass("hide");d.find(".show-multi-selection").show()}function a(d){$(".multiple-selection-panel").addClass("hide");$(".single-selection-panel").removeClass("hide");$(".show-multi-selection").show();$(".multiple-selection-panel input[type=checkbox]").prop("checked",false);$(".multiple-selection-panel .ui-chkbox .ui-chkbox-box.ui-state-active").removeClass("ui-state-active");$(".multiple-selection-panel .ui-chkbox .ui-chkbox-icon.ui-icon-check").removeClass("ui-icon-check").addClass("ui-icon-blank");d.find(".single-selection-panel").addClass("hide");d.find(".show-multi-selection").hide();d.find(".multiple-selection-panel").removeClass("hide")}});
$(document).ready(function(){if($("#page_authorities").length==0){return}if($.isFunction($.fn.scrollspy)){$("body").scrollspy({target:"#myScrollCity",offset:182})}$("#tab-content .list").each(function(){$(this).find(".item").last().addClass("last")});$(window).scroll(function(){var a=$(document).scrollTop();if(a>=1197){$("#tab-content").css("padding-top","182px")}else{$("#myScrollCity li").eq(0).addClass("active");$("#tab-content").css("padding-top","0px")}});$("#expert .header a").click(function(){$(this).parent().addClass("active").siblings().removeClass("active");$("body,html").animate({scrollTop:$($(this).attr("href")).offset().top-182},500);return false})});
$(document).ready(function(){if($("#page_casediscussion").length==0){return}$(document).on("hide.bs.collapse",".collapse",function(c){var b=$(this);var d=b.parent().find(".unfold.unfold-btn");d.find(".aw").attr("class","aw aw-double-down");d.find(".text").html("展开")});$(document).on("show.bs.collapse",".collapse",function(c){var b=$(this);var d=b.parent().find(".unfold.unfold-btn");d.find(".aw").addClass("open");d.find(".text").html("收起")});$(document).on("click",".lawyer-list > li",function(g){var c=$(this);var d=c.data("target");if(!$.contains($(d)[0],$(g.target)[0])){var f=g.target.nodeName;var b=["A"];if(b.indexOf(f)<0){$(d).collapse("toggle")}}});$(document).on("click",".btn-view-simple",function(){$(this).removeClass("btn-default-primary").addClass("btn-primary");$(".btn-view-detail").removeClass("btn-primary").addClass("btn-default-primary");$(".unfold.unfold-btn").find(".aw").removeClass("open");$(".unfold.unfold-btn").find(".text").html("展开");$(".collapse").collapse("hide")});$(document).on("click",".btn-view-detail",function(){$(this).removeClass("btn-default-primary").addClass("btn-primary");$(".btn-view-simple").removeClass("btn-primary").addClass("btn-default-primary");$(".unfold.unfold-btn").find(".aw").addClass("open");$(".unfold.unfold-btn").find(".text").html("收起");$(".collapse").collapse("show")});$(document).on("click",".j-showNewAppointment",function(){$(".direct-appointment").hide();$("#appointment_dialog .dialog-header span").eq(0).attr("class","icon icon-direct-meet");$("#appointment_dialog .dialog-header span").eq(1).text("预约见面");$(".view-appointment").show();$(".edit-appointment").hide();$(".view-direct-appointment").hide()});$(document).on("click",".j-directShowNewAppointment",function(){$(".direct-appointment").hide();$("#appointment_dialog .dialog-header span").eq(0).attr("class","icon icon-order-time");$("#appointment_dialog .dialog-header span").eq(1).text("预约见面");$(".view-appointment").show();$(".edit-appointment").hide();$(".view-direct-appointment").hide()});var a=function(){var c=function(){var d=$("#j_marketing_title"),e=$("#marketing-content");var f=e.find(".bxslider").bxSlider({pager:false,controls:false,infiniteLoop:false});d.find("a").click(function(){var i=$(this),g=i.parent().index();i.addClass("open").parent().siblings().find("a").removeClass("open");if(e.is(":hidden")){e.attr("style","display:block;height:1px;overflow:hidden;visibility: hidden;");f.reloadSlider({pager:false,controls:false,infiniteLoop:false,startSlide:g});setTimeout(function(){e.removeAttr("style").slideDown()},50)}else{var h=e.data("index");if(h==g){i.removeClass("open");e.slideUp()}else{f.goToSlide(g)}}e.data("index",g)})};var b=function(){var d=$("#question");$(document).on("click",".j_replay",function(){var e=$(this);e.parents(".footer").slideUp().next().slideDown();$("body,html").animate({scrollTop:e.parents("li").position().top-45},310)});$(document).on("click",".j_close",function(){$(this).parents(".replay").slideUp().prev().slideDown()})};return{init:function(){},marketingFun:c,questionDetail:function(){b();questionReplay()}}}();a.marketingFun();a.questionDetail()});var createQuestionEffect=function(){$list=$("#question-list");var b=$list.children();var a=b.filter(".top:last").next();a.hide();setTimeout(function(){discussionEffect(a)},300)};var questionReplay=function(){var a=$(".newReplyMessage");a.hide();util.scrollTo(".newReplyMessageBottom",{offset:-300});setTimeout(function(){discussionEffect(a)},300)};function discussionEffect(a){a.addClass("twinkle");a.slideDown(400,function(){var b=setInterval(function(){a.hasClass("twinkle")?a.removeClass("twinkle"):a.addClass("twinkle")},80);setTimeout(function(){clearInterval(b)},410)})}var closeAppointmentDialog=function(){util.dialogExtendHide("appointment_dialog")};var closeTimeDialog=function(){util.dialogExtendHide("appointment_time_dialog")};var showMessageDialog=function(){util.dialogExtendShow("appointment_success")};var showInvitationMessageDialog=function(){util.dialogExtendShow("invitation_lawyer_message_dialog")};function openProposalLawAdvice(a,b){window.open("lawadvice?lsid="+a+"&lid="+b,"_blank")}function openProposalServicePrice(a,b){window.open("serviceprice?lsid="+a+"&lid="+b,"_blank")};
$(document).ready(function(){if($("#page_consultation_detail").length==0){return}var b=$("#advice-detail"),a=$("#advice-edit-form");b.find(".j_edit").click(function(){b.slideUp();a.slideDown()});a.find(".j_cancel").click(function(){b.slideDown();a.slideUp()});if($(".affix-footer").offset().top>$(window).height()){$(".j_affix_flag").addClass("j_affix_answer")}else{$(".j_affix_flag").removeClass("j_affix_answer")}$(".j_affix_answer").affix({offset:{top:function(){return($(".j_affix_answer").parent().position().top-$(window).height()/1.2)}}});$(window).scroll(function(){if($(window).scrollTop()+$(window).height()+20>$(".affix-footer").offset().top){$(".j_affix_answer").removeClass("affix")}else{if($(window).scrollTop()>$(".j_affix_answer").parent().position().top-$(window).height()/1.2){$(".j_affix_answer").addClass("affix")}}})});var consultationDetailShow=function(){$("#advice-detail").slideDown();$("#advice-edit-form").slideUp()};
$(document).ready(function(){if($("#page_consultation_submit").length==0){return}var a=util.getUrlParam("error");if(a=="notfounduser"){$(".account-message-error").show();$(".account-message-error li").hide();$(".not-found-user-error").show()}if(a=="invalidpassword"){$(".password-message-error").show();$(".password-message-error li").hide();$(".wrong-password-error").show()}var b=util.getUrlParam("useridentifier");if(b!=null||b!=""){$(".login_name").val(b)}$("#login_submit").on("click",function(){if($.trim($(".login_name").val())==""){$(".account-message-error").show();$(".account-message-error li").hide();$(".login-name-required-error").show();return}if($.trim($(".login_password").val())==""){$(".password-message-error").show();$(".password-message-error li").hide();$(".password-required-error").show();return}var e=$("#login");var c=e.serialize();var d=e.attr("action")+"?dummy="+new Date().getTime();$.post(d,c,function(f){if(f.success){$(".completeSubmitConsultation").click();return}$(".login_name").val(f.userIdentifier);if(f.errorType=="notfounduser"){$(".account-message-error").show();$(".account-message-error li").hide();$(".not-found-user-error").show();return}if(f.errorType=="invalidpassword"){$(".password-message-error").show();$(".password-message-error li").hide();$(".wrong-password-error").show()}},"json")})});var registerModelShow=function(){$(window).scrollTop(0);util.modalPopup($("#register_model"),"show",function(a){$("header").css("margin-right",-a.scrollbarWidth)})};
$(document).ready(function(){if($("#page_entrustedbid").length==0){return}var a=function(){var b=function(){var c=$("#j_marketing_title"),d=$("#marketing-content");var e=d.find(".bxslider").bxSlider({pager:false,controls:false,infiniteLoop:false});c.find("a").click(function(){var h=$(this),f=h.parent().index();h.addClass("open").parent().siblings().find("a").removeClass("open");if(d.is(":hidden")){d.attr("style","display:block;height:1px;overflow:hidden;visibility: hidden;");e.reloadSlider({pager:false,controls:false,infiniteLoop:false,startSlide:f});setTimeout(function(){d.removeAttr("style").slideDown()},50)}else{var g=d.data("index");if(g==f){h.removeClass("open");d.slideUp()}else{e.goToSlide(f)}}d.data("index",f)})};return{init:function(){},marketingFun:b,}}();a.marketingFun()});
$(document).ready(function(){if($("#page_feature_lawsuit_bid").length==0){return}$(".feature-bid-tabs li a").on("click",function(){$(".feature-bid-tabs li").removeClass("active");$(this).parent().addClass("active");$(".feature-bid-content").hide();var a=$(this).parent().index();$(".feature-bid-content").eq(a).show()})});
$(document).ready(function(){if($("#page_help").length==0){return}if($.isFunction($.fn.scrollspy)){$("body").scrollspy({target:"#myScrollspy",offset:150})}});
var fillbox;var count;$(document).ready(function(){if($("#page_lawsuit").length==0){return}util.blockUI();a();lawsuitFillbox();$(document).on("click",".click-submit-current-slide",function(){$("#j_lawsuit_fillbox").find(".submit-current-slide").eq(fillbox.getCurrentSlide()).click()});function a(){$(".j_bxslider").bxSlider({pager:false})}var b=util.getUrlParam("error");if(b=="notfounduser"){$(".account-message-error").show();$(".account-message-error li").hide();$(".not-found-user-error").show()}if(b=="invalidpassword"){$(".password-message-error").show();$(".password-message-error li").hide();$(".wrong-password-error").show()}var c=util.getUrlParam("useridentifier");if(c!=null||c!=""){$(".login_name").val(c)}$("#login_submit").on("click",function(){if($.trim($(".login_name").val())==""){$(".account-message-error").show();$(".account-message-error li").hide();$(".login-name-required-error").show();return}if($.trim($(".login_password").val())==""){$(".password-message-error").show();$(".password-message-error li").hide();$(".password-required-error").show();return}var f=$("#login");var d=f.serialize();var e=f.attr("action")+"?dummy="+new Date().getTime();$.post(e,d,function(g){if(g.success){$(".submit-whole-lawsuit").click();return}$(".login_name").val(g.userIdentifier);if(g.errorType=="notfounduser"){$(".account-message-error").show();$(".account-message-error li").hide();$(".not-found-user-error").show();return}if(g.errorType=="invalidpassword"){$(".password-message-error").show();$(".password-message-error li").hide();$(".wrong-password-error").show()}},"json")})});function lawsuitFillbox(){fillbox=$("#j_lawsuit_fillbox").bxSlider({pager:false,controls:false,infiniteLoop:false,onSliderLoad:function(){util.unblockUI()}});$citybox=$("#citybox"),$progress=$("#progress"),count=fillbox.getSlideCount();currentSlide=0;$progress.css("width",(1/5*40)+"%")}var refreshBxSlider=function(){var a=fillbox.getCurrentSlide();fillbox.reloadSlider({pager:false,controls:false,infiniteLoop:false,startSlide:a})};var refreshAndNextStep=function(){var a=fillbox.getCurrentSlide();fillbox=$("#j_lawsuit_fillbox").bxSlider({pager:false,controls:false,infiniteLoop:false,startSlide:a});count=fillbox.getSlideCount();if(a+1==count){return false}if(fillbox.getCurrentSlide()<5){$("#progress").css("width",((fillbox.getCurrentSlide()+2)/6*40)+"%")}else{$("#progress").css("width",((fillbox.getCurrentSlide()-4)/(count-6)*60+40)+"%")}fillbox.goToNextSlide()};var previosStep=function(){if(fillbox.getCurrentSlide()==0){return false}if(fillbox.getCurrentSlide()<=6){$("#progress").css("width",((fillbox.getCurrentSlide())/6*40)+"%")}else{$("#progress").css("width",((fillbox.getCurrentSlide()-6)/(count-6)*60+40)+"%")}fillbox.goToPrevSlide();return false};var nextStep=function(){if(fillbox.getCurrentSlide()+1==count){return false}if(fillbox.getCurrentSlide()<5){$("#progress").css("width",((fillbox.getCurrentSlide()+2)/6*40)+"%")}else{$("#progress").css("width",((fillbox.getCurrentSlide()-4)/(count-6)*60+40)+"%")}fillbox.goToNextSlide();return false};var registerModelShow=function(){$(window).scrollTop(0);util.modalPopup($("#register_model"),"show",function(a){$("header").css("margin-right",-a.scrollbarWidth)})};
$(document).ready(function(){if($("#page_lawsuit_main_entry").length==0){return}a();function a(){if($.cookie("lawsuitComparePopup")!="true"){setTimeout(function(){$(".lawsuit-compare-popup").slideDown();$(".j_lawsuit_banner_popup").hide();$(".j_lawsuit_banner_close").show()},500);$.cookie("lawsuitComparePopup","true",{expires:7})}}});
$(document).ready(function(){if($("#page_lawyer_detail").length==0){return}var g=$(".lawer-detail .domain li a");g.click(function(){$(this).parent().addClass("active").siblings().removeClass("active")});var a=$(".domain  li").length,b=$(".domain");var c=$(".lawer-detail .domain-wrapper .next"),d=$(".lawer-detail .domain-wrapper .prev");d.hide();if(a<=5){c.hide()}console.info(a);var e=1;c.click(function(){if(e+4<a){b.animate({left:parseFloat(b.css("left"))-191},"fast");e+=1;f()}});d.click(function(){if(e>1){b.animate({left:parseFloat(b.css("left"))+191},"fast");e-=1;f()}});function f(){if(e<2){d.hide()}else{d.show()}if(e+4<6){c.show()}else{c.hide()}}});
$(document).ready(function(){if($("#page_login").length==0){return}var a=util.getUrlParam("error");if(a=="notfounduser"){$(".account-message-error").show();$(".account-message-error li").hide();$(".not-found-user-error").show()}if(a=="invalidpassword"){$(".password-message-error").show();$(".password-message-error li").hide();$(".wrong-password-error").show()}var b=util.getUrlParam("useridentifier");if(b!=null||b!=""){$(".login_name").val(b)}$("#login_submit").on("click",function(){if($.trim($(".login_name").val())==""){$(".account-message-error").show();$(".account-message-error li").hide();$(".login-name-required-error").show();return}if($.trim($(".login_password").val())==""){$(".password-message-error").show();$(".password-message-error li").hide();$(".password-required-error").show();return}$("#login").submit()})});
$(document).ready(function(){if($("#page_payment").length==0){return}$(".input-payment-channel").val("ALIPAY");$(".pay-btn-alipay").on("click",function(){var d=$(".input-payment-channel").val();var c=$(".alipay-form-link").attr("href")+"&pch="+d;window.open(c)});$(".pay-btn-bank").on("click",function(){var d=$(".input-payment-channel").val();var c=$(".alipay-form-link").attr("href")+"&pch="+d;window.open(c)});function a(c){c.on("click",function(){$(this).addClass("active").siblings().removeClass("active");$(this).parents("section").find(".pay-btn").removeClass("disabled");$(this).parents("section").siblings().find(".pay-btn").addClass("disabled");$(this).parents("section").siblings().find(".active").removeClass("active");$(".input-payment-channel").val($(this).find(".bank-logo").text());if($(this).hasClass("pay-platform-alipay")){$(".pay-btn-wechatpay").addClass("display-none");$(".pay-btn-alipay").removeClass("display-none")}if($(this).hasClass("pay-platform-wechatpay")){$(".pay-btn-wechatpay").removeClass("display-none");$(".pay-btn-alipay").addClass("display-none")}})}function b(c){c.each(function(){if($(this).hasClass("active")){$(this).append("<span class='icon icon-success'></span>")}})}a($(".internetbank li"));a($(".installment li"));a($("label.btn"));a($("#card-num"))});
$(document).ready(function(){util.affixFun();if($("#page_proposal").length==0){return}$(".j_affix").each(function(){var j=$(this);j.affix({offset:{top:function(){return(this.bottom=j.parent().position().top+25)}}})});$(window.document).scroll(function(){var j=$(document).scrollTop();if(j<57){$(".suit-nav li").eq(0).addClass("active")}});if($.isFunction($.fn.scrollspy)){$("body").scrollspy({target:"#myScroll",offset:224})}$(".suit-nav a").click(function(){$("body,html").animate({scrollTop:$($(this).attr("href")).offset().top-174},500);$(this).parent().addClass("active").siblings().removeClass("active");return false});var a=$(".lawer-detail .domain li a");a.click(function(){$(this).parent().addClass("active").siblings().removeClass("active")});var f=$(".domain  li").length,c=940,b=188*f,h=$(".domain");var e=$(".lawer-detail .domain-wrapper .next"),d=$(".lawer-detail .domain-wrapper .prev");d.hide();if(f<=5){e.hide()}console.info(f);var i=1;e.click(function(){if(i+4<f){h.animate({left:parseFloat(h.css("left"))-191},"fast");i+=1;g()}});d.click(function(){if(i>1){h.animate({left:parseFloat(h.css("left"))+191},"fast");i-=1;g()}});function g(){if(i<2){d.hide()}else{d.show()}if(i+4<6){e.show()}else{e.hide()}}});
$(document).ready(function(){if($("#page_question").length==0){return}$(document).on("click","#login_previous",function(){$(".registerLoginPrevious").click()});$(document).on("click","#login_submit",function(){if($.trim($(".login_name").val())==""){$(".ui-messages-error").show();$(".ui-messages-error li").hide();$(".login-name-required-error").show();return}if($.trim($(".login_password").val())==""){$(".ui-messages-error").show();$(".ui-messages-error li").hide();$(".password-required-error").show();return}var c=$("#login");var a=c.serialize();var b=c.attr("action")+"?dummy="+new Date().getTime();$.post(b,a,function(d){if(d.success){$(".loginCompleteLawsuit").click();return}$(".login_name").val(d.userIdentifier);if(d.errorType=="notfounduser"){$(".ui-messages-error").show();$(".ui-messages-error li").hide();$(".not-found-user-error").show();return}if(d.errorType=="invalidpassword"){$(".ui-messages-error").show();$(".ui-messages-error li").hide();$(".wrong-password-error").show()}},"json")})});
$(document).ready(function(){if($("#page_register").length==0){return}function a(){util.centerImage({wrapper:".register-login-wrapper",image:".register-login-wrapper img",imageRatio:1600/576,halign:"left",valign:"center"})}a();$(window).resize(function(){setTimeout(a(),100)})});
$(document).ready(function(){if($("#page_team").length==0){return}$(function(){var a=function(){var c=0,f={};function e(g){if(g.attr("style")==undefined){g.css(toggleStyle)}else{g.removeAttr("style")}}var b=function(){team_logo_width=$(".about-circle-list li").width();toggleStyle={top:-team_logo_width};$(".about-circle-list li").height(team_logo_width)};var d=function(){$(".about-circle-list li").hover(function(){var g=$(this);e(g.find("img.team-user"))})};return{init:function(){b();d()}}}();a.init()})});
$(document).ready(function(){if($(".j_component_validation_code").length==0){return}});var countDownRun=function(a){$(".btn-validation-code").hide();$(".btn-validation-code-delegate").hide();$(".btn-validation-code-counting-down .count-down").text(a);$(".btn-validation-code-counting-down").show();var b=setInterval(function(){if(a==0){$(".btn-validation-code").show();$(".btn-validation-code-delegate").show();$(".btn-validation-code-counting-down").hide();clearInterval(b);return}a--;$(".btn-validation-code-counting-down .count-down").text(a)},1000)};
$(document).ready(function(){if($(".j_component_validation_image").length==0){return}var b=(function(){var l=5;var i=$(".register-security-code__image")[0].src+"/i/pc/";var k="register_security_code";var f="png";var d=["bvec","ntsa","uk3n","s3wx","sn5u"];function g(o,n){return Math.floor(Math.random()*(n-o))+o}function m(n){$sel=$(n);j(n,$sel);c(n)}function e(n){if(n>1&&n<6){return d[n-1]}return null}function h(o){var n=i+k+"_"+o+"."+f+"#version="+(new Date().getTime());return n}function j(o,p){var n=g(1,l);p.find(o+"__image").attr("src",h(n));p.data("validate_code",e(n))}function c(n){$(document).on("click",n+"__link",function(o){o.preventDefault();j(n,$(n))});$(document).on("click",n+"__image",function(o){o.preventDefault();j(n,$(n))})}return{render:function(n){m(n)}}})();b.render(".register-security-code");$(".btn-validation-code-delegate").on("click",function(c){if($(".loginName").val()==""){$(".login-name-error").show();$(".not-login-name-errorr").show();return}else{$(".login-name-error").hide()}a($(".register-security-code-form-group input"))});function a(c){var d=c.val().toLowerCase();if(d==""){$(".account-code-error").show();$(".account-code-error li").hide();$(".register-security-code-required-error").show();return}if(d!=$(".register-security-code-form-group").find(".register-security-code").data("validate_code").toLowerCase()){$(".account-code-error").show();$(".account-code-error li").hide();$(".not-correct-register-security-code-error").show();return}else{$(".account-code-error").hide();$(".btn-validation-code").click()}}});var countDownRun=function(a){$(".btn-validation-code").hide();$(".btn-validation-code-delegate").hide();$(".btn-validation-code-counting-down .count-down").text(a);$(".btn-validation-code-counting-down").show();var b=setInterval(function(){if(a==0){$(".btn-validation-code").show();$(".btn-validation-code-delegate").show();$(".btn-validation-code-counting-down").hide();clearInterval(b);return}a--;$(".btn-validation-code-counting-down .count-down").text(a)},1000)};
$(document).ready(function(){$(document).bind("pfAjaxError",function(){window.location.href=conf.web_context+"/servlet/errorhandler"});var i=$("#refresh-cached-page-input");if(i.length==1){var d=i.val();if(d=="0"){i.val("1")}else{document.location=document.location;return}}$(".keydown_submit").keydown(function(n){if(n.keyCode==13){$(this).closest("form").submit()}});$("body").delegate(".popup-modal","click",function(){$("body").css({overflow:"hidden"})});$("body").delegate(".popup-modal-close","click",function(){$("body").css({overflow:"auto"})});$("body").delegate(".popup-modal-input","focus",function(){$("body").css({overflow:"hidden"})});$("body").delegate(".ui-dialog-titlebar-close","click",function(){$("body").css({overflow:"auto"})});var l={sessionExtendInterval:null,scrollToSelector:null,scrollOptions:null};function c(){$.get(conf.web_context+"/servlet/session/extend",function(n){if(n=="failure"){clearInterval(l.sessionExtendInterval);l.sessionExtendInterval=null}})}function b(){if(l.sessionExtendInterval!=null){clearInterval(l.sessionExtendInterval)}l.sessionExtendInterval=setInterval(c,60*1000*(conf.web_session_timeout-5))}b();$(document).ajaxSend(function(){b()});f(false);g();$(document).on("pfAjaxSend",function(p,o,n){b();l.scrollToSelector=null;l.scrollOptions=null;l.scrollToSelector=k(n,"scrollto");l.scrollOptions=k(n,"scrolloptions");var q=k(n,"block");if(a(q)){util.blockUI()}});$(document).on("pfAjaxComplete",function(q,p,o){util.unblockUI();f(true);g();util.bindToolTips();var n=null;if(l.scrollToSelector!=null){if(l.scrollOptions!=null){n=JSON.parse(l.scrollOptions)}util.scrollTo(l.scrollToSelector,n)}});jsf.ajax.addOnEvent(function(o){var n=o.status;switch(n){case"begin":util.blockUI();break;case"complete":util.unblockUI();break;case"success":break}});function m(){$("input.inputTextDefaultValue").each(function(){var n=$("."+$(this).attr("id"));if(n.val()==""){n.val($(this).val())}})}function j(){$("input.inputRadioDefaultValue").each(function(){if($("."+$(this).attr("id")+" input[type='radio']:checked").length==0){$("."+$(this).attr("id")+" input[type='radio'][value='"+$(this).val()+"']").attr("checked","checked")}})}$("body").delegate("input:text, textarea","blur",function(){$(this).val($(this).val().trim())});$("body").delegate("textarea.no-return","blur",function(){$(this).val($(this).val().replace(/\n+/g,""))});function g(){m();j()}function e(n){$(this).data("onclick").call(this,n)}function a(n){if(n==undefined||n==null){n=conf.block_options.defaultBlock}return n=="true"}function f(o){$('a[href="#"]').attr("href","javascript:;");$("a[href='#']").attr("href","javascript:;");var n=new Date().getTime();$("*[onclick*='PrimeFaces.'], *[onclick*='mojarra.jsfcljs']").each(function(p){if("button"!=$(this).prop("tagName").toLowerCase()){if(!($(this).is("[id]"))){var q=((o?"mojarra_ajax_":"mojarra_")+n)+"_"+p;$(this).attr("id",q)}$(this).data("onclick",this.onclick);$(document).off("click",PrimeFaces.escapeClientId($(this).attr("id")),e);$(document).on("click",PrimeFaces.escapeClientId($(this).attr("id")),e);if(a($(this).attr("block"))){$(this).closest("form").one("submit",function(r){util.blockUI()})}$(this).removeAttr("onclick")}})}function k(q,o){var n=h(q),p;if(n==null){return null}p=n.attr(o);if($.type(p)==="undefined"||p=="@none"||p==""){return null}return p}function h(n){var o=n.source;if($.type(o)==="string"){return $(PrimeFaces.escapeClientId(o))}if($.type(o)==="object"){return $(o)}return null}});