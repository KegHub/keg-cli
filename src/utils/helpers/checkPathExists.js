const { fileSys } = require('@keg-hub/cli-utils')
const { generalError } = require('../error/generalError')

const { pathExists } = fileSys

/**
 * Checks that a path exists locally
 * @param {string} toCheck - Path to check if it exists
 *
 * @returns {boolean} - If the path exists
 */
const checkPathExists = async toCheck => {
  // Check if the exists locally
  const [ error, exists ] = await pathExists(toCheck)

  return error ? generalError(error.message) : exists
}

module.exports = {
  checkPathExists
}