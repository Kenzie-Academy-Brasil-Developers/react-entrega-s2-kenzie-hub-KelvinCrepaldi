import { TextField, Button } from "@material-ui/core";
import { ContainerCadastro } from "./styled";
import { useHistory } from "react-router";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";

const Cadastro = ({ autenticated }) => {
  const history = useHistory();

  const yupSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatorio")
      .min(4, "Requer o minimo de 4 caracteres"),
    email: yup
      .string()
      .email("Campo de Email invalido")
      .required("Email obrigatorio"),
    password: yup
      .string()
      .min(6, "Minimo de 6 caracteres")
      .required("Senha obrigatoria")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Necessário ter letras, números e ao menos um símbolo"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Confirmação de senha obrigatoria"),
    contact: yup.string().required("Campo obrigatório"),
    bio: yup.string().required("Campo obrigatório!!"),
    course_module: yup.string().required("Módulo obrigatório"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(yupSchema),
  });

  const handleVoltarPagina = () => {
    history.push("/");
  };

  const submitForm = ({
    name,
    password,
    email,
    bio,
    contact,
    course_module,
  }) => {
    const user = { name, password, email, bio, contact, course_module };

    api
      .post("/users", user)
      .then((response) => {
        toast.success("Sucesso ao criar a conta!");
        return history.push("/login");
      })
      .catch((err) => toast.error("Algo deu errado, verifique os campos."));
  };

  if (autenticated) {
    return history.push("/dashboard");
  }

  return (
    <>
      <ContainerCadastro>
        <h1>Criar uma conta de usuário </h1>
        <form onSubmit={handleSubmit(submitForm)}>
          <TextField
            className="inputField"
            label="nome"
            variant="filled"
            size="medium"
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
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
          <TextField
            type="password"
            className="inputField"
            label="Confirmar senha"
            variant="filled"
            size="medium"
            {...register("confirmPassword")}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
          />
          <TextField
            className="inputField"
            label="Contato"
            variant="filled"
            size="medium"
            {...register("contact")}
            error={!!errors.contact}
            helperText={errors.contact?.message}
          />
          <TextField
            className="inputField"
            label="Biografia"
            variant="filled"
            size="medium"
            {...register("bio")}
            error={!!errors.bio}
            helperText={errors.bio?.message}
          />

          <select className="select" {...register("course_module")}>
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo (Introdução ao Frontend)
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo módulo (Frontend Avançado)
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro módulo (Introdução ao Backend)
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto módulo (Backend Avançado)
            </option>
          </select>

          <Button type="submit" variant="outlined">
            Criar conta
          </Button>
        </form>

        <Button variant="outlined" onClick={handleVoltarPagina}>
          Voltar
        </Button>
      </ContainerCadastro>
    </>
  );
};

export default Cadastro;
