import{_ as s,c as a,o as n,a4 as p}from"./chunks/framework.4aTu-Nia.js";const u=JSON.parse('{"title":"485 倾角","description":"","frontmatter":{},"headers":[],"relativePath":"work/software/485horizontal.md","filePath":"work/software/485horizontal.md"}'),x={name:"work/software/485horizontal.md"},e=p(`<h1 id="_485-倾角" tabindex="-1">485 倾角 <a class="header-anchor" href="#_485-倾角" aria-label="Permalink to &quot;485 倾角&quot;">​</a></h1><h2 id="传感器" tabindex="-1">传感器 <a class="header-anchor" href="#传感器" aria-label="Permalink to &quot;传感器&quot;">​</a></h2><p>MuraTa 村田：SCA100T-01D</p><p>官网：<a href="https://www.murata.com/zh-cn/products/sensor/inclinometer" target="_blank" rel="noreferrer">https://www.murata.com/zh-cn/products/sensor/inclinometer</a></p><p>芯片说明：<a href="https://www.doc88.com/p-28744508836.html?s=rel&amp;id=1" target="_blank" rel="noreferrer">https://www.doc88.com/p-28744508836.html?s=rel&amp;id=1</a></p><h2 id="接线说明" tabindex="-1">接线说明 <a class="header-anchor" href="#接线说明" aria-label="Permalink to &quot;接线说明&quot;">​</a></h2><p>红色接电源正极 VCC（DC9-36V）</p><p>屏蔽线套热缩管与黑色线接 GND</p><p>绿色线接 485A</p><p>白色线接 485B</p><h2 id="通信协议" tabindex="-1">通信协议 <a class="header-anchor" href="#通信协议" aria-label="Permalink to &quot;通信协议&quot;">​</a></h2><h3 id="读取采集数据" tabindex="-1">读取采集数据 <a class="header-anchor" href="#读取采集数据" aria-label="Permalink to &quot;读取采集数据&quot;">​</a></h3><p>指令(先发低位再发高位)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>64 00 D7 EF 02 00 00 11 00 00 08 00 F8 D3</span></span></code></pre></div><p>说明：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>64 00:仪器地址（2字节）,此处地址为100 （或者为  00 00 ）注：仪器地址写 00 00 时所有已连接仪器都会回复</span></span>
<span class="line"><span>D7 EF:包头 （固定）</span></span>
<span class="line"><span>02 00:命令字</span></span>
<span class="line"><span>00 11 00 00  :内存地址，即4352</span></span>
<span class="line"><span>08 00 :请求读取的数据内容长度 即表示需要读取 8个字节</span></span>
<span class="line"><span>F8 D3:万能校验码（固定）</span></span></code></pre></div><p>仪器回复:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>64 00 1A D7 EF 03 00 00 11 00 00 08 00 +crc1（2个字节）+x轴角度（4个字节，单位为度）+y轴角度（4个字节，单位为度）+crc2（2个字节）</span></span>
<span class="line"><span>64 00 D7 EF：仪器地址（2字节）+ D7 EF（固定，2字节)</span></span>
<span class="line"><span>03 00：命令字(2字节)</span></span>
<span class="line"><span>00 11 00 00：内存地址：4352 （4字节）</span></span>
<span class="line"><span>08 00：数据长度（8字节）表示2个float数据的长度</span></span>
<span class="line"><span>crc校验1(2字节) :从命令字开始算起（即03开始）</span></span>
<span class="line"><span>数据内容(8个字节)：</span></span>
<span class="line"><span>crc2(2字节)，从数据内容开始算起</span></span></code></pre></div><h4 id="计算角度" tabindex="-1">计算角度： <a class="header-anchor" href="#计算角度" aria-label="Permalink to &quot;计算角度：&quot;">​</a></h4><p>IEEE 754 浮点数十六进制相互转换：<a href="http://www.speedfly.cn/tools/hexconvert/" target="_blank" rel="noreferrer">http://www.speedfly.cn/tools/hexconvert/</a></p><p>例如：06 0C D7 EF 03 00 00 11 00 00 08 00 FB DD <strong>69 E4 59 3F 70 FE EE 3F</strong> 4C 0B</p><p>x 轴角度：69 E4 59 3F --&gt; 3F 59 E4 69 --&gt; float(10)：0.8511415123939514</p><p>y 轴角度：70 FE EE 3F --&gt; 3F FE EE 70 --&gt; float(10)：1.9916515350341797</p><h3 id="读取斜率补偿系数" tabindex="-1">读取斜率补偿系数 <a class="header-anchor" href="#读取斜率补偿系数" aria-label="Permalink to &quot;读取斜率补偿系数&quot;">​</a></h3><p>指令(先发低位再发高位)</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>00 00 D7 EF 02 00 18 00 00 00 04 00 F8 D3</span></span></code></pre></div><p>说明</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>00 00:仪器地址（2字节）（或者为  00 00 ）注：仪器地址写 00 00 时所有已连接仪器都会回复</span></span>
<span class="line"><span>D7 EF:包头 （固定）</span></span>
<span class="line"><span>02 00:命令字</span></span>
<span class="line"><span>18 00 00 00  :内存地址，即24</span></span>
<span class="line"><span>04 00 :请求读取的数据内容长度 即表示需要读取 4个字节</span></span>
<span class="line"><span>F8 D3:万能校验码（固定）</span></span></code></pre></div><p>仪器回复：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>64 00 D7 EF 03 00 18 00 00 00 04 00 CRC1校验（2个字节） 53 05 B3 3E +crc2校验（2个字节）</span></span>
<span class="line"><span>64 00 D7 EF：仪器地址（2字节）+ D7 EF（固定，2字节)</span></span>
<span class="line"><span>03 00：命令字(2字节)</span></span>
<span class="line"><span>18 00 00 00：内存地址（此处为24）</span></span>
<span class="line"><span>04 00：数据长度（2字节），4</span></span>
<span class="line"><span>01 06：CRC1校验，从命令字开始算起</span></span>
<span class="line"><span>53 05 B3 3E：数据内容，即斜率补偿系数 --&gt; 3E B3 05 53 --&gt; float：0.34964999556541443</span></span>
<span class="line"><span>CRC2校验，从数据内容开始算起</span></span></code></pre></div><p>注：新版倾角仪系数为：1</p><p>例如：06 0C D7 EF 03 00 18 00 00 00 04 00 01 06 <strong>00 00 80 3F</strong> 21 F4</p><p>系数 = 00 00 80 3F --&gt; 3F 80 00 00 --&gt; float(10): 1</p><h3 id="读取零点偏移补偿系数" tabindex="-1">读取零点偏移补偿系数 <a class="header-anchor" href="#读取零点偏移补偿系数" aria-label="Permalink to &quot;读取零点偏移补偿系数&quot;">​</a></h3><p>PC 发送：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>00 00 D7 EF 02 00 1C 00 00 00 04 00 F8 D3</span></span></code></pre></div><p>说明：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>00 00:仪器地址（2字节）（或者为  00 00 ）注：仪器地址写 00 00 时所有已连接仪器都会回复</span></span>
<span class="line"><span>D7 EF:包头 （固定）</span></span>
<span class="line"><span>02 00:命令字</span></span>
<span class="line"><span>1C 00 00 00  :内存地址，即28</span></span>
<span class="line"><span>04 00 :请求读取的数据内容长度 即表示需要读取 4个字节</span></span>
<span class="line"><span>F8 D3:万能校验码（固定）</span></span></code></pre></div><p>仪器回复：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>64 00 D7 EF 03 00 1C 00 00 00 04 00 CRC1校验（2个字节） 00 00 00 00 CRC2校验（2个字节）</span></span>
<span class="line"><span>64 00  D7 EF：仪器地址（2字节）+ D7 EF（固定，2字节)</span></span>
<span class="line"><span>03 00：命令字(2字节)</span></span>
<span class="line"><span>1C 00 00 00：内存地址（此处为28）</span></span>
<span class="line"><span>04 00：数据长度（2字节），4</span></span>
<span class="line"><span>00 82：CRC1校验，从命令字开始算起</span></span>
<span class="line"><span>00 00 00 00：数据内容，即零点偏移补偿系数</span></span>
<span class="line"><span>00 24：CRC2校验，从数据内容开始算起</span></span></code></pre></div><p>注：新版传感器零点漂移补偿系数为：2500</p><p>例如：06 0C D7 EF 03 00 1C 00 00 00 04 00 00 82 <strong>00 40 1C 45</strong> C8 C3</p><p>b = 00 40 1C 45 --&gt; 45 1C 40 00 --&gt; float(10)：2500</p><h3 id="关于-crc-校验" tabindex="-1">关于 CRC 校验 <a class="header-anchor" href="#关于-crc-校验" aria-label="Permalink to &quot;关于 CRC 校验&quot;">​</a></h3><p>16 进制(CRC16)(MODBUS RTU 通讯)校验码在线计算器：<a href="https://www.23bei.com/tool/59.html" target="_blank" rel="noreferrer">https://www.23bei.com/tool/59.html</a></p><p>CRC 校验用 CRC16 查表法。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>static const unsigned char aucCRCHi[] = {</span></span>
<span class="line"><span>    0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,</span></span>
<span class="line"><span>    0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40,</span></span>
<span class="line"><span>    0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,</span></span>
<span class="line"><span>    0x00, 0xC1, 0x81, 0x40, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,</span></span>
<span class="line"><span>    0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,</span></span>
<span class="line"><span>    0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40,</span></span>
<span class="line"><span>    0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40,</span></span>
<span class="line"><span>    0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40,</span></span>
<span class="line"><span>    0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,</span></span>
<span class="line"><span>    0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40,</span></span>
<span class="line"><span>    0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,</span></span>
<span class="line"><span>    0x00, 0xC1, 0x81, 0x40, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,</span></span>
<span class="line"><span>    0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,</span></span>
<span class="line"><span>    0x00, 0xC1, 0x81, 0x40, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,</span></span>
<span class="line"><span>    0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,</span></span>
<span class="line"><span>    0x00, 0xC1, 0x81, 0x40, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,</span></span>
<span class="line"><span>    0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,</span></span>
<span class="line"><span>    0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40,</span></span>
<span class="line"><span>    0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,</span></span>
<span class="line"><span>    0x00, 0xC1, 0x81, 0x40, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,</span></span>
<span class="line"><span>    0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,</span></span>
<span class="line"><span>    0x00, 0xC1, 0x81, 0x40</span></span>
<span class="line"><span>};</span></span>
<span class="line"><span>static const unsigned char aucCRCLo[] = {</span></span>
<span class="line"><span>    0x00, 0xC0, 0xC1, 0x01, 0xC3, 0x03, 0x02, 0xC2, 0xC6, 0x06, 0x07, 0xC7,</span></span>
<span class="line"><span>    0x05, 0xC5, 0xC4, 0x04, 0xCC, 0x0C, 0x0D, 0xCD, 0x0F, 0xCF, 0xCE, 0x0E,</span></span>
<span class="line"><span>    0x0A, 0xCA, 0xCB, 0x0B, 0xC9, 0x09, 0x08, 0xC8, 0xD8, 0x18, 0x19, 0xD9,</span></span>
<span class="line"><span>    0x1B, 0xDB, 0xDA, 0x1A, 0x1E, 0xDE, 0xDF, 0x1F, 0xDD, 0x1D, 0x1C, 0xDC,</span></span>
<span class="line"><span>    0x14, 0xD4, 0xD5, 0x15, 0xD7, 0x17, 0x16, 0xD6, 0xD2, 0x12, 0x13, 0xD3,</span></span>
<span class="line"><span>    0x11, 0xD1, 0xD0, 0x10, 0xF0, 0x30, 0x31, 0xF1, 0x33, 0xF3, 0xF2, 0x32,</span></span>
<span class="line"><span>    0x36, 0xF6, 0xF7, 0x37, 0xF5, 0x35, 0x34, 0xF4, 0x3C, 0xFC, 0xFD, 0x3D,</span></span>
<span class="line"><span>    0xFF, 0x3F, 0x3E, 0xFE, 0xFA, 0x3A, 0x3B, 0xFB, 0x39, 0xF9, 0xF8, 0x38,</span></span>
<span class="line"><span>    0x28, 0xE8, 0xE9, 0x29, 0xEB, 0x2B, 0x2A, 0xEA, 0xEE, 0x2E, 0x2F, 0xEF,</span></span>
<span class="line"><span>    0x2D, 0xED, 0xEC, 0x2C, 0xE4, 0x24, 0x25, 0xE5, 0x27, 0xE7, 0xE6, 0x26,</span></span>
<span class="line"><span>    0x22, 0xE2, 0xE3, 0x23, 0xE1, 0x21, 0x20, 0xE0, 0xA0, 0x60, 0x61, 0xA1,</span></span>
<span class="line"><span>    0x63, 0xA3, 0xA2, 0x62, 0x66, 0xA6, 0xA7, 0x67, 0xA5, 0x65, 0x64, 0xA4,</span></span>
<span class="line"><span>    0x6C, 0xAC, 0xAD, 0x6D, 0xAF, 0x6F, 0x6E, 0xAE, 0xAA, 0x6A, 0x6B, 0xAB,</span></span>
<span class="line"><span>    0x69, 0xA9, 0xA8, 0x68, 0x78, 0xB8, 0xB9, 0x79, 0xBB, 0x7B, 0x7A, 0xBA,</span></span>
<span class="line"><span>    0xBE, 0x7E, 0x7F, 0xBF, 0x7D, 0xBD, 0xBC, 0x7C, 0xB4, 0x74, 0x75, 0xB5,</span></span>
<span class="line"><span>    0x77, 0xB7, 0xB6, 0x76, 0x72, 0xB2, 0xB3, 0x73, 0xB1, 0x71, 0x70, 0xB0,</span></span>
<span class="line"><span>    0x50, 0x90, 0x91, 0x51, 0x93, 0x53, 0x52, 0x92, 0x96, 0x56, 0x57, 0x97,</span></span>
<span class="line"><span>    0x55, 0x95, 0x94, 0x54, 0x9C, 0x5C, 0x5D, 0x9D, 0x5F, 0x9F, 0x9E, 0x5E,</span></span>
<span class="line"><span>    0x5A, 0x9A, 0x9B, 0x5B, 0x99, 0x59, 0x58, 0x98, 0x88, 0x48, 0x49, 0x89,</span></span>
<span class="line"><span>    0x4B, 0x8B, 0x8A, 0x4A, 0x4E, 0x8E, 0x8F, 0x4F, 0x8D, 0x4D, 0x4C, 0x8C,</span></span>
<span class="line"><span>    0x44, 0x84, 0x85, 0x45, 0x87, 0x47, 0x46, 0x86, 0x82, 0x42, 0x43, 0x83,</span></span>
<span class="line"><span>    0x41, 0x81, 0x80, 0x40</span></span>
<span class="line"><span>};</span></span></code></pre></div><h2 id="测试程序" tabindex="-1">测试程序 <a class="header-anchor" href="#测试程序" aria-label="Permalink to &quot;测试程序&quot;">​</a></h2><p>2024-03-25：泰康测试</p>`,49),l=[e];function i(t,c,o,r,C,h){return n(),a("div",null,l)}const g=s(x,[["render",i]]);export{u as __pageData,g as default};
