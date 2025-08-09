# MMAD Cloud & Data Freelance Platform

## Overview
The MMAD Cloud & Data Freelance Platform is a full-stack application designed for freelancers and clients to connect seamlessly. Freelancers can register, showcase their services, and clients can submit enquiries. The platform operates on a commission model, charging a 10% fee on transactions.

## Features
- **Freelancer Registration**: Freelancers can create profiles and list their services.
- **Service Showcase**: A dedicated section for freelancers to display their offerings.
- **Client Enquiries**: Clients can submit enquiries directly to freelancers.
- **Secure Storage**: All data is securely stored in Amazon S3.
- **Commission Model**: A 10% commission is applied to transactions.

## Technology Stack
- **Frontend**: React (for both web and mobile applications)
- **Backend**: Node.js with Express
- **Database**: MongoDB (or any preferred database)
- **Cloud Storage**: Amazon S3 for file storage
- **TypeScript**: For type safety across the application

## Getting Started

### Prerequisites
- Node.js and npm installed
- MongoDB (or preferred database) set up
- AWS account for S3 storage

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the backend directory and install dependencies:
   ```
   cd mmad-freelance-platform/backend
   npm install
   ```
3. Navigate to the web directory and install dependencies:
   ```
   cd ../web
   npm install
   ```
4. Navigate to the mobile directory and install dependencies:
   ```
   cd ../mobile
   npm install
   ```

### Running the Application
- Start the backend server:
  ```
  cd backend
  npm start
  ```
- Start the web application:
  ```
  cd ../web
  npm start
  ```
- Start the mobile application:
  ```
  cd ../mobile
  npm start
  ```

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- Thanks to all contributors and the open-source community for their support.