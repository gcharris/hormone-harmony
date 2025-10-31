import { fileURLToPath } from 'node:url'
import { createReadStream, createWriteStream } from 'node:fs'
import path from 'node:path'
import { PNG } from 'pngjs'

const root = new URL('..', import.meta.url)

const files = [
  {
    input: new URL('./photos/rithm-logo-mark.png', root),
    output: new URL('./photos/rithm-logo-mark-transparent.png', root),
  },
  {
    input: new URL('./photos/rithm-word.png', root),
    output: new URL('./photos/rithm-word-transparent.png', root),
  },
]

const toPath = (url) => fileURLToPath(url)

const isNearlyWhite = (r, g, b) => r >= 245 && g >= 245 && b >= 245

async function removeBackground({ input, output }) {
  const inputPath = toPath(input)
  const outputPath = toPath(output)

  await new Promise((resolve, reject) => {
    createReadStream(inputPath)
      .pipe(new PNG())
      .on('parsed', function handleParsed() {
        for (let idx = 0; idx < this.data.length; idx += 4) {
          const r = this.data[idx]
          const g = this.data[idx + 1]
          const b = this.data[idx + 2]

          if (isNearlyWhite(r, g, b)) {
            this.data[idx + 3] = 0
          }
        }

        this.pack()
          .pipe(createWriteStream(outputPath))
          .on('finish', resolve)
          .on('error', reject)
      })
      .on('error', reject)
  })

  console.log(`Processed ${path.basename(outputPath)}`)
}

async function main() {
  for (const file of files) {
    await removeBackground(file)
  }
  console.log('Logo processing complete.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

