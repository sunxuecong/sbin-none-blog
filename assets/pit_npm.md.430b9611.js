import{_ as s,r as n,h as a,Q as o}from"./chunks/framework.4b9070bd.js";const b=JSON.parse('{"title":"npm 踩坑记录","description":"","frontmatter":{"outline":2},"headers":[],"relativePath":"pit/npm.md","filePath":"pit/npm.md","lastUpdated":1722588906000}'),e={name:"pit/npm.md"},l=o(`<h1 id="npm-踩坑记录" tabindex="-1">npm 踩坑记录 <a class="header-anchor" href="#npm-踩坑记录" aria-label="Permalink to &quot;npm 踩坑记录&quot;">​</a></h1><blockquote><p>记录 <code>npm</code> <code>yarn</code> <code>pnpm</code> 相关踩坑</p></blockquote><h2 id="安装-node-sass-经常失败" tabindex="-1">安装 <code>node-sass</code> 经常失败 <a class="header-anchor" href="#安装-node-sass-经常失败" aria-label="Permalink to &quot;安装 \`node-sass\` 经常失败&quot;">​</a></h2><blockquote><p>虽说 <code>node-sass</code> 已经被淘汰，现在都用 <a href="https://github.com/sass/dart-sass" target="_blank" rel="noreferrer">dart-sass</a>，但你总会遇到一些老古董项目的</p></blockquote><p>在使用 <code>npm</code> 安装依赖时，遇到含有二进制文件的依赖包会经常失败，比如：<code>node-sass</code>、<code>puppeteer</code> 等</p><details class="details custom-block"><summary>为什么配置了国内镜像源安装也会失败？</summary><p>配置的国内镜像源只对 <code>npm</code> 包生效，而其中包含的二进制文件使用的是专门的下载地址，需要单独配置</p><p>比如 <code>node-sass</code> 需要配置 <code>sass_binary_site</code>，其<a href="https://github.com/sass/node-sass/blob/ee13eb9c62449d1e535189a063cbdd15583ebf32/lib/extensions.js#L246" target="_blank" rel="noreferrer">源码</a>如下</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">getBinaryUrl</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">site</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">getArgument</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">--sass-binary-site</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">||</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">process</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">env</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">SASS_BINARY_SITE</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#BABED8;">process</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">env</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">npm_config_sass_binary_site</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span></span>
<span class="line"><span style="color:#F07178;">    (</span><span style="color:#BABED8;">pkg</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">nodeSassConfig</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">pkg</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">nodeSassConfig</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">binarySite</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">||</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://github.com/sass/node-sass/releases/download</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> [</span><span style="color:#BABED8;">site</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">v</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">pkg</span><span style="color:#89DDFF;">.</span><span style="color:#BABED8;">version</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">getBinaryName</span><span style="color:#F07178;">()]</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">join</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>其默认地址是 <code>github</code>，而因为一些原因导致咱们安装失败所以也正常</p></details><h4 id="解决方法" tabindex="-1">解决方法 <a class="header-anchor" href="#解决方法" aria-label="Permalink to &quot;解决方法&quot;">​</a></h4><div class="tip custom-block"><p class="custom-block-title">前置知识：<code>.npmrc</code></p><p><code>.npmrc</code> 文件是 <code>npm</code> 的配置文件</p><p>当在使用 <code>npm</code> 时它会从命令行、环境变量和 <code>.npmrc</code> 文件中获取其配置</p><p>其加载优先级：命令行 &gt; 项目 <code>.npmrc</code> &gt; 全局 <code>.npmrc</code> &gt; 默认</p><blockquote><p><code>yarn</code> 的配置文件为 <code>.yarnrc</code></p><p><code>pnpm</code> 的配置文件为 <code>.npmrc</code></p></blockquote></div><blockquote><p>临时解决（以 <code>node-sass</code> 为例）</p></blockquote><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">install</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-D</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">node-sass</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--sass_binary_site=https://npmmirror.com/mirrors/node-sass</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># OR</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">add</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">-D</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">node-sass</span><span style="color:#BABED8;"> </span><span style="color:#C3E88D;">--sass_binary_site=https://npmmirror.com/mirrors/node-sass</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><blockquote><p>长期解决</p></blockquote><p>在项目根目录新建 <code>.npmrc</code> 文件，然后配置对应的二进制下载地址</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># npm 镜像地址</span></span>
<span class="line"><span style="color:#BABED8;">registry</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">https://registry.npmmirror.com</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 二进制文件下载地址</span></span>
<span class="line"><span style="color:#BABED8;">sass_binary_site</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">https://npmmirror.com/mirrors/node-sass</span></span>
<span class="line"><span style="color:#BABED8;">phantomjs_cdnurl</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">https://npmmirror.com/mirrors/phantomjs</span></span>
<span class="line"><span style="color:#BABED8;">electron_mirror</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">https://npmmirror.com/mirrors/electron</span></span>
<span class="line"><span style="color:#BABED8;">profiler_binary_host_mirror</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">https://npmmirror.com/mirrors/node-inspector</span></span>
<span class="line"><span style="color:#BABED8;">chromedriver_cdnurl</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">https://npmmirror.com/mirrors/chromedriver</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="npm-包中的文件丢失" tabindex="-1"><code>npm</code> 包中的文件丢失 <a class="header-anchor" href="#npm-包中的文件丢失" aria-label="Permalink to &quot;\`npm\` 包中的文件丢失&quot;">​</a></h2><p>最近在发布自己的 <code>npm</code> 包时，发现包中的文件未完全上传，导致安装后缺少文件</p><div class="tip custom-block"><p class="custom-block-title"><code>npm</code> 上传时默认会忽略这些文件</p><ul><li><code>.*.swp</code></li><li><code>._*</code></li><li><code>.DS_Store</code></li><li><code>.git</code></li><li><code>.gitignore</code></li><li><code>.hg</code></li><li><code>.npmignore</code></li><li><code>.npmrc</code></li><li><code>.lock-wscript</code></li><li><code>.svn</code></li><li><code>.wafpickle-*</code></li><li><code>config.gypi</code></li><li><code>CVS</code></li><li><code>npm-debug.log</code></li></ul><p><a href="https://github.com/npm/cli/blob/6cc4a93babf8d537a7ec2393a485c854a476e3b7/docs/lib/content/using-npm/developers.md?plain=1#LL115C26" target="_blank" rel="noreferrer">npm ignored | GitHub</a></p></div><h4 id="解决方法-1" tabindex="-1">解决方法 <a class="header-anchor" href="#解决方法-1" aria-label="Permalink to &quot;解决方法&quot;">​</a></h4><ol><li>将需要上传的文件添加到 <code>package.json</code> 的 <code>files</code> 字段中</li><li>修改文件名</li></ol>`,18),p=[l];function c(r,t,i,d,y,m){return n(),a("div",null,p)}const F=s(e,[["render",c]]);export{b as __pageData,F as default};
