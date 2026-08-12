# Student Management REST API

A RESTful backend API built with **Node.js, Express.js, MongoDB, and Mongoose** for managing student records.

The project demonstrates core backend development concepts including **JWT authentication, role-based authorization, CRUD operations, search, filtering, sorting, pagination, image uploads, validation, and MongoDB relationships**.

---

##  Features

### Authentication & Authorization

- User registration
- User login
- Password hashing with bcrypt
- JWT-based authentication
- Protected routes
- Role-based authorization
- User roles such as `user` and `admin`

### Student Management

- Create students
- Get all students
- Get a single student
- Update students
- Delete students

### Student Query Features

- Search students by name
- Filter students by department
- Sort students by fields
- Ascending and descending sorting
- Pagination with page and limit
- Combine multiple query parameters

### File Uploads

- Upload student profile images
- Multer-based file handling
- Custom file storage
- File type validation
- File size limits
- Store uploaded file path in MongoDB

### MongoDB Relationships

- Connect students with users
- Store user references using MongoDB ObjectId
- Retrieve related user information using Mongoose `populate()`

---

## 🛠️ Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **bcrypt**
- **JSON Web Token (JWT)**
- **Multer**
- **Thunder Client**

---

## Project Structure

```text
student-management-api/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   └── studentController.js
│
├── middlewares/
│   ├── authMiddleware.js
│   ├── authorize.js
│   └── uploadMiddleware.js
│
├── models/
│   ├── user.js
│   └── student.js
│
├── routes/
│   ├── authRoutes.js
│   └── studentRoutes.js
│
├── uploads/
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```
---
## Author

Muhammed Usman
BS Computer Science
FAST-NUCES
