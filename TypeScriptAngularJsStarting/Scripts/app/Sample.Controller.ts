module SampleApp.Controllers {
    export interface ISampleViewModel {
        A: number;
        B: number;
        Result: number;
    }

    export interface ISampleCtrlScope extends ng.IScope {
        sampleSvc: Services.ISampleSvc;
        sampleFactory: Factories.ISampleFactory;
        model: { A: number, B: number, Result: number };
        DoSomething: () => void;
    }
}


module SampleApp.Controllers {

    export class SampleCtrl {
        static $inject = ["SampleSvc", "SampleFactory"];

        model: ISampleViewModel;
        sampleSvc: Services.ISampleSvc;
        sampleFactory: Factories.ISampleFactory;

        constructor(
            sampleSvc: Services.ISampleSvc,
            sampleFactory: Factories.ISampleFactory) {

            this.sampleSvc = sampleSvc;
            this.sampleFactory = sampleFactory;
            this.model = {
                A: 0,
                B: 0,
                Result: 0
            };
        }

        public DoSomething(): void {
            this.model.Result = this.sampleSvc
                .Sum(this.model.A, this.model.B);
        }
    }
}

SampleApp.RegisterAngular.RegisterController(
    "SampleCtrl", SampleApp.Controllers.SampleCtrl);