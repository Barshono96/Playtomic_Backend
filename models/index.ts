import sequelize from '../config/db';
import User from './userModel';
import Club from './clubModel';
import Court from './courtModel';
import Booking from './bookingModel';

User.hasOne(Club, { foreignKey: 'userid', as: 'club' });
Club.belongsTo(User, { foreignKey: 'userid', as: 'user' });

Club.hasMany(Court, { foreignKey: 'clubId', as: 'courts' });
Court.belongsTo(Club, { foreignKey: 'clubId', as: 'clubs' });

Court.hasMany(Booking, { foreignKey: 'courtid', as: 'bookings' });
Booking.belongsTo(Court, { foreignKey: 'courtid', as: 'court' });

User.hasMany(Booking, { foreignKey: 'userid', as: 'bookings' });
Booking.belongsTo(User, { foreignKey: 'userid', as: 'user' });

Club.hasMany(Booking, { foreignKey: 'clubid', as: 'bookings' });
Booking.belongsTo(Club, { foreignKey: 'clubid', as: 'club' });

const initializeDatabase = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.sync();
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

initializeDatabase();

export { User, Club, Court, Booking };
