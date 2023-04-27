
// Targeting the Grocery Items with a new component:

function Item(props) {
    return (
        <>
            <p>{props.name}</p>
            <p>{props.quantity} {props.unit}</p>
            <button>Buy</button>
            <button>Remove</button>
        </>
    );
}

export default Item;