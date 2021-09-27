import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "./styled";
import api from "../../services/api";
import { toast } from "react-toastify";
import Card from "../../components/Card";

const DashBoard = ({ autenticated, setAutenticated }) => {
  const history = useHistory();

  const [techs, setTechs] = useState([]);

  const [token, setToken] = useState(() => {
    const token = localStorage.getItem("@kenziehub:token") || "[]";
    return JSON.parse(token);
  });
  const [user, setUser] = useState(() => {
    const user = localStorage.getItem("@kenziehub:user") || "[]";
    return JSON.parse(user);
  });

  useEffect(() => {
    getUserTechs();
  }, [techs]);

  const getUserTechs = () => {
    api
      .get(`/users/${user.id}`)
      .then((response) => {
        setTechs(response.data.techs);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (!autenticated) {
    history.push("/");
  }

  const yupSchema = yup.object().shape({
    title: yup.string().required("titulo necessário"),
    status: yup.string().required("status necessário"),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(yupSchema),
  });

  const submitForm = (data) => {
    getUserTechs();
    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Baerer ${token}`,
        },
      })
      .catch((err) => toast.error("Já existe essa Tecnologia"));
  };

  const handleLogOut = () => {
    localStorage.clear();
    setAutenticated(false);
  };

  const handleRemoveTech = (id) => {
    api.delete(`users/techs/${id}`, {
      headers: {
        Authorization: `Baerer ${token}`,
      },
    });
  };

  return (
    <Container>
      <div className="top">
        <h1>Bem vindo, {user.name}!</h1>
        <Button onClick={handleLogOut} variant="outlined">
          Deslogar
        </Button>
      </div>

      <div className="inputContainer">
        <h4>Cadastrar tecnologia:</h4>
        <form onSubmit={handleSubmit(submitForm)}>
          <TextField
            type="text"
            className="inputField"
            label="Titulo"
            variant="filled"
            size="small"
            {...register("title")}
            error={!!errors.title}
            helperText={errors.title?.message}
          />
          {/* <TextField
            type="text"
            className="inputField"
            label="Status"
            variant="filled"
            size="small"
            {...register("status")}
            error={!!errors.status}
            helperText={errors.status?.message}
          /> */}
          <select className="select" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <Button
            type="submit"
            className="sendButton"
            size="small"
            variant="outlined"
          >
            Cadastrar
          </Button>
        </form>
      </div>

      <div>
        {techs &&
          techs.map((tech) => (
            <Card
              tech={tech}
              handleRemoveTech={handleRemoveTech}
              key={tech.id}
            />
          ))}
      </div>
    </Container>
  );
};

export default DashBoard;
