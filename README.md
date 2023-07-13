# Flashcard App

This is an Angular project that showcases a flashcard app, which allows users to add, edit, and delete flashcards. The project also includes a service that manages the business logic related to flashcards.

## Features

- Add flashcards: Users can create new flashcards by providing a question and an answer.
- Edit flashcards: Existing flashcards can be edited to update the question or answer.
- Delete flashcards: Users have the ability to remove flashcards from the app.
- Flashcard Service: A dedicated service handles the CRUD operations for flashcards.
- Observables: The application utilizes observables in the services to manage the application's state effectively.
- Immutability and OnPush Change Detection: The app employs immutability and the OnPush change detection strategy to enhance performance.

## Technologies Used

- Angular: The project is built using the Angular framework.
- TypeScript: The programming language used for developing the application.
- HTML and CSS: The frontend of the app is created using HTML for markup and CSS for styling.

## Getting Started

To run this project locally, please follow the steps below:

1. Clone the repository:

   ```
   git clone https://github.com/your-username/flashcard-app.git
   ```

2. Navigate to the project directory:

   ```
   cd flashcard-app
   ```

3. Install the dependencies:

   ```
   npm install
   ```

4. Start the development server:

   ```
   ng serve
   ```

5. Open your web browser and visit `http://localhost:4200` to access the flashcard app.

## Usage

Once the flashcard app is running, you can perform the following actions:

- Add Flashcard:

  - Click on the "Add Flashcard" button.
  - Fill in the question and answer fields.
  - Click "Save" to create the flashcard.

- Edit Flashcard:

  - Locate the flashcard you want to edit.
  - Click on the "Edit" button.
  - Update the question or answer fields.
  - Click "Save" to update the flashcard.

- Delete Flashcard:
  - Find the flashcard you wish to delete.
  - Click on the "Delete" button.
  - Confirm the deletion when prompted.

## Acknowledgements

- [Angular](https://angular.io/) - The web framework used
- [TypeScript](https://www.typescriptlang.org/) - Programming language
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) and [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Frontend technologies
