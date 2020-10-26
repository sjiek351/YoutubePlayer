(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player/player.component */ "./src/app/player/player.component.ts");






const routes = [
    { path: "Search", component: _search_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"] },
    { path: "Player", component: _player_player_component__WEBPACK_IMPORTED_MODULE_3__["PlayerComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_youtube_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/youtube.service */ "./src/app/service/youtube.service.ts");
/* harmony import */ var _service_channel_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/channel.service */ "./src/app/service/channel.service.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








class AppComponent {
    constructor(router, youTubeService, channelService) {
        this.router = router;
        this.youTubeService = youTubeService;
        this.channelService = channelService;
        this.title = 'GoogleYoutubeDataApi';
        this.faArrowRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faArrowRight"];
        this.faPlayCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlayCircle"];
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSearch"];
        this.faCompactDisc = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCompactDisc"];
        this.asideDeg = 0;
    }
    ngOnInit() {
    }
    search() {
        this.searchLoading = true;
        const doc = document.getElementById('query');
        const query = doc.value;
        this.youTubeService.getVideosForChannel(query).subscribe(result => {
            console.log(result);
            this.channelService.setChannel(result.items);
            if (result.prevPageToken) {
                this.channelService.setPrevPageToken(result.prevPageToken);
            }
            else {
                this.channelService.setPrevPageToken(null);
            }
            this.channelService.setNextPageToken(result.nextPageToken);
            this.searchLoading = false;
            this.router.navigate(['Search']);
            this.closeNavbar();
        });
    }
    goPlayer() {
        this.router.navigate(['Player']);
        this.closeNavbar();
    }
    toggleNavbar() {
        this.navbarShow = !this.navbarShow;
    }
    toggleAside() {
        this.asideShow = !this.asideShow;
        this.toggleAsideDeg();
    }
    toggleAsideDeg() {
        if (this.asideShow) {
            this.asideDeg = 180;
        }
        else {
            this.asideDeg = 0;
        }
    }
    closeNavbar() {
        this.navbarShow = false;
        this.asideShow = false;
        this.toggleAsideDeg();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_youtube_service__WEBPACK_IMPORTED_MODULE_3__["YoutubeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_channel_service__WEBPACK_IMPORTED_MODULE_4__["ChannelService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 29, vars: 31, consts: [["id", "main"], [1, "container-fluid"], ["id", "nav", 1, "row"], [1, "col-2", "col-sm-1", "text-center", "flexMiddle"], [1, "smShow", "flexMiddle"], [1, "hamburger-menu", 3, "click"], [1, "icon-bar"], [1, "smHide", "flexMiddle"], [1, "tran", "flexMiddle", 3, "icon", "fixedWidth", "click"], [1, "col-10", "col-sm-11", "text-center", "flexMiddle"], ["id", "searchBox"], ["type", "text", "placeholder", "\u641C\u5C0B YouTube", "id", "query", 1, "form-control"], ["id", "searchIcon", 1, "flexMiddle"], [3, "icon", "click"], [1, "spinner-border", "spinner-border-sm", "mainColor"], ["id", "searchButton", "type", "submit", 1, "btn", "btn-light", "marginLeft", 3, "click"], ["id", "navbar", 1, "col-12", "smShow"], [1, "row"], [1, "col-1", "text-center", "smHide"], ["id", "content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_5_listener() { return ctx.toggleNavbar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "fa-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_fa_icon_click_10_listener() { return ctx.toggleAside(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "fa-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_fa_icon_click_15_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_17_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u641C\u5C0B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "fa-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_fa_icon_click_23_listener() { return ctx.goPlayer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "aside", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "fa-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_fa_icon_click_26_listener() { return ctx.goPlayer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hamburgerTop", ctx.navbarShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hamburgerMid", ctx.navbarShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hamburgerBottom", ctx.navbarShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("rotated", ctx.asideShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faArrowRight)("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", ctx.searchLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", !ctx.searchLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", ctx.searchLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", !ctx.searchLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", !ctx.navbarShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faCompactDisc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("visiHide", !ctx.asideShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faCompactDisc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("offset-1", ctx.asideShow)("col-11", ctx.asideShow)("col", !ctx.asideShow);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["fa-icon[_ngcontent-%COMP%]:hover {\r\n    color: darkorange !important;\r\n    cursor: pointer;\r\n}\r\n\r\n#main[_ngcontent-%COMP%] {\r\n    background-color: #f9f9f9;\r\n    min-height: 100vh;\r\n}\r\n\r\n#nav[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin: auto 0;\r\n    padding: 10px 0;\r\n    z-index: 2;\r\n    box-shadow: 0 0 5px black;\r\n}\r\n\r\n#nav[_ngcontent-%COMP%], aside[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: #424242;\r\n    color: #fff;\r\n}\r\n\r\n.hamburger-menu[_ngcontent-%COMP%] {\r\n    background: none;\r\n    border: none;\r\n    display: inline-block;\r\n}\r\n\r\n.hamburger-menu[_ngcontent-%COMP%]   .icon-bar[_ngcontent-%COMP%] {\r\n    background-color: #fff;\r\n    display: block;\r\n    height: 4px;\r\n    margin: 0 auto 4px;\r\n    width: 30px;\r\n    transition: 1s;\r\n}\r\n\r\n.hamburger-menu[_ngcontent-%COMP%]:hover   .icon-bar[_ngcontent-%COMP%] {\r\n    background-color: darkorange;\r\n}\r\n\r\n.hamburger-menu[_ngcontent-%COMP%]:focus {\r\n    outline: none;\r\n}\r\n\r\n.hamburgerTop[_ngcontent-%COMP%] {\r\n    transition: 1s;\r\n    transform: rotate(45deg) translateY(200%) translateX(10%);\r\n}\r\n\r\n.hamburgerMid[_ngcontent-%COMP%] {\r\n    transition: 1s;\r\n    opacity: 0;\r\n}\r\n\r\n.hamburgerBottom[_ngcontent-%COMP%] {\r\n    transition: 1s;\r\n    transform: rotate(-45deg) translateY(-200%) translateX(10%);\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%] {\r\n    display: initial;\r\n    padding-right: 0;\r\n}\r\n\r\n#searchBox[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\n#searchBox[_ngcontent-%COMP%]   #searchIcon[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: 10px;\r\n    color: black;\r\n    font-size: large\r\n}\r\n\r\n.marginLeft[_ngcontent-%COMP%] {\r\n    margin-left: 10px;\r\n}\r\n\r\n#searchButton[_ngcontent-%COMP%] {\r\n    display: none;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n    vertical-align: initial;\r\n}\r\n\r\n#navbar[_ngcontent-%COMP%] > fa-icon[_ngcontent-%COMP%] {\r\n    font-size: xx-large;\r\n}\r\n\r\n#content[_ngcontent-%COMP%] {\r\n    margin-top: calc(60px - 2px);\r\n}\r\n\r\n@media (max-width:576px) {\r\n    #content[_ngcontent-%COMP%] {\r\n        margin-left: initial;\r\n        flex: initial;\r\n        max-width: initial;\r\n    }\r\n}\r\n\r\n@media (min-width:576px) {\r\n    .form-control[_ngcontent-%COMP%] {\r\n        width: initial;\r\n    }\r\n    #searchButton[_ngcontent-%COMP%] {\r\n        display: inline;\r\n    }\r\n    #searchIcon[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n    aside[_ngcontent-%COMP%] {\r\n        height: calc(100% - 60px);\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: flex-end;\r\n        z-index: 1;\r\n        transition: 1.5s;\r\n        padding-bottom: 50px;\r\n    }\r\n    aside[_ngcontent-%COMP%], #content[_ngcontent-%COMP%] {\r\n        margin-top: calc(60px - 2px);\r\n    }\r\n    aside[_ngcontent-%COMP%] > fa-icon[_ngcontent-%COMP%] {\r\n        padding-top: 15px;\r\n    }\r\n    .visiHide[_ngcontent-%COMP%] {\r\n        left: -100px;\r\n        visibility: hidden;\r\n        transition: 1.5s;\r\n    }\r\n    fa-icon[_ngcontent-%COMP%] {\r\n        font-size: 2rem;\r\n        cursor: pointer;\r\n    }\r\n    .rotated[_ngcontent-%COMP%] {\r\n        transform: rotate(180deg);\r\n        transition: 1.5s;\r\n    }\r\n    .tran[_ngcontent-%COMP%] {\r\n        display: inline-block;\r\n        transition: 1.5s;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0QkFBNEI7SUFDNUIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGVBQWU7SUFDZixVQUFVO0lBQ1YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5REFBeUQ7QUFDN0Q7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksY0FBYztJQUNkLDJEQUEyRDtBQUMvRDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaO0FBQ0o7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0k7UUFDSSxvQkFBb0I7UUFDcEIsYUFBYTtRQUNiLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSx5QkFBeUI7UUFDekIsYUFBYTtRQUNiLHNCQUFzQjtRQUN0Qix5QkFBeUI7UUFDekIsVUFBVTtRQUNWLGdCQUFnQjtRQUNoQixvQkFBb0I7SUFDeEI7SUFDQTtRQUNJLDRCQUE0QjtJQUNoQztJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGVBQWU7SUFDbkI7SUFDQTtRQUNJLHlCQUF5QjtRQUN6QixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLHFCQUFxQjtRQUNyQixnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZmEtaWNvbjpob3ZlciB7XHJcbiAgICBjb2xvcjogZGFya29yYW5nZSAhaW1wb3J0YW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jbWFpbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbn1cclxuXHJcbiNuYXYge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG8gMDtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IGJsYWNrO1xyXG59XHJcblxyXG4jbmF2LCBhc2lkZSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0MjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uaGFtYnVyZ2VyLW1lbnUge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmhhbWJ1cmdlci1tZW51IC5pY29uLWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIG1hcmdpbjogMCBhdXRvIDRweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMXM7XHJcbn1cclxuXHJcbi5oYW1idXJnZXItbWVudTpob3ZlciAuaWNvbi1iYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya29yYW5nZTtcclxufVxyXG5cclxuLmhhbWJ1cmdlci1tZW51OmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5oYW1idXJnZXJUb3Age1xyXG4gICAgdHJhbnNpdGlvbjogMXM7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlWSgyMDAlKSB0cmFuc2xhdGVYKDEwJSk7XHJcbn1cclxuXHJcbi5oYW1idXJnZXJNaWQge1xyXG4gICAgdHJhbnNpdGlvbjogMXM7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uaGFtYnVyZ2VyQm90dG9tIHtcclxuICAgIHRyYW5zaXRpb246IDFzO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGVZKC0yMDAlKSB0cmFuc2xhdGVYKDEwJSk7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gICAgZGlzcGxheTogaW5pdGlhbDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbn1cclxuXHJcbiNzZWFyY2hCb3gge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jc2VhcmNoQm94ICNzZWFyY2hJY29uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZVxyXG59XHJcblxyXG4ubWFyZ2luTGVmdCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuI3NlYXJjaEJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBpbml0aWFsO1xyXG59XHJcblxyXG4jbmF2YmFyPmZhLWljb24ge1xyXG4gICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxufVxyXG5cclxuI2NvbnRlbnQge1xyXG4gICAgbWFyZ2luLXRvcDogY2FsYyg2MHB4IC0gMnB4KTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NTc2cHgpIHtcclxuICAgICNjb250ZW50IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogaW5pdGlhbDtcclxuICAgICAgICBmbGV4OiBpbml0aWFsO1xyXG4gICAgICAgIG1heC13aWR0aDogaW5pdGlhbDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6NTc2cHgpIHtcclxuICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgIHdpZHRoOiBpbml0aWFsO1xyXG4gICAgfVxyXG4gICAgI3NlYXJjaEJ1dHRvbiB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgfVxyXG4gICAgI3NlYXJjaEljb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBhc2lkZSB7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2MHB4KTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDEuNXM7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbiAgICB9XHJcbiAgICBhc2lkZSwgI2NvbnRlbnQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IGNhbGMoNjBweCAtIDJweCk7XHJcbiAgICB9XHJcbiAgICBhc2lkZT5mYS1pY29uIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIH1cclxuICAgIC52aXNpSGlkZSB7XHJcbiAgICAgICAgbGVmdDogLTEwMHB4O1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICB0cmFuc2l0aW9uOiAxLjVzO1xyXG4gICAgfVxyXG4gICAgZmEtaWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIC5yb3RhdGVkIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDEuNXM7XHJcbiAgICB9XHJcbiAgICAudHJhbiB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDEuNXM7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: [
                    './app.component.css'
                ]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _service_youtube_service__WEBPACK_IMPORTED_MODULE_3__["YoutubeService"] }, { type: _service_channel_service__WEBPACK_IMPORTED_MODULE_4__["ChannelService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./player/player.component */ "./src/app/player/player.component.ts");
/* harmony import */ var _safe_html_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./safe-html.pipe */ "./src/app/safe-html.pipe.ts");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPaginationModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbAlertModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"],
        _safe_html_pipe__WEBPACK_IMPORTED_MODULE_10__["SafeHtmlPipe"],
        _player_player_component__WEBPACK_IMPORTED_MODULE_9__["PlayerComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPaginationModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbAlertModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"]], exports: [_safe_html_pipe__WEBPACK_IMPORTED_MODULE_10__["SafeHtmlPipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                    _search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"],
                    _safe_html_pipe__WEBPACK_IMPORTED_MODULE_10__["SafeHtmlPipe"],
                    _player_player_component__WEBPACK_IMPORTED_MODULE_9__["PlayerComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbPaginationModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbAlertModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"]
                ],
                exports: [_safe_html_pipe__WEBPACK_IMPORTED_MODULE_10__["SafeHtmlPipe"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/player/player.component.ts":
/*!********************************************!*\
  !*** ./src/app/player/player.component.ts ***!
  \********************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lazysizes_plugins_attrchange_ls_attrchange__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lazysizes/plugins/attrchange/ls.attrchange */ "./node_modules/lazysizes/plugins/attrchange/ls.attrchange.js");
/* harmony import */ var lazysizes_plugins_attrchange_ls_attrchange__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lazysizes_plugins_attrchange_ls_attrchange__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");









function PlayerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "article", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u8F09\u5165\u4E2D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlayerComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerComponent_div_25_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const i_r6 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.togglePlayrow(i_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "fa-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerComponent_div_25_Template_fa_icon_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const i_r6 = ctx.index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.deletePlay(i_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "article", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const play_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r6 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("light", ctx_r1.titleLight[i_r6]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", play_r5.snippet.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](play_r5.snippet.channelTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r1.faTrashAlt);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", !ctx_r1.titleLight[i_r6]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-src", play_r5.snippet.thumbnails.medium.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](play_r5.snippet.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](play_r5.snippet.channelTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 13, play_r5.snippet.publishedAt, "yyyy\u5E74MM\u6708dd\u65E5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](play_r5.snippet.description);
} }
function PlayerComponent_fa_icon_50_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fa-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerComponent_fa_icon_50_Template_fa_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.mute(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", ctx_r2.muted);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r2.faVolumeUp);
} }
function PlayerComponent_fa_icon_51_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fa-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerComponent_fa_icon_51_Template_fa_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.mute(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", ctx_r3.muted);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r3.faVolumeDown);
} }
function PlayerComponent_fa_icon_52_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fa-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerComponent_fa_icon_52_Template_fa_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.mute(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", ctx_r4.muted);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r4.faVolumeOff);
} }
class PlayerComponent {
    constructor() {
        this.faRedo = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faRedo"];
        this.faRandom = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faRandom"];
        this.faTrashAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTrashAlt"];
        this.faPlay = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlay"];
        this.faVolumeUp = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faVolumeUp"];
        this.faVolumeDown = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faVolumeDown"];
        this.faVolumeOff = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faVolumeOff"];
        this.faVolumeMute = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faVolumeMute"];
        this.faStop = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faStop"];
        this.faForward = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faForward"];
        this.faBackward = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBackward"];
        this.faChevronUp = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faChevronUp"];
        this.loopPlaylists = false;
        this.shufflePlaylist = false;
        this.muted = false;
        this.sound = 50;
        this.soundState = "down";
        this.speedState = 1;
        this.footerShow = false;
    }
    ngOnDestroy() {
        window['YT'] = null;
        const tag = document.getElementById("www-widgetapi-script");
        if (tag) {
            tag.remove();
        }
        if (this.iframeApiTag) {
            this.iframeApiTag.remove();
        }
    }
    ngOnInit() {
        if (JSON.parse(localStorage.getItem("playList"))) {
            this.pasteId();
            this.callYouTubeIframeAPI();
        }
    }
    pasteId() {
        this.playIdList = new Array();
        this.playList = JSON.parse(localStorage.getItem("playList"));
        for (let i = 0; i < this.playList.length; i++) {
            this.playIdList.push(this.playList[i].id.videoId);
        }
        this.titleLight = new Array(this.playList.length);
    }
    callYouTubeIframeAPI() {
        this.iframeApiTag = document.createElement('script');
        this.iframeApiTag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(this.iframeApiTag, firstScriptTag);
        window['onYouTubeIframeAPIReady'] = () => this.onYouTubeIframeAPIReady();
    }
    onYouTubeIframeAPIReady() {
        this.player = new window['YT'].Player('player', {
            videoId: this.playIdList[0],
            playerVars: {
                'controls': 0,
                'enablejsapi': 1,
                'fs': 1,
                'playlist': this.playIdList.slice(1, this.playIdList.length).join(","),
                // 'loop': 1,
                'modestbranding': 1,
                'playsinline': 1,
                'rel': 0,
                'showinfo': 0
            },
            events: {
                'onReady': this.onPlayerReady.bind(this),
                'onStateChange': this.onPlayerStateChange.bind(this),
                'onError': this.onPlayerError.bind(this)
            }
        });
    }
    onPlayerReady(event) {
        event.target.playVideo();
        this.sound = this.player.getVolume();
        this.checkSoundState(this.sound);
    }
    onPlayerStateChange(event) {
        this.playerSatus = event.data;
        switch (this.playerSatus) {
            case 1:
                jquery__WEBPACK_IMPORTED_MODULE_4__('#playVideo').hide();
                jquery__WEBPACK_IMPORTED_MODULE_4__('#stopVideo').show();
                break;
            case -1:
            case 2:
                jquery__WEBPACK_IMPORTED_MODULE_4__('#stopVideo').hide();
                jquery__WEBPACK_IMPORTED_MODULE_4__('#playVideo').show();
                break;
            default:
                break;
        }
    }
    onPlayerError(event) {
        console.log(event.data);
    }
    setLoop(loopPlaylists) {
        this.player.setLoop(loopPlaylists);
        this.loopPlaylists = loopPlaylists;
    }
    setShuffle(shufflePlaylist) {
        this.player.setShuffle(shufflePlaylist);
        this.shufflePlaylist = shufflePlaylist;
    }
    playVideo() {
        this.player.playVideo();
    }
    stopVideo() {
        this.player.pauseVideo();
    }
    nextVideo() {
        this.player.nextVideo();
    }
    prevVideo() {
        this.player.previousVideo();
    }
    // playVideoAt(index: Number): void {
    //   this.player.playVideoAt(index);
    // }
    setVolume() {
        this.checkSoundState(this.sound);
        this.player.setVolume(this.sound);
    }
    checkSoundState(sound) {
        this.soundState = (this.sound > 60) ? "up" : ((this.sound > 30) ? "down" : "off");
    }
    setSpeed(speed) {
        this.player.setPlaybackRate(speed);
        this.speedState = speed;
    }
    togglePlayrow(index) {
        this.titleLight[index] = !this.titleLight[index];
    }
    mute() {
        this.player.mute();
        this.muted = true;
    }
    unMute() {
        this.player.unMute();
        this.muted = false;
    }
    deletePlay(i) {
        localStorage.clear();
        this.playList.splice(i, 1);
        localStorage.setItem("playList", JSON.stringify(this.playList));
        this.pasteId();
        this.player.loadPlaylist({
            'playlist': this.playIdList.join(","),
            'suggestedQuality': 'large'
        });
    }
    toggleFooter() {
        this.footerShow = !this.footerShow;
    }
}
PlayerComponent.ɵfac = function PlayerComponent_Factory(t) { return new (t || PlayerComponent)(); };
PlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayerComponent, selectors: [["app-player"]], decls: 73, vars: 43, consts: [["id", "playlist"], [4, "ngIf"], [1, "py-2", "text-center"], [1, "container-fluid", "my-3"], [1, "row"], [1, "col", "offset-sm-6", "col-sm-3", "offset-lg-8", "col-lg-2", "flexMiddle"], [1, "px-1", 3, "icon"], [1, "toggleBox", 3, "click"], [1, "toggleItem"], [1, "col", "col-sm-3", "col-lg-2", "flexMiddle"], [1, "container-fluid", "smHide"], [1, "col-1", "text-center"], [1, "col-6"], [1, "col-3"], [1, "col-2"], ["class", "container-fluid", 4, "ngFor", "ngForOf"], ["id", "playlistBottom"], ["id", "playbar"], [1, "container-fluid"], ["id", "playArea", 1, "col-sm-6", "col-md-4", "playbarItem"], ["id", "playIconGroup"], ["id", "playVideo", 1, "playIcon", "flexMiddle", "flexCol", "px-3", 3, "click"], [3, "icon"], ["id", "stopVideo", 1, "playIcon", "flexMiddle", "flexCol", "px-3", 3, "click"], [1, "playIcon", "flexMiddle", "flexCol", "px-3", 3, "click"], ["id", "soundArea", 1, "col-sm-6", "col-md-3", "playbarItem"], [1, "flexMiddle"], ["class", "icon flexMiddle", 3, "icon", "hide", "click", 4, "ngIf"], [1, "icon", "flexMiddle", 3, "icon", "click"], ["id", "range", "type", "range", "min", "0", "max", "100", "step", "1", "name", "sound", 3, "ngModel", "ngModelChange", "change"], ["id", "speedArea", 1, "col-md-5", "playbarItem", "container-fluid"], ["id", "speedbar", 1, "row", "flexMiddle"], ["id", "speedText", 1, "flexMiddle"], ["id", "speedNumber", 1, "playbarItem"], [1, "speedItem", "flexMiddle", 3, "click"], ["id", "openFooter", 1, "mdShow", 3, "click"], [1, "tran", 3, "icon", "fixedWidth"], [1, "iframeArea", "row"], ["id", "player", 1, "col"], [1, "row", "playrow", 3, "click"], [1, "col-sm-1", "smHide", "text-center"], [1, "col-8", "col-sm-6", "overflow"], [1, "col-sm-3", "smHide", "overflow"], ["id", "iconBar", 1, "col-4", "col-sm-2", "text-center"], [1, "icon", "borderCircle", "flexMiddle", 3, "icon", "click"], [1, "row", "content"], [1, "col", "offset-sm-1", "col-sm-5", "picture", "my-3"], [1, "lazyload"], [1, "col-sm-5", "my-3"], [1, "my-3", "description"]], template: function PlayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PlayerComponent_div_1_Template, 5, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u64AD\u653E\u5217\u8868");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u5FAA\u74B0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerComponent_Template_div_click_9_listener() { return ctx.setLoop(!ctx.loopPlaylists); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u96A8\u6A5F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerComponent_Template_div_click_14_listener() { return ctx.setShuffle(!ctx.shufflePlaylist); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u6A19\u984C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u983B\u9053");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, PlayerComponent_div_25_Template, 24, 16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "footer", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerComponent_Template_span_click_32_listener() { return ctx.playVideo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "fa-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u64AD\u653E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerComponent_Template_span_click_36_listener() { return ctx.stopVideo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "fa-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u66AB\u505C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerComponent_Template_span_click_40_listener() { return ctx.prevVideo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "fa-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u4E0A\u500B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerComponent_Template_span_click_44_listener() { return ctx.nextVideo(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "fa-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\u4E0B\u500B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, PlayerComponent_fa_icon_50_Template, 1, 3, "fa-icon", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, PlayerComponent_fa_icon_51_Template, 1, 3, "fa-icon", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, PlayerComponent_fa_icon_52_Template, 1, 3, "fa-icon", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "fa-icon", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerComponent_Template_fa_icon_click_53_listener() { return ctx.unMute(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PlayerComponent_Template_input_ngModelChange_54_listener($event) { return ctx.sound = $event; })("change", function PlayerComponent_Template_input_change_54_listener() { return ctx.setVolume(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\u901F\u5EA6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerComponent_Template_span_click_61_listener() { return ctx.setSpeed(0.2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "0.2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerComponent_Template_span_click_63_listener() { return ctx.setSpeed(0.5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "0.5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerComponent_Template_span_click_65_listener() { return ctx.setSpeed(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerComponent_Template_span_click_67_listener() { return ctx.setSpeed(1.5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "1.5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerComponent_Template_span_click_69_listener() { return ctx.setSpeed(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerComponent_Template_span_click_71_listener() { return ctx.toggleFooter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "fa-icon", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("space", ctx.footerShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.playList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faRedo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("toggleBoxSelect", ctx.loopPlaylists);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("toggleItemSelect", ctx.loopPlaylists);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faRandom);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("toggleBoxSelect", ctx.shufflePlaylist);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("toggleItemSelect", ctx.shufflePlaylist);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.playList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faPlay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faStop);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faBackward);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faForward);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("smHide", !ctx.footerShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.soundState == "up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.soundState == "down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.soundState == "off");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", !ctx.muted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faVolumeMute);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.sound);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mdHide", !ctx.footerShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mainColor", ctx.speedState == 0.2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mainColor", ctx.speedState == 0.5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mainColor", ctx.speedState == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mainColor", ctx.speedState == 1.5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mainColor", ctx.speedState == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("rotated", ctx.footerShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faChevronUp)("fixedWidth", true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: ["#playlist[_ngcontent-%COMP%] {\r\n    padding-top: 20px;\r\n    margin-top: 20px;\r\n    background-color: #000;\r\n    color: #fff;\r\n    margin-bottom: 60px;\r\n    border-radius: 20px;\r\n    box-shadow: 0 0 10px rgb(100, 100, 100);\r\n}\r\n\r\n.playrow[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    padding: 20px 0;\r\n    border-top: 1px darkgrey solid;\r\n}\r\n\r\n.playrow[_ngcontent-%COMP%]:hover {\r\n    background-color: #313131;\r\n}\r\n\r\n.overflow[_ngcontent-%COMP%] {\r\n    overflow: hidden;\r\n    height: 1.6rem;\r\n    position: relative;\r\n}\r\n\r\n.overflow[_ngcontent-%COMP%]   .light[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    position: absolute;\r\n    white-space: nowrap;\r\n    animation: lightFirst 10s linear, lightSecond 20s linear 10s infinite;\r\n}\r\n\r\n#iconBar[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n\r\n.icon[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    color: white;\r\n}\r\n\r\n.icon[_ngcontent-%COMP%]:hover {\r\n    color: darkorange;\r\n}\r\n\r\n.borderCircle[_ngcontent-%COMP%] {\r\n    border: 1.5px white solid;\r\n    border-radius: 50%;\r\n    width: 1.8rem;\r\n    height: 1.8rem;\r\n}\r\n\r\n.borderCircle[_ngcontent-%COMP%]:hover {\r\n    border-color: darkorange;\r\n}\r\n\r\n@keyframes lightFirst {\r\n    0% {\r\n        transform: translateX(0%);\r\n    }\r\n    100% {\r\n        transform: translateX(-100%);\r\n    }\r\n}\r\n\r\n@keyframes lightSecond {\r\n    0% {\r\n        transform: translateX(100%);\r\n    }\r\n    100% {\r\n        transform: translateX(-100%);\r\n    }\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n    background-color: #313131;\r\n}\r\n\r\n.picture[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n}\r\n\r\n.description[_ngcontent-%COMP%]{\r\n    overflow: hidden;\r\n}\r\n\r\n#playlistBottom[_ngcontent-%COMP%] {\r\n    height: 20px;\r\n}\r\n\r\n#playbar[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    left: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    color: white;\r\n    background-color: rgba(66, 66, 66, 0.9);\r\n    box-shadow: 0 0 5px black;\r\n    z-index: 2;\r\n}\r\n\r\n#playbar[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\r\n    font-size: 2rem;\r\n}\r\n\r\n#playArea[_ngcontent-%COMP%], #soundArea[_ngcontent-%COMP%], #speedArea[_ngcontent-%COMP%] {\r\n    height: 50px;\r\n}\r\n\r\n#playIconGroup[_ngcontent-%COMP%] {\r\n    display: inline-flex;\r\n}\r\n\r\n.playIcon[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    color: white;\r\n}\r\n\r\n.playIcon[_ngcontent-%COMP%]:hover {\r\n    color: darkorange;\r\n}\r\n\r\n.playbarItem[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n#openFooter[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 5px;\r\n    right: 5px;\r\n    border: 1px white solid;\r\n    cursor: pointer;\r\n}\r\n\r\n#openFooter[_ngcontent-%COMP%]:hover   .icon[_ngcontent-%COMP%] {\r\n    color: darkorange;\r\n}\r\n\r\n.rotated[_ngcontent-%COMP%] {\r\n    transform: rotate(-180deg);\r\n    transition: 1.5s;\r\n}\r\n\r\n.tran[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    transition: 1.5s;\r\n}\r\n\r\n#soundArea[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\r\n    margin-right: 10px;\r\n}\r\n\r\n#range[_ngcontent-%COMP%] {\r\n    -webkit-appearance: none;\r\n    width: 180px;\r\n    height: 3px;\r\n    outline: none;\r\n    background: linear-gradient(30deg, rgba(255, 255, 255, 1) 0%, rgb(255, 180, 88) 100%);\r\n    cursor: pointer;\r\n}\r\n\r\n#range[_ngcontent-%COMP%]::-webkit-slider-thumb {\r\n    -webkit-appearance: none;\r\n    width: 15px;\r\n    height: 15px;\r\n    background: darkorange;\r\n    border-radius: 50%;\r\n    -webkit-transition: .5s;\r\n    transition: .5s;\r\n}\r\n\r\n#range[_ngcontent-%COMP%]::-webkit-slider-thumb:hover {\r\n    box-shadow: 0 0 7px rgb(255, 179, 108);\r\n    -webkit-transition: .5s;\r\n    transition: .5s;\r\n}\r\n\r\n#speedbar[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    max-width: 300px;\r\n    border: 1px white solid;\r\n    border-radius: 30px;\r\n    margin-top: 5px;\r\n    margin-bottom: 5px;\r\n    background-color: black;\r\n}\r\n\r\n#speedText[_ngcontent-%COMP%] {\r\n    padding: 0 20px;\r\n}\r\n\r\n#speedNumber[_ngcontent-%COMP%] {\r\n    height: calc( 100% + 2px);\r\n    margin-top: -1px;\r\n}\r\n\r\n.speedItem[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n    border: 1px white solid;\r\n    margin: 0;\r\n    width: 30px;\r\n}\r\n\r\n.speedItem[_ngcontent-%COMP%]:hover {\r\n    background-color: darkorange;\r\n}\r\n\r\n@media (max-width: 576px) {\r\n    .space[_ngcontent-%COMP%] {\r\n        margin-bottom: 160px !important;\r\n    }\r\n}\r\n\r\n@media (min-width: 576px) {}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWVyL3BsYXllci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGVBQWU7SUFDZiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHFFQUFxRTtBQUN6RTs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSTtRQUNJLHlCQUF5QjtJQUM3QjtJQUNBO1FBQ0ksNEJBQTRCO0lBQ2hDO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLDJCQUEyQjtJQUMvQjtJQUNBO1FBQ0ksNEJBQTRCO0lBQ2hDO0FBQ0o7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLE9BQU87SUFDUCxTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWix1Q0FBdUM7SUFDdkMseUJBQXlCO0lBQ3pCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixxRkFBcUY7SUFDckYsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsdUJBQWU7SUFBZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLHVCQUFlO0lBQWYsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsV0FBVztBQUNmOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0k7UUFDSSwrQkFBK0I7SUFDbkM7QUFDSjs7QUFFQSwyQkFBMkIiLCJmaWxlIjoic3JjL2FwcC9wbGF5ZXIvcGxheWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcGxheWxpc3Qge1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2IoMTAwLCAxMDAsIDEwMCk7XHJcbn1cclxuXHJcbi5wbGF5cm93IHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgIGJvcmRlci10b3A6IDFweCBkYXJrZ3JleSBzb2xpZDtcclxufVxyXG5cclxuLnBsYXlyb3c6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMxMzEzMTtcclxufVxyXG5cclxuLm92ZXJmbG93IHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IDEuNnJlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm92ZXJmbG93IC5saWdodCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBhbmltYXRpb246IGxpZ2h0Rmlyc3QgMTBzIGxpbmVhciwgbGlnaHRTZWNvbmQgMjBzIGxpbmVhciAxMHMgaW5maW5pdGU7XHJcbn1cclxuXHJcbiNpY29uQmFyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLmljb24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaWNvbjpob3ZlciB7XHJcbiAgICBjb2xvcjogZGFya29yYW5nZTtcclxufVxyXG5cclxuLmJvcmRlckNpcmNsZSB7XHJcbiAgICBib3JkZXI6IDEuNXB4IHdoaXRlIHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDEuOHJlbTtcclxuICAgIGhlaWdodDogMS44cmVtO1xyXG59XHJcblxyXG4uYm9yZGVyQ2lyY2xlOmhvdmVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogZGFya29yYW5nZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBsaWdodEZpcnN0IHtcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBsaWdodFNlY29uZCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgIH1cclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMxMzEzMTtcclxufVxyXG5cclxuLnBpY3R1cmUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnBpY3R1cmUgaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9ue1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuI3BsYXlsaXN0Qm90dG9tIHtcclxuICAgIGhlaWdodDogMjBweDtcclxufVxyXG5cclxuI3BsYXliYXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NiwgNjYsIDY2LCAwLjkpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCBibGFjaztcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbiNwbGF5YmFyIC5pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5cclxuI3BsYXlBcmVhLCAjc291bmRBcmVhLCAjc3BlZWRBcmVhIHtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuI3BsYXlJY29uR3JvdXAge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbn1cclxuXHJcbi5wbGF5SWNvbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5wbGF5SWNvbjpob3ZlciB7XHJcbiAgICBjb2xvcjogZGFya29yYW5nZTtcclxufVxyXG5cclxuLnBsYXliYXJJdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufVxyXG5cclxuI29wZW5Gb290ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1cHg7XHJcbiAgICByaWdodDogNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggd2hpdGUgc29saWQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNvcGVuRm9vdGVyOmhvdmVyIC5pY29uIHtcclxuICAgIGNvbG9yOiBkYXJrb3JhbmdlO1xyXG59XHJcblxyXG4ucm90YXRlZCB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKTtcclxuICAgIHRyYW5zaXRpb246IDEuNXM7XHJcbn1cclxuXHJcbi50cmFuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRyYW5zaXRpb246IDEuNXM7XHJcbn1cclxuXHJcbiNzb3VuZEFyZWEgZmEtaWNvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbiNyYW5nZSB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICB3aWR0aDogMTgwcHg7XHJcbiAgICBoZWlnaHQ6IDNweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzBkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMCUsIHJnYigyNTUsIDE4MCwgODgpIDEwMCUpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jcmFuZ2U6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZDogZGFya29yYW5nZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHRyYW5zaXRpb246IC41cztcclxufVxyXG5cclxuI3JhbmdlOjotd2Via2l0LXNsaWRlci10aHVtYjpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgN3B4IHJnYigyNTUsIDE3OSwgMTA4KTtcclxuICAgIHRyYW5zaXRpb246IC41cztcclxufVxyXG5cclxuI3NwZWVkYmFyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIGJvcmRlcjogMXB4IHdoaXRlIHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4jc3BlZWRUZXh0IHtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxufVxyXG5cclxuI3NwZWVkTnVtYmVyIHtcclxuICAgIGhlaWdodDogY2FsYyggMTAwJSArIDJweCk7XHJcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xyXG59XHJcblxyXG4uc3BlZWRJdGVtIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogMXB4IHdoaXRlIHNvbGlkO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbn1cclxuXHJcbi5zcGVlZEl0ZW06aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya29yYW5nZTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICAuc3BhY2Uge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge30iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-player',
                templateUrl: './player.component.html',
                styleUrls: [
                    './player.component.css'
                ]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/safe-html.pipe.ts":
/*!***********************************!*\
  !*** ./src/app/safe-html.pipe.ts ***!
  \***********************************/
/*! exports provided: SafeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");



class SafeHtmlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(value, type) {
        switch (type) {
            case "url": return this.sanitizer.bypassSecurityTrustUrl(value);
            case "resourceUrl": return this.sanitizer.bypassSecurityTrustResourceUrl(value);
            default: throw new Error(`Invalid safe type specified: ${type}`);
        }
    }
}
SafeHtmlPipe.ɵfac = function SafeHtmlPipe_Factory(t) { return new (t || SafeHtmlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
SafeHtmlPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safeHtml", type: SafeHtmlPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafeHtmlPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'safeHtml'
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lazysizes_plugins_attrchange_ls_attrchange__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lazysizes/plugins/attrchange/ls.attrchange */ "./node_modules/lazysizes/plugins/attrchange/ls.attrchange.js");
/* harmony import */ var lazysizes_plugins_attrchange_ls_attrchange__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lazysizes_plugins_attrchange_ls_attrchange__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _service_channel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/channel.service */ "./src/app/service/channel.service.ts");
/* harmony import */ var _service_youtube_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/youtube.service */ "./src/app/service/youtube.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _safe_html_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../safe-html.pipe */ "./src/app/safe-html.pipe.ts");













function SearchComponent_div_0_div_1_article_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ngb-toast", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("hide", function SearchComponent_div_0_div_1_article_2_Template_ngb_toast_hide_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const i_r10 = ctx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r11.close(i_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_div_0_div_1_article_2_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const i_r10 = ctx.index; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r13.toggleIframeShow(i_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "fa-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "iframe", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_div_0_div_1_article_2_Template_div_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const channel_r9 = ctx.$implicit; const i_r10 = ctx.index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r14.togglePlayList(channel_r9, i_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "fa-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const channel_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("header", channel_r9.snippet.channelTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autohide", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", ctx_r6.iframeShow[i_r10]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-src", channel_r9.snippet.thumbnails.medium.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", ctx_r6.iframeShow[i_r10]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r6.faPlay);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", !ctx_r6.iframeShow[i_r10]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-src", "https://www.youtube.com/embed/" + channel_r9.id.videoId + "?autoplay=1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 24, "https://www.youtube.com/watch?v=" + channel_r9.id.videoId, "url"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", channel_r9.snippet.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](channel_r9.snippet.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("blackDisc", ctx_r6.discStyle[i_r10])("whiteDisc", !ctx_r6.discStyle[i_r10]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("whiteIcon", ctx_r6.discStyle[i_r10])("blackIcon", !ctx_r6.discStyle[i_r10]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r6.faCompactDisc);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 27, channel_r9.snippet.publishedAt, "yyyy-MM-dd hh:mm"));
} }
function SearchComponent_div_0_div_1_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_div_0_div_1_span_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r15.togglePage(ctx_r15.prevPageToken); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u4E0A\u4E00\u9801");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SearchComponent_div_0_div_1_span_5_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_div_0_div_1_span_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r17.togglePage(ctx_r17.nextPageToken); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u4E0B\u4E00\u9801");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SearchComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SearchComponent_div_0_div_1_article_2_Template, 17, 30, "article", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SearchComponent_div_0_div_1_span_4_Template, 3, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SearchComponent_div_0_div_1_span_5_Template, 3, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.channels);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.prevPageToken);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.nextPageToken);
} }
function SearchComponent_div_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SearchComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchComponent_div_0_div_1_Template, 6, 3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SearchComponent_div_0_ng_template_2_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.channels)("ngIfElse", _r4);
} }
function SearchComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Not Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SearchComponent {
    constructor(router, channelService, youtubeService) {
        this.router = router;
        this.channelService = channelService;
        this.youtubeService = youtubeService;
        this.faChevronCircleRight = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faChevronCircleRight"];
        this.faCompactDisc = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCompactDisc"];
        this.faPlay = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlay"];
    }
    ngOnDestroy() {
        if (this.navigationSubscription) {
            console.log("running ngOnDestroy");
            this.navigationSubscription.unsubscribe();
        }
    }
    ngOnInit() {
        console.log("running ngOnInit");
        this.initEvent();
        this.navigationSubscription = this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                this.initEvent();
            }
        });
    }
    initEvent() {
        console.log("running initEvent");
        window.scroll(0, 0);
        this.result = false;
        if (this.channels = this.channelService.getChannel()) {
            if (this.channels.length > 0) {
                this.result = true;
                this.iframeShow = new Array(this.channels.length);
                this.discStyle = new Array(this.channels.length);
                if (JSON.parse(localStorage.getItem("playList"))) {
                    this.playList = JSON.parse(localStorage.getItem("playList"));
                }
                else {
                    this.playList = new Array();
                }
                this.channels.forEach((channel, index) => {
                    this.playList.forEach((play) => {
                        if (channel.id.videoId == play.id.videoId) {
                            this.discStyle[index] = true;
                        }
                    });
                });
                this.nextPageToken = this.channelService.getNextPageToken();
                this.prevPageToken = this.channelService.getPrevPageToken();
            }
        }
    }
    close(i) {
        this.channels.splice(i, 1);
    }
    toggleIframeShow(i) {
        this.iframeShow[i] = true;
    }
    togglePlayList(channel, index) {
        if (this.discStyle[index]) {
            this.removePlayList(channel);
        }
        else {
            this.addPlayList(channel);
        }
        this.toggleDisc(index);
    }
    addPlayList(channel) {
        console.log(channel);
        this.playList.push(channel);
        console.log(this.playList);
        this.updateLocalStorage(JSON.stringify(this.playList));
    }
    removePlayList(channel) {
        console.log(channel);
        const index = this.playList.findIndex((play) => play == channel);
        this.playList.splice(index, 1);
        console.log(this.playList);
        this.updateLocalStorage(JSON.stringify(this.playList));
    }
    updateLocalStorage(playList) {
        localStorage.removeItem("playList");
        localStorage.setItem("playList", playList);
    }
    toggleDisc(index) {
        this.discStyle[index] = !this.discStyle[index];
    }
    togglePage(pageToken) {
        this.youtubeService.getNextVideos(pageToken).subscribe(result => {
            console.log(result);
            this.channelService.setChannel(result.items);
            if (result.prevPageToken) {
                this.channelService.setPrevPageToken(result.prevPageToken);
            }
            else {
                this.channelService.setPrevPageToken(null);
            }
            this.channelService.setNextPageToken(result.nextPageToken);
            this.ngOnDestroy();
            this.ngOnInit();
        });
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_channel_service__WEBPACK_IMPORTED_MODULE_5__["ChannelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_youtube_service__WEBPACK_IMPORTED_MODULE_6__["YoutubeService"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-home"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["notFound", ""], ["waitting", ""], [1, "row"], ["class", "col-md-6 col-lg-4 my-3", 4, "ngFor", "ngForOf"], ["id", "page"], ["id", "prevPage", 4, "ngIf"], ["id", "nextPage", 4, "ngIf"], [1, "col-md-6", "col-lg-4", "my-3"], [3, "header", "autohide", "hide"], [1, "iframeArea"], [1, "iframeImg", "lazyload"], [1, "playIconButton", 3, "click"], [1, "playIcon", 3, "icon"], ["frameborder", "0", "allow", "autoplay", "allowfullscreen", "", 1, "lazyload"], [3, "href"], [1, "title", "my-2", 3, "title"], ["id", "disc", 1, "text-center", 3, "click"], [3, "icon"], [1, "info"], ["id", "prevPage"], [1, "btn", "btn-light", 3, "click"], ["id", "nextPage"], [1, "spinner", "text-center"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SearchComponent_div_0_Template, 4, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SearchComponent_ng_template_1_Template, 2, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.result)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbToast"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FaIconComponent"]], pipes: [_safe_html_pipe__WEBPACK_IMPORTED_MODULE_10__["SafeHtmlPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: [".toast[_ngcontent-%COMP%] {\r\n    max-width: initial;\r\n    margin: auto;\r\n}\r\n\r\n.hoverShow[_ngcontent-%COMP%]{\r\n    display: none;\r\n}\r\n\r\n.iframeArea[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    padding-bottom: 56.25%;\r\n    height: 0;\r\n    overflow: hidden;\r\n}\r\n\r\n.iframeImg[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\r\n\r\n.iframeArea[_ngcontent-%COMP%]   .playIconButton[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.iframeArea[_ngcontent-%COMP%]   .playIcon[_ngcontent-%COMP%]{\r\n    padding: 10px 20px;\r\n    border: 1px white double;\r\n    border-radius: 15px;\r\n    background-color: black;\r\n    color: #fff;\r\n    cursor: pointer;\r\n    opacity: 0.75;\r\n}\r\n\r\n.iframeArea[_ngcontent-%COMP%]   .playIcon[_ngcontent-%COMP%]:hover{\r\n    color: darkorange;\r\n}\r\n\r\n.iframeArea[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n    height: 3.6rem;\r\n    color: #606060;\r\n    overflow: hidden;\r\n}\r\n\r\nngb-toast[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n\r\nngb-toast[_ngcontent-%COMP%]   #disc[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    right: 0.6rem;\r\n    bottom: 0.6rem;\r\n    line-height: 1;\r\n    cursor: pointer;\r\n    transition: 1.5s;\r\n}\r\n\r\nngb-toast[_ngcontent-%COMP%]   #disc[_ngcontent-%COMP%]:hover {\r\n    transition: 1s;\r\n    transform: rotate(45deg);\r\n}\r\n\r\n.whiteDisc[_ngcontent-%COMP%] {\r\n    border-color: black;\r\n    background-color: white;\r\n}\r\n\r\n.blackDisc[_ngcontent-%COMP%] {\r\n    right: calc(0.6rem - 2px) !important;\r\n    bottom: calc(0.6rem - 2px) !important;\r\n    border-width: 2px;\r\n    border-style: double;\r\n    border-color: white;\r\n    background-color: black;\r\n    transform: rotate(45deg);\r\n}\r\n\r\nfa-icon[_ngcontent-%COMP%] {\r\n    font-size: 1.4rem;\r\n    line-height: 1;\r\n}\r\n\r\n.whiteIcon[_ngcontent-%COMP%] {\r\n    color: white;\r\n}\r\n\r\n.blackIcon[_ngcontent-%COMP%] {\r\n    color: black;\r\n}\r\n\r\n#page[_ngcontent-%COMP%]{\r\n    margin: 20px 10px;\r\n    width: calc(100% - 10px * 2);\r\n    display: flow-root;\r\n}\r\n\r\n#nextPage[_ngcontent-%COMP%]{\r\n    float: right;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGNBQWM7SUFDZCxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLHFDQUFxQztJQUNyQyxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLnRvYXN0IHtcclxuICAgIG1heC13aWR0aDogaW5pdGlhbDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmhvdmVyU2hvd3tcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5pZnJhbWVBcmVhIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1Ni4yNSU7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uaWZyYW1lSW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pZnJhbWVBcmVhIC5wbGF5SWNvbkJ1dHRvbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pZnJhbWVBcmVhIC5wbGF5SWNvbntcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGJvcmRlcjogMXB4IHdoaXRlIGRvdWJsZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3BhY2l0eTogMC43NTtcclxufVxyXG5cclxuLmlmcmFtZUFyZWEgLnBsYXlJY29uOmhvdmVye1xyXG4gICAgY29sb3I6IGRhcmtvcmFuZ2U7XHJcbn1cclxuXHJcbi5pZnJhbWVBcmVhIGlmcmFtZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgaGVpZ2h0OiAzLjZyZW07XHJcbiAgICBjb2xvcjogIzYwNjA2MDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbm5nYi10b2FzdCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbm5nYi10b2FzdCAjZGlzYyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMC42cmVtO1xyXG4gICAgYm90dG9tOiAwLjZyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IDEuNXM7XHJcbn1cclxuXHJcbm5nYi10b2FzdCAjZGlzYzpob3ZlciB7XHJcbiAgICB0cmFuc2l0aW9uOiAxcztcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxufVxyXG5cclxuLndoaXRlRGlzYyB7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5ibGFja0Rpc2Mge1xyXG4gICAgcmlnaHQ6IGNhbGMoMC42cmVtIC0gMnB4KSAhaW1wb3J0YW50O1xyXG4gICAgYm90dG9tOiBjYWxjKDAuNnJlbSAtIDJweCkgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBkb3VibGU7XHJcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XHJcbn1cclxuXHJcbmZhLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxufVxyXG5cclxuLndoaXRlSWNvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5ibGFja0ljb24ge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4jcGFnZXtcclxuICAgIG1hcmdpbjogMjBweCAxMHB4O1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHggKiAyKTtcclxuICAgIGRpc3BsYXk6IGZsb3ctcm9vdDtcclxufVxyXG5cclxuI25leHRQYWdle1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './search.component.html',
                styleUrls: [
                    './search.component.css'
                ]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _service_channel_service__WEBPACK_IMPORTED_MODULE_5__["ChannelService"] }, { type: _service_youtube_service__WEBPACK_IMPORTED_MODULE_6__["YoutubeService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/channel.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/channel.service.ts ***!
  \********************************************/
/*! exports provided: ChannelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelService", function() { return ChannelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ChannelService {
    constructor() { }
    setChannel(newChannels) {
        this.channels = newChannels;
    }
    addChannel(newChannels) {
        this.channels = this.channels.concat(newChannels);
    }
    getChannel() {
        return this.channels;
    }
    setPrevPageToken(prevPageToken) {
        this.prevPageToken = prevPageToken;
    }
    getPrevPageToken() {
        return this.prevPageToken;
    }
    setNextPageToken(nextPageToken) {
        this.nextPageToken = nextPageToken;
    }
    getNextPageToken() {
        return this.nextPageToken;
    }
}
ChannelService.ɵfac = function ChannelService_Factory(t) { return new (t || ChannelService)(); };
ChannelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChannelService, factory: ChannelService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChannelService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/service/youtube.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/youtube.service.ts ***!
  \********************************************/
/*! exports provided: YoutubeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeService", function() { return YoutubeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class YoutubeService {
    constructor(http) {
        this.http = http;
        this.apiKey = "AIzaSyDWuzGqcgh5yKi3rNBMZw9ZJO1lbWIzqeM";
        this.youtubeDataUrl = "https://www.googleapis.com/youtube/v3/";
    }
    getVideosForChannel(query) {
        this.nowSearchUrl = this.pasteUrl(query);
        return this.http.get(this.nowSearchUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => { return res; }));
    }
    getNextVideos(nextPageToken) {
        const url = this.nowSearchUrl + "&pageToken=" + nextPageToken;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((res) => { return res; }));
    }
    pasteUrl(query) {
        const queryUrl = (query) ? "&q=" + query : "";
        const url = this.youtubeDataUrl + "search?key=" + this.apiKey + "&order=date&part=snippet&type=video" + queryUrl + "&maxResults=48";
        return url;
    }
}
YoutubeService.ɵfac = function YoutubeService_Factory(t) { return new (t || YoutubeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
YoutubeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: YoutubeService, factory: YoutubeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YoutubeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\sjiek\Desktop\GoogleYoutubeDataApi\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map