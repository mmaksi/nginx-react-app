import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the main heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /Vite.*React/ })).toBeInTheDocument()
  })

  it('renders the Vite logo with correct attributes', () => {
    render(<App />)
    const viteLogo = screen.getByAltText('Vite logo')
    expect(viteLogo).toBeInTheDocument()
    // In test environment, Vite may convert SVG imports to data URLs
    expect(viteLogo).toHaveAttribute('src')
    expect(viteLogo).toHaveClass('logo')
  })

  it('renders the React logo with correct attributes', () => {
    render(<App />)
    const reactLogo = screen.getByAltText('React logo')
    expect(reactLogo).toBeInTheDocument()
    expect(reactLogo).toHaveClass('logo react')
  })

  it('renders the count button with initial value of 0', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /count is 0/i })
    expect(button).toBeInTheDocument()
  })

  it('increments count when button is clicked', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /count is 0/i })
    
    fireEvent.click(button)
    expect(screen.getByRole('button', { name: /count is 1/i })).toBeInTheDocument()
    
    fireEvent.click(button)
    expect(screen.getByRole('button', { name: /count is 2/i })).toBeInTheDocument()
  })

  it('renders the HMR instruction text', () => {
    render(<App />)
    // Use getByText with a function to handle text split across elements
    expect(screen.getByText((_, element) => {
      return element?.textContent === 'Edit src/App.tsx and save to test HMR'
    })).toBeInTheDocument()
  })

  it('renders the read the docs text', () => {
    render(<App />)
    expect(screen.getByText(/Click on the Vite and React logos to learn more/)).toBeInTheDocument()
  })

  it('has correct links to external websites', () => {
    render(<App />)
    
    const viteLink = screen.getByRole('link', { name: /vite logo/i })
    expect(viteLink).toHaveAttribute('href', 'https://vite.dev')
    expect(viteLink).toHaveAttribute('target', '_blank')
    
    const reactLink = screen.getByRole('link', { name: /react logo/i })
    expect(reactLink).toHaveAttribute('href', 'https://react.dev')
    expect(reactLink).toHaveAttribute('target', '_blank')
  })

  it('renders the code element with correct text', () => {
    render(<App />)
    const codeElement = screen.getByText('src/App.tsx')
    expect(codeElement).toBeInTheDocument()
    expect(codeElement.tagName).toBe('CODE')
  })
})
