// Copyright 2025 Google LLC

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//      http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    const token = core.getInput('github-token', { required: true });
    const requiredKeyword = core.getInput('required-keyword', { required: true });    
    const octokit = github.getOctokit(token);
    const prBody = github.context.payload.pull_request.body;

    const startMarker = '<summary>googleapis/genai-toolbox';
    const endMarker = '</details>';
    const startIndex = prBody.indexOf(startMarker);
    const endIndex = prBody.indexOf(endMarker, startIndex);

    if (startIndex === -1 || endIndex === -1) {
      console.log('Could not find the release notes section in the PR body. Exiting.');
      return;
    }
    const releaseNotesSection = prBody.substring(startIndex, endIndex);

    const lines = releaseNotesSection.split('\n');
    const newChangelog = [];
    let currentType = 'feat';

    const prefixesToFilter = ['source/', 'sources/', 'tool/', 'tools/'];

    for (const line of lines) {
        const trimmedLine = line.trim();
        if (trimmedLine.startsWith('##### ⚠ BREAKING CHANGES')) { currentType = 'feat!'; continue; }
        if (trimmedLine.startsWith('##### Features')) { currentType = 'feat'; continue; }
        if (trimmedLine.startsWith('##### Bug Fixes')) { currentType = 'fix'; continue; }
        if (trimmedLine.startsWith('##### Chores') || trimmedLine.startsWith('##### Miscellaneous Chores')) { currentType = 'ignore'; continue; }
        if (trimmedLine.startsWith('##### Documentation')) { currentType = 'ignore'; continue; }
        if (currentType === 'ignore') { continue; }
        if (trimmedLine.startsWith('- ') || trimmedLine.startsWith('* ')) {
            const originalContent = trimmedLine.substring(2);
            const lineAsLowerCase = originalContent.toLowerCase();
            const hasPrefix = prefixesToFilter.some(prefix => lineAsLowerCase.includes(prefix));
            const hasKeyword = lineAsLowerCase.includes(requiredKeyword);
            if (!hasPrefix || hasKeyword) {
                newChangelog.push(`- ${currentType}: ${originalContent}`);
            } else {
                console.log(`Filtering out: ${originalContent}`);
            }
        }
    }
    if (newChangelog.length === 0) {
      console.log('Found no changelog items to add after filtering. Exiting.');
      return;
    }
    const newOverrideBlock = ['\n\nBEGIN_COMMIT_OVERRIDE', ...newChangelog, 'END_COMMIT_OVERRIDE'].join('\n');
    let baseBody = prBody;
    const overrideStartIndex = prBody.indexOf('BEGIN_COMMIT_OVERRIDE');
    if (overrideStartIndex !== -1) {
      console.log('Found an existing override block. It will be replaced.');
      baseBody = prBody.substring(0, overrideStartIndex).trim();
    }
    const finalBody = baseBody + newOverrideBlock;
    if (finalBody === prBody) {
      console.log('The generated changelog is identical to the existing one. No update needed.');
      return;
    }
    await octokit.rest.pulls.update({
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
      pull_number: github.context.issue.number,
      body: finalBody,
    });
    console.log('Successfully updated the PR body with the new release notes.');

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
