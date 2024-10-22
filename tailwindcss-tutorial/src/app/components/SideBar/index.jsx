export function SideBar ({open, onClickClose, children}) {
    const isOpen = false
    return (
        <div>
            <div className={`top-0 right-0 z-50 fixed h-full w-full bg-white transition transform duration-300 
        md:w-[40%] ${open ? "translate-x-0" : "translate-x-full"}`}>
                <button onClick={onClickClose} className="absolute right-4 top-4 p-2 font-bold text-black">
                    X
                </button>
                {children}
            </div>
            {open && <div className="fixed left-0 top-0 z-10 h-full w-full bg-black opacity-20"> </div>}
        </div>


    )
}