import { settingsObj } from '../config';

const fetchLocalStorage = () => {
	let data = settingsObj;
	if (localStorage.hasOwnProperty('settings')) {
		const retrievedSettings = JSON.parse(localStorage.getItem('settings'));
		return Object.assign(data, retrievedSettings);
	}
	return data;
};

const setLocalStorage = (formData) => {
	localStorage.setItem('settings', JSON.stringify(formData));
};

export { fetchLocalStorage, setLocalStorage };
