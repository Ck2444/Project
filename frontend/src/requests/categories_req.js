import { loadAllCategoriesAction } from '../store/reducers/categoriesReducer'


export const getAllcategories = (dispatch) => {
    fetch('http://localhost:3333/categories/all')
        .then(res => res.json())
        .then(json => dispatch(loadAllCategoriesAction(json)))
}