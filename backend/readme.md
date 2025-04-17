o run your Spring Boot application, follow these steps:

1️⃣ Build and Run the Application
Using Maven
mvn clean install
mvn spring-boot:run

2️⃣ Access the APIs
Once the application starts, it should be available at:
📌 Base URL: http://localhost:8080

3️⃣ Open H2 Database Console
Visit http://localhost:8080/h2-console

JDBC URL: jdbc:h2:mem:testdb
Username: sa
Password: (leave blank)

4️⃣ Open Swagger API Documentation
Visit: http://localhost:8080/swagger-ui.html

5️⃣Load the Data into H2 DB using post request
Hit : http://localhost:8080/api/users/load




Endpoints to Test
1️⃣ Load Users from External API
POST http://localhost:8080/api/users/load

2️⃣ Get All Users (List of all available users)
GET http://localhost:8080/api/users

3️⃣ Get Users by Role (List all users based on role)
GET http://localhost:8080/api/users/role/{role}

4️⃣ Get Users Sorted by Age(List of users sorted by age in ascending or descending order)
GET http://localhost:8080/api/users/sorted?order=asc  # Ascending
GET http://localhost:8080/api/users/sorted?order=desc  # Descending

5️⃣ Search User by ID or SSN (Find a specific user by id or ssn)
GET http://localhost:8080/api/users/search?id=1
GET http://localhost:8080/api/users/search?ssn=900-590-289


Note : the code fetches only used details for working purpose.

