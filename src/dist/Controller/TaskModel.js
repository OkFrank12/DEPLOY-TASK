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
exports.deleteTask = exports.updateTask = exports.getOneTask = exports.getTask = exports.createTask = exports.defaultTask = void 0;
const TaskModel_1 = __importDefault(require("../Model/TaskModel"));
const defaultTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return res.status(200).json({
            message: "Successfully viewed",
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Can't view this",
            data: error,
        });
    }
});
exports.defaultTask = defaultTask;
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { task, priority } = req.body;
        const tasked = yield TaskModel_1.default.create({ task, priority });
        return res.status(201).json({
            message: "Task created successfully",
            data: tasked,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Unable to create task",
            data: error,
        });
    }
});
exports.createTask = createTask;
const getTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasked = yield TaskModel_1.default.find().sort({ createdAt: -1 });
        return res.status(200).json({
            message: "Task successfully viewed",
            data: tasked,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Unable to get all task",
            data: error,
        });
    }
});
exports.getTask = getTask;
const getOneTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const tasked = yield TaskModel_1.default.findById(id);
        return res.status(200).json({
            message: "A Task was gotten successfully",
            data: tasked,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Unable to get one task",
            data: error,
        });
    }
});
exports.getOneTask = getOneTask;
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const tasked = yield TaskModel_1.default.findByIdAndUpdate(id, { isComplete: true }, { new: true });
        return res.status(201).json({
            message: "Task Updated successfully",
            data: tasked,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Unable to update a task",
            data: error,
        });
    }
});
exports.updateTask = updateTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const tasked = yield TaskModel_1.default.findByIdAndDelete(id);
        return res.status(201).json({
            message: "Deleted Task sucessfully",
            data: tasked,
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Unable to delete task",
            data: error,
        });
    }
});
exports.deleteTask = deleteTask;
