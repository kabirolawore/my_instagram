import { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import { getUserByUsername } from '../../services/firebase';
import Photos from './Photos';

function UserProfile({ user }) {
  const reducer = (state, newState) => ({ ...state, ...newState });
  const initialState = {
    profile: {},
    photosCollection: [],
    followerCount: 0,
  };

  const [{ profile, photosCollection, followerCount }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    async function getUserPhotosByUsername() {
      const photos = await getUserByUsername(user.username);
      dispatch({
        profile: user,
        photosCollection: photos,
        followerCount: user.followers.length,
      });
    }

    getUserPhotosByUsername();
  }, [user.username]);

  // console.log('profile', profile);

  return (
    <>
      <Header
        photosCount={photosCollection ? photosCollection.length : 0}
        profile={profile}
        followerCount={followerCount}
        setFollowerCount={dispatch}
      />
      <Photos photos={photosCollection} />
      {/* <p>Hello {user.username}</p> */}
    </>
  );
}

export default UserProfile;

UserProfile.propTypes = {
  user: PropTypes.shape({
    dateCreated: PropTypes.number.isRequired,
    emailAddress: PropTypes.string.isRequired,
    followers: PropTypes.array.isRequired,
    followers: PropTypes.array.isRequired,
    fullName: PropTypes.string.isRequired,
    userid: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
};
