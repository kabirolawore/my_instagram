import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getUserByUsername } from '../services/firebase';
import * as ROUTES from '../constants/Routes';
// import Header from '../components/profile/Header';
import Header from '../components/Header';

function Profile() {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [userExists, setUserExists] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function checkUserExists() {
      const user = await getUserByUsername(username);

      if (user.length > 0) {
        setUser(user[0]);
        setUserExists(true);
      } else {
        navigate(ROUTES.NOT_FOUND);
      }
    }

    checkUserExists();
  }, [username, navigate]);

  // console.log('user', user);
  return userExists ? (
    <div className='bg-gray-background'>
      <Header />
      <div className='mx-auto max-w-screen-lg'>{user.fullName}</div>
    </div>
  ) : null;
}

export default Profile;
