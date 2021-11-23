import React from 'react'
import { render } from '@testing-library/react'
import ForecastItem from './ForecastItem'
import ForecastItemStories from './ForecastItem.stories'


test('ForecastItem render', async  () => {
    const { findByText } = render(<ForecastItem hour={10} state='clear' temperature={23} weekDay='Monday' />)

    const hour = await findByText(/10/)

    const weekDay = await findByText(/Monday/)
    
    const temperature = await findByText(/23/)

    expect(hour).toHaveTextContent('10')
    expect(temperature).toHaveTextContent('23 °C')
    expect(weekDay).toHaveTextContent('Monday')
})