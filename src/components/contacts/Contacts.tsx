import Layout from '../layout/Layout'
import styles from './Contacts.module.scss'

const Contacts: React.FC = () => {
	return (
		<Layout>
			<div className={styles.wrapper}>
				<h2>Как со мной связаться?:</h2>
				<ul>
					<li>
						<a href='https://t.me/kurohigara'>Telegram</a>
					</li>
					<li>
						<a href='https://mail.ru/'>Mail - k.velinskiy@mail.ru</a>
					</li>
					<li>My number - +79995567264</li>
					<li>
						<a href='https://web.whatsapp.com/'>Whatsapp</a>
					</li>
				</ul>
			</div>
		</Layout>
	)
}

export default Contacts
