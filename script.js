const h1 = document.querySelector('#name');
const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const text = h1.innerText;

h1.addEventListener('mouseenter', () => {
    let iteration = 0;
    const interval = setInterval(() => {   // <-- store interval ID here
        const str = text
            .split('')
            .map((_, index) => {
                if (index < iteration) {
                    return text[index]; // reveal correct letter
                }
                return characters[Math.floor(Math.random() * characters.length)];
            })
            .join('');

        h1.innerText = str;

        iteration += 0.3;

        if (iteration >= text.length) {
            clearInterval(interval); // <-- now this works
        }
    }, 20);
});