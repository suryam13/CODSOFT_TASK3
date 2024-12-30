const display = document.getElementById('display');
const buttons = document.querySelectorAll('.calculator button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        if (value === 'C') {
            display.value = '';
        } else if (value === 'DEL') {
            display.value = display.value.slice(0, -1);
        } else if (value === '=') {
            try {
                display.value = eval(display.value.replace(/×/g, '*').replace(/÷/g, '/'));
            } catch (error) {
                alert('Invalid expression');
                display.value = '';
            }
        } else {
            display.value += value;
        }
    });
});
