import {TextField} from '@material-ui/core'


export default function Input(props){
    const { label } = props

    return(
        <TextField variant="outlined" label={label} />
    )
}