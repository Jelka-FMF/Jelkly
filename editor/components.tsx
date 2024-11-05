import { Button } from "pxt-core/react-common/components/controls/Button"
import { Checkbox } from "pxt-core/react-common/components/controls/Checkbox"
import { Input } from "pxt-core/react-common/components/controls/Input"
import { Modal } from "pxt-core/react-common/components/controls/Modal"

import * as React from "react"
import type { Root } from "react-dom/client"

/////////////////////////
// Submit Button
/////////////////////////

interface SubmitButtonProps {
    submitDialog: React.RefObject<SubmitDialog>
}

class SubmitButton extends React.Component<SubmitButtonProps> {
    constructor (props: SubmitButtonProps) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit (event: React.MouseEvent<HTMLButtonElement>) {
        this.props.submitDialog.current.showDialog()
        event.preventDefault()

    }

    render () {
        return (
            <button className="ui button icon icon-and-text primary fluid" role="menuitem" onClick={this.handleSubmit}>
                <i className="icon cloud upload icon-and-text" aria-hidden="true" role="presentation"></i>
                <span className="ui text">{lf("Submit")}</span>
            </button>
        )
    }
}

/////////////////////////
// Submit Dialog
/////////////////////////

interface SubmitDialogProps {
    projectView: pxt.editor.IProjectView;
}

interface SubmitDialogState {
    // Base Properties
    visible: boolean;
    stage: "submitForm" | "submitWaiting" | "submitSuccess" | "submitError";

    // Form Stage
    patternName: string;
    patternDescription: string;
    authorName: string;
    authorSchool: string;
    confirmed: boolean;

    // Success Stage
    shareData: pxt.editor.ShareData | null;
    copySuccessful: boolean;

    // Error Stage
    error: any | null;
}

class SubmitDialog extends React.Component<SubmitDialogProps, SubmitDialogState> {
    private defaultState: SubmitDialogState = {
        visible: false,
        stage: "submitForm",

        patternName: "",
        patternDescription: "",
        authorName: "",
        authorSchool: "",
        confirmed: false,

        shareData: null,
        copySuccessful: false,

        error: null,
    }

    constructor (props: SubmitDialogProps) {
        super(props)
        this.state = this.defaultState
        this.showDialog = this.showDialog.bind(this)
        this.hideDialog = this.hideDialog.bind(this)
        this.submitProject = this.submitProject.bind(this)
        this.handleCopyClick = this.handleCopyClick.bind(this)
        this.handleCopyBlur = this.handleCopyBlur.bind(this)
    }

    showDialog () {
        this.setState({
            ...this.defaultState,
            visible: true,
            patternName: this.props.projectView.state.projectName,
            patternDescription: "",
        })
    }

    hideDialog () {
        this.setState({
            ...this.defaultState,
            visible: false,
        })
    }

    async submitProject () {
        console.log("Current state:", this.state)

        // Show the waiting text to prevent double submits
        this.setState({ stage: "submitWaiting" })

        // Set the internal project name to the new name
        this.props.projectView.updateHeaderName(this.state.patternName)

        // Upload the project code and other contents
        const shareData = await this.props.projectView.publishAsync(this.state.patternName, undefined, true)
        console.log("Received share data:", shareData)

        // Check for errors while uploading the project
        if (shareData.error) {
            console.error("Error while sharing:", shareData.error)
            this.setState({ stage: "submitError", error: shareData.error })
            return
        }

        try {
            // Actually submit the project with its properties
            const submitData = await pxt.Cloud.privatePostAsync("submit", {
                name: this.state.patternName,
                description: this.state.patternDescription,
                author: this.state.authorName,
                school: this.state.authorSchool,
                project: shareData.url.split("/").pop(),
            }, true)
            console.log("Received submit data:", submitData)

        } catch (error) {
            // Check for errors while submitting the project
            console.error("Error while submitting:", error)
            this.setState({ stage: "submitError", error })
            return
        }

        // Display the success message when successful
        this.setState({ stage: "submitSuccess", shareData })
    }

    async handleCopyClick () {
        await navigator.clipboard.writeText(this.state.shareData.url)
        this.setState({ copySuccessful: true })
    }

    async handleCopyBlur () {
        this.setState({ copySuccessful: false })
    }

    renderSubmitForm () {
        return <>
            <div style={{ paddingBottom: "1rem" }}>
                <p>{lf("You cannot edit the pattern anymore once you submit it.")} {lf("Make sure it contains everything you want.")}</p>
                <p>{lf("All submitted patterns will be reviewed manually.")} {lf("If your pattern is accepted, it will be displayed on the Christmas tree at the Faculty of Mathematics and Physics, University of Ljubljana.")}</p>
                <p>{lf("Your name and school may be publicly displayed.")}</p>
            </div>

            <div className="project-share-info">
                <div className="project-share-content">
                    <div style={{ paddingBottom: "1rem" }}>
                        <div id="submit-pattern-name-label" className="project-share-title project-share-label">
                            {lf("Pattern Name")}
                        </div>
                        <Input
                            id="submit-project-name"
                            className="name-input"
                            ariaDescribedBy="submit-project-name-label"
                            filter=".{0,50}"
                            placeholder={lf("Enter pattern name")}
                            initialValue={this.state.patternName}
                            onChange={value => this.setState({ patternName: value })}
                        />
                    </div>

                    <div style={{ paddingBottom: "1rem" }}>
                        <div id="submit-pattern-description-label" className="project-share-title project-share-label">
                            {lf("Pattern Description")}
                        </div>
                        <Input
                            id="submit-project-description"
                            className="name-input"
                            ariaDescribedBy="submit-project-description-label"
                            filter=".{1,200}"
                            placeholder={lf("Enter pattern description")}
                            initialValue={this.state.patternDescription}
                            onChange={value => this.setState({ patternDescription: value })}
                        />
                    </div>

                    <div style={{ paddingBottom: "1rem" }}>
                        <div id="submit-author-name-label" className="project-share-title project-share-label">
                            {lf("Your Name")}
                        </div>
                        <Input
                            id="submit-author-name"
                            className="name-input"
                            ariaDescribedBy="submit-author-name-label"
                            filter=".{0,50}"
                            placeholder={lf("Enter your name")}
                            initialValue={this.state.authorName}
                            onChange={value => this.setState({ authorName: value })}
                        />
                    </div>

                    <div style={{ paddingBottom: "1rem" }}>
                        <div id="submit-author-school-label" className="project-share-title project-share-label">
                            {lf("Your School")}
                        </div>
                        <Input
                            id="submit-author-school"
                            className="name-input"
                            ariaDescribedBy="submit-author-school-label"
                            filter=".{0,100}"
                            placeholder={lf("Enter your school")}
                            initialValue={this.state.authorSchool}
                            onChange={value => this.setState({ authorSchool: value })}
                        />
                    </div>

                    <div style={{ paddingBottom: "1rem" }}>
                        <Checkbox
                            id="submit-project-confirm"
                            isChecked={this.state.confirmed}
                            onChange={value => this.setState({ confirmed: value })}
                            label={lf("I confirm that I am the pattern author and agree to its publication")} />
                    </div>

                    <div className="project-share-publish-actions">
                        <Button
                            className="primary share-publish-button"
                            title={lf("Submit")}
                            label={lf("Submit")}
                            disabled={!this.state.confirmed}
                            onClick={this.submitProject} />
                    </div>
                </div>
            </div>
        </>
    }

    renderSubmitWaiting () {
        return <>
            <p>{lf("Please wait while your pattern is being submitted...")}</p>
        </>
    }

    renderSubmitSuccess () {
        return <>
            <div style={{ paddingBottom: "1rem" }}>
                <p>{lf("Your pattern has been submitted successfully.")} {lf("It will now be manually reviewed.")}</p>
                <p>{lf("If your pattern is accepted, it will be displayed on the Christmas tree at the Faculty of Mathematics and Physics, University of Ljubljana.")}</p>
            </div>

            <div className="project-share-data">
                <div className="common-input-attached-button">
                    <Input
                        ariaDescribedBy="share-input-title"
                        ariaLabel={lf("Your shareable project link")}
                        initialValue={this.state.shareData.url}
                        readOnly={true} />
                    <Button
                        className={this.state.copySuccessful ? "green" : "primary"}
                        title={lf("Copy link")}
                        label={this.state.copySuccessful ? lf("Copied!") : lf("Copy")}
                        leftIcon="fas fa-link"
                        onClick={this.handleCopyClick}
                        onBlur={this.handleCopyBlur} />
                </div>
            </div>
        </>
    }

    renderSubmitError () {
        return <>
            <p>{lf("There was an error submitting your pattern.")} {lf("Please try again later or contact us.")}</p>
            <p style={{ fontFamily: "monospace" }}>{this.state.error.toString()}</p>
        </>
    }

    renderVisible () {
        return <Modal
            title={lf("Submit Pattern")}
            parentElement={document.getElementById("root")}
            onClose={this.hideDialog}>
            {this.state.stage === "submitForm" && this.renderSubmitForm()}
            {this.state.stage === "submitWaiting" && this.renderSubmitWaiting()}
            {this.state.stage === "submitSuccess" && this.renderSubmitSuccess()}
            {this.state.stage === "submitError" && this.renderSubmitError()}
        </Modal>
    }

    renderInvisible () {
        return <></>
    }

    render () {
        return this.state.visible ? this.renderVisible() : this.renderInvisible()
    }
}

/////////////////////////
// Render Functions
/////////////////////////

export function renderSubmitButton (rootNode: Root, submitDialogRef: React.RefObject<SubmitDialog>) {
    const submitButtonRef = React.createRef<SubmitButton>()
    const submitButtonComponent = <SubmitButton ref={submitButtonRef} submitDialog={submitDialogRef} />
    rootNode.render(<React.StrictMode>{submitButtonComponent}</React.StrictMode>)
    return submitButtonRef
}

export function renderSubmitDialog (rootNode: Root, projectView: pxt.editor.IProjectView) {
    const submitDialogRef = React.createRef<SubmitDialog>()
    const submitDialogComponent = <SubmitDialog ref={submitDialogRef} projectView={projectView} />
    rootNode.render(<React.StrictMode>{submitDialogComponent}</React.StrictMode>)
    return submitDialogRef
}
