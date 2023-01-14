import { CartProvider } from "./context/cartProvider"
import { AppRouter } from "./router/AppRouter"

export const StoreApp = () => {
  return (
    <CartProvider>
      <AppRouter />
    </CartProvider>
  )
}
