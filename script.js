var num=[
2,4,6,8,10,12,14,16,18,20
];
num.length;
alert("the length is" + num.length);
alert(num[0]);
alert(num[2]);
alert(num[5]);
alert(num.indexOf(10));
num.splice(8,2);
alert(num);


var num_1=[
1, "one", 2, "two", 3, "three"
];

var student1={
		name:"one",
		eyeColor: "brown",
		height: "1.60",
};

var student2={
		name:"two",
		eyeColor: "blue",
		height: "1.70",
};

var student3={
		name:"three",
		eyeColor: "green",
		height: "1.80",
};

var course=[
	"student1","student2" ,"student3"	
];

course.shift();
alert(course);

course.unshift(["teacher"]);
alert(course);

var teacher={
	var face={
		eyes:"blue",
	}
};
