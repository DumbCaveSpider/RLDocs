# /v1/getLayouts

`POST` a request to return a list of layouts based on the parameters

## Parameters

### Post Parameters

| Parameter    | Description                                          | Required |
| ------------ | ---------------------------------------------------- | -------- |
| `type`       | The type of the layout. (classic or platformer)      | No       |
| `award`      | Whether the layout is awarded. (1 = true)            | No       |
| `featured`   | Whether the layout is featured. (1 = true)           | No       |
| `epic`       | Whether the layout is epic. (1 = true)               | No       |
| `oldest`     | Whether the layout is ordered by oldest. (1 = true)  | No       |
| `username`   | The username of the creator.                         | No       |
| `query`      | The query to search for.                             | No       |
| `difficulty` | The difficulty of the layout. (1-10, 15, 20, 25, 30) | No       |
| `amount`     | The number of layouts to retrieve per page. (1-100)  | No       |
| `page`       | The page number of the layouts to retrieve.          | No       |

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
      "levelId": 132984844,
      "levelName": "Easy level 8",
      "creatorUsername": "QSUSLI",
      "creatorAccountId": 26815828,
      "difficulty": 4,
      "featured": 0,
      "featuredScore": 0,
      "type": "platformer",
      "daily": false,
      "weekly": false,
      "monthly": false
    },
    {
      "levelId": 132868344,
      "levelName": "dark tides",
      "creatorUsername": "abelonches",
      "creatorAccountId": 14674697,
      "difficulty": 15,
      "featured": 1,
      "featuredScore": 1125,
      "type": "classic",
      "daily": false,
      "weekly": false,
      "monthly": false
    },
    {
      "levelId": 100099891,
      "levelName": "love letter",
      "creatorUsername": "Tanginess",
      "creatorAccountId": 6168832,
      "difficulty": 10,
      "featured": 1,
      "featuredScore": 3345,
      "type": "classic",
      "daily": false,
      "weekly": false,
      "monthly": false
    },
    {
      "levelId": 132993882,
      "levelName": "Nautilus",
      "creatorUsername": "flamealtaccount",
      "creatorAccountId": 22429042,
      "difficulty": 25,
      "featured": 1,
      "featuredScore": 3345,
      "type": "classic",
      "daily": false,
      "weekly": false,
      "monthly": false
    },
    {
      "levelId": 132751448,
      "levelName": "evil",
      "creatorUsername": "azakl",
      "creatorAccountId": 2963835,
      "difficulty": 25,
      "featured": 2,
      "featuredScore": 4620,
      "type": "classic",
      "daily": false,
      "weekly": false,
      "monthly": false
    },
    {
      "levelId": 102599083,
      "levelName": "Goner",
      "creatorUsername": "Demerrr",
      "creatorAccountId": 10600515,
      "difficulty": 25,
      "featured": 2,
      "featuredScore": 4609,
      "type": "classic",
      "daily": false,
      "weekly": false,
      "monthly": false
    },
    {
      "levelId": 131689063,
      "levelName": "Arcade Dwellers",
      "creatorUsername": "Cyan8129",
      "creatorAccountId": 30176270,
      "difficulty": 15,
      "featured": 0,
      "featuredScore": 0,
      "type": "classic",
      "daily": false,
      "weekly": false,
      "monthly": false
    },
    {
      "levelId": 109999108,
      "levelName": "Layout Prodigy",
      "creatorUsername": "whitmp4",
      "creatorAccountId": 1581235,
      "difficulty": 20,
      "featured": 1,
      "featuredScore": 3311,
      "type": "classic",
      "daily": false,
      "weekly": false,
      "monthly": false
    },
    {
      "levelId": 112687411,
      "levelName": "F A T A L",
      "creatorUsername": "CroumbLaGouche",
      "creatorAccountId": 23697591,
      "difficulty": 15,
      "featured": 0,
      "featuredScore": 0,
      "type": "classic",
      "daily": false,
      "weekly": false,
      "monthly": false
    },
    {
      "levelId": 132619182,
      "levelName": "5 Rooms Of Habiltys",
      "creatorUsername": "heitor26",
      "creatorAccountId": 20967860,
      "difficulty": 8,
      "featured": 0,
      "featuredScore": 0,
      "type": "platformer",
      "daily": false,
      "weekly": false,
      "monthly": false
    }
  ],
  "totalAmount": 962,
  "page": 1,
  "amount": 10
}
```

## Failed Response

```
Method not allowed
```

Returns when using other method than **POST**
