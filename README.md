# Map of boardgames

This is a map of 4000+ boardgames. Each dot is a boardgame. Dots are close to each other if they have a lot of common reviewers.

## How was it made?

I was heavily inspired by [Anvaka](https://github.com/Anvaka) with his [map of github](https://anvaka.github.io/map-of-github/#2/0/0), so I will paraphrase him: 

```
The first step was to fetch who gave stars to which repositories. For this I used a public data set of github activity events on 
Google BigQuery, considering only events between Jan 2020 and March 2023. This gave me more than 350 million stars.
(Side note: Mind blowing to think that Milky Way has more than 100 billion stars)

In the second phase I computed exact [Jaccard Similarity](https://en.wikipedia.org/wiki/Jaccard_index) between each repository. 
For my home computer's 24GB RAM this was too much, however an AWS EC2 instance with 512GB of RAM chewed through it in a few hours.
(Side note: I tried other similarities too, but Jaccard gave the most believable results)

In the third phase I used a few clustering algorithms to split repositories together. I liked [Leiden clustering](https://www.nature.com/articles/s41598-019-41695-z)
the best and ended up with 1000+ clusters.

In the fourth phase I used my own [ngraph.forcelayout](https://github.com/anvaka/ngraph.forcelayout) to compute layouts of nodes
inside clusters, and a separate configuration to get global layout of clusters.

In the fifth phase we need to render the map. Unlike my previous projects, I didn't want to reinvent the wheel, so
ended up using [maplibre](https://maplibre.org/). All I had to do was convert my data into GeoJSON format, generate tiles
with [tippecanoe](https://github.com/mapbox/tippecanoe) and configure the browsing experience.
```
My personal contribution was to retrieve the data from BGG, retro-engineer the process made by Anvaka, make the advanced search feature and add color and shape to the points in the map to convey more informations
## Country names

Country labels were generated with an educated guess, if you want to suggest betters one go for it !

## Support

Thanks again to [Anvaka](https://github.com/Anvaka) who inspired me to create this project for one of my favorite hobby.