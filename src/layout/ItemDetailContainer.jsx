export const ItemDetailContainer = ({children}) => {
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="row gx-4 gx-lg-5 align-items-center">
          {children}
        </div>
      </div>
    </section>
  )
}
