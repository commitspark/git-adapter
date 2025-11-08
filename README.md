# Introduction

[Commitspark](https://commitspark.com) is a set of tools to manage structured data with Git
through a GraphQL API.

This package provides interfaces that abstract away concrete Git repository storage locations from
the [Commitspark GraphQL API](https://github.com/commitspark/graphql-api) implementation. Use these interfaces
to build a custom Git repository storage that is not already provided by one of the pre-built adapters offered
by Commitspark.

# Adapter Conventions

The following conventions should be applied in adapter implementations:

* **File paths**: In Git repositories, all Commitspark data should be stored under `commitspark/` by default.
    * **Schema storage**: The GraphQL schema file should be stored under `commitspark/schema/schema.graphql`.
    * **Entry storage**: Entries should be stored under `commitspark/entries/`.
* **Entry file type**: Entry data should be stored using YAML files with extension `.yaml`.
* **Errors**: Adapters should throw known errors using the `GitAdapterError` class with one of the predefined
  `ErrorCode` values so that callers are able to handle errors meaningfully.

# License

The code in this repository is licensed under the permissive ISC license (see [LICENSE](LICENSE)).
