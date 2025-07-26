/**
 *
 * <div id="parent">
 *    <div id="child">
 *        <h1></h1>
 *        <h2></h2>
 *    </div>
 *    <div id="child2">
 *        <h1></h1>
 *        <h2></h2>
 *    </div>
 * </div>
 *
 *
 */

const parent = React.createElement('div', { id: 'parent' }, [
	React.createElement('div', { id: 'child' }, [
		React.createElement('h1', {}, 'This is an h1 Element'),
		React.createElement('h2', {}, 'This is an h2 Element'),
	]),
	React.createElement('div', { id: 'child2' }, [
		React.createElement('h1', {}, 'This is an h1 Element'),
		React.createElement('h2', {}, 'This is an h2 Element'),
	]),
]);

console.log(parent);

const heading = React.createElement(
	'h1',
	{ id: 'heading' },
	'Hello World From React !',
);

console.log(heading);

const root = ReactDOM.createRoot(document.getElementById('root'));
const root2 = ReactDOM.createRoot(document.getElementById('header'));

// setTimeout(() => {
// 	root.render(parent);
// }, 5000);

root.render(parent);

root2.render(heading);
