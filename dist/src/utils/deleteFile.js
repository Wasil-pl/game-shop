"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFile = void 0;
const fs_1 = require("fs");
const picturePath = './public/uploads/images/';
const deleteFile = (fileName) => {
    try {
        (0, fs_1.unlinkSync)(picturePath + fileName);
    }
    catch (err) {
        console.error('Error deleting file:', err);
    }
};
exports.deleteFile = deleteFile;
//# sourceMappingURL=deleteFile.js.map