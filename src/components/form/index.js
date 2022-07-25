import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import style from './style.scss';

// Helpers
import { fetchLocalStorage, setLocalStorage } from '../../lib/storage-helper';

const Form = () => {
	const [settings, setSettings] = useState();

	useEffect(() => {
		const data = fetchLocalStorage();
		setSettings(data);
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		setLocalStorage(settings);
	};

	const handleChange = (e) => {
		const { value, name } = e.target;
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
					<form onSubmit={(e) => handleSubmit(e)}>
						{Object.entries(settings).map(([key, value]) => {
							return (
								<label>
									{key}:
									<input
										type="text"
										name={key}
										value={value}
										onChange={(e) => handleChange(e)}
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
