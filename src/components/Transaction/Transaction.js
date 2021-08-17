import PropTypes from 'prop-types';
import styles from './transaction.module.css';

export default function Transaction({ items }) {
  return (
    <table className={styles.transaction}>
      <thead>
        <tr className={styles.tr}>
          <th className={styles.th}>Type</th>
          <th className={styles.th}>Amount</th>
          <th className={styles.th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr className={styles.tr} key={id}>
              <td className={styles.td}>{type}</td>
              <td className={styles.td}>{amount}</td>
              <td className={styles.td}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
Transaction.propTypes = {
  items: PropTypes.array,
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};
