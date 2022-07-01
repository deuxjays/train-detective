import { h } from 'preact';
import style from './style.scss';

// Components
import PrimaryButton from '../../components/button';

const Home = () => (
	<div class={style.home}>
		<h1>Home</h1>
		<p>This is the Home component.</p>
		<PrimaryButton>This is a button</PrimaryButton>
	</div>
);

export default Home;
