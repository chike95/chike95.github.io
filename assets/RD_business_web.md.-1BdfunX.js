import{_ as a,c as e,o as r,a4 as s}from"./chunks/framework.4aTu-Nia.js";const b=JSON.parse('{"title":"web 服务","description":"","frontmatter":{},"headers":[],"relativePath":"RD/business/web.md","filePath":"RD/business/web.md"}'),i={name:"RD/business/web.md"},t=s(`<h1 id="web-服务" tabindex="-1">web 服务 <a class="header-anchor" href="#web-服务" aria-label="Permalink to &quot;web 服务&quot;">​</a></h1><h2 id="用户相关" tabindex="-1">用户相关 <a class="header-anchor" href="#用户相关" aria-label="Permalink to &quot;用户相关&quot;">​</a></h2><h4 id="数据建模" tabindex="-1">数据建模 <a class="header-anchor" href="#数据建模" aria-label="Permalink to &quot;数据建模&quot;">​</a></h4><p>表名：users</p><pre><code>userName    用户名  INT(11)
password    密码    VARCHAR(255)
gender      性别    DECIMAL(10,0)
nickName    昵称    VARCHAR(255)
picture     头像    VARCHAR(255)
city        城市    VARCHAR(255)
</code></pre><h4 id="架构设计" tabindex="-1">架构设计 <a class="header-anchor" href="#架构设计" aria-label="Permalink to &quot;架构设计&quot;">​</a></h4><p>routes —— /src/api/user</p><p>controller —— /src/controller/user</p><pre><code>业务逻辑

返回格式 ./model
</code></pre><p>service</p><pre><code>数据处理

格式化
</code></pre><p>db</p><pre><code>定义模型

封装操作
</code></pre><h3 id="用户注册" tabindex="-1">用户注册 <a class="header-anchor" href="#用户注册" aria-label="Permalink to &quot;用户注册&quot;">​</a></h3><pre><code>本节内容：
    接口设计
    是否存在
    注册接口
    密码加密
    格式校验
</code></pre><h4 id="接口设计" tabindex="-1">接口设计 <a class="header-anchor" href="#接口设计" aria-label="Permalink to &quot;接口设计&quot;">​</a></h4><p>接口：/api/user/register</p><p>方法：Post 参数：userName，password</p><p>接口：/api/user/isExist</p><p>方法：Post 参数：userName</p><h4 id="用户是否存在" tabindex="-1">用户是否存在 <a class="header-anchor" href="#用户是否存在" aria-label="Permalink to &quot;用户是否存在&quot;">​</a></h4><p>routes：/api/user/isExist</p><p>方法：Post 参数：userName</p><p>controller：</p><pre><code>1 业务逻辑（无）—— 直接返回数据

fn：isExist(userName) &lt;—— getUserInfo

2 返回格式 —— /src/model/ResModel
</code></pre><p>service：获取数据</p><pre><code>fn：getUserInfo(userName，password){

    // 1 查询条件

    // 2 查询数据（查到/未查到）

    // 3 格式化处理：fn: formatUser
    （格式化头像：fn: _formatUserPicture）

    // 4 返回数据
}
</code></pre><h4 id="注册接口" tabindex="-1">注册接口 <a class="header-anchor" href="#注册接口" aria-label="Permalink to &quot;注册接口&quot;">​</a></h4><p>routes：/api/user/register</p><p>方法：Post 参数：userName，password</p><p>controller：</p><pre><code>1 业务逻辑：fn：register —— 先查询，后注册
</code></pre><p>service：注册用户</p><pre><code>fn：createUser
</code></pre><h4 id="密码加密" tabindex="-1">密码加密 <a class="header-anchor" href="#密码加密" aria-label="Permalink to &quot;密码加密&quot;">​</a></h4><p>crypto 加密（md5）：/src/utils/cryp</p><h4 id="格式校验" tabindex="-1">格式校验 <a class="header-anchor" href="#格式校验" aria-label="Permalink to &quot;格式校验&quot;">​</a></h4><p>routes 层</p><p>1 校验规则：json schema</p><p>文件：/src/validator/User</p><p>2 执行校验：ajv</p><p>文件：/src/validator/validate</p><h3 id="用户登录" tabindex="-1">用户登录 <a class="header-anchor" href="#用户登录" aria-label="Permalink to &quot;用户登录&quot;">​</a></h3><h4 id="登录接口" tabindex="-1">登录接口 <a class="header-anchor" href="#登录接口" aria-label="Permalink to &quot;登录接口&quot;">​</a></h4><p>routes:</p><pre><code>接口：/api/user/login

方法：Post 参数：userName，password
</code></pre><p>controller:</p><pre><code>fn: login(ctx,userName,password) &lt;—— getUserInfo
</code></pre><h4 id="登录成功返回" tabindex="-1">登录成功返回 <a class="header-anchor" href="#登录成功返回" aria-label="Permalink to &quot;登录成功返回&quot;">​</a></h4><p>redirect Url: 登录成功后跳转的 url</p><p>例子：localhost:3000/login?url=xxx</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> redirectUrl </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $.query.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;url&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">||</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">location.href </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> redirectUrl;</span></span></code></pre></div><h4 id="中间件抽离" tabindex="-1">中间件抽离 <a class="header-anchor" href="#中间件抽离" aria-label="Permalink to &quot;中间件抽离&quot;">​</a></h4><p>redirect Url: 登录成功后跳转的 url</p><p>/src/middlewares/loginChecks</p><pre><code>登录验证 fn: loginCheck(ctx,next)

页面验证 fn: loginRedicrect
</code></pre><h3 id="用户设置" tabindex="-1">用户设置 <a class="header-anchor" href="#用户设置" aria-label="Permalink to &quot;用户设置&quot;">​</a></h3><p>路由：/setting</p><h4 id="接口设计-1" tabindex="-1">接口设计 <a class="header-anchor" href="#接口设计-1" aria-label="Permalink to &quot;接口设计&quot;">​</a></h4><p>修改个人信息：/api/user/changeInfo</p><p>图片上传：/api/user/uploadAvatar</p><p>修改密码：/api/user/changePassword</p><p>退出登录：/api/user/logout</p><h4 id="修改信息" tabindex="-1">修改信息 <a class="header-anchor" href="#修改信息" aria-label="Permalink to &quot;修改信息&quot;">​</a></h4><h4 id="图片上传" tabindex="-1">图片上传 <a class="header-anchor" href="#图片上传" aria-label="Permalink to &quot;图片上传&quot;">​</a></h4><h4 id="修改密码" tabindex="-1">修改密码 <a class="header-anchor" href="#修改密码" aria-label="Permalink to &quot;修改密码&quot;">​</a></h4><p>当前密码：</p><p>新密码：</p><p>确认密码：</p><h4 id="退出登录" tabindex="-1">退出登录 <a class="header-anchor" href="#退出登录" aria-label="Permalink to &quot;退出登录&quot;">​</a></h4><h3 id="个人主页" tabindex="-1">个人主页 <a class="header-anchor" href="#个人主页" aria-label="Permalink to &quot;个人主页&quot;">​</a></h3><h3 id="粉丝关注" tabindex="-1">粉丝关注 <a class="header-anchor" href="#粉丝关注" aria-label="Permalink to &quot;粉丝关注&quot;">​</a></h3>`,72),n=[t];function o(l,h,p,d,c,u){return r(),e("div",null,n)}const m=a(i,[["render",o]]);export{b as __pageData,m as default};
