import GenericTheme from "@/components/forms/theme_generic"
import "@/components/tailwind.components.css"

export default ({ data, error, loading, lang, mode, serviceCode }: any) => {
  const Theme = (() => {
    return GenericTheme
  })()

  return (
    <Theme form={data} error={error} loading={loading} lang={lang} mode={mode} />
  )
}