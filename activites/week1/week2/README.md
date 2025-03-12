# Activity 2

<!-- 1. Cover Sheet -->
Kaya Nelson \
College of Science, Engineering, & Technology, Grand Canyon University \
CST-391: JavaScript Web Application Development \
Professor Bobby Estey

## Introduction

- In this session, we will be setting up the Angular development environment. This process involves installing the necessary Angular tools and libraries essential for building applications. Once the installation is complete, we will verify that everything is functioning correctly by creating and testing a basic application. This hands-on approach will ensure that the development tools are properly configured and ready for use in future projects..

## Screenshots

![ngVersion](https://github.com/user-attachments/assets/7e9309bb-5123-4775-b4dc-9abfd5c1817e)

This screenshot showcases the results of the ng version command, revealing the current versions of Angular and Node.js installed on my system. This information is essential for verifying compatibility and for troubleshooting any issues that could occur during the development process.





<img width="1623" alt="testAppRun" src="https://github.com/user-attachments/assets/99d5f037-baa0-4d8c-93a2-ba1e436eb612" />

In this screenshot, we can observe the default Angular application running locally in my browser. This application was generated using the ng new command and subsequently built and served with the ng serve -o command. This process sets up a live development server, allowing for real-time updates and testing of the application in the browser.


<img width="1623" alt="changedTitle" src="https://github.com/user-attachments/assets/c0873ae2-dcb8-4d6b-9d83-4fee37d1419d" />

In this instance, I modified the title in the app.component.ts file. After making this change, I observed that the application automatically reloaded, reflecting the updated string "Changed Title" in the browser. This demonstrates Angular's hot-reload feature, which allows for immediate feedback during development.


<img width="1623" alt="addMessage" src="https://github.com/user-attachments/assets/19d21efd-3d9d-4015-acc0-182f0f8fda40" />

This screenshot illustrates the addition of a message property to our component class. This property is then rendered within an <h3> tag in the component's template. This enhancement allows us to display dynamic content in the application, showcasing Angular's capability to bind data between the class and the template seamlessly.

## Research

1. Project Structure:
   1. **`node_modules`** 
   - This directory contains all npm packages that the Angular project depends on. 
   - It is created automatically when you install packages using npm.
   - As you add new dependencies via commands like `npm install`, they will be placed in this folder, ensuring your application has access to the required libraries.

   2. **`src`**  
   - The `src` folder is the main directory for the source code of the Angular application.
   - This is where you will spend most of your time writing code and building your application.
   3. **`src/app`**  
   - This is the core entry point for the Angular application’s codebase.
   - It contains essential files such as modules, components, and services that define the application's structure and behavior.
   - Typically, you will find a main component (often `app.component.ts`), routing configurations, and any shared services in this directory.

   4. **`src/assets`**  
   - This folder is designated for static assets like images, fonts, and stylesheets that the application may need.
   - Any files placed here can be accessed directly via URL paths, making it easy to manage resources used in your application.

   5. **`src/environments`**  
   - The `environments` folder contains configuration files for different build environments (e.g., development, production).
   - Each environment file allows you to define settings specific to that environment, such as API endpoints or feature flags, ensuring that the application behaves correctly depending on the context in which it is running.
   6. **`angular.json`**
   - This is the workspace configuration file for Angular projects.
   - It defines settings for how the application is built, including options for development and production builds, asset configurations, and project-specific settings.
   7. **`package.json`**  
   - The `package.json` file outlines the project's npm dependencies and scripts.
   - It specifies the packages required for the project, along with version numbers, and can also define scripts for common tasks, such as starting the development server or running tests.
   8. **`tsconfig.json`**    
   - This file contains the TypeScript configuration settings for the project.
   - It specifies how TypeScript compiles your code, including compiler options and file inclusions/exclusions, ensuring that the TypeScript files are processed correctly during the build.


2. In an Angular application, several critical files collaborate to define, configure, and manage the various components and their visual presentation. Below is an in-depth exploration of these essential files:

 **`main.ts`**
The main.ts file functions as the primary entry point for the Angular application. It plays a pivotal role in bootstrapping the application, initiating the rendering process that transforms the application’s components into a functional user interface. This file typically contains the invocation of platformBrowserDynamic().bootstrapModule(AppModule), which loads the root module of the application. This marks the commencement of the application lifecycle, establishing the necessary environment for Angular to execute properly. It serves not only to launch the app but also to configure the Angular environment, ensuring that dependencies are resolved and the application is prepared for user interaction.

**`app.module.ts`**
The app.module.ts file is responsible for defining the root module, commonly referred to as AppModule. This module is a fundamental building block of the Angular architecture, providing a cohesive structure for the application. Within this file, developers import essential Angular modules such as BrowserModule, HttpClientModule, and FormsModule, which provide core functionalities required for the application to operate efficiently. Additionally, this file declares all the components associated with the module, allowing Angular to recognize and utilize them effectively. Beyond component declaration, the module can also configure services and manage routing, facilitating seamless navigation between different views and enhancing the overall user experience.

**`app.component.ts`**
In the app.component.ts file, developers define the main component of the application, known as AppComponent. This file serves as the controller for the default view, encapsulating the logic that drives the component’s functionality. Inside, you will find properties and methods that dictate how the component behaves, including data-binding properties that establish connections between the component's logic and its corresponding template. The component plays a crucial role in managing data flow, responding to user interactions, and handling events. Furthermore, it can implement lifecycle hooks, allowing developers to execute custom logic at various stages of the component’s lifecycle, such as initialization and destruction.

**`app.component.html`**
The app.component.html file serves as the template for the AppComponent, outlining the structure and layout of the user interface that end-users interact with. Utilizing Angular’s powerful templating syntax, this file enables data binding, structural directives (such as *ngIf and *ngFor), and event binding, creating a dynamic and interactive experience for users. The template effectively bridges the gap between the application logic and its visual presentation, ensuring a clear separation of concerns. By defining how data from the component is rendered, it enhances the modularity and maintainability of the application’s codebase.

**`app.component.css`**
Finally, the app.component.css file houses the styling specific to the AppComponent. This file allows developers to define CSS rules that govern the visual representation of the component’s elements. By scoping styles to the component, Angular effectively promotes encapsulation, ensuring that styles do not unintentionally affect other components or parts of the application. This modular approach enhances the user experience, allowing for a consistent and coherent design that aligns with the overall aesthetic of the application. The styles defined in this file contribute significantly to the visual appeal and usability of the component, enriching the user’s interaction with the application.
## Conclusion

In this activity, we focused on setting up the essential tools for Angular development, which included installing Node.js and the Angular CLI (Command Line Interface) to streamline our workflow. After establishing the necessary tools, we validated their functionality by creating a simple test application. This involved generating a new project with the Angular CLI and running it locally using the ng serve command, allowing us to confirm that the application loaded correctly in a web browser. Additionally, we explored the default project structure provided by Angular, which includes the src/ directory for application code, the app/ folder for core components and services, and configuration files such as angular.json and package.json. Through this process, we successfully established our Angular development environment and gained valuable insights into the organized structure of Angular projects, setting a solid foundation for future development.

