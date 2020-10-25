const quizData = [
{
	question: 'How old is my friend?',
	a: '12',
	b: '18',
	c: '25',
	d: '120',
	correct: 'c'

}, {
	question: 'What does HTML stand for?',
	a: 'Hack The Medical Lab',
	b: 'HyperText Markup Language',
	c: 'HyperText Machine learning',
	d: 'none of the above',
	correct: 'b'
}, {
	question: 'What does PHP stand for?',
	a: 'HyperText Preprocessor',
	b: 'People Helping people',
	c: 'Personal Hygiene Protocol',
	d: 'Pot Head Pixie',
	correct: 'a'
}, {
	question: 'What is Typescript?',
	a: 'A superset of Java',
	b: 'A superset of Python',
	c: 'A superset of PHP',
	d: 'A superset of JavaScript',
	correct: 'd'
}, {
	question: 'What does VCS stand for?',
	a: 'Video Computer System',
	b: 'Version Control System',
	c: 'Virtual Circuit Switch',
	d: ' none of the above',
	correct: 'b'
}

];

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');


let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
	const currentQuizData = quizData
	[currentQuiz];

	questionEl.innerText = currentQuizData.question;

	a_text.innerText = currentQuizData.a;
	b_text.innerText = currentQuizData.b;
	c_text.innerText = currentQuizData.c;
	d_text.innerText = currentQuizData.d;

	
}

submitBtn.addEventListener('click', () => {
	currentQuiz++;

	if(currentQuiz < quizData.length) {
		loadQuiz();
	} else {
		alert('You finished go get some juice!');
	}

	
});