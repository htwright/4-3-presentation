console.log("Hello, World!");

function sayHello(firstName = 'Harrison', lastName = 'Wright'){
	return `He said,"${firstName}, how are you?"`;
};

var greeting = sayHello('Harrison', 'Wright');
console.log(greeting);