# prompt-playground

Get started quickly with an LLM project in TypeScript. With testing and CI/CD.

Example code generates a Haiku poem and then tests Haiku's validity with a different LLM model.

## Features

- use any LLM model that is supported by the Vercel AI SDK, such as from Anthropic.
- automated testing with `vitest` (using a less expensive model)
- GitHub action that runs tests on every push

## Get started

Create a `.env` file with the following:

```
ANTHROPIC_API_KEY=
```

`ANTHROPIC_API_KEY` is the API key for the Anthropic API.

Run:

```bash
yarn
yarn dev
```

Also add `ANTHROPIC_API_KEY` to GitHub repository secrets so the GitHub actions can run.

## Run tests

Run all tests:

```bash
yarn test
```

Run only the slow and expensive LLM tests:

```bash
yarn test-llm
```

Run only the fast unit tests (no LLM):

```bash
yarn test-unit
```
