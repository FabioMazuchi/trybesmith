import { User } from '../interfaces';
import userModel from '../models/userModel';

async function create(user: User) {
  const data = await userModel.create(user);
  return data;
}

export default {
  create,
};