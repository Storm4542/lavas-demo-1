export const state = () => {
    return {
        book: '莎士比亚全集',
        price: '$30'
    }
}
export const mutations = {
    changeBookName(state, newName) {
        state.book = newName
    },
    changePrice(state, newPrice) {
        state.price = newPrice
    }
}
