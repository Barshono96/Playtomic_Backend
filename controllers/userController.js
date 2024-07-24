// import User from '../models/userModel';
// import { Request, Response } from 'express'; 

// export const getUserById = async (req: Request, res: Response) => {
//   const userId = req.params.id; 

//   try {
//     const user = await User.findByPk(userId);

//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     res.json(user);
//   } catch (error: any) {
//     console.error('Error fetching user:', error.message);
//     res.status(500).json({ error: 'Failed to fetch user' });
//   }
export{}