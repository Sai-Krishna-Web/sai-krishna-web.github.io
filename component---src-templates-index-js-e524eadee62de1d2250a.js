(window.webpackJsonp = window.webpackJsonp || []).push([[13], { "+rFB": function (e, t, a) { }, "/d1K": function (e, t, a) { "use strict"; a("91GP"); var r = a("Rwg6"), n = a("q1tI"), o = a.n(n), l = a("Wbzz"), s = a("IP2g"), c = a("KSab"), i = a("Y7J9"), u = (a("sfvA"), c.config.friends), m = void 0 === u ? [] : u, f = function () { return o.a.createElement("div", { className: "friend" }, o.a.createElement("p", null, "Links"), m.map((function (e) { return o.a.createElement(i.a, { href: e.href, title: e.title, key: e.title, rel: "noopener" }) }))) }, d = (a("qfuT"), function (e) { var t = e.posts; return o.a.createElement("div", { className: "latest-post" }, o.a.createElement("p", null, "Latest Articles"), t.map((function (e) { var t = e.node; return o.a.createElement(l.Link, { to: t.frontmatter.url || t.frontmatter.slug || t.fields.slug, key: t.frontmatter.url || t.frontmatter.slug || t.fields.slug, href: t.frontmatter.url || t.frontmatter.slug || t.fields.slug }, t.frontmatter.title) }))) }), g = (a("usu3"), function (e) { var t = e.totalCount, a = e.posts; return o.a.createElement("div", { className: "d-none d-lg-block information my-2" }, o.a.createElement("hr", null), o.a.createElement("p", null, "Total ", t, " Article"), o.a.createElement("hr", null), o.a.createElement(d, { posts: a }), o.a.createElement("hr", null), o.a.createElement(f, null)) }); g.defaultProps = { posts: [] }; var h = g, p = (a("YX5f"), c.config.wordings), E = void 0 === p ? [] : p, v = c.config.githubUsername, w = c.config.twitterUsername, b = c.config.linkedinUsername, y = c.config.email, k = c.config.iconUrl, N = c.config.about, x = c.config.facebook, S = function (e) { var t = e.href, a = e.icon; return o.a.createElement("a", { target: "_blank", href: t, rel: "external nofollow noopener noreferrer", className: "custom-icon" }, o.a.createElement("span", { className: "fa-layers fa-fw fa-2x" }, o.a.createElement(s.a, { icon: a }))) }, C = function (e) { var t = e.totalCount, a = e.latestPosts; return o.a.createElement("header", { className: "intro-header neomorphic-shadows neomorphic-shadows-hover site-heading text-center col-xl-3 col-lg-3 col-xs-12 order-lg-1 display-none" }, o.a.createElement("div", { className: "about-me" }, o.a.createElement(l.Link, { to: N, href: N, className: "name" }, o.a.createElement("img", { className: "avatar neomorphic-shadows", src: k, alt: "HeisenBerg" }), o.a.createElement("h4", null, "Sai Krishna")), o.a.createElement("p", { className: "mb-1" }, E[1]), o.a.createElement("p", { className: "mb-3 wordings" }, E[0]), o.a.createElement(S, { href: "https://github.com/" + v, icon: ["fab", "github"] }), o.a.createElement(S, { href: "https://www.linkedin.com/in/" + b, icon: ["fab", "linkedin"] }), o.a.createElement(S, { href: "https://twitter.com/" + w, icon: ["fab", "twitter"] }), o.a.createElement(S, { href: "mailto:" + y, icon: ["far", "envelope"] }), x && o.a.createElement(S, { href: "https://www.facebook.com/" + x + "/", icon: ["fab", "facebook"] }), o.a.createElement(h, { totalCount: t, posts: a }))) }; C.defaultProps = { totalCount: 0, latestPosts: [] }; t.a = function () { return o.a.createElement(l.StaticQuery, { query: "1307080370", render: function (e) { return o.a.createElement(C, Object.assign({}, e.all, e.limited)) }, data: r }) } }, "9UDz": function (e, t, a) { }, Jz1z: function (e, t, a) { "use strict"; a("f3/d"); var r = a("q1tI"), n = a.n(r), o = a("Wbzz"), l = function (e) { var t = e.name, a = e.count; return n.a.createElement(o.Link, { to: "/tag/" + t, href: "/tag/" + t, className: "header-tag2 neomorphic-shadows neomorphic-shadows-hover" }, t, " ", a) }; l.defaultProps = { count: "" }, t.a = l }, Nlzp: function (e, t, a) { "use strict"; a.d(t, "a", (function () { return l })), a.d(t, "b", (function () { return s })); a("bHtr"), a("SRfc"); var r = a("Wgwc"), n = a.n(r), o = a("KSab"), l = (o.config.maxPostsInPage, function () { return "undefined" != typeof window }), s = function (e) { return n()(e).format("MMM DD, YYYY") } }, Rwg6: function (e) { e.exports = JSON.parse('{"data":{"all":{"totalCount":6},"limited":{"latestPosts":[{"node":{"fields":{"slug":"/2020/03/20/ES6_Array_duplicate"},"frontmatter":{"id":"array","title":"Remove Array Duplicates","url":"/2020/03/20/ES6_Array_duplicate","date":"2020-03-20T03:48:03.125Z","tags":["ES6","JavaScript"],"description":"Remove Array Duplicates using ES6 Set. Convert it back to an array using Array.from","headerImage":"https://i.imgur.com/szJzw2w.jpg"}}},{"node":{"fields":{"slug":"/2020/03/04/Clone_an_Array_using_ES6"},"frontmatter":{"id":"array","title":"Clone an Array using ES6","url":"/2020/03/04/Clone_an_Array_using_ES6","date":"2020-03-04T03:48:03.125Z","tags":["ES6","JavaScript"],"description":"When we need to copy an array, we often times used slice. But with ES6, you can also use the spread operator to duplicate an array.","headerImage":"https://imgur.com/RATPg6c.jpg"}}},{"node":{"fields":{"slug":"/2020/03/20/Split_usin_ES6"},"frontmatter":{"id":"array","title":"Using ES6 Spread to split","url":"/2020/03/20/Split_usin_ES6","date":"2020-02-15T03:48:03.125Z","tags":["ES6","JavaScript"],"description":"Convert a string to an array of characters using the spread syntax!","headerImage":"https://imgur.com/RATPg6c.jpg"}}},{"node":{"fields":{"slug":"/2020/01/16/TypesOf_Cloning"},"frontmatter":{"id":"http://jsnutshell.tech/","title":"Types of array cloning","url":"/2020/01/16/TypesOf_Cloning","date":"2020-01-16T03:48:03.125Z","tags":["JS","Array"],"description":"There are 2 types of array cloning, shallow & deep. Shallow copies only cover the 1st level of the array and the rest are referenced.","headerImage":null}}},{"node":{"fields":{"slug":"/2019/12/18/Cheatsheet_for_Arrow_Functions/"},"frontmatter":{"id":"c192eaba9fefc632acf87ed636593475","title":"Cheatsheet for Arrow Functions","url":"/2019/12/18/Cheatsheet_for_Arrow_Functions/","date":"2019-12-18T03:48:03.125Z","tags":["ES6"],"description":"Cheatsheet to show you the ways to write and work around arrow functions.","headerImage":"https://i.imgur.com/szJzw2w.jpg"}}},{"node":{"fields":{"slug":"/guestbook/"},"frontmatter":{"id":"https://www.saikrishna.tech/guestbook/","title":"GuestBook","url":"/guestbook/","date":"2019-11-06T03:48:03.125Z","tags":["Read"],"description":"","headerImage":null}}}]}}}') }, TRom: function (e, t, a) { "use strict"; a.r(t); a("91GP"); var r = a("q1tI"), n = a.n(r), o = a("+ZDr"), l = a.n(o), s = a("ZO1O"), c = a("/d1K"), i = a("U2Z3"), u = (a("VYsE"), function (e) { var t = e.color, a = e.text, r = e.className, o = e.backgroundColor; return n.a.createElement("div", { className: "navlink " + r, style: { color: t, backgroundColor: o } }, a) }), m = function (e) { var t = e.test, a = e.url, r = e.text; return t ? n.a.createElement(l.a, { to: "" + a }, n.a.createElement(u, { color: "#66ccff", text: r })) : n.a.createElement(u, { color: "#7d7d7d", backgroundColor: "#f4f4f4", text: r, className: "neomorphic-shadows neomorphic-shadows-hover" }) }; t.default = function (e) { var t = e.pageContext, a = e.location, r = t.group, o = t.index, l = t.first, u = t.last, f = t.pathPrefix, d = o - 1 == 1 ? "" : "/" + f + "/" + (o - 1), g = "/" + f + "/" + (o + 1); return n.a.createElement(n.a.Fragment, null, n.a.createElement("div", { className: "row homepage", style: { marginTop: 20 } }, n.a.createElement(c.a, null), n.a.createElement("div", { className: "col-xl-6 col-lg-7 col-md-12 col-xs-12 order-2" }, r.map((function (e) { var t = e.node; return n.a.createElement(s.a, Object.assign({}, t.frontmatter, { url: t.frontmatter.slug ? t.frontmatter.slug : t.fields.slug, key: t.fields.slug })) })), n.a.createElement("div", { className: "row", style: { justifyContent: "space-around", marginBottom: "20px" } }, n.a.createElement("div", { className: "previousLink" }, n.a.createElement(m, { test: !l, url: d, text: "Previous" })), n.a.createElement("div", { className: "nextLink" }, n.a.createElement(m, { test: !u, url: g, text: "Next" })))), n.a.createElement("div", { className: "col-xl-2 col-lg-1 order-3" })), n.a.createElement(i.a, { url: a.href, hasCommentBox: !1 })) } }, U2Z3: function (e, t, a) { "use strict"; var r = a("q1tI"), n = a.n(r), o = a("0b+E"), l = a("IP2g"), s = (a("+rFB"), function (e) { e.url, e.hasCommentBox; return n.a.createElement("div", { className: "m-share-box" }, n.a.createElement("a", { className: "share-button neomorphic-shadows neomorphic-shadows-hover", href: "#header", onClick: function () { o.a.event({ category: "User", action: "Scroll to Top" }) }, style: { lineHeight: "1.7rem", paddingLeft: "0.1rem" } }, n.a.createElement(l.a, { icon: ["fas", "chevron-up"] }))) }); s.defaultProps = { hasCommentBox: !0 }, t.a = s }, VYsE: function (e, t, a) { }, Y7J9: function (e, t, a) { "use strict"; var r = a("q1tI"), n = a.n(r), o = function (e) { var t = e.href, a = e.title, r = e.target, o = e.className, l = e.rel; return n.a.createElement("a", { href: t, rel: l, target: r, className: o }, a) }; o.defaultProps = { target: "_blank", className: "", rel: "external nofollow noopener" }, t.a = o }, YX5f: function (e, t, a) { }, ZO1O: function (e, t, a) { "use strict"; var r = a("q1tI"), n = a.n(r), o = a("Wbzz"), l = a("Jz1z"), s = a("f/UQ"), c = a("Nlzp"), i = (a("9UDz"), function (e) { e.url; var t, a, r = e.image, o = e.backgroundColor, c = e.tags; return n.a.createElement("div", { className: "wrapper tag-wrap", style: (t = r, a = o, { backgroundColor: "#" + a, backgroundImage: " url(" + Object(s.parseImgur)(t, "large") + ")" }) }, c.map((function (e) { return n.a.createElement(l.a, { name: e, key: e }) }))) }), u = function (e) { var t = e.title, a = e.date, r = e.url, l = e.headerImage, s = e.headerBackgroundColor, u = e.description, m = e.tags, f = void 0 === m ? [] : m; return n.a.createElement("div", { className: "col-sm-12 pb-4 link" }, n.a.createElement("div", { className: "custom-card neomorphic-shadows neomorphic-shadows-hover" }, l && n.a.createElement(i, { url: r, image: l, backgroundColor: s, tags: f }), n.a.createElement("div", { className: "data" }, n.a.createElement("div", { className: "content" }, n.a.createElement(o.Link, { to: r, href: r }, n.a.createElement("h4", { className: "title" }, t)), n.a.createElement("p", null, u), n.a.createElement(o.Link, { to: r, href: r }, "... continue reading"), n.a.createElement("div", { className: "stats" }, n.a.createElement("span", { className: "date" }, Object(c.b)(a))))))) }; u.defaultProps = { headerImage: "", tags: [], date: "", headerBackgroundColor: "", title: "" }, t.a = u }, "f/UQ": function (e, t, a) { a("pIFo"), a("SRfc"); var r = function (e, t) { if (void 0 === t && (t = "large"), !e) return "https://i.imgur.com/M795H8A.jpg"; if (e.match("(png)|(gif)")) return e.match("http") ? e : "https://i.imgur.com/" + e; var a = e.replace(/(.*)\.(.*)/, "$1" + { "small-square": "s", "big-square": "b", small: "t", medium: "m", large: "l", huge: "h" }[t] + ".$2"); return a.match("http") ? a : "https://i.imgur.com/" + a }, n = function (e) { var t = e.href, a = e.title, n = e.text; return '<img class="lozad d-block mx-auto" data-src=' + r(t, "large") + " " + function (e, t) { return 'title="' + (e || t) + '"' }(a, n) + " />" }; e.exports = { parseImgur: r, parseImageTag: n, getGalleryImage: function (e) { var t = e.href, a = e.title, o = e.text; return '<a data-fancybox="gallery" href="' + r(t, "huge") + '">' + n({ href: t, title: a, text: o }) + "</a>" } } }, qfuT: function (e, t, a) { }, sfvA: function (e, t, a) { }, usu3: function (e, t, a) { } }]);
//# sourceMappingURL=component---src-templates-index-js-e524eadee62de1d2250a.js.map