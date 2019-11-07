import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Douglas Carneiro',
    email: 'douglasdscplay@gmail.com',
    password_hash: '12238949394',
  });

  return res.json(user);
});

export default routes;
