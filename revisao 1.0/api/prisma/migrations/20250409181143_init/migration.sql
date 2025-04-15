-- CreateTable
CREATE TABLE `Cliente` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255) NOT NULL,
    `numero` VARCHAR(255) NOT NULL,
    `bairro` VARCHAR(255) NOT NULL,
    `referencia` VARCHAR(255) NOT NULL,
    `logradouro` VARCHAR(255) NOT NULL,
    `telefone` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pedido` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `valor` DECIMAL(10, 2) NOT NULL,
    `data` DATE NOT NULL,
    `cliente_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Contem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `quantidade` INTEGER NOT NULL,
    `valor` INTEGER NOT NULL,
    `subtotal` INTEGER NOT NULL,
    `pizza_id` INTEGER NOT NULL,
    `pedido_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pizza` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(50) NOT NULL,
    `descricao` VARCHAR(100) NOT NULL,
    `valor` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Pedido` ADD CONSTRAINT `Pedido_cliente_id_fkey` FOREIGN KEY (`cliente_id`) REFERENCES `Cliente`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Contem` ADD CONSTRAINT `Contem_pizza_id_fkey` FOREIGN KEY (`pizza_id`) REFERENCES `Pizza`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Contem` ADD CONSTRAINT `Contem_pedido_id_fkey` FOREIGN KEY (`pedido_id`) REFERENCES `Pedido`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
