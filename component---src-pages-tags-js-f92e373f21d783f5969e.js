(window.webpackJsonp = window.webpackJsonp || []).push([[11], { "/d1K": function (e, t, a) { "use strict"; a("91GP"); var r = a("Rwg6"), n = a("q1tI"), o = a.n(n), l = a("Wbzz"), i = a("IP2g"), s = a("KSab"), c = a("Y7J9"), m = (a("sfvA"), s.config.friends), u = void 0 === m ? [] : m, d = function () { return o.a.createElement("div", { className: "friend" }, o.a.createElement("p", null, "Links"), u.map((function (e) { return o.a.createElement(c.a, { href: e.href, title: e.title, key: e.title, rel: "noopener" }) }))) }, p = (a("qfuT"), function (e) { var t = e.posts; return o.a.createElement("div", { className: "latest-post" }, o.a.createElement("p", null, "Latest Articles"), t.map((function (e) { var t = e.node; return o.a.createElement(l.Link, { to: t.frontmatter.url || t.frontmatter.slug || t.fields.slug, key: t.frontmatter.url || t.frontmatter.slug || t.fields.slug, href: t.frontmatter.url || t.frontmatter.slug || t.fields.slug }, t.frontmatter.title) }))) }), f = (a("usu3"), function (e) { var t = e.totalCount, a = e.posts; return o.a.createElement("div", { className: "d-none d-lg-block information my-2" }, o.a.createElement("hr", null), o.a.createElement("p", null, "Total ", t, " Article"), o.a.createElement("hr", null), o.a.createElement(p, { posts: a }), o.a.createElement("hr", null), o.a.createElement(d, null)) }); f.defaultProps = { posts: [] }; var g = f, h = (a("YX5f"), s.config.wordings), E = void 0 === h ? [] : h, w = s.config.githubUsername, y = s.config.twitterUsername, v = s.config.linkedinUsername, b = s.config.email, k = s.config.iconUrl, _ = s.config.about, N = s.config.facebook, S = function (e) { var t = e.href, a = e.icon; return o.a.createElement("a", { target: "_blank", href: t, rel: "external nofollow noopener noreferrer", className: "custom-icon" }, o.a.createElement("span", { className: "fa-layers fa-fw fa-2x" }, o.a.createElement(i.a, { icon: a }))) }, A = function (e) { var t = e.totalCount, a = e.latestPosts; return o.a.createElement("header", { className: "intro-header neomorphic-shadows neomorphic-shadows-hover site-heading text-center col-xl-3 col-lg-3 col-xs-12 order-lg-1 display-none" }, o.a.createElement("div", { className: "about-me" }, o.a.createElement(l.Link, { to: _, href: _, className: "name" }, o.a.createElement("img", { className: "avatar neomorphic-shadows", src: k, alt: "HeisenBerg" }), o.a.createElement("h4", null, "Sai Krishna")), o.a.createElement("p", { className: "mb-1" }, E[1]), o.a.createElement("p", { className: "mb-3 wordings" }, E[0]), o.a.createElement(S, { href: "https://github.com/" + w, icon: ["fab", "github"] }), o.a.createElement(S, { href: "https://www.linkedin.com/in/" + v, icon: ["fab", "linkedin"] }), o.a.createElement(S, { href: "https://twitter.com/" + y, icon: ["fab", "twitter"] }), o.a.createElement(S, { href: "mailto:" + b, icon: ["far", "envelope"] }), N && o.a.createElement(S, { href: "https://www.facebook.com/" + N + "/", icon: ["fab", "facebook"] }), o.a.createElement(g, { totalCount: t, posts: a }))) }; A.defaultProps = { totalCount: 0, latestPosts: [] }; t.a = function () { return o.a.createElement(l.StaticQuery, { query: "1307080370", render: function (e) { return o.a.createElement(A, Object.assign({}, e.all, e.limited)) }, data: r }) } }, Jz1z: function (e, t, a) { "use strict"; a("f3/d"); var r = a("q1tI"), n = a.n(r), o = a("Wbzz"), l = function (e) { var t = e.name, a = e.count; return n.a.createElement(o.Link, { to: "/tag/" + t, href: "/tag/" + t, className: "header-tag2 neomorphic-shadows neomorphic-shadows-hover" }, t, " ", a) }; l.defaultProps = { count: "" }, t.a = l }, Rwg6: function (e) { e.exports = JSON.parse('{"data":{"all":{"totalCount":6},"limited":{"latestPosts":[{"node":{"fields":{"slug":"/2020/03/20/ES6_Array_duplicate"},"frontmatter":{"id":"array","title":"Remove Array Duplicates","url":"/2020/03/20/ES6_Array_duplicate","date":"2020-03-20T03:48:03.125Z","tags":["ES6","JavaScript"],"description":"Remove Array Duplicates using ES6 Set. Convert it back to an array using Array.from","headerImage":"https://i.imgur.com/szJzw2w.jpg"}}},{"node":{"fields":{"slug":"/2020/03/04/Clone_an_Array_using_ES6"},"frontmatter":{"id":"array","title":"Clone an Array using ES6","url":"/2020/03/04/Clone_an_Array_using_ES6","date":"2020-03-04T03:48:03.125Z","tags":["ES6","JavaScript"],"description":"When we need to copy an array, we often times used slice. But with ES6, you can also use the spread operator to duplicate an array.","headerImage":"https://imgur.com/RATPg6c.jpg"}}},{"node":{"fields":{"slug":"/2020/03/20/Split_usin_ES6"},"frontmatter":{"id":"array","title":"Using ES6 Spread to split","url":"/2020/03/20/Split_usin_ES6","date":"2020-02-15T03:48:03.125Z","tags":["ES6","JavaScript"],"description":"Convert a string to an array of characters using the spread syntax!","headerImage":"https://imgur.com/RATPg6c.jpg"}}},{"node":{"fields":{"slug":"/2020/01/16/TypesOf_Cloning"},"frontmatter":{"id":"http://jsnutshell.tech/","title":"Types of array cloning","url":"/2020/01/16/TypesOf_Cloning","date":"2020-01-16T03:48:03.125Z","tags":["JS","Array"],"description":"There are 2 types of array cloning, shallow & deep. Shallow copies only cover the 1st level of the array and the rest are referenced.","headerImage":null}}},{"node":{"fields":{"slug":"/2019/12/18/Cheatsheet_for_Arrow_Functions/"},"frontmatter":{"id":"c192eaba9fefc632acf87ed636593475","title":"Cheatsheet for Arrow Functions","url":"/2019/12/18/Cheatsheet_for_Arrow_Functions/","date":"2019-12-18T03:48:03.125Z","tags":["ES6"],"description":"Cheatsheet to show you the ways to write and work around arrow functions.","headerImage":"https://i.imgur.com/szJzw2w.jpg"}}},{"node":{"fields":{"slug":"/guestbook/"},"frontmatter":{"id":"https://www.saikrishna.tech/guestbook/","title":"GuestBook","url":"/guestbook/","date":"2019-11-06T03:48:03.125Z","tags":["Read"],"description":"","headerImage":null}}}]}}}') }, XzAW: function (e, t, a) { }, Y7J9: function (e, t, a) { "use strict"; var r = a("q1tI"), n = a.n(r), o = function (e) { var t = e.href, a = e.title, r = e.target, o = e.className, l = e.rel; return n.a.createElement("a", { href: t, rel: l, target: r, className: o }, a) }; o.defaultProps = { target: "_blank", className: "", rel: "external nofollow noopener" }, t.a = o }, YX5f: function (e, t, a) { }, enK5: function (e, t, a) { "use strict"; a.r(t), a.d(t, "pageQuery", (function () { return c })); var r = a("q1tI"), n = a.n(r), o = a("Wbzz"), l = a("/d1K"), i = a("Jz1z"), s = a("wtQ5"); a("XzAW"); t.default = function (e) { var t = e.data.allMarkdownRemark; return n.a.createElement("div", { style: { marginTop: 20 } }, n.a.createElement("div", { className: "container" }, n.a.createElement("div", { className: "row" }, n.a.createElement(l.a, null), n.a.createElement("div", { className: "tag-container col-xl-9 col-lg-9 col-lg-6 col-md-12 col-sm-12 order-2" }, n.a.createElement("div", { className: "neomorphic-shadows left-pad-5" }, n.a.createElement("div", { className: "tag-header markdown text-markdown" }, n.a.createElement("h1", null, " Tags")), n.a.createElement("div", { className: "tag-div" }, t.group.map((function (e) { return n.a.createElement(i.a, { name: e.fieldValue, key: e.fieldValue, count: e.totalCount }) })))), n.a.createElement("div", null, t.group.map((function (e) { return n.a.createElement("div", { className: "neomorphic-shadows mt-20p", key: e.fieldValue }, n.a.createElement("h4", { className: "left-pad-5" }, e.fieldValue, " "), n.a.createElement("hr", { className: "tag-list-hr" }), n.a.createElement("div", { className: "flex overflow-auto-x tag-list scrollbar xxl-no-srollbar " }, e.edges.map((function (e) { return n.a.createElement(o.Link, { className: "conact-card inline-flex tag-card neomorphic-shadows neomorphic-shadows-hover", key: e.node.frontmatter.slug, to: "" + e.node.frontmatter.slug, href: "" + e.node.frontmatter.slug }, n.a.createElement("p", null, e.node.frontmatter.title)) })))) })))), n.a.createElement(s.a, { title: "read", url: "/tags/", siteTitleAlt: "HeisenBerg's Blog", isPost: !1, description: "Tags Page", image: "https://i.imgur.com/M795H8A.jpg" })))) }; var c = "3006100090" }, qfuT: function (e, t, a) { }, sfvA: function (e, t, a) { }, usu3: function (e, t, a) { }, wtQ5: function (e, t, a) { "use strict"; var r = a("q1tI"), n = a.n(r), o = a("TJpk"), l = a.n(o), i = a("KSab"), s = a.n(i), c = function (e) { var t = e.url, a = e.title, r = e.description, o = e.image, i = (e.siteTitleAlt, e.isPost); return n.a.createElement(l.a, null, n.a.createElement("title", null, a), n.a.createElement("meta", { name: "description", content: r }), n.a.createElement("meta", { name: "image", content: o }), n.a.createElement("script", { type: "application/ld+json" }, JSON.stringify(function (e) { var t = e.url, a = e.title, r = e.siteTitleAlt, n = e.isPost, o = e.image, l = e.description; return [{ "@context": "http://schema.org", "@type": "WebSite", url: t, name: a, alternateName: r || "" }, n ? { "@context": "http://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, item: { "@id": t, name: a, image: o } }] } : "", n ? { "@context": "http://schema.org", "@type": "BlogPosting", url: t, name: a, alternateName: r || "", headline: a, image: { "@type": "ImageObject", url: o }, description: l } : ""] }(t))), n.a.createElement("meta", { property: "og:url", content: t }), i ? n.a.createElement("meta", { property: "og:type", content: "article" }) : n.a.createElement("meta", { property: "og:type", content: "website" }), n.a.createElement("meta", { property: "og:title", content: a }), n.a.createElement("meta", { property: "og:description", content: r }), n.a.createElement("meta", { property: "og:image", content: o }), n.a.createElement("meta", { property: "fb:app_id", content: s.a.siteFBAppID ? s.a.siteFBAppID : "" }), n.a.createElement("meta", { name: "twitter:card", content: "summary_large_image" }), n.a.createElement("meta", { name: "twitter:creator", content: s.a.twitter_username ? s.a.twitter_username : "" }), n.a.createElement("meta", { name: "twitter:title", content: a }), n.a.createElement("meta", { name: "twitter:description", content: r }), n.a.createElement("meta", { name: "twitter:image", content: o })) }; c.defaultProps = { title: s.a.title }, t.a = c } }]);
//# sourceMappingURL=component---src-pages-tags-js-f92e373f21d783f5969e.js.map