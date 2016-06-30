var SampleApp;
(function (SampleApp) {
    var Directives;
    (function (Directives) {
        var MyDirective = (function () {
            function MyDirective() {
            }
            MyDirective.DirectiveFactory = function () {
                return {
                    restrict: "A",
                    link: function (scope, element, attrs) {
                        // do something...
                        scope.$on("destroy", function () {
                        });
                    }
                };
            };
            MyDirective.$inject = [MyDirective.DirectiveFactory];
            return MyDirective;
        }());
        Directives.MyDirective = MyDirective;
    })(Directives = SampleApp.Directives || (SampleApp.Directives = {}));
})(SampleApp || (SampleApp = {}));
SampleApp.RegisterAngular.RegisterDirective("myDirective", SampleApp.Directives.MyDirective.$inject);
//# sourceMappingURL=Sample.Directive.js.map