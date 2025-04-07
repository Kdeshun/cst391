# Activity 6

<!-- 1. Cover Sheet -->
Kaya Nelson \
College of Science, Engineering, & Technology, Grand Canyon University \
CST-391: JavaScript Web Application Development \
Professor Bobby Estey

## Introduction

In this upcoming activity, we will take a significant step by integrating our React application with real-time data. Previously, the data was hardcoded into the application, limiting its functionality. However, we will now source this data dynamically from a REST API, enhancing the app's interactivity and responsiveness. Additionally, we will be incorporating routing capabilities, allowing for smoother navigation within the React application and providing a more seamless user experience. This approach will not only make our app more robust but also demonstrate the power of working with external data sources.


## Part 3

### Screenshots

[Album List]<img width="1615" alt="reactAlbumsList" src="https://github.com/user-attachments/assets/5e106406-c293-47f6-9967-c1a7e9aa36c1" />

- This screenshot illustrates our React application showcasing all the albums retrieved from the Music API. You can see how the data is presented dynamically, reflecting our successful integration with the API. This allows users to interact with real-time data, enhancing the overall user experience.



[Album Search]<img width="1615" alt="reactAlbumsListSearch" src="https://github.com/user-attachments/assets/fb660c89-295e-48a9-96e2-f404246597d3" />

- This screenshot highlights the search component in action, effectively filtering through the list of albums that have been fetched. You can see how the user can input their queries to dynamically refine the displayed results, demonstrating the responsive functionality and user-friendly design of the application.



### Summary

In this section, we began by linking our React views to a set of mock JSON data, eliminating the default values found in our `App.js` file. Following this, we implemented a search component that intelligently filters the list of albums based on user-defined search terms. This functionality leverages callbacks from the search component to the parent app component, which manages the array of albums. Once we had this feature functioning smoothly, we transitioned away from the mock JSON and integrated our Music API, enabling the retrieval of the album list directly from our SQL database. This enhancement marks a significant step toward creating a more dynamic and data-driven application.

## Mini App

### Screenshots

![Login page](./attachments/miniAppLogin.png)
- This screenshot displays the login page of our mini app. It provides users with a clean and intuitive interface for entering their credentials, paving the way for a seamless authentication experience. The design is focused on ease of use, ensuring that users can quickly access the app's features after logging in.

![About page](./attachments/miniAppAbout.png)
- This screenshot showcases the about page of our application. It provides users with essential information about the app's purpose, features, and the team behind its development. The layout is designed to be engaging and informative, ensuring visitors can easily grasp what the app offers and how it can benefit them.

![Contact us page](./attachments/miniAppContact.png)
- This screenshot displays the contact page of our application. It serves as a crucial point for users to reach out for support, inquiries, or feedback. The design prioritizes user-friendliness, featuring input fields for users to fill out their information, such as name, email, and message. This ensures that users can communicate easily and effectively with the team behind the app.

![User page](./attachments/miniAppUser.png)
- This screenshot highlights the user page of our application. It presents a personalized interface where users can view and manage their account information and preferences. The layout is designed to be user-friendly, allowing easy navigation through various options related to their profile, settings, and activities within the app. This page enhances the overall user experience by providing essential functionalities in a clear and accessible manner.

### Summary

In this mini application, we developed an App component that employs a Router to manage the display of different pages corresponding to various paths within the app. The setup includes a navigation bar that facilitates seamless routing to the specified paths, enhancing the overall user experience. Additionally, we incorporated a private router along with a login page, ensuring that access to private pages is restricted until a user successfully logs in. This feature helps maintain user privacy and security by preventing unauthorized access to sensitive parts of the application.

## Part 4

### Screenshots

![Music app](./attachments/musicAppRoutable.png)

- This screenshot showcases the music application in its final state for the activity, featuring a navigation bar and support for multiple routes. The navigation bar enhances user experience by providing easy access to different sections of the app, such as albums, search functionality, and account settings. This structured routing allows for seamless transitions between various pages, making navigation intuitive and efficient. Overall, the final design reflects a polished and user-friendly music application ready for deployment.

![Music app placeholder view](./attachments/musicAppPlaceholder.png)
- This screenshot illustrates the newly added placeholder view, which is set to be implemented in Activity 7. It is displayed using the updated routing functionality within the application. The placeholder serves as an interim space that indicates where new content or features will be integrated in the future, providing a clear visual cue to users. This strategic approach allows for smooth user navigation while signaling upcoming enhancements, ensuring that the application remains dynamic and forward-looking.

### Summary

In this final part, we successfully implemented the same routing functionality utilized in the mini application within the music app. The app now features a navigation bar that facilitates easy access to multiple views, enhancing overall user experience. To improve code maintainability and reusability, several components have been extracted for reuse across different views. This restructuring has resulted in a cleaner and more organized `App.js` file, thereby reducing its responsibilities. The optimizations not only streamline the development process but also lay the groundwork for future enhancements and scalability of the music application.

## Conclusion

In this Activity, we successfully connected our React application to a REST API, enabling the display of albums retrieved from the SQL database. This integration allows users to access dynamic content directly from the backend, enriching the application's functionality. Additionally, we learned how to set up a router and navigation bar in React, which facilitates support for multiple pages and smoother navigation throughout the app.

Along with these enhancements, we focused on code organization by extracting multiple components. This not only promotes reusability across different sections of the application but also helps in cleaning up the entry point into the app. The overall improvements contribute to a more maintainable and efficient codebase, setting a solid foundation for future development.
