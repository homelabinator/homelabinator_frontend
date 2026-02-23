Given the "Frontend" project in Figma at the link https://www.figma.com/design/UYPTO8kuDxbYQNaeY5gIuS/Frontend?node-id=53-20&t=X5LJMX6DT6GKanus-0, create an App Store like static site as a Hugo Site.
- The UI components should be comprised of partials, for example, the "categories" panes should be made based off of the hugo.toml config, with the hugo.toml defining a max app width for each category.

- The content of the site will be apps defined in the "content/apps/" folder and each app will have the following properties, and the description will be the actual markdown content:
    - Title
    - Replaces
    - Tagline
    - Long Description
    - List of screenshots
    - Icon Link
    - Link to original developers website
    - Docker downloads
    - Github stars

- The apps should also be their own partial UI components that will be within the categories.

- This app will interface with an external program that is not yet developed. For now, when the "Add" button is clicked, it should call a placeholder JS function that takes in the slug name of the app.

- The "User Install Screen" will be apparent after clicking the "Next" button in the lower right.

- The next button will talk to a backend that has yet to be build to get a download link for the ISO image. Leave a placeholder function call in here as well.
