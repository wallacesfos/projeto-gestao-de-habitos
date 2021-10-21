import { TextField } from "@material-ui/core"
import { Container, Title, InputsBoxs} from "./style"
import { useState } from 'react'

export default function ActivitForm({handleSubmit}){

    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')

    const data = {
        "title": title,
        "realization_time": `${date}T15:00:00Z`
    }

    return(
        <Container>
            <Title>Nova atividade</Title>
            <InputsBoxs>

                <TextField 
                label="Título" 
                margin="normal" 
                className="margin-left-input margin-right-input" 
                value={title} 
                onChange={e => setTitle(e.target.value)}
                />
                
                <TextField 
                margin="normal" 
                className="margin-left-input margin-right-input" 
                value={date} 
                type="date" 
                onChange={e => setDate(e.target.value)} 
                />

            </InputsBoxs>
            <button className="btn-primary mini">Cadastrar</button>
        </Container>
    )
}