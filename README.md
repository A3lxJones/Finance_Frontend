# Finance Tracker Frontend

## Overview

A modern web application for tracking personal finances, expenses, and investments. The Finance Tracker helps users manage their financial life with ease and confidence.

### Key Features

- **Dashboard Overview**: Visual representation of financial status including charts and graphs
- **Expense Tracking**: Categorize and monitor daily expenses
- **Budget Management**: Set and track budgets for different expense categories
- **Investment Portfolio**: Track investments and their performance
- **Reports & Analytics**: Generate detailed financial reports and insights
- **Multi-currency Support**: Handle transactions in different currencies
- **Secure Authentication**: Protected access to personal financial data

### Technical Requirements

#### Frontend Requirements

- Modern browser with JavaScript enabled
- Minimum screen resolution: 1280x720
- Stable internet connection

#### Backend Integration

- RESTful API endpoints
- JWT authentication
- WebSocket support for real-time updates

## Table of Contents

- [Project Setup](#project-setup)
- [Tech Stack](#tech-stack)
- [Development Environment](#development-environment)
- [Project Structure](#project-structure)
- [Coding Standards](#coding-standards)
- [Running the Application](#running-the-application)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)

## Tech Stack

- React 18
- TypeScript
- Material-UI (MUI)
- Redux Toolkit for state management
- React Router for navigation
- Axios for API requests
- Chart.js for data visualization
- Jest and React Testing Library for testing

## Development Environment

### Prerequisites

- Node.js (v18.x or later)
- npm (v8.x or later) or yarn (v1.22.x or later)
- Git
- VS Code (recommended)

### Recommended VS Code Extensions

- ESLint
- Prettier
- GitLens
- Code Spell Checker
- ES7+ React/Redux/React-Native snippets

## Project Setup

### Initial Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/A3lxJones/Finance_Frontend.git
   cd Finance_Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or if using yarn
   yarn install
   ```

3. Create environment files:
   ```bash
   cp .env.example .env.local
   ```

4. Update the environment variables in `.env.local` with your configuration.

### Running the Application

To start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report

### Environment Variables

Required environment variables:

- `NEXT_PUBLIC_API_URL` - Backend API URL
- `NEXT_PUBLIC_WS_URL` - WebSocket URL
- `NEXT_PUBLIC_AUTH_DOMAIN` - Authentication domain

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── common/         # Shared components (buttons, inputs, etc.)
│   ├── layout/         # Layout components (header, footer, etc.)
│   └── features/       # Feature-specific components
├── pages/              # Next.js pages and routes
├── styles/             # Global styles and theme
├── hooks/              # Custom React hooks
├── services/           # API services and external integrations
├── store/              # Redux store configuration
│   ├── slices/        # Redux slices for features
│   └── middleware/    # Custom Redux middleware
├── types/              # TypeScript type definitions
├── utils/              # Utility functions and helpers
└── tests/              # Test files
    ├── unit/          # Unit tests
    ├── integration/   # Integration tests
    └── e2e/           # End-to-end tests

public/                 # Static files
├── images/            # Image assets
├── fonts/             # Font files
└── icons/             # Icon assets
```

### Key Directories

- **components/**: Contains all React components organized by feature and reusability
- **pages/**: Next.js pages that define routes and page layouts
- **services/**: API integration and external service connections
- **store/**: Redux state management setup and configuration
- **hooks/**: Custom React hooks for shared functionality
- **utils/**: Helper functions and utilities used across the application

## Coding Standards

### General Guidelines

1. Use TypeScript for all new code
2. Follow ESLint and Prettier configurations
3. Write self-documenting code with clear variable and function names
4. Keep components small and focused on a single responsibility
5. Use proper TypeScript types instead of `any`

### Component Structure

```typescript
// ComponentName.tsx
import { FC } from 'react';
import styles from './ComponentName.module.css';

interface ComponentNameProps {
  prop1: string;
  prop2: number;
}

export const ComponentName: FC<ComponentNameProps> = ({ prop1, prop2 }) => {
  // Component logic here
  return (
    <div className={styles.container}>
      {/* Component JSX */}
    </div>
  );
};
```

### Style Guidelines

1. Use CSS Modules for component styling
2. Follow BEM naming convention for CSS classes
3. Use theme variables for colors, spacing, and typography
4. Implement responsive design using provided breakpoints

### Best Practices

1. **State Management**
   - Use Redux for global state
   - Use local state for component-specific data
   - Implement proper error handling

2. **Performance**
   - Implement proper memoization (useMemo, useCallback)
   - Optimize re-renders
   - Lazy load components when possible

3. **Testing**
   - Write unit tests for utilities and hooks
   - Write integration tests for complex components
   - Maintain good test coverage

4. **Code Organization**
   - Group related files together
   - Use absolute imports
   - Keep consistent file naming convention

### Git Workflow

1. Branch naming:
   - feature/feature-name
   - bugfix/bug-description
   - hotfix/issue-description

2. Commit messages:
   - Use present tense
   - Be descriptive
   - Reference issue numbers

3. Pull Requests:
   - Keep PRs focused and small
   - Include detailed descriptions
   - Request reviews from team members
