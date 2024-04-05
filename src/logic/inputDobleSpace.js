
export const inputDelateSpace = () => {

    const inputPalindromo = document.querySelector('.input-palindromo')

    inputPalindromo.addEventListener('input', function delate() {
        const inputValue = this.value;
        const lastCharacter = inputValue.slice(-1)
        const penultimateCharacter = inputValue.slice(-2, -1)

        if (lastCharacter === ' ' && penultimateCharacter === ' ') {
            this.value = inputValue.slice(0, -1);
        }


    })

}
