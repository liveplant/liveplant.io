import _ from 'lodash';
import defaultConfig from './defaults';
import development from './development.config';
import production from './production.config';

var env = (process.env.NODE_ENV || 'development').toLowerCase();

var configurations = _.transform({
  development: development,
  production: production
}, function(result, obj, key) {
  result[key] = _.defaultsDeep(obj, defaultConfig);
});

var environment = configurations[env];

if (_.isObject(environment) === false) {
  throw new Error(
    `The environment config file for ${env} was not found`
  );
}

export default environment;
