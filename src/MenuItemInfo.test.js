import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme'
import MenuItemInfo from './menuItemInfo'

it('renders without crashing', () => {
  const pref = shallow(<MenuItemInfo />)
})

it('has a btn and menuContent', () => {
  const prefState = {
    preference: {
      opening: true,
      ending: true,
      ost: true
    }
  }
  const togglePreferenceState = jest.fn()
  const pref = mount(
    <MenuItemInfo
      preferenceState={prefState}
      togglePreferenceState={togglePreferenceState}
    />
  )
  expect(pref.find('.btn').length).toEqual(1)
  expect(pref.find('.menuDropdown').length).toEqual(1)
})
