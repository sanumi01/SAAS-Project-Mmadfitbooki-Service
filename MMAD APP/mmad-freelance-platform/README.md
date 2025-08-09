# MMAD Cloud & Data Freelance Platform

Welcome to the MMAD Cloud & Data Freelance Platform! This project is designed to connect freelancers with clients, allowing for seamless service showcasing and enquiry submissions. Below is an overview of the project structure and its components.

## Project Structure

```
mmad-freelance-platform
├── backend
│   ├── src
│   │   ├── app.ts
│   │   ├── controllers
│   │   │   ├── authController.ts
│   │   │   ├── freelancerController.ts
│   │   │   ├── clientController.ts
│   │   │   └── enquiryController.ts
│   │   ├── models
│   │   │   ├── user.ts
│   │   │   ├── service.ts
│   │   │   └── enquiry.ts
│   │   ├── routes
│   │   │   ├── authRoutes.ts
│   │   │   ├── freelancerRoutes.ts
│   │   │   ├── clientRoutes.ts
│   │   │   └── enquiryRoutes.ts
│   │   ├── services
│   │   │   ├── s3Service.ts
│   │   │   └── commissionService.ts
│   │   └── types
│   │       └── index.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── web
│   ├── src
│   │   ├── App.tsx
│   │   ├── components
│   │   │   ├── FreelancerRegister.tsx
│   │   │   ├── ServiceShowcase.tsx
│   │   │   ├── ClientEnquiryForm.tsx
│   │   │   └── Dashboard.tsx
│   │   ├── pages
│   │   │   ├── Home.tsx
│   │   │   ├── Freelancers.tsx
│   │   │   └── Enquiries.tsx
│   │   └── types
│   │       └── index.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── mobile
│   ├── src
│   │   ├── App.tsx
│   │   ├── components
│   │   │   ├── FreelancerRegister.tsx
│   │   │   ├── ServiceShowcase.tsx
│   │   │   ├── ClientEnquiryForm.tsx
│   │   │   └── Dashboard.tsx
│   │   ├── screens
│   │   │   ├── HomeScreen.tsx
│   │   │   ├── FreelancersScreen.tsx
│   │   │   └── EnquiriesScreen.tsx
│   │   └── types
│   │       └── index.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
└── README.md
```

## Features

- **Freelancer Registration**: Freelancers can register and create profiles to showcase their services.
- **Client Enquiries**: Clients can submit enquiries for services they are interested in.
- **Service Showcase**: A dedicated section for freelancers to display their services.
- **Secure Storage**: All data is securely stored in Amazon S3.
- **Commission Model**: The platform operates on a 10% commission model for transactions.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend, web, and mobile directories and install the dependencies:
   ```
   cd backend
   npm install
   cd ../web
   npm install
   cd ../mobile
   npm install
   ```

3. Configure your AWS credentials for S3 access in the backend.

4. Start the backend server:
   ```
   cd backend
   npm start
   ```

5. For the web application, navigate to the web directory and start the development server:
   ```
   cd web
   npm start
   ```

6. For the mobile application, navigate to the mobile directory and start the application:
   ```
   cd mobile
   npm start
   ```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.