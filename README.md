# Botfuel Yeoman Generator
Creating chatbots using Botfuel made easy

## Installation

First, install [Yeoman](http://yeoman.io) and generator-botfuel using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g botfuel-yeoman-generator
```

<!-- Then generate your new project:

```bash
yo botfuel
``` -->


## Usage

Generate a new Dialog with built-in entities. Default type is 
prompt :
```bash
	yo botfuel:dialog travel [location:city date:time] [--type={void, base, default, qna, confirmation, prompt}]
```
Generate a new View :
```bash
	yo botfuel:view travel
```
Generate a new Dialog and a new View with 1 command :
```bash
	yo botfuel:intent travel [location:city date:time]
```
Generate a new Extractor. Default type is ws :
```bash
	yo botfuel:extractor xaxis [ws, corpus]
```
