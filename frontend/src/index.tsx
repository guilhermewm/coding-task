// REACT
import React from 'react';
import { render } from 'react-dom';

import App from './Components/App/App';

import './index.scss';

// SERVICE WORKER
import * as sw from './serviceWorker';

// RENDER
const root: HTMLDivElement | null = document.getElementById('root') as HTMLDivElement
const app: JSX.Element = (
	<React.StrictMode>
		<App />
	</React.StrictMode>
)

render(app, root)

sw.register()
