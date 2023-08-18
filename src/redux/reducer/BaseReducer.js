const initialState = {
    data_product_by_category: [],
    
}

const BaseReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_DATA_PRODUCT_BY_CATEGORY': {
            return {
                ...state,
                data_product_by_category: action.data_product_by_category
            }
        }

        default: {
            return state
        }
    }
}

export default BaseReducer
