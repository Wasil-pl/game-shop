"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerOptions = void 0;
const multer_1 = require("multer");
exports.multerOptions = {
    limits: { fileSize: 1024 * 1024 * 5 },
    storage: (0, multer_1.diskStorage)({
        destination: './public/uploads/images',
        filename: (req, file, cb) => {
            const [name, ext] = file.originalname.split('.');
            cb(null, `${name}-${Date.now()}.${ext}`);
        },
    }),
};
//# sourceMappingURL=upload.files.js.map