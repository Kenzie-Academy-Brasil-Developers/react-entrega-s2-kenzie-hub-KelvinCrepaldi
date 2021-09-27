import { TextField, Button } from "@material-ui/core";
import { ContainerCadastro } from "./styled";
import { useHistory, Link, Redirect } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import api from "../../services/api";

const Login = ({ autenticated, setAutenticated }) => {
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
    api
      .post("/sessions", data)
      .then((response) => {
        const { token, user } = response.data;
        localStorage.setItem("@kenziehub:token", JSON.stringify(token));
        localStorage.setItem("@kenziehub:user", JSON.stringify(user));
        setAutenticated(true);
        return history.push("/dashboard");
      })
      .catch((err) => {
        toast.error("Email ou senha não foram encontrados.");
      });
  };

  if (autenticated) {
    return <Redirect to="/dashboard" />;
  }

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
