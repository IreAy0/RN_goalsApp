# Todo App

A simple React Native Todo App that allows users to add, view, edit, and delete goals with descriptions. The app uses React Context API for state management and AsyncStorage for data persistence.

## Features

- Add goals with a title and description.
- View a list of all goals.
- View details of a specific goal.
- Edit goal details.
- Delete a goal.
- Data persistence using AsyncStorage.

## Installation

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

### Steps

1. Clone the repository:

    ```sh
    git clone https://github.com/IreAy0/RN_goalsApp
    ```

2. Change into the project directory:

    ```sh
    cd RN_goalsApp
    ```

3. Install dependencies:

    ```sh
    npm install
    ```

4. Start the Expo development server:

    ```sh
    npx expo start
    ```

5. Follow the instructions in the terminal to open the app on your emulator or physical device.

## Project Structure│
├── assets/
│ └── images/
│ └── goal.png
│
├── components/
│ ├── GoalItem.js
│ ├── GoalInput.js
│ └── GoalsList.js
│
├── screens/
│ ├── Home.js
│ ├── GoalDetails.js
│ └── EditGoal.js
│
├── store/
│ └── GoalContext.js
│
├── App.js
├── package.json
└── README.md

## Usage

### Add a Goal

1. Click the "Add Goal" button.
2. Enter the title and description of the goal.
3. Press "Add Goal" to save.

### View Goal Details

1. Tap on a goal in the goals list.
2. View the goal details.

### Edit a Goal

1. While viewing goal details, press "Edit".
2. Modify the title and/or description.
3. Save changes.

### Delete a Goal

1. While viewing goal details, press "Delete".
