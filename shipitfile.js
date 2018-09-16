module.exports = function (shipit) {
  require('shipit-deploy')(shipit);
  shipit.initConfig({
    default: {
      workspace: '/tmp/kom',
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

  shipit.blTask('dependencies', function() {
    return shipit.local('cd '+shipit.config.workspace
      + ' && npm install'
      + ' && jekyll build')
  });

  shipit.on('fetched', function() {
    shipit.start('dependencies');
  });

  shipit.blTask('npm', () => {
    return shipit.remote(`cd ${shipit.releasePath} && source ~/.nvm/nvm.sh use v7 && npm i && pm2 start app.js -f --name='kom'`)
  });

  shipit.start('deploy', ['npm']);
};
