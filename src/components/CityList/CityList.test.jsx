import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import CityList from './CityList' //SUT

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

test('CityList click on item', async () => {
    // Debemos simular la acción del usuario: click sobre un item
    // Para eso vamos a utilizar una acción "mock"
    const fnClickOnItem = jest.fn()

    const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem} />)

    const items = await findAllByRole('listitem')

    // Ahora, para simular la acción, vamos a  utilizar fireEvent
    // fireEvent es parte de la libreria testing-library/react

    fireEvent.click(items[0])

    // ¿Ahora que tuvo que suceder?
    // Se debió llamar a la función fnClickOnItem UNA única vez

    expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})