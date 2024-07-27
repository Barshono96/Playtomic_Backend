// import { Request, Response } from 'express';
// import Club from '../models/clubModel';
// import Court from '../models/courtModel';


// export const createCourt = async (req: Request, res: Response) => {
//   try {
//     const { clubId } = req.params; 
//     const { type, start, end, slot } = req.body; 

    
//     const club = await Club.findByPk(clubId);
//     if (!club) {
//       return res.status(404).json({ message: 'Club not found' });
//     }

    
//     const court = await Court.create({
//       clubId: parseInt(clubId, 10), 
//       type,
//       start,
//       end,
//       slot,
//     });

//     res.status(201).json(court); 
//   } catch (error) {
//     console.error('Error creating court:', error);
//     res.status(500).json({ message: 'Error creating court', error });
//   }
// };

// export const getCourt = async (req: Request, res: Response) => {
//     try {
//       const { clubId } = req.params; 
  
      
//       const club = await Club.findByPk(clubId);
//       if (!club) {
//         return res.status(404).json({ message: 'Club not found' });
//       }
  
      
//       const courts = await Court.findAll({ where: { clubId } });
  
//       res.status(201).json(courts); 
//     } catch (error) {
//       console.error('Error creating court:', error);
//       res.status(500).json({ message: 'Error creating court', error });
//     }
//   };

import { Request, Response } from 'express';
import Club from '../models/clubModel';
import Court from '../models/courtModel';

export const createCourt = async (req: Request, res: Response) => {
  try {
    const { clubId } = req.params; 
    const { type, start, end, slot, images } = req.body; 

    const club = await Club.findByPk(clubId);
    if (!club) {
      return res.status(404).json({ message: 'Club not found' });
    }

    const court = await Court.create({
      clubId: parseInt(clubId, 10), 
      type,
      start,
      end,
      slot,
      images
    });

    res.status(201).json(court); 
  } catch (error) {
    console.error('Error creating court:', error);
    res.status(500).json({ message: 'Error creating court', error });
  }
};

export const getCourts = async (req: Request, res: Response) => {
  try {
    const { clubId } = req.params; 

    const club = await Club.findByPk(clubId);
    if (!club) {
      return res.status(404).json({ message: 'Club not found' });
    }

    const courts = await Court.findAll({ where: { clubId } });

    res.status(200).json(courts); 
  } catch (error) {
    console.error('Error retrieving courts:', error);
    res.status(500).json({ message: 'Error retrieving courts', error });
  }
};
