# /v1/getMonthly

`GET` the current monthly layouts

## Parameters

None

## Response

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
| `timeLeft`         | `number` | The time left in seconds.         |

Other properties:

| Name          | Type     | Description                     |
| ------------- | -------- | ------------------------------- |
| `totalAmount` | `number` | The total amount of layouts.    |
| `page`        | `number` | The current page number.        |
| `amount`      | `number` | The number of layouts returned. |

```json
{
  "layouts": [
    {
      "levelId": 124206392,
      "levelName": "DESTROY ME",
      "creatorUsername": "Navoltski",
      "creatorAccountId": 11683419,
      "difficulty": 25,
      "featured": 2,
      "featuredScore": 2130,
      "type": "classic",
      "timeLeft": 1810450
    }
  ]
}
```
