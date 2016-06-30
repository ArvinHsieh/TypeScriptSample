var SampleApp;
(function (SampleApp) {
    var Services;
    (function (Services) {
        var SampleSvc = (function () {
            function SampleSvc() {
            }
            SampleSvc.prototype.Sum = function (a, b) {
                return parseInt(a.toString()) + parseInt(b.toString());
            };
            return SampleSvc;
        }());
        Services.SampleSvc = SampleSvc;
    })(Services = SampleApp.Services || (SampleApp.Services = {}));
})(SampleApp || (SampleApp = {}));
SampleApp.RegisterAngular.RegisterService("SampleSvc", SampleApp.Services.SampleSvc);
//# sourceMappingURL=Sample.Service.js.map