# Full-Stack User Management Application - README

## 📌 Overview
This project consists of a **Spring Boot backend** and a **React frontend** that work together to manage users. It allows fetching, filtering, sorting, and viewing user details, including their profile images.

---
## 🔹 Backend (Spring Boot) Setup
### 1️⃣ Prerequisites
- **Java 17+** installed
- **Maven** installed (`mvn -v` to verify)
- **Spring Boot 3+**

### 2️⃣ Build and Run the Backend
```sh
# Clone the repository (if not already cloned)
git clone <repo-url>
cd backend

# Build and run using Maven
mvn clean install
mvn spring-boot:run
```

### 3️⃣ Access API Endpoints
- **Base URL:** `http://localhost:8080`
- **H2 Console:** `http://localhost:8080/h2-console`
  - **JDBC URL:** `jdbc:h2:mem:testdb`
  - **Username:** `sa` (leave password blank)
- **Swagger API Docs:** `http://localhost:8080/swagger-ui.html`

### 4️⃣ Load Initial Data
To populate the H2 database with sample users, run:
```sh
curl -X POST http://localhost:8080/api/users/load
```

### 5️⃣ Available API Endpoints
```sh
# Load Users from External API
POST http://localhost:8080/api/users/load

# Get All Users
GET http://localhost:8080/api/users

# Get Users by Role
GET http://localhost:8080/api/users/role/{role}

# Get Users Sorted by Age
GET http://localhost:8080/api/users/sorted?order=asc
GET http://localhost:8080/api/users/sorted?order=desc

# Search User by ID or SSN
GET http://localhost:8080/api/users/search?id=1
GET http://localhost:8080/api/users/search?ssn=900-590-289
```

---
## 🔹 Frontend (React) Setup
### 1️⃣ Prerequisites
- **Node.js 18+** installed (`node -v` to verify)
- **npm** or **yarn** installed (`npm -v` or `yarn -v`)

### 2️⃣ Install Dependencies
```sh
# Navigate to the frontend folder
cd frontend-app

# Install dependencies
npm install  # or yarn install
```

### 3️⃣ Start the Development Server
```sh
npm run dev  # or yarn start
```
- The app will be available at `http://localhost:5173`.
- Ensure the backend is running before starting the frontend.

### 4️⃣ Project Structure
```sh
frontend-app/
│── src/
│   ├── components/  # UI components (Atoms, Molecules, Organisms, Pages)
│   ├── services/    # API calls
│   ├── hooks/       # Custom React hooks
│   ├── context/     # Global state management
│   ├── routes/      # Application routing
│   ├── App.tsx      # Main App component
│   ├── main.tsx     # Entry point
│── public/          # Static assets
│── README.md        # Readme for frontend
```

### 5️⃣ Common Debugging Issues
**Backend Not Running?**
- Check logs using `mvn spring-boot:run`
- Ensure port 8080 is available (`netstat -an | grep 8080`)

**Frontend Not Fetching Data?**
- Confirm backend is running
- Check `CORS` settings in Spring Boot
- Open DevTools (`F12`) and check network requests

### Best Practices
- Make sure to load data everytime you made an update

---
## ✅ Final Notes
- The `backend APIs` are build independently but depends on external API and uses inMemory H2 DB
- The `frontend APIs` are dependent on backend APIs to display the Data.
