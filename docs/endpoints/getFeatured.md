# /v1/getFeatured

`GET` the list of featured layouts

## Parameters

### Query Parameters

| Name     | Type     | Description                                 |
| -------- | -------- | ------------------------------------------- |
| `page`   | `number` | The page number of the layouts to retrieve. |
| `amount` | `number` | The number of layouts to retrieve per page. |

## Response

A `layouts` object with the following properties:

| Name               | Type      | Description                              |
| ------------------ | --------- | ---------------------------------------- |
| `levelId`          | `number`  | The ID of the layout.                    |
| `levelName`        | `string`  | The name of the layout.                  |
| `creatorUsername`  | `string`  | The username of the creator.             |
| `creatorAccountId` | `number`  | The account ID of the creator.           |
| `difficulty`       | `number`  | The difficulty of the layout.            |
| `featured`         | `number`  | Whether the layout is featured.          |
| `featuredScore`    | `number`  | The featured score of the layout.        |
| `type`             | `string`  | The type of the layout.                  |
| `daily`            | `boolean` | Whether the layout was a daily layout.   |
| `weekly`           | `boolean` | Whether the layout was a weekly layout.  |
| `monthly`          | `boolean` | Whether the layout was a monthly layout. |

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
      "levelId": 132221132,
      "levelName": "Aquamarine",
      "creatorUsername": "Navoltski",
      "creatorAccountId": 11683419,
      "difficulty": 10,
      "featured": 2,
      "featuredScore": 5020,
      "type": "classic",
      "daily": false,
      "weekly": false,
      "monthly": false
    },
    {
      "levelId": 89932118,
      "levelName": "Binary Baby",
      "creatorUsername": "Nafen",
      "creatorAccountId": 2404924,
      "difficulty": 15,
      "featured": 2,
      "featuredScore": 5000,
      "type": "classic",
      "daily": false,
      "weekly": false,
      "monthly": false
    },
    {
      "levelId": 91820896,
      "levelName": "PAPILLA ",
      "creatorUsername": "nectaroso",
      "creatorAccountId": 12167230,
      "difficulty": 1,
      "featured": 2,
      "featuredScore": 5000,
      "type": "classic",
      "daily": false,
      "weekly": false,
      "monthly": false
    },
    {
      "levelId": 93650855,
      "levelName": "computer action",
      "creatorUsername": "Skralen",
      "creatorAccountId": 9541392,
      "difficulty": 9,
      "featured": 2,
      "featuredScore": 5000,
      "type": "classic",
      "daily": false,
      "weekly": false,
      "monthly": false
    },
    {
      "levelId": 95337365,
      "levelName": "by your side",
      "creatorUsername": "Asuriaa",
      "creatorAccountId": 5856032,
      "difficulty": 20,
      "featured": 2,
      "featuredScore": 4999,
      "type": "classic",
      "daily": false,
      "weekly": false,
      "monthly": false
    },
    {
      "levelId": 126273112,
      "levelName": "Away",
      "creatorUsername": "B1ueberry",
      "creatorAccountId": 11673074,
      "difficulty": 20,
      "featured": 2,
      "featuredScore": 4966,
      "type": "classic",
      "daily": false,
      "weekly": false,
      "monthly": false
    },
    {
      "levelId": 125409527,
      "levelName": "Motions",
      "creatorUsername": "Andromity",
      "creatorAccountId": 13643721,
      "difficulty": 25,
      "featured": 2,
      "featuredScore": 4966,
      "type": "classic",
      "daily": false,
      "weekly": false,
      "monthly": false
    },
    {
      "levelId": 114606503,
      "levelName": "Hexacore SyphorceLY",
      "creatorUsername": "PR0R4M0N",
      "creatorAccountId": 5613638,
      "difficulty": 25,
      "featured": 2,
      "featuredScore": 4965,
      "type": "classic",
      "daily": false,
      "weekly": false,
      "monthly": false
    },
    {
      "levelId": 132440134,
      "levelName": "Serotonin Syndrome",
      "creatorUsername": "Navoltski",
      "creatorAccountId": 11683419,
      "difficulty": 20,
      "featured": 2,
      "featuredScore": 4945,
      "type": "classic",
      "daily": false,
      "weekly": false,
      "monthly": false
    },
    {
      "levelId": 99382586,
      "levelName": "PARACOSM",
      "creatorUsername": "292s",
      "creatorAccountId": 11734917,
      "difficulty": 15,
      "featured": 2,
      "featuredScore": 4939,
      "type": "classic",
      "daily": false,
      "weekly": false,
      "monthly": false
    }
  ],
  "totalAmount": 506,
  "page": 1,
  "amount": 10
}
```
