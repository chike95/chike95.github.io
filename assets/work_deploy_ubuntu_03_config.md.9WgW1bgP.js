import{_ as s,c as a,o as n,a4 as p}from"./chunks/framework.4aTu-Nia.js";const b=JSON.parse('{"title":"三、程序部署","description":"","frontmatter":{},"headers":[],"relativePath":"work/deploy/ubuntu/03_config.md","filePath":"work/deploy/ubuntu/03_config.md"}'),e={name:"work/deploy/ubuntu/03_config.md"},l=p(`<h1 id="三、程序部署" tabindex="-1">三、程序部署 <a class="header-anchor" href="#三、程序部署" aria-label="Permalink to &quot;三、程序部署&quot;">​</a></h1><h2 id="_3-1-文件迁移" tabindex="-1">3.1 文件迁移 <a class="header-anchor" href="#_3-1-文件迁移" aria-label="Permalink to &quot;3.1 文件迁移&quot;">​</a></h2><h3 id="_3-1-1-配置修改" tabindex="-1">3.1.1 配置修改 <a class="header-anchor" href="#_3-1-1-配置修改" aria-label="Permalink to &quot;3.1.1 配置修改&quot;">​</a></h3><h2 id="_3-2-数据库" tabindex="-1">3.2 数据库 <a class="header-anchor" href="#_3-2-数据库" aria-label="Permalink to &quot;3.2 数据库&quot;">​</a></h2><h2 id="_3-3-开机自启" tabindex="-1">3.3 开机自启 <a class="header-anchor" href="#_3-3-开机自启" aria-label="Permalink to &quot;3.3 开机自启&quot;">​</a></h2><p>参考教程：</p><p><a href="https://blog.csdn.net/djstavaV/article/details/88166805" target="_blank" rel="noreferrer">https://blog.csdn.net/djstavaV/article/details/88166805</a></p><p><a href="https://xugaoxiang.com/2019/12/05/systemd-rc-local-on-boot/" target="_blank" rel="noreferrer">https://xugaoxiang.com/2019/12/05/systemd-rc-local-on-boot/</a></p><h3 id="_3-3-1-建立-rc-local-service" tabindex="-1">3.3.1 建立 rc-local.service <a class="header-anchor" href="#_3-3-1-建立-rc-local-service" aria-label="Permalink to &quot;3.3.1 建立 rc-local.service&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sudo vim /etc/systemd/system/rc-local.service</span></span></code></pre></div><p>将下列内容复制进 rc-local.service 文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>[Unit]</span></span>
<span class="line"><span>Description=/etc/rc.local Compatibility</span></span>
<span class="line"><span>ConditionPathExists=/etc/rc.local</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Service]</span></span>
<span class="line"><span>Type=forking</span></span>
<span class="line"><span>ExecStart=/etc/rc.local start</span></span>
<span class="line"><span>TimeoutSec=0</span></span>
<span class="line"><span>StandardOutput=tty</span></span>
<span class="line"><span>RemainAfterExit=yes</span></span>
<span class="line"><span>SysVStartPriority=99</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Install]</span></span>
<span class="line"><span>WantedBy=multi-user.target</span></span></code></pre></div><h3 id="_3-3-2-创建-rc-local" tabindex="-1">3.3.2 创建 rc.local <a class="header-anchor" href="#_3-3-2-创建-rc-local" aria-label="Permalink to &quot;3.3.2 创建 rc.local&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>sudo vim /etc/rc.local</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">注意,否则启东会报错</p><p>确保该文件中包含有效的 shell 命令，并且没有语法错误。特别是，检查文件是否以 #!/bin/sh -e 开头，这是推荐的 shebang，用于确保脚本在遇到错误时停止执行。</p></div><p>下列内容复制进 rc.local 文件</p><p>tomcat 项目配置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>#!/bin/sh -e</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># rc.local</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># This script is executed at the end of each multiuser runlevel.</span></span>
<span class="line"><span># Make sure that the script will &quot;exit 0&quot; on success or any other</span></span>
<span class="line"><span># value on error.</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># In order to enable or disable this script just change the execution</span></span>
<span class="line"><span># bits.</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># By default this script does nothing.</span></span>
<span class="line"><span>#!bin/bash -e</span></span>
<span class="line"><span>time=$(date &quot;+%Y-%m-%d %H:%M:%S&quot;)</span></span>
<span class="line"><span>su root</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sudo autossh -M 50721 -fCNR &#39;*:50722:127.0.0.1:22&#39; root@123.206.175.241 &amp;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd /srv/project/donganhu</span></span>
<span class="line"><span>./start-t.sh</span></span>
<span class="line"><span>cd /srv/apache-tomcat-7.0.63/bin</span></span>
<span class="line"><span>./startup.sh</span></span>
<span class="line"><span>echo &#39;\${time} restart autossh at 50522&#39; &gt;&gt; /srv/project/donganhu/restart.log</span></span>
<span class="line"><span>echo &#39;donganhu-t jar restarted!&#39; &gt;&gt; /srv/project/donganhu/restart.log</span></span>
<span class="line"><span>exit 0</span></span></code></pre></div><p>这段脚本是一个启动脚本，通常用于在系统启动后执行一些必要的操作。根据脚本的内容，它执行以下操作：</p><ul><li>获取当前时间并将其保存到变量 time 中。</li><li>使用 su root 切换到 root 用户。请注意，这里没有提供密码，所以需要确认系统已经配置为允许该用户无需密码切换到 root 用户。</li><li>使用 autossh 命令建立一个反向 SSH 隧道，将远程主机的 22 端口映射到本地的 50722 端口。这样可以实现对远程主机的安全访问。</li><li>切换到 /srv/project/donganhu 目录，并执行名为 start-t.sh 的脚本。</li><li>切换到 /srv/apache-tomcat-7.0.63/bin 目录，并执行 startup.sh 脚本，启动 Tomcat 服务器。</li><li>将重启信息和日志记录到 /srv/project/donganhu/restart.log 文件中。</li><li>最后，脚本退出。</li></ul><p>springboot 项目配置</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>#!/bin/sh -e</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># rc.local</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># This script is executed at the end of each multiuser runlevel.</span></span>
<span class="line"><span># Make sure that the script will &quot;exit 0&quot; on success or any other</span></span>
<span class="line"><span># value on error.</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># In order to enable or disable this script just change the execution</span></span>
<span class="line"><span># bits.</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># By default this script does nothing.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#!bin/bash -e</span></span>
<span class="line"><span>time=$(date &quot;+%Y-%m-%d %H:%M:%S&quot;)</span></span>
<span class="line"><span>su ysb</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sudo autossh -M 50755 -fCNR &#39;*:50754:127.0.0.1:22&#39; root@123.206.175.241 &amp;</span></span>
<span class="line"><span>sudo autossh -M 50766 -fCNR &#39;*:50763:127.0.0.1:8010&#39; root@123.206.175.241 &amp;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cd /srv/project/</span></span>
<span class="line"><span>./start.sh</span></span>
<span class="line"><span>echo \${time}&#39; restart autossh&#39; &gt;&gt; /srv/project/restart.log</span></span>
<span class="line"><span>echo &#39;tl-twg jar restarted!&#39; &gt;&gt; /srv/project/restart.log</span></span>
<span class="line"><span>exit 0</span></span></code></pre></div><p>这段脚本也是一个启动脚本，和之前的脚本类似，它执行以下操作：</p><ul><li>获取当前时间并将其保存到变量 time 中。</li><li>使用 su ysb 切换到名为 ysb 的用户。</li><li>使用 autossh 命令建立两个反向 SSH 隧道，将远程主机的 22 端口映射到本地的 50754 端口和远程主机的 8010 端口映射到本地的 50763 端口。这样可以实现对远程主机的安全访问。</li><li>切换到 /srv/project/ 目录，并执行名为 start.sh 的脚本。</li><li>将重启信息和日志记录到 /srv/project/restart.log 文件中。</li><li>最后，脚本退出。</li></ul>`,24),t=[l];function i(c,o,r,h,d,u){return n(),a("div",null,t)}const m=s(e,[["render",i]]);export{b as __pageData,m as default};
