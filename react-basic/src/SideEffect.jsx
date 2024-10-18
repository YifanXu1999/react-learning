import {useEffect, useState} from "react";

const URL = 'https://geek.itheima.net/v1_0/channels'
export const SideEffect = () => {

    const [list, setList] = useState([])
    const getList = useEffect(() => {
         const getList = async () => {
             const res = await fetch(URL)
             const jsonRes = await res.json()
             setList(jsonRes.data.channels)
         }
         getList()
        }
    )

    const clearSideEffect = useEffect(() => {
        const timer = setInterval(()=> {
            console.log('not clear side effect')
        }, 1000)
        return () => {
            console.log('clear side effect')
            clearInterval(timer)
        }
    }, []);

    return (
        <div>
            <ul>
                {list.map((item) =>
                    (<li key={item.id}>{item.name}</li>)
                    )
                }
            </ul>
        </div>
    )
}