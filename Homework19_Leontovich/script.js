const gradation = {
	20: "satisfactory",
	55: "good",
	85: "very-good",
	100: "excellent"
};

let TextGradation = (score => {
	let TextScore = 0;
	switch (true) {
		case score <= 20:
			TextScore = "satisfactory";
			break;
		case score <= 55:
			TextScore = "good";
			break;
		case score <= 85:
			TextScore = "very-good";
			break;
		case score <= 100:
			TextScore = "excellent";
			break;
	}
	return TextScore;
})

const users = [
	{
		name: "Jack Smith",
		age: 23,
		img: "JackSmith",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 20,
			},
			{
				"title": "Java Enterprise",
				"mark": 100,
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
	constructor(name, age, img, role, courses) {
		this.name = name;
		this.age = age;
		this.img = img;
		this.role = role;
		this.courses = courses;
	}
	renderInfo() {
		return `<div class="user__info">
					<div class="user__info--data">
						<img src="images/users/${this.img}.png" alt="${this.name}" height="50">
						<div class="user__naming">
							<p>Name: <b>${this.name}</b></p>
							<p>Age: <b>${this.age}</b></p>
						</div>
					</div>
					<div class="user__info--role ${this.role}">
						<img src="images/roles/${this.role}.png" alt="${this.role}" height="25">
						<p>${this.role}</p>
					</div>
				</div>`;
	}
	renderCourses() {
		if (!this.courses) {
			return ``;
		} else {
			let Courses = this.courses.map(item => `<p class="user__courses--course student">${item.title} <span class="${TextGradation(item.mark)}">${TextGradation(item.mark)}</span></p>`)
			return `<div class="user__courses">
				${Courses.join(`\n`)}
				</div>`
		};
	}
	render() {
		return `<div class="users">
        		<div class="user">
				${this.renderInfo()}
				${this.renderCourses()}
				</div>
				</div>`
	}
}

class Student extends User {
	constructor(name, age, img, role, courses) {
		super(name, age, img, role, courses);
	}
}

class Admin extends User {
	constructor(name, age, img, role, courses) {
		super(name, age, img, role, courses);
	}
	renderCourses() {
		let Courses = this.courses.map(item => `
			<div class="user__courses--course admin">
			<p>Title: <b>${item.title}</b></p>
			<p>Admin's score: <span class="${TextGradation(item.score)}">${TextGradation(item.score)}</span></p>
			<p>Lector: <b>${item.lector}</b></p>
			</div>`);
		return `<div class="user__courses admin--info">
				${Courses.join(`\n`)}
				</div>`
	}
}

class Lector extends User {
	constructor(name, age, img, role, courses) {
		super(name, age, img, role, courses);
	}
	renderCourses() {
		let Courses = this.courses.map(item => `
			<div class="user__courses--course lector">
			<p>Title: <b>${item.title}</b></p>
			<p>Lector's score: <span class="${TextGradation(item.score)}">${TextGradation(item.score)}</span></p>
			<p>Average student's score: <span class="${TextGradation(item.score)}">${TextGradation(item.score)}</span></p>
			</div>`);
		return `<div class="user__courses admin--info">
				${Courses.join(`\n`)}
				</div>`
	}
}

let Students = users
	.filter(item => item.role === `student`)
	.map(item => {
		return new Student(item.name, item.age, item.img, item.role, item.courses);
	})

let Lectors = users
	.filter(item => item.role === `lector`)
	.map(item => {
		return new Lector(item.name, item.age, item.img, item.role, item.courses);
	})

let Admins = users
	.filter(item => item.role === `admin`)
	.map(item => {
		return new Admin(item.name, item.age, item.img, item.role, item.courses);
	})

let UsersForRender = [...Students, ...Admins, ...Lectors];
let renderedUsers = UsersForRender.map(item => item.render()).join(``);

document.write(renderedUsers)