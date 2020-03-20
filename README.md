# sunrise-api [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/sunrise-api/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/sunrise-api)

Get the sunrise and sunset times for a given location.

[![NPM Badge](https://nodei.co/npm/sunrise-api.png)](https://npmjs.com/package/sunrise-api)

## Install

```sh
npm install sunrise-api
```

## Usage

```js
const sunrise = require("sunrise-api");

(async () => {
	await sunrise(-36.8484437, 174.7600023);
	/* {
		sunrise: '2020-03-19T18:24:27+00:00',
		sunset: '2020-03-20T06:32:06+00:00',
		solarNoon: '2020-03-20T00:28:16+00:00',
		dayLength: 43659,
		civilTwilightBegin: '2020-03-19T17:58:41+00:00',
		civilTwilightEnd: '2020-03-20T06:57:52+00:00',
		nauticalTwilightBegin: '2020-03-19T17:28:29+00:00',
		nauticalTwilightEnd: '2020-03-20T07:28:04+00:00',
		astronomicalTwilightBegin: '2020-03-19T16:57:52+00:00',
		astronomicalTwilightEnd: '2020-03-20T07:58:40+00:00
	} */
})();
```

## API

### sunrise(latitude, longitude, options?)

#### latitude

Type: `number`

The Latitude of the location.

#### longitude

Type: `number`

The longitude of the location.

#### options

Type: `object`

##### date

Type: `string`
Default: `today`

Date to get the information for in the `YYYY - MM - DD` format or `today`.

## Attribution

Data provided by https://sunrise-sunset.org/api.
