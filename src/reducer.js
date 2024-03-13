export const initialState = {
    Basket : [],
    user : null,
};
export const getBasketTotal = (Basket) => 
   Basket?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) => {
     console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                  ...state,
                  Basket:[...state.Basket, action.item],
              };  
        
        case 'REMOVE_FROM_BASKET':
            let newBasket = state.Basket;
            const index = newBasket.findIndex(
                (BasketItem) => BasketItem.id === action.id 
            );

            if(index>=0){
                newBasket.splice(index, 1);
            }else{
                console.warn(`Can't remove (id : ${action.id}) as it is not in Basket`);
            }

        return {
            ...state,
            Basket : newBasket,
        }

        case 'SET_USER':
            return {
                ...state,
                user : action.user
            }
    
        default:
            return state;
    }
};

export default reducer;