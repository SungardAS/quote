/* Add your custom configuration/overides to custom.config.js */
const customConfig = require('./custom.config')()

module.exports = () => {
  const defaults = {
    /** Set your API endpoints returned from the backend deployment here */
    api: {
      open: 'https://9985hyiut1.execute-api.us-west-2.amazonaws.com/prod/open',
      completed: 'https://9985hyiut1.execute-api.us-west-2.amazonaws.com/prod/closed',
      dev: 'https://8wqfcg0au6.execute-api.us-east-1.amazonaws.com/dev'
    },
    sortBy: 'updated_at',
    /** Set column sort order. 'asc' or 'desc' */
    sortOrder: 'desc',
    /** Add your bucket name here to deploy the script */
    bucketName: 'assets.site.serverless.com',
    /** set to true to debug sorting */
    debug: false,
  }
  return require('deepmerge')(defaults, customConfig)
}
