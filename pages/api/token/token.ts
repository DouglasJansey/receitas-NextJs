import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
import repository from "../../../prisma/repository";

type TokenType = {
  email: string;
  password: string;
  endereco: {};
  telefone: {};
};

export const Token = async ({ email, password }: TokenType) => {
  const user = await repository.client.findUnique({
    where: {
      email,
    },
    include: {
      endereco: true,
      telefone: true,
    },
  });
  if (!user) throw new Error("Usuário ou senha inválidos");
  const passwordOk = await compare(password, user.password);
  if (!passwordOk) throw new Error("Senha inválida");
  const secret_jwt: string | any = process.env.JWT_SECRET_KEY;
  const token = jwt.sign(
    {
      user: {
        userEmail: user.email,
        userId: user.id,
        endereco: user.endereco,
        telefone: user.telefone,
      },
    },
    secret_jwt,
  );
  return token;
};
