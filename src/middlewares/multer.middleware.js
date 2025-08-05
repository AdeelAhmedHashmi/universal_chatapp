import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const avatarStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        const destPath = path.resolve(__dirname, "../public/temp");

        cb(null, destPath);
    },

    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const random = Math.floor(Math.random() * 100000);
        cb(null, `${Date.now()}_${random}${ext}`);
    },
});

const avatarFileFilter = (req, file, cb) => {
    console.log("> DUBUGGER: ", file);
    if (file.mimetype.startsWith("image/")) {
        cb(null, true);
    } else {
        cb(new Error("Only image files are allowed!"), false);
    }
};

const avatarUpload = multer({
    storage: avatarStorage,
    fileFilter: avatarFileFilter,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5mb
});

export default avatarUpload;
