const Git = require("nodegit");
const path = require('path');
const { dingTalkTextMessage } = require('./dingTalk');

var env = process.env.env_config;

var globalRepo;

Git.Repository.open(path.resolve(__dirname, '..'))
  .then(repo => {
    globalRepo = repo;
    return repo.getHeadCommit()
  })
  .then(commit => {
    globalRepo && globalRepo.getCurrentBranch().then(ref => {
      var author = commit.author().name();
      var branch = ref.shorthand();
      console.log(`👨‍💻‍${author} successfully deployed dist-frontend to ${env} at ${commit.date()} \n with branch: ${branch}, commit: ${commit.sha()}`);
      // dingTalkTextMessage(
      //   'https://wxwork.uniqueway.cc/incoming/de4c261a-5483-4f31-eaa1-3aad941ab605',
      //   `👨‍💻‍${author} successfully deployed dist-frontend to ${env} at ${commit.date()} \n with branch: ${branch}, commit: ${commit.sha()}`,
      // );
    });
  }).catch(err => console.log(err));
