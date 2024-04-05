import { useEffect, useRef, useState } from "react";

export function useCheckPalindromo() {
    const [palindromo, setPalindromo] = useState('');
    const inputPalindromoRef = useRef();
    const [isPalindromo, setIsPalindromo] = useState('')

    useEffect(() => {
        console.log('Me renderize!');
        console.log(palindromo);

        const inputPalindromo = palindromo.replace(/[\s,]/g, "").toLowerCase()
        const checkPalindromo = inputPalindromo === inputPalindromo.split('').reverse().join('')

        if (checkPalindromo && palindromo.length > 2) {
            setIsPalindromo({ updatePalindromo: '✅', color: 'var(--border-color-green)' })

            return
        }
        setIsPalindromo({ updatePalindromo: '🔴', color: 'var(--border-color-red)' })

    }, [palindromo]);

    return { palindromo, inputPalindromoRef, isPalindromo, setPalindromo }
}

