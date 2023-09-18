const Banner = [{
        imageLeft:"/images/morangoBG.jpg",
        imageRight:"/images/redBG.jpg",
        middleImg:"https://acaimontecastelo.com.br/wp-content/uploads/2021/05/ACAI-NO-COPO.png",
        titulo:"Misturas no Açaí",
        descricao:`Se você gosta do seu Açaí batido com morango,
        nós temos o que você procura.`
    },{
        imageLeft:"https://thumbs.dreamstime.com/b/pilha-das-bananas-1271344.jpg",
        imageRight:"data:image/jpeg;base64,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",
        middleImg:"https://acaimontecastelo.com.br/wp-content/uploads/2021/05/ACAI-NO-COPO.png",
        titulo:"Misturas no Açaí",
        descricao:`Se você gosta do seu Açaí batido com Banana,
        nós temos o que você procura.`
    },{
        imageLeft:"https://img.freepik.com/fotos-premium/imagens-de-fundo-abstrato-papel-de-parede-gerado-por-ai_643360-38556.jpg",
        imageRight:"https://img.freepik.com/fotos-premium/fundo-amarelo-pastel-com-textura-de-aquarela_199112-2066.jpg?w=2000",
        middleImg:"images/umlitro.png",
        titulo:"Do tamanho da sua vontade",
        descricao:`Se você gosta de quantidade,
        temos o pote de 1 litro para você e com quem
        mais quiser dividir!`
    },]
export default Banner;