# Milestone 3

<!-- 1. Cover Sheet -->
Kaya Nelson \
College of Science, Engineering, & Technology, Grand Canyon University \
CST-391: JavaScript Web Application Development \
Professor Bobby Estey

## Introduction

In this milestone, I will be developing a REST API specifically designed to facilitate interaction with the Christian Library database. This API will act as a vital interface, enabling the application to efficiently retrieve and manage information regarding users and the diverse media available on the platform. It will feature endpoints dedicated to user data retrieval, allowing users to access their profiles and preferences, as well as endpoints for fetching media details, which will help users discover and explore available content. Additionally, the API will include specific endpoints for administrators, providing them with the capability to add new media items and update existing entries, thereby ensuring the library remains current and relevant. Furthermore, there will be endpoints that the application can utilize to display this media to users, creating a seamless and engaging browsing experience. Overall, this REST API will establish a robust framework that not only meets the immediate needs of the application but also supports future scalability and enhancements.


## Design Report

### Updates made

- I have implemented several key components in the project, including Models, Queries, Data Access Objects (DAOs), Controllers, and Routes for both users and media. These elements work together to establish a structured framework for managing data interactions and facilitating communication between the frontend and backend. 
-Additionally, I have introduced a basic authorization middleware that currently checks for a hardcoded token. In future iterations, this middleware will be enhanced to verify the logged-in state of users and assess their roles, thereby strengthening security and access control across the application.

### REST API Documentation

- The Postman Documentation  includes a comprehensive list of currently functioning endpoints along with their required parameters and headers. Each endpoint is detailed with the necessary HTTP method, path, and any specific parameters needed for requests. The headers required for authorization and content type are also specified, ensuring users have all the information needed to interact with the API effectively. You can explore the collection to see the exact details for each endpoint, including examples of requests and responses.

## Challenges Encountered

-One significant challenge I faced was implementing secure authentication and role checking within the application. Due to time constraints, I was unable to thoroughly research effective password hashing methods or establish a reliable mechanism for generating authorization tokens based on those hashes. As a temporary solution, I opted to use a hardcoded authorization token, which currently bypasses the need for dynamic role checking. While this approach allows for basic functionality, it is not a secure long-term solution, and I plan to prioritize proper authentication methods and role-based access control in future iterations to enhance the application's security.


- During the screen recording, several issues arose with the expected responses from endpoints, particularly with the login endpoint. Users experienced unexpected behavior, such as incorrect status codes or error messages, which did not align with the anticipated outcomes. This inconsistency may have stemmed from issues in the authentication logic or data validation processes. Addressing these discrepancies will be crucial to ensure a smooth user experience and reliable functionality moving forward. I plan to review the login implementation and conduct thorough testing to identify and resolve these issues.



## Pending Bugs and Issues

- Currently, passwords are stored and transmitted in plain text, which poses a significant security vulnerability, especially in a production environment. This practice is highly discouraged, as it exposes sensitive user information to potential breaches and attacks. To address this critical flaw, it is essential to implement proper password hashing methods, such as bcrypt or Argon2, to ensure that passwords are securely hashed before storage. Additionally, secure transmission protocols (like HTTPS) should be enforced to protect user credentials during transmission. Prioritizing these security measures will be crucial in safeguarding user data and maintaining trust in the application.


- Currently, the application does not implement role checks for API requests. This oversight means that any logged-in user could potentially access admin-level endpoints if they know the URL, which poses a severe security risk. Relying on the obscurity of endpoint details is insufficient for safeguarding sensitive operations in a production environment.

To enhance security, it is essential to implement role-based access control (RBAC) that verifies a user's role before allowing access to specific endpoints. This would involve checking the user's role associated with their authentication token and ensuring they have the necessary permissions to perform the requested operation. Prioritizing these role checks will help protect critical functionalities and maintain the integrity of the system.
- The authorization token is currently hardcoded as a temporary placeholder until a proper authorization mechanism is implemented. This approach should never be used in a production environment, as it poses significant security risks. Hardcoding tokens can lead to unauthorized access, as anyone with knowledge of the token can bypass authentication.

To enhance security, it is crucial to implement a dynamic token generation system, such as JSON Web Tokens (JWT), that securely issues tokens based on valid user credentials. This system should also include mechanisms for refreshing tokens and managing expiration. Transitioning away from hardcoded tokens will be essential for protecting user data and ensuring secure access to the API.

## Screencast

[ScreenPal Screen Recording](https://go.screenpal.com/watch/cTe22Jn1Riq) demonstrates the usage of the Christian Library API through Postman, highlighting how to interact with the REST API. Additionally, it includes an analysis of the resulting table contents in your SQL server using phpMyAdmin.

## Conclusion

In this milestone, you've successfully initiated the REST API to interface with the Christian Library database, establishing endpoints for CRUD operations on both media and users. This foundational work enables users to register and log in, facilitating the display of media and allowing admins to update content.

While it's great to see progress, it's important to address the existing security vulnerabilities as you continue development. Prioritizing secure authentication, role-based access control, and proper data handling will be crucial to ensure the application is safe for users. As the project progresses, focusing on these aspects will help enhance the overall security and reliability of the API.