import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';

function Photos({ photos }) {
  return <div>Photos</div>;
}

export default Photos;

Photos.propTypes = {
  photos: PropTypes.array.isRequired,
};
