module SampleApp {
    export class RegisterAngular {
        public static RegisterDirective(name: string, service: Array<any>): void {
            angular.module("SampleApp.Directives").directive(name, service);
        }
        public static RegisterService(name: string, service: Function): void {
            angular.module("SampleApp.Services").service(name, service);
        }
        public static RegisterFactory(name: string, service: Function): void {
            angular.module("SampleApp.Factorys").factory(name, service);
        }
        public static RegisterController(name: string, service: Function): void {
            angular.module("SampleApp.Controllers").controller(name, service);
        }
    }

    let appModules =
        [
            "SampleApp.Directives", "SampleApp.Controllers",
            "SampleApp.Services", "SampleApp.Factorys"
        ];

    let thirdpartyModules =
        [
            "angular.filter"
        ];

    appModules.forEach((module: string) => angular.module(module, []));
    appModules = appModules.concat(thirdpartyModules);
    angular.module("SampleApp", appModules)
        .provider(ExceptionHandlerProvider.$name, ExceptionHandlerProvider);

}


