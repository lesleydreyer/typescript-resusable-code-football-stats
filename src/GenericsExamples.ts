// GENERICS, just example, not being used

// most just call it T instead of TypeOfData but can call it whatever
class HoldAnything<TypeOfData> {
	data: TypeOfData;

	add(a: TypeOfData): TypeOfData {
		return a;
	}
}

// <number> is kinda like passing in a function argument in parenthesis
// it replaces <TypeOfData> with <number>
const holdNumber = new HoldAnything<number>();
holdNumber.add(10);

const holdString = new HoldAnything<string>();
holdString.data = 'asdlfkj';
holdString.add('klm');
