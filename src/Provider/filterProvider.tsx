import React, {useReducer} from "react";
import { filter, filterAcionReturn } from "../redux/types";
import filterReducer from '../redux/filter/filterReducer'

type Props = {
    children: React.ReactNode
}

export const FilterContext = React.createContext({} as {
    filterState: filter,
    filterDispatch: React.Dispatch<filterAcionReturn>
})

const FilterProvider: React.FC<Props> = (props) => {
    const [filterState, filterDispatch] = useReducer(filterReducer, {open: false})
    return (
        <FilterContext.Provider value={{ filterState, filterDispatch}}>
            {props.children}
        </FilterContext.Provider>
    )
}

export default FilterProvider