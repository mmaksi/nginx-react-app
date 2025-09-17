import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App Integration Tests', () => {
  it('allows user to interact with the counter multiple times', async () => {
    const user = userEvent.setup()
    render(<App />)
    
    const button = screen.getByRole('button', { name: /count is 0/i })
    
    // Click multiple times
    await user.click(button)
    await user.click(button)
    await user.click(button)
    
    expect(screen.getByRole('button', { name: /count is 3/i })).toBeInTheDocument()
  })

  it('maintains state after multiple interactions', async () => {
    const user = userEvent.setup()
    render(<App />)
    
    const button = screen.getByRole('button', { name: /count is 0/i })
    
    // First set of clicks
    await user.click(button)
    await user.click(button)
    expect(screen.getByRole('button', { name: /count is 2/i })).toBeInTheDocument()
    
    // Additional clicks
    await user.click(button)
    expect(screen.getByRole('button', { name: /count is 3/i })).toBeInTheDocument()
  })

  it('renders all elements together correctly', () => {
    render(<App />)
    
    // Check that all main elements are present - use role to target specific heading
    expect(screen.getByRole('heading', { name: /Vite.*React/ })).toBeInTheDocument()
    expect(screen.getByAltText('Vite logo')).toBeInTheDocument()
    expect(screen.getByAltText('React logo')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /count is 0/i })).toBeInTheDocument()
    
    // Use a more flexible text matcher for the HMR text
    expect(screen.getByText((_, element) => {
      return element?.textContent === 'Edit src/App.tsx and save to test HMR'
    })).toBeInTheDocument()
    
    expect(screen.getByText(/Click on the Vite and React logos to learn more/)).toBeInTheDocument()
  })
})
