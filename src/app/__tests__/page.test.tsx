import { render, screen } from '@testing-library/react'
import Page from '../page'

describe('Landing Page', () => {
  it('renders without crashing', () => {
    render(<Page />)
  })

  // Add more specific tests based on your landing page content
  it('displays the main heading', () => {
    render(<Page />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
  })
})
