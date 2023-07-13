import { Request, Response } from "express";
import TaskModel from "../Model/TaskModel";

export const defaultTask = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    return res.status(200).json({
      message: "Successfully viewed",
    });
  } catch (error) {
    return res.status(404).json({
      message: "Can't view this",
      data: error,
    });
  }
};

export const createTask = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { task, priority } = req.body;
    const tasked = await TaskModel.create({ task, priority });

    return res.status(201).json({
      message: "Task created successfully",
      data: tasked,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Unable to create task",
      data: error,
    });
  }
};

export const getTask = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const tasked = await TaskModel.find().sort({ createdAt: -1 });

    return res.status(200).json({
      message: "Task successfully viewed",
      data: tasked,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Unable to get all task",
      data: error,
    });
  }
};

export const getOneTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const tasked = await TaskModel.findById(id);

    return res.status(200).json({
      message: "A Task was gotten successfully",
      data: tasked,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Unable to get one task",
      data: error,
    });
  }
};

export const updateTask = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params;
    const tasked = await TaskModel.findByIdAndUpdate(
      id,
      { isComplete: true },
      { new: true }
    );

    return res.status(201).json({
      message: "Task Updated successfully",
      data: tasked,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Unable to update a task",
      data: error,
    });
  }
};

export const deleteTask = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params;
    const tasked = await TaskModel.findByIdAndDelete(id);

    return res.status(201).json({
      message: "Deleted Task sucessfully",
      data: tasked,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Unable to delete task",
      data: error,
    });
  }
};
