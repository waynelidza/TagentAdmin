import { IonicModule, NavController, NavParams, Platform } from "ionic-angular";
import { async, fakeAsync, getTestBed, TestBed, tick } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { LoginPage } from "./login";
import { NavParamsMock, PlatformMock, SplashScreenMock, StatusBarMock } from "../../../test-config/mocks-ionic";
import { IonicStorageModule } from "@ionic/storage";
import { HttpClientModule } from "@angular/common/http";
import { SystemProvider } from "../../providers/system/system";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
describe('Login Page', function () {
    var de;
    var comp;
    var fixture;
    beforeEach(async(function () {
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
                SystemProvider,
                NavController,
                { provide: StatusBar, useClass: StatusBarMock },
                { provide: SplashScreen, useClass: SplashScreenMock },
                { provide: Platform, useClass: PlatformMock },
                { provide: NavParams, useClass: NavParamsMock },
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
        expect(formlogin.length).toBe(1, 'Could , not find Form login element');
    }));
});
//# sourceMappingURL=login.component.spec.js.map