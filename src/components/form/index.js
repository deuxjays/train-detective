import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import style from './style.scss';

// Helpers
import {
	fetchLocalStorage,
	setLocalStorage,
} from '../../helpers/local-storage';

const Form = () => {
	const [settings, setSettings] = useState();

	useEffect(() => {
		const data = fetchLocalStorage();
		setSettings(data);
	}, []);

	const handleSubmit = (event) => {
		event.preventDefault(event);
		setLocalStorage(settings);
	};

	const handleChange = (event) => {
		const { value, name } = event.target;
		setSettings((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	return (
		<div>
			<p>App settings</p>
			{settings && (
				<div>
					<form onSubmit={(event) => handleSubmit(event)}>
						{Object.entries(settings).map(([key, value]) => {
							return (
								<label>
									{key}:
									<input
										type="text"
										name={key}
										value={value}
										onChange={(event) => handleChange(event)}
									/>
								</label>
							);
						})}
						<button type="submit">Save settings</button>
					</form>
				</div>
			)}
		</div>
	);
};

export default Form;
