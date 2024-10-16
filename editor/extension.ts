/// <reference path="../node_modules/pxt-core/localtypings/pxteditor.d.ts" />
/// <reference path="../node_modules/pxt-core/localtypings/pxtarget.d.ts" />

pxt.editor.initExtensionsAsync = async function (opts) {
    opts.projectView.onEditorContentLoaded = () => {
        const downloadArea = document.getElementById("downloadArea")

        while (downloadArea.firstChild) {
            downloadArea.removeChild(downloadArea.firstChild)
        }

        const saveButton = document.createElement("button")
        saveButton.className = "ui button icon icon-and-text primary fluid"
        saveButton.setAttribute("role", "menuitem")

        const saveButtonIcon = document.createElement("i")
        saveButtonIcon.className = "icon save icon-and-text"
        saveButtonIcon.setAttribute("aria-hidden", "true")
        saveButtonIcon.setAttribute("role", "presentation")

        const saveButtonText = document.createElement("span")
        saveButtonText.className = "ui text"
        saveButtonText.textContent = lf("Save")

        saveButton.onclick = opts.projectView.saveAndCompile.bind(opts.projectView)

        saveButton.appendChild(saveButtonIcon)
        saveButton.appendChild(saveButtonText)
        downloadArea.appendChild(saveButton)
    }

    return {}
}
