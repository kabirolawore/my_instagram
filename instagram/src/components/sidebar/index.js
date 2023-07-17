import useUser from '../../hooks/use-user';
import User from './User';
import Suggestions from './Suggestions';

function Sidebar() {
  const {
    user: { fullName, username, userid },
  } = useUser();

  return (
    <div className='p-4'>
      <User username={username} fullName={fullName} />
      <Suggestions userId={userid} />
    </div>
  );
}

export default Sidebar;
