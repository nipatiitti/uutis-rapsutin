import * as fs from 'fs/promises'
import { AlmaNewsPreview } from './types/AlmaNewsPreview'

const uniqueArticles = new Map<string, AlmaNewsPreview>()

const namesOfFiles = ['Vihre-162.json', 'Vihreät-82.json', 'Vihreiden-162.json']

for (const nameOfFile of namesOfFiles) {
  const text = await fs.readFile(`./Iltalehti-Artikkelit/${nameOfFile}`, 'utf-8')
  const articles = JSON.parse(text) as AlmaNewsPreview[]
  for (const article of articles) {
    uniqueArticles.set(article.article_id, article)
  }
}

console.log(uniqueArticles.size)

await fs.writeFile('Kaikki-uniikit.json', JSON.stringify([...uniqueArticles.values()], null, 2))
