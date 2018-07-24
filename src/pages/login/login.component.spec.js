import { AlertController, IonicModule, LoadingController, NavController, NavParams, Platform, ViewController } from "ionic-angular";
import { async, fakeAsync, getTestBed, TestBed, tick } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { LoginPage } from "./login";
import { AlertControllerMock, LoadingControllerMock, NavMock, NavParamsMock, PlatformMock, SplashScreenMock, StatusBarMock, ViewControllerMock } from "../../../test-config/mocks-ionic";
import { IonicStorageModule } from "@ionic/storage";
import { HttpClientModule } from "@angular/common/http";
import { SystemProvider } from "../../providers/system/system";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
var LoginServiceMock = (function () {
    function LoginServiceMock() {
    }
    LoginServiceMock.prototype.Login = function () {
        return new Promise(function (resolve, reject) {
            var body = {
                'Token': 'wayne',
            };
            resolve(body);
        });
    };
    return LoginServiceMock;
}());
describe('Login Page', function () {
    var de;
    var comp;
    var fixture;
    beforeEach(async(function () {
        var mockService = new LoginServiceMock();
        TestBed.configureTestingModule({
            declarations: [LoginPage],
            imports: [
                IonicModule.forRoot(LoginPage),
                HttpClientModule,
                IonicStorageModule.forRoot({
                    name: '__mydb',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                }),
            ],
            providers: [
                Storage,
                { provide: StatusBar, useClass: StatusBarMock },
                { provide: SystemProvider, useValue: mockService },
                { provide: SplashScreen, useClass: SplashScreenMock },
                { provide: Platform, useClass: PlatformMock },
                { provide: NavParams, useClass: NavParamsMock },
                { provide: ViewController, useClass: ViewControllerMock },
                { provide: LoadingController, useClass: LoadingControllerMock },
                { provide: AlertController, useClass: AlertControllerMock },
                { provide: NavController, useClass: NavMock }
            ]
        });
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(LoginPage);
        comp = fixture.componentInstance;
    });
    it('should create component', function () {
        expect(comp instanceof LoginPage).toBe(true);
    });
    it(' - Should load the Login Form', fakeAsync(function () {
        var thisComponent = getTestBed().createComponent(LoginPage);
        tick();
        thisComponent.detectChanges();
        var formlogin = thisComponent.debugElement.queryAll(By.css('#formlogin'));
        var inputUsername = thisComponent.debugElement.queryAll(By.css('#username'));
        var inputPassword = thisComponent.debugElement.queryAll(By.css('#password'));
        var btnlogin = thisComponent.debugElement.queryAll(By.css('#btnlogin'));
        expect(formlogin.length).toBe(1, 'Could , not find Form login element');
        expect(inputUsername.length).toBe(1, 'Could , not find inputUsername element');
        expect(inputPassword.length).toBe(1, 'Could , not find inputPassword element');
        expect(btnlogin.length).toBe(1, 'Could , not find button Login element');
    }));
    it(' - Should  set the validation message when all fields are empty', fakeAsync(function () {
        var thisComponent = getTestBed().createComponent(LoginPage);
        thisComponent.componentInstance.Login();
        tick();
        expect(thisComponent.componentInstance.alertmessage).toBe('Username and password cannot be blank', 'Could , not set the correct meaasge');
        expect(thisComponent.componentInstance.varcounterrorLogin).toBe(2, 'the variable   should be equal to 2');
    }));
    it(' - Should  pass validation and move,the root page should be changed to MainPage', fakeAsync(function () {
        var navCtrl = fixture.debugElement.injector.get(NavController);
        var thisComponent = getTestBed().createComponent(LoginPage);
        thisComponent.componentInstance.login.password = 'wayne';
        thisComponent.componentInstance.login.username = 'ss';
        thisComponent.componentInstance.Login();
        tick();
        expect(thisComponent.componentInstance.alertmessage).toBe('', 'alertmessage should be blank ');
        expect(thisComponent.componentInstance.varcounterrorLogin).toBe(0, 'the variable   should be equal to 0');
        expect(thisComponent.componentInstance.token).toBe('wayne', 'the token name should be wayne');
        expect(navCtrl.setRoot).toHaveBeenCalledWith('MainPage');
    }));
});
//# sourceMappingURL=login.component.spec.js.map