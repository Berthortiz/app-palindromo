import './App.css'
import { useCheckPalindromo } from './hooks/useCheckPalindromo';
import { inputDelateSpace } from "./logic/inputDobleSpace";


export default function App() {

  const { palindromo, isPalindromo, inputPalindromoRef, setPalindromo } = useCheckPalindromo()

  const checkPalindromo = () => {
    inputDelateSpace()
    setPalindromo(inputPalindromoRef.current.value);
  };

  const enter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
    }
  };

  return (
    <>
      <main>
        <h1 className="title-app">App de Palíndromo</h1>
        <form >
          <h2>Escribe tu palíndromo</h2>
          <div className="container-input">
            <input
              id="search"
              onInput={checkPalindromo}
              onKeyDown={enter}
              ref={inputPalindromoRef}
              autoFocus
              type="text"
              className="input-palindromo"
              placeholder=" "
              autoComplete="off"
              style={{ borderBottom: `var(--border-width) solid ${palindromo === '' ? '#484848' : isPalindromo.color}` }}
            />

            <label className="label-palindromo" htmlFor="search">
              Anita, lava la tina....
            </label>
            {
              <span className="icon-check" >{
                palindromo && isPalindromo.updatePalindromo
              }
              </span>
            }
          </div>


          {/* {<p style={{ color: "#f8cf0060" }}>{palindromo}</p>} */}
        </form>

        <div className="answer"></div>
      </main>
    </>
  );
}
