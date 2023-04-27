
// Targeting the Grocery Items with a new component:

function Item(props) {
    return (
        <ul>
            {
            props.groceries.map((grocery) => {
                return (
                    <li key={props.grocery.id}>
                        <p>{props.grocery.name}</p>
                        <p>{props.grocery.quantity} {props.grocery.unit}</p>  
                        <button>Buy</button>
                        <button>Remove</button>
                    </li>
                )
            })
        }
        </ul>
    )
}

export default Item;