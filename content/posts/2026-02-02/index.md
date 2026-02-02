---
title: 'Tutorial: Using DGrid RPC API with AnythingLLM'
date: 2026-01-30T06:00:00+08:00
author: DGrid AI
cover: 0_yXBogBVjkm2drxL4.webp
images:
  - 0_yXBogBVjkm2drxL4.webp
description: "DGrid AI offers a smart, low-cost, and community-powered AI network, while AnythingLLM (developed by Mintplex Labs) is an all-in-one, no-code AI application that supports RAG, AI Agents, and private LLM deployments. This tutorial walks you through obtaining a DGrid API key and configuring it in AnythingLLM to leverage DGrid’s distributed AI models. "
categories:
  - AI
  - LLM
  - DGrid
  - Web3
---

## Introduction

DGrid AI offers a smart, low-cost, and community-powered AI network, while AnythingLLM (developed by Mintplex Labs) is an all-in-one, no-code AI application that supports RAG, AI Agents, and private LLM deployments. This tutorial walks you through obtaining a DGrid API key and configuring it in AnythingLLM to leverage DGrid’s distributed AI models.

## Prerequisites

* A Web3 wallet (required for DGrid account authentication, e.g., MetaMask).
* An active AnythingLLM instance (self-hosted or cloud-deployed; refer to [AnythingLLM’s docs](https://docs.anythingllm.com/introduction) for setup guidance).
* A secure password manager (to store your DGrid API key).

## Step 1: Obtain Your DGrid API Key

To authenticate requests to DGrid’s AI network, you first need an API key. Follow these steps to generate and secure it:

1. ​**Access the DGrid API Key Console**​: Open your browser and navigate to [https://dgrid.ai/api-keys](https://dgrid.ai/api-keys).
2. ​**Authenticate with Your Wallet**​: Connect your Web3 wallet to log in. Ensure your wallet is connected to the correct network supported by DGrid.
3. ​**Create a New API Key**​:
   - Click ​**Create New Key**​.
   - Enter a descriptive label (e.g., “AnythingLLM Integration”) to track the key’s purpose.
   - (Optional but recommended) Set a credit limit or expiration date to control usage and reduce security risks.
   - Click **Create** to generate the key.
4. ​**Securely Store the Key**​: The API key will be displayed ​**only once**​. Copy it immediately and save it in a secure location (e.g., a password manager).

### Critical Security Note

Treat your DGrid API key like a password. Anyone with access to it can incur charges on your account or access sensitive data. Never share it publicly, commit it to version control (e.g., Git), or store it in unencrypted files.

## Step 2: Configure DGrid RPC in AnythingLLM

Since DGrid RPC is compatible with OpenAI’s RPC specifications, you can use AnythingLLM’s “Generic OpenAI” integration to connect to DGrid. Follow the exact steps below for successful configuration:

### ​**Launch AnythingLLM and Access Settings**​:

Open your AnythingLLM dashboard (local or cloud-based), log in to your account, and navigate to the homepage. Locate the wrench icon in the bottom-left corner — click it to enter the Settings menu.

### **Select the Correct LLM Provider**

* In the Settings menu, find and select ​**AI Providers**​.
* Within AI Providers, choose the **LLM** option.
* Scroll to the bottom of the **LLM Provider** dropdown list and select ​**Generic OpenAI**​.

![](0_F_1Ao10SZ6mt56p8.webp)

### ​**Input DGrid API Credentials and Customize Settings**​:

* ​**Base URL**​: Enter DGrid’s official API endpoint: [`https://api.dgrid.ai/api`](https://api.dgrid.ai/api)
* ​**API Key**​: Paste the DGrid API key you generated in Step 1 (ensure no extra spaces are included).
* ​**Chat Model Name**​: Customize this field (e.g., “DGrid-Llama-3–8B” or any name that helps you identify the DGrid model).
* ​**Content Window Limit**​: Set a value based on your needs (this controls the maximum context window size for LLM interactions; refer to DGrid’s model documentation for recommended limits).

![](0_VLLlEBZAQPS2xnib.webp)

### ​**Save the Configuration**​:

Click the **Save Changes** button to store your settings. AnythingLLM will now route all LLM requests through DGrid’s RPC endpoint.

## Step 3: Test the Integration

To confirm the setup works, test a simple query or RAG workflow in AnythingLLM:

1. ​**Create a New Workspace/Project**​: In AnythingLLM, start a new project (e.g., “DGrid Test”) and upload a sample document (for RAG) or skip to a direct chat.
2. ​**Send a Test Query**​: Enter a prompt like, “Explain DGrid AI in 2 sentences.”
3. ​**Verify the Response**​: Check if the response is generated successfully. You can further confirm via DGrid’s API usage dashboard (log back into [https://dgrid.ai/api-keys](https://dgrid.ai/api-keys) to view request logs and usage data).

## Troubleshooting Tips

* ​**Authentication Errors**​: Ensure your Web3 wallet was correctly connected when generating the DGrid API key, and the key is pasted without extra spaces or typos.
* ​**Connection Issues**​: Confirm the Base URL is exactly `https://api.dgrid.ai/api` and your network allows outbound requests to this endpoint (check firewalls or proxy settings if needed).
* ​**Model Compatibility**​: If the LLM fails to generate responses, verify that your custom Chat Model Name aligns with a DGrid-supported model (refer to DGrid’s official documentation for a list of valid models).
* ​**Save Failure**​: If changes aren’t saved, ensure all required fields (Base URL, API Key) are filled in — some versions of AnythingLLM mark these as mandatory for Generic OpenAI integration.

## Conclusion

By following the above steps, you’ve successfully integrated DGrid’s RPC API into AnythingLLM using the Generic OpenAI option. This setup combines DGrid’s decentralized, cost-effective AI network with AnythingLLM’s powerful no-code tools (RAG, AI Agents, private workspaces), making it ideal for teams and individuals seeking scalable, open AI solutions without complex infrastructure management.

For more details:

* DGrid Documentation: [http://docs.dgrid.ai/](http://docs.dgrid.ai/)
* AnythingLLM Documentation: [https://docs.anythingllm.com/](https://docs.anythingllm.com/)
* DGrid API Key Console: [https://dgrid.ai/api-keys](https://dgrid.ai/api-keys)
