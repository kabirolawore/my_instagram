import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getUserByUsername } from '../services/firebase';
import * as ROUTES from '../constants/Routes';

function Profile() {
  const { username } = useParams();
  const [userExists, setUserExists] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function checkUserExists() {
      const doesUserExist = await getUserByUsername(username);
    }
  }, []);

  return <p>I am the Profile</p>;
}

export default Profile;
