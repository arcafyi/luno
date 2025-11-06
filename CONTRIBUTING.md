# Contributing to Luno

First off, thanks for taking the time to contribute!

All types of contributions are encouraged and valued. See the [Table of Contents](#table-of-contents) for different ways to help and details about how this project handles them. Please make sure to read the relevant section before making your contribution. It will make it a lot easier for us maintainers and smooth out the experience for all involved. The community looks forward to your contributions.

> And if you like the project, but just don't have time to contribute, that's fine. There are other easy ways to support the project and show your appreciation, which we would also be very happy about:
>
> - Star the project
> - Tweet about it
> - Refer this project in your project's readme
> - Mention the project at local meetups and tell your friends/colleagues

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [I Have a Question](#i-have-a-question)
- [I Want To Contribute](#i-want-to-contribute)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Enhancements](#suggesting-enhancements)
- [Your First Code Contribution](#your-first-code-contribution)
- [Improving The Documentation](#improving-the-documentation)
- [Styleguides](#styleguides)
- [Commit Messages](#commit-messages)
- [Join The Project Team](#join-the-project-team)

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct.
By participating, you are expected to uphold this code. Please report unacceptable behavior
to the project maintainers.

## I Have a Question

> If you want to ask a question, we assume that you have read the available [Documentation](README.md).

Before you ask a question, it is best to search for existing [Issues](/issues) that might help you. In case you have found a suitable issue and still need clarification, you can write your question in this issue. It is also advisable to search the internet for answers first.

If you then still feel the need to ask a question and need clarification, we recommend the following:

- Open an [Issue](/issues/new).
- Provide as much context as you can about what you're running into.
- Provide project and platform versions (Bun version, etc), depending on what seems relevant.

We will then take care of the issue as soon as possible.

## I Want To Contribute

> ### Legal Notice
>
> When contributing to this project, you must agree that you have authored 100% of the content (Use of AI is allowed, but you must detail the usage of AI in the contribution), and make sure that the content you contribute may be provided under the project license.

### Reporting Bugs

#### Before Submitting a Bug Report

A good bug report shouldn't leave others needing to chase you up for more information. Therefore, we ask you to investigate carefully, collect information and describe the issue in detail in your report. Please complete the following steps in advance to help us fix any potential bug as fast as possible.

- Make sure that you are using the latest version.
- Determine if your bug is really a bug and not an error on your side e.g. using incompatible environment components/versions (Make sure that you have read the [documentation](README.md). If you are looking for support, you might want to check [this section](#i-have-a-question)).
- To see if other users have experienced (and potentially already solved) the same issue you are having, check if there is not already a bug report existing for your bug or error in the [bug tracker](issues?q=label%3Abug).
- Also make sure to search the internet (including Stack Overflow) to see if users outside of the GitHub community have discussed the issue.
- Collect information about the bug:
  - Stack trace (Traceback)
  - OS, Platform and Version (Windows, Linux, macOS, x86, ARM)
  - Version of Bun and other relevant dependencies
  - Browser version (if applicable)
  - Possibly your input and the output
  - Can you reliably reproduce the issue? And can you also reproduce it with older versions?

#### How Do I Submit a Good Bug Report?

> You must never report security related issues, vulnerabilities or bugs including sensitive information to the issue tracker, or elsewhere in public. Instead sensitive bugs must be sent by email to the project maintainers.

We use GitHub issues to track bugs and errors. If you run into an issue with the project:

- Open an [Issue](/issues/new). (Since we can't be sure at this point whether it is a bug or not, we ask you not to talk about a bug yet and not to label the issue.)
- Explain the behavior you would expect and the actual behavior.
- Please provide as much context as possible and describe the _reproduction steps_ that someone else can follow to recreate the issue on their own. This usually includes your code. For good bug reports you should isolate the problem and create a reduced test case.
- Provide the information you collected in the previous section.

Once it's filed:

- The project team will label the issue accordingly.
- A team member will try to reproduce the issue with your provided steps. If there are no reproduction steps or no obvious way to reproduce the issue, the team will ask you for those steps and mark the issue as `needs-repro`. Bugs with the `needs-repro` tag will not be addressed until they are reproduced.
- If the team is able to reproduce the issue, it will be marked `needs-fix`, as well as possibly other tags (such as `critical`), and the issue will be left to be [implemented by someone](#your-first-code-contribution).

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for Luno, **including completely new features and minor improvements to existing functionality**. Following these guidelines will help maintainers and the community to understand your suggestion and find related suggestions.

#### Before Submitting an Enhancement

- Make sure that you are using the latest version.
- Read the [documentation](README.md) carefully and find out if the functionality is already covered, maybe by an individual configuration.
- Perform a [search](/issues) to see if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one.
- Find out whether your idea fits with the scope and aims of the project. It's up to you to make a strong case to convince the project's developers of the merits of this feature. Keep in mind that we want features that will be useful to the majority of our users and not just a small subset. If you're just targeting a minority of users, consider writing an add-on/plugin library.

#### How Do I Submit a Good Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](/issues).

- Use a **clear and descriptive title** for the issue to identify the suggestion.
- Provide a **step-by-step description of the suggested enhancement** in as many details as possible.
- **Describe the current behavior** and **explain which behavior you expected to see instead** and why. At this point you can also tell which alternatives do not work for you.
- You may want to **include screenshots and animated GIFs** which help you demonstrate the steps or point out the part which the suggestion is related to. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.
- **Explain why this enhancement would be useful** to most Luno users. You may also want to point out the other projects that solved it better and which could serve as inspiration.

### Your First Code Contribution

#### Prerequisites

Before you begin, make sure you have the following installed:

- **Git** - For version control ([Download](https://git-scm.com/downloads))
- **Bun** - For running the project ([Installation guide](https://bun.sh/docs/installation))
- **Docker** - For running the database locally

  - **Windows/Mac**: Install [Docker Desktop](https://www.docker.com/products/docker-desktop/)
  - **Linux**: Install Docker Engine and Docker Compose:

    ```bash
    # Ubuntu/Debian
    sudo apt-get update
    sudo apt-get install docker.io docker-compose

    # Or follow official Docker installation guide
    ```

  - Make sure Docker is running before proceeding

- **Code Editor** - We recommend [VS Code](https://code.visualstudio.com/) or your preferred editor

#### Setting Up Your Development Environment

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/luno.git
   cd luno
   git clone https://github.com/your-username/luno.git
   cd luno
   ```
3. **Install dependencies**:
   ```bash
   yarn install
   yarn install
   ```
4. **Set up Docker**:
   - The project includes a `docker-compose.yml` file with PostgreSQL configured
   - The database will run on port `5432` with the following defaults:
     - User: `postgres`
     - Password: `postgres`
     - Database: `luno`
5. **Set up environment variables**:
   - Copy `.env.example` to `.env.local`
   - Copy `.env.example` to `.env.local`
6. **Set up the database**:
   - Start the database using Docker:
     ```bash
     docker-compose up -d
     ```
   - Generate TypeScript types (if needed):
   - Generate TypeScript types (if needed):
     ```bash
     npx drizzle-kit generate
     npx drizzle-kit generate
     ```
   - Run database migrations with drizzle-kit:
   - Run database migrations with drizzle-kit:
     ```bash
     npx drizzle-kit push
     npx drizzle-kit push
     ```
7. **Start the development server**:
   ```bash
   yarn dev
   yarn dev
   ```

#### Making Changes

1. **Create a branch** for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix-name
   ```
2. **Make your changes** following our [styleguide](#styleguides)
3. **Format your code** by running `yarn format`
4. **Check code quality** by running `yarn lint`
5. **Test your changes** thoroughly
6. **Commit your changes** following our [commit message guidelines](#commit-messages)
7. **Push to your fork**:
8. **Format your code** by running `yarn format`
9. **Check code quality** by running `yarn lint`
10. **Test your changes** thoroughly
11. **Commit your changes** following our [commit message guidelines](#commit-messages)
12. **Push to your fork**:
    ```bash
    git push origin feature/your-feature-name
    ```
13. **Create a Pull Request** on GitHub
14. **Create a Pull Request** on GitHub

#### Pull Request Process

- Ensure your PR description clearly describes the problem and solution
- Include the relevant issue number if applicable
- Make sure all tests pass and your code follows the styleguide
- Run `yarn format` to format your code before committing
- Run `yarn format:check` to verify formatting (this is also run in CI)
- Run `yarn lint` to ensure there are no linting errors
- Request review from maintainers
- Address any feedback and update your PR accordingly

### Improving The Documentation

Documentation is a crucial part of any open source project. It's what makes the project accessible to newcomers and more experienced users alike.

- Improvements to the README are always welcome
- Adding code comments to complex functions
- Writing or updating tutorials
- Adding examples showing how to use features
- Improving the structure and organization of documentation files

If you want to improve documentation, please:

1. Read the existing documentation to understand the style and structure
2. Make your changes following the same style
3. Submit a PR with a clear description of what you changed and why

## Styleguides

### Code Style

- **TypeScript**: Follow TypeScript best practices and use strict mode
- **React/Next.js**: Follow React best practices and Next.js conventions
- **Formatting**: Run `yarn format` to automatically format code using Prettier. The formatter handles TypeScript, TSX, and Markdown files. Use `yarn format:check` to verify formatting without making changes. Generated files (e.g., Prisma generated files) are automatically excluded from formatting
- **Components**: Use functional components with hooks
- **File naming**: Use kebab-case for files and PascalCase for components
- **Imports**: Group imports (external, internal, relative) with blank lines
- **Linting**: Run `yarn lint` before committing. Generated files (e.g., Prisma generated files in `packages/database/generated/`) are automatically excluded from both formatting and linting

### TypeScript Guidelines

- Use TypeScript types and interfaces properly
- Avoid `any` types when possible
- Use proper type inference where applicable
- Document complex types with JSDoc comments

### React/Next.js Guidelines

- Use Next.js 16 App Router conventions
- Prefer server components when possible
- Use client components (`'use client'`) only when necessary
- Follow the project's component structure

### Tailwind CSS Guidelines

- Use Tailwind utility classes following the project's design system
- Use Shadcn/ui components when available
- Maintain consistent spacing and styling

## Commit Messages

### Structure

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Code style changes (formatting, missing semicolons, etc.)
- `refactor`: Code refactoring without bug fixes or features
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```
feat(transactions): add bulk transaction import

Allow users to import multiple transactions from CSV files.
Supports common formats like Mint, YNAB, and custom CSV.

Closes #123
```

```
fix(auth): resolve token refresh issue

Fix issue where auth tokens were not refreshing properly,
causing users to be logged out unexpectedly.

Fixes #456
```

## Join The Project Team

If you're interested in becoming a maintainer or core contributor:

1. Start contributing regularly to the project
2. Help review and test pull requests
3. Engage with the community in issues and discussions
4. Reach out to current maintainers to express your interest

We value consistent, quality contributions and community engagement.
