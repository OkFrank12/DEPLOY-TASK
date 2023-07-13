import { Request, Response } from "express";
import DoneModel from "../Model/DoneModel";

export const defaultDone = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    return res.status(200).json({
      message: "Welcome to done task api",
    });
  } catch (error) {
    return res.status(404).json({
      message: "Can't open done task",
      data: error,
    });
  }
};

export const createDone = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { task, priority } = req.body;
    const tasked = await DoneModel.create({ task, priority });

    return res.status(201).json({
      message: "Created Done sucessfully",
      data: tasked,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Unable to create done",
      data: error,
    });
  }
};

export const getDone = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const tasked = await DoneModel.find().sort({ createdAt: -1 });

    return res.status(200).json({
      message: "Sucessfully get all done",
      data: tasked,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Unable to get all done",
      data: error,
    });
  }
};

export const getOneDone = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params;
    const tasked = await DoneModel.findById(id);

    return res.status(200).json({
      message: "Sucessfully done",
      data: tasked,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Unable to get a done",
      data: error,
    });
  }
};

export const updateDone = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params;
    const tasked = await DoneModel.findByIdAndUpdate(
      id,
      { isComplete: true },
      { new: true }
    );
    return res.status(201).json({
      message: "Sucessfully updated done",
      data: tasked,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Unable to update a done",
      data: error,
    });
  }
};

export const deleteDone = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params;
    const tasked = await DoneModel.findByIdAndDelete(id);

    return res.status(201).json({
      message: "Sucessfully deleted a done",
      data: tasked,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Unable to delete a done",
      data: error,
    });
  }
};
