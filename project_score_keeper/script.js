const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetBtn = document.querySelector('#reset');

const totalSelect = document.querySelector('#select');

const p1Score = document.querySelector('#p1Score');
const p2Score = document.querySelector('#p2Score');

let p1 = 0;
let p2 = 0;
let isGameOver = false;

let totalScore = 3;

totalSelect.addEventListener('change', function ()
{
    totalScore = parseInt(this.value);
    reset();
})

p1Button.addEventListener('click', function ()
{
    if (!isGameOver) {
        p1 += 1;

        if (p1 === totalScore) {
            isGameOver = true;
            p1Score.classList.add('has-text-success');
            p2Score.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        // p1Score.textContent = p1;
        p1Score.innerText = p1;

    }
})

p2Button.addEventListener('click', function ()
{
    if (!isGameOver) {
        p2 += 1;

        if (p2 === totalScore) {
            isGameOver = true;
            p2Score.classList.add('has-text-success');
            p1Score.classList.add('has-text-danger');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        // p1Score.textContent = p1;
        p2Score.innerText = p2;

    }
})

resetBtn.addEventListener('click', reset)

function reset()
{
    isGameOver = false;
    p1 = 0;
    p2 = 0;
    p1Score.innerText = 0;
    p2Score.innerText = 0;
    p1Score.classList.remove('has-text-success', 'has-text-danger');
    p2Score.classList.remove('has-text-success', 'has-text-danger');
    p1Button.disabled = false;
    p2Button.disabled = false;
}
