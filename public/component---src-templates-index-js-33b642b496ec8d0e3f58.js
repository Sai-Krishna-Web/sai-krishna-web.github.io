(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"+rFB":function(e,t,a){},"/d1K":function(e,t,a){"use strict";a("91GP");var r=a("Rwg6"),n=a("q1tI"),l=a.n(n),o=a("Wbzz"),c=a("IP2g"),s=a("KSab"),i=a("Y7J9"),m=(a("sfvA"),s.config.friends),u=void 0===m?[]:m,f=function(){return l.a.createElement("div",{className:"friend"},l.a.createElement("p",null,"Links"),u.map((function(e){return l.a.createElement(i.a,{href:e.href,title:e.title,key:e.title,rel:"noopener"})})))},d=(a("qfuT"),function(e){var t=e.posts;return l.a.createElement("div",{className:"latest-post"},l.a.createElement("p",null,"Latest Articles"),t.map((function(e){var t=e.node;return l.a.createElement(o.Link,{to:t.frontmatter.url||t.frontmatter.slug||t.fields.slug,key:t.frontmatter.url||t.frontmatter.slug||t.fields.slug,href:t.frontmatter.url||t.frontmatter.slug||t.fields.slug},t.frontmatter.title)})))}),g=(a("usu3"),function(e){var t=e.totalCount,a=e.posts;return l.a.createElement("div",{className:"d-none d-lg-block information my-2"},l.a.createElement("hr",null),l.a.createElement("p",null,"Total ",t," Article"),l.a.createElement("hr",null),l.a.createElement(d,{posts:a}),l.a.createElement("hr",null),l.a.createElement(f,null))});g.defaultProps={posts:[]};var p=g,h=(a("YX5f"),s.config.wordings),E=void 0===h?[]:h,v=s.config.githubUsername,b=s.config.twitterUsername,k=s.config.linkedinUsername,N=s.config.email,x=s.config.iconUrl,w=s.config.about,y=s.config.facebook,I=function(e){var t=e.href,a=e.icon;return l.a.createElement("a",{target:"_blank",href:t,rel:"external nofollow noopener noreferrer",className:"custom-icon"},l.a.createElement("span",{className:"fa-layers fa-fw fa-2x"},l.a.createElement(c.a,{icon:a})))},S=function(e){var t=e.totalCount,a=e.latestPosts;return l.a.createElement("header",{className:"intro-header site-heading text-center col-xl-3 col-lg-3 col-xs-12 order-lg-1 display-none"},l.a.createElement("div",{className:"about-me"},l.a.createElement(o.Link,{to:w,href:w,className:"name"},l.a.createElement("img",{className:"avatar",src:x,alt:"HeisenBerg"}),l.a.createElement("h4",null,"Sai Krishna")),l.a.createElement("p",{className:"mb-1"},E[1]),l.a.createElement("p",{className:"mb-3 wordings"},E[0]),l.a.createElement(I,{href:"https://github.com/"+v,icon:["fab","github"]}),l.a.createElement(I,{href:"https://www.linkedin.com/in/"+k,icon:["fab","linkedin"]}),l.a.createElement(I,{href:"https://twitter.com/"+b,icon:["fab","twitter"]}),l.a.createElement(I,{href:"mailto:"+N,icon:["far","envelope"]}),y&&l.a.createElement(I,{href:"https://www.facebook.com/"+y+"/",icon:["fab","facebook"]}),l.a.createElement(p,{totalCount:t,posts:a})))};S.defaultProps={totalCount:0,latestPosts:[]};t.a=function(){return l.a.createElement(o.StaticQuery,{query:"1307080370",render:function(e){return l.a.createElement(S,Object.assign({},e.all,e.limited))},data:r})}},"9UDz":function(e,t,a){},Jz1z:function(e,t,a){"use strict";a("f3/d");var r=a("q1tI"),n=a.n(r),l=function(e){var t=e.name,a=e.count;return n.a.createElement("a",{href:"/tag/"+t,className:"header-tag2"},t," ",a)};l.defaultProps={count:""},t.a=l},Nlzp:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return c}));a("bHtr"),a("SRfc");var r=a("Wgwc"),n=a.n(r),l=a("KSab"),o=(l.config.maxPostsInPage,function(){return"undefined"!=typeof window}),c=function(e){return n()(e).format("MMM DD, YYYY")}},Rwg6:function(e){e.exports=JSON.parse('{"data":{"all":{"totalCount":4},"limited":{"latestPosts":[{"node":{"fields":{"slug":"/2019/05/17/README"},"frontmatter":{"id":"README","title":"gatsby-starter-HeisenBerg-blog README","url":"/2019/05/17/README","date":"2019-05-17T03:48:03.125Z","tags":["read"],"description":"Blog Starter","headerImage":"https://i.imgur.com/mich3dS.jpg"}}},{"node":{"fields":{"slug":"/2020/03/20/ES6_Array_duplicate"},"frontmatter":{"id":"array","title":"Remove Array Duplicates","url":"/2020/03/20/ES6_Array_duplicate","date":"2019-05-17T03:48:03.125Z","tags":["ES6","JavaScript"],"description":"Blog Starter","headerImage":"https://i.imgur.com/mich3dS.jpg"}}},{"node":{"fields":{"slug":"/2020/01/01/about-me/"},"frontmatter":{"id":"c192eaba9fefc632acf87ed636593475","title":"About the author","url":"/2020/01/01/about-me/","date":"2018-05-01T03:48:03.125Z","tags":["read"],"description":"Sai Krishna - Web Developer。","headerImage":"https://i.imgur.com/mich3dS.jpg"}}},{"node":{"fields":{"slug":"/guestbook"},"frontmatter":{"id":"https://heisenberg-blog.netlify.app/guestbook/","title":"Guestbook","url":"/guestbook","date":"2016-01-18T03:48:03.125Z","tags":["Reading"],"description":"","headerImage":null}}}]}}}')},TRom:function(e,t,a){"use strict";a.r(t);a("91GP");var r=a("q1tI"),n=a.n(r),l=a("+ZDr"),o=a.n(l),c=a("ZO1O"),s=a("/d1K"),i=a("U2Z3"),m=(a("VYsE"),function(e){var t=e.color,a=e.text;return n.a.createElement("div",{className:"navlink",style:{color:t}},a)}),u=function(e){var t=e.test,a=e.url,r=e.text;return t?n.a.createElement(o.a,{to:""+a},n.a.createElement(m,{color:"#66ccff",text:r})):n.a.createElement(m,{color:"#7d7d7d",text:r})};t.default=function(e){var t=e.pageContext,a=e.location,r=t.group,l=t.index,o=t.first,m=t.last,f=t.pathPrefix,d=l-1==1?"":"/"+f+"/"+(l-1),g="/"+f+"/"+(l+1);return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"row homepage",style:{marginTop:20}},n.a.createElement(s.a,null),n.a.createElement("div",{className:"col-xl-6 col-lg-7 col-md-12 col-xs-12 order-2"},r.map((function(e){var t=e.node;return n.a.createElement(c.a,Object.assign({},t.frontmatter,{url:t.frontmatter.slug?t.frontmatter.slug:t.fields.slug,key:t.fields.slug}))})),n.a.createElement("div",{className:"row",style:{justifyContent:"space-around",marginBottom:"20px"}},n.a.createElement("div",{className:"previousLink"},n.a.createElement(u,{test:!o,url:d,text:"Previous"})),n.a.createElement("div",{className:"nextLink"},n.a.createElement(u,{test:!m,url:g,text:"Next"})))),n.a.createElement("div",{className:"col-xl-2 col-lg-1 order-3"})),n.a.createElement(i.a,{url:a.href,hasCommentBox:!1}))}},U2Z3:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),l=a("0b+E"),o=a("IP2g"),c=(a("+rFB"),function(e){e.url,e.hasCommentBox;return n.a.createElement("div",{className:"m-share-box"},n.a.createElement("a",{className:"share-button",href:"#header",onClick:function(){l.a.event({category:"User",action:"Scroll to Top"})},style:{lineHeight:"1.7rem",paddingLeft:"0.1rem"}},n.a.createElement(o.a,{icon:["fas","chevron-up"]})))});c.defaultProps={hasCommentBox:!0},t.a=c},VYsE:function(e,t,a){},Y7J9:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),l=function(e){var t=e.href,a=e.title,r=e.target,l=e.className,o=e.rel;return n.a.createElement("a",{href:t,rel:o,target:r,className:l},a)};l.defaultProps={target:"_blank",className:"",rel:"external nofollow noopener"},t.a=l},YX5f:function(e,t,a){},ZO1O:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),l=a("Wbzz"),o=a("Jz1z"),c=a("f/UQ"),s=a("Nlzp"),i=(a("9UDz"),function(e){e.url;var t,a,r=e.image,l=e.backgroundColor,s=e.tags;return n.a.createElement("div",{className:"wrapper tag-wrap",style:(t=r,a=l,{backgroundColor:"#"+a,backgroundImage:" url("+Object(c.parseImgur)(t,"large")+")"})},s.map((function(e){return n.a.createElement(o.a,{name:e,key:e})})))}),m=function(e){var t=e.title,a=e.date,r=e.url,o=e.headerImage,c=e.headerBackgroundColor,m=e.description,u=e.tags,f=void 0===u?[]:u;return n.a.createElement("div",{className:"col-sm-12 pb-4 link"},n.a.createElement("div",{className:"custom-card"},o&&n.a.createElement(i,{url:r,image:o,backgroundColor:c,tags:f}),n.a.createElement("div",{className:"data"},n.a.createElement("div",{className:"content"},n.a.createElement(l.Link,{to:r,href:r},n.a.createElement("h4",{className:"title"},t)),n.a.createElement("p",null,m),n.a.createElement(l.Link,{to:r,href:r},"... continue reading"),n.a.createElement("div",{className:"stats"},n.a.createElement("span",{className:"date"},Object(s.b)(a)))))))};m.defaultProps={headerImage:"",tags:[],date:"",headerBackgroundColor:"",title:""},t.a=m},"f/UQ":function(e,t,a){a("pIFo"),a("SRfc");var r=function(e,t){if(void 0===t&&(t="large"),!e)return"https://i.imgur.com/M795H8A.jpg";if(e.match("(png)|(gif)"))return e.match("http")?e:"https://i.imgur.com/"+e;var a=e.replace(/(.*)\.(.*)/,"$1"+{"small-square":"s","big-square":"b",small:"t",medium:"m",large:"l",huge:"h"}[t]+".$2");return a.match("http")?a:"https://i.imgur.com/"+a},n=function(e){var t=e.href,a=e.title,n=e.text;return'<img class="lozad d-block mx-auto" data-src='+r(t,"large")+" "+function(e,t){return'title="'+(e||t)+'"'}(a,n)+" />"};e.exports={parseImgur:r,parseImageTag:n,getGalleryImage:function(e){var t=e.href,a=e.title,l=e.text;return'<a data-fancybox="gallery" href="'+r(t,"huge")+'">'+n({href:t,title:a,text:l})+"</a>"}}},qfuT:function(e,t,a){},sfvA:function(e,t,a){},usu3:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-index-js-33b642b496ec8d0e3f58.js.map