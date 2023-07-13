import { Request, Response } from "express";
import AuthModel from "../Model/AuthModel";
import bcrypt from "bcrypt";

export const readUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const user = await AuthModel.find();

    return res.status(200).json({
      message: "Read User Sucessfully",
      data: user,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Failed to read user",
      data: error,
    });
  }
};

export const readOneUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params;
    const user = await AuthModel.findById(id);

    return res.status(200).json({
      message: "Read One User Successfully",
      data: user,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Failed to read one user",
      data: error,
    });
  }
};

export const updateOneUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { userName, avatar } = req.body;
    const user = await AuthModel.findByIdAndUpdate(
      id,
      { userName, avatar },
      { new: true }
    );

    return res.status(201).json({
      message: "Updated User sucessfully",
      data: user,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Failed to update user",
      data: error,
    });
  }
};

export const deleteOneUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params;
    const user = await AuthModel.findByIdAndDelete(id);

    return res.status(201).json({
      message: "Deleted User successfully",
      data: user,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Failed to delete user",
      data: error,
    });
  }
};

export const createAccount = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { userName, email, password, avatar } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = await AuthModel.create({
      userName,
      email,
      password: hash,
      avatar,
    });

    return res.status(201).json({
      message: "Successfully created an account",
      data: user,
    });
  } catch (error) {
    return res.status(404).json({
      message: "Failed to create an account",
      data: error,
    });
  }
};

export const signInAccount = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { email, password } = req.body;
    const user = await AuthModel.findOne({ email });
    if (user) {
      const passed = await bcrypt.compare(password, user.password!);

      if (passed) {
        return res.status(201).json({
          message: `Welcome back ${user.userName}`,
          data: user._id,
        });
      } else {
        return res.status(404).json({
          message: "Password is incorrect",
        });
      }
    } else {
      return res.status(404).json({
        message: "User not found",
      });
    }
  } catch (error) {
    return res.status(404).json({
      message: "Failed to sign-in account",
      data: error,
    });
  }
};
