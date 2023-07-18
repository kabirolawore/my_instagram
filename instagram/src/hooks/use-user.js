import { useState, useEffect, useContext } from 'react';
import { getUserByUserId } from '../services/firebase';
import UserContext from '../context/user';

function useUser() {
  const [activeUser, setActiveUser] = useState({});
  const { user } = useContext(UserContext);

  useEffect(() => {
    async function getUserObjByUserId() {
      //A function that calls (firebase service) to get the user data based on the id
      const [response] = await getUserByUserId(user.uid);

      setActiveUser(response);
    }

    if (user?.uid) {
      getUserObjByUserId();
    }
  }, [user]);

  console.log('activeUser', activeUser);

  return { user: activeUser };
}

export default useUser;
