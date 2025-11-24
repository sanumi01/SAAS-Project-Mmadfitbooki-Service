# Mamaad Consultant Limited Website

This project contains the website for Mamaad Consultant Limited, showcasing the company's services in data, cloud, and business intelligence. The website is structured to provide information about the company, its directors, and a customer inquiry form.

## Project Structure

```
mamaad-consultant-website
├── src
│   ├── index.html        # Main landing page
│   ├── about.html        # Detailed information about the company
│   ├── inquiry.html      # Customer inquiry form
│   ├── css
│   │   └── styles.css    # CSS styles for the website
│   └── js
│       └── main.js       # JavaScript functionality
```

## Hosting on S3

To host this website on an Amazon S3 bucket, follow these steps:

1. **Create an S3 Bucket**:
   - Log in to your AWS Management Console.
   - Navigate to S3 and create a new bucket. Ensure the bucket name is unique.

2. **Upload Files**:
   - Upload the contents of the `src` directory to your S3 bucket.

3. **Configure Bucket for Website Hosting**:
   - Go to the properties of your bucket.
   - Enable "Static website hosting."
   - Set the index document to `index.html`.

4. **Set Permissions**:
   - Update the bucket policy to allow public access to your files. You can use the following policy:
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
   - Replace `your-bucket-name` with the name of your S3 bucket.

5. **Access Your Website**:
   - After configuring the bucket, you can access your website using the endpoint provided in the static website hosting settings.

## Additional Setup Information

- Ensure that all files are correctly linked, especially the CSS and JavaScript files in the HTML documents.
- Test the inquiry form functionality to ensure it works as intended.

For any further questions or issues, please contact the development team.