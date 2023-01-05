import { mount } from '@vue/test-utils'
import TestComponent from '@/components/TestComponent'
import TestView from '@/views/TestView'

describe('Testing Persons.vue', () => {
  it('should have persons card list component', () => {
    // when
    const wrapper = mount(TestView)

    // then
    const cardList = wrapper.findComponent(TestComponent)
    expect(cardList.exists()).toBeTruthy()
  })
})
