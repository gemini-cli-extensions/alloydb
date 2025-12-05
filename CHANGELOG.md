# Changelog

## [0.1.7](https://github.com/gemini-cli-extensions/alloydb/compare/0.1.6...0.1.7) (2025-12-05)


### Bug Fixes

* **tools/alloydb-postgres-list-tables:** Exclude google\_ml schema from list\_tables ([genai-toolbox#​2046](https://redirect.github.com/googleapis/genai-toolbox/issues/2046)) ([a03984c](https://redirect.github.com/googleapis/genai-toolbox/commit/a03984cc15254c928f30085f8fa509ded6a79a0c)) ([921f64e](https://github.com/gemini-cli-extensions/alloydb/commit/921f64ef26954dae0a747d4bfb30c85f9aee6d53))
* **tools/alloydbcreateuser:** Remove duplication of project praram ([genai-toolbox#​2028](https://redirect.github.com/googleapis/genai-toolbox/issues/2028)) ([730ac6d](https://redirect.github.com/googleapis/genai-toolbox/commit/730ac6d22805fd50b4a675b74c1865f4e7689e7c)) ([921f64e](https://github.com/gemini-cli-extensions/alloydb/commit/921f64ef26954dae0a747d4bfb30c85f9aee6d53))

## [0.1.6](https://github.com/gemini-cli-extensions/alloydb/compare/0.1.5...0.1.6) (2025-11-19)


### Features

* **tools/postgres:** Add `long_running_transactions`, `list_locks` and `replication_stats` tools ([#1751](https://github.com/googleapis/genai-toolbox/issues/1751)) ([5abad5d](https://github.com/googleapis/genai-toolbox/commit/5abad5d56c6cc5ba86adc5253b948bf8230fa830))


### Bug Fixes

* **tools:** Check for query execution error for pgxpool.Pool ([genai-toolbox#​1969](https://redirect.github.com/googleapis/genai-toolbox/issues/1969)) ([2bff138](https://redirect.github.com/googleapis/genai-toolbox/commit/2bff1384a3570ef46bc03ebebc507923af261987)) ([1da5746](https://github.com/gemini-cli-extensions/alloydb/commit/1da57464893c69c063e73f72b4bad342c5a3efd8))
* **tools/alloydbgetinstance:** Remove parameter duplication ([genai-toolbox#​1993](https://redirect.github.com/googleapis/genai-toolbox/issues/1993)) ([0e269a1](https://redirect.github.com/googleapis/genai-toolbox/commit/0e269a1d125eed16a51ead27db4398e6e48cb948)) ([1da5746](https://github.com/gemini-cli-extensions/alloydb/commit/1da57464893c69c063e73f72b4bad342c5a3efd8))

## [0.1.5](https://github.com/gemini-cli-extensions/alloydb/compare/0.1.4...0.1.5) (2025-11-18)


### Features

* **source/alloydb, source/cloud-sql-postgres,source/cloud-sql-mysql,source/cloud-sql-mssql:** Use project from env for alloydb and cloud sql control plane tools ([genai-toolbox#​1588](https://redirect.github.com/googleapis/genai-toolbox/issues/1588)) ([12bdd95](https://redirect.github.com/googleapis/genai-toolbox/commit/12bdd954597e49d3ec6b247cc104584c5a4d1943)) ([7ca7d46](https://github.com/gemini-cli-extensions/alloydb/commit/7ca7d4691fd47ad3081363b288681da0851d9985))
* Added prompt support for toolbox ([genai-toolbox#​1798](https://redirect.github.com/googleapis/genai-toolbox/issues/1798)) ([cd56ea4](https://redirect.github.com/googleapis/genai-toolbox/commit/cd56ea44fbdd149fcb92324e70ee36ac747635db)) ([7ca7d46](https://github.com/gemini-cli-extensions/alloydb/commit/7ca7d4691fd47ad3081363b288681da0851d9985))

## [0.1.4](https://github.com/gemini-cli-extensions/alloydb/compare/0.1.3...0.1.4) (2025-11-07)


### Features

* **tools/alloydbainl:** update AlloyDB AI NL statement order ([genai-toolbox#​1753](https://redirect.github.com/googleapis/genai-toolbox/issues/1753)) ([45933f1](https://github.com/gemini-cli-extensions/alloydb/commit/45933f10e4daafb177bd59c069f8880d7a485ed5))


### Bug Fixes

* **tools/alloydbainl:** AlloyDB AI NL execute\_sql statement order ([genai-toolbox#​1753](https://redirect.github.com/googleapis/genai-toolbox/issues/1753)) ([9723cad](https://redirect.github.com/googleapis/genai-toolbox/commit/9723cadaa181a76d8fdda65a6254f6c887c3cf57)) ([45933f1](https://github.com/gemini-cli-extensions/alloydb/commit/45933f10e4daafb177bd59c069f8880d7a485ed5))

## [0.1.3](https://github.com/gemini-cli-extensions/alloydb/compare/0.1.2...0.1.3) (2025-10-17)


### Bug Fixes

* update context for install instructions ([#70](https://github.com/gemini-cli-extensions/alloydb/issues/70)) ([2889fe5](https://github.com/gemini-cli-extensions/alloydb/commit/2889fe5243b7c121c5b979a16dea1a60a8c4465b))

## [0.1.2](https://github.com/gemini-cli-extensions/alloydb/compare/0.1.1...0.1.2) (2025-10-13)


### Features

* **deps:** update dependency googleapis/genai-toolbox to v0.17.0 to Support PSC connection ([#66](https://github.com/gemini-cli-extensions/alloydb/issues/66)) ([1280920](https://github.com/gemini-cli-extensions/alloydb/commit/12809204b2e1053bc8e1a101879580b2857d50f6))

## [0.1.1](https://github.com/gemini-cli-extensions/alloydb/compare/0.1.0...0.1.1) (2025-09-30)


### Features

* additional instructions for the context file ([#51](https://github.com/gemini-cli-extensions/alloydb/issues/51)) ([cef0fb6](https://github.com/gemini-cli-extensions/alloydb/commit/cef0fb68dedb400225347adf3a16cb320ff28d20))
* **deps:** update dependency googleapis/genai-toolbox to v0.16.0 ([#42](https://github.com/gemini-cli-extensions/alloydb/issues/42)) ([6a25cb6](https://github.com/gemini-cli-extensions/alloydb/commit/6a25cb699264d415eb75f4bfdd25b325a372425e))
* standardize mcp server names ([#49](https://github.com/gemini-cli-extensions/alloydb/issues/49)) ([ab738fc](https://github.com/gemini-cli-extensions/alloydb/commit/ab738fc7f669dc3712777cec969b41084b7e5224))
* update context file to use full table name ([dc565f4](https://github.com/gemini-cli-extensions/alloydb/commit/dc565f427db7611c70155109cfd4010591784af4))
* Update context to recommend other observability extension ([#34](https://github.com/gemini-cli-extensions/alloydb/issues/34)) ([874b148](https://github.com/gemini-cli-extensions/alloydb/commit/874b1489989c5945c81b0eeef1592bb65693f6d6))


## 0.1.0 (2025-09-20)


### Features

* create the AlloyDB Extension ([#21](https://github.com/gemini-cli-extensions/alloydb/issues/21)) ([b71218b](https://github.com/gemini-cli-extensions/alloydb/commit/b71218ba1977b906043621f23cf7fff05937e833))
