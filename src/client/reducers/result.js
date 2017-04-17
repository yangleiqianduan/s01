import { fromJS } from 'immutable'
import * as actions from 'actions/result'

export default (state = fromJS(initState), action) => {
  switch (action.type) {
    case actions.UPDATE_ITEM_LIST:
      return state.merge({list: action.payload})
    default:
      return state
  }
}

const initState = {
  list: []          // {firstPageUrl, marketPrice, productId, productName}
}
