<div align="center">

# Luno (Beta)

**A modern financial management platform**

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB)](https://react.dev/)
[![Bun](https://img.shields.io/badge/Bun-latest-000000)](https://bun.sh/)

</div>

## Quick Start

### Prerequisites

- [Bun](https://bun.sh/docs/installation) (latest version)
- [Docker](https://www.docker.com/get-started) (for local database)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/arcafyi/luno.git
   cd arca
   ```

2. **Install dependencies**

   ```bash
   yarn install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Start the database**

   ```bash
   docker-compose up -d
   ```

5. **Run database migrations**

   ```bash
   npx drizzle-kit push
   ```

6. **Start the development server**
   ```bash
   yarn dev
   ```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## Development

### Available Scripts

- `yarn dev` - Start the development server
- `yarn format` - Format code using Prettier (formats TypeScript, TSX, and Markdown files)
- `yarn format:check` - Check if code is properly formatted without making changes
- `yarn lint` - Run ESLint to check code quality
- `yarn build` - Build the project for production

### Code Quality

- Run `yarn format` to automatically format your code before committing
- Run `yarn format:check` to verify formatting without making changes (useful for CI)
- Run `yarn lint` to check for code quality issues before committing
- Generated files (e.g., Prisma generated files in `packages/database/generated/`) are automatically excluded from linting
- Follow the project's styleguide as outlined in [CONTRIBUTING.md](CONTRIBUTING.md)

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details on how to:

- Report bugs
- Suggest features
- Submit pull requests
- Follow our code style

Please also read our [Code of Conduct](CODE_OF_CONDUCT.md) before participating.

## License

This project is licensed under the [GNU General Public License v3.0](LICENSE).

## Acknowledgments

Built with love by the Arca team.
