/**
 * Copyright 2017 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const minimist = require('minimist');
const Logger = require('./util/Logger');

class Cli {
  constructor(logger = new Logger()) {
    this.logger = logger;
  }

  run(args) {
    args = minimist(args);
    const command = args._[0] || 'help';

    switch (command) {
      case 'help':
        return require('./cmds/help')(args, this.logger);
      case 'version':
        return require('./cmds/version')(args, this.logger);
      case 'update-cache':
        return require('./cmds/updateCache')(args, this.logger);
      default:
        return Promise.reject(new Error(`"${command}" is not a valid command!`));
    }
  }
}

module.exports = Cli;
