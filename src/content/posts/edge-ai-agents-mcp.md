---
title: Edge AI Agents and MCP in Manufacturing
date: 2025-07-25
summary: Notes on how MCP can connect AI agents with edge manufacturing data, tools, and control services.
image: /images/safe-mcp-tools-provider.svg
imageAlt: Public-safe MCP tools and resources provider diagram
---

AI agents become useful in manufacturing when they can do more than answer questions. They need controlled access to data sources, production context, and operational tools.

Model Context Protocol is one way to standardize that connection. In an edge manufacturing environment, an MCP server can expose resources such as equipment events, production indicators, app logs, and metadata. It can also expose tools such as device-control services, notifiers, SPC processors, inference services, and production intelligence APIs.

The important design split is simple:

- The LLM is the reasoning engine.
- The agent owns the workflow, permissions, tool calls, prompts, and error handling.
- MCP servers provide reusable adapters to data and actions.

For edge AI scenarios, I think about two roles:

1. Edge AI applications as MCP clients: agents that monitor events, inspect quality data, analyze equipment faults, and decide when to call tools.
2. Edge services as MCP servers: APIs and drivers that expose production data, application status, event resources, stream or database access, device control, notifier tools, and SPC calculations.

Useful manufacturing agent scenarios include data validation, quality analysis, device anomaly monitoring, edge application monitoring, and operator notification workflows.

There are still practical limits. LLM behavior depends heavily on prompt quality, model capability, and available compute. Tool use must be validated in code because models can choose the wrong tool or generate invalid parameters. Security also matters: secrets, token exchange, data access, and prompt-injection boundaries have to be designed explicitly.

My current direction is to treat MCP as a standard interface layer for edge manufacturing tools, not as a complete product by itself. The useful product is the workflow around it: data governance, metadata, permission boundaries, testing, exception handling, and clear manufacturing use cases.
