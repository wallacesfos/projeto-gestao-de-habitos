import {TextField, Button} from "@material-ui/core"
import { useForm } from 'react-hook-form';
import {yupResolver } from "@hookform/resolvers/yup"
import axios from 'axios';
import { FlexContainer, Image, Form, Title, Login, Block} from "./style";
import RegisterImage from '../../Utils/image/Register/mobile-login-not-css.svg'
import { Schema } from "../Yup";

export default function Register(){


    const {register, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(Schema)}) 


    function handleForm(data){
        const formData = {
            "email": data.email,
            "password": data.password,
            "name": data.name,
            "bio": "Sem Bio no momento",
            "contact": data.email,
            "course_module": "Q2"
        }

        axios.post("https://kenziehub.herokuapp.com/users", formData).then(response => {
            alert('Sucesso')
        }).catch(e => {
            alert('Ouve algum erro, tente novamente mais tarde')
        })
    }

    return(
        <FlexContainer>
            <div className="imagem-div">
                <Image src={RegisterImage} alt="Imagem" />
            </div>

            <Form className="formRegister" onSubmit={handleSubmit(handleForm)}>
                <Title>Cadastro</Title>
                <div className="divTexts">
                    <TextField 
                    id="outlined-required"
                    variant="outlined"
                    size="small"
                    color="primary"
                    margin="normal"
                    label="Nome"
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
                <p className="text-login">Já é cadastrado? <Login>Faça login</Login></p>
            </Form>
        </FlexContainer>
    )

}