# Activity 5

<!-- 1. Cover Sheet -->
Kaya Nelson \
College of Science, Engineering, & Technology, Grand Canyon University \
CST-391: JavaScript Web Application Development \
Professor Bobby Estey

## Introduction

In this session, we will focus on creating two straightforward React applications. These projects will introduce the fundamental concepts of React components, alongside the various hooks available for managing their state. Through this hands-on experience, you will gain a deeper understanding of how to effectively utilize these tools to enhance your React development skills.



## Part 1

### Stopping Point #1 Deliverables 

![Music Cards](./activityScreenshots/part1MusicCards.png)
- In this screenshot, we are looking at a fundamental React application that prominently displays our Card component. This component is designed to accept parameters, also known as props, which it uses to exhibit particular details about an album, such as its title, artist, release date, and cover art. By leveraging props, we can create dynamic and reusable components that allow for the presentation of varied content based on the data passed to them. This approach not only enhances the functionality and scalability of the application but also exemplifies the core principles of React, such as component-driven architecture and state management. Through this structure, developers can easily modify and maintain their code while ensuring a seamless user experience.



- The initial application introduced the fundamental concepts of establishing a React application with custom components. We began by refactoring the main App component into its own dedicated component, promoting better organization and reusability. Additionally, we developed a Card component that the main application utilizes to display information. Within the Card component, we explored how to implement props, enabling users to pass in various models or values. This flexibility allows for dynamic rendering of content, empowering developers to create versatile and interactive interfaces that can adapt to different datasets while maintaining a clean and efficient code structure.


### Mini App #1 Deliverables

![Mini App](./activityScreenshots/miniAppCounter.png)
- In this screenshot, we observe the application of hooks within our stateful React components. Here, hooks play a crucial role in managing and updating the state, specifically for counter titles and their corresponding count values. By utilizing hooks such as useState, we can seamlessly integrate state management, allowing the components to reactively update the displayed titles and counts based on user interactions. This demonstrates the power of React hooks in simplifying state handling, making it easier for developers to enhance the interactivity and responsiveness of their applications while adhering to best practices in functional component design.

## Part 2

### Stopping Point #2 Deliverables

![Music Cards pt. 2](./activityScreenshots/part2MusicCards.png)
- In this screenshot, we showcase the completed version of the Activity 5 music application, which features custom CSS that effectively aligns the individual card components for a polished and visually appealing layout. Additionally, it's important to note that the underlying data source for the cards has been updated; this change allows for a more diverse range of album information to be displayed. This enhancement not only improves the aesthetic of the application but also enriches the user experience by providing more accurate and varied content. Overall, this final implementation highlights the integration of design and functionality in React applications, demonstrating how custom styles and dynamic data sources work together to create an engaging interface.



### Part 2 Summary

In this second part of the application development, we took a significant step by extracting the data source for the card components into a constant defined within `App.js`. This constant is enhanced by leveraging React's `useState`hook, which allows us not only to store the album data but also to have a method at our disposal for updating the content dynamically as needed.

 Furthermore, we introduced the `map` method to iterate over our collection of card data. This approach effectively minimizes code duplication by enabling us to render each card component in a more concise manner. By mapping over the array of album data, we can generate a list of Card components effortlessly, each receiving the appropriate props corresponding to the individual album details. This not only makes our code cleaner and more maintainable but also demonstrates a key aspect of React’s declarative programming style, where we focus on what the UI should look like rather than how to manually manipulate the DOM. Overall, these enhancements contribute to a more efficient and scalable application architecture. 

## Conclusion

In this activity, we acquired foundational skills in creating simple React applications and components. We explored the utilization of props to pass data into components, enabling us to display both static and dynamic view information effectively.

By incorporating React hooks, we highlighted how to manage state, particularly through real-time updates in our counter application, which illustrated the dynamic nature of stateful components.

In the context of our music application, we emphasized the importance of building reusable components, which can enhance the modularity and maintainability of our code. We also learned to leverage the map function to iterate over arrays, allowing us to render multiple instances of our Card component efficiently. This approach not only reduced code duplication but also reinforced our understanding of how React encourages a declarative and component-driven architecture, ultimately leading to more organized and scalable applications. Overall, these concepts serve as essential building blocks for mastering React and developing interactive user interfaces.