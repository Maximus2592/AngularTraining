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

                            is needed to assign initial values to a form-element 
                            and also to receive the value edited in the form-element.

                            ngModel ----------> FormsModule

                            [(ngModel)]="field"
                     
                        style binding

                            [style.cssProperty]="field"

                            [class]="{'class-name':flag1,'class-name2':flag2}"

        Directives
                    is a attribute defiend using angular.

                    in-built directives

                        ngModel
                        click
                        blur
                        ....etc

                    structural directives

                        <element *ngIf="booleanExpression"></element>

                        <element *ngFor="let val of array"></element>

                        <element ngSwitch="expression">
                            <subElement *ngSwitchCase="'val1'"></element>
                            <subElement *ngSwitchCase="'val1'"></element>
                            <subElement *ngSwitchCase="'val1'"></element>
                            <subElement *ngSwitchCase="'val1'"></element>
                        </element>

                    user-defined directives

                        @Directive({ 
                            selector:'',
                            providers:[]
                        })
                        export class Directive{}

        Pipes
                    is an instrument used to tranform a peice of data just before rendering
                    it on the screen.

                    in-built pipes

                        uppercase
                        lowercase
                        titlecase

                        number
                        percent
                        currency
                        date

                        json
                        async

                    user-defiend-pipes
                        @Pipe({
                            name:'',
                            providers:[]
                        })
                        export class MyPipe implements Transform{
                            transform(){
                                //........
                            }
                        }

        Services
                    @Injectable({
                        providedIn:'root'
                    })
                    export class MyServive{}
        Routes
        Gaurds
        Interceptors
        
    Integrating Bootstrap
    ------------------------------------------------------------------------

        npm install bootstrap@4.0.0 --save

        include the bootstrap.min.css in angular.json file

    Typescript Interfaces as Models
    ------------------------------------------------------------------------

        typescript interface can hold data members and method declaration (methods with no implementation)

        interface User{
            public userName:string;
            public passwotd:string;
        }

        let u1 : User = {userName:"Vamsy",password:''}; 

    Angular Service and Injectors
    ------------------------------------------------------------------------

        service is used to hold bussiness logic.

            like computations and caliculations.
            holding common data across the application
            rest api calls and mappings
            ...etc.,

        Injection means that the object of the service clas
        will be supplied whenever needed by an Injector.

        The Root Module has one injector called RootInjector,
        and after that each Pipe,Service,Component,Directive and
        sub-module will also have their own injectors.

        ByDefault an object of a service is created by
        the root-injector and supplied to all pipes,components,directive ..etc.,

        but - as long as the service is not lsited in the providers:[] section
        of the respective component/pipe/directive/sub-module.

        If the service is listed in the providers:[] section of
        a component/pipe/directive/sub-module, a service object is created
        specific to that resource and is then injected.

    Parent-Child component communication
    -------------------------------------------------

         parent can share data with the child
         using an attribute defiend in the child using @Input() 
         decoratot.

         a child can emit data to the parent using an 
         EventEmitter defined int eh child as @Output()
         decorator.

    Angular Forms
    ------------------------------------------------------------------------
        
        Template Driven Forms

            the form elements are 
            bound with ngModel attribute coming from
            FormsModule

            less code on the controller and more code
            on the template. easy to build.

            but difficult to test and we have
            a very little programatic control on these forms.

            suited for small form having not more than
            two or three fields.

        Model Driven Forms / Reactive forms

            the form is programatically constructed using
            FormGroup and formControls from ReactiveFormsModule

            And teh formControls are boudnwith the
            html form.

            The form is more written on the controller
            and hence is easy to test and has more
            prgramatic control.

            these forms are used almsot 90% in the
            angualr applications, as they support
                custom validations,
                easy testing
                compliated forms and mdoel binding,
                nested forms.
  
    Angular Routing
    ------------------------------------------------------------------------

        allows us to display a specific component for given
        specific path (url-segment)

        RoutingModule
            Routes          is an array of 'Route' s
            Route           is a configuaraion of a path
                        {
                            path:'',                            url-segment
                            component:'',                       component that has to appear for givne url-segment
                            redirectTo:'',                      if no component, then a path to redirect to.
                            pathMatch:'full/startsWith',        
                            children:[],
                            canActivate:[],
                            canDeactivate:[],
                            canLoad:[],
                            canChildActivate:[]
                        }


                        {path:'abc',pathMatch:'full',component:DashBoardComponent}
                                http://localhost:8888/abc will only trigger the DashBoardCompoennt

                        {path:'abc',pathMatch:'startsWith',component:DashBoardComponent}
                                DashBoardComponent can be triggered by ony of the below urls
                                    http://localhost:8888/abc
                                    http://localhost:8888/abcd
                                    http://localhost:8888/abcde
                                    http://localhost:8888/abc/xys
                                    http://localhost:8888/abcd/xyz/lmn ..etc

            router-outlet           is a in-bulit component that reserves place for
                                        a component that has to appear for the givne path..

            routerLink              is a directive to be used a attribute instead of 'href'
                                        to <a></a> to hold the path

            ActivatedRoute          is a in-built service used to retrive information about
                                    the currently active path, like current url, query parameters, path paramteres ...etc

            Router                  is a in-buiilt service used to navigate from one component to
                                    another

                                        navgateByUrl('url')
                                        navigate('url',{queryString:[],.....})

        
    Angular Component LifeCycle
    ------------------------------------------------------------------------

        constructor()
         |
         |
        OnInit :: ngOnInit()              be called only once after first
                                        rendering is done.., used like ana onLoad event.

            |
            |
            (the data bounded fields may be updated)--------|
             |                                              |
             ngAfterViewInit()                              |
             |                                              |
             ngAfterContnet()                               |
             |                                              |
             (rerendering of the component)  ---------------|
                                            |
                                    (jsut before the component gets destroyed)
                                            |
                                            ngOnDestroy()

    RxJS
    ------------------------------------------------------------------------

            reactive javascript programming

            acts like a bridge between background-executing tasks
            and foreground-executing tasks...!


            in javascript the asynchronous prgramming can be used
            to execute any task in the background.

            how can the foreground know
                    the currrent statuc of the background-task
                    did the background-task complete successfully
                    did the backgroudn-task encoutered any error and got aborted.

            RxJs offers a class called Observable.

            let backgroundJob = (observer) => {


                observer.next(data); //this method can be used to emit valeus while the job in progress.
                observer.error(errMSg); //this method  signals job abortion and pass the error message
                observer.complete(); //this method is used to signal suiccessfull completion.

            };

            let ob = new Observable(backgroundJob);

            //the backgroudnJob execution start when we call subscribe on observable object.
            // and this happens in the foreground.
            ob.subscriber(
                (data) => {//this is the success call back to react and receive the data everytiem it is emited},
                (err) => {//this is the error call back to react and receive the error },
                () => {//the onComplte call back to react on job completion}
            );

            RxJS Operators

                creating an observable from another
                observable.....

                map
                filter
                tap
                last
                catch
                ....etc

    Fake Rest Api End Points Using json-server
    ----------------------------------------------------------------------------

        json-server is a js tool that can create rest end points to perform
        CRUD operations on a .json file.

        these rest end points are nto for real time usage.
        only to learn ....

        npm install json-server --save

        json-server --port portNumber --watch dataFile.json


    Rest Api Calls In Angular using HttpClient
    ----------------------------------------------------------------------------

    HttpClientModule
       
       HttpClient

           get(url) :  Observable
           post(url,reqBody) : Observable
           put(url,reqBody) : Observable
           delete(url) : Observable



    

