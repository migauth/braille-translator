/*
 * @vitest-environment happy-dom
 */

import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { siteStyles, inputStyles } from '@/state'
import StyleButton from './StyleButton.vue'

describe('ColorSchemeChanger', () => {
  it('changes to black and white', async () => {
    const wrapper = mount(StyleButton)

    // Click the "Black and White" button
    await wrapper.find('button:nth-child(1)').trigger('click')

    // Assert that siteStyles and inputStyles have been updated
    expect(siteStyles.value.border).toBe('border border-black')
    expect(siteStyles.value.text).toBe('text-black')
    expect(siteStyles.value.background).toBe('bg-white')
    expect(inputStyles.value.placeholder).toBe('placeholder-black')
    expect(inputStyles.value.background).toBe('bg-white')
    expect(inputStyles.value.border).toBe('border-8 border-dashed border-black')
  })

  it('changes to white and black', async () => {
    const wrapper = mount(StyleButton)

    // Click the "White and Black" button
    await wrapper.find('button:nth-child(2)').trigger('click')

    // Assert that siteStyles and inputStyles have been updated
    expect(siteStyles.value.border).toBe('border border-white')
    expect(siteStyles.value.text).toBe('text-white')
    expect(siteStyles.value.background).toBe('bg-black')
    expect(inputStyles.value.placeholder).toBe('placeholder-white')
    expect(inputStyles.value.background).toBe('bg-black')
    expect(inputStyles.value.border).toBe('border-8 border-dashed border-white')
  })

  // Add similar tests for other color schemes as needed
})
