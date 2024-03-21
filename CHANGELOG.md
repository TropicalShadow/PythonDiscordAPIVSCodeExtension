# Changelog

All notable changes to the "Python Discord API VSCode Extension" will be documented in this file.

Website coming Soon

## [Unreleased]

- [x] Initial release
- [ ] Snippets
  - [x] Main
    - [x] Commands
      - [x] Ping-Pong Template
      - [x] Command aliases
    - [x] Events
  - [x] Cogs
    - [x] Commands
      - [x] Ping-Pong Template
      - [x] Command aliases
    - [x] Events

## [1.0.0] 2020-08-08

- Snippets added
  - Cog Template
  - Cog Command and command aliases

### Removed

- Hello World Default Command

## [1.1.0] 2020-8-11

- Snippets added
  - Main Bot
  - Main Bot command and command aliases
- Create Bot Command ```ctrl+shift+p``` -> Create Bot

## [1.1.1] 2020-8-11

- Changed Generated code for Cog as template code doesn't work
- snippet main code.
  - `token=token` -> `TOKEN`
  - `if cog.endswith(".py"):`

### [1.1.2] 2021-10-15

- Changed main bot snippet
- Discord Cog Listeners
- Renamed `bot-cog` to `cog` for easier reading
- Fixed really long wait time for bot command to complete

### [1.2.0] 2024-3-21

- Updated snippets to work with Pycord latest
- Snippet code refactor
- Remove obsolite tests
