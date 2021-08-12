import PropTypes from 'prop-types';
import styles from './profile.module.css'
export default function Profile({name,tag,location,avatar,stats}){
    return (
        <div className={styles.profile}>
  <div className={styles.topProfile}>
    <img
      src={avatar}
      alt={name}
      className={styles.profile__img}
    />
                <p class="name">{name}</p>
                <p class="tag">@{tag}</p>
    <p class="location">{location}</p>
  </div>

  <ul  className={styles.profile__desc}>
          <li className={styles.profile__item}>
      <span class="label">Followers</span>
                    <span class="quantity">{stats.followers}</span>
    </li>
    <li className={styles.profile__item}>
      <span class="label">Views</span>
                    <span class="quantity">{stats.views}</span>
    </li>
    <li className={styles.profile__item}>
      <span class="label">Likes</span>
                    <span class="quantity">{stats.likes}</span>
    </li>
  </ul>
</div>
    )
}

Profile.propTypes ={
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.number.isRequired
}
