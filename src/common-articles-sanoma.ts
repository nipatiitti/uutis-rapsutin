import * as fs from 'fs/promises'
import { SanomaNewsPreview } from './types/SanomaNewsPreview'

const uniqueArticles = new Map<number, SanomaNewsPreview>()

const namesOfFiles = [
  'Vihre-2023-2017-HS.json',
  'Vihre-2017-2015-HS.json',
  'Vihreat-4443-2023-2015-HS.json',
  'Vihreiden-5482-2023-2015-HS.json',
]

for (const nameOfFile of namesOfFiles) {
  const text = await fs.readFile(`./HS-Artikkelit/${nameOfFile}`, 'utf-8')
  const articles = JSON.parse(text) as SanomaNewsPreview[]
  for (const article of articles) {
    uniqueArticles.set(article.id, article)
  }
}

console.log(uniqueArticles.size)

await fs.writeFile('Vihre-Vihreät-Vihreiden-uniikit.json', JSON.stringify([...uniqueArticles.values()], null, 2))
