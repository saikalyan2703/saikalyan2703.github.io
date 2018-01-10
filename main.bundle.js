webpackJsonp([1,4],{

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_socket_io_client__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserAuthService = (function () {
    function UserAuthService(_http) {
        this._http = _http;
        this._registerUrl = "/api/register";
        this._loginUrl = "/api/login";
        this._logoutUrl = "/api/logout";
        this._getusersUrl = "/api/users";
        this.socket = __WEBPACK_IMPORTED_MODULE_3_socket_io_client__();
    }
    UserAuthService.prototype.addUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this._http.post(this._registerUrl, JSON.stringify(user), options)
            .map(function (response) { return response.json(); });
    };
    UserAuthService.prototype.getUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this._http.post(this._loginUrl, JSON.stringify(user), options)
            .map(function (response) {
            var user = response.json();
            if (typeof (user.user) !== 'undefined') {
                localStorage.setItem('user', user.user.email);
            }
            return user;
        });
    };
    UserAuthService.prototype.logout = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this._http.post(this._logoutUrl, JSON.stringify({ 'email': email }), options)
            .map(function (response) { return response.json(); });
    };
    UserAuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], UserAuthService);
    return UserAuthService;
    var _a;
}());
//# sourceMappingURL=C:/Users/saika/Desktop/project/angular projects/chat-application/src/user-auth.service.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slideInDownAnimation; });

// Component transition animations
var slideInDownAnimation = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* trigger */])('routeAnimation', [
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* style */])({
        opacity: 1,
        transform: 'translateX(0)'
    })),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* transition */])(':enter', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* style */])({
            opacity: 0,
            transform: 'translateX(-100%)'
        }),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* animate */])('0.5s ease-in')
    ]),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* transition */])(':leave', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* animate */])('0.5s ease-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* style */])({
            opacity: 0,
            transform: 'translateY(100%)'
        }))
    ])
]);
//# sourceMappingURL=C:/Users/saika/Desktop/project/angular projects/chat-application/src/animations.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_chat_service__ = __webpack_require__(351);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatBoxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatBoxComponent = (function () {
    function ChatBoxComponent(route, _chatService, router) {
        this.route = route;
        this._chatService = _chatService;
        this.router = router;
        this.email = '';
        this.message = "";
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__();
    }
    ChatBoxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = localStorage.getItem('user');
        this.route.params.subscribe(function (params) {
            _this.email = params['email'];
            _this._chatService.getChat(_this.email).subscribe(function (res) { return _this.chat = res; });
        });
        this.socket.on('numberOfLogoutUsers', function (numberOfOnlineUsers) {
            if (numberOfOnlineUsers[1].indexOf(_this.email) == -1) {
                _this.router.navigate(['/chat']);
            }
        });
        this.socket.on('recieveMessage', function (msgDetails) {
            console.log(msgDetails);
            console.log(_this.chat);
            if (msgDetails[1] == _this.user && msgDetails[0] == _this.email) {
                for (var i = 0; i < 2; i++) {
                    if (_this.chat[i].from == _this.email) {
                        _this.chat[i].messages.push(msgDetails[2]);
                        break;
                    }
                }
                console.log(_this.chat);
            }
        });
    };
    ChatBoxComponent.prototype.sendMessage = function () {
        var _this = this;
        if (this.message != "") {
            this._chatService.sendMessage(this.message, this.email).subscribe(function (res) {
                if (res.flag == "success") {
                    _this.socket.emit('message', [_this.user, _this.email, _this.message]);
                    for (var i = 0; i < 2; i++) {
                        if (_this.chat[i].from == _this.user) {
                            _this.chat[i].messages.push(_this.message);
                            break;
                        }
                    }
                    _this.message = "";
                }
            });
        }
    };
    ChatBoxComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-chat-box',
            template: __webpack_require__(721),
            styles: [__webpack_require__(714)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_chat_service__["a" /* ChatService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_chat_service__["a" /* ChatService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _c) || Object])
    ], ChatBoxComponent);
    return ChatBoxComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/saika/Desktop/project/angular projects/chat-application/src/chat-box.component.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatComponent = (function () {
    function ChatComponent() {
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-chat',
            template: __webpack_require__(722),
            styles: [__webpack_require__(715)]
        }), 
        __metadata('design:paramtypes', [])
    ], ChatComponent);
    return ChatComponent;
}());
//# sourceMappingURL=C:/Users/saika/Desktop/project/angular projects/chat-application/src/chat.component.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_users_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_chat_component__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chat_box_chat_box_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chat_routing_chat_routing_module__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_chat_service__ = __webpack_require__(351);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_6__chat_routing_chat_routing_module__["a" /* ChatRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__users_users_component__["a" /* UsersComponent */], __WEBPACK_IMPORTED_MODULE_4__chat_chat_component__["a" /* ChatComponent */], __WEBPACK_IMPORTED_MODULE_5__chat_box_chat_box_component__["a" /* ChatBoxComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_chat_service__["a" /* ChatService */]]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardModule);
    return DashboardModule;
}());
//# sourceMappingURL=C:/Users/saika/Desktop/project/angular projects/chat-application/src/dashboard.module.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_auth_service__ = __webpack_require__(156);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersComponent = (function () {
    function UsersComponent(_userService, router, route) {
        this._userService = _userService;
        this.router = router;
        this.route = route;
        this.loginUsers = [];
        this.numberOfOnlineUsers = 0;
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__();
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = localStorage.getItem('user');
        this.socket.emit('login', this.user);
        console.log(this.user);
        this.socket.on('numberOfLoginUsers', function (numberOfOnlineUsers) {
            _this.numberOfOnlineUsers = numberOfOnlineUsers[0];
            _this.loginUsers = numberOfOnlineUsers[1];
        });
        this.socket.on('numberOfLogoutUsers', function (numberOfOnlineUsers) {
            _this.numberOfOnlineUsers = numberOfOnlineUsers[0];
            _this.loginUsers = numberOfOnlineUsers[1];
        });
    };
    UsersComponent.prototype.displayChat = function (email) {
        console.log('chat is/'.concat(email));
        this.router.navigate(['chat/'.concat(email)]);
    };
    UsersComponent.prototype.logout = function () {
        var _this = this;
        this.socket.emit('logout', this.user);
        this._userService.logout(this.user).subscribe(function (res) {
            console.log(res.flag);
            localStorage.removeItem('user');
            _this.router.navigate(['/login']);
        });
    };
    UsersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-users',
            template: __webpack_require__(723),
            styles: [__webpack_require__(716)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_auth_service__["a" /* UserAuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_user_auth_service__["a" /* UserAuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], UsersComponent);
    return UsersComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/saika/Desktop/project/angular projects/chat-application/src/users.component.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animations__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms_src_validators__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_auth_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router_src_router__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(fb, _userService, router) {
        this.fb = fb;
        this._userService = _userService;
        this.router = router;
        this.routeAnimation = true;
        this.display = 'block';
        this.position = 'absolute';
        this.passwordFlag = false;
        this.passwordStatus = "Show password";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms_src_validators__["a" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms_src_validators__["a" /* Validators */].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            pwd: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms_src_validators__["a" /* Validators */].required]]
        });
    };
    LoginComponent.prototype.passwordTrigger = function () {
        this.passwordFlag = !this.passwordFlag;
        this.passwordStatus = this.passwordStatus === 'Show password' ? 'Hide password' : 'Show password';
    };
    LoginComponent.prototype.getUser = function (user) {
        var _this = this;
        console.log(user);
        this._userService.getUser(user).subscribe(function (res) {
            console.log(res.flag);
            if (res.flag == 'success') {
                _this.router.navigate(['/chat']);
            }
            if (res.flag == 'error password') {
                _this.loginFlag = 'error password';
                _this.messageFlag = 'error password';
            }
            if (res.flag == 'error email') {
                _this.loginFlag = 'error email';
                _this.messageFlag = 'error email';
            }
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* HostBinding */])('@routeAnimation'), 
        __metadata('design:type', Object)
    ], LoginComponent.prototype, "routeAnimation", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* HostBinding */])('style.display'), 
        __metadata('design:type', Object)
    ], LoginComponent.prototype, "display", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* HostBinding */])('style.position'), 
        __metadata('design:type', Object)
    ], LoginComponent.prototype, "position", void 0);
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__(724),
            styles: [__webpack_require__(717)],
            animations: [__WEBPACK_IMPORTED_MODULE_1__animations__["a" /* slideInDownAnimation */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* trigger */])('errorDisplay', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* transition */])('* => void', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* animate */])('100ms ease-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* style */])({ height: '0.2px' }))]),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* transition */])('void => *', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* style */])({ height: '0.2px' }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* animate */])('100ms ease-out')])
                ])],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_auth_service__["a" /* UserAuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_user_auth_service__["a" /* UserAuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router_src_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__angular_router_src_router__["a" /* Router */]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=C:/Users/saika/Desktop/project/angular projects/chat-application/src/login.component.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-not-found',
            template: __webpack_require__(725),
            styles: [__webpack_require__(718)]
        }), 
        __metadata('design:paramtypes', [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());
//# sourceMappingURL=C:/Users/saika/Desktop/project/angular projects/chat-application/src/not-found.component.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms_src_validators__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animations__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_auth_service__ = __webpack_require__(156);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(fb, _userService) {
        this.fb = fb;
        this._userService = _userService;
        this.routeAnimation = true;
        this.display = 'block';
        this.position = 'absolute';
        this.passwordFlag = false;
        this.passwordStatus = "Show password";
        this.cpasswordFlag = false;
        this.cpasswordStatus = "Show password";
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.fb.group({
            firstName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms_src_validators__["a" /* Validators */].required],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms_src_validators__["a" /* Validators */].required],
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms_src_validators__["a" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms_src_validators__["a" /* Validators */].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            password: this.fb.group({
                pwd: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms_src_validators__["a" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms_src_validators__["a" /* Validators */].minLength(4)]],
                cpwd: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms_src_validators__["a" /* Validators */].required]]
            }, { validator: this.passwordEquals })
        });
    };
    RegisterComponent.prototype.passwordEquals = function (formGroup) {
        var a = new Array();
        for (var key in formGroup.controls) {
            if (formGroup.controls.hasOwnProperty(key)) {
                var control = formGroup.controls[key];
                a.push(control);
            }
        }
        if (a[0].value === a[1].value) {
            return null;
        }
        else {
            return { error: true };
        }
    };
    RegisterComponent.prototype.passwordTrigger = function () {
        this.passwordFlag = !this.passwordFlag;
        this.passwordStatus = this.passwordStatus === 'Show password' ? 'Hide password' : 'Show password';
    };
    RegisterComponent.prototype.cpasswordTrigger = function () {
        this.cpasswordFlag = !this.cpasswordFlag;
        this.cpasswordStatus = this.cpasswordStatus === 'Show password' ? 'Hide password' : 'Show password';
    };
    RegisterComponent.prototype.registerUser = function (user) {
        var _this = this;
        console.log(user);
        this._userService.addUser(user).subscribe(function (res) {
            console.log(res.flag);
            if (res.flag == 'success') {
                _this.registerForm.reset();
                _this.registerFlag = 'success';
                _this.messageFlag = 'success';
            }
            else {
                _this.messageFlag = 'error';
                _this.registerFlag = 'error';
            }
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* HostBinding */])('@routeAnimation'), 
        __metadata('design:type', Object)
    ], RegisterComponent.prototype, "routeAnimation", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* HostBinding */])('style.display'), 
        __metadata('design:type', Object)
    ], RegisterComponent.prototype, "display", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* HostBinding */])('style.position'), 
        __metadata('design:type', Object)
    ], RegisterComponent.prototype, "position", void 0);
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__(726),
            animations: [__WEBPACK_IMPORTED_MODULE_3__animations__["a" /* slideInDownAnimation */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* trigger */])('errorDisplay', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* transition */])('* => void', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* animate */])('100ms ease-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* style */])({ height: '0.2px' }))]),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* transition */])('void => *', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* style */])({ height: '0.2px' }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* animate */])('100ms ease-out')])
                ])],
            styles: [__webpack_require__(719)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_auth_service__["a" /* UserAuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_user_auth_service__["a" /* UserAuthService */]) === 'function' && _b) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/saika/Desktop/project/angular projects/chat-application/src/register.component.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(107);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuardService = (function () {
    function AuthGuardService(router) {
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('user')) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuardService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object])
    ], AuthGuardService);
    return AuthGuardService;
    var _a;
}());
//# sourceMappingURL=C:/Users/saika/Desktop/project/angular projects/chat-application/src/auth-guard.service.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatService = (function () {
    function ChatService(_http) {
        this._http = _http;
        this._chatUrl = "/api/chat";
        this._messageUrl = "/api/message";
    }
    ChatService.prototype.getChat = function (toEmail) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var fromEmail = localStorage.getItem('user');
        return this._http.post(this._chatUrl, JSON.stringify({ 'from': fromEmail, 'to': toEmail }), options)
            .map(function (response) { return response.json(); });
    };
    ChatService.prototype.sendMessage = function (msg, toEmail) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        var fromEmail = localStorage.getItem('user');
        return this._http.post(this._messageUrl, JSON.stringify({ 'from': fromEmail, 'to': toEmail, 'msg': msg }), options)
            .map(function (response) { return response.json(); });
    };
    ChatService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], ChatService);
    return ChatService;
    var _a;
}());
//# sourceMappingURL=C:/Users/saika/Desktop/project/angular projects/chat-application/src/chat.service.js.map

/***/ }),

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/dashboard/dashboard.module": [
		345
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 423;


/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(542);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/saika/Desktop/project/angular projects/chat-application/src/main.js.map

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__not_found_not_found_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_guard_service__ = __webpack_require__(350);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__register_register_component__["a" /* RegisterComponent */] },
    {
        path: 'chat',
        loadChildren: 'app/dashboard/dashboard.module#DashboardModule',
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__services_auth_guard_service__["a" /* AuthGuardService */]]
    },
    { path: '', redirectTo: '/register', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_4__not_found_not_found_component__["a" /* NotFoundComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=C:/Users/saika/Desktop/project/angular projects/chat-application/src/app-routing.module.js.map

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'application works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(720),
            styles: [__webpack_require__(713)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/saika/Desktop/project/angular projects/chat-application/src/app.component.js.map

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__register_register_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__not_found_not_found_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_user_auth_service__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_auth_guard_service__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_module__ = __webpack_require__(345);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__not_found_not_found_component__["a" /* NotFoundComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_11__dashboard_dashboard_module__["DashboardModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__services_user_auth_service__["a" /* UserAuthService */], __WEBPACK_IMPORTED_MODULE_10__services_auth_guard_service__["a" /* AuthGuardService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/saika/Desktop/project/angular projects/chat-application/src/app.module.js.map

/***/ }),

/***/ 543:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_chat_component__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_users_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_box_chat_box_component__ = __webpack_require__(343);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var appRoutes = [
    { path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__chat_chat_component__["a" /* ChatComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_3__users_users_component__["a" /* UsersComponent */],
                children: [
                    {
                        path: ':email',
                        component: __WEBPACK_IMPORTED_MODULE_4__chat_box_chat_box_component__["a" /* ChatBoxComponent */]
                    }
                ]
            }
        ]
    },
];
var ChatRoutingModule = (function () {
    function ChatRoutingModule() {
    }
    ChatRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(appRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ChatRoutingModule);
    return ChatRoutingModule;
}());
//# sourceMappingURL=C:/Users/saika/Desktop/project/angular projects/chat-application/src/chat-routing.module.js.map

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/saika/Desktop/project/angular projects/chat-application/src/environment.js.map

/***/ }),

/***/ 713:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 714:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 715:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 716:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 717:
/***/ (function(module, exports) {

module.exports = ".container{\r\n    margin-top: 200px;\r\n}"

/***/ }),

/***/ 718:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 719:
/***/ (function(module, exports) {

module.exports = ".container{\r\n    margin-top: 120px;\r\n}"

/***/ }),

/***/ 720:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ 721:
/***/ (function(module, exports) {

module.exports = "<h2>Chat Box:</h2>\r\n\r\n<div class=\"col-md-5\">\r\n        <div *ngFor = \"let messages of chat\">\r\n                <div *ngIf = \"messages.from!=user\">\r\n                        <div *ngFor = \"let message of messages.messages\">\r\n                                <p style=\"margin-right:100px;;background-color:lightgreen\">{{message}}</p>\r\n                            </div>\r\n                    \r\n                        \r\n                    </div>\r\n            \r\n                    <div *ngIf = \"messages.from==user\">\r\n                            <div  *ngFor = \"let message of messages.messages\">\r\n                                    <p style=\"margin-left:150px;background-color:wheat\">{{message}}</p>\r\n                            </div>\r\n                            \r\n                        </div>\r\n            </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <input [(ngModel)]=\"message\" type=\"text\" name=\"msg\" id=\"msg\">\r\n    <button (click)=\"sendMessage()\" class=\"btn\">Send message</button>\r\n</div>"

/***/ }),

/***/ 722:
/***/ (function(module, exports) {

module.exports = "<h1 class=\"col-md-offset-5\">Online Chat:</h1>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ 723:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <div style=\"margin-top:20px\" class=\"row\">\n        <div class=\"col-md-offset-6\">\n            <button (click)=\"logout()\" type=\"button\" class=\"btn btn-info\">Logout</button>\n        </div>\n      </div>\n\n  <div class=\"row\">\n    \n    <div class=\"col-md-1\">\n        <h2> Users online:</h2>\n        {{numberOfOnlineUsers}}\n        \n        <div *ngFor=\"let user of loginUsers\">\n                <button (click)=\"displayChat(user)\" class=\"btn btn-primary\">{{user}}</button>\n        </div>\n    </div>\n\n    <div class=\"col-md-offset-2 col-md-9\">\n        <router-outlet></router-outlet>\n    </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ 724:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <div class=\"row\">\n\n        <div *ngIf=\"messageFlag=='error email'\" class=\"row\">\n            <div class=\"alert alert-danger alert-dismissable col-md-offset-6 col-md-4\">\n              <a (click)=\"messageFlag=null\" class=\"close\" aria-label=\"close\">&times;</a>\n              <strong class=\"col-md-offset-4\">Email is not registered.</strong>\n            </div>\n          </div>\n\n          <div *ngIf=\"messageFlag=='error password'\" class=\"row\">\n              <div class=\"alert alert-danger alert-dismissable col-md-offset-6 col-md-4\">\n                <a (click)=\"messageFlag=null\" class=\"close\" aria-label=\"close\">&times;</a>\n                <strong class=\"col-md-offset-4\">Entered password is not valid.</strong>\n              </div>\n            </div>\n\n      <div class=\"col-md-offset-4 col-md-8\">\n          <form [formGroup]=\"loginForm\" (ngSubmit)='getUser(loginForm.value)' novalidate>\n\n              <div class=\"form-group\">\n                <label for=\"email\">Email:</label>\n                <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter email\" name=\"email\" formControlName=\"email\">\n                <div [@errorDisplay] *ngIf=\"loginForm.get('email').hasError('required') && loginForm.get('email').touched\" class=\"alert alert-danger\">\n                  <strong>Please enter email.</strong>\n                </div>\n                <div [@errorDisplay] *ngIf=\"loginForm.get('email').hasError('pattern') && loginForm.get('email').touched\" class=\"alert alert-danger\">\n                    <strong>Email is not in correct pattern.</strong>\n                  </div>\n              </div>\n          \n              <div class=\"form-group\">\n                <label for=\"pwd\">Password:</label>\n                <span class=\"pull-right\" style=\"color:lightskyblue\" (click)=\"passwordTrigger()\">{{passwordStatus}}</span>\n                <input type=\"password\" class=\"form-control\" id=\"pwd\" placeholder=\"Enter password\" name=\"pwd\" formControlName=\"pwd\">\n                <div [@errorDisplay] *ngIf=\"passwordFlag\">\n                  <input class=\"form-control\" type=\"text\" [value]=\"loginForm.get('pwd').value\" disabled>\n                </div>\n                <div [@errorDisplay] *ngIf=\"loginForm.get('pwd').hasError('required') && loginForm.get('pwd').touched\" class=\"alert alert-danger\">\n                  <strong>Please enter password.</strong>\n                </div>\n              </div>\n          \n              <button type=\"submit\" class=\"btn btn-default\">Login</button>\n              <a routerLink=\"/register\" class=\"btn btn-success pull-right\" role=\"button\">Create Account</a>\n            </form>\n  \n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ 725:
/***/ (function(module, exports) {

module.exports = "<h2>Page not found</h2>"

/***/ }),

/***/ 726:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div *ngIf=\"messageFlag=='success'\" class=\"row\">\n    <div class=\"alert alert-success alert-dismissable col-md-offset-6 col-md-4\">\n      <a (click)=\"messageFlag=null\" class=\"close\" aria-label=\"close\">&times;</a>\n      <strong class=\"col-md-offset-4\">Signup successful</strong>\n    </div>\n  </div>\n\n  <div *ngIf=\"messageFlag=='error'\" class=\"row\">\n    <div class=\"alert alert-danger alert-dismissable col-md-offset-6 col-md-4\">\n      <a (click)=\"messageFlag=null\" class=\"close\" aria-label=\"close\">&times;</a>\n      <strong class=\"col-md-offset-4\">User already exists</strong>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-md-offset-4 col-md-8\">\n        <form [formGroup]=\"registerForm\" (ngSubmit)='registerUser(registerForm.value)' novalidate>\n\n            <div class=\"form-group\">\n              <label for=\"firstName\">First Name:</label>\n              <input type=\"text\" class=\"form-control\" id=\"firstName\" placeholder=\"Enter first name\" name=\"firstName\" formControlName=\"firstName\">\n              <div [@errorDisplay] *ngIf=\"registerForm.get('firstName').touched && registerForm.get('firstName').hasError('required')\" class=\"alert alert-danger\">\n                <strong>Please enter first name.</strong>\n              </div>\n            </div>\n        \n            <div class=\"form-group\">\n              <label for=\"lastName\">Last Name:</label>\n              <input type=\"text\" class=\"form-control\" id=\"lastName\" placeholder=\"Enter last name\" name=\"lastName\" formControlName=\"lastName\">\n              <div [@errorDisplay] *ngIf=\"registerForm.get('lastName').hasError('required') && registerForm.get('lastName').touched\" class=\"alert alert-danger\">\n                  <strong>Please enter last name.</strong>\n                </div>\n            </div>\n        \n            <div class=\"form-group\">\n              <label for=\"email\">Email:</label>\n              <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Enter email\" formControlName=\"email\">\n              <div [@errorDisplay] *ngIf=\"registerForm.get('email').hasError('required') && registerForm.get('email').touched\" class=\"alert alert-danger\">\n                  <strong>Please enter email.</strong>\n                </div>\n                <div [@errorDisplay] *ngIf=\"registerForm.get('email').hasError('pattern') && registerForm.get('email').touched\" class=\"alert alert-danger\">\n                    <strong>Email is not in correct pattern.</strong>\n                  </div>\n            </div>\n\n            <div formGroupName=\"password\">\n              <div class=\"form-group\">\n                <label for=\"pwd\">Password:</label>\n                <span class=\"pull-right\" style=\"color:lightskyblue\" (click)=\"passwordTrigger()\">{{passwordStatus}}</span>\n                <input type=\"password\" class=\"form-control\" id=\"pwd\" placeholder=\"Enter password\" name=\"pwd\" formControlName=\"pwd\">\n                <div [@errorDisplay] *ngIf=\"passwordFlag\">\n                  <input class=\"form-control\" type=\"text\" [value]=\"registerForm.get('password.pwd').value\" disabled>\n                </div>\n                <div [@errorDisplay] *ngIf=\"registerForm.get('password.pwd').hasError('required') && registerForm.get('password.pwd').touched\" class=\"alert alert-danger\">\n                  <strong>Please enter password.</strong>\n                </div>\n                <div [@errorDisplay] *ngIf=\"registerForm.get('password.pwd').hasError('minlength') && registerForm.get('password.pwd').touched\" class=\"alert alert-danger\">\n                    <strong>Password must be atleast 4 characters.</strong>\n                  </div>\n              </div>\n          \n              <div class=\"form-group\">\n                <label for=\"cpwd\">Confirm Password:</label>\n                <span class=\"pull-right\" style=\"color:lightskyblue\" (click)=\"cpasswordTrigger()\">{{cpasswordStatus}}</span>\n                <input type=\"password\" class=\"form-control\" id=\"cpwd\" placeholder=\"Repeat password\" name=\"cpwd\" formControlName=\"cpwd\">\n                <div [@errorDisplay] *ngIf=\"cpasswordFlag\">\n                  <input class=\"form-control\" type=\"text\" [value]=\"registerForm.get('password.cpwd').value\" disabled>\n                </div>\n                <div [@errorDisplay] *ngIf=\"!registerForm.get('password').valid && registerForm.get('password.cpwd').touched\" class=\"alert alert-danger\">\n                    <strong>Passwords not matched.</strong>\n                  </div>\n              </div>\n            </div>\n        \n            <button [disabled]=\"!registerForm.valid\" type=\"submit\" class=\"btn btn-default\">Sign Up</button>\n            <a class=\"pull-right\" routerLink=\"/login\">Already a user?</a>\n          </form>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 763:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 764:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(424);


/***/ })

},[764]);
//# sourceMappingURL=main.bundle.map