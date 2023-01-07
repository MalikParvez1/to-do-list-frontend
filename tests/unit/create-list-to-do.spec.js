import { shallowMount } from '@vue/test-utils'
import TestComponent from '@/components/TestComponent'

describe('TestComponent.vue', () => {
  it('todo should save', () => {
    const wrapper = shallowMount(TestComponent, {
      data () {
        return {
          tasks: [
            { id: '1', title: 'Test', description: 'Test', status: false, date: '25-12-2022' }
          ]
        }
      }
    })

    expect(wrapper.text()).toBeDefined()
  })
})
