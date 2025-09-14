# Testing Setup

This project uses **Vitest** and **React Testing Library** for unit and integration testing.

## Available Test Commands

- `npm test` - Run tests in watch mode (interactive)
- `npm run test:run` - Run all tests once and exit
- `npm run test:ui` - Run tests with Vitest UI (requires `@vitest/ui`)

## Test Files

### `src/App.test.tsx`
Unit tests for the main App component covering:
- Component rendering
- Logo attributes and links
- Counter functionality
- Text content verification

### `src/App.integration.test.tsx`
Integration tests that cover:
- User interactions with the counter
- State management across multiple interactions
- Overall component integration

### `src/utils.test.ts`
Unit tests for utility functions:
- String formatting functions
- Mathematical operations
- Edge case handling

## Test Configuration

- **Framework**: Vitest (Vite-native test runner)
- **Testing Library**: @testing-library/react for React component testing
- **Environment**: jsdom (simulates browser environment)
- **Setup**: Custom setup file at `src/test/setup.ts`

## Writing Tests

### Testing Components
```typescript
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />)
    expect(screen.getByText('Expected Text')).toBeInTheDocument()
  })
})
```

### Testing User Interactions
```typescript
import userEvent from '@testing-library/user-event'

it('handles user interaction', async () => {
  const user = userEvent.setup()
  render(<MyComponent />)
  
  await user.click(screen.getByRole('button'))
  expect(screen.getByText('Updated Text')).toBeInTheDocument()
})
```

### Testing Utilities
```typescript
import { describe, it, expect } from 'vitest'
import { myUtilFunction } from './utils'

describe('myUtilFunction', () => {
  it('returns expected result', () => {
    expect(myUtilFunction(input)).toBe(expectedOutput)
  })
})
```

## Coverage

To add test coverage, install `@vitest/coverage-v8`:
```bash
npm install --save-dev @vitest/coverage-v8
```

Then add to package.json scripts:
```json
"test:coverage": "vitest run --coverage"
```
