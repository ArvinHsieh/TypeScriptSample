var SampleApp;
(function (SampleApp) {
    var RegisterAngular = (function () {
        function RegisterAngular() {
        }
        RegisterAngular.RegisterDirective = function (name, service) {
            angular.module("SampleApp.Directives").directive(name, service);
        };
        RegisterAngular.RegisterService = function (name, service) {
            angular.module("SampleApp.Services").service(name, service);
        };
        RegisterAngular.RegisterFactory = function (name, service) {
            angular.module("SampleApp.Factorys").factory(name, service);
        };
        RegisterAngular.RegisterController = function (name, service) {
            angular.module("SampleApp.Controllers").controller(name, service);
        };
        return RegisterAngular;
    }());
    SampleApp.RegisterAngular = RegisterAngular;
    var appModules = [
        "SampleApp.Directives", "SampleApp.Controllers",
        "SampleApp.Services", "SampleApp.Factorys"
    ];
    var thirdpartyModules = [
        "angular.filter"
    ];
    appModules.forEach(function (module) { return angular.module(module, []); });
    appModules = appModules.concat(thirdpartyModules);
    angular.module("SampleApp", appModules)
        .provider(SampleApp.ExceptionHandlerProvider.$name, SampleApp.ExceptionHandlerProvider);
})(SampleApp || (SampleApp = {}));
//# sourceMappingURL=App2.js.map