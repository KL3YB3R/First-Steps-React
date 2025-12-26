import { ItemCounter } from "./shopping-counter/ItemCounter"

interface ItemInCart {
  productName: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  {
    productName: "Nintendo Switch",
    quantity: 6,
  },
  {
    productName: "Xbox Series X",
    quantity: 4,
  },
  {
    productName: "Playstation 5",
    quantity: 2,
  },
]

export const FirstStepsApp = () => {
  return (
    <>
      <h1>Carro de compras</h1>

      {
        itemsInCart.map(item => (
          <ItemCounter key={item.productName} name={item.productName} quantity={item.quantity} />
        ))
      }

      {/* <ItemCounter name="Nintendo Switch" quantity={6} />
      <ItemCounter name="Playstation 5" quantity={2} /> */}
    </>
  )
}
