const core = require('@actions/core');
const github = require('@actions/github');

const DEFAULT_TICKET_URL = 'https://taskrabbit.atlassian.net/browse/TAPP-XXXX';
const TAPP_TICKET_URL = 'https://taskrabbit.atlassian.net/browse/TAPP-';
const TAPP_RELEASE_URL = 'https://taskrabbit.atlassian.net/projects/TAPP/versions/';
const FAILURE_MESSAGE = 'JIRA ticket link not found'

async function run() {
  try {
    const { body } = github.context.payload.pull_request

    if (body.includes(DEFAULT_TICKET_URL)) {
      core.setFailed(FAILURE_MESSAGE);
      return;
    }

    if (!body.includes(TAPP_TICKET_URL) && !body.includes(TAPP_RELEASE_URL)) {
      core.setFailed(FAILURE_MESSAGE);
      return;
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run()
