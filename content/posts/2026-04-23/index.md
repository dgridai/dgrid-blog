---
title: 'DGrid Launches x402-Enabled AI API: Pay-Per-Use Inference with BNB Chain Integration'
date: 2026-04-23T06:00:00+08:00
author: DGrid AI
cover: 1_29p1jctVlvTVlIksVyanTQ.webp
images:
  - 1_29p1jctVlvTVlIksVyanTQ.webp
description: "DGrid is introducing an AI inference API that integrates the ​x402 payment protocol, enabling developers to access AI capabilities with per-request authorization and payment."
categories:
  - AI
  - LLM
  - DGrid
  - Web3
---

DGrid is introducing an AI inference API that integrates the ​**x402 payment protocol**​, enabling developers to access AI capabilities with per-request authorization and payment.

By incorporating x402 into its API, DGrid allows users to directly invoke AI inference while handling payment within the same request flow. The API also supports **BNB Chain (BSC)** as the underlying settlement layer, providing a practical way to combine AI usage with programmable payment infrastructure.

## Bringing Payment into the API Layer

In most existing AI services, payment and usage are handled separately. Developers typically rely on API keys and centralized billing systems, with costs calculated after usage.

With x402 integrated, DGrid’s API introduces a different interaction pattern. Each request can carry its own payment authorization, allowing inference and payment to be processed together.

This means:

* Requests can be explicitly authorized before execution
* Costs can be bounded per request
* Payment becomes part of the API interaction itself

Rather than changing how developers call AI models, this approach extends the request flow to include payment logic.

## How the x402 Flow Works

DGrid’s API implements the x402 protocol through a two-step process.

When a request is first sent without payment information, the API responds with a `402 Payment Required` message. This response includes structured payment requirements, such as the maximum authorized amount and relevant execution parameters.

The client then signs this requirement and resubmits the request with an `x-payment` payload. Once verified, the API proceeds with inference and returns the result.

By following this flow, developers can ensure that each request is both authorized and paid for before execution, without introducing additional off-chain billing steps.

## Maintaining Familiar Developer Experience

Although payment is integrated into the request flow, the API itself remains consistent with common AI interfaces.

Developers can send:

* Multi-turn message inputs
* Model selection requests
* Sampling configurations such as temperature, topP, and topK

The API also supports both streaming and non-streaming responses, allowing it to fit into a wide range of application types.

In streaming mode, responses are delivered incrementally via SSE, making it suitable for interactive applications. In non-streaming mode, the API returns standard JSON responses, enabling straightforward backend integration.

## Supporting More Controlled and Programmable Usage

By embedding payment into the request lifecycle, DGrid’s x402-enabled API is particularly suited for scenarios where usage needs to be controlled or automated.

For example, applications can:

* Enforce per-user or per-request spending limits
* Dynamically adjust model usage based on available budget
* Build systems where AI usage is tied directly to application logic

This is especially relevant for agent-based systems, where each action may trigger an AI call and must remain within predefined cost constraints.

## Integrating with BNB Chain

The API supports **BNB Chain (BSC)** as the payment network used in the x402 flow.

Through this integration, payment authorization can be handled using on-chain assets, allowing developers to connect AI inference with existing wallet infrastructure and Web3-based applications.

In the current implementation, BNB Chain serves as the settlement layer for payment authorization within the x402 protocol.

## Getting Started

API endpoint:

```
https://api.dgrid.ai/x402/v1
```

Developers can integrate the API using standard HTTP requests, with the additional step of handling x402 payment authorization where required.

> ***See ​*** [**Docs**](https://docs.dgrid.ai/x402)**.**

## Closing Thoughts

By integrating the x402 protocol into its AI inference API, DGrid provides a way to combine AI capabilities with per-request payment authorization.

This approach enables developers to build applications where usage, cost, and execution are more tightly coupled, while maintaining compatibility with existing AI development workflows.
