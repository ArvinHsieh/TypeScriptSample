var SampleApp;
(function (SampleApp) {
    var ExceptionHandlerProvider = (function () {
        function ExceptionHandlerProvider() {
        }
        ExceptionHandlerProvider.prototype.mode = function (mode) {
            // set mode is log or rethorw
        };
        ExceptionHandlerProvider.prototype.$get = function ($injector) {
            return function (exception, cause) {
                console.error(exception);
            };
        };
        ExceptionHandlerProvider.$name = "$exceptionHandler";
        return ExceptionHandlerProvider;
    }());
    SampleApp.ExceptionHandlerProvider = ExceptionHandlerProvider;
})(SampleApp || (SampleApp = {}));
//# sourceMappingURL=Sample.Provider.js.map