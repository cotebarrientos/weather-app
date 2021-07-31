import React from 'react'
import Weather from './Weather'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

// TDD Method
test('Weather render', async () => {
    // AAA = Arrange, Act and Assert
    const { findByRole } = render(<Weather temperature={10} />)

    const temp = await findByRole('heading')

    expect(temp).toHaveTextContent('10')
})