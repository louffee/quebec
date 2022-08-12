import __debug from 'debug'

import isBrowser from '../browser-compatibility/isBrowser/isBrowser'

const logChannel = __debug('log')
const errorChannel = __debug('error')
const warnChannel = __debug('warn')
const infoChannel = __debug('info')
const verboseChannel = __debug('verbose')
const debugChannel = __debug('debug')
const traceChannel = __debug('trace')

function log(...args: any[]): void {
  if (isBrowser()) {
    console.log(args)
  } else {
    logChannel(args)
  }
}

function error(...args: any[]): void {
  if (isBrowser()) {
    console.error(args)
  } else {
    errorChannel(args)
  }
}

function warn(...args: any[]): void {
  if (isBrowser()) {
    console.warn(args)
  } else {
    warnChannel(args)
  }
}

function info(...args: any[]): void {
  if (isBrowser()) {
    console.info(args)
  } else {
    infoChannel(args)
  }
}

function verbose(...args: any[]): void {
  if (isBrowser()) {
    console.log(args)
  } else {
    verboseChannel(args)
  }
}

function debug(...args: any[]): void {
  if (isBrowser()) {
    console.debug(args)
  } else {
    debugChannel(args)
  }
}

function trace(...args: any[]): void {
  if (isBrowser()) {
    console.trace(args)
  } else {
    traceChannel(args)
  }
}

const logger = {
  log,
  error,
  warn,
  info,
  verbose,
  debug,
  trace,
}

export default logger
