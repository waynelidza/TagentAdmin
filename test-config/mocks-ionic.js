var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
var PlatformMock = (function () {
    function PlatformMock() {
    }
    PlatformMock.prototype.ready = function () {
        return new Promise(function (resolve) {
            resolve('READY');
        });
    };
    PlatformMock.prototype.getQueryParam = function () {
        return true;
    };
    PlatformMock.prototype.registerBackButtonAction = function (fn, priority) {
        return (function () { return true; });
    };
    PlatformMock.prototype.hasFocus = function (ele) {
        return true;
    };
    PlatformMock.prototype.doc = function () {
        return document;
    };
    PlatformMock.prototype.is = function () {
        return true;
    };
    PlatformMock.prototype.getElementComputedStyle = function (container) {
        return {
            paddingLeft: '10',
            paddingTop: '10',
            paddingRight: '10',
            paddingBottom: '10',
        };
    };
    PlatformMock.prototype.onResize = function (callback) {
        return callback;
    };
    PlatformMock.prototype.registerListener = function (ele, eventName, callback) {
        return (function () { return true; });
    };
    PlatformMock.prototype.win = function () {
        return window;
    };
    PlatformMock.prototype.raf = function (callback) {
        return 1;
    };
    PlatformMock.prototype.timeout = function (callback, timer) {
        return setTimeout(callback, timer);
    };
    PlatformMock.prototype.cancelTimeout = function (id) {
        // do nothing
    };
    PlatformMock.prototype.getActiveElement = function () {
        return document['activeElement'];
    };
    return PlatformMock;
}());
export { PlatformMock };
var StatusBarMock = (function (_super) {
    __extends(StatusBarMock, _super);
    function StatusBarMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StatusBarMock.prototype.styleDefault = function () {
        return;
    };
    return StatusBarMock;
}(StatusBar));
export { StatusBarMock };
var SplashScreenMock = (function (_super) {
    __extends(SplashScreenMock, _super);
    function SplashScreenMock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SplashScreenMock.prototype.hide = function () {
        return;
    };
    return SplashScreenMock;
}(SplashScreen));
export { SplashScreenMock };
var FormMock = (function () {
    function FormMock() {
    }
    FormMock.prototype.register = function () {
        return true;
    };
    return FormMock;
}());
export { FormMock };
var AppMock = (function () {
    function AppMock() {
    }
    AppMock.prototype.getRootNav = function () {
        return new NavMock();
    };
    return AppMock;
}());
export { AppMock };
var NavMock = (function () {
    function NavMock() {
    }
    NavMock.prototype.pop = function () {
        return new Promise(function (resolve) {
            resolve();
        });
    };
    NavMock.prototype.push = function () {
        return new Promise(function (resolve) {
            resolve();
        });
    };
    NavMock.prototype.getActive = function () {
        return {
            'instance': {
                'model': 'something',
            },
        };
    };
    NavMock.prototype.setRoot = function () {
        return true;
    };
    NavMock.prototype.registerChildNav = function (nav) {
        return;
    };
    return NavMock;
}());
export { NavMock };
var NavParamsMock = (function () {
    function NavParamsMock() {
        this.returnParams = {};
    }
    NavParamsMock.prototype.get = function (key) {
        if (this.returnParams[key]) {
            return this.returnParams[key];
        }
    };
    NavParamsMock.prototype.setParams = function (key, value) {
        this.returnParams[key] = value;
    };
    return NavParamsMock;
}());
export { NavParamsMock };
var ViewControllerMock = (function () {
    function ViewControllerMock() {
        this.readReady = {
            emit: function () {
            },
            subscribe: function () {
            }
        };
        this.writeReady = {
            emit: function () {
            },
            subscribe: function () {
            }
        };
    }
    ViewControllerMock.prototype.contentRef = function () {
        return new Promise(function (resolve) {
            resolve();
        });
    };
    ViewControllerMock.prototype.didEnter = function () {
        return new Promise(function (resolve) {
            resolve();
        });
    };
    ViewControllerMock.prototype.didLeave = function () {
        return new Promise(function (resolve) {
            resolve();
        });
    };
    ViewControllerMock.prototype.onDidDismiss = function () {
        return new Promise(function (resolve) {
            resolve();
        });
    };
    ViewControllerMock.prototype.onWillDismiss = function () {
        return new Promise(function (resolve) {
            resolve();
        });
    };
    ViewControllerMock.prototype.willEnter = function () {
        return new Promise(function (resolve) {
            resolve();
        });
    };
    ViewControllerMock.prototype.willLeave = function () {
        return new Promise(function (resolve) {
            resolve();
        });
    };
    ViewControllerMock.prototype.willUnload = function () {
        return new Promise(function (resolve) {
            resolve();
        });
    };
    ViewControllerMock.prototype.dismiss = function () {
        return true;
    };
    ViewControllerMock.prototype.enableBack = function () {
        return true;
    };
    ViewControllerMock.prototype.getContent = function () {
        return true;
    };
    ViewControllerMock.prototype.hasNavbar = function () {
        return true;
    };
    ViewControllerMock.prototype.index = function () {
        return true;
    };
    ViewControllerMock.prototype.isFirst = function () {
        return true;
    };
    ViewControllerMock.prototype.isLast = function () {
        return true;
    };
    ViewControllerMock.prototype.pageRef = function () {
        return true;
    };
    ViewControllerMock.prototype.setBackButtonText = function () {
        return true;
    };
    ViewControllerMock.prototype.showBackButton = function () {
        return true;
    };
    ViewControllerMock.prototype._setHeader = function () {
        return true;
    };
    ViewControllerMock.prototype._setIONContent = function () {
        return true;
    };
    ViewControllerMock.prototype._setIONContentRef = function () {
        return true;
    };
    ViewControllerMock.prototype._setNavbar = function () {
        return true;
    };
    ViewControllerMock.prototype._setContent = function () {
        return true;
    };
    ViewControllerMock.prototype._setContentRef = function () {
        return true;
    };
    ViewControllerMock.prototype._setFooter = function () {
        return true;
    };
    return ViewControllerMock;
}());
export { ViewControllerMock };
var LoadingComponentMock = (function () {
    function LoadingComponentMock() {
    }
    LoadingComponentMock.prototype.present = function () { return Promise.resolve(true); };
    LoadingComponentMock.prototype.dismiss = function () { return Promise.resolve(true); };
    return LoadingComponentMock;
}());
export { LoadingComponentMock };
var LoadingControllerMock = (function () {
    function LoadingControllerMock() {
    }
    LoadingControllerMock.prototype.create = function () {
        return new LoadingComponentMock();
    };
    return LoadingControllerMock;
}());
export { LoadingControllerMock };
var AlertComponentMock = (function () {
    function AlertComponentMock() {
    }
    AlertComponentMock.prototype.present = function () { };
    AlertComponentMock.prototype.dismiss = function () { };
    return AlertComponentMock;
}());
export { AlertComponentMock };
var AlertControllerMock = (function () {
    function AlertControllerMock() {
    }
    AlertControllerMock.prototype.create = function () {
        return new AlertComponentMock();
    };
    return AlertControllerMock;
}());
export { AlertControllerMock };
var MenuMock = (function () {
    function MenuMock() {
    }
    MenuMock.prototype.close = function () {
        return new Promise(function (resolve) {
            resolve();
        });
    };
    return MenuMock;
}());
export { MenuMock };
var ModalComponentMock = (function () {
    function ModalComponentMock() {
    }
    ModalComponentMock.prototype.present = function () { };
    ModalComponentMock.prototype.dismiss = function () { };
    return ModalComponentMock;
}());
var ModalControllerMock = (function () {
    function ModalControllerMock() {
    }
    ModalControllerMock.prototype.create = function (page) {
        return new ModalComponentMock();
    };
    return ModalControllerMock;
}());
export { ModalControllerMock };
var DeepLinkerMock = (function () {
    function DeepLinkerMock() {
    }
    return DeepLinkerMock;
}());
export { DeepLinkerMock };
//# sourceMappingURL=mocks-ionic.js.map