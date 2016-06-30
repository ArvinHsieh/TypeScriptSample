module SampleApp {
    export class SampleSvc {
        public Sum(a: number, b: number): number {
            return parseInt(a.toString()) + parseInt(b.toString());
        }
    }

    export interface ISampleCtrlScope extends ng.IScope {
        sampleSvc: SampleSvc;
        model: { A: number, B: number, Result: number };
        DoSomething: () => void;
    }

    export class SampleCtrl {
        static $inject = ["$scope", "SampleSvc"];
        private scope: ISampleCtrlScope;

        constructor($scope: ISampleCtrlScope, sampleSvc: SampleSvc) {
            this.scope = $scope;
            this.scope.sampleSvc = sampleSvc;
            this.scope.model = {
                A: 0,
                B: 0,
                Result: 0
            };
            this.scope.DoSomething = this.DoSomething;
        }

        public DoSomething(): void {
            let scope: ISampleCtrlScope = <any>this;
            scope.model.Result = scope.sampleSvc.Sum(
                scope.model.A, scope.model.B);
        }
    }

    let modules = ["angular.filter"];
    angular.module("SampleApp", modules)
        .service("SampleSvc", SampleSvc)
        .controller("SampleCtrl", SampleCtrl);
}