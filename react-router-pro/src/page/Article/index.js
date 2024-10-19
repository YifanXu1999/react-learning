import {useParams, useSearchParams} from "react-router-dom";

const Article = () => {
    const [params] = useSearchParams()
    let id = params.get('id')
    let name = params.get('name')

    const useParams1 = useParams()
    let id1 = useParams1.id
    let name1 = useParams1.name
    return <div>
        <h1>Article</h1>
        <h2>id: {id}, name: {name}</h2>
        <h2>id1: {id1}, name1: {name1}</h2>
    </div>

}

export default Article;