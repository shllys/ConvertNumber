
// ------------------------- Numeros Enteros a Romanos ------------------
function convertirEnteroARomano(numero) {
    if (typeof numero != 'number' || !Number.isInteger(numero)) {
        return null;
    }

    const ROMANOS = ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM',
    '','X','XX','XXX','XL','L','LX','LXX','LXXX','XC',
    '','I','II','III','IV','V','VI','VII','VIII','IX'];

    let digitos = String(numero).split('');
    let romano = '';
    let i = 3;

    while (i--) {
        romano = (ROMANOS[+digitos.pop() + (i * 10)] || '') + romano
    }

    return Array(+digitos.join('') + 1).join('M') + romano;
}

console.log(convertirEnteroARomano(11));
console.log(convertirEnteroARomano(23));
console.log(convertirEnteroARomano(8));

// --------------------------- Numeros Romanos a Enteros ------------------

function convertirRomanoAEntero(romano) {
    const ROMANOS = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
    let entero = 0;
    let i = 0;

    while (i < romano.length) {
        if (i + 1 < romano.length && ROMANOS[romano[i]] < ROMANOS[romano[i + 1]]) {
            entero += ROMANOS[romano[i + 1]] - ROMANOS[romano[i]];
            i += 2;
        } else {
            entero += ROMANOS[romano[i]];
            i++;
        }
    }

    return entero;
}

console.log(convertirRomanoAEntero('I'));
console.log(convertirRomanoAEntero('VI'));
console.log(convertirRomanoAEntero('XIII'));
