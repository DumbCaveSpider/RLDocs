# /v1/getLeaderboard

`GET` the current leaderboard

## Parameters

### Query Parameters

| Parameter | Description                                                         | Required |
| --------- | ------------------------------------------------------------------- | -------- |
| `type`    | Type of leaderboard (1=sparks, 2=planets, 3=creatorPoints, 4=coins) | No       |

> Returns `type=1` if no `type` is specified

## Response

A `leaderboard` object with the following properties:

| Name            | Type     | Description                                        |
| --------------- | -------- | -------------------------------------------------- |
| `accountId`     | `number` | The account ID of the user.                        |
| `username`      | `string` | The username of the user.                          |
| `sparks`        | `number` | The sparks of the user.                            |
| `planets`       | `number` | The planets of the user.                           |
| `blueCoins`     | `number` | The blue coins of the user.                        |
| `creatorPoints` | `number` | The creator points of the user.                    |
| `isBooster`     | `number` | Whether the user is a Layout Booster.              |
| `isSupporter`   | `number` | Whether the user is a Layout Supporter.            |
| `modRole`       | `number` | The mod role of the user. (0=user, 1=mod, 2=admin) |
| `rank`          | `number` | The leaderboard rank of the user.                  |

Other properties:

| Name          | Type     | Description                   |
| ------------- | -------- | ----------------------------- |
| `totalAmount` | `number` | The total amount of users.    |
| `page`        | `number` | The current page number.      |
| `amount`      | `number` | The number of users returned. |

```json
{
  "leaderboard": [
    {
      "accountId": 30631806,
      "username": "ExefMn",
      "sparks": 9111,
      "planets": 605,
      "blueCoins": 592,
      "creatorPoints": 4,
      "isBooster": false,
      "isSupporter": false,
      "modRole": 1,
      "rank": 1
    },
    {
      "accountId": 25313028,
      "username": "KonataIsBest",
      "sparks": 5901,
      "planets": 501,
      "blueCoins": 557,
      "creatorPoints": 6,
      "isBooster": false,
      "isSupporter": true,
      "modRole": 1,
      "rank": 2
    },
    {
      "accountId": 17018705,
      "username": "MonotonFXB",
      "sparks": 3525,
      "planets": 4,
      "blueCoins": 15,
      "creatorPoints": 2,
      "isBooster": false,
      "isSupporter": false,
      "modRole": 1,
      "rank": 3
    },
    ...
  ],
  "total": 2710,
  "page": 1,
  "amount": 100
}
```

## Failed Response

```
Invalid type. Must be 1 (stars), 2 (planets), 3 (points) or 4 (coins)
```
