var SampleApp;
(function (SampleApp) {
    var SampleSvc = (function () {
        function SampleSvc() {
        }
        SampleSvc.prototype.Sum = function (a, b) {
            return parseInt(a.toString()) + parseInt(b.toString());
        };
        return SampleSvc;
    }());
    SampleApp.SampleSvc = SampleSvc;
    var SampleCtrl = (function () {
        function SampleCtrl($scope, sampleSvc) {
            this.scope = $scope;
            this.scope.sampleSvc = sampleSvc;
            this.scope.model = {
                A: 0,
                B: 0,
                Result: 0
            };
            this.scope.DoSomething = this.DoSomething;
        }
        SampleCtrl.prototype.DoSomething = function () {
            var scope = this;
            scope.model.Result = scope.sampleSvc.Sum(scope.model.A, scope.model.B);
        };
        SampleCtrl.$inject = ["$scope", "SampleSvc"];
        return SampleCtrl;
    }());
    SampleApp.SampleCtrl = SampleCtrl;
    var modules = ["angular.filter"];
    angular.module("SampleApp", modules)
        .service("SampleSvc", SampleSvc)
        .controller("SampleCtrl", SampleCtrl);
})(SampleApp || (SampleApp = {}));
//# sourceMappingURL=App.js.map