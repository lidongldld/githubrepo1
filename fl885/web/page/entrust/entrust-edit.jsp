<%@ page language="java" import="java.util.*" pageEncoding="GBK"%>
<!DOCTYPE HTML>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
<meta http-equiv="Content-Type" content="text/html; charset=GBK" />
<title>法律帮帮网-丽水在线法律服务平台</title>
<meta name="keywords" content="法律帮帮网，法律服务，找律师，打官司，免费法律咨询" />
<meta name="description" content="法律帮帮网- 专业法律O2O平台，海量优秀律师，首创律师竞标模式，让你的利益最大化；平台暂管律师服务费，律师服务出问题先行赔付。找律师，打官司，免费法律咨询更靠谱。" />
<link rel="shortcut icon" type="image/ico" href="http://www.yingle.com/c/static/i/favicon-v4.png" />
<link rel="stylesheet" href="../../css/index1.css" type="text/css" />
<link rel="stylesheet" href="../../css/index2.css" type="text/css" />
<%@include file="../../js-library/jsp_common_header.jsp"%>
<style>
.marketing-icon{display:inline-block;width:92px;height:92px;background:url("../../image/consult/icon_marketing.png") left top no-repeat;vertical-align:middle}.marketing-icon-txt{background-position:0 0}.marketing-icon-calc{background-position:-120px 0}.marketing-icon-shield{background-position:-240px 0}.marketing-icon-edit{position:relative;z-index:1;left:8px;width:57px;height:60px;margin:3px 0 37px;background-position:0 -240px}.marketing-icon-crowd{width:134px;height:68px;margin-bottom:20px;background-position:-80px -240px}.marketing-icon-files{width:100px;height:61px;margin:1px 0 38px;background-position:-240px -240px}.marketing-icon-handshake{width:72px;height:52px;margin:14px 0 22px;background-position:-360px -240px}.marketing-why{width:1024px;padding-top:60px;overflow:hidden}.marketing-why ul{width:1100px}.marketing-why li{float:left;width:302px;margin-right:40px}.marketing-why .marketing-icon{float:left}.marketing-why .cnt{padding-top:2px;margin-left:110px;line-height:24px;color:#828282}.marketing-why strong{display:inline-block;padding:2px 10px 3px;margin-bottom:9px;font-weight:normal;color:#fff;font-size:18px;background-color:#aaa;border-radius:3px}.marketing-why p{margin-bottom:0}.marketing-step{width:1024px;padding-top:70px;overflow:hidden}.marketing-step ol{width:1100px}.marketing-step li{float:left;line-height:24px;text-align:center;font-size:18px;color:#626262;letter-spacing:1px}.marketing-step li.icon{margin:32px 36px 0}.marketing-step li.icon:last-child{float:right}.marketing-feature ul{width:900px;margin-left:auto;margin-right:auto;margin-top:20px}.marketing-feature li{float:left;margin-left:40px}.marketing-feature li:first-child{margin-left:0}.marketing-feature li a{display:block;width:272px;padding:15px 0 0 15px;font-size:20px;color:#fff}.marketing-feature li a:hover{background:#3c85bd;color:#fff}.marketing-feature li a a:visited{color:#fff}.marketing-feature li span{display:block;margin-top:30px;line-height:1}.marketing-feature li .iconfont{float:left;margin-right:24px;font-size:90px;line-height:1;-webkit-text-stroke-width:0}.marketing-feature-bgwhite li{text-align:center}.marketing-feature-bgwhite li a{color:#666}.marketing-feature-bgwhite li a:hover{color:#219ff0;background:0}.marketing-feature-bgwhite li a a:visited{color:#666}.marketing-feature-bgwhite li .iconfont{color:#219ff0;float:none;margin:0}
</style>

<script>
function MyAutoRun(){
	var a = document.body.scrollWidth;
	var b = document.body.scrollHeight;
	var c = (a-1080)/2;
	document.getElementById("indexDiv").style.marginLeft = c+'px';
}

function locationTo(url){
	window.open(url,'_blank');
}

function submitEntrust(){
	var entrustContent = $("#entrustContent").val();
	var phone = $("#phone").val();
	locationto("/entrust/entrustSave.do", "_self",{"entrustContent":entrustContent,"phone":phone});
}
</script>
</head>

<body onLoad="javascript:MyAutoRun();">
<div class="wraper" style="background:rgb(255,255,255);">
<div style="height:65px;">	
<header class="index-header" style="border-bottom-color:rgb(204,204,204);border-bottom: 1px solid rgb(204,204,204);">
	 <div class="index-container">
		<div class="brand index-brand">
			<a href="/c"></a>
		</div>
		<nav class="index-nav-main">
			<ul>
				<li class="index-header-first active">
					<a href="/c">首页</a>
				</li>
				<li><a href="/c/faces/pc/secure/myyingle/home;jsessionid=8eb2f33f6a59677181c6be5532bd" class="ui-link ui-widget">我的帮帮</a>
				</li>
				<li class="s-law dropdown ">
					<a href="javascript:;" class="j_dropdown" data-trigger="hover">法律服务 <span class="aw"></span>
					</a>
					<ul class="dropdown-menu" role="menu">
						<li>
							<a href="/c/faces/pc/lawsuit/entry"><span class="icon icon-hammer"></span>案件委托</a>
						</li>
						<li>
							<a href="/c/faces/pc/consultation/submit"><span class="icon icon-bubble"></span>法律咨询</a>
						</li>
					</ul>
				</li>
				<li><a href="/c/faces/pc/aboutus;jsessionid=8eb2f33f6a59677181c6be5532bd" class="ui-link ui-widget">关于我们</a>
				</li>
			</ul>
		</nav>
		<div class="header-login">
			<a href="/c/faces/pc/login;jsessionid=8eb2f33f6a59677181c6be5532bd" class="ui-link ui-widget btn btn-default">登录</a>
			<a href="/c/faces/pc/customer/register;jsessionid=8eb2f33f6a59677181c6be5532bd" class="ui-link ui-widget btn btn-default">注册</a>
		</div>
	</div>
</header>	
</div>
        
<div class="index-content">
	<div class="index-banner">
		<div style="height:100%px;margin-top:0px;padding-top:0px;">
			<div class="bg-gray advice-submit" style="margin-top:0px;padding-top:0px;">
				<div class="container clearfix">
					<div class="w-77">
						<div class="advice-submit-title mb-2" style="margin-bottom:0px;border:0px solid red;">
							<h1>
								案件委托<span class="sub-title">法律帮帮我 委托律师享受更细致的法律服务</span>
							</h1>
						</div>
						
						<div class="container pt-5 pb-7" style="margin-top:opx;padding-top:0px;border:0px solid red;height:220px;">
							<h3 class="text-center" style="font-size:18px;border:0px solid red;margin-top:0px;font-weight:bold">律师服务信手拈来</h3>
							<div class="marketing-step advice-step" style="border:0px solid red;width:692px;align:center;margin-left:13%;padding-top:0px;">
								<ol style="border:0px solid blue;margin-top:0px;">
									<li style="border:0px solid blue;width:150px;">
										<span class="marketing-icon marketing-icon-analysis" style="margin-top:0px;margin-left:0px;height:95px;"></span>
										<p style="margin-top:0px;">描述案件基本信息</p>
									</li>
									<li class="icon icon-arrow-right" style="border:0px solid blue;"></li>
									<li style="border:0px solid blue;width:150px;">
										<span class="marketing-icon marketing-icon-analysis" style="margin-top:0px;margin-left:0px;height:95px;"></span>
										<p>
											需要律师解决的问题
										</p>
									</li>
									<li class="icon icon-arrow-right" style="border:0px solid blue;"></li>
									<li style="border:0px solid blue;width:150px;">
										<span class="marketing-icon marketing-icon-light" style="margin-top:0px;margin-left:0px;height:95px;"></span>
										<p>请留下您的联系方式</p>
									</li>
								</ol>
							</div>
						</div>
						<form id="validateDataFileForm" name="validateDataFileForm" method="post" action="">
						<div class="alert alert-warning">
							<span class="icon icon-msg"></span>
							<span>请先描述案件（隐去具体名字等敏感信息），再提出需要律师解决的问题（20字以上为宜）</span>
						</div>
						<div class="form-group">
							<textarea id="entrustContent" name="entrustContent" cols="20" rows="7" maxlength="1000" style="font-family:微软雅黑;" class="ui-inputfield ui-inputtextarea ui-widget ui-state-default ui-corner-all form-control" data-p-rmsg="请至少输入20个字，详细描述问题有助于我们更好地帮助您" data-p-vmsg="请至少输入20个字，详细描述问题有助于我们更好地帮助您" data-p-minlength="20" data-p-val="javax.faces.Length"></textarea><script id="j_idt43:question_s" type="text/javascript">$(function(){PrimeFaces.cw("InputTextarea","widget_j_idt43_question",{id:"j_idt43:question",widgetVar:"widget_j_idt43_question",autoResize:false,maxlength:1000,counter:"j_idt43:consultation_submit_counter",counterTemplate:"{0}"});});</script><script id="j_idt43:j_idt45_s" type="text/javascript">$(function(){PrimeFaces.cw("Watermark","widget_j_idt43_j_idt45",{id:"j_idt43:j_idt45",widgetVar:"widget_j_idt43_j_idt45",value:"输入想要咨询的内容",target:"j_idt43:question"},"watermark");});</script>
							<div class="count">
								还可以输入<em><span id="j_idt43:consultation_submit_counter"></span></em>字
							</div>
						</div>
						
						<div class="alert alert-warning">
							<span class="icon icon-msg"></span>
							<span>请留下手机号，让律师与您取得联系。平台将隐藏信息不会做任何形式的散播。</span>
						</div>
						<div class="form-group">
							<textarea id="phone" name="phone" cols="10" rows="1" maxlength="20" style="font-family:微软雅黑;" class="ui-inputfield ui-inputtextarea ui-widget ui-state-default ui-corner-all form-control" data-p-rmsg="请至少输入20个字，详细描述问题有助于我们更好地帮助您" data-p-vmsg="请至少输入20个字，详细描述问题有助于我们更好地帮助您" data-p-minlength="20" data-p-val="javax.faces.Length"></textarea><script id="j_idt43:question_s" type="text/javascript">$(function(){PrimeFaces.cw("InputTextarea","widget_j_idt43_question",{id:"j_idt43:question",widgetVar:"widget_j_idt43_question",autoResize:false,maxlength:1000,counter:"j_idt43:consultation_submit_counter",counterTemplate:"{0}"});});</script><script id="j_idt43:j_idt45_s" type="text/javascript">$(function(){PrimeFaces.cw("Watermark","widget_j_idt43_j_idt45",{id:"j_idt43:j_idt45",widgetVar:"widget_j_idt43_j_idt45",value:"输入想要咨询的内容",target:"j_idt43:question"},"watermark");});</script>
							<div class="count">&nbsp;</div>
						</div>
						<div class="com-btn-box">
							<a id="j_idt43:j_idt49" href="#" style="background-color:rgb(1,174,240);border-color:rgb(1,174,240);font-family:微软雅黑;" class="ui-commandlink ui-widget btn btn-warning btn-lg" onclick="javascript:submitEntrust();">提交委托</a>
							<!-- a id="j_idt43:j_idt50" href="#" class="ui-commandlink ui-widget display-none completeSubmitConsultation" onclick="javascript:locationTo('entrust-edit-success.html')">提交委托</a -->
						</div>
                        </form>
                        <div class="ui-messages-center"><div id="j_idt43:j_idt54" class="ui-messages ui-widget" aria-live="polite" data-global="false" data-summary="data-summary" data-severity="all,error" data-redisplay="true"></div>
                        </div><input type="hidden" name="javax.faces.ViewState" id="j_id1:javax.faces.ViewState:0" value="-2772457975622536810:-9056902668707548447" autocomplete="off" />
					</div>
					<!-- div class="w-17 pull-right">
						
					</div-->
				</div>
			</div>

            <!-- div class="container qa-hot pt-4 pb-4">
                <div class="qa-hot-list-tab clearfix">
                    <h3>热门问题</h3>
					<ul class="clearfix">
					<li class="active"><a id="j_idt57:j_idt61" href="#" class="ui-commandlink ui-widget" onclick="PrimeFaces.ab({s:&quot;j_idt57:j_idt61&quot;,u:&quot;j_idt57&quot;});return false;">劳动纠纷</a>
					</li>
					<li><a id="j_idt57:j_idt64" href="#" class="ui-commandlink ui-widget" onclick="PrimeFaces.ab({s:&quot;j_idt57:j_idt64&quot;,u:&quot;j_idt57&quot;});return false;">婚姻家事</a>
					</li>
					<li><a id="j_idt57:j_idt67" href="#" class="ui-commandlink ui-widget" onclick="PrimeFaces.ab({s:&quot;j_idt57:j_idt67&quot;,u:&quot;j_idt57&quot;});return false;">借贷纠纷</a>
					</li>
					<li><a id="j_idt57:j_idt70" href="#" class="ui-commandlink ui-widget" onclick="PrimeFaces.ab({s:&quot;j_idt57:j_idt70&quot;,u:&quot;j_idt57&quot;});return false;">房产土地</a>
					</li>
					<li><a id="j_idt57:j_idt73" href="#" class="ui-commandlink ui-widget" onclick="PrimeFaces.ab({s:&quot;j_idt57:j_idt73&quot;,u:&quot;j_idt57&quot;});return false;">合同纠纷</a>
					</li>
					<li><a id="j_idt57:j_idt76" href="#" class="ui-commandlink ui-widget" onclick="PrimeFaces.ab({s:&quot;j_idt57:j_idt76&quot;,u:&quot;j_idt57&quot;});return false;">刑事案件</a>
					</li>
					<li><a id="j_idt57:j_idt79" href="#" class="ui-commandlink ui-widget" onclick="PrimeFaces.ab({s:&quot;j_idt57:j_idt79&quot;,u:&quot;j_idt57&quot;});return false;">交通事故</a>
					</li>
					<li><a id="j_idt57:j_idt82" href="#" class="ui-commandlink ui-widget" onclick="PrimeFaces.ab({s:&quot;j_idt57:j_idt82&quot;,u:&quot;j_idt57&quot;});return false;">医疗纠纷</a>
					</li>
					<li class="link-all">
						<a target="_blank" href="http://zixun.yingle.com/pc/"> 全部咨询<i class="iconfont icon-right-double"></i></a>
					</li>
					</ul>
				</div>
			</div -->
								
			<!--/div-->
		</div>
    </div>
            
</div>
 </body>
</html>