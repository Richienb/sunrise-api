const test = require("ava")
const sunrise = require(".")

test("main", async (t) => {
	t.deepEqual(await sunrise(-36.8484437, 174.7600023, {
		date: "2020-03-20",
	}), {
		sunrise: "2020-03-19T18:24:27+00:00",
		sunset: "2020-03-20T06:32:06+00:00",
		solarNoon: "2020-03-20T00:28:16+00:00",
		dayLength: 43659,
		civilTwilightBegin: "2020-03-19T17:58:41+00:00",
		civilTwilightEnd: "2020-03-20T06:57:52+00:00",
		nauticalTwilightBegin: "2020-03-19T17:28:29+00:00",
		nauticalTwilightEnd: "2020-03-20T07:28:04+00:00",
		astronomicalTwilightBegin: "2020-03-19T16:57:52+00:00",
		astronomicalTwilightEnd: "2020-03-20T07:58:40+00:00",
	})
})
