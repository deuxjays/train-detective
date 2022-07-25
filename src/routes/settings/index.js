import { h } from 'preact';
import style from './style.scss';

// Components
import Form from '../../components/form';

const Settings = () => (
	<div class={style.settings}>
		<Form />
	</div>
);

export default Settings;
