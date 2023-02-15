const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    const pull_request = core.getInput('pull_request');

    console.log({ pull_request });

    core.setOutput("complete", true);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run()
