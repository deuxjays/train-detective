import { h } from 'preact';
import style from './style.scss';

// Components
import Form from '../../components/form';

const Settings = () => (
	<div class={style.settings}>
		<Form />
		<p>Hello</p>
	</div>
);

export default Settings;
