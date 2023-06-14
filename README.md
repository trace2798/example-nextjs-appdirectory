# Passage + Next.js 13.4 App Router Example


## Getting Started

### Either fork the repo or directly clone it

### Prerequisites

**Node version 14.x**

### To directly clone the repo

```shell
git clone https://github.com/passageidentity/example-nextjs.git
```
Then

```shell
cd 03-Login-app-directory
```

### Install packages

```shell
npm i
```

### Setup .env file

```js
NEXT_PUBLIC_PASSAGE_APP_ID=
# Note that because this example uses the passage-node package, an API key is required.
# You can retrieve an API key for your application by going to the Dashboard and selecting Settings, then API Keys.
NEXT_PUBLIC_PASSAGE_API_KEY=
```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
| `build`         | To build your application                |
| `start`         | Starts a production  instance of the app |
