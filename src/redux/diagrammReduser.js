import { DataAPI } from '../api/api';
import { toggleIsFetching } from './apiReduser';

const SET_TOTAL_DIAGRAMM_DATA = 'SET_TOTAL_DIAGRAMM_DATA';
const SET_ACTIVE_CIRCLE_INDEX = 'SET_ACTIVE_CIRCLE_INDEX';

const initialState = {
	data: null,
	activeIndex: null
}

const graphReduser = (state = initialState, action) => {
	switch (action.type) {
		case SET_TOTAL_DIAGRAMM_DATA: {
			return {
				...state,
				data: [...action.data]
			}
		}
		case SET_ACTIVE_CIRCLE_INDEX: {
			return {
				...state,
				activeIndex: action.activeIndex
			}
		}
		default: {
			return state;
		}
	}
}

export const setTotalDiagrammData = (data) => ({type: SET_TOTAL_DIAGRAMM_DATA, data})

export const setActiveCircle = (activeIndex) => ({type: SET_ACTIVE_CIRCLE_INDEX, activeIndex})

export const getDiagrammData = () => (dispatch) => {
	dispatch(toggleIsFetching(true));
	DataAPI.getDiagrammData()
		.then(res => {
			dispatch(setTotalDiagrammData(getChartData()));
			dispatch(toggleIsFetching(false));
		})
}

const getChartData = () => ([
	{
		name: "name 1",
		ticker: "ticker 1",
		percent: 20,
		value: 500,
		color: '#ffaaff'
	},
	{
		name: "name 2",
		ticker: "ticker 2",
		percent: 30,
		value: 5500,
		color: '#aaffff'
	},
	{
		name: "name 3",
		ticker: "ticker 3",
		percent: 30,
		value: 3900,
		color: '#2300ff'
	},
	{
		name: "name 4",
		ticker: "ticker 4",
		percent: 10,
		value: 3900,
		color: '#47faff'
	},
	{
		name: "name 10",
		ticker: "ticker 10",
		percent: 2,
		value: 3900,
		color: '#333300'
	},
	{
		name: "name 11",
		ticker: "ticker 11",
		percent: 3,
		value: 3900,
		color: '#aaccff'
	},
	{
		name: "name 12",
		ticker: "ticker 12",
		percent: 5,
		value: 3900,
		color: '#0affc0'
	}
])

export default graphReduser;