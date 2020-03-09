import { usersAPI } from "../api/api"

const CALENDAR_CHANGE = 'charts/CALENDAR_CHANGE'
const SET_USERS = 'charts/SET-USERS'
const SET_STATISTIC = 'charts/SET-STATISTIC'
const CHANGE_CURRENT_PAGE = 'charts/CHANGE-CURRENT-PAGE'
const SET_PAGES_COUNT = 'charts/SET-PAGES-COUNT'
const TOGGLE_FETCHING = 'charts/TOGGLE-FETCHING'
const SET_NAME = 'charts/SET-NAME'

let initialState = {
    dateArray: [],
    usersStatistic: [],
    users: [],
    currentPage: 1,
    totalPages: 0,
    usersPerPage: 50,
    isFetching: false

}

let chartsReducer = (state = initialState, action) => {
    switch (action.type) {
        default: return state
        case CALENDAR_CHANGE: {
            return { ...state, dateArray: action.date }
        }
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_STATISTIC: {
            return { ...state, usersStatistic: action.statistic }
        }
        case CHANGE_CURRENT_PAGE: {
            return { ...state, currentPage: action.page }
        }
        case SET_PAGES_COUNT: {
            return { ...state, totalPages: action.pagesCount }
        }
        case TOGGLE_FETCHING: {
            return { ...state, isFetching: !state.isFetching }
        }
        case SET_NAME: {
            return { ...state, userName: action.name}
        }
    }
}


export const calendarChange = (date) => { return { type: CALENDAR_CHANGE, date } }
export const setUsers = (users) => { return { type: SET_USERS, users } }
export const setUsersStatistic = (statistic) => { return { type: SET_STATISTIC, statistic } }
export const changeCurrentPage = (page) => { return { type: CHANGE_CURRENT_PAGE, page } }
export const setPagesCount = (pagesCount) => { return { type: SET_PAGES_COUNT, pagesCount } }
export const toggleFetching = () => { return { type: TOGGLE_FETCHING } }
export const setName = (name) => {return {type: SET_NAME, name}} 

export const getUsers = (page, limit) => async (dispatch) => {
    dispatch(toggleFetching())
    let data = await usersAPI.getUsers(page, limit)
    dispatch(setUsers(data.items))
    dispatch(setPagesCount(data.paginatorInfo.pagesCount))
    dispatch(toggleFetching())

}

export const getStatistic = (id) => async (dispatch) => {
    dispatch(toggleFetching())
    let response = await usersAPI.getStatistic(id)
    dispatch(setUsersStatistic(response.stat))
    dispatch(setName(response.user.first_name + " " + response.user.last_name))
    dispatch(toggleFetching())
}

export default chartsReducer