# SEB_VC_AditiTarase_10469
This is a full-stack Java learning platform (like an online classroom) that includes:
A React + TypeScript frontend
A Node.js + Express backend
MongoDB for database
Java for compiling/running user code

Features:
Authentication (Login/Signup)
Interactive code editor (likely using Monaco Editor)
Java code execution (Java files present: Main.java)
Course & topic viewing
Assignment and quiz handling
Theming with styled-components
Protected routes via auth middleware

🛠 Technologies Used
🔹 Frontend (in src/)
React with TypeScript
Monaco Editor (monaco-editor-react.d.ts)
Styled-components for theming (theme, styled.d.ts)

Context API for:
Authentication (AuthContext.tsx)
Theming (ThemeContext.tsx)

Component structure includes:
Code editor (CodeEditor.tsx)

Views: CoursesView, AssignmentsView, TopicView, etc.

UI: Navbar, Sidebar, Login, Signup, etc.

Quiz.tsx and ProgressView.tsx suggest learning progress & quiz features

🔹 Backend (in backend/)
Node.js + Express
MongoDB/Mongoose (inferred from models/User.js)
Auth middleware (auth.js)
server.js is likely the Express app entry point

🔹 Code Execution (Java)
Java files (Main.java, AssignmentOperator.class) are present
Suggests support for compiling & running Java code
Possibly using child_process on the backend to run .java files and return the output

⚙️ Setup Instructions 

Create Project Folder
mkdir JAVA-CLASSROOM
cd JAVA-CLASSROOM

Setup Backend
mkdir backend
cd backend
npm init -y
npm install express mongoose dotenv cors jsonwebtoken bcryptjs
🔹 Folder structure in backend:
backend/
├── middleware/
│   └── auth.js                ← Auth middleware
├── models/
│   └── User.js                ← Mongoose model for user
├── routes/
│   └── auth.js                ← Auth routes (login/signup)
├── server.js                  ← Main Express app
├── .env                       ← Environment variables

🔹 Example .env:
PORT=5000
MONGO_URI=mongodb://localhost:27017/java-classroom
JWT_SECRET=your_secret_key

🔹 Run backend:
node server.js
Setup Frontend (React + TypeScript)
In root folder:
npx create-react-app frontend --template typescript
cd frontend
🔹 Install dependencies:
npm install axios styled-components @types/styled-components react-router-dom @types/react-router-dom
npm install monaco-editor monaco-editor-react
🔹 Folder structure in frontend/src:
src/
├── components/
│   ├── CodeEditor.tsx            ← Monaco editor for Java code
│   ├── AssignmentsView.tsx
│   ├── CoursesView.tsx
│   ├── Quiz.tsx
│   └── ...
├── data/
│   └── courseData.ts             ← Course content
├── theme/
│   ├── theme.ts
│   ├── styled.d.ts
│   └── ThemeContext.tsx
├── @types/
│   └── monaco-editor-react.d.ts
├── AuthContext.tsx               ← Context for login status
├── App.tsx
├── index.tsx
└── index.css

Java Code Execution Support
In project root:
touch Main.java
Add a sample class to test compilation:

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello from Java!");
    }
}
Backend (in server.js) needs to run Java code:
Use child_process in Node.js to:
Write code to .java file
Compile using javac
Run using java

Install required Node.js module:
npm install child_process
✅ Final Folder Summary
JAVA-CLASSROOM/
├── backend/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .env
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── tsconfig.json
├── Main.java
└── README.md (optional)

🚀 Run Instructions
Start Backend
cd backend
node server.js

Start Frontend
cd frontend
npm start

1. Frontend
cd frontend
npm install
npm start

3. Backend
cd backend
npm install
node server.js

5. Java Compilation Support
Ensure Java (JDK) is installed and available in system PATH
The backend might use javac and java CLI commands for compilation and execution

4. Environment Setup
.env file in backend/ likely contains:
PORT=5000
MONGO_URI=mongodb://localhost:27017/java-classroom
JWT_SECRET=your_jwt_secret

Video Link
https://drive.google.com/file/d/1awMn2-GPPWGO7KpiIMIeRJe8WvXCYNif/view?usp=sharing
