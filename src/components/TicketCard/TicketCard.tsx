import React, {FC} from 'react';
import styles from './TicketCard.module.scss'
interface TicketCardProps {

}
const TicketCard: FC<TicketCardProps> = () => {
  return (
    <div className={styles.ticketCard}>
      <div className={styles.ticketCardWrapper}>
        <div className={styles.s}></div>
      </div>
    </div>
  )
}

export default TicketCard;