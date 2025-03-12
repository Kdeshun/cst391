# Milestone 2

<!-- 1. Cover Sheet -->
Kaya Nelson \
College of Science, Engineering, & Technology, Grand Canyon University \
CST-391: JavaScript Web Application Development \
Professor Bobby Estey

## Feedback

No feedback was provided at this moment. This update incorporates the inclusion of a [REST API outline](#rest-api-outline).


<!-- 2. Introduction -->
## Introduction

In the modern digital landscape, obtaining biblical and religious materials should be straightforward. Christian Library is an online platform committed to offering users digital versions of the Bible in multiple translations, as well as a wide array of Christian literature and music. This application aims to be an all-encompassing resource for those looking to explore, comprehend, and enrich their faith through easily accessible Christian media. By facilitating access to vital Christian teachings, the platform supports users in their spiritual journeys. With its intuitive and user-friendly design, individuals can engage with scripture and uplifting content conveniently, anytime and anywhere.



<!-- 3. Functionality Requirements -->
## Functionality Requirements

### Browsing Media

1. **As a visitor**, You can explore a variety of Bibles, books, and songs tailored to your interests through the Christian Library platform. Simply navigate to the browsing section, where you'll find categorized resources. You can filter by specific translations of the Bible, genres of Christian literature, or music styles. This allows you to easily discover and engage with Christian media that resonates with you.

2. **As a user**, I would like to explore media that is systematically organized into categories, such as different Bible translations, book genres, and music styles. This way, I can efficiently locate specific types of content that align with my interests.

3. **As a user**, I would like to have access to featured or recommended media displayed on the homepage, allowing me to easily explore popular or newly released content. This section could highlight trending Bibles, best-selling books, and the latest music releases, making it convenient for me to discover what others are enjoying.



---

### Searching Content

4. **As a visitor**,  I want the ability to search for various media using keywords, titles, authors, or scripture references. This feature will enable me to efficiently locate specific content that matches my interests or needs, ensuring I can access relevant resources without hassle.

5. **As a user**,  I want to filter my search results based on media type, translation, author, or genre. By utilizing these filters, I can refine the results to zero in on exactly what I'm looking for, making my search experience more targeted and effective.

6. **As a user**,I want to conduct advanced searches that allow me to look within specific books of the Bible or even search through song lyrics. This functionality will help me find precise information quickly, whether I'm seeking a particular verse, a theme in scripture, or a specific line in a song.
---

### Reading/Listening to Media

7. **As a user**,  I would like the option to download digital copies of the Bible in various translations. This will allow me to study scripture offline in the version that resonates most with me, ensuring I can engage with the text whenever I need.

8. **As a user**, I want to have the ability to download Christian books for offline reading. This convenience will enable me to explore Christian literature at my own pace, regardless of my internet access.
9. **As a user**, I want to download Christian songs to enjoy music without needing an internet connection. This feature will allow me to listen to uplifting worship songs or hymns wherever I am, enhancing my worship experience.

---

### User Account Management

10. **As a visitor**,  I want to create my own user account. This will grant me access to personalized features, allowing for a customized experience tailored to my preferences and needs.

11. **As a user**, I want to securely log in to my account to ensure that my personal information remains safe. A secure login process is essential for protecting my data and enhancing my trust in the platform.

12. **As a user**, I want to update my profile information at any time. This capability will help me keep my account details current, ensuring that my experience reflects my preferences and any changes in my information.

13. **As a user**,  I want an easy way to reset my password if I forget it. This functionality will ensure that I can quickly regain access to my account without unnecessary delays.

14. **As a user**,  I would like to view my reading and listening history. This feature will enable me to revisit previously accessed media, making it simple to find and enjoy content I've engaged with before.

15. **As a user**, I want to manage my bookmarks and playlists. This will allow me to organize my favorite content efficiently, ensuring I can easily access and enjoy the media that speaks to me most.

---

### Administrative Functions for Content Management

16. **As an administrator**, I want to log in to an admin panel where I can effectively manage the platform's content. This access is crucial for overseeing the resources available to users.

17. **As an administrator**, I want the capability to add new media, including Bibles, books, and songs, to the library. This will ensure that users have access to fresh and updated content, enhancing their experience.

18. **As an administrator**, I want to edit existing media details to maintain accuracy and relevance. Keeping information up to date is vital for providing users with the best possible resources.

19. **As an administrator**, I want the authority to remove outdated or inappropriate media. This ensures that the library remains a trustworthy and relevant source of Christian content.

20. **As an administrator**,I want the ability to manage user accounts, including the capacity to deactivate or ban users when necessary. This functionality is essential for enforcing platform policies and maintaining a positive community environment.


<!-- 4. Initial Database Design -->
## Database Design

![christianLibraryER](https://github.com/user-attachments/assets/19f39e7a-3619-42a7-823e-8becad78789f)

<!-- 5. Initial UI Sitemap (Using Mermaid) -->
## UI Sitemap
<img width="876" alt="christianLibrarySitemap" src="https://github.com/user-attachments/assets/23845c3f-4f27-45e9-bb9c-a466653cce82" />

<!-- 6. Initial UI Wireframes -->
## UI Wireframe Pages
|Page Name|Wireframe|
|--|--|
|Registration|![registrationPage](https://github.com/user-attachments/assets/702701ec-2fe0-4636-83a9-cacbb63864eb)
|
|Login|![login]![loginPage](https://github.com/user-attachments/assets/2ca773f0-dc9d-4cdc-8d39-d54f7370220c)
|
|Home|![home](./wireframeViews/homePage.png)|
|Browse|![browse](./wireframeViews/browseMedia.png)|
|Search|![search](./wireframeViews/searchPage.png)|
|Manage Media|![adminMedia](./wireframeViews/adminPanelMedia.png)|
|Manage Users|![adminUsers](./wireframeViews/adminPanelUsers.png)|

<!-- 7. Initial UML Classes -->

## UML Classes
![UML Diagram](./christianLibraryUML.png)

<!-- 8. Risks -->

## Risks

- **Technical Challenges**: The integration of the Angular frontend with the Express/Node.js backend and MySQL database could present unforeseen technical issues, requiring additional time and resources to troubleshoot and resolve.
- **Learning Curve**:  A lack of familiarity with technologies such as Angular, Express, and MySQL may slow down the development process, as team members may need to invest time in learning and troubleshooting these frameworks and tools.
- **Time Constraints**:Limited time for project completion could result in a rushed development process, potentially leading to incomplete features, compromised code quality, and overall project delays.
- **Scope Creep**: Introducing features beyond the original project scope can complicate the development process, making it challenging to deliver a functional application within the established timeline.
- **Security Vulnerabilities**: The application may face risks such as SQL injection, cross-site scripting, and inadequate authentication measures. Addressing these vulnerabilities is essential to protect user data and ensure the integrity of the application.
- **Data Management**: Improper handling of user data and media files poses risks of data loss, corruption, or breaches, which can significantly impact user trust and the reliability of the application.
- **User Experience Issues**:  If the user interface is not intuitive and accessible, it may lead to poor user engagement and dissatisfaction, ultimately affecting the application's adoption and success.
- **Testing Limitations**:  Inadequate testing practices could result in undetected bugs, negatively impacting the functionality of the application and the overall user experience.
- **Dependency Risks**: Relying on third-party libraries and frameworks may introduce compatibility issues or vulnerabilities, especially if those dependencies become outdated or unsupported over time.
- **Deployment Challenges**: Setting up the application in a live environment may present obstacles related to server configuration, hosting services, or scalability concerns.

## Rest API Outline

| Method | Endpoint                                                 | Description                                 |
|--------|----------------------------------------------------------|---------------------------------------------|
| **Authentication**                                                                                                   |
| POST   | `/api/register`                                          | Register a new user                         |
| POST   | `/api/login`                                             | User login                                  |
| **Users**                                                                                                            |
| GET    | `/api/users/{userId}`                                    | Get user profile                            |
| PUT    | `/api/users/{userId}`                                    | Update user profile                         |
| DELETE | `/api/users/{userId}`                                    | Delete user account                         |
| **Media**                                                                                                            |
| GET    | `/api/media`                                             | Get media items                             |
| GET    | `/api/media/{mediaId}`                                   | Get media item details                      |
| POST   | `/api/media`                                             | Add new media item _(Admin only)_           |
| PUT    | `/api/media/{mediaId}`                                   | Update media item _(Admin only)_            |
| DELETE | `/api/media/{mediaId}`                                   | Delete media item _(Admin only)_            |
| **Bookmarks**                                                                                                        |
| GET    | `/api/users/{userId}/bookmarks`                          | Get user bookmarks                          |
| POST   | `/api/users/{userId}/bookmarks`                          | Add a bookmark                              |
| DELETE | `/api/users/{userId}/bookmarks/{mediaId}`                | Remove a bookmark                           |
| **Search**                                                                                                           |
| GET    | `/api/search`                                            | Search media                                |
| **Admin**                                                                                         |
| GET    | `/api/admin/users`                                       | Get all users _(Admin only)_                |
| PUT    | `/api/admin/users/{userId}`                              | Update user role _(Admin only)_             |
| DELETE | `/api/admin/users/{userId}`                              | Delete user _(Admin only)_                  |
