---
title: 'Use Claude Code with DGrid'
date: 2026-03-12T06:00:00+08:00
author: DGrid AI
cover: 0_XvsT7m0JAC5i0uNQ.webp
images:
  - 0_XvsT7m0JAC5i0uNQ.webp
description: "This guide explains how to run Claude Code through DGrid, an AI gateway that improves API reliability, usage control, and team management when using the Anthropic Claude API."
categories:
  - AI
  - LLM
  - DGrid
  - Web3
---

This guide explains how to run ​**Claude Code through DGrid**​, an AI gateway that improves **API reliability, usage control, and team management** when using the ​**Anthropic Claude API**​.

By routing Claude Code requests through DGrid, developers and organizations can:

* Improve **API stability**
* Manage **team usage and budgets**
* Control **API access and keys**
* Reduce the impact of rate limits or network instability

This setup allows developers to keep using Claude Code normally while DGrid handles request routing and infrastructure-level optimizations.

## Why Use DGrid with Claude Code?

Claude Code works well with the native Anthropic API. However, teams and production environments often need additional reliability and usage control.

DGrid acts as a **gateway layer** between Claude Code and the Anthropic API.

### Improved API Reliability

Public APIs may occasionally experience:

* temporary outages
* rate limits
* regional network instability

DGrid improves reliability by providing:

* retry mechanisms
* gateway-level failover handling
* optimized request routing

This helps keep ​**Claude Code sessions stable during long coding workflows**​.

### Usage Control for Teams

When multiple developers use Claude Code, API usage can grow quickly.

DGrid helps teams:

* monitor API usage
* apply quotas or usage limits
* manage API keys safely

This prevents unexpected cost spikes and keeps usage predictable.

### Infrastructure Layer for AI Development

DGrid allows organizations to introduce an infrastructure layer between development tools and AI providers.

This enables:

* controlled API routing
* consistent usage policies
* easier monitoring of model usage

Developers still use Claude Code exactly the same way.

## Architecture Overview

When Claude Code is connected to DGrid, requests follow this path:

```Plain
Developer Terminal / IDE
        ↓
     Claude Code CLI
        ↓
      DGrid Gateway
        ↓
  Anthropic Claude API
```

DGrid acts as a transparent proxy that can:

* authenticate requests
* track usage
* manage API access
* apply retry or failover logic

This architecture allows organizations to adopt Claude Code without exposing direct Anthropic API keys across multiple environments.

## Quick Start: Run Claude Code with DGrid (5-Minute Setup)

This setup usually takes ​**less than five minutes**​.

Follow the steps below to connect Claude Code to DGrid.

**Prerequisites**

Before starting, make sure you have:

* A valid **DGrid account**
* A generated **[DGrid API Key](https://dgrid.ai/api-keys)**
* **Node.js 18+** (for npm installation)
* Basic familiarity with shell configuration (bash / zsh / fish)

## Step 1 – Install or Update Claude Code

Choose your preferred installation method.

### Native Install (Recommended)

macOS / Linux / WSL

```Bash
curl -fsSL https://claude.ai/install.sh | bash
```

Windows PowerShell

```PowerShell
irm https://claude.ai/install.ps1 | iex
```

### npm Install

Requires Node.js 18+

```Bash
npm install -g @anthropic-ai/claude-code
```

## Step 2 – Configure Claude Code to Use DGrid

Instead of connecting directly to Anthropic, configure Claude Code to send requests through the ​**DGrid gateway**​.

The key configuration variables are:

```Plain
ANTHROPIC_BASE_URL
ANTHROPIC_AUTH_TOKEN
```

To route requests through DGrid:

1. Set the base URL to the DGrid API endpoint
2. Use your **DGrid API key** as the authentication token
3. Clear any existing Anthropic API key to avoid conflicts

## Option A – Global Shell Environment (Recommended)

This method applies to all projects on your machine.

Add the following variables to your shell profile:

Example:

```Plain
~/.bashrc
~/.zshrc
~/.config/fish/config.fish
```

```Bash
# Claude Code via DGrid

export ANTHROPIC_BASE_URL="https://api.dgrid.ai"
export ANTHROPIC_AUTH_TOKEN="<your-dgrid-api-key>"
export ANTHROPIC_API_KEY=""
```

Then reload your shell profile:

```Bash
source ~/.bashrc
```

or

```Bash
source ~/.zshrc
```

## Option B – Project-Level Configuration

If you want DGrid routing to apply only to one project, use a Claude Code project config file.

Create this file in your project root:

```Plain
.claude/settings.local.json
```

Example configuration:

```JSON
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://api.dgrid.ai",
    "ANTHROPIC_AUTH_TOKEN": "<your-dgrid-api-key>",
    "ANTHROPIC_API_KEY": ""
  }
}
```

### Security Tip

Never commit real API keys to version control.

You can protect secrets by:

* adding `.claude/settings.local.json` to `.gitignore`
* storing keys in environment variables

## Step 3 – Start a Claude Code Session

Once configuration is complete, open your project directory and run:

```Bash
cd /path/to/your/project
claude
```

Your request flow will now be:

```Plain
Terminal
  ↓
Claude Code CLI
  ↓
DGrid Gateway
  ↓
Anthropic API
```

All prompts, code generation, and refactoring requests will pass through DGrid.

## Step 4 – Verify the Configuration

To confirm Claude Code is using DGrid, run the `/status` command inside Claude Code.

```Plain
/status
```

You should see something similar to:

```Plain
Auth token: ANTHROPIC_AUTH_TOKEN
Anthropic base URL: https://api.dgrid.ai
```

If the base URL shows the DGrid endpoint, the configuration is correct.

## Troubleshooting

### Claude Code still connects directly to Anthropic

Check that these variables are set correctly:

```Plain
ANTHROPIC_BASE_URL=https://api.dgrid.ai
ANTHROPIC_AUTH_TOKEN=<your-dgrid-api-key>
ANTHROPIC_API_KEY=""
```

Then restart your terminal.

### Authentication errors

Verify that:

* the DGrid API key is valid
* environment variables are loaded
* the shell profile was reloaded

## Best Practices for Teams

When multiple developers use Claude Code, consider these practices.

### Use managed API access

Instead of distributing multiple Anthropic keys, route requests through DGrid.

Benefits include:

* easier credential rotation
* safer key management
* better visibility into API usage

### Monitor usage regularly

Use the **DGrid dashboard** to track:

* model usage
* request volume
* usage trends across teams

This helps maintain predictable AI infrastructure costs.

## FAQ

### Does Claude Code support API gateways?

Yes.

Claude Code allows configuring a custom ​**Anthropic base URL**​, which enables routing requests through services like DGrid.

### Does this change how Claude Code works?

No.

Developers continue using Claude Code normally.

The only difference is where API requests are routed.

### Can teams share one DGrid account?

Yes.

DGrid supports team-level usage monitoring and API management, allowing multiple developers to use the same infrastructure layer safely.

## Support

If you encounter any issues:

* Visit the **[DGrid dashboard](https://dgrid.ai/api-keys)**
* Contact the **[DGrid support team](mailto:hi@dgrid.ai)**

Thank you for choosing DGrid.

Happy coding!
