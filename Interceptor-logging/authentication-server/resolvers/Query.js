const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



exports.Query = {

    login: async (parent,{ email, password },{db}) => {
        const user = await db.users.find((user) => user.email === email);
        if (!user) {
          throw new Error('User does not exist!');
        }
        
        const isEqual = await password===(user.password);
        if (!isEqual) {
          throw new Error('Password is incorrect!');
        }
        const token = jwt.sign(
          { userId: user.id, email: user.email },
          'somesupersecretkey',
          {
            expiresIn: '1h'
          }
          
        );
        
        return { userId: user.id, token: token, tokenExpiration: 1};
      }
};