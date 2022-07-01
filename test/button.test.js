import '@testing-library/jest-dom';

import { h } from 'preact';
import { render, screen } from '@testing-library/preact';

import PrimaryButton from '../src/components/button';

describe('Primary Button', () => {
	test('should display primary button', async () => {
		render(<PrimaryButton>Click</PrimaryButton>);

		expect(screen.getByText('Click')).toBeInTheDocument();
	});
});
