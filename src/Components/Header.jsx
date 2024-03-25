

const Header = () => {
  return (
    <div className={`w-full relative z-[100]`}>
        <div className="flex justify-between items-center py-4 md:px-14 px-7 fixed top-0 left-0 right-0 shadow-xl bg-white text-black">
            
            <div className="w-[100px]">
                <img src="/Group.png" alt="img"/>
            </div>

            <div className="flex gap-7 font-semibold">
             <button className="hover:bg-amber-400 py-1 px-2 rounded-md transition duration-300">Productos</button>
             <button className="hover:bg-amber-400 py-1 px-2 rounded-md transition duration-300 ">Promociones</button>
             <button className="hover:bg-amber-400 py-1 px-2 rounded-md transition duration-300 ">Nosotros</button>
            </div>

            <div className="flex justify-center gap-5">
                <button><img src="/search.png" alt="icon1" /></button>
                <button><img src="/user.png" alt="icon2" /></button>
                <button><img src="/shopping.png" alt="icon3"/></button>

            </div>

        </div>
        

    </div>
  )
}

export default Header