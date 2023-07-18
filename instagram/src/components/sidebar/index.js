import React from 'react';
import useUser from '../../hooks/use-user';
import User from './User';
import Suggestions from './Suggestions';

function Sidebar() {
  const {
    user: { fullName, username, userid, following },
  } = useUser();

  // console.log('following', following);

  return (
    <div className='p-4'>
      <User username={username} fullName={fullName} />
      <Suggestions userId={userid} following={following} />
    </div>
  );
}

export default Sidebar;
