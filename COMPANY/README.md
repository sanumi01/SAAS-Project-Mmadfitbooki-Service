# Mamaad Consultant Limited Website

Professional website for Mamaad Consultant Limited - Cloud Solutions & Data Analytics Excellence

## Company Information
- **Company Name**: Mamaad Consultant Limited
- **Location**: Larkhall, Scotland, United Kingdom
- **Services**: Cloud Solutions, Data Analytics, Business Intelligence

### Leadership Team
- **Mr. Kolade Adio** - Senior Director
- **Miss Maya Adio** - Co-Director  
- **Miss Meggy Adio** - Co-Director

## Project Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- AWS CLI (for S3 deployment)

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
This will start the development server at `http://localhost:3000`

### Build for Production
```bash
npm run build
```
This creates a `dist` folder with the production-ready files.

## AWS S3 Deployment Guide

### Step 1: Create S3 Bucket
```bash
# Replace 'your-bucket-name' with your desired bucket name
aws s3 mb s3://your-bucket-name --region us-east-1
```

### Step 2: Configure Bucket for Static Website Hosting
```bash
aws s3 website s3://your-bucket-name --index-document index.html --error-document index.html
```

### Step 3: Set Bucket Policy for Public Access
Create a file called `bucket-policy.json`:
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::your-bucket-name/*"
        }
    ]
}
```

Apply the policy:
```bash
aws s3api put-bucket-policy --bucket your-bucket-name --policy file://bucket-policy.json
```

### Step 4: Upload Website Files
```bash
# Build the project first
npm run build

# Upload files to S3
aws s3 sync dist/ s3://your-bucket-name --delete
```

### Step 5: Access Your Website
Your website will be available at:
```
http://your-bucket-name.s3-website-us-east-1.amazonaws.com
```

## Features

### Website Sections
- **Header**: Company branding and navigation
- **Hero Section**: Main call-to-action
- **About Section**: Company information and leadership team
- **Services Section**: Detailed service offerings
- **Contact Section**: Customer inquiry form
- **Footer**: Company details and links

### Services Offered
1. **Cloud Infrastructure**: AWS/Azure solutions, EC2, S3, Lambda, VPC, IAM
2. **Database Engineering**: PostgreSQL, MySQL, Snowflake, DynamoDB, NoSQL/NewSQL
3. **Business Intelligence**: Power BI, Tableau, data visualization, predictive analytics
4. **DevOps & Automation**: CI/CD pipelines, Kubernetes, Docker, CloudFormation
5. **Data Analytics**: ETL pipelines, data warehousing, data lakes
6. **System Integration**: Enterprise systems, API integration, legacy modernization

### Technical Stack
- **Frontend**: React 18 with TypeScript
- **Styling**: Custom CSS with responsive design
- **Build Tool**: Webpack 5
- **Deployment**: AWS S3 Static Website Hosting

### SEO Features
- Meta tags for search engines
- Open Graph tags for social media
- Structured data (Schema.org)
- Semantic HTML structure
- Mobile-responsive design

## Customization

### Updating Company Information
Edit the content in `src/App.tsx` to update:
- Company details
- Leadership team information
- Service descriptions
- Contact information

### Styling Changes
Modify `src/styles.css` to customize:
- Colors and branding
- Layout and spacing
- Typography
- Responsive breakpoints

### Adding New Sections
Add new sections in `src/App.tsx` and corresponding styles in `src/styles.css`.

## Contact Form Integration

The contact form currently shows an alert on submission. To integrate with a backend service:

1. **AWS Lambda + API Gateway**: Create a serverless function to handle form submissions
2. **Third-party services**: Integrate with services like Formspree, Netlify Forms, or EmailJS
3. **Custom backend**: Build your own API to handle form data

## Performance Optimization

- Images are optimized for web
- CSS is minified in production
- JavaScript is bundled and minified
- Lazy loading for better performance
- Responsive images for different screen sizes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2025 Mamaad Consultant Limited. All rights reserved.