import { createStore } from "vuex";
function updateLoacalStorage(cart){
    localStorage.setItem('cart', JSON.stringify(cart))
}


export default ({
    state:{
        cart: [],
    },

    getters:{
        productQuantity: state=> product=> {
            const item = state.cart.find(i => i.id ===product.id)
            if (item) return item.quantity 
            else return null

        }

    },

    mutations: {
        addCart(state, product){
            let item = state.cart.find(i => i.id=== product.id)
            if(item){
                item.quantity++
            } else {
                state.cart.push({...product,quantity: 1})
            }

            updateLoacalStorage(state.cart)
        }

    },

    actions:{

    },

    modules:{

    },
})