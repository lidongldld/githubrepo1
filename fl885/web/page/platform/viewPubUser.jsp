<%@page language="java" import="java.util.*" pageEncoding="GBK"%>
<%@page import="gov.util.*" %>
<%@page import="platform.login.common.LoginConst"%>
<%@page import="org.apache.commons.lang.StringUtils"%>
<%@page import="platform.login.bo.PubUserBo"%>
<%@include file="/js-library/jsp_common_dropdown.jsp"%>
<%
String currentRole = (String)session.getAttribute("CURRENTROLE");
String userId = "";
String userCode = "";
String userName = "";
if(StringUtils.isNotBlank(currentRole)&&LoginConst.ROLE_PUBUSER.equalsIgnoreCase(currentRole)){
	PubUserBo currentPerson = (session.getAttribute("CURRENTPERSON")!=null)?(PubUserBo)session.getAttribute("CURRENTPERSON"):null;
	if(currentPerson!=null){
		userId = currentPerson.getPublic_user_id();
		userCode = currentPerson.getPublic_user_code();
		userName = currentPerson.getPublic_user_name();
	}
}
%>
<!DOCTYPE HTML>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
<meta http-equiv="Content-Type" content="text/html; charset=GBK" />
<title>登录法律帮帮我网账户</title>
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="renderer" content="webkit">
<meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, width=device-width, minimal-ui">
<link rel="stylesheet" href="../../css/index1.css" type="text/css" />
<link rel="stylesheet" href="../../css/index4.css" type="text/css" />
<style type="text/css">

  body {
    background-color: #FFFFFF;
  }
  .main.container {
    margin-top: 2em;
  }

  .main.menu {
    margin-top: 4em;
    border-radius: 0;
    border: none;
    box-shadow: none;
    transition:
      box-shadow 0.5s ease,
      padding 0.5s ease
    ;
  }
  .main.menu .item img.logo {
    margin-right: 1.5em;
  }

  .overlay {
    float: left;
    margin: 0em 3em 1em 0em;
  }
  .overlay .menu {
    position: relative;
    left: 0;
    transition: left 0.5s ease;
  }

  .main.menu.fixed {
    background-color: #FFFFFF;
    border: 1px solid #DDD;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
  }
  .overlay.fixed .menu {
    left: 800px;
  }

  .text.container .left.floated.image {
    margin: 2em 2em 2em -4em;
  }
  .text.container .right.floated.image {
    margin: 2em -4em 2em 2em;
  }

  .ui.footer.segment {
    margin: 5em 0em 0em;
    padding: 5em 0em;
  }
  </style>
<script type="text/javascript" src="../../js/common2.js"></script>
<script>
$(document).ready(function(){
  $(".ui.menu .ui.dropdown").dropdown({
    on: 'hover'
  });
  $('.ui.menu a.item').on('click', function(){
      $(this)
        .addClass('active')
        .siblings()
        .removeClass('active')
      ;
    });
});

$(document)
.ready(function() {

  // fix main menu to page on passing
  $('.main.menu').visibility({
    type: 'fixed'
  });
  $('.overlay').visibility({
    type: 'fixed',
    offset: 80
  });

  // lazy load images
  $('.image').visibility({
    type: 'image',
    transition: 'vertical flip in',
    duration: 500
  });

  // show dropdown on hover
  $('.main.menu  .ui.dropdown').dropdown({
    on: 'hover'
  });
})
;

/** 查看个人信息 **/
function viewPerson(){
	var regUrl = "/login/viewPerson.do";
	var params = new Object();
	params["currentRole"]="<%=currentRole %>";
	params["userId"]="<%=userId %>";
	locationto(regUrl,"_blank",params);
}
</script>
</head>
<body>
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
							<a href="/c/faces/pc/lawsuit/entry"><span class="icon1 icon-hammer"></span>案件委托</a>
						</li>
						<li>
							<a href="/c/faces/pc/consultation/submit"><span class="icon1 icon-bubble"></span>法律咨询</a>
						</li>
					</ul>
				</li>
				<li><a href="/c/faces/pc/aboutus;jsessionid=8eb2f33f6a59677181c6be5532bd" class="ui-link ui-widget">关于我们</a>
				</li>
			</ul>
		</nav>
		<%if(StringUtils.isNotBlank(userId)){%>
		<div class="header-logined style="float:left;">
			<div class="ui secondary menu" style="width:110px;margin-top:8px;">
				<div class="ui dropdown item">
					<table style="margin-top:0px;">
						<tr>
							<td><span><img src="/image/login/account.png" style="width:28px;height:28px;margin-top:0px;"/></span></td>
							<td style="font-size:12px;">&nbsp;<span><%=userName%><br/>
					          &nbsp;ID:<%=userCode %>
					    	</span></td>
						</tr>
			    	</table><i class="dropdown icon"></i>
				    <div class="menu">
				        <a class="item" style="margin-top:6px;" onclick="javascript:viewPerson();">个人信息</a>
				        <div class="divider"></div>
				        <a class="item">我的案件</a>
				        <div class="divider"></div>
				        <a class="item">我的关注</a>
				        <div class="divider"></div>
				        <a style="margin-bottom:6px;" onclick="javascript:locationto('/login/userLogout.html','_self','');" class="item">退出登录</a>
				      </div>
			    </div>
			    <div style="width:100px;margin-top:8px;display:inline;cursor:pointer;" onClick="javascript:alert('查看回复信息！');">
			    	<table style="margin-top:0px;">
						<tr>
							<td><div style="width:30px;float:left;"><img src="/image/login/message.png" style="width:32px;height:32px;margin-top:0px;"/></div></td>
							<td style="font-size:12px;padding-left:6px;"><span>2</span></td>
						</tr>
			    	</table>
				</div>
			</div>
		</div>
		<%}else{%>
		<div class="header-login">
			<a href="#" onClick="javascript:loginLocal();" class="ui-link ui-widget btn btn-default">登录</a>
			<a href="#" onClick="javascript:registerLocal();" class="ui-link ui-widget btn btn-default">注册</a>
		</div>
		<%}%>
	</div>
</header>
</div>
<div style="margin-top:16px;height:60px;margin-bottom:20px;">
	<h2 style="height:30px;font-size:22px;padding-left:270px;">个人信息</h2>
	<div style="padding-left:270px;">
		提示：要修改或补充个人信息请点击这里！
	</div>
</div>

<div class="ui borderless main menu" style="margin-top:0px;">
    <div class="ui text container" style="width:800px;max-width:800px;font-size:16px;">
      <div href="#" class="header item">
        <img class="logo" src="../../image/login/account.png" style="width:20px;height:20px;margin-right:2px;">
                    基本信息
      </div>
      <a href="#" class="item">我的咨询</a>
      <a href="#" class="item">我的委托</a>
      <a href="#" class="item">关注的律师</a>
      <a href="#" class="item">关注的案件</a>
      <a href="#" class="ui right floated item">
           <div style="display:inline;cursor:pointer;" onClick="javascript:alert('查看回复信息！');">
	    	  <table style="margin-top:0px;">
				<tr>
					<td><div style="width:30px;float:left;"><img src="/image/login/message.png" style="width:32px;height:32px;margin-top:0px;"/></div></td>
					<td style="font-size:12px;padding-left:6px;"><span>2</span></td>
				</tr>
	    	  </table>
		   </div>
      </a>
    </div>
  </div>
  
  <div class="ui text container" style="font-size:16px;">
  	<div class="ui labeled icon input">
      <div class="ui label" style="width:140px;">
        	昵称
      </div>
      <input style="width:500px;"  type="text" placeholder="domain.com" value="${pubUserBo.public_user_name}">
      <i class="add circle link icon"></i>
    </div><br/>
    
    <div class="ui labeled icon input" style="margin-top:5px;">
      <div class="ui label" style="width:140px;">
        	编号
      </div>
      <input style="width:500px;" type="text" placeholder="domain.com" value="${pubUserBo.public_user_code}" >
      <i class="add circle link icon"></i>
    </div><br/>
    
    <div class="ui labeled icon input" style="margin-top:5px;">
      <div class="ui label" style="width:140px;">
        	手机号
      </div>
      <input style="width:500px;" type="text" placeholder="domain.com" value="${pubUserBo.public_user_tel}">
      <i class="add circle link icon"></i>
    </div><br/>
    
    <div class="ui labeled icon input" style="margin-top:5px;">
      <div class="ui label" style="width:140px;">
        	电子邮箱
      </div>
      <input style="width:500px;"  type="text" placeholder="domain.com" value="${pubUserBo.email}">
      <i class="add circle link icon"></i>
    </div><br/>
    
    <div class="ui labeled icon input" style="margin-top:5px;">
      <div class="ui label" style="width:140px;">
        	支付宝账号
      </div>
      <input style="width:500px;"  type="text" placeholder="支付宝账号(公开，可接受资金援助)" value="${pubUserBo.alipay_account}"><span>(公开)</span>
      <i class="add circle link icon"></i>
    </div><br/>
    
    <div class="ui labeled icon input" style="margin-top:5px;">
      <div class="ui label" style="width:140px;">
        	微信账号
      </div>
      <input style="width:500px;"  type="text" placeholder="微信账号(不公开)" value="${pubUserBo.wechat_account}">
      <i class="add circle link icon"></i>
    </div><br/>
  
    <p style="margin-top:5px;"><span>注册时间:</span><span><fmt:formatDate pattern="yyyy-MM-dd HH:mm:ss" value="${pubUserBo.createtime}"/></span></p>
  </div>
</body>
</html>
