const gradation = {
	20: "satisfactory",
	55: "good",
	85: "very-good",
	100: "excellent"
};

const users = [
	{
		name: "Jack Smith",
		age: 23,
		img: "JackSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 20
			},
			{
				"title": "Java Enterprise",
				"mark": 100
			}
		]
	},
	{
		name: "Amal Smith",
		age: 20,
		img: "AmalSmith",
		role: "student"
	},
	{
		name: "Noah Smith",
		age: 43,
		img: "NoahSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 50
			}
		]
	},
	{
		name: "Charlie Smith",
		age: 18,
		img: "CharlieSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 75
			},
			{
				"title": "Java Enterprise",
				"mark": 23
			}]
	},
	{
		name: "Emily Smith",
		age: 30,
		img: "EmilySmith",
		role: "admin",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 10,
				"lector": "Leo Smith"
			},
			{
				"title": "Java Enterprise",
				"score": 50,
				"lector": "David Smith"
			},
			{
				"title": "QA",
				"score": 75,
				"lector": "Emilie Smith"
			}]
	},
	{
		name: "Leo Smith",
		age: 253,
		img: "LeoSmith",
		role: "lector",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 78,
				"studentsScore": 79
			},
			{
				"title": "Java Enterprise",
				"score": 85,
				"studentsScore": 85
			}
		]
	}
];




class User {
	constructor(name,age,role,courses){
		this.name = name;
		this.age = age
		this.role = role;
		if (courses){
		this.courses = courses;}
	}
	render(){
		document.write(`
		<div class="user">
		<div class="user__info">
			<div class="user__info--data">
				<img src="../hillelFrontEnd/images/users/${this.name.replace(' ', '')}.png" alt="${this.name}" height="50">
				<div class="user__naming">
					<p>Name: <b>${this.name}</b></p>
					<p>Age: <b> ${this.age}</b></p>
				</div>
			</div>
			<div class="user__info--role ${this.role}">
				<img src="../hillelFrontEnd/images/roles/${this.role}.png" alt="${this.role}" height="25">
				<p>${this.role}</p>
			</div>
		</div>	`)
		if (this.courses){
        this.renderCourses();}
		document.write(`
	</div>
	`)

	}

	gradationWord(mark){
		if (mark<55){
			mark=gradation["20"]
		} else if (mark<85){
			mark=gradation["55"]
		}
		else if (mark<100){
			mark=gradation["85"]
		}
		else if (mark===100){
			mark=gradation["100"]
		}
		return mark;
	}

	renderCourses(){
		document.write(`
		<div class="user__courses">`)
				
		for (let key in this.courses){
							
			let mark = this.gradationWord(this.courses[key].mark);
			
			document.write(`
			<p class="user__courses--course student">
				${this.courses[key].title} <span class="${mark}">${mark}</span>
			</p>
			`)

		}
			document.write(`</div>`)

	}
}

class Student extends User{
	constructor(name,age,role,courses){
		super(name,age,role,courses)
	}	
}

class Lector extends User{
	constructor(name,age,role,courses){
		super(name,age,role,courses)
	}	
	renderCourses(){
		document.write(`
		<div class="user__courses admin--info">`)
		
		for (let key in this.courses){

			let score = this.gradationWord(this.courses[key].score);
			let studentsScoreWord = this.gradationWord(this.courses[key].studentsScore);
		
			document.write(`
			<div class="user__courses--course lector">
					<p>Title: <b>${this.courses[key].title}</b></p>
                    <p>Lector's score: <span class="${score}">${score}</span></p>
                    <p>Average student's score: <span class="${studentsScoreWord}">${studentsScoreWord}</span></p>
			</div>
			`)

		}
			document.write(`</div>`)

	}
}

class Admin extends User{
	constructor(name,age,role,courses){
		super(name,age,role,courses)
	}
	renderCourses(){
		document.write(`
		<div class="user__courses admin--info">`)
		
		for (let key in this.courses){

			let score = this.gradationWord(this.courses[key].score);
			
		
			document.write(`
			<div class="user__courses--course admin">
					<p>Title: <b>${this.courses[key].title}</b></p>
                    <p>Admin's score: <span class="${score}">${score}</span></p>
                    <p>Lector: <b>${this.courses[key].lector}</b></p>
			</div>
			`)

		}
			document.write(`</div>`)

	}	

}

document.write(`<div class="users">`)
users
	.map(userObj => {
		if(userObj.role == "lector")
			return new Lector(userObj.name, userObj.age, userObj.role, userObj.courses)
		if(userObj.role == "admin")
			return new Admin(userObj.name, userObj.age, userObj.role, userObj.courses)
		if(userObj.role == "student")
			return new Student(userObj.name, userObj.age, userObj.role, userObj.courses)
		}) 
		.map(userObj=>userObj.render());

document.write(`</div>`)