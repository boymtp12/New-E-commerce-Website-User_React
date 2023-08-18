const initialState = {
    data_product_by_category: [],
    data_product_list: [],
    data_feature_product: [],
    
}

const BaseReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_DATA_PRODUCT_BY_CATEGORY': {
            return {
                ...state,
                data_product_by_category: action.data_product_by_category
            }
        }
        case 'CHANGE_DATA_PRODUCT_LIST': {
            return {
                ...state,
                data_product_list: action.data_product_list
            }
        }

        case 'CHANGE_DATA_FEATURE_PRODUCT': {
            return {
                ...state,
                data_feature_product: action.data_feature_product
            }
        }


        default: {
            return state
        }
    }
}

export default BaseReducer
