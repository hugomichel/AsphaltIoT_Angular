#!/usr/bin/env node

/*
This file is part of Asphalt
  Asphalt is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
 Asphalt is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
    You should have received a copy of the GNU General Public License
    along with Asphalt.  If not, see <http://www.gnu.org/licenses/>.
Copyright © 2016 4Loop
*/
/**
 * On a fresh clone, the local platforms/ and plugins/ directories will be
 * missing, so ensure they get created before the first platform is added.
 */
var fs = require('fs');
var path = require('path');

var platformsDir = path.resolve(__dirname, '../../platforms');
var pluginsDir = path.resolve(__dirname, '../../plugins');

try {
  fs.mkdirSync(platformsDir, function (err) {
    if (err) { console.error(err); }
  });
} catch(ex) {}

try {
  fs.mkdirSync(pluginsDir, function (err) {
    if (err) { console.error(err); }
  });
} catch(ex) {}
