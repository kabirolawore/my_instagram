import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getUserByUsername } from '../services/firebase';
import * as ROUTES from '../constants/Routes';
import Header from '../components/Header';
import UserProfile from '../components/profile';

function Profile() {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  // const [userExists, setUserExists] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function checkUserExists() {
      const [user] = await getUserByUsername(username);
      // console.log(user);
      if (user.userid) {
        setUser(user);
        // setUserExists(true);
      } else {
        navigate(ROUTES.NOT_FOUND);
      }
    }

    checkUserExists();
  }, [username, navigate]);

  // console.log('user tp', user);

  return user?.username ? (
    <div className='bg-gray-background'>
      <Header />
      <div className='mx-auto max-w-screen-lg'>
        <UserProfile user={user} />
      </div>
    </div>
  ) : null;
}

export default Profile;
