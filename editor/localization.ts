import * as sl from "./locales/sl.json"

const locales: { [locale: string]: { [id: string]: string } } = {
    sl: sl,
}

const baseLocalizedStrings = pxtc.Util.getLocalizedStrings()
const newLocalizedStrings = locales[pxtc.Util.userLanguage()] || {}

pxtc.Util.setLocalizedStrings({ ...baseLocalizedStrings, ...newLocalizedStrings })
