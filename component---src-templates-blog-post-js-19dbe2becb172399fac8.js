(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"+rFB":function(e,t,a){},"/d1K":function(e,t,a){"use strict";a("91GP");var r=a("Rwg6"),n=a("q1tI"),o=a.n(n),i=a("Wbzz"),l=a("IP2g"),c=a("KSab"),s=a("Y7J9"),u=(a("sfvA"),c.config.friends),m=void 0===u?[]:u,d=function(){return o.a.createElement("div",{className:"friend"},o.a.createElement("p",null,"Links"),m.map((function(e){return o.a.createElement(s.a,{href:e.href,title:e.title,key:e.title,rel:"noopener"})})))},g=(a("qfuT"),function(e){var t=e.posts;return o.a.createElement("div",{className:"latest-post"},o.a.createElement("p",null,"Latest Articles"),t.map((function(e){var t=e.node;return o.a.createElement(i.Link,{to:t.frontmatter.url||t.frontmatter.slug||t.fields.slug,key:t.frontmatter.url||t.frontmatter.slug||t.fields.slug,href:t.frontmatter.url||t.frontmatter.slug||t.fields.slug},t.frontmatter.title)})))}),f=(a("usu3"),function(e){var t=e.totalCount,a=e.posts;return o.a.createElement("div",{className:"d-none d-lg-block information my-2"},o.a.createElement("hr",null),o.a.createElement("p",null,"Total ",t," Article"),o.a.createElement("hr",null),o.a.createElement(g,{posts:a}),o.a.createElement("hr",null),o.a.createElement(d,null))});f.defaultProps={posts:[]};var p=f,h=(a("YX5f"),c.config.wordings),b=void 0===h?[]:h,y=c.config.githubUsername,E=c.config.twitterUsername,v=c.config.linkedinUsername,w=c.config.email,k=c.config.iconUrl,A=c.config.about,I=c.config.facebook,N=function(e){var t=e.href,a=e.icon;return o.a.createElement("a",{target:"_blank",href:t,rel:"external nofollow noopener noreferrer",className:"custom-icon"},o.a.createElement("span",{className:"fa-layers fa-fw fa-2x"},o.a.createElement(l.a,{icon:a})))},_=function(e){var t=e.totalCount,a=e.latestPosts;return o.a.createElement("header",{className:"intro-header site-heading text-center col-xl-3 col-lg-3 col-xs-12 order-lg-1 display-none"},o.a.createElement("div",{className:"about-me"},o.a.createElement(i.Link,{to:A,href:A,className:"name"},o.a.createElement("img",{className:"avatar",src:k,alt:"HeisenBerg"}),o.a.createElement("h4",null,"Sai Krishna")),o.a.createElement("p",{className:"mb-1"},b[1]),o.a.createElement("p",{className:"mb-3 wordings"},b[0]),o.a.createElement(N,{href:"https://github.com/"+y,icon:["fab","github"]}),o.a.createElement(N,{href:"https://www.linkedin.com/in/"+v,icon:["fab","linkedin"]}),o.a.createElement(N,{href:"https://twitter.com/"+E,icon:["fab","twitter"]}),o.a.createElement(N,{href:"mailto:"+w,icon:["far","envelope"]}),I&&o.a.createElement(N,{href:"https://www.facebook.com/"+I+"/",icon:["fab","facebook"]}),o.a.createElement(p,{totalCount:t,posts:a})))};_.defaultProps={totalCount:0,latestPosts:[]};t.a=function(){return o.a.createElement(i.StaticQuery,{query:"1307080370",render:function(e){return o.a.createElement(_,Object.assign({},e.all,e.limited))},data:r})}},"2yjy":function(e,t,a){},FlsD:function(e,t,a){var r=a("0/R4");a("Xtr8")("isExtensible",(function(e){return function(t){return!!r(t)&&(!e||e(t))}}))},INYr:function(e,t,a){"use strict";var r=a("XKFU"),n=a("CkkT")(6),o="findIndex",i=!0;o in[]&&Array(1)[o]((function(){i=!1})),r(r.P+r.F*i,"Array",{findIndex:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(o)},Nlzp:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return l}));a("bHtr"),a("SRfc");var r=a("Wgwc"),n=a.n(r),o=a("KSab"),i=(o.config.maxPostsInPage,function(){return"undefined"!=typeof window}),l=function(e){return n()(e).format("MMM DD, YYYY")}},Rwg6:function(e){e.exports=JSON.parse('{"data":{"all":{"totalCount":6},"limited":{"latestPosts":[{"node":{"fields":{"slug":"/2020/03/20/ES6_Array_duplicate"},"frontmatter":{"id":"array","title":"Remove Array Duplicates","url":"/2020/03/20/ES6_Array_duplicate","date":"2020-03-20T03:48:03.125Z","tags":["ES6","JavaScript"],"description":"Remove Array Duplicates using ES6 Set. Convert it back to an array using Array.from","headerImage":"https://i.imgur.com/szJzw2w.jpg"}}},{"node":{"fields":{"slug":"/2020/03/04/Clone_an_Array_using_ES6"},"frontmatter":{"id":"array","title":"Clone an Array using ES6","url":"/2020/03/04/Clone_an_Array_using_ES6","date":"2020-03-04T03:48:03.125Z","tags":["ES6","JavaScript"],"description":"When we need to copy an array, we often times used slice. But with ES6, you can also use the spread operator to duplicate an array.","headerImage":"https://imgur.com/RATPg6c.jpg"}}},{"node":{"fields":{"slug":"/2020/03/20/Split_usin_ES6"},"frontmatter":{"id":"array","title":"Using ES6 Spread to split","url":"/2020/03/20/Split_usin_ES6","date":"2020-02-15T03:48:03.125Z","tags":["ES6","JavaScript"],"description":"Convert a string to an array of characters using the spread syntax!","headerImage":"https://imgur.com/RATPg6c.jpg"}}},{"node":{"fields":{"slug":"/2020/01/16/TypesOf_Cloning"},"frontmatter":{"id":"http://www.saikrishna.tech/","title":"Types of array cloning","url":"/2020/01/16/TypesOf_Cloning","date":"2020-01-16T03:48:03.125Z","tags":["JS","Array"],"description":"There are 2 types of array cloning, shallow & deep. Shallow copies only cover the 1st level of the array and the rest are referenced.","headerImage":null}}},{"node":{"fields":{"slug":"/2019/12/18/Cheatsheet_for_Arrow_Functions/"},"frontmatter":{"id":"c192eaba9fefc632acf87ed636593475","title":"Cheatsheet for Arrow Functions","url":"/2019/12/18/Cheatsheet_for_Arrow_Functions/","date":"2019-12-18T03:48:03.125Z","tags":["ES6"],"description":"Cheatsheet to show you the ways to write and work around arrow functions.","headerImage":"https://i.imgur.com/szJzw2w.jpg"}}},{"node":{"fields":{"slug":"/guestbook"},"frontmatter":{"id":"https://www.saikrishna.tech/guestbook/","title":"GuestBook","url":"/guestbook","date":"2019-11-06T03:48:03.125Z","tags":["Read"],"description":"","headerImage":null}}}]}}}')},U2Z3:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),o=a("0b+E"),i=a("IP2g"),l=(a("+rFB"),function(e){e.url,e.hasCommentBox;return n.a.createElement("div",{className:"m-share-box"},n.a.createElement("a",{className:"share-button",href:"#header",onClick:function(){o.a.event({category:"User",action:"Scroll to Top"})},style:{lineHeight:"1.7rem",paddingLeft:"0.1rem"}},n.a.createElement(i.a,{icon:["fas","chevron-up"]})))});l.defaultProps={hasCommentBox:!0},t.a=l},X4Np:function(e,t,a){a("8+KV"),a("91GP"),a("V+eJ"),a("KKXr"),e.exports=function(){"use strict";var e="undefined"!=typeof document&&document.documentMode,t={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var a=document.createElement("img");e&&t.getAttribute("data-iesrc")&&(a.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(a.alt=t.getAttribute("data-alt")),t.append(a)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){for(var r=t.children,n=void 0,o=0;o<=r.length-1;o++)(n=r[o].getAttribute("data-src"))&&(r[o].src=n);t.load()}if(t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset")),t.getAttribute("data-background-image"))t.style.backgroundImage="url('"+t.getAttribute("data-background-image").split(",").join("'),url('")+"')";else if(t.getAttribute("data-background-image-set")){var i=t.getAttribute("data-background-image-set").split(","),l=i[0].substr(0,i[0].indexOf(" "))||i[0];l=-1===l.indexOf("url(")?"url("+l+")":l,1===i.length?t.style.backgroundImage=l:t.setAttribute("style",(t.getAttribute("style")||"")+"background-image: "+l+"; background-image: -webkit-image-set("+i+"); background-image: image-set("+i+")")}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded:function(){}};function a(e){e.setAttribute("data-loaded",!0)}var r=function(e){return"true"===e.getAttribute("data-loaded")};return function(){var e,n,o=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},l=Object.assign({},t,i),c=l.root,s=l.rootMargin,u=l.threshold,m=l.load,d=l.loaded,g=void 0;return"undefined"!=typeof window&&window.IntersectionObserver&&(g=new IntersectionObserver((e=m,n=d,function(t,o){t.forEach((function(t){(0<t.intersectionRatio||t.isIntersecting)&&(o.unobserve(t.target),r(t.target)||(e(t.target),a(t.target),n(t.target)))}))}),{root:c,rootMargin:s,threshold:u})),{observe:function(){for(var e=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return e instanceof Element?[e]:e instanceof NodeList?e:t.querySelectorAll(e)}(o,c),t=0;t<e.length;t++)r(e[t])||(g?g.observe(e[t]):(m(e[t]),a(e[t]),d(e[t])))},triggerLoad:function(e){r(e)||(m(e),a(e),d(e))},observer:g}}}()},Y7J9:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),o=function(e){var t=e.href,a=e.title,r=e.target,o=e.className,i=e.rel;return n.a.createElement("a",{href:t,rel:i,target:r,className:o},a)};o.defaultProps={target:"_blank",className:"",rel:"external nofollow noopener"},t.a=o},YX5f:function(e,t,a){},"aqI/":function(e,t,a){a("7DDg")("Uint8",1,(function(e){return function(t,a,r){return e(this,t,a,r)}}),!0)},e5BI:function(e,t,a){},"f/UQ":function(e,t,a){a("pIFo"),a("SRfc");var r=function(e,t){if(void 0===t&&(t="large"),!e)return"https://i.imgur.com/M795H8A.jpg";if(e.match("(png)|(gif)"))return e.match("http")?e:"https://i.imgur.com/"+e;var a=e.replace(/(.*)\.(.*)/,"$1"+{"small-square":"s","big-square":"b",small:"t",medium:"m",large:"l",huge:"h"}[t]+".$2");return a.match("http")?a:"https://i.imgur.com/"+a},n=function(e){var t=e.href,a=e.title,n=e.text;return'<img class="lozad d-block mx-auto" data-src='+r(t,"large")+" "+function(e,t){return'title="'+(e||t)+'"'}(a,n)+" />"};e.exports={parseImgur:r,parseImageTag:n,getGalleryImage:function(e){var t=e.href,a=e.title,o=e.text;return'<a data-fancybox="gallery" href="'+r(t,"huge")+'">'+n({href:t,title:a,text:o})+"</a>"}}},mura:function(e,t,a){var r=a("0/R4"),n=a("Z6vF").onFreeze;a("Xtr8")("preventExtensions",(function(e){return function(t){return e&&r(t)?e(n(t)):t}}))},qGWU:function(e,t,a){},qfuT:function(e,t,a){},sfvA:function(e,t,a){},usu3:function(e,t,a){},wtQ5:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),o=a("TJpk"),i=a.n(o),l=a("KSab"),c=a.n(l),s=function(e){var t=e.url,a=e.title,r=e.description,o=e.image,l=(e.siteTitleAlt,e.isPost);return n.a.createElement(i.a,null,n.a.createElement("title",null,a),n.a.createElement("meta",{name:"description",content:r}),n.a.createElement("meta",{name:"image",content:o}),n.a.createElement("script",{type:"application/ld+json"},JSON.stringify(function(e){var t=e.url,a=e.title,r=e.siteTitleAlt,n=e.isPost,o=e.image,i=e.description;return[{"@context":"http://schema.org","@type":"WebSite",url:t,name:a,alternateName:r||""},n?{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":t,name:a,image:o}}]}:"",n?{"@context":"http://schema.org","@type":"BlogPosting",url:t,name:a,alternateName:r||"",headline:a,image:{"@type":"ImageObject",url:o},description:i}:""]}(t))),n.a.createElement("meta",{property:"og:url",content:t}),l?n.a.createElement("meta",{property:"og:type",content:"article"}):n.a.createElement("meta",{property:"og:type",content:"website"}),n.a.createElement("meta",{property:"og:title",content:a}),n.a.createElement("meta",{property:"og:description",content:r}),n.a.createElement("meta",{property:"og:image",content:o}),n.a.createElement("meta",{property:"fb:app_id",content:c.a.siteFBAppID?c.a.siteFBAppID:""}),n.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),n.a.createElement("meta",{name:"twitter:creator",content:c.a.twitter_username?c.a.twitter_username:""}),n.a.createElement("meta",{name:"twitter:title",content:a}),n.a.createElement("meta",{name:"twitter:description",content:r}),n.a.createElement("meta",{name:"twitter:image",content:o}))};s.defaultProps={title:c.a.title},t.a=s},yZlL:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return A}));a("91GP"),a("f3/d");var r=a("q1tI"),n=a.n(r),o=(a("2yjy"),a("Nlzp")),i=a("Y7J9"),l=a("/d1K"),c=a("X4Np"),s=a.n(c);var u=function(e){var t,a;function r(t){var a,r=(a=e.call(this,t)||this).props.post;return a.post=r,a}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=r.prototype;return i.componentDidMount=function(){Object(o.a)()&&s()(".lozad",{load:function(e){e.src=e.dataset.src,e.onload=function(){e.classList.add("animated"),e.classList.add("fadeIn")}}}).observe()},i.render=function(){var e=this.props.post;return n.a.createElement("div",{dangerouslySetInnerHTML:{__html:e},style:{padding:30,background:"white"}})},r}(r.Component),m=a("wtQ5"),d=(a("e5BI"),a("f/UQ")),g=function(e){var t=e.img,a=e.title,r=e.subTitle,o=e.authorImage,i=e.authorName;e.jueJinPostLink,e.jueJinLikeIconLink;return n.a.createElement("div",{className:"col-12 header",style:{padding:0},id:"header"},n.a.createElement("div",{className:"img-container",style:{backgroundImage:"linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url("+t+")",marginTop:-58}},a&&n.a.createElement("h1",{className:"u-title"},a),r&&n.a.createElement("div",{className:"u-subtitle"},n.a.createElement("div",{className:"m-left"},o&&n.a.createElement("img",{src:Object(d.parseImgur)(o,"small-square"),className:"author-image",alt:i}),n.a.createElement("span",{className:"author-name"},i)),n.a.createElement("span",{className:"text"},r))))};g.defaultProps={title:"",subTitle:"",authorName:"",authorImage:"",jueJinPostLink:"",jueJinLikeIconLink:""};var f=g,p=a("U2Z3"),h=a("KSab");a("qGWU");var b=h.config.name,y=h.config.iconUrl,E=h.config.gitalk,v={padding:"10px 30px",background:"white"},w="undefined"!=typeof window?a("dnEz"):void 0,k=function(e){var t,a;function r(t){var a;return(a=e.call(this,t)||this).data=a.props.data,a}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var c=r.prototype;return c.componentDidMount=function(){var e=this.data.content.edges[0].node,t=e.frontmatter,a=e.id,r=t.title,n=t.id;new w(Object.assign({},E,{title:r,id:n||a})).render("gitalk-container")},c.render=function(){var e=this.data.content.edges[0].node,t=e.html,a=e.frontmatter,r=e.fields,c=e.excerpt,s=r.slug,d=a.date,g=a.headerImage,h=a.title;return n.a.createElement("div",{className:"row post order-2"},n.a.createElement(f,{img:g||"https://i.imgur.com/M795H8A.jpg",title:h,authorName:b,authorImage:y,subTitle:Object(o.b)(d)}),n.a.createElement(l.a,{className:"display-none"}),n.a.createElement("div",{className:"col-xl-8 col-lg-7 col-md-12 col-sm-12 order-10 content"},n.a.createElement(u,{post:t}),n.a.createElement("div",{className:"m-message",style:v},"If you think my article is helpful to you, I hope you can recommend and exchange. welcome",n.a.createElement(i.a,{href:"https://github.com/Sai-Krishna-Web/",title:"\r Follow and Star This blog "}),"or",n.a.createElement(i.a,{href:"https://github.com/Sai-Krishna-Web",title:" Follow me Github."})),n.a.createElement("div",{id:"gitalk-container"})),n.a.createElement(p.a,{url:s}),n.a.createElement(m.a,{title:h,url:s,siteTitleAlt:"HeisenBerg's Blog",isPost:!1,description:c,image:g||"https://i.imgur.com/M795H8A.jpg"}))},r}(r.Component),A="4091093519";t.default=k}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-19dbe2becb172399fac8.js.map