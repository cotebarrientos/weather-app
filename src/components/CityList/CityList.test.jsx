import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import CityList from './CityList' //SUT

const cities = [
    {city:"Dublin", country:" Ireland", countryCode:"IE"},
    {city:"Buenos Aires", country:" Argentina", countryCode:"AR"},
    {city:"Santiago de Chile", country:" Chile", countryCode:"CL"},
    {city:"Madrid", country:" Spain", countryCode:"ES"},
    {city:"Naples", country:" Italy", countryCode:"IT"},
]

test("CityList renders", async () => {
    const { findAllByRole } = render(<CityList cities={cities} onClickCity={() => {}} />)

    const items = await findAllByRole('button')

    expect(items).toHaveLength(5)
})

test('CityList click on item', async () => {
    // Debemos simular la acción del usuario: click sobre un item
    // Para eso vamos a utilizar una acción "mock"
    const fnClickOnItem = jest.fn()

    const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem} />)

    const items = await findAllByRole('button')

    // Ahora, para simular la acción, vamos a  utilizar fireEvent
    // fireEvent es parte de la libreria testing-library/react

    fireEvent.click(items[0])

    // ¿Ahora que tuvo que suceder?
    // Se debió llamar a la función fnClickOnItem UNA única vez

    expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})