# /v1/getSends

`GET` the sends of a user

## Parameters

None

## Response

A `sends` object with the following properties:

| Name                 | Type     | Description                                   |
| -------------------- | -------- | --------------------------------------------- |
| `levelId`            | `number` | The ID of the layout.                         |
| `totalSuggests`      | `number` | The total amount of suggestions by mods.      |
| `suggestedFeatured`  | `number` | The amount of featured suggestions by mods.   |
| `suggestedEpic`      | `number` | The amount of epic suggestions by mods.       |
| `suggestedLegendary` | `number` | The amount of legendary suggestions by mods.  |
| `averageDifficulty`  | `number` | The average difficulty of the layout by mods. |

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
      "levelId": 97671390,
      "totalSuggests": 2,
      "suggestedFeatured": 2,
      "suggestedEpic": 0,
      "suggestedLegendary": 0,
      "averageDifficulty": 9
    },
    {
      "levelId": 127858441,
      "totalSuggests": 2,
      "suggestedFeatured": 2,
      "suggestedEpic": 0,
      "suggestedLegendary": 0,
      "averageDifficulty": 30
    },
    {
      "levelId": 96243146,
      "totalSuggests": 2,
      "suggestedFeatured": 2,
      "suggestedEpic": 0,
      "suggestedLegendary": 0,
      "averageDifficulty": 25
    },
    {
      "levelId": 133108913,
      "totalSuggests": 3,
      "suggestedFeatured": 2,
      "suggestedEpic": 1,
      "suggestedLegendary": 0,
      "averageDifficulty": 6.67
    },
    {
      "levelId": 133120867,
      "totalSuggests": 2,
      "suggestedFeatured": 2,
      "suggestedEpic": 0,
      "suggestedLegendary": 0,
      "averageDifficulty": 10
    },
    {
      "levelId": 132791352,
      "totalSuggests": 2,
      "suggestedFeatured": 0,
      "suggestedEpic": 0,
      "suggestedLegendary": 0,
      "averageDifficulty": 15
    },
    {
      "levelId": 133163748,
      "totalSuggests": 2,
      "suggestedFeatured": 1,
      "suggestedEpic": 1,
      "suggestedLegendary": 0,
      "averageDifficulty": 30
    },
    {
      "levelId": 117111607,
      "totalSuggests": 2,
      "suggestedFeatured": 1,
      "suggestedEpic": 1,
      "suggestedLegendary": 0,
      "averageDifficulty": 20
    },
    {
      "levelId": 113834124,
      "totalSuggests": 2,
      "suggestedFeatured": 1,
      "suggestedEpic": 1,
      "suggestedLegendary": 0,
      "averageDifficulty": 25
    },
    {
      "levelId": 76787587,
      "totalSuggests": 3,
      "suggestedFeatured": 2,
      "suggestedEpic": 1,
      "suggestedLegendary": 0,
      "averageDifficulty": 30
    }
  ],
  "totalAmount": 346,
  "page": 1,
  "amount": 10
}
```

## Failed Response

```
Missing accountId or username
```

```
User not found
```
