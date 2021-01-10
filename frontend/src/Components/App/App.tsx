import { ApolloProvider } from '@apollo/client';
import React, { lazy, Suspense } from 'react';

// ROUTER
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { GraphQLClient } from '../../graphql/config';

// PAGES
const Home = lazy(() => import('../../pages/Home/Index'));
const NotFound = lazy(() => import('../../navigation/NotFound'));

const App: React.FC = () => {
	return (
		<ApolloProvider client={GraphQLClient}>
			<BrowserRouter>
				<Suspense fallback={<div>Loading...</div>}>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route component={NotFound} />
				</Switch>
				</Suspense>
			</BrowserRouter>
		</ApolloProvider>
	)
}

export default App
