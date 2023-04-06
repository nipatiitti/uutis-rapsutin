# Uutis-rapsutin

This is a collection of Typescript files and functions to scrape Sanoma Media's and Alma Media's news sites and to store them in JSON files.

## Usage

Set the urls, query parameters etc. correctly in the `src/<media-name>-index.ts` file you want to use

```
yarn start-<media-name>
```

Or to comb for unique articles provide file names to the `src/common-articles-<media-name>.ts` file you want to use and run it with

```
yarn ts-node src/common-articles-<media-name>.ts
```
