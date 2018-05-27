/**
 * Theme: Appzia Admin Template
 * Author: Themesdesign
 * Main Js
 */

/* constants and common elements - for caching */
function resizeitems() {
    if ($.isArray(Menufunction))
        for (i = 0; i < Menufunction.length; i++) window[Menufunction[i]]()
}

function initscrolls() {
    jQuery.browser.mobile !== !0 && ($(".slimscroller").slimscroll({
        height: "auto",
        size: "5px"
    }), $(".slimscrollleft").slimScroll({
        height: "auto",
        position: "right",
        size: "7px",
        color: "#bbb",
        wheelStep: 5
    }))
}

function toggle_slimscroll(e) {
    WebAdmin_VARS.WRAPPER.hasClass("enlarged") ? ($(e).css("overflow", "inherit").parent().css("overflow", "inherit"), $(e).siblings(".slimScrollBar").css("visibility", "hidden")) : ($(e).css("overflow", "hidden").parent().css("overflow", "hidden"), $(e).siblings(".slimScrollBar").css("visibility", "visible"))
}
var WebAdmin_VARS = {
    BODY: $("body"),
    WRAPPER: $("#wrapper"),
    LEFT_ITEMS: $(".left ul")
};
! function(e) {
    "use strict";
    var i = function() {
        this.$body = WebAdmin_VARS.BODY, this.$openLeftBtn = e(".open-left"), this.$menuItem = e("#sidebar-menu a"), this.$subDropItem = e(".subdrop"), this.$leftMenuToggle = e(".open-left"), this.$firstMenuChild = e("#sidebar-menu ul li.has_sub a.active")
    };
    i.prototype.openLeftBar = function() {
        WebAdmin_VARS.WRAPPER.toggleClass("enlarged"), WebAdmin_VARS.WRAPPER.addClass("forced"), WebAdmin_VARS.WRAPPER.hasClass("enlarged") && WebAdmin_VARS.BODY.hasClass("fixed-left") ? WebAdmin_VARS.BODY.removeClass("fixed-left").addClass("fixed-left-void") : !WebAdmin_VARS.WRAPPER.hasClass("enlarged") && WebAdmin_VARS.BODY.hasClass("fixed-left-void") && WebAdmin_VARS.BODY.removeClass("fixed-left-void").addClass("fixed-left"), WebAdmin_VARS.WRAPPER.hasClass("enlarged") ? WebAdmin_VARS.LEFT_ITEMS.removeAttr("style") : this.$subDropItem.siblings("ul:first").show(), toggle_slimscroll(".slimscrollleft"), WebAdmin_VARS.BODY.trigger("resize")
    }, i.prototype.menuItemClick = function(i) {
        WebAdmin_VARS.WRAPPER.hasClass("enlarged") || (e(this).parent().hasClass("has_sub") && i.preventDefault(), e(this).hasClass("subdrop") ? e(this).hasClass("subdrop") && (e(this).removeClass("subdrop"), e(this).next("ul").slideUp(350), e(".pull-right i", e(this).parent()).removeClass("mdi-minus").addClass("mdi-plus")) : (e("ul", e(this).parents("ul:first")).slideUp(350), e("a", e(this).parents("ul:first")).removeClass("subdrop"), e("#sidebar-menu .pull-right i").removeClass("mdi-minus").addClass("mdi-plus"), e(this).next("ul").slideDown(350), e(this).addClass("subdrop"), e(".pull-right i", e(this).parents(".has_sub:last")).removeClass("mdi-plus").addClass("mdi-minus"), e(".pull-right i", e(this).siblings("ul")).removeClass("mdi-minus").addClass("mdi-plus")))
    }, i.prototype.init = function() {
        var i = this;
        i.$leftMenuToggle.on("click", function(e) {
            e.stopPropagation(), i.openLeftBar()
        }), i.$menuItem.on("click", i.menuItemClick), i.$firstMenuChild.parents("li:last").children("a:first").addClass("active").trigger("click"), i.$menuItem.each(function() {
            this.href == window.location.href && (e(this).addClass("active"), e(this).parent().addClass("active"), e(this).parent().parent().prev().addClass("active"), e(this).parent().parent().prev().trigger("click"))
        })
    }, e.Sidemenu = new i, e.Sidemenu.Constructor = i
}(window.jQuery),
function(e) {
    "use strict";
    var i = function() {
        this.$body = WebAdmin_VARS.BODY, this.$fullscreenBtn = e("#btn-fullscreen")
    };
    i.prototype.launchFullscreen = function(e) {
        e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen()
    }, i.prototype.exitFullscreen = function() {
        document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()
    }, i.prototype.toggle_fullscreen = function() {
        var e = this,
            i = document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled;
        i && (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement ? e.exitFullscreen() : e.launchFullscreen(document.documentElement))
    }, i.prototype.init = function() {
        var e = this;
        e.$fullscreenBtn.on("click", function() {
            e.toggle_fullscreen()
        })
    }, e.FullScreen = new i, e.FullScreen.Constructor = i
}(window.jQuery),
function(e) {
    "use strict";
    var i = function() {
        this.VERSION = "1.0.0", this.AUTHOR = "ThemesDesign", this.SUPPORT = "#", this.pageScrollElement = "html, body", this.$body = WebAdmin_VARS.BODY
    };
    i.prototype.initTooltipPlugin = function() {
        e.fn.tooltip && e('[data-toggle="tooltip"]').tooltip()
    }, i.prototype.initPopoverPlugin = function() {
        e.fn.popover && e('[data-toggle="popover"]').popover()
    }, i.prototype.initNiceScrollPlugin = function() {
        e.fn.niceScroll && e(".nicescroll").niceScroll({
            cursorcolor: "#9d9ea5",
            cursorborderradius: "0px"
        })
    }, i.prototype.onDocReady = function() {
        FastClick.attach(document.body), Menufunction.push("initscrolls"), Menufunction.push("changeptype"), e(".animate-number").each(function() {
            e(this).animateNumbers(e(this).attr("data-value"), !0, parseInt(e(this).attr("data-duration")))
        }), e(window).resize(debounce(resizeitems, 100)), WebAdmin_VARS.BODY.trigger("resize");
        var i = new WOW({
            boxClass: "wow",
            animateClass: "animated",
            offset: 50,
            mobile: !1
        });
        i.init()
    }, i.prototype.init = function() {
        var i = this;
        this.initTooltipPlugin(), this.initPopoverPlugin(), this.initNiceScrollPlugin(), e(document).on("ready", i.onDocReady), e.Sidemenu.init(), e.FullScreen.init()
    }, e.WebAdmin = new i, e.WebAdmin.Constructor = i
}(window.jQuery),
function(e) {
    "use strict";
    e.WebAdmin.init()
}(window.jQuery);
var w, h, dw, dh, changeptype = function() {
        w = $(window).width(), h = $(window).height(), dw = $(document).width(), dh = $(document).height(), jQuery.browser.mobile === !0 && WebAdmin_VARS.BODY.addClass("mobile").removeClass("fixed-left"), WebAdmin_VARS.WRAPPER.hasClass("forced") || (w > 1024 ? (WebAdmin_VARS.BODY.removeClass("smallscreen").addClass("widescreen"), WebAdmin_VARS.WRAPPER.removeClass("enlarged")) : (WebAdmin_VARS.BODY.removeClass("widescreen").addClass("smallscreen"), WebAdmin_VARS.WRAPPER.addClass("enlarged"), WebAdmin_VARS.LEFT_ITEMS.removeAttr("style")), WebAdmin_VARS.WRAPPER.hasClass("enlarged") && WebAdmin_VARS.BODY.hasClass("fixed-left") ? WebAdmin_VARS.BODY.removeClass("fixed-left").addClass("fixed-left-void") : !WebAdmin_VARS.WRAPPER.hasClass("enlarged") && WebAdmin_VARS.BODY.hasClass("fixed-left-void") && WebAdmin_VARS.BODY.removeClass("fixed-left-void").addClass("fixed-left")), toggle_slimscroll(".slimscrollleft")
    },
    debounce = function(e, i, s) {
        var t, n;
        return function() {
            var l = this,
                o = arguments,
                r = function() {
                    t = null, s || (n = e.apply(l, o))
                },
                a = s && !t;
            return clearTimeout(t), t = setTimeout(r, i), a && (n = e.apply(l, o)), n
        }
    },
    Menufunction = [];