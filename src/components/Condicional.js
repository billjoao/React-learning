import { useState } from "react"

function Condicional() {
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
        console.log(userEmail)
    }

    return (
        <>
            <h2>Cadastre seu email:</h2>
            <form>
                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Digite o seu email..." />
                <button type="submit" onClick={enviarEmail}>Enviar Email</button>
            </form>
            {userEmail && (
                <div>
                    <p>O seu email é: {userEmail}</p>
                </div>
            )}
        </>
    )
}

export default Condicional
