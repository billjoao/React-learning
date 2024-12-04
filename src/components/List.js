import Item from "./Item"

function List() {

    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Luis Vitor" lancamento={2004} />
                <Item marca="Nike" lancamento={2006} />
                <Item />
            </ul>
        </>
    )

}

export default List