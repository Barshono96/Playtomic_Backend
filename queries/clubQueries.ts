import { User, Club } from '../models'; // Adjust the path as necessary
import { ClubAttributes } from '../models/clubModel';

const createClub = async (userId: number, clubData: Omit<ClubAttributes, 'id' | 'userid'>): Promise<Club> => {
  try {
    // Check if the user exists
    const user = await User.findByPk(userId);
    if (!user) {
      throw new Error('User not found');
    }

    // Check if the user already has a club
    const existingClub = await Club.findOne({ where: { userid: userId } });
    if (existingClub) {
      throw new Error('User already has a club');
    }

    // Create a new club associated with the user
    const newClub = await Club.create({
      userid: userId,
      ...clubData
    });

    return newClub;
  } catch (error) {
    throw new Error(`Error creating club: ${error.message}`);
  }
};

export { createClub };
