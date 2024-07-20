# Change Log
All notable changes to the "vscode-clock" extension will be documented in this file.

## [v1.2.2]
- changed the extension activation to start when VSCode Startup finishes, this will not slow VSCode Startup
- updated README with the config changes

## [v1.2.0]
- extensions contributes a new timezone configuration that allows for remote users to set a timezone for their clock
- update dependencies

## [v1.1.0]
- update all the dependencies
- changed the default time format to `hh:mm a` removing the seconds.

### Migration (if you may)
- if you want to see the seconds, you can change the extension default value for `clock.datetimeFormat` to `hh:mm:ss a`

- ## [v1.0.1]
- Initial release
