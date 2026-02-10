---
outline: deep
---

![Rated Layouts Logo](https://ratedlayouts.arcticwoof.xyz/RL_title.png)

## Welcome to the Rated Layouts Documentation

Welcome to the Rated Layouts Documentation. Here you can find all of the public endpoints from Rated Layouts' server.

> This documentation is maintained and created by **ArcticWoof** the owner of Rated Layouts.

## Rated Layouts' Endpoints

Rated Layouts' endpoints are fetched from this url `https://gdrate.arcticwoof.xyz/`. Most if not all public endpoints doesn't use any form of authentication. There are other endpoints mainly private endpoints required use of authentication to be used.

## Public Endpoints

Public Endpoints are usually in the path `/v1/` and can be used by anyone without any authentication. These endpoints can be used to fetch publicly accessible and available data stored from the Rated Layouts' server. These endpoints are also used through [Rated Layouts' Browser](https://ratedlayouts.arcticwoof.xyz/)

You get the response when you go to `https://gdrate.arcticwoof.xyz/v1/`:

```json
{
  "message": "Rated Layouts Public API",
  "status": "Online",
  "serverVersion": "v1",
  "modVersion": "v0.4.0-beta.1"
}
```

| Name          | Description                                                                                                                                           |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| message       | Message from the Public endpoint, usually says `Rated Layouts Public API`                                                                             |
| status        | Status of the server, usually says `Online`                                                                                                           |
| serverVersion | Version of the server, usually says `v1`                                                                                                              |
| modVersion    | Version of the latest mod. Can vary depending on the latest version of [Rated Layouts Geode Mod](https://geode-sdk.org/mods/arcticwoof.rated_layouts) |

## Private Endpoints

Private endpoints are endpoints that can only be used by users with authentication. These endpoints are usually used within **Geometry Dash** itself and mainly used as a way to fetch private data from the server to be displayed in the game. We won't provide details on these endpoints for security purposes.

## Authentication

Endpoints that uses `POST` requests required some sort of authentication to be used, mainly private endpoints. Rated Layouts' server uses **[Globed Argon](https://argon.globed.dev/)** as its main authentication system and uses the user's uniquely generated argon token which are only obtained through **Geometry Dash** and can not be obtained through any other means.

## Rate Limits

All endpoints are proxied through **Cloudflare** and are subject to Cloudflare's rate limits. The specific details of the rate limits aren't publicly available to protect the server from abuse and bypass.
