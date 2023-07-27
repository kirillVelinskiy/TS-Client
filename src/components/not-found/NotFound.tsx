import { useNavigate } from 'react-router-dom'
import styles from './NotFound.module.scss'

const NotFound = () => {
	const navigate = useNavigate()

	return (
		<div className={styles.message}>
			<h1 className={styles.title}>ERROR 404</h1>
			<div className={styles.subtitle}>
				Say something went wrong! The page you are requesting does not exist.
				<br /> It may have been outdated, removed, or the wrong address was
				entered in the address bar.
			</div>
			<button className={styles.btn} onClick={() => navigate('/')}>
				- Back to Home -
			</button>
		</div>
	)
}

export default NotFound
