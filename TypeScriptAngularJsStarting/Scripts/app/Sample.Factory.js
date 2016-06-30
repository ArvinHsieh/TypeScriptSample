var SampleApp;
(function (SampleApp) {
    var Factories;
    (function (Factories) {
        var SampleFactory = (function () {
            function SampleFactory() {
            }
            SampleFactory.ServiceFactory = function ($timeout) {
                return {
                    Sum: function (a, b) {
                        return parseInt(a.toString()) +
                            parseInt(b.toString());
                    }
                };
            };
            SampleFactory.$inject = ["$timeout"];
            return SampleFactory;
        }());
        Factories.SampleFactory = SampleFactory;
    })(Factories = SampleApp.Factories || (SampleApp.Factories = {}));
})(SampleApp || (SampleApp = {}));
SampleApp.RegisterAngular.RegisterFactory("SampleFactory", SampleApp.Factories.SampleFactory.ServiceFactory);
//# sourceMappingURL=Sample.Factory.js.map