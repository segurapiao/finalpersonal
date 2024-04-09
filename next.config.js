const path = require('path');

module.exports = {
  webpack: (config, { isServer }) => {
    // Adicione aqui os aliases necessários
    config.resolve.alias['@HomePage'] = path.join(__dirname, '../../src/app/HomePage'); // Substitua o caminho pelo caminho real do diretório da sua página HomePage

    // Mantenha essa linha para retornar a configuração webpack modificada
    return config;
  },
};


