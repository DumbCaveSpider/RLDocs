# /v1/getGauntlet

`GET` the current gauntlet layouts

## Parameters

None

## Response

A `gauntlet` object with the following properties:

| Name                  | Type     | Description                             |
| --------------------- | -------- | --------------------------------------- |
| `gauntletId`          | `number` | The ID of the gauntlet.                 |
| `gauntletName`        | `string` | The name of the gauntlet.               |
| `gauntletDescription` | `string` | The description of the gauntlet.        |
| `minDifficulty`       | `number` | The minimum difficulty of the gauntlet. |
| `maxDifficulty`       | `number` | The maximum difficulty of the gauntlet. |
| `layouts`             | `array`  | The layouts in the gauntlet.            |

A `layouts` object with the following properties:

| Name               | Type     | Description                       |
| ------------------ | -------- | --------------------------------- |
| `levelId`          | `number` | The ID of the layout.             |
| `levelName`        | `string` | The name of the layout.           |
| `creatorUsername`  | `string` | The username of the creator.      |
| `creatorAccountId` | `number` | The account ID of the creator.    |
| `difficulty`       | `number` | The difficulty of the layout.     |
| `featured`         | `number` | Whether the layout is featured.   |
| `featuredScore`    | `number` | The featured score of the layout. |
| `type`             | `string` | The type of the layout.           |

```json
[
  {
    "gauntletId": 1,
    "gauntletName": "Layout Gauntlet I",
    "gauntletDescription": "\u003cco\u003eLayout Gauntlet I\u003c/c\u003e is a hosted layout creator contest by [DaRealSkellyGuy](user:29960249) over his community. \u003ccr\u003e*(Some levels here are picked by him as a replacement due to the unrated nature of those levels)*\u003c/c\u003e\r\n\r\nSome of the levels in this gauntlet is chosen by [DaRealSkellyGuy](user:29960249) and other judges and are assorted based of difficulty.\r\n\r\n\u003ccy\u003e*Do note that this gauntlet was made before this mod went public and isn't part of the main Rated Layouts official gauntlets*\u003c/c\u003e",
    "minDifficulty": 6,
    "maxDifficulty": 8,
    "layouts": [
      {
        "levelId": 130306862,
        "levelName": "Luna Layout",
        "creatorUsername": "iIDariusIi",
        "creatorAccountId": 11611376,
        "difficulty": 6,
        "featured": 1,
        "featuredScore": 2177,
        "type": "classic"
      },
      {
        "levelId": 124302131,
        "levelName": "rock temple",
        "creatorUsername": "Dinolexis",
        "creatorAccountId": 22608547,
        "difficulty": 7,
        "featured": 0,
        "featuredScore": 34,
        "type": "classic"
      },
      {
        "levelId": 115623928,
        "levelName": "Iceberg Cove",
        "creatorUsername": "herobrain100",
        "creatorAccountId": 20366502,
        "difficulty": 7,
        "featured": 1,
        "featuredScore": 1768,
        "type": "classic"
      },
      {
        "levelId": 118945323,
        "levelName": "Meltdown",
        "creatorUsername": "EffectOverload",
        "creatorAccountId": 26207800,
        "difficulty": 8,
        "featured": 1,
        "featuredScore": 550,
        "type": "classic"
      },
      {
        "levelId": 127171478,
        "levelName": "Broken Gameplay",
        "creatorUsername": "CloudEngineer",
        "creatorAccountId": 28562347,
        "difficulty": 8,
        "featured": 0,
        "featuredScore": 4200,
        "type": "classic"
      }
    ]
  }
]
```
