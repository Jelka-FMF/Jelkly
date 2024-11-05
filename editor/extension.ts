/// <reference path="../node_modules/pxt-core/localtypings/pxteditor.d.ts" />
/// <reference path="../node_modules/pxt-core/localtypings/pxtarget.d.ts" />

import { createRoot } from "react-dom/client"
import { renderSubmitButton, renderSubmitDialog } from "./components"

pxt.BrowserUtils.isLocalHost = () => false
pxt.Cloud.apiRoot = "http://localhost:8001/editor/pxt/"

pxt.editor.initExtensionsAsync = async function (opts) {
    opts.projectView.onEditorContentLoaded = () => {
        let submitArea = document.getElementById("submitArea")
        if (!submitArea) {
            submitArea = Object.assign(document.createElement("div"), { id: "submitArea" })
            document.getElementById("root").appendChild(submitArea)
        }
        const submitDialog = renderSubmitDialog(createRoot(submitArea), opts.projectView)

        const downloadArea = document.getElementById("downloadArea")
        const submitButton = renderSubmitButton(createRoot(downloadArea), submitDialog)
    }

    return {}
}
