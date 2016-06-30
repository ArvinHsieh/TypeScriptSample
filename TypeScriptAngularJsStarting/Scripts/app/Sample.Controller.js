var SampleApp;
(function (SampleApp) {
    var Controllers;
    (function (Controllers) {
        var SampleCtrl = (function () {
            function SampleCtrl(sampleSvc, sampleFactory) {
                this.sampleSvc = sampleSvc;
                this.sampleFactory = sampleFactory;
                this.model = {
                    A: 0,
                    B: 0,
                    Result: 0
                };
            }
            SampleCtrl.prototype.DoSomething = function () {
                this.model.Result = this.sampleSvc
                    .Sum(this.model.A, this.model.B);
            };
            SampleCtrl.$inject = ["SampleSvc", "SampleFactory"];
            return SampleCtrl;
        }());
        Controllers.SampleCtrl = SampleCtrl;
    })(Controllers = SampleApp.Controllers || (SampleApp.Controllers = {}));
})(SampleApp || (SampleApp = {}));
SampleApp.RegisterAngular.RegisterController("SampleCtrl", SampleApp.Controllers.SampleCtrl);
//# sourceMappingURL=Sample.Controller.js.map