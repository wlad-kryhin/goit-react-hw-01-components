import PropTypes from 'prop-types';
import styles from './statistical.module.css'

export default function Statistical ({title,stats}){
    return (
        <section className={styles.static}>
  {title && <h2 className={styles.title}>Upload stats</h2>}

  <ul className={styles.list}>
      {stats.map(({id,label,percentage}) => {
          return(<li className={styles.item} key={id}>
      <span class="label">{label}</span>
      <span class="percentage">{percentage}</span>
    </li>)
      })}
  </ul>
</section>)
}
Statistical.propTypes = {
id: PropTypes.string,
label: PropTypes.string,
percentage: PropTypes.number,
statistical: PropTypes.array
}