CREATE DATABASE `ufo_hotspots`
USE `sighting`;
#
# Replace this with your schema :)
#

# Dump of table Car
# ------------------------------------------------------------

DROP TABLE IF EXISTS `sighting`;

CREATE TABLE `sightings` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `sighting_date_time` VARCHAR(255) NOT NULL DEFAULT '',
  `shape` varchar(255) NOT NULL DEFAULT '',
  `duration_in_seconds` VARCHAR(255) NOT NULL,
  `duration_in_hours_and_min` VARCHAR(255) NOT NULL DEFAULT '',
  `comments` VARCHAR(255) NOT NULL DEFAULT '',
  `site_location_lat_and_lng` VARCHAR(255) NOT NULL DEFAULT '',
  `lat` DECIMAL(10,7) NOT NULL DEFAULT 0.0,
  `lng` DECIMAL(10,7) NOT NULL DEFAULT 0.0,
  PRIMARY KEY (`id`)
); ENGINE=InnoDB DEFAULT CHARSET=utf8;


SELECT sightings.comments AS sighting, sightings.lat, sightings.lng, hotspots.location AS name, hotspots.lat, hotspots.lng 
FROM sightings, hotspots 
WHERE (hotspots.lat - sightings.lat) < 0 AND hotspots.lng - sightings.lng > .0005;

SELECT (hotspots.lat - sightings.lat) AS distance
  FROM sightings, hotspots
  WHERE (hotspots.lat - sightings.lat) > .005

  SELECT lat
  FROM sightings
  WHERE lat - 38.8976630 < .005 AND lat - 38.8976630 > 0;

SELECT sightings.comments,sightings.lat, hotspots.location, hotspots.lat
  FROM sightings, hotspots
  WHERE (sightings.lat - hotspots.lat) < .05 AND (sightings.lat - hotspots.lat) > 0 AND (sightings.lng - hotspots.lng) < .05 AND (sightings.lng - hotspots.lng) > 0;;

  SELECT COUNT(*) from sightings;

  38.897663, -77.036575