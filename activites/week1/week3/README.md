# Activity 3

<!-- 1. Cover Sheet -->
Kaya Nelson \
College of Science, Engineering, & Technology, Grand Canyon University \
CST-391: JavaScript Web Application Development \
Professor Bobby Estey

## Introduction

In this activity, we will explore the creation of two fundamental Angular applications. The first application will serve as an introductory guide, covering the essential setup process and demonstrating how to facilitate communication between various components and views within the Angular framework. This foundational application will help you understand the core concepts of Angular, including component interaction and data binding.

The second application marks the initial phase of our frontend development, which aims to establish a connection with the Music API. This app will lay the groundwork for future enhancements, allowing us to integrate and display musical content dynamically. Throughout this process, we will focus on building a robust structure that can efficiently manage user interactions and API calls, setting the stage for a feature-rich experience as we further develop the application.

## Part 1 

### Screenshots

![](./part1Screenshots/gridWide.png)
![](./part1Screenshots/gridThin.png)

These screenshots illustrate the implementation of a straightforward Bootstrap grid within our simple application. They effectively showcase how responsive design adapts to different window sizes, ensuring that the layout remains user-friendly and visually appealing across various devices. By utilizing Bootstrap's grid system, we can see firsthand how the application's elements reconfigure and rearrange seamlessly, enhancing the overall user experience regardless of the screen size. This adaptability is crucial for modern web applications, as it allows users to access content comfortably whether they are on a desktop, tablet, or mobile device.



![](./part1Screenshots/appForm.png)

This screenshot displays the form we developed within the shop component, which is invoked by the main app component. Alongside the form, the info component is also included in the layout. However, I encountered some challenges getting the ngIf logic to function correctly for displaying the info component upon form submission, despite replicating the activity code accurately. This issue indicates that there may be a misunderstanding in the implementation of the conditional rendering, which is crucial for ensuring that the info component appears as intended after the form is submitted. I'll need to troubleshoot the logic and possibly revisit the conditions set for ngIf to resolve this issue effectively.



### Research

1. The `@Input` decorator in `info.component.ts`  plays a crucial role in establishing input properties that facilitate data transfer from a parent component to the info component. This mechanism enables effective communication between parent and child components within our Angular application. By using the `@Input` decorator, the parent component can bind values directly to the properties of the info component, allowing these properties to receive dynamic data.

As a result, the info component can adjust its view or behavior in response to changes in the parent’s data. This capability is essential for creating interactive and responsive applications, as it allows components to react to real-time updates and provide users with relevant information without the need for extensive additional logic or manual updates. This approach promotes a clean separation of concerns and enhances the maintainability of the codebase

2. The `[value]` binding in `info.component.html`utilizes one-way data binding syntax to connect a property from the component class to an attribute of an HTML element. This is particularly useful for displaying data in form controls. For instance, when `[value]` is applied to an `<input>` element, it assigns the value of the specified property from the component to that input field.

As a result, any updates made to the component property will automatically reflect in the corresponding input element, ensuring that the displayed value is in sync with the component's state. However, it's important to note that changes made directly in the input field do not influence the component property. This behavior emphasizes a unidirectional flow of data—where the component drives the value displayed in the UI—making it easier to manage changes and state within the application. This design choice is vital for maintaining predictable data flows and ensuring consistent application behavior.

3. The `[(ngModel)]` directive in `info.component.html`  facilitates two-way data binding between a component's property and a corresponding form element. This powerful binding mechanism ensures that the value of the form element is continuously synchronized with the component property. Consequently, any modifications made in the input field will instantly update the component property, and changes to the property itself will simultaneously reflect in the input element.

This dual synchronization is particularly beneficial for managing user inputs in real-time, enabling immediate feedback and interaction within the application. For example, as users type into the input field, the component's logic can dynamically respond to these inputs, allowing for features such as input validation, conditional rendering, or real-time updates to other parts of the UI. The `[(ngModel)]` directive enhances user experience by ensuring that the application remains intuitive and responsive to user actions, ultimately promoting a smoother and more interactive interface. 

## Part 2

### Screenshots

![](./part2Screenshots/musicAppHome.png)

This screenshot displays the home page of our music app, featuring a navigation bar that provides routes to the various other available pages. The nav bar acts as a crucial component for user navigation, allowing visitors to seamlessly transition between different sections of the app, such as exploring music genres, viewing playlists, or accessing user-specific features. Its design is likely intended to enhance the user experience by making it easy to navigate throughout the application without losing context. By ensuring that users can easily reach any part of the app, the nav bar contributes to a more organized and enjoyable browsing experience, ultimately encouraging users to engage further with the content offered.


![](./part2Screenshots/musicAppGCULink.png)

This screenshot illustrates the external link from our music app to GCU's website. The presence of this link serves as a valuable resource for users, providing them with direct access to relevant information about GCU (Grand Canyon University), such as academic programs, campus resources, and other institutional details. By integrating external links, the music app enhances its functionality, allowing users to gather additional context or explore related content without leaving the application. This approach not only enriches the user experience but also fosters a sense of connectivity with external entities, showcasing the app's capability to bridge users with broader informational landscapes.


![](./part2Screenshots/musicAppCreateAlbum.png)

The album creation form for the music app is designed to facilitate the process of adding new albums to the application's library. This form typically includes various input fields that allow users to provide essential details about the album, such as the album title, artist name, genre, release date, and cover art.

The layout of the form may incorporate elements such as text input fields, dropdown menus for genre selection, and file upload options for cover images. Additionally, validation rules could be integrated to ensure that all required information is provided before submission, enhancing the overall usability and reliability of the form.

By streamlining the album creation process, this form empowers users to contribute to the music app's content, fostering a more engaging and interactive environment. It not only allows users to express their musical preferences but also enriches the app's library, making it a more comprehensive resource for music lovers.

![](./part2Screenshots/musicAppArtistList.png)

This is the list of artists displayed within the music app, showcasing various contributors to the music library. Notably, this list includes a custom entry that was added via the previous album creation page. This feature allows users to dynamically add new artists, providing flexibility and personalization to the music library.

Each entry in the artist list may feature essential details, such as the artist's name, genre, and possibly links to their albums or profiles. By including a custom entry option, the application encourages user engagement, allowing users to input their favorite or newly discovered artists who may not be part of the pre-existing catalog.

This approach not only enriches the content of the app but also fosters a sense of community among users as they contribute to the curation of music and artist profiles. Ultimately, it enhances the user experience by making the app more reflective of the diverse musical landscape that users enjoy.

![](./part2Screenshots/musicAppAbout.png)

This screenshot displays the "About" box that appears when the "About" option is tapped in the navigation bar of the music app. The "About" box typically provides essential information regarding the app, such as its purpose, features, and the team behind its development.

In this section, users can expect to find details about the app's mission, its focus on connecting music lovers, and how to navigate its various functionalities effectively. It may also include contact information for support or feedback, acknowledgments of contributors, and perhaps links to social media or other platforms associated with the app.

By presenting clear and concise information in the "About" box, the app enhances transparency and engages users by informing them about the value and intention behind the app's creation. This feature is crucial for building trust and fostering a connection between users and the app developers, ultimately enriching the overall user experience.

### Research

#### Documented `music-service.service.ts`

```typescript
import { Injectable } from '@angular/core';

import exampledata from '../../data/sample-music-data.json';

import { Album } from '../models/Album';
import { Artist } from '../models/Artist';
import { Track } from '../models/Track';

@Injectable({ providedIn: 'root' })
export class MusicServiceService {
	// Stores the list of artists
	private readonly artists: Artist[] = [];

	// Stores the list of albums
	private readonly albums: Album[] = [];

	constructor() {
   		// Initialize the artist and albums data upon service instantiation
    		this.createArtists();
    		this.createAlbums();
  	}

	// Creates and adds sample artists to the list
	private createArtists(): void {
		this.artists.push(new Artist(0, 'The Beatles'));
	}

	// Creates and adds albums to the list based on sample data
	private createAlbums(): void {
		exampledata.forEach((data: any) => {
			if (data.artist === 'The Beatles') {
				const tracks = data.tracks.map((trackData: any) => new Track(trackData.id, trackData.number, trackData.title, trackData.lyrics, trackData.video));
				const album = new Album(data.id, data.title, data.artist, data.description, data.year, data.image, tracks);
				this.albums.push(album);
			}
		});
	}

	// Retrieves list of artists
	public getArtists(): Artist[] {
		return this.artists;
	}

	// Retrieves list of albums
	public getAlbums(artist: string): Album[] {
		return this.albums;
	}

	// Retrieves a specific album by artist name and album ID
	public getAlbum(artist: string, id: number): Album | undefined {
		const album = this.albums.find((a) => a.Artist === artist && a.Id === id);

		if (album) {
			const tracks = album.Tracks.map((track) => new Track(track.Id, track.Number, track.Title, track.Lyrics, track.Video));
			return new Album(album.Id, album.Title, album.Artist, album.Description, album.Year, album.Image, tracks);
		}

		return undefined;
	}

	// Adds a new album to the list
	public createAlbum(album: Album): void {
		this.albums.push(album);
	}

	// Updates an existing album by replacing it
	public updateAlbum(album: Album): void {
		const index = this.albums.findIndex((a) => a.Id === album.Id);

		if (index !== -1) {
			this.albums.splice(index, 1, album);
		}
	}

	// Deletes an album from the list by ID
	public deleteAlbum(id: number, artist: string): void {
		const index = this.albums.findIndex((a) => a.Id === id);

		if (index !== -1) {
			this.albums.splice(index, 1);
		}
	}
}
```

## Conclusion

In this activity, we gained valuable insights into setting up a frontend application using Angular. We explored the foundational concepts of data management and how components effectively communicate with their respective views, which are essential for creating interactive and dynamic user interfaces.

A significant focus of the activity was on configuring the Angular Router, which enables seamless navigation between various views of the application. By implementing routing, we can link different pages within our app, allowing users to easily access different functionalities and information without the need to reload the entire application.

Furthermore, we discussed the potential for future enhancements, particularly in connecting these applications to a REST API. This integration would allow our frontend to interact with live data sourced from our SQL server, creating a more dynamic and responsive user experience. As we advance in our learning, the ability to pull real-time data will significantly improve the app's functionality and relevance, positioning it as a robust platform for users to engage with their favorite music and artists. Overall, this activity laid a solid foundation for building more complex applications in Angular while preparing us for future integrations with backend services.