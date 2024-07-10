
import sequelize from '../config/db';
import User from './userModel';
import Club from './clubModel';
import Court from './courtModel';
import Booking from './bookingModel';


User.hasOne(Club, { foreignKey: 'userid', as: 'club' });
Club.belongsTo(User, { foreignKey: 'userid', as: 'user' });

Club.hasMany(Court, { foreignKey: 'clubId', as: 'courts' });
Court.belongsTo(Club, { foreignKey: 'clubId', as: 'clubs' });

// Booking.hasOne(Court, { foreignKey: 'courtid', as: 'courts'});
// Court.belongsTo(Booking,{ foreignKey: 'courtid', as: 'courts'})

const initializeDatabase = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.sync({force:true});
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

initializeDatabase();

export { User, Club, Court, Booking };
