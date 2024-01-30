(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{309:function(s,t,a){s.exports=a.p+"assets/img/mail.a6aec788.png"},457:function(s,t,a){"use strict";a.r(t);var n=a(14),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"nodemailer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nodemailer"}},[s._v("#")]),s._v(" nodemailer")]),s._v(" "),t("p",[s._v("参考视频："),t("a",{attrs:{href:"https://www.bilibili.com/video/BV18p4y1Q7KJ/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.bilibili.com/video/BV18p4y1Q7KJ/"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("Nodemailer是一个用于Node.js应用程序的模块，可以轻松发送电子邮件。该项目始于2010年，当时没有合理的选项来发送电子邮件消息，如今它是大多数Node.js用户默认选择的解决方案。")]),s._v(" "),t("h4",{attrs:{id:"一、环境配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、环境配置"}},[s._v("#")]),s._v(" 一、环境配置")]),s._v(" "),t("p",[s._v("安装模块：nodemailer")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("npm i nodemailer --save\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"二、创建对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、创建对象"}},[s._v("#")]),s._v(" 二、创建对象")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" nodemailer "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'nodemailer'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 创建一个SMTP传输对象")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" transporter "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" nodemailer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("createTransport")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("host")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'smtp.163.com'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置SMTP服务器的主机名")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("port")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("465")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 设置SMTP服务使用的端口")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("secureConnection")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 启用安全连接")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("auth")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("user")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'tl_240122@163.com'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 你的邮箱账号")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("pass")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'BKZEJEUUWRPJSRGA'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 你的邮箱授权码")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h4",{attrs:{id:"三、邮件配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、邮件配置"}},[s._v("#")]),s._v(" 三、邮件配置")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" mailOptions "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("from")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'tl_240122@163.com'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 你的邮箱")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("to")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'18845072434@163.com'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 接收者,可以同时发送多个,以逗号隔开")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// cc: 'xx@example.com',")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("subject")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'邮件测试'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("text")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'这是一封来自 Node.js 的邮件测试。'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 邮件文本")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("html")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token template-string"}},[t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("<h1>this is en email from nodemailer</h1>")]),t("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 邮件支持 html，但是和 text 冲突，后者会覆盖掉前者，只能选其一")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// Apple Watch specific HTML body 苹果手表指定HTML格式")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("watchHtml")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<b>Hello</b> to myself'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// attachments: [ // 上传附件的格式，path 为相对路径")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     {   // utf-8 string as an attachment")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//         filename: 'text1.txt',")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//         content: 'hello world!'")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     },")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     {   // binary buffer as an attachment")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//         filename: 'text2.txt',")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//         content: new Buffer('hello world!', 'utf-8')")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     },")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     {   // file on disk as an attachment")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//         filename: 'text3.txt',")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//         path: '/path/to/file.txt' // stream this file")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     },")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     {   // filename and content type is derived from path")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//         path: '/path/to/file.txt'")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     },")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     {   // stream as an attachment")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//         filename: 'text4.txt',")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//         content: fs.createReadStream('file.txt')")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     },")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     {   // define custom content type for the attachment")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//         filename: 'text.bin',")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//         content: 'hello world!',")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//         contentType: 'text/plain'")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     },")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     {   // use URL as an attachment")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//         filename: 'license.txt',")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//         path: 'https://raw.github.com/nodemailer/nodemailer/master/LICENSE'")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     },")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     {   // encoded string as an attachment")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//         filename: 'text1.txt',")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//         content: 'aGVsbG8gd29ybGQh',")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//         encoding: 'base64'")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     },")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     {   // data uri as an attachment")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//         path: 'data:text/plain;base64,aGVsbG8gd29ybGQ='")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     },")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     {")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//         // use pregenerated MIME node")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//         raw: 'Content-Type: text/plain\\r\\n' +")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//             'Content-Disposition: attachment;\\r\\n' +")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//             '\\r\\n' +")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//             'Hello world!'")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//     }")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ],")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br")])]),t("h4",{attrs:{id:"四、发送邮件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、发送邮件"}},[s._v("#")]),s._v(" 四、发送邮件")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 发送邮件，打印信息")]),s._v("\ntransporter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sendMail")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("mailOptions"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("error"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" info")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("error"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("error"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        console"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Email sent'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    transporter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("close")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h4",{attrs:{id:"五、发送结果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五、发送结果"}},[s._v("#")]),s._v(" 五、发送结果")]),s._v(" "),t("p",[t("img",{attrs:{src:a(309),alt:"Alt text"}})])])}),[],!1,null,null,null);t.default=e.exports}}]);