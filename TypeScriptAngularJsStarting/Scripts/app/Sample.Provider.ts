module SampleApp {

    export class ExceptionHandlerProvider implements ng.IExceptionHandlerProvider {
        static $name = "$exceptionHandler";

        public mode(mode: string): void {
            // set mode is log or rethorw
        }

        public $get($injector) {
            return (exception, cause) => {
                console.error(exception);
            };
        }
    }

}