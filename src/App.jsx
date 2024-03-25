import Header from "./Components/Header"
import { FaFacebook, FaTwitter, FaInstagram, FaHeart } from "react-icons/fa";
import { FaStar, FaRegStar } from 'react-icons/fa';



function App() {
  
  const products = [
    {id: 1, name: 'Citrate Mag', price: '273.00', discountPrice: '134.00', img: '/citrate.jpg', content: '240 Capsulas | 800Mg'},
    {id: 2, name: 'Citrate Mag', price: '273.00', discountPrice: '134.00', img: '/citrate.jpg', content: '240 Capsulas | 800Mg'},
    {id: 3, name: 'Citrate Mag', price: '273.00', discountPrice: '134.00', img: '/citrate.jpg', content: '240 Capsulas | 800Mg'},
    {id: 4, name: 'Citrate Mag', price: '273.00', discountPrice: '134.00', img: '/citrate.jpg', content: '240 Capsulas | 800Mg'},
    {id: 5, name: 'Citrate Mag', price: '273.00', discountPrice: '134.00', img: '/citrate.jpg', content: '240 Capsulas | 800Mg'},
    {id: 6, name: 'Citrate Mag', price: '273.00', discountPrice: '134.00', img: '/citrate.jpg', content: '240 Capsulas | 800Mg'}
  ]

  return (
    <main className=' text-black'>
     
     <Header />
     
      <section className="mt-16 h-auto w-full relative">
        <div className="border">
          <img src="/Banner.png" alt="img4" />
        </div>
        <div className="absolute right-12 top-5 lg:top-12 lg:h-[450px] lg:w-[500px] ">
          <img className="lg:h-[400px] h-[120px] lg:w-full" src="/Rectangle.png" alt="" />
        </div>
        
      </section>
      <div className="grid items-center justify-center mt-2 ">
        <h2 className="font-semibold text-4xl">Productos</h2>
      </div>
      

      <section className="grid grid-cols-[repeat(auto-fill)] md:grid-cols-3 mx-auto gap-4 justify-center items-center mt-2">
        
        {
          products.map((product) => (
            
            <article 
              className="bg-white rounded-xl shadow-md p-2 w-[340px] h-auto justify-self-center"
              key={product.id}
            >
              <div className="border-2 rounded-3xl font-semibold relative">
                <header className="rounded-3xl">
                  <img className="rounded-3xl" src="/citrate.jpg" alt="" />
                </header>
                <div className="flex justify-around">
                  <h1 className="text-2xl">{product.name}</h1>
                  <span className="text-2xl">${product.price}</span>
                </div>
                <div className="flex justify-around mt-1">
                  <p className="text-sm text-gray-600 ml-5">{product.content}</p>
                  <span className="line-through font-extralight">${product.discountPrice}</span>
                </div>
                <div className="flex ml-10 mt-4 mb-8">
                  {[...Array(5)].map((_, index) => (
                    index < product.rating ? <FaStar key={index} /> : <FaRegStar key={index} />
                  ))}
                </div>

                {/* reactions */}
                <div>
                  <button className="flex gap-2 bg-transparent outline-none absolute top-5 -right-8 rounded-xl border-2 p-1">
                    <FaHeart className="text-red-500" size={24} />
                    22
                  </button>
                </div>

                
                
              </div>

              <div className="flex justify-between mt-10 p-4">
                <div>
                  <header className="font-extralight">COMPARTE</header>
                  <div className="flex gap-4 mt-1">
                    <label htmlFor="facebook"><FaFacebook /></label>
                    <label htmlFor="twitter"><FaTwitter /></label>
                    <label htmlFor="instagram"><FaInstagram /></label>
                  </div>
                </div>
                <button 
                  className="border border-yellow-500 rounded-xl px-5 font-semibold"
                >
                  Agregar</button>
              </div>

              
            </article>
          ))
        }
      </section>

    </main>
  )
}

export default App
