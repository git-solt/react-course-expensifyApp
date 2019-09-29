import {setTextFilter, setStartDate, setEndDate, sortByAmount, sortByDate} from '../../actions/filters'
import moment from 'moment'
test('should generate set start date action object', () => {
  const action = setStartDate(moment(0))
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
}) 

test('should generate set end date action object', () => {
  const action = setEndDate(moment(1000))
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(1000)
  })
}) 

test('should generate text filter action object', () => {
  const action = setTextFilter('rent')
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'rent'
  })
}) 


test('should generate text filter action object default', () => {
  const action = setTextFilter()
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
}) 


test('should generate sort by amount action', () => {
  const action = sortByAmount()
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  })
}) 

test('should generate sort bY DATE action', () => {
  const action = sortByDate()
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  })
}) 