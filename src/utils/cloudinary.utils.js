import { v2 as cloudinary } from "cloudinary";
import config from "../config/config.js";
import fs from "fs";

cloudinary.config({
    cloud_name: config.cloudinary_cloud_name,
    api_key: config.cloudinary_api_key,
    api_secret: config.cloudinary_api_secret,
});

async function uploadOnCloudinary(localFileUrl) {
    try {
        const response = await cloudinary.uploader.upload(localFileUrl, {
            resource_type: "image",
            folder: "chatapp/profile_pics",
        });
        console.log("Image Uploaded on Cloudinary at url :", response.url);
        fs.unlinkSync(localFileUrl);
        return response;
    } catch (err) {
        console.error("Cloudinary Error: ", err);
        return err;
    }
}

async function deleteOnCloudinary(url) {
    try {
        const response = await cloudinary.uploader.destroy(url);
        return response;
    } catch (err) {
        console.log(err);
        return err;
    }
}

export { uploadOnCloudinary, deleteOnCloudinary };
