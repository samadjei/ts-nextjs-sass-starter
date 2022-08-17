import '../scss/main.scss';
import Layout from '../components/Layout';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Layout>
			{/* children of the layout component */}
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
