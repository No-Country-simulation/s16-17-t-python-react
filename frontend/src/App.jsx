import { Suspense } from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppRouter } from './router'
import { Toaster } from 'sonner'

function App() {
	return (
		<>
			<Router>
				<Suspense>
					<AppRouter />
				</Suspense>
			</Router>
			<Toaster richColors position="bottom-center" />
		</>
	)
}

export default App
