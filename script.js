//complete this code
class Rectangle {
	constructor(w, h){
		this.width = w;
		this.height = h;
	}

	getArea(){
		return this.width*this.height;
	}
}

class Square extends Rectangle {
	constructor(a){
		super(a,a);
	}

	getPerimeter(){
		return 4*this.width;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
