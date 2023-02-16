const core = require('@actions/core');
const github = require('@actions/github');

const TAPP_RELEASE_URL = 'https://taskrabbit.atlassian.net/projects/TAPP/versions/';
const FAILURE_MESSAGE = 'JIRA ticket link not found'

async function run() {
  try {
    const { body } = github.context.payload.pull_request

    if (!body.match(/((TAPP)+-\d+)/g) && !body.includes(TAPP_RELEASE_URL)) {
      core.setFailed(FAILURE_MESSAGE);
      return;
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run()
