import { useState } from "react"

function Form() {

    function cadastrar(e) {
        e.preventDefault()
        console.log(name)
        console.log('cadastrou o usuario!')
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrar}>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" onChange={(e => setPassword(e.target.value))} name="password" placeholder="digite sua senha" />
                </div>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" id="name" onChange={(e) => setName(e.target.value)} name="name" placeholder="digite seu nome" />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form