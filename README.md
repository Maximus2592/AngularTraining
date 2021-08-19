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
    --------------------------------------------------------------------------------------------------------------

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

    Angular CLI
    ------------------------------------------------------------------------------------------------------

        is a development utility tool that helps in 
        creating and managing a angular project and its resources.

        ng new proj-name

        cd proj-name

        ng g component component-name
        ng g service service-name
        ng g module module-name
        ng g pipe pipe-name
        ng g guard guard-name
        ng g class class-name
        ng g interface interface-name

        ng serve --port portNumber -o              is used to compile and exe the proj in dev mode

        ng build --prod                             is used to create a deployable bundle 
                                                    to be deployed on prod server

        ng test                                     is used to execute test cases.
    
    Angular Archetecture
    ------------------------------------------------------------------------------------------------------

            any angular resource is a typescript class that is
            marked with a relevent decorator, the decorators will
            take a JSON object as a param whihc contins the configuaration
            fields releent to the resource being defined. And those JSON objects
            are called meta-data.

        Modules
                    ES6 module are very different from angular modules

                    Angular Module is a a small logical unit of the angular applciation.
                    This module contains components, pipes, servives, directives
                    ..etc and sub-modules as well.

                    Each angular application must be inside one single module called
                    'root module' represented by app.module.ts file.

                    The root module cna furthur be organized into 
                    sub-moduel called 'feature modules', these feature modules
                    can be defiend by the developer or can be inbuilt or
                    can be of thrid party libraries.

                    @NgModule({ 
                        declarations:[
                            //list of components,pipes and directives
                            //that belong to this module
                        ],
                        imports:[
                            //list offeature modules thatmsut be imported
                        ],
                        exports:[
                            //list of components/pipes/directive that belong to this module
                            //and to be used in moduel that import the current module.
                        ],
                        providers:[
                            //list of services that must be injected into
                            //the current module
                        ],
                        bootstrap:[
                            //the list of component that must be
                            //instatiated immediatly after the current module is loaded.
                        ]
                    })
                    export class MyModule{}

        Components

                    the index.html (th only one page in a SPA), is
                    divided into small smart sections called Components.

                    Each component will have a template and a controller.
                            template is the html content this component must render.
                            controller is the script behind the template which
                                manages the data (state),
                                event handlling and all other procssing.

                    Each component is used as a new html element. That the
                    reason why we call that angular add extendability to html.

                    my.component.ts
                    -------------------------------------------
                    @Component({
                        selector:'my-component',
                        templateUrl:'my.component.html',
                        providers:[]
                    })
                    export class MyComponent{
                        welcomeText:string;
                        constructor(){
                            this.welcomeText="Hello Welcome all";
                        }
                    }

                    my.component.html
                    ---------------------------------------------
                        <h2>{{welcomeText}}</h1>

                    index.html
                    ----------------------------------------------
                     <body>
                        <my-component></my-component>
                     </body>


                     Data Binding
                     ----------------------------------------------
                        where the method and field of the controller
                        can be linked witht he elements in the
                        template.

                        as and when the value of the fields are modified,
                        the content on the template also gets updated due to the
                        observe and bind feature of angular.

                        interpolation              
                             {{expression}}

                        one-way data binding
                            an attribute of an element is boudn with a field.
                            so that the value of the field is assigned to the attribute.

                            <element attribute="value">content..</element>

                            <element [attribute]="expression">content..</element>
                            
                        event binding
                            assignign a mehtod to a event, so that the method gets 
                            executed when the event fires...

                            (event)="method()"

                            angular event directive = html evetn - 'on'

                                onClick         click
                                onDblClick      dblClick
                                onBlur          blur
                                onChange        change
                                onSubmit        ngSubmit


                        two-way data binding
                     
                        style binding



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
        




