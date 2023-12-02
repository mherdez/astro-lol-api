# Data Dragon

Data Dragon is our way of centralizing League of Legends game data and assets, including champions, items, runes, summoner spells, and profile icons. All of which can be used by third-party developers. You can download a compressed tarball (.tgz) for each patch that contains all assets for that patch. Updating Data Dragon after each League of Legends patch is a manual process, so it is not always updated immediately after a patch.

Latest
https://ddragon.leagueoflegends.com/cdn/dragontail-13.23.1.tgz

Patch 10.10 was uploaded as a zip archive (.zip) instead of the typical compressed tarball (.tgz)
https://ddragon.leagueoflegends.com/cdn/dragontail-10.10.5.zip

## Versions
You can find all valid Data Dragon versions in the versions file. Typically there is only a single build of Data Dragon for a given patch, however, there may be additional builds. This typically occurs when there is an error in the original build. As such, you should always use the most recent Data Dragon version for a given patch for the best results.

https://ddragon.leagueoflegends.com/api/versions.json

## Regions
Data Dragon versions are not always equivalent to the League of Legends client version in a region. You can find the version each region is using in the realms files.

https://ddragon.leagueoflegends.com/realms/na.json

## Data & Assets
Data Dragon provides two kinds of static data: data files and game assets. The data files provide raw static data on various components of the game such as summoner spells, champions, and items. The assets are images of the components described in the data files.

Data Files
The data file URLs include both a version and language code. The examples in the documentation below use version 13.23.1 and the en_US language code. If you want to view assets released in other versions or languages, replace the version or language code in the URL.

Languages
Data Dragon provides localized versions of each of the data files in languages supported by the client. Below is a list of the languages supported by Data Dragon, which you can also retrieve from the Data Dragon languages file.

https://ddragon.leagueoflegends.com/cdn/languages.json

| CODE  |	LANGUAGE                              |
|-------|---------------------------------------|
| cs_CZ |	Czech (Czech Republic)                |
| el_GR |	Greek (Greece)                        |
| pl_PL |	Polish (Poland)                       |
| ro_RO |	Romanian (Romania)                    |
| hu_HU |	Hungarian (Hungary)                   |
| en_GB |	English (United Kingdom)              |
| de_DE |	German (Germany)                      |
| es_ES |	Spanish (Spain)                       |
| it_IT |	Italian (Italy)                       |
| fr_FR |	French (France)                       |
| ja_JP |	Japanese (Japan)                      |
| ko_KR |	Korean (Korea)                        |
| es_MX |	Spanish (Mexico)                      |
| es_AR |	Spanish (Argentina)                   |
| pt_BR |	Portuguese (Brazil)                   |
| en_US |	English (United States)               |
| en_AU |	English (Australia)                   |
| ru_RU |	Russian (Russia)                      |
| tr_TR |	Turkish (Turkey)                      |
| ms_MY |	Malay (Malaysia)                      |
| en_PH |	English (Republic of the Philippines) |
| en_SG |	English (Singapore)                   |
| th_TH |	Thai (Thailand)                       |
| vi_VN |	Vietnamese (Viet Nam)                 |
| id_ID |	Indonesian (Indonesia)                |
| zh_MY |	Chinese (Malaysia)                    |
| zh_CN |	Chinese (China)                       |
| zh_TW |	Chinese (Taiwan)                      |
|       |                                       |



## Champions
There are two kinds of data files for champions. The champion.json data file returns a list of champions with a brief summary. The individual champion JSON files contain additional data for each champion.

https://ddragon.leagueoflegends.com/cdn/13.23.1/data/en_US/champion.json
https://ddragon.leagueoflegends.com/cdn/13.23.1/data/en_US/champion/Aatrox.json

Interpreting Spell Text
Lore, tips, stats, spells, and even recommended items are all part of the data available for every champion. Champion spell tooltips often have placeholders for variables that are signified by double curly brackets. Here are some tips about interpreting these placeholders:

{{ eN }} placeholders
Placeholders are replaced by the corresponding item in the array given in the effectBurn field. For example, {{ eN }} is a placeholder for spell["effectBurn"]["1"].

~~~js
/* Amumu's Bandage Toss */
"tooltip": "Launches a bandage in a direction. If it hits an enemy unit, Amumu pulls himself to them, dealing {{ e1 }} <scaleAP>(+{{ a1 }})</scaleAP> magic damage and stunning for {{ e2 }} second.",
"effectBurn": [
  null,
  "80/130/180/230/280",
  "1",
  "1350",
  ...
]
~~~

{{ aN }} or {{ fN }} placeholders
These placeholders are slightly more complicated. Their values can be found in the vars field. First, find the object in the vars array whose key matches the variable. For example, for {{ a1 }}, find the object in the vars array whose key field has the value a1. The value for this variable is the coeff field in that same object.

~~~js
/* Amumu's Bandage Toss */
"tooltip": "Launches a bandage in a direction. If it hits an enemy unit, Amumu pulls himself to them, dealing {{ e1 }} <scaleAP>(+{{ a1 }})</scaleAP> magic damage and stunning for {{ e2 }} second.",
"vars": [
  {
    "key": "a1",
    "link": "spelldamage",
    "coeff": [
      0.7
    ]
  }
]
~~~

Under a champions spells there are two fields effect and effectBurn. effect contains an array of an ability's values per level where, in contrast, effectBurn contains a string of all the values at every level. (e.g., "effect": [30,60,90,120,150] vs "effectBurn": "30/60/90/120/150"). You might notice how the effect and effectBurn arrays have a null value in the 0 index. This is because those values are taken from designer-facing files where arrays are 1-based. JSON is 0-based so a null is inserted to make it easier to verify the JSON files are correct.

~~~js
"effect": [
  null,
  [ 120, 150, 180, 210, 240 ],
  [ 50, 70, 90, 110, 130 ],
  [ 25, 35, 45, 55, 65 ],
  [ 0.2, 0.2, 0.2, 0.2, 0.2 ],
  [ 50, 60, 70, 80, 90 ]
],
"effectBurn": [
  "",
  "120/150/180/210/240",
  "50/70/90/110/130",
  "25/35/45/55/65",
  "0.2",
  "50/60/70/80/90"
]
~~~

Calculating Spell Costs
In most cases a spell costs mana or energy, you will find those related costs under the cost and costBurn fields. When a spell costs health, the cost will be found in the effect and effectBurn fields. You can determine how to calculate the cost of a spell by looking at the resource field, which should point you to the variable being used to display the cost of a spell.

~~~js
/* Soraka's Astral Infusion */
"resource": "10% Max Health, {{ cost }} Mana",
"cost": [ 20, 25, 30, 35, 40 ],
"costBurn": "20/25/30/35/40"
/* Shen's Vorpal Blade */
"resource": "{{ cost }} Energy",
"cost": [ 60, 60, 60, 60, 60 ],
"costBurn": "60"
/* Dr. Mundo's Infected Cleaver */
"resource": "{{ e3 }} Health",
"cost": [ 0, 0, 0, 0, 0 ],
"costBurn": "0",
"effect": [
  null,
  [ 80, 130, 180, 230, 280 ],
  [ 15, 18, 21, 23, 25 ],
  [ 50, 60, 70, 80, 90 ],
  [ 40, 40, 40, 40, 40 ],
  [ 2, 2, 2, 2, 2 ]
],
"effectBurn": [
  "",
  "80/130/180/230/280",
  "15/18/21/23/25",
  "50/60/70/80/90",
  "40",
  "2"
]
~~~

---

### Champion Splash Assets
https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg

The number at the end of the filename corresponds to the skin number. You can find the skin number for each skin in the file for each individual champion in Data Dragon. Each champion contains a skins field and the skin number is indicated by the num field.

~~~js
/* Aatrox (id: 266) */
"skins": [
  {
    "id": 266000,
    "name": "default",
    "num": 0
  },
  {
    "id": 266001,
    "name": "Justicar Aatrox",
    "num": 1
  },
  {
    "id": 266002,
    "name": "Mecha Aatrox",
    "num": 2
  }
]
~~~

### Champion Loading Screen Assets
https://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg

The number at the end of the filename follows the same convention described in the Champion Splash Art.

### Champion Square Assets
https://ddragon.leagueoflegends.com/cdn/13.23.1/img/champion/Aatrox.png

### Champion Passive Assets
https://ddragon.leagueoflegends.com/cdn/13.23.1/img/passive/Anivia_P.png

You can find the filename for each champion's passive in the individual champion Data Dragon file. The JSON contains a passive field with image data. The filename is indicated by the full field.

~~~js
/* Anivia (id: 34) */
"passive": {
  "name": "Rebirth",
  "description": "Upon dying, Anivia will revert into an egg. If the egg can survive for six seconds, she is gloriously reborn.",
  "image": {
    "full": "Anivia_P.png",
    "sprite": "passive0.png",
    "group": "passive",
    "x": 240,
    "y": 0,
    "w": 48,
    "h": 48
    }
  }
}
~~~

Champion Ability Assets
https://ddragon.leagueoflegends.com/cdn/13.23.1/img/spell/FlashFrost.png

You can find the file name for each champion's abilities in the individual champion Data Dragon file. The spells field contains an array of objects which includes image data. The filename is indicated by the full field.

~~~js
/* Anivia (id: 34) */
"spells": [
  {
    "id": "FlashFrost",
    "name": "Flash Frost",
    "description": "Anivia brings her wings together and summons a sphere of ice that flies towards her opponents, chilling and damaging anyone in its path. When the sphere explodes it does moderate damage in a radius, stunning anyone in the area.",
    "image": {
      "full": "FlashFrost.png",
      "sprite": "spell0.png",
      "group": "spell",
      "x": 192,
      "y": 144,
      "w": 48,
      "h": 48
    }
  },
  ...
]
~~~

---

# Items
Data Dragon also provides the same level of detail for every item in the game. Within Data Dragon, you can find info such as the item's description, purchase value, sell value, items it builds from, items it builds into, and stats granted from the item.

https://ddragon.leagueoflegends.com/cdn/13.23.1/data/en_US/item.json

The effect field holds an array of variables used extra scripts. For example, on Doran's shield you see the following data in the effect field, which corresponds to the 8 damage that is blocked from champion attacks.

"effect": {
  "Effect1Amount": "8"
}
Stat Naming Conventions
A list of possible stats that you gain from items, runes, or masteries can also be found in Data Dragon. You can find a list of stats gained by the item, rune, or mastery by searching for the stats field. Below are some tips when it comes to understanding what a stat means and how they are calculated:

Mod stands for modifier.
An "r" at the beginning of the stat means those stats can be found on runes.
Displaying flat vs. percentage vs. per 5 etc. is case-by-case. it will always be the same for a given stat. For example, PercentAttackSpeedMod will always be multiplied by 100 and displayed it as a percentage.
Stats are called flat if you add them together, and percent if you multiply them together.
Tenacity from an item does NOT stack but tenacity from a rune DOES stack.
Item Assets
https://ddragon.leagueoflegends.com/cdn/13.23.1/img/item/1001.png
The number appended to the item filename corresponds to the item id. You can find a list of the items ids in the item data file.

## Other
Summoner Spells
https://ddragon.leagueoflegends.com/cdn/13.23.1/data/en_US/summoner.json
https://ddragon.leagueoflegends.com/cdn/13.23.1/img/spell/SummonerFlash.png

Profile Icons
https://ddragon.leagueoflegends.com/cdn/13.23.1/data/en_US/profileicon.json
https://ddragon.leagueoflegends.com/cdn/13.23.1/img/profileicon/685.png

Minimaps
https://ddragon.leagueoflegends.com/cdn/6.8.1/img/map/map11.png
The number appended to the map filename corresponds to the map id. You can find a list of the map ids in the Map Names section of Game Constants.

Sprites
https://ddragon.leagueoflegends.com/cdn/13.23.1/img/sprite/spell0.png

Scoreboard Icons (version 5.5.1)
https://ddragon.leagueoflegends.com/cdn/5.5.1/img/ui/champion.png
https://ddragon.leagueoflegends.com/cdn/5.5.1/img/ui/items.png
https://ddragon.leagueoflegends.com/cdn/5.5.1/img/ui/minion.png
https://ddragon.leagueoflegends.com/cdn/5.5.1/img/ui/score.png
https://ddragon.leagueoflegends.com/cdn/5.5.1/img/ui/spells.png

