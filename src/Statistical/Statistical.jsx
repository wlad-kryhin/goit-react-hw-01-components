import PropTypes from 'prop-types';

export default function Statistical ({title,stats}){
return (
<section class="statistics">
  {title && <h2 class="title">Upload stats</h2>}

  <ul class="stat-list">
      {stats.map(({id,label,percentage}) => {
          return(<li class="item" key={id}>
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