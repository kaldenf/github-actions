const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    const pull_request = core.getInput('pull_request');
    const pull_request2 = core.getInput('pull_request2');
    const pull_request3 = core.getInput('pull_request3');

    console.log({ pull_request });
    console.log({ pull_request2 });
    console.log({ pull_request3 });

    core.setOutput("complete", true);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run()
