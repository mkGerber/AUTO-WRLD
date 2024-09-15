import AWS from 'aws-sdk';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Update AWS config using environment variables
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const s3 = new AWS.S3();

const uploadFile = async (file) => {
  const params = {
    Bucket: 'autowrld-image-bucket',
    Key: file.name,
    Body: file,
    ContentType: file.type,
  };

  try {
    const data = await s3.upload(params).promise();
    console.log('File uploaded successfully:', data.Location);
  } catch (error) {
    console.error('Error uploading file:', error);
  }
};

export { uploadFile };
