import{_ as s,r as n,h as a,Q as l}from"./chunks/framework.4b9070bd.js";const b=JSON.parse('{"title":"Sass 常用技巧","description":"","frontmatter":{},"headers":[],"relativePath":"workflow/sass/index.md","filePath":"workflow/sass/index.md","lastUpdated":1722588906000}'),p={name:"workflow/sass/index.md"},o=l(`<h1 id="sass-常用技巧" tabindex="-1">Sass 常用技巧 <a class="header-anchor" href="#sass-常用技巧" aria-label="Permalink to &quot;Sass 常用技巧&quot;">​</a></h1><blockquote><p>记录 Sass 的语法和一些常用小技巧</p></blockquote><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p><code>Sass</code> 是一款强化 <code>CSS</code> 的辅助工具（即 <code>CSS</code> 预处理器或 <code>CSS</code> 预编译语言），它在 <code>CSS</code> 语法的基础上增加了变量 (<code>variables</code>)、嵌套 (<code>nested rules</code>)、混合 (<code>mixins</code>)、导入 (<code>inline imports</code>) 等高级功能，这些拓展令 <code>CSS</code> 更加强大与优雅。</p><ul><li><a href="https://sass-lang.com" target="_blank" rel="noreferrer">Sass 官网</a></li><li><a href="https://www.sassmeister.com" target="_blank" rel="noreferrer">Sass Playground</a></li></ul><h2 id="常用的-mixins" tabindex="-1">常用的 mixins <a class="header-anchor" href="#常用的-mixins" aria-label="Permalink to &quot;常用的 mixins&quot;">​</a></h2><h3 id="元素大小" tabindex="-1">元素大小 <a class="header-anchor" href="#元素大小" aria-label="Permalink to &quot;元素大小&quot;">​</a></h3><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">@mixin</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">size</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">$width, $height</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> $width</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> $width</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> $height</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="flex-居中" tabindex="-1">flex 居中 <a class="header-anchor" href="#flex-居中" aria-label="Permalink to &quot;flex 居中&quot;">​</a></h3><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">@mixin</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">flex-center</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">$direction</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> row</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> flex</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;font-style:italic;">@if</span><span style="color:#BABED8;"> $direction </span><span style="color:#89DDFF;">!=</span><span style="color:#BABED8;"> row </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">flex-direction</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> $direction</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#B2CCD6;">justify-content</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> center</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#B2CCD6;">align-items</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> center</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="文字溢出显示省略号" tabindex="-1">文字溢出显示省略号 <a class="header-anchor" href="#文字溢出显示省略号" aria-label="Permalink to &quot;文字溢出显示省略号&quot;">​</a></h3><p>单行省略号</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">@mixin</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">ellipsis</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#B2CCD6;">overflow</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> hidden</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#B2CCD6;">text-overflow</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> ellipsis</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#B2CCD6;">white-space</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> nowrap</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>多行省略号</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">@mixin</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">multi-ellipsis</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">$row</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;font-style:italic;">@if</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">type-of</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">$row</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">!=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">number</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;font-style:italic;">@error</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">$row 必须是一个有效的数字</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> -webkit-box</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#FFCB6B;">-webkit-line-clamp</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> $row</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#676E95;font-style:italic;">/* autoprefixer: ignore next */</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#FFCB6B;">-webkit-box-orient</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> vertical</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#B2CCD6;">overflow</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> hidden</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#B2CCD6;">text-overflow</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> ellipsis</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>单行和多行的组合写法</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">@mixin</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">ellipsis</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">$row</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;font-style:italic;">@if</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">type-of</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">$row</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">!=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">number</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;font-style:italic;">@error</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">$row 必须是一个有效的数字</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;font-style:italic;">@if</span><span style="color:#BABED8;"> $row </span><span style="color:#89DDFF;">==</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">white-space</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> nowrap</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">@else </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> -webkit-box</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#FFCB6B;">-webkit-line-clamp</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> $row</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#676E95;font-style:italic;">/* autoprefixer: ignore next */</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#FFCB6B;">-webkit-box-orient</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> vertical</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#B2CCD6;">overflow</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> hidden</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#B2CCD6;">text-overflow</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> ellipsis</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h3 id="滚动" tabindex="-1">滚动 <a class="header-anchor" href="#滚动" aria-label="Permalink to &quot;滚动&quot;">​</a></h3><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">@mixin</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">scroll</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">$type</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">y</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;font-style:italic;">@if</span><span style="color:#BABED8;"> $type </span><span style="color:#89DDFF;">==</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">x</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">overflow-x</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> auto</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">overflow-y</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> hidden</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">@else if</span><span style="color:#BABED8;"> $type </span><span style="color:#89DDFF;">==</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">y</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">overflow-x</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> hidden</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">overflow-y</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> auto</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">@else </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">overflow</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> auto</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#FFCB6B;">-webkit-overflow-scrolling</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> touch</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="清除浮动" tabindex="-1">清除浮动 <a class="header-anchor" href="#清除浮动" aria-label="Permalink to &quot;清除浮动&quot;">​</a></h3><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">@mixin</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">clearfix</span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#FFCB6B;">&amp;</span><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">after</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> block</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">clear</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> both</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#FFCB6B;">content</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="扩展点击区域" tabindex="-1">扩展点击区域 <a class="header-anchor" href="#扩展点击区域" aria-label="Permalink to &quot;扩展点击区域&quot;">​</a></h3><p>常用于移动端，毕竟总有一些作妖小图标按钮不好点击</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* 移除单位 */</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">strip-unit</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">$value</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;font-style:italic;">@return</span><span style="color:#BABED8;"> $value </span><span style="color:#89DDFF;">/</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">$value </span><span style="color:#89DDFF;">*</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">+</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@mixin</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">extend-click</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">$size</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  $value</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">strip-unit</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">$size</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> * </span><span style="color:#F78C6C;">-1px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> relative</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#FFCB6B;">&amp;</span><span style="color:#89DDFF;">::</span><span style="color:#C792EA;">before</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#FFCB6B;">content</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> absolute</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> $value</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> $value</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">right</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> $value</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#B2CCD6;">bottom</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> $value</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p><a href="#移除单位">strip-unit</a></p><h3 id="ios-安全距离" tabindex="-1">IOS 安全距离 <a class="header-anchor" href="#ios-安全距离" aria-label="Permalink to &quot;IOS 安全距离&quot;">​</a></h3><p>iPhone X 以上手机添加安全距离</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">@mixin</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">safe-area</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">$direction, $value</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;font-style:italic;">@if</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">not</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">index</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">top right bottom left</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> $direction</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;font-style:italic;">@error</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">$direction 必须为 \`top\`, \`right\`, \`bottom\`, \`left\`</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;font-style:italic;">@if</span><span style="color:#BABED8;"> $value </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    padding-</span><span style="color:#89DDFF;">#{</span><span style="color:#BABED8;">$direction</span><span style="color:#89DDFF;">}:</span><span style="color:#BABED8;"> $value</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    padding-</span><span style="color:#89DDFF;">#{</span><span style="color:#BABED8;">$direction</span><span style="color:#89DDFF;">}:</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">calc</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">constant</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">safe-area-inset-#{$direction}</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">+</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">#{</span><span style="color:#BABED8;">$value</span><span style="color:#89DDFF;">});</span></span>
<span class="line"><span style="color:#BABED8;">    padding-</span><span style="color:#89DDFF;">#{</span><span style="color:#BABED8;">$direction</span><span style="color:#89DDFF;">}:</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">calc</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">env</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">safe-area-inset-#{$direction}</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">+</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">#{</span><span style="color:#BABED8;">$value</span><span style="color:#89DDFF;">});</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">@else </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    padding-</span><span style="color:#89DDFF;">#{</span><span style="color:#BABED8;">$direction</span><span style="color:#89DDFF;">}:</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">constant</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">safe-area-inset-#{$direction}</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">    padding-</span><span style="color:#89DDFF;">#{</span><span style="color:#BABED8;">$direction</span><span style="color:#89DDFF;">}:</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">env</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">safe-area-inset-#{$direction}</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="常用的-function" tabindex="-1">常用的 function <a class="header-anchor" href="#常用的-function" aria-label="Permalink to &quot;常用的 function&quot;">​</a></h2><h3 id="移除单位" tabindex="-1">移除单位 <a class="header-anchor" href="#移除单位" aria-label="Permalink to &quot;移除单位&quot;">​</a></h3><ul><li><code>1px =&gt; 1</code></li><li><code>2em =&gt; 2</code></li></ul><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">@function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">strip-unit</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">$value</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;font-style:italic;">@return</span><span style="color:#BABED8;"> $value </span><span style="color:#89DDFF;">/</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">$value </span><span style="color:#89DDFF;">*</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">+</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* math 函数版本（个人不太喜欢） */</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">strip-unit</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">$value</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;font-style:italic;">@return</span><span style="color:#BABED8;"> math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">div</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">$value</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">$value </span><span style="color:#89DDFF;">*</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">+</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="转换为-rem" tabindex="-1">转换为 rem <a class="header-anchor" href="#转换为-rem" aria-label="Permalink to &quot;转换为 rem&quot;">​</a></h3><p>一般情况下使用 <a href="https://github.com/cuth/postcss-pxtorem" target="_blank" rel="noreferrer">postcss-pxtorem</a> 处理就行，但是有些神坑项目里面存在几套 <code>rem</code> 标准</p><div class="language-scss line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#BABED8;">$rem-base</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">16px</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">!default</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">to-rem</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">$value</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> $base</span><span style="color:#BABED8;font-style:italic;">:</span><span style="color:#BABED8;"> $rem-base</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">  $result</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">strip-unit</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">$value</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">/</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">strip-unit</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;">$base</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">*</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">1rem</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;font-style:italic;">@if</span><span style="color:#BABED8;"> $result </span><span style="color:#89DDFF;">==</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">0rem</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;font-style:italic;">@return</span><span style="color:#BABED8;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#BABED8;">  </span><span style="color:#89DDFF;font-style:italic;">@return</span><span style="color:#BABED8;"> $result</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,35),e=[o];function r(c,t,D,y,i,F){return n(),a("div",null,e)}const A=s(p,[["render",r]]);export{b as __pageData,A as default};
