import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement('div', { id: 'parent' }, [
	React.createElement('div', { id: 'child', key: crypto.randomUUID() }, [
		React.createElement(
			'h1',
			{ key: crypto.randomUUID() },
			'This is an h1 Element',
		),
		React.createElement(
			'h2',
			{ key: crypto.randomUUID() },
			'This is an h2 Element',
		),
	]),
	React.createElement('div', { id: 'child2', key: crypto.randomUUID() }, [
		React.createElement(
			'h1',
			{ key: crypto.randomUUID() },
			'This is an h1 Element',
		),
		React.createElement(
			'h2',
			{ key: crypto.randomUUID() },
			'This is an h2 Element',
		),
	]),
]);

// console.log(parent);

const heading = React.createElement(
	'h1',
	{ id: 'heading' },
	'Hello World From React !',
);

// console.log(heading);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);
