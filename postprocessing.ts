import { readJSON, writeCSV } from 'https://deno.land/x/flat@0.0.14/mod.ts'

/*
  {
    "created_at": "2021-06-10T23:45:53Z",
    "entry_id": 2027,
    "field1": "0.00",
    "field2": "0.23",
    "field3": "0.23",
    "field4": "6",
    "field5": "-79",
    "field6": "70",
    "field7": "30",
    "field8": "0.23"
  },
*/
type Entry = {
  "created_at": string,
  "entry_id": number,
  "field1": string,
  "field2": string,
  "field3": string,
  "field4": string,
  "field5": string,
  "field6": string,
  "field7": string,
  "field8": string
}

const filename = Deno.args[0]
const data = await readJSON(filename)

const entries = Object.values(data.feeds) as Entry[]

const csv = `postprocessed_${filename}.csv`
await writeCSV(csv, entries)
