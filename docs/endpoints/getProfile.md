# /v1/getProfile

`GET` the profile of a user

## Parameters

### Query Parameters

| Parameter   | Description                | Required |
| ----------- | -------------------------- | -------- |
| `accountId` | The account ID of the user | Yes      |
| `username`  | The username of the user   | Yes      |

> Only required either `accountId` or `username` present, not both.

## Response

A `profile` object with the following properties:

| Name            | Type     | Description                                        |
| --------------- | -------- | -------------------------------------------------- |
| `accountId`     | `number` | The account ID of the user.                        |
| `username`      | `string` | The username of the user.                          |
| `sparks`        | `number` | The sparks of the user.                            |
| `planets`       | `number` | The planets of the user.                           |
| `blueCoins`     | `number` | The blue coins of the user.                        |
| `creatorPoints` | `number` | The creator points of the user.                    |
| `isBooster`     | `number` | Whether the user is a booster.                     |
| `isSupporter`   | `number` | Whether the user is a supporter.                   |
| `modRole`       | `number` | The mod role of the user. (0=user, 1=mod, 2=admin) |

```json
{
  "accountId": 7689052,
  "username": "ArcticWoof",
  "sparks": 1142,
  "planets": 87,
  "blueCoins": 35,
  "creatorPoints": 1,
  "isBooster": false,
  "isSupporter": false,
  "modRole": 2
}
```

## Failed Response

```
Missing accountId or username
```

```
User not found
```
