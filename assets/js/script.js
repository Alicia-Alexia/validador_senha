const input = document.getElementById('password-input');
const bar = document.getElementById('strength-bar');
const text = document.getElementById('strength-text');

input.addEventListener('input', (e) => {
    const value = e.target.value;
    const len = value.length;

    if (len === 0) {
        updateView(0, 'bg-transparent', 'text-slate-400', 'Aguardando...');
        return;
    }

    if (len < 6) {
        updateView(30, 'bg-red-500', 'text-red-500', 'Fraca');
    } else if (len >= 6 && len <= 10) {
        updateView(60, 'bg-yellow-500', 'text-yellow-600', 'Média');
    } else {
        updateView(100, 'bg-green-500', 'text-green-600', 'Forte');
    }
});

function updateView(width, color, textColor, msg) {
    bar.style.width = `${width}%`;
    bar.className = `h-full transition-all duration-500 ${color}`;
    text.className = `text-sm text-right font-medium ${textColor}`;
    text.innerText = msg;
}
