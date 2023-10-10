import { hash } from "bcryptjs";
import repository from "../../../prisma/repository";
type BodyType = {
  name: string;
  email: string;
  password: string;
  rua: string;
  bairro: string;
  numeroRua: number;
  active: boolean;
  complemento?: string;
  referencia: string;
  ddd: number;
  numeroTel: number;
};

export const saveUser = async (user: BodyType) => {
  const {
    name,
    email,
    password,
    rua,
    bairro,
    numeroRua,
    complemento,
    referencia,
    ddd,
    numeroTel,
  } = user;
  const salt = 8
  const hashPassord = await hash(password, salt);
  const checkUser = await repository.client.findUnique({
    where:{
      email,
    }
  });
  if(checkUser) throw new Error("Email já cadastrado!")
 const newUser = await repository.client.create({
    data: {
      name,
      email,
      password: hashPassord,
      endereco: {
        create: [
          {
            rua,
            bairro,
            numero: numeroRua,
            active: false,
            complemento,
            referencia,
          },
        ],
      },
      telefone: {
        create: [
          {
            ddd,
            numero: numeroTel,
            active: false,
          },
        ],
      },
    },
    include:{
      endereco: true,
      telefone: true,
      acai: true,
    }
  });
  return newUser;
};
/*
export const updateUser = async (id: number, dataType: BodyType) => {
  const {
    name,
    rua,
    bairro,
    numeroRua,
    referencia,
    complemento,
    numeroTel,
  }: BodyType = dataType;

  return '';
};
*/