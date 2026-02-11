# /v1/getDaily

`GET` the current daily layouts

## Parameters

None

## Response

A `layouts` object with the following properties:

| Name               | Type      | Description                                             |
| ------------------ | --------- | ------------------------------------------------------- |
| `levelId`          | `number`  | The ID of the layout.                                   |
| `levelName`        | `string`  | The name of the layout.                                 |
| `creatorUsername`  | `string`  | The username of the creator.                            |
| `creatorAccountId` | `number`  | The account ID of the creator.                          |
| `difficulty`       | `number`  | The difficulty of the layout.                           |
| `featured`         | `number`  | Whether the layout is featured.                         |
| `featuredScore`    | `number`  | The featured score of the layout.                       |
| `type`             | `string`  | The type of the layout.                                 |
| `daily`            | `boolean` | Whether the layout is daily. (Always returns `true`)    |
| `weekly`           | `boolean` | Whether the layout is weekly. (Always returns `false`)  |
| `monthly`          | `boolean` | Whether the layout is monthly. (Always returns `false`) |
| `timeLeft`         | `number`  | The time left in the daily layout.                      |

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
      "daily": true,
      "weekly": false,
      "monthly": false,
      "timeLeft": -1035181
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
      "daily": true,
      "weekly": false,
      "monthly": false,
      "timeLeft": -1035147
    }
  ]
}
```
