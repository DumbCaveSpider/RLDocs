# /v1/getWeekly

`GET` the current weekly layouts

## Parameters

None

## Response

A `layouts` object with the following properties:

| Name               | Type     | Description                         |
| ------------------ | -------- | ----------------------------------- |
| `levelId`          | `number` | The ID of the layout.               |
| `levelName`        | `string` | The name of the layout.             |
| `creatorUsername`  | `string` | The username of the creator.        |
| `creatorAccountId` | `number` | The account ID of the creator.      |
| `difficulty`       | `number` | The difficulty of the layout.       |
| `featured`         | `number` | Whether the layout is featured.     |
| `featuredScore`    | `number` | The featured score of the layout.   |
| `type`             | `string` | The type of the layout.             |
| `timeLeft`         | `number` | The time left in the weekly layout. |

```json
{
  "layouts": [
    {
      "levelId": 106007468,
      "levelName": "8bit Symphony",
      "creatorUsername": "Chaken",
      "creatorAccountId": 7824770,
      "difficulty": 15,
      "featured": 2,
      "featuredScore": 1005,
      "type": "classic",
      "timeLeft": -633274
    },
    {
      "levelId": 132119097,
      "levelName": "The Tower",
      "creatorUsername": "bonneville1",
      "creatorAccountId": 4882817,
      "difficulty": 15,
      "featured": 1,
      "featuredScore": 4870,
      "type": "platformer",
      "timeLeft": -633261
    }
  ]
}
```
