import CRUDInterface from '../components/crudInterface'
import JSONTable from '../components/jsonTable'
import CompareJSONS from '../components/compareJSONS'

export default function Home () { return (
    <div>
        <CRUDInterface/>
        <JSONTable/>
        <CompareJSONS/>
    </div>
)
}