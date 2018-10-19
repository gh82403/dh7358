! function(e) {

    function o() {
        edgtf.windowWidth = e(window).width(),
		edgtf.windowHeight = e(window).height()
    }
	
    switch (
		window.edgtf = {},
		edgtf.window = e(window),
		edgtf.windowWidth = e(window).width(),
		edgtf.windowHeight = e(window).height(),
		edgtf.body = e("body"),
		edgtf.html = e("html, body"),
		edgtf.htmlEl = e("html"),
		edgtf.transitionEnd = function() {
			var e = document.createElement("transitionDetector"),
				t = {
					WebkitTransition: "webkitTransitionEnd",
					MozTransition: "transitionend",
					transition: "transitionend"
				};
			for (var a in t)
				if (void 0 !== e.style[a]) return t[a]
		}(),
		e(window).resize(o),
		!0
	){}
}(jQuery),




function(e) {
	
    function b() {
        if (edgtf.body.hasClass("edgtf-custom-cursor-enabled") && !edgtf.htmlEl.hasClass("touch")) {
            edgtf.body.append(' <div id="edgtf-cursor-dot-holder"><span id="edgtf-cursor-dot"></span></div>');
            var t = e("#edgtf-cursor-dot-holder"),
                a = e("#edgtf-cursor-dot"),
                o = e(".edgtf-fullscreen-menu-holder-outer, #edgtf-back-to-top, footer, .edgtf-side-menu, .edgtf-main-menu .inner, .edgtf-btn-outline:not(.edgtf-btn-custom-hover-bg), .single_add_to_cart_button, .edgtf-shopping-cart-dropdown, ul.products>.product .edgtf-pl-inner>a, div.edgtf-pli .edgtf-pli-link, .widget.woocommerce .button, .wpcf7-submit, .edgtf-custom-cursor-invert"),
                d = e(".edgtf-pl-gallery-info-follow-cursor article, .edgtf-pl-fullheight-gallery, .edgtf-blog-video-holder, .edgtf-iframe-video-holder, .edgtf-iwt-text-follow-cursor");
            t.css({
                transform: "matrix(1, 0, 0, 1, " + edgtf.windowWidth / 2 + ", " + edgtf.windowHeight / 2 + ")"
            }), e(document).on("mousemove", function(e) {
                a.hasClass("edgtf-block") || t.css({
                    transform: "matrix(1, 0, 0, 1, " + e.clientX + ", " + e.clientY + ")"
                })
            }).on("mouseleave", function() {
                a.hasClass("edgtf-block") || a.addClass("edgtf-fade-cursor")
            }).on("mouseenter", function() {
                a.hasClass("edgtf-block") || a.removeClass("edgtf-fade-cursor")
            }), e("a").on("mouseenter", function() {
                a.hasClass("edgtf-block") || t.addClass("edgtf-hovering")
            }).on("mouseleave", function() {
                a.hasClass("edgtf-block") || t.removeClass("edgtf-hovering")
            }), o.length && o.on("mousemove", function() {
                a.hasClass("edgtf-block") || a.addClass("edgtf-invert")
            }).on("mouseleave", function() {
                a.hasClass("edgtf-block") || a.removeClass("edgtf-invert")
            }), d.length && d.on("mouseenter", function() {
                a.hasClass("edgtf-block") || a.addClass("edgtf-fade-cursor")
            }).on("mouseleave", function() {
                a.hasClass("edgtf-block") || a.removeClass("edgtf-fade-cursor")
            })
        }
    }
	
	
	
    function a() {
        
        b(),
		
		function() {
			if (edgtf.body.hasClass("edgtf-smooth-page-transitions")) {
				if (edgtf.body.hasClass("edgtf-smooth-page-transitions-preloader")) {
					var t = e("body > .edgtf-smooth-transition-loader.edgtf-mimic-ajax"),
						o = e(".edgtf-loading-title-text"),
						d = e("#edgtf-cursor-dot"),
						n = !(!e(".edgtf-custom-cursor-enabled").length || edgtf.htmlEl.hasClass("touch"));
					var s = function(a) {
							o.css("visibility", "visible");
							var d = o.find(".edgtf-char-el"),
								n = o.find(".edgtf-char-dot");
							d.each(function(t) {
								var a = e(this);
								setTimeout(function() {
									a.addClass("edgtf-show")
								}, 150 * t)
							}), d.last().one(edgtf.transitionEnd, function() {
								n.addClass("edgtf-show").one(edgtf.transitionEnd, function() {
									void 0 !== a ? a() : t.fadeOut(500, "easeOutCubic")
								})
							})
						},
						r = function() {
							d.css("visibility", "visible"),
							t.fadeOut(100),
							d.addClass("edgtf-transition-in").removeClass("edgtf-scale-up edgtf-block").on(edgtf.transitionEnd, function() {
								d.removeClass("edgtf-transition-in")
							})
						},
						l = function() {
							/*
							n ? (d.addClass("edgtf-scale-up").css("visibility", "hidden"),
							o.length ? s(r) : a.length ? a.bind("revolution.slide.onloaded", function() {
								r()
							}) : e(window).on("load", function() {
								r()
							})) : o.length ? s() : e(window).on("load", function() {
								t.fadeOut(500, "easeOutCubic")
							})
							*/
							if (n) {
								d.addClass("edgtf-scale-up").css("visibility", "hidden");
								if (o.length) { 
									s(r);
								} else {
									e(window).on("load", function() {r()});
								}
							} else if (o.length) {
								s();
							} else {
								e(window).on("load", function() {t.fadeOut(500, "easeOutCubic")});
							}
						};
					l(), e(window).on("bind", "pageshow", function(t) {
						t.originalEvent.persisted && (l(), n && e("#edgtf-cursor-dot").removeClass("edgtf-fade-cursor edgtf-transition-in edgtf-transition-out edgtf-scale-up edgtf-block"))
					})
				}
				if (edgtf.body.hasClass("edgtf-smooth-page-transitions-fadeout")) {
					var f = e("a"),
						n = !(!e(".edgtf-custom-cursor-enabled").length || edgtf.htmlEl.hasClass("touch"));
					f.on("click", function(t) {
						var a = e(this);
						(a.parents(".edgtf-shopping-cart-dropdown").length || a.parent(".product-remove").length) && a.hasClass("remove") || 1 === t.which && a.attr("href").indexOf(window.location.host) >= 0 && void 0 === a.data("rel") && void 0 === a.attr("rel") && !a.hasClass("lightbox-active") && (void 0 === a.attr("target") || "_self" === a.attr("target")) && a.attr("href").split("#")[0] !== window.location.href.split("#")[0] && (t.preventDefault(), n ? e("#edgtf-cursor-dot").removeClass("edgtf-fade-cursor").addClass("edgtf-transition-out edgtf-scale-up edgtf-block").one(edgtf.transitionEnd, function() {
							window.location = a.attr("href")
						}) : e(".edgtf-wrapper-inner").fadeOut(1e3, function() {
							window.location = a.attr("href")
						}))
					})
				}
			}
		}()
    }

	e(document).ready(a)

}(jQuery);






