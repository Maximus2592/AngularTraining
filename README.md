Angular11
----------------------------------------------------

    Pre-Requsite
    --------------------------
        HTML 5
                Form elements and validations
                Standard HTML Layout
                HTML 5 API
                    WebStorage
                    Web Workers

        Javascript (ES6)
                Object, Date, String,MAth,Window,Global,Location
                setInterval,clearInteval,alert,confimr
                Arrays and Array prototype functions
                Function closures, Call backs, Arrow Functions,IIFE
                Promise, async and awit
                spread operator, tmepalte literals, destructred assignment
                Class and Objects and ES6 Modules (esm)

        CSS and bootstrap

    Web Evolution
    -----------------------------------------------------------------

        Static Web Site
                        
            a collecion of html documents called web pages.

        Dynamic Web Application

            the html content of a page is generated dynamically by a server-side program.
            And that program get activated once the server on which it is hosted
            receives a relavent request.


            Server                                                                      Client
                servlets + JSP      <------------REQ (URL)----------------------------
                ASP.Net + aspx      -----RESP(dynamically generated html +css +js)--->


        SPA - Single Page Application
        -------------------------------------------------------------------------

            the entire web applciation will have only one single page


            Server                                                                      Client

                SPA - Single Page Applciation  <----------First REQ(URL)-------------
                    SPA Bundle                  --------RESP(SPA bundle)----------------> index.html is laoded and
                        index.html                                                          loads the relevent .js files
                        CSS                                                               Those .js file will define
                        JS                                                              the content of the index.html


                SOA - Service Oriented Applciation

                    WebServices
                        SOAP
                        RESTful API             <---------------REQ-------------------------
                                                -----------RESP(data as xml/json)-----------> the js funning here will
                                                                                        receive the data dn will manipulate DOM to present that data on the apge.


    Angular 
    -------------------------------------------------------------------------------------------------------------------

        is a javascript based SPA framework.

        angularjs                   used javascript for scripting the SPA
        
        Angular2                    used typescript as a spcripting language
        Angular4
        Angular5
        Angular6
        Angular7
        Angular8
        Angular9
        Angular10
        Angular11

        TypeScript  = Javascript(ES6) + type safety

        that typescript must be transpelled into native JS before the app is hosted on dev server/rpod server

    NodeJS
    -------------------------------------------------------------------------------------------------------------

        is a execution environment for Javascript enable it to execute without a browser .

        Develop a UI/UX applciation:
            1. create the application with the proper project strucutre
            2. install or uninstall (Manage) all the thrid paryt dependencies including the SPA framework/lib
            3. a lot of project related taksa like transpelling, debugging, building, packaging, hosteing, testing...


        to do all those operation we need standalone executing ajvascipt tools
            npm     for project dependency managment
            jest    for testing
            babel   for transpelling        ...etc

        to execute these tools we need NodeJS.

   Lab Setup
   ----------------------------------------------------------------------------------------------

            NodeJS              the execution platform for development tools
                                    node --version
                                    npm --version               

            VSCode              as an IDE
            Angular CLI         is a project struycture managment tool that is used to 
                                create or remove or mange a an angular resource.

                                    npm install -g @angular/cli@latest

                                    ng --version


    Angular Archetecture
    ------------------------------------------------------------------------------------------------------

            any angular resource is a typescript class that is
            marked with a relevent decorator, the decorators will
            take a JSON object as a param whihc contins the configuaration
            fields releent to the resource being defined. And those JSON objects
            are called meta-data.

        Modules
                    @NgModule({ 
                        declarations:[],
                        imports:[],
                        exports:[],
                        providers:[],
                        bootstrap:[]
                    })
                    export class MyModule{}

        Components
                    @Component({
                        selector:'',
                        templateUrl:'',
                        providers:[]
                    })
                    export class MyComponent{}

        Directives
                    @Directive({ 
                        selector:'',
                        providers:[]
                    })
                    export class Directive{}

        Pipes
                    @Pipe({
                        name:'',
                        providers:[]
                    })
                    export class MyPipe{}

        Services
                    @Injectable({
                        providedIn:'root'
                    })
                    export class MyServive{}

        Routes
        Gaurds
        Interceptors
        




