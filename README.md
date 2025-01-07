To-Do App Backend Assessment

Welcome to the backend assessment for our organization! This task is designed to evaluate your skills in backend development, including authentication, CRUD operations, and API design. Follow the instructions below to complete the assessment and submit your work.

Assessment Requirements

You are required to build a simple To-Do App Backend with the following features:

Core Requirements
	1.	User Authentication:
	•	Registration and Login (with JWT tokens for authentication).
	•	Passwords should be hashed using bcrypt.
	2.	CRUD Operations for To-Dos:
	•	Create: Add a new To-Do item.
	•	Read: Fetch all To-Do items for the logged-in user.
	•	Update: Edit a specific To-Do item.
	•	Delete: Remove a specific To-Do item.
	3.	Authorization:
	•	Only the logged-in user should be able to access or modify their To-Do items.
	4.	Validation:
	•	Validate user input (e.g., email format, password strength, etc.).
	•	Ensure all required fields are provided (e.g., title for To-Dos).

Technical Guidelines
	1.	Use Node.js and Express.js for the backend.
	2.	Use MongoDB as the database (with Mongoose for schema management).
	3.	Use JWT for user authentication and authorization.
	4.	Write clean and modular code (e.g., separate routes, controllers, models, and middlewares).
	5.	Include meaningful error handling for APIs (e.g., validation errors, authorization errors, etc.).

Project Setup

Folder Structure

Your project should follow this structure:

todo-assessment-backend/
├── config/
│   └── db.js               # Database connection
├── controllers/
│   ├── todoController.js   # CRUD operations for To-Dos
│   └── userController.js   # User registration and login
├── middlewares/
│   ├── authMiddleware.js   # Protect routes for authenticated users
│   └── errorHandler.js     # Centralized error handling
├── models/
│   ├── todoModel.js        # Mongoose schema for To-Dos
│   └── userModel.js        # Mongoose schema for Users
├── routes/
│   ├── todoRoutes.js       # Routes for To-Do CRUD
│   └── userRoutes.js       # Routes for User Authentication
├── validations/
│   ├── todoValidation.js   # Validation for To-Do inputs
│   └── userValidation.js   # Validation for User inputs
├── .env                    # Environment variables
├── app.js                  # Main app configuration
├── server.js               # Server initialization
├── package.json            # Dependencies and scripts
├── README.md               # Assessment instructions

Steps to Set Up the Project
	1.	Clone the repository:

git clone 
cd assessment-backend


	2.	Install dependencies:

npm install


	3.	Create a .env file in the root directory and add the following variables:

MONGO_URI=<Your MongoDB Connection String>
JWT_SECRET=<Your Secret Key>
PORT=5000


	4.	Start the server:

npm start


	5.	Test the APIs using tools like Postman or Insomnia.

API Endpoints

User Routes

Endpoint	Method	Description
/api/users/register	POST	Register a new user
/api/users/login	POST	Login and get JWT token

To-Do Routes

Endpoint	Method	Description
/api/todos	POST	Create a new To-Do
/api/todos	GET	Get all To-Dos for the logged-in user
/api/todos/:id	PUT	Update a specific To-Do
/api/todos/:id	DELETE	Delete a specific To-Do

Submission Guidelines

Follow the steps below to complete and submit your assessment:

Step 1: Fork the Repository
	1.	Go to the repository on GitHub:
	2.	Click the Fork button to create a copy of this repository in your GitHub account.

Step 2: Clone the Repository

Clone the forked repository to your local machine:

git clone 
cd assessment-backend

Step 3: Create a New Branch

Create a branch for your work:

git checkout -b <your-branch-name>

Example:

git checkout -b john-doe-assessment

Step 4: Implement the Features
	1.	Complete the requirements listed in the Assessment Requirements section.
	2.	Ensure all endpoints are working and properly tested.

Step 5: Commit and Push Your Work
	1.	Add and commit your changes:

git add .
git commit -m "Completed backend assessment"


	2.	Push your branch to your forked repository:

git push origin <your-branch-name>

Step 6: Submit a Pull Request
	1.	Go to the original repository:
	2.	Open the Pull Requests tab and click New Pull Request.
	3.	Select the assessment-template branch as the base and your branch as the compare branch.
	4.	Add a meaningful title (e.g., “Submission by John Doe”) and a description if needed.
	5.	Submit the pull request.

Evaluation Criteria

Your submission will be evaluated based on the following:
	1.	Code Quality:
	•	Clean, modular, and readable code.
	2.	Functionality:
	•	All features should work as expected.
	3.	Error Handling:
	•	Proper validation and meaningful error messages.
	4.	Documentation:
	•	Clear and concise comments in the code.

Good Luck! 🚀

If you have any questions, feel free to reach out to the hiring team.