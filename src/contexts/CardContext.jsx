import {createContext,  useState } from 'react'

//helper functions
const addItem = (items, productAdd) => {
    const foundedItem = items.find( (item) => item.id === productAdd.id)

    if (foundedItem) {
        return items.map((item) =>  item.id === productAdd.id //condition
            ? {...item, quantity: item.quantity + 1}  // if statement is true
            : item                                     // if statement is false
    )}

    return [...items,  {...productAdd, quantity : 1}]
}

// initializing the context with these default values => ny components that use the context 
// have a reasonable value to work with, even if the context has not yet been provided.
export const CardContext = createContext({
    items: [],
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
})


//Provider: give React app access to all the things in context
export const CartProvider = ({children}) => {
    const [items, setItems] = useState([]);


    const addOneToCart = (productAdd) => {
        setItems(addItem(items, productAdd))
    }

    const removeOneFromCart = ( product) => {
        const foundedItem = items.find( (item) => item.id === product.id)
        
        if (foundedItem.quantity === 1) {
            deleteFromCart(product)
        } else {
            setItems( items.map(
                (item) =>  item.id === product.id 
                ?  {...item, quantity: item.quantity - 1}
                : item
            ))
             }}
    
    const deleteFromCart = (productRemove) => {
        setItems( cartProducts => 
            cartProducts.filter(cartProduct => cartProduct.id !== productRemove.id))
    }

    const contextValue = {addOneToCart, items ,deleteFromCart, removeOneFromCart}

    
    return (
        <CardContext.Provider value = {contextValue}>
            {children}
        </CardContext.Provider>
    )
}