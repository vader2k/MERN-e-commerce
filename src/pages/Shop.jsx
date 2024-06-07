import Hero from "../components/Hero"
import Offers from "../components/Offers"
import Popular from "../components/Popular"
import NewCollections from "../components/NewCollections"
import Newsletter from "../components/Newsletter"

const Shop = () => {
  return (
    <main>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <Newsletter />
    </main>
  )
}

export default Shop