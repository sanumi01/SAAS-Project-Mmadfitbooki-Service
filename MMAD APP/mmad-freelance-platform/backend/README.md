# MMAD Freelance Platform Backend

## Overview
The MMAD Freelance Platform is a full-stack application designed to connect freelancers with clients. This backend service handles user authentication, freelancer profiles, client enquiries, and integrates with Amazon S3 for secure storage of files.

## Features
- User registration and authentication
- Freelancer profile management
- Service showcasing by freelancers
- Client enquiry submission
- Secure file storage using Amazon S3
- 10% commission model on transactions

## Technologies Used
- Node.js
- TypeScript
- Express.js
- MongoDB (or any preferred database)
- AWS SDK for S3 integration

## Getting Started

### Prerequisites
- Node.js
- npm
- AWS account for S3

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the backend directory:
   ```
   cd mmad-freelance-platform/backend
   ```
3. Install dependencies:
   ```
   npm install
   ```

### Configuration
- Create a `.env` file in the backend directory and add your AWS credentials and other necessary configurations.

### Running the Application
To start the backend server, run:
```
npm start
```

### API Endpoints
- **Authentication**
  - POST `/api/auth/register` - Register a new user
  - POST `/api/auth/login` - Authenticate a user

- **Freelancer**
  - GET `/api/freelancers` - Get all freelancers
  - POST `/api/freelancers` - Create a new freelancer profile

- **Client Enquiries**
  - POST `/api/enquiries` - Submit a new enquiry
  - GET `/api/enquiries` - Get all enquiries

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements
- Thanks to the open-source community for their contributions and support.