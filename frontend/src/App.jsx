import { Suspense } from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppRouter } from './router'

function App() {
	return (
		<>
			<Router>
				<Suspense>
					<AppRouter />
				</Suspense>
			</Router>
		</>
	)
}

export default App
