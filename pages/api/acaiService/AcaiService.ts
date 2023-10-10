import repository from "../../../prisma/repository";

type bodyType = {
  tamanho: string;
  batido: string;
  fruta: string;
  cobertura: string;
  quantidade: number;
  granola?: Boolean;
  pacoca?: Boolean;
  amendoim?: Boolean;
  cereal?: Boolean;
  aveia?: Boolean;
  granulado?: Boolean;
  leiteEmPo?: Boolean;
  chocoBall?: Boolean;
  jujuba?: Boolean;
  confetti?: Boolean;
  chantilly?: Boolean;
  biscoito?: Boolean;
  nutella?: Boolean;
  banana?: Boolean;
  bis?: Boolean;
  manga?: Boolean;
  morango?: Boolean;
  ovomaltine?: Boolean;
  leiteCondensado?: Boolean;
};
export const saveAcai = async (data: bodyType, clientId: number) => {
  const {
    tamanho,
    batido,
    fruta,
    cobertura,
    quantidade,
    granola,
    pacoca,
    amendoim,
    cereal,
    aveia,
    granulado,
    leiteEmPo,
    chocoBall,
    jujuba,
    confetti,
    chantilly,
    biscoito,
    nutella,
    ovomaltine,
    bis,
    banana,
    morango,
    manga,
    leiteCondensado,
  } = data;
  const newAcai = await repository.acai.create({
    data: {
      tamanho,
      batido,
      fruta,
      cobertura,
      quantity: quantidade,
      clientId,
      complemento: {
        create: [
          {
            granola: !!granola,
            pacoca: !!pacoca,
            amendoim: !!amendoim,
            cereal: !!cereal,
            aveia: !!aveia,
            granulado: !!granulado,
            leiteEmPo: !!leiteEmPo,
            chocoBall: !!chocoBall,
            jujuba: !!jujuba,
            confetti: !!confetti,
            chantilly: !!chantilly,
            biscoito: !!biscoito,
          },
        ],
      },
      adicional: {
        create: [
          {
            nutella: !!nutella,
            ovomaltine: !!ovomaltine,
            bis: !!bis,
            banana: !!banana,
            morango: !!morango,
            manga: !!manga,
            leiteCondensado: !!leiteCondensado,
          },
        ],
      },
    },
    include:{
      complemento: true,
      adicional: true,
    }
  });
  return newAcai;
};
