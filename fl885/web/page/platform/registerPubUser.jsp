<%@ page language="java" import="java.util.*" pageEncoding="GBK"%>
<%@ page import="gov.util.*" %>
<!DOCTYPE HTML>
<html xmlns="http://www.w3.org/1999/xhtml">
<%@include file="/js-library/jsp_common_header.jsp"%>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
<meta http-equiv="Content-Type" content="text/html; charset=GBK" />
<title>注册法律帮帮我网账户</title>
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="renderer" content="webkit">
<meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, width=device-width, minimal-ui">
<link rel="stylesheet" href="../../css/register3.css"/>
<link rel="stylesheet" href="../../css/register4.css"/>
<script type="text/javascript" src="/js/common2.js"></script>
</head>
<body class="signup zh">
    <section class="content">
		<div class="topbanner">
			<div class="poswrap">
				<a class="brand" href="http://localhost/" ><h1>fl885</h1></a>
			</div>
		</div>
		<div class="form-unit">
			<div class="tips"></div>
			<form action="/login/registerPubUser.action" method="post" class="auth-form email-form form-horizontal">
				<div class="form-field">
					<input type="text" name="phone" id="phone" placeholder="手机号" autocomplete="off" value="" required class="form-control email" autofocus />
				</div>
				<div class="form-field">
					<input type="text" name="name" placeholder='您的名字' autocomplete="off" value="" required class="form-control name" />
				</div>
				<div class="form-field passwordClear">
					<input type="password" name="password" placeholder="密码（字母，数字，至少6位）" autocomplete="off" required class="form-control password" />
				</div>
				<button type="submit" data-gta="event" data-label="signup-direct" class="btn btn-primary anim-blue-all submit">
					注 册<span class="icon icon-upload"></span>
				</button>
			</form>
			<div class="privacy-field">
			  点击注册，即同意我们的 <a href="https://www.teambition.com/privacy?p=signup&s=account" target="_blank">用户隐私条款</a>
			</div>
			<div class="login-links">
			  <div class="horizontal-line"></div>
				<a href="/login/loginPubUser.html" class="btn btn-primary anim-blue">已有账号？登录<span class="icon icon-upload"></span></a>
			</div>
      </div>
    </section>
  </body>
</html>
