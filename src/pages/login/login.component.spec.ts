import {DeepLinker, IonicModule, LoadingController, NavController, NavParams, Platform} from "ionic-angular";
import {DebugElement} from "@angular/core";
import {async, ComponentFixture, fakeAsync, getTestBed, TestBed, tick} from "@angular/core/testing";
import {Page1} from "../page1/page1";
import {By} from "@angular/platform-browser";
import {LoginPage} from "./login";
import {
  DeepLinkerMock,
  NavMock,
  NavParamsMock, PlatformMock,
  SplashScreenMock,
  StatusBarMock
} from "../../../test-config/mocks-ionic";
import {IonicStorageModule} from "@ionic/storage";
import {HttpClientModule} from "@angular/common/http";
import {SystemProvider} from "../../providers/system/system";
import {SplashScreen} from "@ionic-native/splash-screen";
import {StatusBar} from "@ionic-native/status-bar";



describe('Login Page', () => {
  let de: DebugElement;
  let comp: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(async(() => {
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
        {provide: NavParams, useClass: NavParamsMock},
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPage);
    comp = fixture.componentInstance;
  });

  it('should create component', () => {
    expect(comp instanceof LoginPage).toBe(true);

});

  it(' - Should load the Login Form', fakeAsync(() => {

    let thisComponent = getTestBed().createComponent(LoginPage);




    tick();
    thisComponent.detectChanges();

    let formlogin = thisComponent.debugElement.queryAll(By.css('#formlogin'));
    expect(formlogin.length).toBe(1, 'Could , not find Form login element');



  }));

});
