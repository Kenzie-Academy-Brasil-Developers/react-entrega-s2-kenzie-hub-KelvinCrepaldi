import { TextField, Button } from "@material-ui/core";
import { ContainerCadastro } from "./styled";
import { useHistory, Link } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

const Login = () => {
  const history = useHistory();

  const yupSchema = yup.object().shape({
    email: yup
      .string()
      .email("Campo de Email invalido")
      .required("Email obrigatorio"),
    password: yup.string().required("Senha obrigatoria"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(yupSchema),
  });

  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <>
      <ContainerCadastro>
        <h1>Login de usuário </h1>
        <form onSubmit={handleSubmit(submitForm)}>
          <TextField
            type="email"
            className="inputField"
            label="E-mail"
            variant="filled"
            size="medium"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            type="password"
            className="inputField"
            label="Senha"
            variant="filled"
            size="medium"
            {...register("password")}
            error={!!errors.password}
            helperText={errors.password?.message}
          />

          <Button type="submit" variant="outlined">
            Entrar
          </Button>
        </form>

        <p>
          Não possui uma conta? <Link to="/cadastro/">cadastre-se</Link>.
        </p>
      </ContainerCadastro>
    </>
  );
};

export default Login;
