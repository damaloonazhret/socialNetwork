import { Octokit } from '@octokit/rest';
import { getCompletion } from './openai.js';
import { styleWrap } from './style.js';

const token = process.env.GITHUB_TOKEN;
const apiKey = process.env.OPENAI_API_KEY;
const octokit = new Octokit({ auth: token });

const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/');
const prNumber = process.env.GITHUB_REF.match(/pull\/(\d+)\//)[1];

async function run() {
  const files = await octokit.pulls.listFiles({
    owner,
    repo,
    pull_number: prNumber,
  });

  let content = '';
  for (const file of files.data) {
    if (file.patch) {
      content += `File: ${file.filename}\n${file.patch}\n\n`;
    }
  }

  if (!content.trim()) {
    console.log('No code changes to review.');
    return;
  }

  const prompt = `Ты — дерзкий код-ревьюер. Пиши строго, по делу, с юмором. Анализируй вот этот код:\n\n${content}`;
  const review = await getCompletion(apiKey, prompt);

  await octokit.issues.createComment({
    owner,
    repo,
    issue_number: prNumber,
    body: styleWrap(review),
  });

  console.log('Review posted!');
}

run().catch((err) => {
  console.error('Error in action:', err);
  process.exit(1);
});
