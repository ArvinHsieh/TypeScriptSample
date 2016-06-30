var SampleApp;
(function (SampleApp) {
    var SampleSvc = (function () {
        function SampleSvc() {
        }
        SampleSvc.prototype.Sum = function (a, b) {
            return parseInt(a.toString()) + parseInt(b.toString());
        };
        return SampleSvc;
    })();
    SampleApp.SampleSvc = SampleSvc;
    var SampleCtrl = (function () {
        function SampleCtrl(sampleSvc) {
            this.sampleSvc = sampleSvc;
            this.model = {
                A: 0,
                B: 0,
                Result: 0
            };
        }
        SampleCtrl.prototype.DoSomething = function () {
            this.model.Result = this.sampleSvc.Sum(this.model.A, this.model.B);
        };
        SampleCtrl.$inject = ["SampleSvc"];
        return SampleCtrl;
    })();
    SampleApp.SampleCtrl = SampleCtrl;
    var modules = ["angular.filter"];
    angular.module("SampleApp", modules)
        .service("SampleSvc", SampleSvc)
        .controller("SampleCtrl", SampleCtrl);
})(SampleApp || (SampleApp = {}));
// /**
//* 啟動設定
//*/
// export class Config {
//     static $inject = ["$locationProvider", "$provide", "$compileProvider", "$httpProvider", "blockUIConfig"];
//     constructor($locationProvider: ng.ILocationProvider, $provide, $compileProvider, $httpProvider, blockUIConfig) {
//         // 設定 Ajax 請求攜帶 XMLHttpRequest Header
//         $httpProvider.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
//         $httpProvider.interceptors.push(Factorys.SubmitAutoDisableHttpInterceptor.$name);
//         // 設定 BlockUI
//         blockUIConfig.message = "Loading...";
//         blockUIConfig.autoBlock = false;
//     }
// }
// /**
//  * 自訂錯誤處理
//  */
// export class ExceptionHandlerProvider implements ng.IExceptionHandlerProvider {
//     static $name = "$exceptionHandler";
//     public mode(mode: string): void {
//         // set mode is log or rethorw
//     }
//     public $get($injector) {
//         return (exception, cause) => {
//             console.error(exception);
//         };
//     }
// }
// /**
//  * 註冊 Angular 各項服務
//  */
// export class RegisterAngular {
//     public static RegisterDirective(name: string, service: Array<any>): void {
//         angular.module("PermissionsManagement.Directives").directive(name, service);
//     }
//     public static RegisterDirectives(object: Object): void {
//         var classNames = Object.getOwnPropertyNames(object);
//         classNames.forEach((className: string) => {
//             this.RegisterDirective(object[className].$name, object[className].$inject);
//         });
//     }
//     public static RegisterService(name: string, service: Function): void {
//         angular.module("PermissionsManagement.Services").service(name, service);
//     }
//     public static RegisterFactory(name: string, service: Function): void {
//         angular.module("PermissionsManagement.Factorys").factory(name, service);
//     }
//     public static RegisterController(name: string, service: Function): void {
//         angular.module("PermissionsManagement.Controllers").controller(name, service);
//     }
// }
// /**
//  * 初始化 Angular Module
//  */
// let appModules =
//     [
//         "PermissionsManagement.Directives", "PermissionsManagement.Controllers", "PermissionsManagement.Services", "PermissionsManagement.Factorys"
//     ];
// let trirdpartyModules =
//     [
//         "angular.filter", "ngAnimate", "blockUI", "base64", "datePicker"
//     ];
// appModules.forEach((module: string) => angular.module(module, []));
// appModules = appModules.concat(trirdpartyModules);
// angular.module("PermissionsManagement", appModules)
//     .config(Config)
//     .provider(ExceptionHandlerProvider.$name, ExceptionHandlerProvider);
//# sourceMappingURL=App3.js.map