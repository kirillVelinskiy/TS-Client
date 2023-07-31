import { Link } from 'react-router-dom'
import styles from './Layout.module.scss'
import { MdMenu, MdClose } from 'react-icons/md'
import { useState } from 'react'

interface IProps {
	children?: React.ReactNode
}

const Layout = ({ children }: IProps) => {
	const [isShow, SetIsShow] = useState(false)

	return (
		<>
			<header className={styles.header}>
				<div>
					<img src='avatar.jpg' alt='avatar' />
				</div>
				{/* MENU */}
				{isShow ? (
					<div className={styles.burger}>
						{/* MENU TOP */}
						<div className={styles.content}>
							<div className={styles.left}>
								<img src='avatar.jpg' alt='avatar' />
								<p>Hi, Kirill.</p>
							</div>
						</div>
						{/* MENU BOTTOM */}
						<div className={styles.menu}>
							<Link
								className={styles.links}
								onClick={() => SetIsShow(!isShow)}
								to='/'
							>
								Home
							</Link>
							<Link className={styles.links} to='/skills'>
								Skills
							</Link>
							<Link className={styles.links} to='/contacts'>
								Contacts
							</Link>
							<Link className={styles.links} to='/random'>
								404 test
							</Link>
						</div>
					</div>
				) : (
					''
				)}
				<div>
					<button onClick={() => SetIsShow(!isShow)} className={styles.show}>
						{isShow ? <MdClose size={'22px'} /> : <MdMenu size={'22px'} />}
					</button>
				</div>
			</header>
			{children}
			{/* <footer>© 2023 KuroDevelopment, Inc All rights reserved.</footer> */}
		</>
	)
}

export default Layout
