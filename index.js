"use strict"

const ky = require("ky-universal")
const camelcaseKeys = require("camelcase-keys")
const { assert } = require("@sindresorhus/is")

module.exports = async (latitude, longitude, { date = "today" } = {}) => {
	assert.number(latitude)
	assert.number(longitude)
	assert.string(date)

	const { status, results } = await ky("https://api.sunrise-sunset.org/json", {
		searchParams: {
			lat: latitude,
			lng: longitude,
			date,
			formatted: 0,
		},
	}).json()

	if (status === "INVALID_REQUEST") throw new Error("Either latitude or longitude parameters are missing or invalid.")
	else if (status === "INVALID_DATE") throw new Error("The date parameter is missing or invalid.")
	else if (status === "UNKNOWN_ERROR") throw new Error("The request could not be processed due to a server error.")
	else if (status !== "OK") throw new Error(status)

	return camelcaseKeys(results)
}
