export async function fetchCSV(url: string) {
  try {
    const response = await fetch(url, { cache: "no-store" })

    if (!response.ok) {
      console.error(`Failed to fetch CSV: ${response.status} ${response.statusText}`)
      return []
    }

    const text = await response.text()
    return parseCSV(text)
  } catch (error) {
    console.error("Error fetching CSV:", error)
    return []
  }
}

function parseCSV(text: string) {
  try {
    // Split by lines and filter out empty lines
    const lines = text.split("\n").filter((line) => line.trim() !== "")

    if (lines.length === 0) {
      return []
    }

    // Parse headers (first line)
    const headers = lines[0].split(",").map((h) => h.trim())

    // Parse data rows
    return lines.slice(1).map((line) => {
      // Handle commas within quoted fields
      const values = []
      let inQuotes = false
      let currentValue = ""

      for (let i = 0; i < line.length; i++) {
        const char = line[i]

        if (char === '"' && (i === 0 || line[i - 1] !== "\\")) {
          inQuotes = !inQuotes
        } else if (char === "," && !inQuotes) {
          values.push(currentValue.trim())
          currentValue = ""
        } else {
          currentValue += char
        }
      }

      // Add the last value
      values.push(currentValue.trim())

      // Create object with headers as keys
      const row: Record<string, string> = {}
      headers.forEach((header, index) => {
        row[header] = values[index] || ""
      })

      return row
    })
  } catch (error) {
    console.error("Error parsing CSV:", error)
    return []
  }
}

