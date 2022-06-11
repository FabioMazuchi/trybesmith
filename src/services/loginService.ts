import loginModel from '../models/loginModel';

async function getByUsername(userLogin: string) {
  const user = await loginModel.getByUsername(userLogin);
  
  return user;
}

export default {
  getByUsername,
};