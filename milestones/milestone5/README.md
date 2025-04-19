# Milestone 5

<!-- 1. Cover Sheet -->
Kaya Nelson \
College of Science, Engineering, & Technology, Grand Canyon University \
CST-391: JavaScript Web Application Development \
Professor Bobby Estey

## Introduction

In this milestone, I will be rewriting the frontend application for the Christian Library using React. The new frontend will maintain the same functionality, focusing on CRUD operations for library media. The approach will mirror that of previous activities, featuring a home page that includes a search and browse feature to easily navigate through the library's media collection. Additionally, there will be a dedicated add/update page for adding new media or updating existing entries, ensuring a smooth user experience. Each media card will include buttons for editing or deleting specific items, allowing for efficient management of the library content. This rewrite aims to enhance the user interface and overall experience while preserving the core functionalities of the library application.


## Design Report

### Updates made

- I rewrote the frontend application for the Christian Library in React. The new version retains the same core functionality, focusing on CRUD operations for library media. The home page features a search and browse option, making it easy to navigate through the media collection. Additionally, there is a dedicated page for adding new media or updating existing entries, which enhances the user experience. Each media card includes buttons for editing or deleting items, streamlining the management of library content. Overall, this rewrite improves the user interface while preserving the essential features of the original application.


  - The rewritten frontend application for the Christian Library supports all CRUD operations on media, ensuring that users can Create, Read, Update, and Delete entries seamlessly. This functionality is integral to managing the library's media collection effectively, allowing users to add new items, view existing entries, edit details, and remove any media as needed. The design maintains a user-friendly interface while providing the necessary tools for comprehensive media management.


## Challenges Encountered

- Initially, I encountered challenges with maintaining consistent data between the API and the frontend. This issue stemmed from a mismatching property in the data models. After identifying the discrepancy, I refactored the code to align the frontend with the API model. As a result, the data consistency issues were resolved, allowing for seamless communication between the two components of the application. This adjustment significantly improved the overall functionality and reliability of the app.


- Maintaining state across parent and child components presented some challenges, but aligning the structure with previous activities greatly aided in understanding and implementing a functional data flow. By following the established patterns, I was able to effectively manage state updates and ensure smooth communication between components. This approach not only clarified the process but also facilitated a more reliable and organized implementation, ultimately enhancing the overall performance of the application.



## Pending Bugs and Issues

- Currently, there is no authentication implemented in the application, which means that all administrative operations are accessible to every site visitor. This lack of access control poses security risks and allows any user to perform actions such as adding, editing, or deleting media without restrictions. Implementing authentication will be a crucial next step to ensure that only authorized users can perform these sensitive operations, thereby enhancing the overall security and integrity of the application.


- The current styling of the application is minimal and could definitely be enhanced to improve the user experience. A more visually appealing design could include better color schemes, improved typography, and more engaging layouts for media cards. Additionally, incorporating responsive design elements would ensure that the application looks great on all devices. Focusing on these styling improvements will help create a more inviting and user-friendly interface for the Christian Library application.



## Screencast

[Screenpal Recording](https://go.screenpal.com/watch/cTfqllnjC4H) showcasing all CRUD operations performed through the new React App.

## Conclusion

In this milestone, I successfully rewrote the frontend application for the Christian Library using React. The updated app continues to support all CRUD operations for media within the library.

## Key improvements include:

- State Management: I effectively managed state between parent and child components, ensuring smooth data flow.
- API Integration: The state is connected to live data from the REST API developed in a previous milestone, allowing for real-time updates.
- UI Enhancements: I added some simple CSS for a cleaner and more readable user interface, improving the overall user experience.

These changes enhance functionality while making the app more user-friendly and visually appealing.

