-- CreateTable
CREATE TABLE `Client` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(50) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `password` VARCHAR(30) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateddAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Client_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Endereco` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rua` VARCHAR(150) NOT NULL,
    `bairro` VARCHAR(50) NOT NULL,
    `numero` INTEGER NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT false,
    `complemento` VARCHAR(50) NULL,
    `referencia` VARCHAR(50) NOT NULL,
    `clientId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateddAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Telefone` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ddd` INTEGER NOT NULL,
    `numero` INTEGER NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT false,
    `clientId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateddAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Acai` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tamanho` VARCHAR(50) NOT NULL,
    `batido` VARCHAR(50) NOT NULL,
    `fruta` VARCHAR(50) NULL,
    `cobertura` VARCHAR(50) NULL,
    `sacolaId` INTEGER NULL,
    `quantity` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateddAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Complemento` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `acaiId` INTEGER NOT NULL,
    `granola` BOOLEAN NULL DEFAULT false,
    `pacoca` BOOLEAN NULL DEFAULT false,
    `amendoim` BOOLEAN NULL DEFAULT false,
    `cereal` BOOLEAN NULL DEFAULT false,
    `aveia` BOOLEAN NULL DEFAULT false,
    `granulado` BOOLEAN NULL DEFAULT false,
    `leiteEmPo` BOOLEAN NULL DEFAULT false,
    `chocoBall` BOOLEAN NULL DEFAULT false,
    `jujuba` BOOLEAN NULL DEFAULT false,
    `confetti` BOOLEAN NULL DEFAULT false,
    `chantilly` BOOLEAN NULL DEFAULT false,
    `biscoito` BOOLEAN NULL DEFAULT false,

    UNIQUE INDEX `Complemento_acaiId_key`(`acaiId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Adicional` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `acaiId` INTEGER NOT NULL,
    `nutella` BOOLEAN NULL DEFAULT false,
    `ovomaltine` BOOLEAN NULL DEFAULT false,
    `bis` BOOLEAN NULL DEFAULT false,
    `banana` BOOLEAN NULL DEFAULT false,
    `morango` BOOLEAN NULL DEFAULT false,
    `manga` BOOLEAN NULL DEFAULT false,
    `leiteCondensado` BOOLEAN NULL DEFAULT false,

    UNIQUE INDEX `Adicional_acaiId_key`(`acaiId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pagamento` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `dinheiro` BOOLEAN NULL DEFAULT false,
    `cartao` BOOLEAN NULL DEFAULT false,
    `troco` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pedido` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `clientId` INTEGER NOT NULL,
    `pagamentoId` INTEGER NOT NULL,
    `sacolaId` INTEGER NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `dataPedido` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateddAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Pedido_clientId_key`(`clientId`),
    UNIQUE INDEX `Pedido_pagamentoId_key`(`pagamentoId`),
    UNIQUE INDEX `Pedido_sacolaId_key`(`sacolaId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sacola` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `clientId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updateddAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Endereco` ADD CONSTRAINT `Endereco_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `Client`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Telefone` ADD CONSTRAINT `Telefone_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `Client`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Acai` ADD CONSTRAINT `Acai_sacolaId_fkey` FOREIGN KEY (`sacolaId`) REFERENCES `Sacola`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Complemento` ADD CONSTRAINT `Complemento_acaiId_fkey` FOREIGN KEY (`acaiId`) REFERENCES `Acai`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Adicional` ADD CONSTRAINT `Adicional_acaiId_fkey` FOREIGN KEY (`acaiId`) REFERENCES `Acai`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pedido` ADD CONSTRAINT `Pedido_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `Client`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pedido` ADD CONSTRAINT `Pedido_pagamentoId_fkey` FOREIGN KEY (`pagamentoId`) REFERENCES `Pagamento`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pedido` ADD CONSTRAINT `Pedido_sacolaId_fkey` FOREIGN KEY (`sacolaId`) REFERENCES `Sacola`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sacola` ADD CONSTRAINT `Sacola_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `Client`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
