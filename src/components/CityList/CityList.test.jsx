import React from 'react'
import { render } from '@testing-library/react'
import CityList from './CityList'

const cities = [
    {city:"Dublin", country:"Ireland"},
    {city:"Buenos Aires", country:"Argentina"},
    {city:"Santiago de Chile", country:"Chile"},
    {city:"Madrid", country:"España"},
]

test("CityList renders", async () => {
    const { findAllByRole } = render(<CityList cities={cities} />)

    const items = await findAllByRole('listitem')

    expect(items).toHaveLength(4)
})