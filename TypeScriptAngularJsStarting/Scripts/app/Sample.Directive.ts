module SampleApp.Directives {

    export class MyDirective {
        static $inject = [MyDirective.DirectiveFactory];
        static DirectiveFactory(): ng.IDirective {
            return {
                restrict: "A",
                link: (scope, element, attrs) => {
                    // do something...
                    scope.$on("destroy", () => {
                    });
                }
            }
        }
    }

}

SampleApp.RegisterAngular.RegisterDirective(
    "myDirective",
    SampleApp.Directives.MyDirective.$inject);

