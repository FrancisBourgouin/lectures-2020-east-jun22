import { parseTemp } from './helpers'

/*
This file tests those functions:
  - parseTemp
*/

describe('Testing the parseTemp', () => {
  it('should return null if no temperature provided', () => {
    const result = parseTemp()

    expect(result).toBe(null)
  })
  it('should return 10°C if temperature is 283.15', () => {
    const result = parseTemp(283.15)

    expect(result).toEqual('10 °C')
  })
})