const roles = {
	admin: "https://www.flaticon.com/svg/static/icons/svg/1424/1424453.svg",
	student: "https://www.flaticon.com/svg/static/icons/svg/1424/1424424.svg",
	lector: "https://www.flaticon.com/svg/static/icons/svg/1424/1424450.svg"
};

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
		img: "https://www.flaticon.com/svg/static/icons/svg/2922/2922522.svg",
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
		img: "https://www.flaticon.com/svg/static/icons/svg/2922/2922656.svg",
		role: "student"
	},
	{
		name: "Noah Smith",
		age: 43,
		img: "https://www.flaticon.com/svg/static/icons/svg/2922/2922616.svg",
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
		img: "https://www.flaticon.com/svg/static/icons/svg/2922/2922688.svg",
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
		img: "https://www.flaticon.com/svg/static/icons/svg/2922/2922565.svg",
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
		img: "https://www.flaticon.com/svg/static/icons/svg/2922/2922719.svg",
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
]




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
	renderCourses(){
		document.write(`
		<div class="user__courses">`)
		
		let mark;
		let markWord;

		for (let key in this.courses){
			mark = this.courses[key].mark;
			
			for (let key in gradation){
				if (mark >= key){
					markWord = gradation[key];
				}else{
					markWord = "satisfactory";
				}

			}

			document.write(`
			<p class="user__courses--course student">
				${this.courses[key].title} <span class="${markWord}">${markWord}</span>
			</p>
			`)

		}
			document.write(`</div>`)

	}
}




class Student extends User{
	constructor(){
		super()
	}	
}

class Lector extends User{
	constructor(name,age,role,courses){
		super(name,age,role,courses)
	}	
	renderCourses(){
		document.write(`
		<div class="user__courses admin--info">`)
		
		let score;
		let scoreWord;
		let studentsScore;
		let studentsScoreWord;

		for (let key in this.courses){
			score = this.courses[key].score;
			studentsScore = this.courses[key].studentsScore;
			
			for (let key in gradation){
				if (score >= key){
					scoreWord = gradation[key];
				}else{
					scoreWord = "satisfactory";
				}	
				if (studentsScore >= key){
					studentsScoreWord = gradation[key];
				}else{
					studentsScoreWord = "satisfactory";
				}	
			}

			document.write(`
			<div class="user__courses--course lector">
					<p>Title: <b>${this.courses[key].title}</b></p>
                    <p>Lector's score: <span class="${scoreWord}">${scoreWord}</span></p>
                    <p>Average student's score: <span class="${studentsScoreWord}">${studentsScoreWord}</span></p>
			</div>
			`)

		}
			document.write(`</div>`)

	}
}

class Admin extends User{
	constructor(name,age,role,adminScore,lector){
		super(name,age,role)
	}	
	renderCourses(){
		
	}
}



users.map(
	
	userObj=>new Lector(userObj.name, userObj.age, userObj.role, userObj.courses)) 
		.map(userObj=>userObj.render());




function choiseRender(){
	if (true==true){}
}