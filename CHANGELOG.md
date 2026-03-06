# Changelog

## [0.2.0](https://github.com/gemini-cli-extensions/alloydb/compare/0.1.11...0.2.0) (2026-03-06)


### ⚠ BREAKING CHANGES

* Update configuration file v2 ([genai-toolbox#​2369](https://redirect.github.com/googleapis/genai-toolbox/issues/2369))([293c1d6](https://redirect.github.com/googleapis/genai-toolbox/commit/293c1d6889c39807855ba5e01d4c13ba2a4c50ce))
* Update/add detailed telemetry for mcp endpoint compliant with OTEL semantic convention ([genai-toolbox#​1987](https://redirect.github.com/googleapis/genai-toolbox/issues/1987)) ([478a0bd](https://redirect.github.com/googleapis/genai-toolbox/commit/478a0bdb59288c1213f83862f95a698b4c2c0aab))

### Features

* **cli/invoke:** Add support for direct tool invocation from CLI ([genai-toolbox#​2353](https://redirect.github.com/googleapis/genai-toolbox/issues/2353)) ([6e49ba4](https://redirect.github.com/googleapis/genai-toolbox/commit/6e49ba436ef2390c13feaf902b29f5907acffb57)) ([a8055b3](https://github.com/gemini-cli-extensions/alloydb/commit/a8055b30ad88d326c1546de90eac42ff5e03b2fd))
* **cli/skills:** Add support for generating agent skills from toolset ([genai-toolbox#​2392](https://redirect.github.com/googleapis/genai-toolbox/issues/2392)) ([80ef346](https://redirect.github.com/googleapis/genai-toolbox/commit/80ef34621453b77bdf6a6016c354f102a17ada04)) ([a8055b3](https://github.com/gemini-cli-extensions/alloydb/commit/a8055b30ad88d326c1546de90eac42ff5e03b2fd))
* **cloud-logging-admin:** Add source, tools, integration test and docs ([genai-toolbox#​2137](https://redirect.github.com/googleapis/genai-toolbox/issues/2137)) ([252fc30](https://redirect.github.com/googleapis/genai-toolbox/commit/252fc3091af10d25d8d7af7e047b5ac87a5dd041)) ([a8055b3](https://github.com/gemini-cli-extensions/alloydb/commit/a8055b30ad88d326c1546de90eac42ff5e03b2fd))
* **cockroachdb:** Add CockroachDB integration with cockroach-go ([genai-toolbox#​2006](https://redirect.github.com/googleapis/genai-toolbox/issues/2006)) ([1fdd99a](https://redirect.github.com/googleapis/genai-toolbox/commit/1fdd99a9b609a5e906acce414226ff44d75d5975)) ([a8055b3](https://github.com/gemini-cli-extensions/alloydb/commit/a8055b30ad88d326c1546de90eac42ff5e03b2fd))
* **dataproc:** Add dataproc source and list/get clusters/jobs tools ([genai-toolbox#​2407](https://redirect.github.com/googleapis/genai-toolbox/issues/2407)) ([cc05e57](https://redirect.github.com/googleapis/genai-toolbox/commit/cc05e5745d1c25a6088702b827cd098250164b7e)) ([a8055b3](https://github.com/gemini-cli-extensions/alloydb/commit/a8055b30ad88d326c1546de90eac42ff5e03b2fd))
* **prebuiltconfigs/alloydb-omni:** Implement Alloydb omni dataplane tools ([genai-toolbox#​2340](https://redirect.github.com/googleapis/genai-toolbox/issues/2340)) ([e995349](https://redirect.github.com/googleapis/genai-toolbox/commit/e995349ea0756c700d188b8f04e9459121219f0c)) ([a8055b3](https://github.com/gemini-cli-extensions/alloydb/commit/a8055b30ad88d326c1546de90eac42ff5e03b2fd))
* **server:** Add Tool call error categories ([genai-toolbox#​2387](https://redirect.github.com/googleapis/genai-toolbox/issues/2387)) ([32cb4db](https://redirect.github.com/googleapis/genai-toolbox/commit/32cb4db712d27579c1bf29e61cbd0bed02286c28)) ([a8055b3](https://github.com/gemini-cli-extensions/alloydb/commit/a8055b30ad88d326c1546de90eac42ff5e03b2fd))
* **ui:** Make tool list panel resizable ([genai-toolbox#​2253](https://redirect.github.com/googleapis/genai-toolbox/issues/2253)) ([276cf60](https://redirect.github.com/googleapis/genai-toolbox/commit/276cf604a2bb41861639ed6881557e38dd97a614)) ([a8055b3](https://github.com/gemini-cli-extensions/alloydb/commit/a8055b30ad88d326c1546de90eac42ff5e03b2fd))
* Add polling system to dynamic reloading ([genai-toolbox#​2466](https://redirect.github.com/googleapis/genai-toolbox/issues/2466)) ([fcaac9b](https://redirect.github.com/googleapis/genai-toolbox/commit/fcaac9bb957226ee3db1baea24330f337ba88ab7)) ([a8055b3](https://github.com/gemini-cli-extensions/alloydb/commit/a8055b30ad88d326c1546de90eac42ff5e03b2fd))
* Added basic template for sdks doc migrate ([genai-toolbox#​1961](https://redirect.github.com/googleapis/genai-toolbox/issues/1961)) ([87f2eaf](https://redirect.github.com/googleapis/genai-toolbox/commit/87f2eaf79cdecca7b939151e1543eccf2f812a69)) ([a8055b3](https://github.com/gemini-cli-extensions/alloydb/commit/a8055b30ad88d326c1546de90eac42ff5e03b2fd))
* Update configuration file v2 ([genai-toolbox#​2369](https://redirect.github.com/googleapis/genai-toolbox/issues/2369))([293c1d6](https://redirect.github.com/googleapis/genai-toolbox/commit/293c1d6889c39807855ba5e01d4c13ba2a4c50ce)) ([a8055b3](https://github.com/gemini-cli-extensions/alloydb/commit/a8055b30ad88d326c1546de90eac42ff5e03b2fd))
* Update/add detailed telemetry for mcp endpoint compliant with OTEL semantic convention ([genai-toolbox#​1987](https://redirect.github.com/googleapis/genai-toolbox/issues/1987)) ([478a0bd](https://redirect.github.com/googleapis/genai-toolbox/commit/478a0bdb59288c1213f83862f95a698b4c2c0aab)) ([a8055b3](https://github.com/gemini-cli-extensions/alloydb/commit/a8055b30ad88d326c1546de90eac42ff5e03b2fd))


### Bug Fixes

* **ci:** Add path for forked PR unit test runs ([genai-toolbox#​2540](https://redirect.github.com/googleapis/genai-toolbox/issues/2540)) ([04dd2a7](https://redirect.github.com/googleapis/genai-toolbox/commit/04dd2a77603c7babf01da724dfb77808e3f25fe5)) ([a8055b3](https://github.com/gemini-cli-extensions/alloydb/commit/a8055b30ad88d326c1546de90eac42ff5e03b2fd))
* **dataplex:** Capture GCP HTTP errors in MCP Toolbox ([genai-toolbox#​2347](https://redirect.github.com/googleapis/genai-toolbox/issues/2347)) ([1d7c498](https://redirect.github.com/googleapis/genai-toolbox/commit/1d7c4981164c34b4d7bc8edecfd449f57ad11e15)) ([a8055b3](https://github.com/gemini-cli-extensions/alloydb/commit/a8055b30ad88d326c1546de90eac42ff5e03b2fd))
* **docs/adk:** Resolve dependency duplication ([genai-toolbox#​2418](https://redirect.github.com/googleapis/genai-toolbox/issues/2418)) ([4d44abb](https://redirect.github.com/googleapis/genai-toolbox/commit/4d44abb4638926ca50b0fa4dcf10a03e7fab657f)) ([a8055b3](https://github.com/gemini-cli-extensions/alloydb/commit/a8055b30ad88d326c1546de90eac42ff5e03b2fd))
* **docs/langchain:** Fix core at 0.3.0 and align compatible dependencies ([genai-toolbox#​2426](https://redirect.github.com/googleapis/genai-toolbox/issues/2426)) ([36edfd3](https://redirect.github.com/googleapis/genai-toolbox/commit/36edfd3d506e839c092d04cbca1799b5ebc38160)) ([a8055b3](https://github.com/gemini-cli-extensions/alloydb/commit/a8055b30ad88d326c1546de90eac42ff5e03b2fd))
* **oracle:** Enable DML operations and resolve incorrect array type error ([genai-toolbox#​2323](https://redirect.github.com/googleapis/genai-toolbox/issues/2323)) ([72146a4](https://redirect.github.com/googleapis/genai-toolbox/commit/72146a4b1605bcdd3e1038106bfb1f899e677e39)) ([a8055b3](https://github.com/gemini-cli-extensions/alloydb/commit/a8055b30ad88d326c1546de90eac42ff5e03b2fd))
* **server/mcp:** Guard nil dereference in sseManager.get ([genai-toolbox#​2557](https://redirect.github.com/googleapis/genai-toolbox/issues/2557)) ([e534196](https://redirect.github.com/googleapis/genai-toolbox/commit/e534196303c2b8d9b6e599ac25add337e6fc9b8f)), closes [genai-toolbox#​2548](https://redirect.github.com/googleapis/genai-toolbox/issues/2548) ([a8055b3](https://github.com/gemini-cli-extensions/alloydb/commit/a8055b30ad88d326c1546de90eac42ff5e03b2fd))
* **tests:** Resolve LlamaIndex dependency conflict in JS quickstart ([genai-toolbox#​2597](https://redirect.github.com/googleapis/genai-toolbox/issues/2597)) ([ac11f5a](https://redirect.github.com/googleapis/genai-toolbox/commit/ac11f5af9c7bcf228d667e1b8e08b5dc49ad91a0)) ([a8055b3](https://github.com/gemini-cli-extensions/alloydb/commit/a8055b30ad88d326c1546de90eac42ff5e03b2fd))
* **tests/postgres:** Implement uuid-based isolation and reliable resource cleanup ([genai-toolbox#​2377](https://redirect.github.com/googleapis/genai-toolbox/issues/2377)) ([8a96fb1](https://redirect.github.com/googleapis/genai-toolbox/commit/8a96fb1a8874baa3688e566f3dea8a0912fcf2df)) ([a8055b3](https://github.com/gemini-cli-extensions/alloydb/commit/a8055b30ad88d326c1546de90eac42ff5e03b2fd))
* **tests/postgres:** Restore list\_schemas test and implement dynamic owner ([genai-toolbox#​2521](https://redirect.github.com/googleapis/genai-toolbox/issues/2521)) ([7041e79](https://redirect.github.com/googleapis/genai-toolbox/commit/7041e797347f337d6f7f44ca051ae31acd58babe)) ([a8055b3](https://github.com/gemini-cli-extensions/alloydb/commit/a8055b30ad88d326c1546de90eac42ff5e03b2fd))
* Deflake alloydb omni ([genai-toolbox#​2431](https://redirect.github.com/googleapis/genai-toolbox/issues/2431)) ([62b8309](https://redirect.github.com/googleapis/genai-toolbox/commit/62b830987d65c3573214d04e50742476097ee9e9)) ([a8055b3](https://github.com/gemini-cli-extensions/alloydb/commit/a8055b30ad88d326c1546de90eac42ff5e03b2fd))
* Enforce required validation for explicit null parameter values ([genai-toolbox#​2519](https://redirect.github.com/googleapis/genai-toolbox/issues/2519)) ([d5e9512](https://redirect.github.com/googleapis/genai-toolbox/commit/d5e9512a237e658f9b9127fdd8c174ec023c3310)) ([a8055b3](https://github.com/gemini-cli-extensions/alloydb/commit/a8055b30ad88d326c1546de90eac42ff5e03b2fd))
* Surface Dataplex API errors in MCP results ([genai-toolbox#​2347](https://redirect.github.com/googleapis/genai-toolbox/pull/2347))([1d7c498](https://redirect.github.com/googleapis/genai-toolbox/commit/1d7c4981164c34b4d7bc8edecfd449f57ad11e15)) ([a8055b3](https://github.com/gemini-cli-extensions/alloydb/commit/a8055b30ad88d326c1546de90eac42ff5e03b2fd))

## [0.1.11](https://github.com/gemini-cli-extensions/alloydb/compare/0.1.10...0.1.11) (2026-02-24)


### Bug Fixes

* remove broken keychain support for password ([#127](https://github.com/gemini-cli-extensions/alloydb/issues/127)) ([65746bb](https://github.com/gemini-cli-extensions/alloydb/commit/65746bb1203afaf4af4e0edd5ce255f428488309))

## [0.1.10](https://github.com/gemini-cli-extensions/alloydb/compare/0.1.9...0.1.10) (2026-01-28)


### Features

* add Configuration settings ([#108](https://github.com/gemini-cli-extensions/alloydb/issues/108)) ([4ec5205](https://github.com/gemini-cli-extensions/alloydb/commit/4ec52055445e917371fe130a2e5054df5b75eca0))
* **deps:** update dependency googleapis/genai-toolbox to v0.26.0 ([#109](https://github.com/gemini-cli-extensions/alloydb/issues/109)) ([7fa79c2](https://github.com/gemini-cli-extensions/alloydb/commit/7fa79c2c2caf49498190bc59e5712a2837b18aa8))

## [0.1.9](https://github.com/gemini-cli-extensions/alloydb/compare/0.1.8...0.1.9) (2026-01-13)


### Bug Fixes

* **tools/alloydb-wait-for-operation:** Fix connection message generation ([genai-toolbox#​2228](https://redirect.github.com/googleapis/genai-toolbox/issues/2228)) ([7053fbb](https://redirect.github.com/googleapis/genai-toolbox/commit/7053fbb1953653143d39a8510916ea97a91022a6)) ([177e29e](https://github.com/gemini-cli-extensions/alloydb/commit/177e29e7f836e93d8ca5932c6941e99ee34f7faf))
* **tools/alloydbainl:** Only add psv when NL Config Param is defined ([genai-toolbox#​2265](https://redirect.github.com/googleapis/genai-toolbox/issues/2265)) ([ef8f3b0](https://redirect.github.com/googleapis/genai-toolbox/commit/ef8f3b02f2f38ce94a6ba9acf35d08b9469bef4e)) ([177e29e](https://github.com/gemini-cli-extensions/alloydb/commit/177e29e7f836e93d8ca5932c6941e99ee34f7faf))

## [0.1.8](https://github.com/gemini-cli-extensions/alloydb/compare/0.1.7...0.1.8) (2025-12-15)


### Bug Fixes

* List tables tools null fix ([genai-toolbox#​2107](https://redirect.github.com/googleapis/genai-toolbox/issues/2107)) ([2b45266](https://redirect.github.com/googleapis/genai-toolbox/commit/2b452665983154041d4cd0ed7d82532e4af682eb)) ([e8c6640](https://github.com/gemini-cli-extensions/alloydb/commit/e8c6640d0d552bee841a1e59557cf2cd31a9b753))

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
