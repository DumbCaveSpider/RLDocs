# /v1/getDaily

`GET` the current daily layouts

## Parameters

None

## Response

A `layouts` object with the following properties:

| Name               | Type     | Description                        |
| ------------------ | -------- | ---------------------------------- |
| `levelId`          | `number` | The ID of the layout.              |
| `levelName`        | `string` | The name of the layout.            |
| `creatorUsername`  | `string` | The username of the creator.       |
| `creatorAccountId` | `number` | The account ID of the creator.     |
| `difficulty`       | `number` | The difficulty of the layout.      |
| `featured`         | `number` | Whether the layout is featured.    |
| `featuredScore`    | `number` | The featured score of the layout.  |
| `type`             | `string` | The type of the layout.            |
| `timeLeft`         | `number` | The time left in the daily layout. |

```json
{
  "layouts": [
    {
      "levelId": 96174612,
      "levelName": "Calm",
      "creatorUsername": "Xeroniuss",
      "creatorAccountId": 14025375,
      "difficulty": 9,
      "featured": 1,
      "featuredScore": 4231,
      "type": "classic",
      "timeLeft": -973472
    },
    {
      "levelId": 130880047,
      "levelName": "Rafael Edward Cruz",
      "creatorUsername": "HalieyWelch",
      "creatorAccountId": 30178409,
      "difficulty": 9,
      "featured": 0,
      "featuredScore": 0,
      "type": "platformer",
      "timeLeft": -973438
    }
  ]
}
```
