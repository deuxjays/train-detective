import { h } from 'preact';
import style from './style.scss';

const PrimaryButton = (props) => (
	<button class={style.button}>
		<p>{props.children}</p>
	</button>
);

export default PrimaryButton;
