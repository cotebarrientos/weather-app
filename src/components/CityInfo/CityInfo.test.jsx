import React from 'react'
import { render } from '@testing-library/react'
import CityInfo from './CityInfo' // SUT: Subject under testing

test("CityInfo render", async () => {
    // AAA
    // The meaning is Arrange, Act and Assert

    const city = 'Dublin'
    const country = 'Ireland'

    // Render: rennderiza el componente y retorna una serie de funciones de utilidad
    // En este caso utilizamos "findAllByRole"
    // Vamos a analizar su estado en el "Assert"
    const { findAllByRole } = render(<CityInfo city={city} country={country} />)

    // findAllByRole nos va a buscar (en este caso) todos los componentes que sean
    // "heading" => h1,h2,h3,h4,h5 y h6
    // El resultado es una array de componentes
    const cityAndCountryComponents = await findAllByRole('heading')

    // ¿Cuando el test va a ser correcto?
    // DEFINICIÓN:
    // Cuando el primer elemento (heading) se encuentre la ciudad "Dublin"
    // y cuando en el segundo elemento se encuentre el pais de Ireland
    expect(cityAndCountryComponents[0]).toHaveTextContent(city)
    expect(cityAndCountryComponents[1]).toHaveTextContent(country)

    // Si estas condiciones se cumplen (expect), el test está 'OK'
})