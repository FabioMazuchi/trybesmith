import { User } from '../interfaces';
import userModel from '../models/userModel';

async function create(user: User) {
  const data = await userModel.create(user);
  return data;
}

async function getById(id: number | undefined) {
  const user = userModel.getById(id);
  return user;
}

export default {
  create,
  getById,
};