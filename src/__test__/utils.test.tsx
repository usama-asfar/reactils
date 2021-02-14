import { utils } from '..'

describe('utils', () => {
  test('windowDimension ', async () => {
    const windowDimension = utils.windowDimension
    expect(windowDimension).toEqual({
      height: window.innerHeight,
      width: window.innerWidth
    })
  })
})
