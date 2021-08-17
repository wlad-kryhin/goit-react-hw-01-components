import PropTypes from 'prop-types';
import styles from './profile.module.css';
export default function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div className={styles.profile__container}>
      <div className={styles.topProfile}>
        <img src={avatar} alt={name} className={styles.profile__img} />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={styles.profile__desc}>
        <li className={styles.profile__item}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={styles.profile__item}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={styles.profile__item}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
