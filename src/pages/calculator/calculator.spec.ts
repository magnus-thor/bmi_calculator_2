import { CalculatorPage } from './calculator'
import { TestBed } from '@angular/core/testing'
import { IonicPageModule, Platform, NavController, NavParams, Config,
App, DomController, Keyboard, GestureController, Form } from 'ionic-angular';
// import {
//     PlatformMock,
//     StatusBarMock,
//     SplashScreenMock
// } from '../../../test-config/mocks-ionic';
import { PlatformMock, StatusBarMock, SplashScreenMock, NavControllerMock, NavParamsMock, ConfigMock, KeyboardMock, FormMock } from 'ionic-mocks'
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
                { provide: Platform, useFactory: () => PlatformMock.instance() },
                { provide: StatusBar, useFactory: () => StatusBarMock.instance() },
                { provide: SplashScreen, useFactory: () => SplashScreenMock.instance() },
                { provide: NavController, useFactory: () => NavControllerMock.instance() },
                { provide: NavParams, useFactory: () => NavParamsMock.instance() },
                { provide: Config, useFactory: () => ConfigMock.instance() },
                { provide: Keyboard, useFactory: () => KeyboardMock.instance() },
                { provide: Form, useFactory: () => FormMock.instance() },
                App, DomController, GestureController
            ]
        })

        fixture = TestBed.createComponent(CalculatorPage);
        component = fixture.componentInstance;
    })

    it('should create the calculator page', () => {
        expect(component).toBeTruthy();
        expect(component instanceof CalculatorPage).toEqual(true);
    });

    it('calculateBMI', () => {
        spyOn(component, 'setBMIMessage')
        component.weight = 90;
        component.height = 186;
        component.calculateBMI();

        expect(component.bmiValue).toEqual(26.01);
        expect(component.setBMIMessage).toHaveBeenCalled
    });

    it('setBMIMessage if bmiValue is under 18.5', () => {
        component.bmiValue = 18;
        component.setBMIMessage();

        expect(component.bmiMessage).toEqual('Underweight')
    });
    
    it('setBMIMessage if bmiValue is over 18.5 and under 25', () => {
        component.bmiValue = 22;
        component.setBMIMessage();

        expect(component.bmiMessage).toEqual('Normal')
    });

    it('setBMIMessage if bmiValue is over 25 and under 30', () => {
        component.bmiValue = 27;
        component.setBMIMessage();

        expect(component.bmiMessage).toEqual('Overweight')
    });

    it('setBMIMessage if bmiValue is over 30', () => {
        component.bmiValue = 31;
        component.setBMIMessage();

        expect(component.bmiMessage).toEqual('Obese')
    });

})