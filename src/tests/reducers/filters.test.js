import filtersReducers from '../../reducers/filters'
import moment from 'moment'

test('should set up defaut filter values', () => {
  const state = filtersReducers(undefined, { type: '@@INIT'})
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})

test('should set sortBy to amount', () => {
  const state = filtersReducers(undefined, {
    type: 'SORT_BY_AMOUNT'
  })
  expect(state.sortBy).toBe('amount')
})  

test('should set sortBy to date', () => {
  const defaultState = {
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  }
  const state = filtersReducers(defaultState, {type: 'SORT_BY_DATE'})
  expect(state.sortBy).toBe('date')
})

test('should set text filter', () => {
  const state = filtersReducers(undefined, {
    type: 'SET_TEXT_FILTER',
    text: 'rent'
  })

  expect(state.text).toBe('rent')
})

test('set start date filter ', () => {
  const action = {
    type: 'SET_START_DATE',
    startDate: moment(0).subtract(10, 'days')
  }
  const state = filtersReducers(undefined, action) 

  expect(state.startDate).toBe(action.startDate)
})

test('should set end date', () => {
  const action = {
    type: 'SET_END_DATE',
    endDate: moment(0)
  }
  const state = filtersReducers(undefined, action)
  expect(state.endDate).toBe(action.endDate)
})