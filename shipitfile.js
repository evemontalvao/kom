module.exports = function (shipit) {
  require('shipit-deploy')(shipit);
  shipit.initConfig({
    default: {
      workspace: '/tmp/kombucha',
      repositoryUrl: 'https://github.com/evemontalvao/kom',
      ignores: ['.git', 'node_modules'],
      keepReleases: 2,
      servers: 'ubuntu@18.231.176.70',
      dirToCopy: './_site'
    },
    production: {
      deployTo: '/home/ubuntu/kombuchakom/production',
      branch: 'master',
      port: '9900'
    }
  });

  shipit.blTask('copy', () => {
    return shipit.local(`cd ${shipit.config.workspace} && jekyll build`)
  });

  shipit.blTask('npm', () => {
    return shipit.remote(`
      cd ${shipit.releasePath} && source ~/.nvm/nvm.sh use v8 && npm i && pm2 delete ${shipit.config.branch} || true && pm2 start app.js -f --name='${shipit.config.branch}'`)
  });

  shipit.on('fetched', () => {
    shipit.start('copy')
  })

  shipit.start('deploy', ['npm']);
};
