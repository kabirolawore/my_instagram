import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function SuggestedProfile({ userDocId, username, profileId, userId }) {
  const [followed, setFollowed] = useState(false);

  return !followed ? (
    <div className='flex flex-row items-center align-middle justify-between'>
      <div className='flex items-center justify-between'>
        <img
          className='rounded-full w-8 flex mr-3'
          src={`../../images/avatar/${username}.jpg`}
          alt=''
        />
        <Link to={`/p/${username}`}>
          <p className='font-bold text-sm'>{username}</p>
        </Link>
      </div>
      <div>
        <button
          className='text-xs font-bold text-blue-medium'
          type='button'
          onClick={() => console.log('Follow this user!')}
        >
          Follow
        </button>
      </div>
    </div>
  ) : null;
}

export default SuggestedProfile;

SuggestedProfile.propTypes = {
  userDocId: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  profileId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
};
