papajohns-cli
=============

Papa Johns International Node CLI used to interactively setup PJI apps, enterprise systems, and more.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/papajohns-cli.svg)](https://npmjs.org/package/papajohns-cli)
[![Downloads/week](https://img.shields.io/npm/dw/papajohns-cli.svg)](https://npmjs.org/package/papajohns-cli)
[![License](https://img.shields.io/npm/l/papajohns-cli.svg)](https://github.com/clyde4papa/papajohns-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @papajohns/papajohns-cli
$ pji COMMAND
running command...
$ pji (-v|--version|version)
@papajohns/papajohns-cli/1.0.0 darwin-x64 node-v10.12.0
$ pji --help [COMMAND]
USAGE
  $ pji COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`pji help [COMMAND]`](#pji-help-command)
* [`pji java [VERSION]`](#pji-java-version)

## `pji help [COMMAND]`

display help for pji

```
USAGE
  $ pji help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.3/src/commands/help.ts)_

## `pji java [VERSION]`

Verify, Install, or Remove Java from a PJI application server

```
USAGE
  $ pji java [VERSION]

ARGUMENTS
  VERSION  (1.8.0_181|1.8.0_111) [default: 1.8.0_181] Version of Java to Install

OPTIONS
  -h, --help             show CLI help
  -i, --install=install  [PJI] Install Oracle Java
  -r, --remove

EXAMPLE
  $ pji java 
       java world from ./src/java.ts!
```

_See code: [src/commands/java.ts](https://github.com/clyde4papa/papajohns-cli/blob/v1.0.0/src/commands/java.ts)_
<!-- commandsstop -->
