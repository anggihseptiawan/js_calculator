const result = document.getElementById('result');
const btnNumber = document.querySelectorAll('.btn');
const clear = document.getElementById('clear');
const actions = document.querySelectorAll('.operations');

btnNumber.forEach(btn => {
	btn.addEventListener('click', function(e){
		if (result.textContent === '0' && result.textContent !== '') {
			result.textContent = e.target.textContent;
		} else if (!e.target.classList.contains('operations')) {
			result.textContent = result.textContent + e.target.textContent;
		} 
		if (e.target.textContent === '+/-') {
			result.textContent = '-';
		}
	})
})

let numbers = [];
actions.forEach(action => {
	action.addEventListener('click', function(e) {
		numbers.push(+result.textContent);
		result.textContent = '';
		numbers.push(e.target.dataset.action);
		if (e.target.dataset.action === 'calc') {
			operations(numbers);
			numbers = [];
		}
	})
})

const operations = (numbers) => {
	if (numbers[1] === 'plus') {
		showResult(numbers[0] + numbers[2]);
	} else if (numbers[1] === 'minus') {
		showResult(numbers[0] - numbers[2]);
	} else if (numbers[1] === 'multiply') {
		showResult(numbers[0] * numbers[2]);
	} else if (numbers[1] === 'divide') {
		showResult(numbers[0] / numbers[2])
	}
}

const showResult = (res) => {
	if (isNaN(res)) { 
		result.textContent = 'Please dont broke my calculator';
	} else {
		result.textContent = res;
	}
}

clear.addEventListener('click', function(){
	result.textContent = "0";
	numbers = [];
})