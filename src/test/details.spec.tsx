import { render, screen } from '@testing-library/react'
import Details from '../page/Details'

describe('Details', () => {
  beforeEach(() => {
    render(<Details />)
  })
  it('Details Render', () => {
    expect(screen.getByText(/Details/i))
  })
})
