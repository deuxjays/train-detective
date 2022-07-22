import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import style from './style.scss';

const Form = () => {
	const [settings, setSettings] = useState({});

	useEffect(() => {
		const name = localStorage.getItem('name') || '';
		const homeStation = localStorage.getItem('homeStation') || '';

		console.log(localStorage);

		setSettings({
			name,
			homeStation,
		});
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		const { name, homeStation } = settings;
		localStorage.setItem('name', name);
		localStorage.setItem('homeStation', homeStation);
	};

	const handleChange = (e) => {
		const { value, name } = e.target;
		setSettings({
			[name]: value,
		});
	};

	return (
		<div>
			<p>App settings</p>
			<form onSubmit={(e) => handleSubmit(e)}>
				<label>
					Name:
					<input
						type="text"
						name="name"
						value={settings.name}
						onChange={(e) => handleChange(e)}
					/>
				</label>
				<label>
					Home Station:
					<input
						type="text"
						name="homeStation"
						value={settings.homeStation}
						onInput={(e) => handleChange(e)}
					/>
				</label>

				<button type="submit">Save settings</button>
			</form>
		</div>
	);
};

export default Form;
