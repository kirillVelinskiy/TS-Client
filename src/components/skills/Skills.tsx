import Layout from '../layout/Layout'
import styles from './Skills.module.scss'

const Skills: React.FC = () => {
	return (
		<Layout>
			<div className={styles.wrapper}>
				<h2>Skills:</h2>
				<ul>
					<li>React</li>
					<li>TypeScript</li>
					<li>Redux toolkit & createAsyncThunk</li>
					<li>React Router Dom</li>
					<li>Figma</li>
					<li>Git</li>
					<li>
						<span>Node.js - in progress</span>
					</li>
					<li>
						<span>Graph Ql - in progress</span>
					</li>
					<li>
						<span>Next.js + Nest.js - in progress</span>
					</li>
				</ul>
			</div>
		</Layout>
	)
}

export default Skills
