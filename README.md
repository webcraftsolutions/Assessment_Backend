# To-Do Application Backend Assessment

## Description
This is a backend application for managing user authentication and performing CRUD operations on To-Do items. The application ensures secure data management and user-specific To-Do operations using JWT authentication, Node.JS, Express.js, and MongoDB. Input validations and meaningful error handling enhance the reliability of the system.

## Features
1. **User Authentication**:
   - Registration and Login.
   - Passwords hashed using bcrypt.
   - JWT tokens for secure authentication.

2. **To-Do Management**:
   - Create, Read, Update, and Delete To-Do items.
   - User-specific operations with strict access control.

3. **Input Validation**:
   - Validates user inputs like email format and required fields.
   - Ensures that the To-Do title is provided.

4. **Error Handling**:
   - Centralized error handler for clean and consistent responses.

## Folder Structure
```
assessment_backend/
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
├── README.md               # Documentation
```

## Installed Packages
- **express**: Web framework for building APIs.
- **mongoose**: ODM for MongoDB.
- **mongodb**: is a NoSQL database that stores data in flexible, JSON-like documents.
- **jsonwebtoken**: JWT for user authentication.
- **bcryptjs**: Password hashing.
- **dotenv**: Environment variable management.
- **express-validator**: Input validation middleware.
- **nodemon**: Development tool for automatic server restarts.

## API Endpoints

### User Routes
| Method | Endpoint           | Description                | Authentication |
|--------|--------------------|----------------------------|----------------|
| POST   | `/api/users/register` | Register a new user       | No             |
| POST   | `/api/users/login`    | Login user and get token  | No             |

### To-Do Routes
| Method | Endpoint           | Description                      | Authentication |
|--------|--------------------|----------------------------------|----------------|
| POST   | `/api/todos`       | Create a new To-Do              | Yes            |
| GET    | `/api/todos`       | Get all To-Do items for the user| Yes            |
| PUT    | `/api/todos/:id`   | Update a specific To-Do          | Yes            |
| DELETE | `/api/todos/:id`   | Delete a specific To-Do          | Yes            |

## Environment Variables
Create a `.env` file in the root directory and add the following variables:
```
PORT=5000
MONGO_URI=<Your MongoDB URI>
JWT_SECRET=<Your JWT Secret Key>
```

## Usage
### 1. Clone the Repository
```bash
git clone https://github.com/sajidsajad/Assessment_Backend
cd assessment_backend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file and configure the required variables as shown above.

### 4. Start the Server
```bash
use Node: Run node server.js
node: Starts the server but does not watch for file changes.

Or

use Nodemon: Run nodemon server.js
nodemon: Starts the server and watches for changes in the source code, automatically restarting the server when necessary.
```

### 5. Test the APIs
Use Postman or any API testing tool to test the following endpoints:

#### **Registration**
- **Endpoint**: `/api/users/register`
- **Method**: POST
- **Body**:
  ```json
  {
    "name": "testname",
    "email": "test@email.com",
    "password": "password"
  }
  ```

#### **Login**
- **Endpoint**: `/api/users/login`
- **Method**: POST
- **Body**:
  ```json
  {
    "email": "test@email.com",
    "password": "password"
  }
  ```

#### **Create To-Do**
- **Endpoint**: `/api/todos`
- **Method**: POST
- **Headers**:
  ```json
  {
    "Authorization": "Bearer <your_token>"
  }
  ```
- **Body**:
  ```json
  {
    "title": "test title",
    "description": "test description"
  }
  ```

#### **Get All To-Dos**
- **Endpoint**: `/api/todos`
- **Method**: GET
- **Headers**:
  ```json
  {
    "Authorization": "Bearer <your_token>"
  }
  ```

#### **Update To-Do**
- **Endpoint**: `/api/todos/:id`
- **Method**: PUT
- **Headers**:
  ```json
  {
    "Authorization": "Bearer <your_token>"
  }
  ```
- **Body**:
  ```json
  {
    "title": "modified test title",
    "description": "modified test description",
    "completed": true // default value of completed is false
  }
  ```

#### **Delete To-Do**
- **Endpoint**: `/api/todos/:id`
- **Method**: DELETE
- **Headers**:
  ```json
  {
    "Authorization": "Bearer <your_token>"
  }
  ```



