# Contributing to shadcnspace 💡

Thank you for considering contributing to **shadcnspace**! We welcome contributions of all kinds: bug fixes, new components, blocks, templates, documentation improvements, and enhancements to our MCP server integration.  

Following these guidelines will help us review your contribution faster and keep the project consistent and high-quality.

---

## How to Contribute

### 1. Fork the repository
Click the **Fork** button at the top-right of the repo and clone your fork locally:

```bash
git clone https://github.com/<your-username>/shadcn-space.git
cd shadcn-space
```

### 2. Install dependencies
Install all required packages:
```bash
npm install
```

### 3. Create a branch
Use a descriptive name for your branch:
```bash
git checkout -b feature/add-new-component
```

### 4. Make your changes

- Add new components, blocks, or templates under the appropriate folders.
- Follow the existing file structure and naming conventions.
- Update documentation if necessary.
- For MCP server changes, ensure your code integrates cleanly with existing workflows.


### 5. Test your changes

- Verify component previews are working.
- Ensure templates and blocks render correctly.
- Run any existing tests and consider adding new ones if you add functionality.

```bash
npm run dev
```

### 6. Commit your changes

Write clear, descriptive commit messages:

```bash
git add .
git commit -m "Add new modal component with variants"
```


### 7. Push and create a pull request

Push your branch to your fork and submit a pull request:

```bash
git push origin feature/add-new-component
```

- Use a descriptive PR title.
- Include context, screenshots, or code snippets if relevant.
- Reference any issues your PR resolves with Fixes #<issue-number>.

## Contribution Guidelines

- Follow consistent code style (Tailwind CSS, Shadcn conventions, React best practices).
- Make atomic PRs — one feature, one bug fix, or one documentation update per PR.
- Include comments for complex logic, especially in MCP server or AI workflows.
- Ensure components are accessible and follow best practices (ARIA, semantic HTML).
- Keep MCP server code modular for easy integration with new components or blocks.


## Code of Conduct

We aim to maintain a welcoming and respectful community. By contributing to this project, you agree to abide by the Code of Conduct


## Reporting Issues
Before opening a new issue, please first search for existing issues to avoid duplicates.
Provide detailed reports with as much context as possible, including steps to reproduce the issue, your environment, and any relevant logs or screenshots.

For hard-to-reproduce bugs, please include a minimal reproducible repository or detailed steps to recreate the issue.

## Fixing Existing Issues
Help us by fixing existing issues.
Avoid working on issues already assigned to others to prevent duplicate efforts.

If you're interested in working on an issue, please add a comment to request assignment before starting work. This helps maintainers track who's working on what and prevents duplication of effort.

Use the following commit message format for fixes: fix(<issue-subject>): #<issue_number> [description]. For eg. fix(avatar): #3 fix bg-color of default avatar

## Feature Requests
Please note that not all feature requests will be accepted, as some may not align with the vision or scope of the project. Don't take it personally if a request is rejected.

## Pull Requests
Pull requests should address an open issue that is assigned to you. If no issue exists, create one first. If an issue is not assigned to you, please request assignment in the comments before submitting a PR. This ensures we avoid duplicate efforts.

For minor changes like fixing typos, an issue is not required. Feel free to directly open a pull request.

For documentation fixes, including updates to the website, you can also submit a pull request without opening an issue first.

**Thank you for helping make shadcnspace better! Your contributions directly help developers ship faster and build high-quality UIs.**

