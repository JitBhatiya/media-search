import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <div>
        
        <div className="justify-between flex items-center py-6 px-10  bg-[var(--c1)]">
            <h2 className="font-medium text-2xl">Media Search</h2>
            <div className="gap-5 flex items-center">
                <Link className="text-base font-medium active:scale-95 text-xl bg-(--c4) text-(--c1) rounded px-4 py-2" to='/'>Search</Link>
                <Link className="text-base font-medium active:scale-95 text-xl bg-(--c4) text-(--c1) rounded px-4 py-2" to='collection'>Collection</Link>

            </div>
         </div>
    </div>
  )
}

export default Navbar