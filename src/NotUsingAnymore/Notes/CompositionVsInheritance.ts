// INHERITANCE
/**
 * Characterized by an 'is a' relationship between two classes
 * MatchReader 'is a' CsvFileReader because it has all the properties and methods as MatchReader
 */

// COMPOSITION
/**
 * Characterized by an 'gas a' relationship between two classes
 * MatchReader 'has a' reference to an outside object like CsvFileReader and the actual
 * load is delegated to the outside object of MatchReader
 *
 * Sometimes makes easier to make an object with more resusable code by using composition
 */

/**
 * How to model a window (like in a house)?
 * // Inheritance - if window was created from shape then RectangleWindow and CircleWindow
 * would have to have their own definitions of toggleOpen and open
 * class Rectangle: number, width: number, area(): number
 * class Circle: radius: number, area(): number
 * class Wall: color: string
 * class RectangleWindow: open: boolean, toggleOpen(): void
 * class CircleWindow: open: boolean, toggleOpen(): void
 * // Composition - this would be better cuz avoidds duplication of open/toggleOpen
 * wall and window have reference to some other object that matched an interface, like Shape,
 * so dimensions would reference that shape (rect or circ) and then area would delegate to the
 * dimensions so you would be calling area on the rect or circ
 * class Wall - color: string, area(): number, dimensions: Shape
 * class Window - open: boolean, toggleOpen(): void, area(): number, dimensions: Shape
 * class Rectangle - height: number, width: number, area(): number
 * class Circle - radius: number, area(): number
 */

/**
 * "Favor object composition over class inheritance"
 * A lot of blogs misunderstand and think they're doing compostion because they build up an object
 * by using different methods which is more of a dictionary definition of composition, when the saying
 * refers to composition by reference. For example this below is not composition but a lot of blogs
 * call it that when in fact it is multiple inheritance because you are not referencing - you are copying
 * the methods from rectanglular and openable to buildRectangleWindow. And it could be very fragile
 * this way because if they both had the same method you would get the openable one because it was copied
 * last.
 */

// const rectangular = (state) => {
// 	return {
// 		area: () => {
// 			return state.height * state.width;
// 		},
// 	};
// };

// const openable = (state) => {
// 	return {
// 		toggleOpen: () => {
// 			state.open = !state.open;
// 		},
// 	};
// };

// const buildRectangleWindow = (state) => {
// 	// copies all the methods from rect and openable to the state object
// 	return Object.assign(state, rectangular(state), openable(state));
// };

// // separate definitiions and then you combine them together to build a usable object
// const rectangleWindow = buildRectangleWindow({
// 	height: 20,
// 	width: 20,
// 	open: false,
// });

// console.log(rectangleWindow.open);
// rectangleWindow.toggleOpen();
// console.log(rectangleWindow.open);
