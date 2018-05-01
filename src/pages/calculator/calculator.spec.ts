import { CalculatorPage } from './calculator'
import { TestBed } from '@angular/core/testing'
import { IonicPageModule, Platform, NavController, NavParams, Config,
App, DomController, Keyboard } from 'ionic-angular';
import {
    PlatformMock,
    StatusBarMock,
    SplashScreenMock
} from '../../../test-config/mocks-ionic';
import { NavControllerMock, NavParamsMock, ConfigMock, Key } from 'ionic-mocks'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


describe('AppComponent', () => {
    let fixture, component;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                CalculatorPage
            ],
            imports: [
                IonicPageModule.forChild(CalculatorPage)
            ],
            providers: [
                { provide: Platform, useClass: PlatformMock },
                { provide: StatusBar, useClass: StatusBarMock },
                { provide: SplashScreen, useClass: SplashScreenMock },
                { provide: NavController, useFactory: () => NavControllerMock.instance() },
                { provide: NavParams, useFactory: () => NavParamsMock.instance() },
                { provide: Config, useFactory: () => ConfigMock.instance() },
                App, DomController, Keyboard
            ]
        })

        fixture = TestBed.createComponent(CalculatorPage);
        component = fixture.componentInstance;
    })

    it('should create the calculator page', () => {
        expect(component).toBeTruthy();
    });

})