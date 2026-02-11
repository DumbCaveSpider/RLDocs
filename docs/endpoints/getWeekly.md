# /v1/getWeekly

`GET` the current weekly layouts

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
| `daily`            | `boolean` | Whether the layout is daily. (Always returns `false`)   |
| `weekly`           | `boolean` | Whether the layout is weekly. (Always returns `true`)   |
| `monthly`          | `boolean` | Whether the layout is monthly. (Always returns `false`) |
| `timeLeft`         | `number`  | The time left in the weekly layout.                     |

```json
{
  "layouts": [
    {
      "levelId": 132221132,
      "levelName": "Aquamarine",
      "creatorUsername": "Navoltski",
      "creatorAccountId": 11683419,
      "difficulty": 10,
      "featured": 2,
      "featuredScore": 5020,
      "type": "classic",
      "daily": false,
      "weekly": true,
      "monthly": false,
      "timeLeft": 615346
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
      "daily": false,
      "weekly": true,
      "monthly": false,
      "timeLeft": -694828
    }
  ]
}
```
