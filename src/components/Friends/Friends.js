import PropTypes from 'prop-types';
import FriendItem from './FriendItem';
import styles from './friends.module.css';
export default function Friends({ items }) {
  return (
    <ul className={styles.card__list}>
      <FriendItem items={items} />
    </ul>
  );
}
Friends.propTypes = {
  friend: PropTypes.array,
};
