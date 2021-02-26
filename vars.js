/**
 * Defines defaults that can be
 * manipulated via enviroment variables
 * and are re-used across configuration files
 * to ensure consistency.
 */

/**
 * Indentation.
 *
 * @const
 */
const INDENTATION = Number(process.env.ESLINT_INDENTATION) || 2;

/**
 * Maximum empty lines.
 *
 * @const
 */
const MAX_EMPTY_LINES = Number(process.env.ESLINT_MAX_EMPTY_LINES) || 2;


module.exports = {
  INDENTATION,
  MAX_EMPTY_LINES,
};
