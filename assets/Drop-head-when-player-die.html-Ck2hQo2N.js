import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,o as e,e as n}from"./app-CRiGVLTm.js";const p={},l=n(`<h1 id="玩家死亡後掉落玩家頭顱" tabindex="-1"><a class="header-anchor" href="#玩家死亡後掉落玩家頭顱"><span>玩家死亡後掉落玩家頭顱</span></a></h1><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#E5C07B;">EntityEvents</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">death</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&quot;player&quot;</span><span style="color:#ABB2BF;">, (</span><span style="color:#E06C75;font-style:italic;">event</span><span style="color:#ABB2BF;">) </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> { </span><span style="color:#E5C07B;">player</span><span style="color:#ABB2BF;"> } </span><span style="color:#56B6C2;">=</span><span style="color:#E06C75;"> event</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span class="space"> </span><span class="space"> </span><span style="color:#E5C07B;">player</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">block</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">popItem</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">Item</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">playerHead</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">player</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">username</span><span style="color:#ABB2BF;">));</span></span>
<span class="line"><span style="color:#ABB2BF;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),t=[l];function o(r,c){return e(),a("div",null,t)}const y=s(p,[["render",o],["__file","Drop-head-when-player-die.html.vue"]]),d=JSON.parse('{"path":"/posts/kubejs/snippets/Drop-head-when-player-die.html","title":"玩家死亡後掉落玩家頭顱","lang":"zh-TW","frontmatter":{"isOriginal":true,"category":["KubeJS"],"tag":["程式碼片段","JavaScript"],"description":"玩家死亡後掉落玩家頭顱","head":[["meta",{"property":"og:url","content":"https://Mango-Projects.github.io/Blog/Blog/posts/kubejs/snippets/Drop-head-when-player-die.html"}],["meta",{"property":"og:site_name","content":"芒果的部落格"}],["meta",{"property":"og:title","content":"玩家死亡後掉落玩家頭顱"}],["meta",{"property":"og:description","content":"玩家死亡後掉落玩家頭顱"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-TW"}],["meta",{"property":"og:updated_time","content":"2024-06-20T09:50:07.000Z"}],["meta",{"property":"article:author","content":"芒果凍布丁"}],["meta",{"property":"article:tag","content":"程式碼片段"}],["meta",{"property":"article:tag","content":"JavaScript"}],["meta",{"property":"article:modified_time","content":"2024-06-20T09:50:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"玩家死亡後掉落玩家頭顱\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-20T09:50:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"芒果凍布丁\\",\\"url\\":\\"https://github.com/EvanHsieh0415\\"}]}"]]},"headers":[],"git":{"createdTime":1718877007000,"updatedTime":1718877007000,"contributors":[{"name":"Mango","email":"evan940415@gmail.com","commits":1}]},"readingTime":{"minutes":0.11,"words":32},"filePathRelative":"posts/kubejs/snippets/Drop-head-when-player-die.md","localizedDate":"2024年6月20日","excerpt":"\\n<div class=\\"language-js line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"js\\" data-title=\\"js\\" style=\\"background-color:#282c34;color:#abb2bf\\"><pre class=\\"shiki one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"color:#E5C07B\\">EntityEvents</span><span style=\\"color:#ABB2BF\\">.</span><span style=\\"color:#61AFEF\\">death</span><span style=\\"color:#ABB2BF\\">(</span><span style=\\"color:#98C379\\">\\"player\\"</span><span style=\\"color:#ABB2BF\\">, (</span><span style=\\"color:#E06C75;font-style:italic\\">event</span><span style=\\"color:#ABB2BF\\">) </span><span style=\\"color:#C678DD\\">=&gt;</span><span style=\\"color:#ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span class=\\"space\\"> </span><span class=\\"space\\"> </span><span style=\\"color:#C678DD\\">const</span><span style=\\"color:#ABB2BF\\"> { </span><span style=\\"color:#E5C07B\\">player</span><span style=\\"color:#ABB2BF\\"> } </span><span style=\\"color:#56B6C2\\">=</span><span style=\\"color:#E06C75\\"> event</span><span style=\\"color:#ABB2BF\\">;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span class=\\"space\\"> </span><span class=\\"space\\"> </span><span style=\\"color:#E5C07B\\">player</span><span style=\\"color:#ABB2BF\\">.</span><span style=\\"color:#E5C07B\\">block</span><span style=\\"color:#ABB2BF\\">.</span><span style=\\"color:#61AFEF\\">popItem</span><span style=\\"color:#ABB2BF\\">(</span><span style=\\"color:#E5C07B\\">Item</span><span style=\\"color:#ABB2BF\\">.</span><span style=\\"color:#61AFEF\\">playerHead</span><span style=\\"color:#ABB2BF\\">(</span><span style=\\"color:#E5C07B\\">player</span><span style=\\"color:#ABB2BF\\">.</span><span style=\\"color:#E06C75\\">username</span><span style=\\"color:#ABB2BF\\">));</span></span>\\n<span class=\\"line\\"><span style=\\"color:#ABB2BF\\">});</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{y as comp,d as data};
