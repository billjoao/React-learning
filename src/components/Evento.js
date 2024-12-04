import Button from "./Button"

function Evento() {

    function meuEvento(){
        console.log("Fui ativado")
    }

    function segundoEvento(){
        console.log("Fui ativado, sou o segundo")
    }


    return (
        <div>
            <p>Clique para acionar o evento:</p>
            <Button event={meuEvento} text="Primeiro evento"/>
            <Button event={segundoEvento} text="Segundo evento"/>
        </div>
    )

}

export default Evento