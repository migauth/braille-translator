/*
 * @vitest-environment happy-dom
 */

import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TranslatorInputOutput from './TranslatorInputOutput.vue'

describe('TranslatorInputOutput', () => {
  it('renders the component correctly', () => {
    const wrapper = mount(TranslatorInputOutput)

    // Assert that the component is mounted
    expect(wrapper.exists()).toBeTruthy()

    // Assert that the input element exists
    const input = wrapper.find('input#textInput')
    expect(input.exists()).toBeTruthy()

    // Assert that the button exists
    const button = wrapper.find('button')
    expect(button.exists()).toBeTruthy()

    // Assert that the initial text output is empty
    const outputText = wrapper.find('.w-full.text-6xl.p-6.overflow-auto.break-words')
    expect(outputText.text()).toBe('')
  })

  it('clears input when button is clicked', async () => {
    const wrapper = mount(TranslatorInputOutput)

    // Simulate input into the text field
    await wrapper.find('input#textInput').setValue('Hello World')

    // Assert that input value is set correctly
    expect(wrapper.find('input#textInput').element.value).toBe('Hello World')

    // Click the clear button
    await wrapper.find('button').trigger('click')

    // Assert that the input value is cleared
    expect(wrapper.find('input#textInput').element.value).toBe('')

    // Assert that the output text is empty after clearing
    const outputText = wrapper.find('.w-full.text-6xl.p-6.overflow-auto.break-words')
    expect(outputText.text()).toBe('')
  })

  it('transforms text to Braille', async () => {
    const wrapper = mount(TranslatorInputOutput)

    // Simulate input into the text field
    await wrapper.find('input#textInput').setValue('Hello')

    // Assert that input value is set correctly
    expect(wrapper.find('input#textInput').element.value).toBe('Hello')

    // Assert that the output text is transformed to Braille
    const expectedBraille = '⠓⠑⠇⠇⠕'
    const outputText = wrapper.find('.w-full.text-6xl.p-6.overflow-auto.break-words')
    expect(outputText.text()).toBe(expectedBraille)
  })
})
