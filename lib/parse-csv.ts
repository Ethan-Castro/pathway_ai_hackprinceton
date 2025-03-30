export function parseCSV(text: string) {
  try {
    // Split by lines and filter out empty lines
    const lines = text.split("\n").filter((line) => line.trim() !== "")

    if (lines.length === 0) {
      return []
    }

    // Parse headers (first line)
    const headers = lines[0].split(",").map((h) => h.trim())

    // Parse data rows (simple approach)
    return lines.slice(1).map((line) => {
      const values = line.split(",").map((v) => v.trim())

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

