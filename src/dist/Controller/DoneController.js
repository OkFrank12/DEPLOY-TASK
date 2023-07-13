"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDone = exports.updateDone = exports.getOneDone = exports.getDone = exports.createDone = exports.defaultDone = void 0;
const DoneModel_1 = __importDefault(require("../Model/DoneModel"));
const defaultDone = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return res.status(200).json({
            message: "Welcome to done task api",
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Can't open done task",
            data: error,
        });
    }
});
exports.defaultDone = defaultDone;
const createDone = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { task, priority } = req.body;
        const tasked = yield DoneModel_1.default.create({ task, priority });
        return res.status(201).json({
            message: "Created Done sucessfully",
            data: tasked,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Unable to create done",
            data: error,
        });
    }
});
exports.createDone = createDone;
const getDone = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasked = yield DoneModel_1.default.find().sort({ createdAt: -1 });
        return res.status(200).json({
            message: "Sucessfully get all done",
            data: tasked,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Unable to get all done",
            data: error,
        });
    }
});
exports.getDone = getDone;
const getOneDone = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const tasked = yield DoneModel_1.default.findById(id);
        return res.status(200).json({
            message: "Sucessfully done",
            data: tasked,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Unable to get a done",
            data: error,
        });
    }
});
exports.getOneDone = getOneDone;
const updateDone = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const tasked = yield DoneModel_1.default.findByIdAndUpdate(id, { isComplete: true }, { new: true });
        return res.status(201).json({
            message: "Sucessfully updated done",
            data: tasked,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Unable to update a done",
            data: error,
        });
    }
});
exports.updateDone = updateDone;
const deleteDone = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const tasked = yield DoneModel_1.default.findByIdAndDelete(id);
        return res.status(201).json({
            message: "Sucessfully deleted a done",
            data: tasked,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Unable to delete a done",
            data: error,
        });
    }
});
exports.deleteDone = deleteDone;
