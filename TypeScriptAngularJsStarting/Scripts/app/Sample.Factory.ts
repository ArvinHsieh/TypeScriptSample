module SampleApp.Factories {
    export interface ISampleFactory {
        Sum: (a: number, b: number) => number;
    }
    export class SampleFactory {
        static $inject = ["$timeout"];
        static ServiceFactory(
            $timeout: ng.ITimeoutService): ISampleFactory {
            return {
                Sum(a: number, b: number): number {
                    return parseInt(a.toString()) +
                        parseInt(b.toString());
                }
            };
        }
    }
}

SampleApp.RegisterAngular.RegisterFactory(
    "SampleFactory",
    SampleApp.Factories.SampleFactory.ServiceFactory);