const config = {
    port: process.env.PORT || 3000,
    database_url: process.env.DATABASE_URL,
    database_name: process.env.DATABASE_NAME,
    origin: process.env.ORIGINS,
    token_secret: process.env.TOKEN_SECRET,
    cloudinary_cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    cloudinary_api_key: process.env.CLOUDINARY_API_KEY,
    cloudinary_api_secret: process.env.CLOUDINARY_API_SECRET,
};

export default config;
