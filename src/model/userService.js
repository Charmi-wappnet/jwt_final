const pool = require('../config/database');


module.exports = {
    create: (data, callBack) => {
        pool.query('insert into registration(firstname, lastname, gender, email, password, number) values (?,?,?,?,?,?)',
        [
            data.first_name,
            data.last_name,
            data.gender,
            data.email,
            data.password,
            data.number
        ],
        (error, results) => {
            if(error) {
                return callBack(error);
            }
            return callBack(null, results);
        }
      );
  },
   
    getUsers: callBack => { 
       pool.query('select id,firstname,lastname,gender,email,number from registration',
       [],
       (error, results) => {
        if(error) {
            return callBack(error);
        }
        return callBack(null, results);
    }
 );
  },
    getUserByUserId: (id,callBack) => {   
        pool.query('select id,firstname,lastname,gender,email,number from registration where id = ?',
        [id],
        (error, results) => {
            if(error) {
                return callBack(error);
            }
            return callBack(null, results[0]);
        }
     );
  }, 
    updateUser : (data, callBack) => {
       pool.query('update registration set firstname=?, lastname=?, gender=?, email=?, password=?, number=? where id=?' ,
        [
            data.first_name,
            data.last_name,
            data.gender,
            data.email,
            data.password,
            data.number,
            data.id
        ],
    (error, results) => {
        if(error) {
            callBack(error);
        }
        return callBack(null, results[0]);
      }    
   );
  }, 
    deleteUser : (data, callBack) => {
        pool.query ('delete from registration where id = ?',
        [data.id],
        (error, results) => {
            if(error) {
            return callBack(error);
            }
            return callBack(null, results[0]);
        }
      );
  },
    getUserByUserEmail: (email, callBack) => {
        pool.query(
            'select * from registration where email = ?',
            [email],
            (error, results) => {
                if(error) {
                 return  callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }
};
       