export const CopyToClipboard = async (text: string) => {
  navigator.clipboard.writeText(text)
}