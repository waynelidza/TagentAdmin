import { async, TestBed } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyApp } from './app.component';
import { PlatformMock, StatusBarMock, SplashScreenMock } from '../../test-config/mocks-ionic';
import { LoginPage } from "../pages/login/login";
describe('MyApp Component', function () {
    var fixture;
    var component;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [MyApp],
            imports: [
                IonicModule.forRoot(MyApp)
            ],
            providers: [
                { provide: StatusBar, useClass: StatusBarMock },
                { provide: SplashScreen, useClass: SplashScreenMock },
                { provide: Platform, useClass: PlatformMock }
            ]
        });
    }));
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [MyApp],
            providers: [],
            imports: [
                IonicModule.forRoot(MyApp)
            ]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(MyApp);
        component = fixture.componentInstance;
    });
    afterEach(function () {
        fixture.destroy();
        component = null;
    });
    it('is created', function () {
        expect(fixture).toBeTruthy();
        expect(component).toBeTruthy();
    });
    it('initialises with a root page of LoginPage', function () {
        expect(component['rootPage']).toBe(LoginPage);
    });
});
//# sourceMappingURL=app.component.spec.js.map