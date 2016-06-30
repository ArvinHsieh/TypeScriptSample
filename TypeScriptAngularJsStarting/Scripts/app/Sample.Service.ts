module SampleApp.Services {

    export interface ISampleSvc {
        Sum: (a: number, b: number) => number;
    }

    export class SampleSvc implements ISampleSvc {

        public Sum(a: number, b: number): number {
            return parseInt(a.toString()) + parseInt(b.toString());
        }
    }

}

SampleApp.RegisterAngular.RegisterService(
    "SampleSvc", SampleApp.Services.SampleSvc);

