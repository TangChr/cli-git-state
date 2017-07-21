#!/usr/bin/env node
const gitState = require('git-state')
const chalk = require('chalk')

const path = '.'

gitState.isGit(path, function (exists) {
  if (!exists) return
  gitState.check(path, function (err, result) {
    if (err) throw err
    if (result.branch != null) {
      console.log(chalk.green('Branch: ' + result.branch))
    }
    if (result.ahead != null && result.ahead > 0) {
      console.log('Commits ahead: ' + result.ahead)
    }
    if (result.dirty != null && result.dirty > 0) {
      console.log(chalk.red('Modified files: ' + result.dirty))
    }
    if (result.untracked != null && result.untracked > 0) {
      console.log(chalk.yellow('Untracked files: ' + result.untracked))
    }
  })
})
