import { createBrowserRouter } from 'react-router-dom'
import App from '../../App'
import NotFound from '../not-found/NotFound'
import Skills from '../skills/Skills'
import Contacts from '../contacts/Contacts'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />
	},
	{
		path: '*',
		element: <NotFound />
	},
	{
		path: '/skills',
		element: <Skills />
	},
	{
		path: '/contacts',
		element: <Contacts />
	}
])
