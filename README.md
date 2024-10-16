# Jelkly

Blockly editor for creating and editing Jelka FMF patterns.

## Issue Tracking

Please add an issue if you discover an (unreported) bug.

## Local Server Setup

The local server lets you run the editor and serve the documentation from your own computer.
It is meant for a single developer used and not designed to serve the editor to a large amount of users.

### Installation

1. Install [Node.js](https://nodejs.org/) 20 or higher.

2. Clone this repository.

   ```
   git https://github.com/Jelka-FMF/Jelkly.git
   cd Jelkly
   ```

3. Install the Jelkly dependencies.

   ```
   npm install
   ```

### Running

Run this command from inside the repository to open a local web server.

```
npm run serve
```

If the local server opens in the wrong browser, make sure to copy the URL containing the local token.
Otherwise, the editor will not be able to load the projects.

If you want to speed up the build, you can use the ``rebundle`` option, which skips building and simply refreshes the target information.

```
npm run serve -- --rebundle
```

### Cleaning

Sometimes, your built folder might be in a bad state, clean it and try again.

```
npm run clean
```

### Updates

Make sure to pull changes from all repos regularly.
More instructions are at https://github.com/Microsoft/pxt#running-a-target-from-localhost.

## Repos

The Jelkly target depends on several other repos. The main ones are:

- https://github.com/Microsoft/pxt, the PXT framework
- https://github.com/Microsoft/pxt-common-packages, common APIs across various MakeCode editors

## Trademarks

Microsoft and the Microsoft Logo are registered trademarks of Microsoft Corporation.
They can only be used for the purposes described in and in accordance with Microsoft’s Trademark and Brand guidelines published at https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general.aspx.
This project is not associated with Microsoft Corporation.
