import { MyApp } from './app.component'
import { TestBed } from '@angular/core/testing'
import { IonicModule, Platform } from 'ionic-angular';
import {
    PlatformMock,
    StatusBarMock,
    SplashScreenMock
  } from '../../test-config/mocks-ionic';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


describe('AppComponent', () => {
    let fixture, component;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                MyApp
            ],
            imports: [
                IonicModule.forRoot(MyApp)
            ],
            providers: [
                { provide: Platform, useClass: PlatformMock },
                { provide: StatusBar, useClass: StatusBarMock},
                { provide: SplashScreen, useClass: SplashScreenMock }
            ]
        })

        fixture = TestBed.createComponent(MyApp);
        component = fixture.componentInstance;
    })

    it('should create the app',() => {
        expect(component).toBeTruthy();
      });

})