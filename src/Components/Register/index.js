import {TextField, Button} from "@material-ui/core"
import { useForm } from 'react-hook-form';
import {yupResolver } from "@hookform/resolvers/yup"
import { FlexContainer, Form, Title, Login, Block, Cadastre} from "./style";
import { Schema } from "../Yup";
import { createAcount } from '../../Utils/endpoints/user'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register(){
 

    const {register, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(Schema)}) 


    function handleForm(data){
        const formData = {
            "username": data.name,
            "email": data.email,
            "password": data.password,
        }

        createAcount(formData)
        .then(() =>{
            toast.success('Usuário criado com sucesso!')
        })
        .catch(res =>{
            if(res.response.status === 400){
                toast.error('Usuário já existe')
            }
        })
    }

    return(
        <FlexContainer>
            <ToastContainer />
            <Form className="formRegister" onSubmit={handleSubmit(handleForm)}>
                <Title>Registre-se</Title>
                <div className="divTexts">
                    <TextField 
                    id="outlined-required"
                    variant="outlined"
                    size="small"
                    color="primary"
                    margin="normal"
                    label="Usuário"
                    {...register("name")}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                    className="inputField"

                    />
                </div>
            
                <div className="divTexts">
                    <TextField 
                    id="outlined-required"
                    variant="outlined"
                    size="small"
                    color="primary"
                    margin="normal"
                    label="Email"
                    {...register("email")}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                    className="inputField"

                    />
                </div>

                <div className="divTexts">
                    <TextField 
                    id="outlined-required"
                    variant="outlined"
                    size="small"
                    color="primary"
                    margin="normal"
                    label="Senha"
                    type="password"
                    {...register("password")}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                    className="inputField"

                    />
                </div>
                <div className="divTexts">
                    <TextField 
                    id="outlined-required"
                    variant="outlined"
                    size="small"
                    color="primary"
                    margin="normal"
                    label="Confirme senha"
                    type="password"
                    {...register("passwordConfirmation")}
                    error={!!errors.passwordConfirmation}
                    helperText={errors.passwordConfirmation?.message}
                    className="inputField"
                    />
                </div>
                
                <Block>
                    <Button className="btn-primary" type="Submit" variant="contained">Cadastrar</Button>
                </Block>
                <Cadastre className="text-login">Já é cadastrado? <Login>Faça login</Login></Cadastre>
            </Form>
        </FlexContainer>
    )
}