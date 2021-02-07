/*
 * @Author: your name
 * @Date: 2021-02-07 10:43:37
 * @LastEditTime: 2021-02-07 11:29:32
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue3-api\ecosystem.config.js
 */
module.exports = {
  apps : [{
    name: 'vue3-api',
    script: 'index.js',
    watch: '.'
  }, {
    script: './service-worker/',
    watch: ['./service-worker']
  }],

  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
