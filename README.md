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
* **Entry IDs and subfolders**: The ID of an entry is the path of its file relative to the entry folder, without file
  extension and with `/` as separator, e.g. `blog/2024/hello` for `commitspark/entries/blog/2024/hello.yaml`.
  Subfolders have no meaning beyond being part of the ID; in particular, they do not determine the entry type.
    * **Entry files**: All `.yaml` files in the entry folder and its subfolders at any depth are entries, except for
      files or folders whose name starts with `.` and everything they contain. Symbolic links are not entries.
    * **ID validation**: Adapters must reject invalid entry IDs passed to them, using `validateEntryId()` or
      equivalent rules, so that IDs can never address files outside the entry folder.
    * **Case sensitivity**: Entry IDs are case-sensitive, like paths in Git. Repositories whose IDs differ only in
      case cannot be checked out correctly on case-insensitive file systems.
    * **Nesting depth**: Adapters that cannot support a nesting depth must throw an error instead of ignoring
      entries.
* **Entry hashes**: The hash returned for an entry should be the Git blob hash of the entry file. Any other hash
  is acceptable as long as equal hashes imply equal file content.
* **Errors**: Adapters should throw known errors using the `GitAdapterError` class with one of the predefined
  `ErrorCode` values so that callers are able to handle errors meaningfully.

# License

The code in this repository is licensed under the permissive ISC license (see [LICENSE](LICENSE)).
