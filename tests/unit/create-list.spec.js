import { mount } from '@vue/test-utils'
import TestComponent from '@/components/TestComponent'
import TestView from '@/views/TestView'

describe('Testing TestView.vue', () => {
  it('should have test component', () => {
    // when
    const wrapper = mount(TestView)

    // then
    const cardList = wrapper.findComponent(TestComponent)
    expect(cardList.exists()).toBeTruthy()
  })
})
