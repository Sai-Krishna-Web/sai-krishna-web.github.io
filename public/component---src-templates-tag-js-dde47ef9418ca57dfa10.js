(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"/d1K":function(e,t,a){"use strict";a("91GP");var r=a("Rwg6"),n=a("q1tI"),l=a.n(n),i=a("Wbzz"),o=a("IP2g"),c=a("KSab"),m=a("Y7J9"),s=(a("sfvA"),c.config.friends),u=void 0===s?[]:s,g=function(){return l.a.createElement("div",{className:"friend"},l.a.createElement("p",null,"Links"),u.map((function(e){return l.a.createElement(m.a,{href:e.href,title:e.title,key:e.title,rel:"noopener"})})))},f=(a("qfuT"),function(e){var t=e.posts;return l.a.createElement("div",{className:"latest-post"},l.a.createElement("p",null,"Latest Articles"),t.map((function(e){var t=e.node;return l.a.createElement(i.Link,{to:t.frontmatter.url||t.frontmatter.slug||t.fields.slug,key:t.frontmatter.url||t.frontmatter.slug||t.fields.slug,href:t.frontmatter.url||t.frontmatter.slug||t.fields.slug},t.frontmatter.title)})))}),d=(a("usu3"),function(e){var t=e.totalCount,a=e.posts;return l.a.createElement("div",{className:"d-none d-lg-block information my-2"},l.a.createElement("hr",null),l.a.createElement("p",null,"Total ",t," Article"),l.a.createElement("hr",null),l.a.createElement(f,{posts:a}),l.a.createElement("hr",null),l.a.createElement(g,null))});d.defaultProps={posts:[]};var p=d,E=(a("YX5f"),c.config.wordings),h=void 0===E?[]:E,b=c.config.githubUsername,v=c.config.twitterUsername,y=c.config.linkedinUsername,k=c.config.email,w=c.config.iconUrl,N=c.config.about,I=c.config.facebook,x=function(e){var t=e.href,a=e.icon;return l.a.createElement("a",{target:"_blank",href:t,rel:"external nofollow noopener noreferrer",className:"custom-icon"},l.a.createElement("span",{className:"fa-layers fa-fw fa-2x"},l.a.createElement(o.a,{icon:a})))},A=function(e){var t=e.totalCount,a=e.latestPosts;return l.a.createElement("header",{className:"intro-header site-heading text-center col-xl-3 col-lg-3 col-xs-12 order-lg-1"},l.a.createElement("div",{className:"about-me"},l.a.createElement(i.Link,{to:N,href:N,className:"name"},l.a.createElement("img",{className:"avatar",src:w,alt:"HeisenBerg"}),l.a.createElement("h4",null,"Sai Krishna")),l.a.createElement("p",{className:"mb-1"},h[1]),l.a.createElement("p",{className:"mb-3 wordings"},h[0]),l.a.createElement(x,{href:"https://github.com/"+b,icon:["fab","github"]}),l.a.createElement(x,{href:"https://www.linkedin.com/in/"+y,icon:["fab","linkedin"]}),l.a.createElement(x,{href:"https://twitter.com/"+v,icon:["fab","twitter"]}),l.a.createElement(x,{href:"mailto:"+k,icon:["far","envelope"]}),I&&l.a.createElement(x,{href:"https://www.facebook.com/"+I+"/",icon:["fab","facebook"]}),l.a.createElement(p,{totalCount:t,posts:a})))};A.defaultProps={totalCount:0,latestPosts:[]};t.a=function(){return l.a.createElement(i.StaticQuery,{query:"1307080370",render:function(e){return l.a.createElement(A,Object.assign({},e.all,e.limited))},data:r})}},"9UDz":function(e,t,a){},Jz1z:function(e,t,a){"use strict";a("f3/d");var r=a("q1tI"),n=a.n(r),l=function(e){var t=e.name,a=e.count;return n.a.createElement("a",{href:"/tag/"+t,className:"header-tag"},t," ",a)};l.defaultProps={count:""},t.a=l},Rwg6:function(e){e.exports=JSON.parse('{"data":{"all":{"totalCount":4},"limited":{"latestPosts":[{"node":{"fields":{"slug":"/2019/05/17/README"},"frontmatter":{"id":"README","title":"gatsby-starter-HeisenBerg-blog README","url":"/2019/05/17/README","date":"2019-05-17T03:48:03.125Z","tags":["read"],"description":"Blog Starter","headerImage":"https://i.imgur.com/mich3dS.jpg"}}},{"node":{"fields":{"slug":"/2020/03/20/ES6_Array_duplicate"},"frontmatter":{"id":"array","title":"Remove Array Duplicates","url":"/2020/03/20/ES6_Array_duplicate","date":"2019-05-17T03:48:03.125Z","tags":["ES6","JavaScript"],"description":"Blog Starter","headerImage":"https://i.imgur.com/mich3dS.jpg"}}},{"node":{"fields":{"slug":"/2020/01/01/about-me/"},"frontmatter":{"id":"c192eaba9fefc632acf87ed636593475","title":"About the author","url":"/2020/01/01/about-me/","date":"2018-05-01T03:48:03.125Z","tags":["read"],"description":"Sai Krishna - Web Developer。","headerImage":"https://i.imgur.com/mich3dS.jpg"}}},{"node":{"fields":{"slug":"/guestbook"},"frontmatter":{"id":"https://heisenberg-blog.netlify.app/guestbook/","title":"Guestbook","url":"/guestbook","date":"2016-01-18T03:48:03.125Z","tags":["Reading"],"description":"","headerImage":null}}}]}}}')},Y7J9:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),l=function(e){var t=e.href,a=e.title,r=e.target,l=e.className,i=e.rel;return n.a.createElement("a",{href:t,rel:i,target:r,className:l},a)};l.defaultProps={target:"_blank",className:"",rel:"external nofollow noopener"},t.a=l},YX5f:function(e,t,a){},ZO1O:function(e,t,a){"use strict";a("KKXr");var r=a("q1tI"),n=a.n(r),l=a("Wbzz"),i=a("Jz1z"),o=a("f/UQ"),c=(a("9UDz"),function(e){var t,a,r=e.url,i=e.image,c=e.backgroundColor;return n.a.createElement(l.Link,{to:r,href:r},n.a.createElement("div",{className:"wrapper",style:(t=i,a=c,{backgroundColor:"#"+a,backgroundImage:" url("+Object(o.parseImgur)(t,"large")+")"})}))}),m=function(e){var t=e.title,a=e.date,r=e.url,o=e.headerImage,m=e.headerBackgroundColor,s=e.description,u=e.tags,g=void 0===u?[]:u;return n.a.createElement("div",{className:"col-sm-12 pb-4"},n.a.createElement("div",{className:"custom-card"},o&&n.a.createElement(c,{url:r,image:o,backgroundColor:m}),n.a.createElement("div",{className:"data"},n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"stats"},n.a.createElement("span",{className:"date"},a.split("T")[0]),g.map((function(e){return n.a.createElement(i.a,{name:e,key:e})}))),n.a.createElement(l.Link,{to:r,href:r},n.a.createElement("h4",{className:"title"},t)),n.a.createElement("p",null,s),n.a.createElement(l.Link,{to:r,href:r},".... continue reading the full text")))))};m.defaultProps={headerImage:"",tags:[],date:"",headerBackgroundColor:"",title:""},t.a=m},ccoC:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return c}));a("91GP");var r=a("q1tI"),n=a.n(r),l=a("ZO1O"),i=a("wtQ5"),o=a("/d1K");t.default=function(e){var t=e.data,a=e.pageContext,r=t.allMarkdownRemark.edges,c=a.tag;return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row",style:{margin:15}},n.a.createElement(o.a,null),n.a.createElement("div",{className:"col-xl-9 col-lg-7 col-md-12 col-xs-12 order-2"},n.a.createElement("div",{className:"col-12",style:{fontSize:20,margin:15}},r.length," Articles in ",c),r.map((function(e){var t=e.node;return n.a.createElement(l.a,Object.assign({},t.frontmatter,{key:t.id}))}))),n.a.createElement("div",{className:"col-xl-2 col-lg-1 order-3"})),n.a.createElement(i.a,{title:c,url:"/tag/"+c,siteTitleAlt:"HeisenBerg's Blog",isPost:!1,description:c,image:"https://i.imgur.com/M795H8A.jpg"}))};var c="704583718"},"f/UQ":function(e,t,a){a("pIFo"),a("SRfc");var r=function(e,t){if(void 0===t&&(t="large"),!e)return"https://i.imgur.com/M795H8A.jpg";if(e.match("(png)|(gif)"))return e.match("http")?e:"https://i.imgur.com/"+e;var a=e.replace(/(.*)\.(.*)/,"$1"+{"small-square":"s","big-square":"b",small:"t",medium:"m",large:"l",huge:"h"}[t]+".$2");return a.match("http")?a:"https://i.imgur.com/"+a},n=function(e){var t=e.href,a=e.title,n=e.text;return'<img class="lozad d-block mx-auto" data-src='+r(t,"large")+" "+function(e,t){return'title="'+(e||t)+'"'}(a,n)+" />"};e.exports={parseImgur:r,parseImageTag:n,getGalleryImage:function(e){var t=e.href,a=e.title,l=e.text;return'<a data-fancybox="gallery" href="'+r(t,"huge")+'">'+n({href:t,title:a,text:l})+"</a>"}}},qfuT:function(e,t,a){},sfvA:function(e,t,a){},usu3:function(e,t,a){},wtQ5:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),l=a("TJpk"),i=a.n(l),o=a("KSab"),c=a.n(o),m=function(e){var t=e.url,a=e.title,r=e.description,l=e.image,o=(e.siteTitleAlt,e.isPost);return n.a.createElement(i.a,null,n.a.createElement("title",null,a),n.a.createElement("meta",{name:"description",content:r}),n.a.createElement("meta",{name:"image",content:l}),n.a.createElement("script",{type:"application/ld+json"},JSON.stringify(function(e){var t=e.url,a=e.title,r=e.siteTitleAlt,n=e.isPost,l=e.image,i=e.description;return[{"@context":"http://schema.org","@type":"WebSite",url:t,name:a,alternateName:r||""},n?{"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":t,name:a,image:l}}]}:"",n?{"@context":"http://schema.org","@type":"BlogPosting",url:t,name:a,alternateName:r||"",headline:a,image:{"@type":"ImageObject",url:l},description:i}:""]}(t))),n.a.createElement("meta",{property:"og:url",content:t}),o?n.a.createElement("meta",{property:"og:type",content:"article"}):n.a.createElement("meta",{property:"og:type",content:"website"}),n.a.createElement("meta",{property:"og:title",content:a}),n.a.createElement("meta",{property:"og:description",content:r}),n.a.createElement("meta",{property:"og:image",content:l}),n.a.createElement("meta",{property:"fb:app_id",content:c.a.siteFBAppID?c.a.siteFBAppID:""}),n.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),n.a.createElement("meta",{name:"twitter:creator",content:c.a.twitter_username?c.a.twitter_username:""}),n.a.createElement("meta",{name:"twitter:title",content:a}),n.a.createElement("meta",{name:"twitter:description",content:r}),n.a.createElement("meta",{name:"twitter:image",content:l}))};m.defaultProps={title:c.a.title},t.a=m}}]);
//# sourceMappingURL=component---src-templates-tag-js-dde47ef9418ca57dfa10.js.map