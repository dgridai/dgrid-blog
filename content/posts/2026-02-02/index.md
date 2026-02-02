---
title: 'Supercharging Openclaw with DGrid: The Ultimate AI Agent Setup'
date: 2026-02-02T06:00:00+08:00
author: DGrid AI
cover: 0_nfoqdmYYizVfJtke.webp
images:
  - 0_nfoqdmYYizVfJtke.webp
description: "OpenClaw has rapidly emerged as a leading consumer-grade platform for AI agent orchestration. It excels at connecting your digital life — calendars, emails, and notion workspaces — into a seamless, automated workflow. However, an agent is only as powerful as the model driving it.

While Openclaw handles the tools, DGrid provides the intelligence. "
categories:
  - AI
  - LLM
  - DGrid
  - Web3
---

[OpenClaw](https://openclaw.ai/) has rapidly emerged as a leading consumer-grade platform for AI agent orchestration. It excels at connecting your digital life — calendars, emails, and notion workspaces — into a seamless, automated workflow. However, an agent is only as powerful as the model driving it.

While Openclaw handles the tools, DGrid provides the intelligence.

By integrating DGrid, you bypass the heavy hardware requirements of running local models (like Ollama) while avoiding the high latency and costs of legacy providers. In this guide, we will show you how to inject DGrid’s high-performance API (powering 200+ models like OpenAI GPT and Gemini) directly into Openclaw, giving you a lightning-fast, reasoning-capable AI assistant on your desktop.

## Prerequisites

Before we begin, ensure you have:

* ​**Terminal Access**​: `Terminal` (macOS/Linux) or `PowerShell` (Windows).
* ​**DGrid API Key**​: Obtain your key from the DGrid dashboard([official guide](https://docs.dgrid.ai/AI-Gateway)).
  - *Note: In the configuration steps below, replace ​* `sk-Your-DGridAI-Key`*​ ​with your actual key.*
* ​**Node.js 22+** ​: Openclaw’s core functionality relies on Node.js, and it requires Node.js version 22 or higher. To check your current Node.js version, run the following command in your terminal: `node -v`
  *- If your version is lower than 22, update Node.js to meet the requirement before proceeding.*

## Step 1: Installing Openclaw

First, we need to install the Openclaw core on your machine. This lightweight installation sets up the environment required to run your agents.

For macOS and Linux: Copy and paste the following command into your terminal:

```
curl -fsSL https://openclaw.ai/install.sh | bash
```

For Windows (PowerShell): Open PowerShell as an Administrator and run:

```
iwr -useb https://openclaw.ai/install.ps1 | iex
```

*Wait for the installation to complete (this may take 1–2 minutes).*

## Step 2: Injecting the DGrid Configuration

With Openclaw installed, configure it to communicate with DGrid’s servers by editing the `openclaw.json` configuration file.

**1. Open the Configuration File**

Use the `nano` editor (or your preferred text editor) to open the config file:

```
nano ~/.openclaw/openclaw.json
```

**2. Add DGrid Credentials**

Add DGrid to the `models` section and set it as the default in the `agents` section.

*Notes:*

* If the file is empty: Paste the full code below.
* If existing configs exist: Merge the keys (preserve other providers if needed, ensure JSON syntax is valid — no missing commas/brackets).

Copy this updated configuration (optimized for GPT/Gemini):

```
{
  "models": {
    "providers": {
      "DGrid": {
        "baseUrl": "https://api.dgrid.ai/api/v1",
        "apiKey": "sk-Your-DGridAI-Key",
        "api": "openai-responses",
        "models": [        // List all the models you want to use
          {
            "id": "openai/gpt-3.5-turbo",
            "name": "GPT-3.5 Turbo",
            "contextWindow": 16385,
            "maxTokens": 4096
          },
          {
            "id": "google/gemini-1.5-pro",
            "name": "Gemini 1.5 Pro",
            "contextWindow": 1048576,
            "maxTokens": 20480
          }
        ]
      }
    }
  },
  
  // Tell openclaw which model to use by default (format: provider/model ID)
  "agents": {
    "defaults": {
      "model": {
        "primary": "dgrid/google/gemini-1.5-pro"
      }
    }
  }
}
```

3. Save Changes

* Press `Ctrl + O` then `Enter` to save.
* Press `Ctrl + X` to exit the editor.

> Pro Tip: We have `set dgrid/google/gemini-1.5-pro` as your primary model in the `agents` section. This ensures that by default, your Openclaw agents use Gemini's advanced reasoning capabilities for all tasks.

## Step 3: Initialization and Onboarding

Now that the “brain” is configured, we need to wake up the “body.” We will run the Openclaw daemon and use the onboarding wizard to lock in our settings.

Run the following command:

```
openclaw onboard --install-daemon
```

**The Setup Wizard**

The system will prompt you for several configurations. To ensure DGrid is prioritized, select the following options:

1. Onboard mode: Select `QuickStart`.
2. Config handling: CRITICAL — Select `Use existing values`.
   - *Reasoning: This tells Openclaw to respect the JSON file we just edited.*
3. Model/auth Provider: Select `Skip for now`.
4. Filter models by provider: Type or Select `DGrid`.
5. Default model: Select `Keep Current`.
   - *Reasoning: This confirms the gemini-1.5-pro default we set in the JSON.*

*Note: You may be asked to install plugins (Skills). For the first run, we recommend skipping these to ensure the connection is stable before adding complexity.*

## Step 4: Verification

Your Openclaw instance is now running and powered by DGrid (using Gemini 1.5 Pro by default)!

### Verify the Connection

To confirm everything works:

1. Open the Openclaw interface.
2. Send a simple query (e.g., “Hello, confirm you’re Gemini 1.5 Pro”).
3. Check the response — Openclaw will confirm it’s using the configured model.

## Support

If you encounter any issues with API keys or model usage, please visit the [DGrid dashboard](https://dgrid.ai/api-keys) or [contact our support team](mailto:hi@dgrid.ai).

*Thank you for choosing DGrid. Happy coding!*
