import type { CSSProperties } from "react";

const name = "Kleyber";
const lastName = "Infante";

const favoriteNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const address = {
    street: "Calle 123",
    city: "Ciudad",
    country: "País"
};

const myStyles: CSSProperties = {
    backgroundColor: '#92872A',
    color: '#fff',
    padding: '1rem'
}


export const MyAwesomeApp = () => {
    
  return (
    <>
        <h1>{name}</h1>
        <h2>{lastName}</h2>

        <p>{favoriteNumber.join(", ")}</p>

        <p style={myStyles}>{JSON.stringify(address)}</p>
    </>
  )
}
