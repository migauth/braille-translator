/*
 * @vitest-environment happy-dom
 */

import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TranslatorInputOutput from './TranslatorInputOutput.vue'

describe('example test', () => {
  it('should render', () => {
    const wrapper = mount(TranslatorInputOutput)
    // has form
    expect(wrapper.find('form').exists()).toBeTruthy()
    // has input
    expect(wrapper.find('input').exists()).toBeTruthy()
    // has button
    expect(wrapper.find('button').exists()).toBeTruthy()
  })
})
