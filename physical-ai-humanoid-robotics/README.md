# Book on AI-Native Software Development Constitution

This book is guided by core principles of Spec-Driven Content Creation, Technical Accuracy, Clarity, Consistency, Reproducibility, and rigorous review of AI-generated content. All chapters follow Spec-Kit Plus requirements, and all technical information is verified and cited. The book is targeted at developers and technical students, with a focus on clear, accessible writing and reproducible code examples.

# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.