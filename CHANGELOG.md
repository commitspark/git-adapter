# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Changed
- Change model and interface names to be use case agnostic
- Update dependencies

## [0.11.0] - 2024-06-14
### Added
- Metadata field to allow tracking incoming references to an entry
- Regex to check entry IDs for invalid characters

### Changed
- Content entry data is now optional to support cases where no data is needed

## [0.10.0] - 2023-12-12
### Changed
- Reduce number of files included in NPM package

## [0.9.0] - 2023-12-12
### Changed
- Change folder defaults to common base folder `commitspark`
- Add eslint

### Fixed
- Fix build process to include only relevant files

## [0.8.0] - 2023-05-12
### Changed
- Rename organization

## [0.7.0] - 2023-04-28
### Changed
- Replace model classes with interfaces to prevent polluting data objects with prototype function

## [0.6.0] - 2022-12-13
### Changed
- Change constants to support file path and entries folder path as repository options

## [0.5.0] - 2022-11-01
### Changed
- Move NPM package to organization namespace

## [0.4.0] - 2022-10-25
### Changed
- Change repository options setter to async
- Clarify that content read operations use commit hash instead of ref

## [0.3.1] - 2022-10-05
### Fixed
- Fix NPM package content

## [0.3.0] - 2022-10-05
### Fixed
- Fix insufficient type definitions exposed by strict types
- Fix errors when using code as NPM package

## [0.2.0] - 2022-10-05

### Added
- Initial release
