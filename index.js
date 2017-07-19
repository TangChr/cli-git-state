var gitState = require('git-state');

var path = '.'
 
gitState.isGit(path, function (exists) {
  if (!exists) return
 
  gitState.check(path, function (err, result) {
    if (err) throw err
    console.log(result) // => { branch: 'master', 
                        //      ahead: 0, 
                        //      dirty: 9, 
                        //      untracked: 1, 
                        //      stashes: 0 } 
  })
})