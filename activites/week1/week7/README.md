# Activity 7

<!-- 1. Cover Sheet -->
Kaya Nelson \
College of Science, Engineering, & Technology, Grand Canyon University \
CST-391: JavaScript Web Application Development \
Professor Bobby Estey

## Introduction

In this activity, we will dive into the exploration of several new React APIs through the development of a mini application. This hands-on experience will enhance our understanding of React’s capabilities and how to leverage them effectively. Following this, we’ll focus on finalizing our React music application, integrating the newly learned concepts to enrich its functionality and user experience.

We will begin by familiarizing ourselves with the latest features and enhancements in React, experimenting with practical implementations in our mini app. This will provide us with a solid foundation before we transition into refining our music app. By the end of this session, we aim to have a fully functional music application that not only showcases our understanding of React but also demonstrates best practices in component design, state management, and API usage.
## Mini App #3

### Screenshots

![Start up](![miniAppStart](https://github.com/user-attachments/assets/ed196361-c219-4e2a-b3d1-543ef793191c)
)
- This screenshot captures the initial state of the mini application upon startup, showcasing a list of hardcoded posts. Each post is displayed in a structured format, providing users with a clear view of the content. This setup serves as a foundational layout, allowing us to visualize how the application will function as we proceed to integrate dynamic data and interactive features. The hardcoded posts are an essential step in the development process, enabling us to focus on layout and design before implementing more complex functionalities.



![Deletion](./attachments/miniAppDelete.png)
- This screenshot illustrates the operational functionality of the delete button within the mini application. It effectively demonstrates that two posts have been removed from the initial list, showcasing the dynamic interaction of the user interface. When the delete button is clicked, the corresponding post is successfully removed, confirming that our state management and event handling are working as intended. This feature enhances the user experience by allowing for seamless content management within the application.



![Addition](./attachments/miniAppAdd.png)
- This screenshot displays the functioning add post form within the mini application. It highlights the successful addition of a new post that corresponds to the content entered in the text field. This feature illustrates the application's ability to dynamically update the post list in real time, reflecting user input. The seamless integration of the form enhances the interactivity of the application, allowing users to easily contribute new content and see their changes immediately reflected in the interface.



## Part 6

### Screenshots

![New Album Form](./attachments/NewAlbumForm.png)
- This screenshot showcases the newly integrated form within the music app, designed specifically for creating new album entries. The form provides users with a user-friendly interface to input album details, such as title, artist, and release date. This addition enhances the app's functionality by enabling users to contribute new albums directly, enriching the overall content and interactivity of the application. The seamless design ensures that users can easily navigate the form, making the process of adding albums both intuitive and efficient.



![New Album Added](./attachments/NewAlbumView.png)
- This screenshot presents an album successfully created using the new form in the music app. The displayed album includes all the details entered by the user, such as the title, artist, and release date. This feature highlights the app's capability to dynamically update the album list, reflecting user contributions in real time. The seamless integration of this functionality enhances the overall user experience, allowing for effortless addition and management of album data within the application.



### Summary

In this segment of the activity, we introduced a new form to the music app, enhancing its functionality significantly. The form's structure was initially derived from Bootstrap, ensuring a responsive and visually appealing design. We then converted this structure into JSX to seamlessly integrate it within our React framework.

Additionally, we implemented functionality that allows the form to submit the input data directly to our API. Upon successful creation of a new album, the app is designed to navigate back to the home page, providing a smooth user experience. This integration not only streamlines the process of adding new albums but also reinforces the app’s interactivity, allowing users to see their contributions reflected immediately. Overall, this enhancement marks a significant step in making the music app more dynamic and user-friendly.
## Part 7

### Screenshots

![New main page](./attachments/newMain.png)
- This screenshot displays the updated main page of the music app, now featuring edit buttons on each album card. These buttons enhance user interaction by allowing users to modify album details directly from the main interface. The addition of these edit buttons signifies a step forward in usability, providing a straightforward way for users to manage their albums.

This functionality facilitates easy access to album editing, promoting a more dynamic and responsive application. Users can now quickly navigate to make changes, improving the overall experience of managing their music collection within the app.

![Edit album](./attachments/editAlbum.png)
- This screenshot showcases the refactored Add Album component, which now features an "Edit" title when an album is passed to it. The component is designed to display the relevant album information pre-filled in the form fields, allowing users to easily modify existing details.

This enhancement improves the user experience by providing a clear context for editing, making it intuitive for users to update album information. With this functionality, the app supports both adding new albums and editing existing ones seamlessly, reinforcing its dynamic capabilities in managing music collections.

### Summary

In this part of the activity, we successfully refactored the Add Album component to enhance its reusability across different parts of the application. Initially, this component was limited to adding new albums, but it has now been designed to accept an album as a prop, enabling it to display the relevant information for editing.

By implementing this change, we allow the component to dynamically adjust its title and functionality based on whether it is being used to add or edit an album. This approach not only streamlines the codebase but also ensures that any future UI updates can be made in one place, automatically reflecting across both functionalities. This refactoring significantly improves maintainability and consistency within the application, making it easier to manage and evolve over time.
## Conclusion

In this activity, we began by developing a mini application that effectively demonstrated multiple state updates between parent and child components. This foundational work set the stage for our React music application, where we focused on completing the functionality for adding a new album.

We also enhanced the Add Album component to support editing existing albums, which now allows users to perform three out of four CRUD operations (Create, Read, Update) within the app. This improvement not only enriches the user experience but also streamlines album management, making it easier for users to interact with their music collections. Overall, this activity marked a significant step in building a more dynamic and functional music application.

