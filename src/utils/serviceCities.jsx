const cities = [
    {city:"Buenos Aires", country:" Argentina", countryCode:"AR"},
    {city:"Santiago de Chile", country:" Chile", countryCode:"CL"},
    {city:"Madrid", country:" Spain", countryCode:"ES"},
    {city:"Barcelona", country:" Spain", countryCode:"ES"},
    {city:"Dublin", country:" Ireland", countryCode:"IE"},
    {city:"Cork", country:" Ireland", countryCode:"IE"},
    {city:"Rome", country:" Italy", countryCode:"IT"},
    {city:"Naples", country:" Italy", countryCode:"IT"},
]

export const getCities = () => (cities)

export const getCountryNameByCountryCode = (countryCode) => (
    cities.filter(c => c.countryCode === countryCode)[0].country
)