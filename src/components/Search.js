import React, {useState} from 'react'
import { InputText } from 'primereact/inputtext'

const Search = () => {
    const [value, setValue] = useState('')

  return (
    <div>
        <InputText value={value} onChange={(e) => setValue(e.target.value)} />
    </div>

  )
}

export default Search