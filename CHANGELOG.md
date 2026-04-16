# Changelog

## [0.2.0](https://github.com/gemini-cli-extensions/alloydb/compare/0.1.11...0.2.0) (2026-04-16)


### ⚠ BREAKING CHANGES

* update repo name ([mcp-toolbox#​2968](https://redirect.github.com/googleapis/mcp-toolbox/issues/2968))
* release upgraded docsite ([mcp-toolbox#​2831](https://redirect.github.com/googleapis/mcp-toolbox/issues/2831))
* **http:** sanitize non-2xx error output ([mcp-toolbox#​2654](https://redirect.github.com/googleapis/mcp-toolbox/issues/2654))
* add a new `enable-api` flag ([mcp-toolbox#​2846](https://redirect.github.com/googleapis/mcp-toolbox/issues/2846))
* remove deprecations and update tools-file flag ([mcp-toolbox#​2806](https://redirect.github.com/googleapis/mcp-toolbox/issues/2806))
* **source/alloydb:** restructure prebuilt toolsets  ([mcp-toolbox#​2639](https://redirect.github.com/googleapis/mcp-toolbox/issues/2639))
* telemetry metrics updates as per semantic convention ([mcp-toolbox#​2566](https://redirect.github.com/googleapis/mcp-toolbox/issues/2566))
* Update configuration file v2 ([genai-toolbox#​2369](https://redirect.github.com/googleapis/genai-toolbox/issues/2369))([293c1d6](https://redirect.github.com/googleapis/genai-toolbox/commit/293c1d6889c39807855ba5e01d4c13ba2a4c50ce))
* Update/add detailed telemetry for mcp endpoint compliant with OTEL semantic convention ([genai-toolbox#​1987](https://redirect.github.com/googleapis/genai-toolbox/issues/1987)) ([478a0bd](https://redirect.github.com/googleapis/genai-toolbox/commit/478a0bdb59288c1213f83862f95a698b4c2c0aab))

### Features

* **auth:** Add generic `authService` type for MCP ([mcp-toolbox#​2619](https://redirect.github.com/googleapis/mcp-toolbox/issues/2619)) ([f6678f8](https://redirect.github.com/googleapis/mcp-toolbox/commit/f6678f8e29aa3346f4f73ce33cec37b4753d6947)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* **auth:** Add Protected Resource Metadata endpoint ([mcp-toolbox#​2698](https://redirect.github.com/googleapis/mcp-toolbox/issues/2698)) ([b53dcf2](https://redirect.github.com/googleapis/mcp-toolbox/commit/b53dcf20694599f8b961c501a532bd122630b6f4)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* **auth:** Support manual PRM override ([mcp-toolbox#​2717](https://redirect.github.com/googleapis/mcp-toolbox/issues/2717)) ([283e4e3](https://redirect.github.com/googleapis/mcp-toolbox/commit/283e4e33172571e4b20fa6a3ea0cfc632a565e6a)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* **auth:** Support opaque token validation for `generic` authService ([mcp-toolbox#​2944](https://redirect.github.com/googleapis/mcp-toolbox/issues/2944)) ([c924701](https://redirect.github.com/googleapis/mcp-toolbox/commit/c924701adede95877594423d78b7ae72fe0b9c82)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* **bigquery:** Add conversational analytics tools for Data Agents ([mcp-toolbox#​2517](https://redirect.github.com/googleapis/mcp-toolbox/issues/2517)) ([2490a4b](https://redirect.github.com/googleapis/mcp-toolbox/commit/2490a4b4fb3c9232270f6f4347b8556d2d6e0390)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* **cli:** Add migrate subcommand ([mcp-toolbox#​2679](https://redirect.github.com/googleapis/mcp-toolbox/issues/2679)) ([12171f7](https://redirect.github.com/googleapis/mcp-toolbox/commit/12171f7a02bcd34ce647db10abdb79bb2dac7ace)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* **cli:** Add serve subcommand ([mcp-toolbox#​2550](https://redirect.github.com/googleapis/mcp-toolbox/issues/2550)) ([1e2c7c7](https://redirect.github.com/googleapis/mcp-toolbox/commit/1e2c7c7804c67bebf5e2ee9b67c6feb6f05292fd)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* **cli/invoke:** Add support for direct tool invocation from CLI ([genai-toolbox#​2353](https://redirect.github.com/googleapis/genai-toolbox/issues/2353)) ([6e49ba4](https://redirect.github.com/googleapis/genai-toolbox/commit/6e49ba436ef2390c13feaf902b29f5907acffb57)) ([a8055b3](https://github.com/gemini-cli-extensions/alloydb/commit/a8055b30ad88d326c1546de90eac42ff5e03b2fd))
* **cli/skills:** Add support for generating agent skills from toolset ([genai-toolbox#​2392](https://redirect.github.com/googleapis/genai-toolbox/issues/2392)) ([80ef346](https://redirect.github.com/googleapis/genai-toolbox/commit/80ef34621453b77bdf6a6016c354f102a17ada04)) ([a8055b3](https://github.com/gemini-cli-extensions/alloydb/commit/a8055b30ad88d326c1546de90eac42ff5e03b2fd))
* **cloud-logging-admin:** Add source, tools, integration test and docs ([genai-toolbox#​2137](https://redirect.github.com/googleapis/genai-toolbox/issues/2137)) ([252fc30](https://redirect.github.com/googleapis/genai-toolbox/commit/252fc3091af10d25d8d7af7e047b5ac87a5dd041)) ([a8055b3](https://github.com/gemini-cli-extensions/alloydb/commit/a8055b30ad88d326c1546de90eac42ff5e03b2fd))
* **cloudsqlpg:** Run `SELECT 1` after successful connection attempt ([mcp-toolbox#​2997](https://redirect.github.com/googleapis/mcp-toolbox/issues/2997)) ([6ed9700](https://redirect.github.com/googleapis/mcp-toolbox/commit/6ed9700e15f08b31e65eb0afa605f4a8ea937e66)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* **cockroachdb:** Add CockroachDB integration with cockroach-go ([genai-toolbox#​2006](https://redirect.github.com/googleapis/genai-toolbox/issues/2006)) ([1fdd99a](https://redirect.github.com/googleapis/genai-toolbox/commit/1fdd99a9b609a5e906acce414226ff44d75d5975)) ([a8055b3](https://github.com/gemini-cli-extensions/alloydb/commit/a8055b30ad88d326c1546de90eac42ff5e03b2fd))
* **dataplex:** Add support for lookup context tool. ([mcp-toolbox#​2744](https://redirect.github.com/googleapis/mcp-toolbox/issues/2744)) ([facb69d](https://redirect.github.com/googleapis/mcp-toolbox/commit/facb69d01fe0c7ff9e2e1c40804dd00762e508a6)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* **dataproc:** Add dataproc source and list/get clusters/jobs tools ([genai-toolbox#​2407](https://redirect.github.com/googleapis/genai-toolbox/issues/2407)) ([cc05e57](https://redirect.github.com/googleapis/genai-toolbox/commit/cc05e5745d1c25a6088702b827cd098250164b7e)) ([a8055b3](https://github.com/gemini-cli-extensions/alloydb/commit/a8055b30ad88d326c1546de90eac42ff5e03b2fd))
* **embeddingModel:** Add Backend API selection fields ([mcp-toolbox#​2592](https://redirect.github.com/googleapis/mcp-toolbox/issues/2592)) ([912aa9e](https://redirect.github.com/googleapis/mcp-toolbox/commit/912aa9edd7bc3ce932828003fbd67d1a3b9c2348)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* **http:** sanitize non-2xx error output ([mcp-toolbox#​2654](https://redirect.github.com/googleapis/mcp-toolbox/issues/2654)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* **prebuiltconfigs/alloydb-omni:** Implement Alloydb omni dataplane tools ([genai-toolbox#​2340](https://redirect.github.com/googleapis/genai-toolbox/issues/2340)) ([e995349](https://redirect.github.com/googleapis/genai-toolbox/commit/e995349ea0756c700d188b8f04e9459121219f0c)) ([a8055b3](https://github.com/gemini-cli-extensions/alloydb/commit/a8055b30ad88d326c1546de90eac42ff5e03b2fd))
* **server:** Add Tool call error categories ([genai-toolbox#​2387](https://redirect.github.com/googleapis/genai-toolbox/issues/2387)) ([32cb4db](https://redirect.github.com/googleapis/genai-toolbox/commit/32cb4db712d27579c1bf29e61cbd0bed02286c28)) ([a8055b3](https://github.com/gemini-cli-extensions/alloydb/commit/a8055b30ad88d326c1546de90eac42ff5e03b2fd))
* **skill:** Attach user agent metadata for generated skill ([mcp-toolbox#​2697](https://redirect.github.com/googleapis/mcp-toolbox/issues/2697)) ([9598a6a](https://redirect.github.com/googleapis/mcp-toolbox/commit/9598a6a32597b9c9abdb0f20c06d86a01b0d011f)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* **skill:** One skill per toolset ([mcp-toolbox#​2733](https://redirect.github.com/googleapis/mcp-toolbox/issues/2733)) ([5b85c65](https://redirect.github.com/googleapis/mcp-toolbox/commit/5b85c65960dba9bfaf4cadca6d44532a153976e1)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* **skill:** Update skill generation logic ([mcp-toolbox#​2646](https://redirect.github.com/googleapis/mcp-toolbox/issues/2646)) ([c233eee](https://redirect.github.com/googleapis/mcp-toolbox/commit/c233eee98cd9621526cb286245f3874f5bd6e7da)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* **skills:** Add additional-notes flag to generate skills command ([mcp-toolbox#​2696](https://redirect.github.com/googleapis/mcp-toolbox/issues/2696)) ([73bf962](https://redirect.github.com/googleapis/mcp-toolbox/commit/73bf962459b76872f748248bb5e289be232a30b6)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* **skills:** Add Claude Code support to generated scripts ([mcp-toolbox#​2966](https://redirect.github.com/googleapis/mcp-toolbox/issues/2966)) ([a1609e1](https://redirect.github.com/googleapis/mcp-toolbox/commit/a1609e10a2eaf4ea68eae36acec3eed355b8a052)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* **skills:** Add codex user agent ([mcp-toolbox#​2973](https://redirect.github.com/googleapis/mcp-toolbox/issues/2973)) ([070e939](https://redirect.github.com/googleapis/mcp-toolbox/commit/070e9399c02f088d43175ce6bf343378beb7f584)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* **skills:** Tool invocation via npx ([mcp-toolbox#​2916](https://redirect.github.com/googleapis/mcp-toolbox/issues/2916)) ([377dc5b](https://redirect.github.com/googleapis/mcp-toolbox/commit/377dc5b00145a0044eef39314dd6b0ef5966fcd7)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* **source/alloydb:** restructure prebuilt toolsets  ([mcp-toolbox#​2639](https://redirect.github.com/googleapis/mcp-toolbox/issues/2639)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* **source/alloydb:** Restructure prebuilt toolsets  ([mcp-toolbox#​2639](https://redirect.github.com/googleapis/mcp-toolbox/issues/2639)) ([5f3f063](https://redirect.github.com/googleapis/mcp-toolbox/commit/5f3f063fc7335e47e35fa1a4f93616abbd7959d5)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* **ui:** Make tool list panel resizable ([genai-toolbox#​2253](https://redirect.github.com/googleapis/genai-toolbox/issues/2253)) ([276cf60](https://redirect.github.com/googleapis/genai-toolbox/commit/276cf604a2bb41861639ed6881557e38dd97a614)) ([a8055b3](https://github.com/gemini-cli-extensions/alloydb/commit/a8055b30ad88d326c1546de90eac42ff5e03b2fd))
* **ui:** Update to use `/mcp` endpoint ([mcp-toolbox#​2829](https://redirect.github.com/googleapis/mcp-toolbox/issues/2829)) ([c3059c2](https://redirect.github.com/googleapis/mcp-toolbox/commit/c3059c233502a1e99abb4d87e4b9bfe7c6ea7a4a)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* add a new `enable-api` flag ([mcp-toolbox#​2846](https://redirect.github.com/googleapis/mcp-toolbox/issues/2846)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* Add a new `enable-api` flag ([mcp-toolbox#​2846](https://redirect.github.com/googleapis/mcp-toolbox/issues/2846)) ([7a070da](https://redirect.github.com/googleapis/mcp-toolbox/commit/7a070dae4f1833671649ea605f36659675d402a9)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* Add MCP tool annotations to all remaining tools ([mcp-toolbox#​2221](https://redirect.github.com/googleapis/mcp-toolbox/issues/2221)) ([ea09db9](https://redirect.github.com/googleapis/mcp-toolbox/commit/ea09db90ce3ed78225dc246cedefd30064a88fad)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* Add polling system to dynamic reloading ([genai-toolbox#​2466](https://redirect.github.com/googleapis/genai-toolbox/issues/2466)) ([fcaac9b](https://redirect.github.com/googleapis/genai-toolbox/commit/fcaac9bb957226ee3db1baea24330f337ba88ab7)) ([a8055b3](https://github.com/gemini-cli-extensions/alloydb/commit/a8055b30ad88d326c1546de90eac42ff5e03b2fd))
* add support for skills and validation workflows ([#144](https://github.com/gemini-cli-extensions/alloydb/issues/144)) ([b4ec2f8](https://github.com/gemini-cli-extensions/alloydb/commit/b4ec2f880afbd5bc4404022a10e61a609ef7cbdc))
* Add user agent to embeddings generation ([mcp-toolbox#​2572](https://redirect.github.com/googleapis/mcp-toolbox/issues/2572)) ([287251a](https://redirect.github.com/googleapis/mcp-toolbox/commit/287251a0cfed4d24617e5d0d957026a94f65d820)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* Added basic template for sdks doc migrate ([genai-toolbox#​1961](https://redirect.github.com/googleapis/genai-toolbox/issues/1961)) ([87f2eaf](https://redirect.github.com/googleapis/genai-toolbox/commit/87f2eaf79cdecca7b939151e1543eccf2f812a69)) ([a8055b3](https://github.com/gemini-cli-extensions/alloydb/commit/a8055b30ad88d326c1546de90eac42ff5e03b2fd))
* release upgraded docsite ([mcp-toolbox#​2831](https://redirect.github.com/googleapis/mcp-toolbox/issues/2831)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* remove deprecations and update tools-file flag ([mcp-toolbox#​2806](https://redirect.github.com/googleapis/mcp-toolbox/issues/2806)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* Remove deprecations and update tools-file flag ([mcp-toolbox#​2806](https://redirect.github.com/googleapis/mcp-toolbox/issues/2806)) ([ab64c95](https://redirect.github.com/googleapis/mcp-toolbox/commit/ab64c9514a467d92a4547eda5a4ecdd08f86b0c9)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* telemetry metrics updates as per semantic convention ([mcp-toolbox#​2566](https://redirect.github.com/googleapis/mcp-toolbox/issues/2566)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* Telemetry metrics updates as per semantic convention ([mcp-toolbox#​2566](https://redirect.github.com/googleapis/mcp-toolbox/issues/2566)) ([131d764](https://redirect.github.com/googleapis/mcp-toolbox/commit/131d764f895c14908e29914b3c0c273d91a2654f)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* Update configuration file v2 ([genai-toolbox#​2369](https://redirect.github.com/googleapis/genai-toolbox/issues/2369))([293c1d6](https://redirect.github.com/googleapis/genai-toolbox/commit/293c1d6889c39807855ba5e01d4c13ba2a4c50ce)) ([a8055b3](https://github.com/gemini-cli-extensions/alloydb/commit/a8055b30ad88d326c1546de90eac42ff5e03b2fd))
* update repo name ([mcp-toolbox#​2968](https://redirect.github.com/googleapis/mcp-toolbox/issues/2968)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* Update/add detailed telemetry for mcp endpoint compliant with OTEL semantic convention ([genai-toolbox#​1987](https://redirect.github.com/googleapis/genai-toolbox/issues/1987)) ([478a0bd](https://redirect.github.com/googleapis/genai-toolbox/commit/478a0bdb59288c1213f83862f95a698b4c2c0aab)) ([a8055b3](https://github.com/gemini-cli-extensions/alloydb/commit/a8055b30ad88d326c1546de90eac42ff5e03b2fd))


### Bug Fixes

* **bigquery:** Add impersonateServiceAccount to prebuilt config ([mcp-toolbox#​2770](https://redirect.github.com/googleapis/mcp-toolbox/issues/2770)) ([9c3a748](https://redirect.github.com/googleapis/mcp-toolbox/commit/9c3a748de43eb588586f22590ff74bd433b24d68)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* **ci:** Add path for forked PR unit test runs ([genai-toolbox#​2540](https://redirect.github.com/googleapis/genai-toolbox/issues/2540)) ([04dd2a7](https://redirect.github.com/googleapis/genai-toolbox/commit/04dd2a77603c7babf01da724dfb77808e3f25fe5)) ([a8055b3](https://github.com/gemini-cli-extensions/alloydb/commit/a8055b30ad88d326c1546de90eac42ff5e03b2fd))
* **ci:** Implement conditional sharding logic in integration tests ([mcp-toolbox#​2763](https://redirect.github.com/googleapis/mcp-toolbox/issues/2763)) ([1528d7c](https://redirect.github.com/googleapis/mcp-toolbox/commit/1528d7c38dfaa30bdecbe59c79ba926fa6d18356)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* **ci:** Remove search index generation from preview deployment workflow ([mcp-toolbox#​2859](https://redirect.github.com/googleapis/mcp-toolbox/issues/2859)) ([f8891b8](https://redirect.github.com/googleapis/mcp-toolbox/commit/f8891b82fcaaef240e1031cd9f784749d91d4210)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* **cloudloggingadmin:** Increase log injesting time and add auth test ([mcp-toolbox#​2772](https://redirect.github.com/googleapis/mcp-toolbox/issues/2772)) ([50b4457](https://redirect.github.com/googleapis/mcp-toolbox/commit/50b4457095ec4ac881b3b12719da24d35141f65d)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* **dataplex:** Capture GCP HTTP errors in MCP Toolbox ([genai-toolbox#​2347](https://redirect.github.com/googleapis/genai-toolbox/issues/2347)) ([1d7c498](https://redirect.github.com/googleapis/genai-toolbox/commit/1d7c4981164c34b4d7bc8edecfd449f57ad11e15)) ([a8055b3](https://github.com/gemini-cli-extensions/alloydb/commit/a8055b30ad88d326c1546de90eac42ff5e03b2fd))
* **docs:** Skip empty folders in pagination & reduce PR comment noise ([mcp-toolbox#​2853](https://redirect.github.com/googleapis/mcp-toolbox/issues/2853)) ([9ebd93a](https://redirect.github.com/googleapis/mcp-toolbox/commit/9ebd93a8ecb9bae673aa77a859803629fc7a4e1d)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* **docs/adk:** Resolve dependency duplication ([genai-toolbox#​2418](https://redirect.github.com/googleapis/genai-toolbox/issues/2418)) ([4d44abb](https://redirect.github.com/googleapis/genai-toolbox/commit/4d44abb4638926ca50b0fa4dcf10a03e7fab657f)) ([a8055b3](https://github.com/gemini-cli-extensions/alloydb/commit/a8055b30ad88d326c1546de90eac42ff5e03b2fd))
* **docs/langchain:** Fix core at 0.3.0 and align compatible dependencies ([genai-toolbox#​2426](https://redirect.github.com/googleapis/genai-toolbox/issues/2426)) ([36edfd3](https://redirect.github.com/googleapis/genai-toolbox/commit/36edfd3d506e839c092d04cbca1799b5ebc38160)) ([a8055b3](https://github.com/gemini-cli-extensions/alloydb/commit/a8055b30ad88d326c1546de90eac42ff5e03b2fd))
* **http:** Sanitize non-2xx error output ([mcp-toolbox#​2654](https://redirect.github.com/googleapis/mcp-toolbox/issues/2654)) ([5bef954](https://redirect.github.com/googleapis/mcp-toolbox/commit/5bef954507c8e23b6c9b0eb2551265e4be32b452)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* **knowledge-catalog:** Rename dataplex to knowledge-catalog across docs ([mcp-toolbox#​3039](https://redirect.github.com/googleapis/mcp-toolbox/pull/3039)) ([45c05e3](https://redirect.github.com/googleapis/mcp-toolbox/commit/24ce6ce3bc6468d2b4b11a86b90ea223daa7e6cf)) ([8f5c074](https://github.com/gemini-cli-extensions/alloydb/commit/8f5c074c52e03b2a488c9b7c99610e357c59e5c2))
* **looker:** Convert configuration yaml to flat format ([mcp-toolbox#​3022](https://redirect.github.com/googleapis/mcp-toolbox/issues/3022)) ([45c05e3](https://redirect.github.com/googleapis/mcp-toolbox/commit/45c05e37eac867c5a444d950bc51fdf1b1b687ea)) ([8f5c074](https://github.com/gemini-cli-extensions/alloydb/commit/8f5c074c52e03b2a488c9b7c99610e357c59e5c2))
* **mcp:** Guard nil SSE session lookup and return 400 for missing session ([mcp-toolbox#​2681](https://redirect.github.com/googleapis/mcp-toolbox/issues/2681)) ([f66189f](https://redirect.github.com/googleapis/mcp-toolbox/commit/f66189fe43cb711da3a041fa31edbacd7bbc7153)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* **oracle:** Enable DML operations and resolve incorrect array type error ([genai-toolbox#​2323](https://redirect.github.com/googleapis/genai-toolbox/issues/2323)) ([72146a4](https://redirect.github.com/googleapis/genai-toolbox/commit/72146a4b1605bcdd3e1038106bfb1f899e677e39)) ([a8055b3](https://github.com/gemini-cli-extensions/alloydb/commit/a8055b30ad88d326c1546de90eac42ff5e03b2fd))
* **oracle:** Normalize encoded proxy usernames in go-ora DSN ([mcp-toolbox#​2469](https://redirect.github.com/googleapis/mcp-toolbox/issues/2469)) ([b1333cd](https://redirect.github.com/googleapis/mcp-toolbox/commit/b1333cd27117655f8ab09f222721e14bea74b487)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* **oracle:** Update oracle-execute-sql tool interface to match source signature ([mcp-toolbox#​2627](https://redirect.github.com/googleapis/mcp-toolbox/issues/2627)) ([81699a3](https://redirect.github.com/googleapis/mcp-toolbox/commit/81699a375b7e5af37945f4124aa4c5f2a1a9f7a6)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* **postgres:** Update execute-sql tool to avoid multi-statements parameter ([mcp-toolbox#​2707](https://redirect.github.com/googleapis/mcp-toolbox/issues/2707)) ([58bc772](https://redirect.github.com/googleapis/mcp-toolbox/commit/58bc772f882f0d9e00f403e73fbec812dd8a03ac)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* **quickstart:** Robust tool lookup and modernize dependencies in Python samples ([mcp-toolbox#​2863](https://redirect.github.com/googleapis/mcp-toolbox/issues/2863)) ([4c0845d](https://redirect.github.com/googleapis/mcp-toolbox/commit/4c0845dc9081d79046dea5f28a032d531faff40f)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* **server/mcp:** Guard nil dereference in sseManager.get ([genai-toolbox#​2557](https://redirect.github.com/googleapis/genai-toolbox/issues/2557)) ([e534196](https://redirect.github.com/googleapis/genai-toolbox/commit/e534196303c2b8d9b6e599ac25add337e6fc9b8f)), closes [genai-toolbox#​2548](https://redirect.github.com/googleapis/genai-toolbox/issues/2548) ([a8055b3](https://github.com/gemini-cli-extensions/alloydb/commit/a8055b30ad88d326c1546de90eac42ff5e03b2fd))
* **server/mcp:** Scope defer span.End inside loop iteration ([mcp-toolbox#​2558](https://redirect.github.com/googleapis/mcp-toolbox/issues/2558)) ([c88a62d](https://redirect.github.com/googleapis/mcp-toolbox/commit/c88a62dcf4c16118ae706cc43d18cad827e7496d)), closes [mcp-toolbox#​2549](https://redirect.github.com/googleapis/mcp-toolbox/issues/2549) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* **skill:** Fix env variable propagation ([mcp-toolbox#​2645](https://redirect.github.com/googleapis/mcp-toolbox/issues/2645)) ([5271368](https://redirect.github.com/googleapis/mcp-toolbox/commit/52713687208994c423da64333cb0a04fb483f794)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* **skills:** Fix integer parameter parsing through agent skills ([mcp-toolbox#​2847](https://redirect.github.com/googleapis/mcp-toolbox/issues/2847)) ([4564efe](https://redirect.github.com/googleapis/mcp-toolbox/commit/4564efe75436b4081d9f3d1f7c912bc64c13f850)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* **skills:** Fix skill generation template ([mcp-toolbox#​2914](https://redirect.github.com/googleapis/mcp-toolbox/issues/2914)) ([a01a15e](https://redirect.github.com/googleapis/mcp-toolbox/commit/a01a15ed1aa9a83eda8362578fed2e3a3c8dde99)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* **skills:** Improve flag validation and silence unit test output ([mcp-toolbox#​2759](https://redirect.github.com/googleapis/mcp-toolbox/issues/2759)) ([f3da6aa](https://redirect.github.com/googleapis/mcp-toolbox/commit/f3da6aa5e23b609a1ac9ecc098bccea02f2388ab)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* **skills:** Prevent empty strings overriding optional env vars in node scripts ([mcp-toolbox#​2963](https://redirect.github.com/googleapis/mcp-toolbox/issues/2963)) ([c52adeb](https://redirect.github.com/googleapis/mcp-toolbox/commit/c52adeba76fc13d0e6e415f6393def0648e478d6)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* **telemetry:** Histogram buckets from OTel standard to MCP standards ([mcp-toolbox#​2729](https://redirect.github.com/googleapis/mcp-toolbox/issues/2729)) ([87cd4a0](https://redirect.github.com/googleapis/mcp-toolbox/commit/87cd4a0bf48605225ef25ca554cc787def976d11)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* **test:** Address flaky healthcare integration test run ([mcp-toolbox#​2742](https://redirect.github.com/googleapis/mcp-toolbox/issues/2742)) ([9590821](https://redirect.github.com/googleapis/mcp-toolbox/commit/9590821bc7d86c5cbacd29b21d4f85b427a87db4)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* **tests:** Resolve LlamaIndex dependency conflict in JS quickstart ([genai-toolbox#​2597](https://redirect.github.com/googleapis/genai-toolbox/issues/2597)) ([ac11f5a](https://redirect.github.com/googleapis/genai-toolbox/commit/ac11f5af9c7bcf228d667e1b8e08b5dc49ad91a0)) ([a8055b3](https://github.com/gemini-cli-extensions/alloydb/commit/a8055b30ad88d326c1546de90eac42ff5e03b2fd))
* **tests/bigquery:** Implement uuid-based isolation and reliable resource cleanup ([mcp-toolbox#​2547](https://redirect.github.com/googleapis/mcp-toolbox/issues/2547)) ([479d842](https://redirect.github.com/googleapis/mcp-toolbox/commit/479d8424046406d50af02b0602e6bac58aea534f)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* **tests/Bigtable:** Implement uuid-based isolation and reliable resource cleanup ([mcp-toolbox#​2880](https://redirect.github.com/googleapis/mcp-toolbox/issues/2880)) ([a769f15](https://redirect.github.com/googleapis/mcp-toolbox/commit/a769f15c3ab8d631198546909a6dd1f09446e6b0)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* **tests/postgres:** Implement uuid-based isolation and reliable resource cleanup ([genai-toolbox#​2377](https://redirect.github.com/googleapis/genai-toolbox/issues/2377)) ([8a96fb1](https://redirect.github.com/googleapis/genai-toolbox/commit/8a96fb1a8874baa3688e566f3dea8a0912fcf2df)) ([a8055b3](https://github.com/gemini-cli-extensions/alloydb/commit/a8055b30ad88d326c1546de90eac42ff5e03b2fd))
* **tests/postgres:** Restore list\_schemas test and implement dynamic owner ([genai-toolbox#​2521](https://redirect.github.com/googleapis/genai-toolbox/issues/2521)) ([7041e79](https://redirect.github.com/googleapis/genai-toolbox/commit/7041e797347f337d6f7f44ca051ae31acd58babe)) ([a8055b3](https://github.com/gemini-cli-extensions/alloydb/commit/a8055b30ad88d326c1546de90eac42ff5e03b2fd))
* **ui:** Remove module from script ([mcp-toolbox#​2703](https://redirect.github.com/googleapis/mcp-toolbox/issues/2703)) ([6943ab6](https://redirect.github.com/googleapis/mcp-toolbox/commit/6943ab6839d21da7b6a4241700c7891c6f4a9b2c)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* Deflake alloydb omni ([genai-toolbox#​2431](https://redirect.github.com/googleapis/genai-toolbox/issues/2431)) ([62b8309](https://redirect.github.com/googleapis/genai-toolbox/commit/62b830987d65c3573214d04e50742476097ee9e9)) ([a8055b3](https://github.com/gemini-cli-extensions/alloydb/commit/a8055b30ad88d326c1546de90eac42ff5e03b2fd))
* Enforce required validation for explicit null parameter values ([genai-toolbox#​2519](https://redirect.github.com/googleapis/genai-toolbox/issues/2519)) ([d5e9512](https://redirect.github.com/googleapis/genai-toolbox/commit/d5e9512a237e658f9b9127fdd8c174ec023c3310)) ([a8055b3](https://github.com/gemini-cli-extensions/alloydb/commit/a8055b30ad88d326c1546de90eac42ff5e03b2fd))
* Improve list locks integration test for postgres ([mcp-toolbox#​2279](https://redirect.github.com/googleapis/mcp-toolbox/issues/2279)) ([d9ebe5d](https://redirect.github.com/googleapis/mcp-toolbox/commit/d9ebe5d4bf1b7ca04cae47386b36c38ca5b77b8a)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* Return AllParams for GetParameter() for tools with templateParameter([mcp-toolbox#​2734](https://redirect.github.com/googleapis/mcp-toolbox/issues/2734)) ([bfd7ba6](https://redirect.github.com/googleapis/mcp-toolbox/commit/bfd7ba601a52294fa71623d88af71bd0288bf887)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* Surface Dataplex API errors in MCP results ([genai-toolbox#​2347](https://redirect.github.com/googleapis/genai-toolbox/pull/2347))([1d7c498](https://redirect.github.com/googleapis/genai-toolbox/commit/1d7c4981164c34b4d7bc8edecfd449f57ad11e15)) ([a8055b3](https://github.com/gemini-cli-extensions/alloydb/commit/a8055b30ad88d326c1546de90eac42ff5e03b2fd))
* Update error for ConvertConfig function ([mcp-toolbox#​2993](https://redirect.github.com/googleapis/mcp-toolbox/issues/2993)) ([62bdabb](https://redirect.github.com/googleapis/mcp-toolbox/commit/62bdabb512d7875d2760c1cd8eb331221b58a09c)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* Update repo name ([mcp-toolbox#​2968](https://redirect.github.com/googleapis/mcp-toolbox/issues/2968)) ([3aae809](https://redirect.github.com/googleapis/mcp-toolbox/commit/3aae8097f1bda00e41667fb41c02094167c96ace)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))
* Update toolset attributes naming ([mcp-toolbox#​2554](https://redirect.github.com/googleapis/mcp-toolbox/issues/2554)) ([3d6ae4e](https://redirect.github.com/googleapis/mcp-toolbox/commit/3d6ae4eeaf5acfbde83374a244573edd8fc9012b)) ([98ea437](https://github.com/gemini-cli-extensions/alloydb/commit/98ea437b98671bd177dd19a0bff1b02e1e964948))

## [0.1.11](https://github.com/gemini-cli-extensions/alloydb/compare/0.1.10...0.1.11) (2026-02-24)


### Bug Fixes

* remove broken keychain support for password ([#127](https://github.com/gemini-cli-extensions/alloydb/issues/127)) ([65746bb](https://github.com/gemini-cli-extensions/alloydb/commit/65746bb1203afaf4af4e0edd5ce255f428488309))

## [0.1.10](https://github.com/gemini-cli-extensions/alloydb/compare/0.1.9...0.1.10) (2026-01-28)


### Features

* add Configuration settings ([#108](https://github.com/gemini-cli-extensions/alloydb/issues/108)) ([4ec5205](https://github.com/gemini-cli-extensions/alloydb/commit/4ec52055445e917371fe130a2e5054df5b75eca0))
* **deps:** update dependency googleapis/mcp-toolbox to v0.26.0 ([#109](https://github.com/gemini-cli-extensions/alloydb/issues/109)) ([7fa79c2](https://github.com/gemini-cli-extensions/alloydb/commit/7fa79c2c2caf49498190bc59e5712a2837b18aa8))

## [0.1.9](https://github.com/gemini-cli-extensions/alloydb/compare/0.1.8...0.1.9) (2026-01-13)


### Bug Fixes

* **tools/alloydb-wait-for-operation:** Fix connection message generation ([mcp-toolbox#​2228](https://redirect.github.com/googleapis/mcp-toolbox/issues/2228)) ([7053fbb](https://redirect.github.com/googleapis/mcp-toolbox/commit/7053fbb1953653143d39a8510916ea97a91022a6)) ([177e29e](https://github.com/gemini-cli-extensions/alloydb/commit/177e29e7f836e93d8ca5932c6941e99ee34f7faf))
* **tools/alloydbainl:** Only add psv when NL Config Param is defined ([mcp-toolbox#​2265](https://redirect.github.com/googleapis/mcp-toolbox/issues/2265)) ([ef8f3b0](https://redirect.github.com/googleapis/mcp-toolbox/commit/ef8f3b02f2f38ce94a6ba9acf35d08b9469bef4e)) ([177e29e](https://github.com/gemini-cli-extensions/alloydb/commit/177e29e7f836e93d8ca5932c6941e99ee34f7faf))

## [0.1.8](https://github.com/gemini-cli-extensions/alloydb/compare/0.1.7...0.1.8) (2025-12-15)


### Bug Fixes

* List tables tools null fix ([mcp-toolbox#​2107](https://redirect.github.com/googleapis/mcp-toolbox/issues/2107)) ([2b45266](https://redirect.github.com/googleapis/mcp-toolbox/commit/2b452665983154041d4cd0ed7d82532e4af682eb)) ([e8c6640](https://github.com/gemini-cli-extensions/alloydb/commit/e8c6640d0d552bee841a1e59557cf2cd31a9b753))

## [0.1.7](https://github.com/gemini-cli-extensions/alloydb/compare/0.1.6...0.1.7) (2025-12-05)


### Bug Fixes

* **tools/alloydb-postgres-list-tables:** Exclude google\_ml schema from list\_tables ([mcp-toolbox#​2046](https://redirect.github.com/googleapis/mcp-toolbox/issues/2046)) ([a03984c](https://redirect.github.com/googleapis/mcp-toolbox/commit/a03984cc15254c928f30085f8fa509ded6a79a0c)) ([921f64e](https://github.com/gemini-cli-extensions/alloydb/commit/921f64ef26954dae0a747d4bfb30c85f9aee6d53))
* **tools/alloydbcreateuser:** Remove duplication of project praram ([mcp-toolbox#​2028](https://redirect.github.com/googleapis/mcp-toolbox/issues/2028)) ([730ac6d](https://redirect.github.com/googleapis/mcp-toolbox/commit/730ac6d22805fd50b4a675b74c1865f4e7689e7c)) ([921f64e](https://github.com/gemini-cli-extensions/alloydb/commit/921f64ef26954dae0a747d4bfb30c85f9aee6d53))

## [0.1.6](https://github.com/gemini-cli-extensions/alloydb/compare/0.1.5...0.1.6) (2025-11-19)


### Features

* **tools/postgres:** Add `long_running_transactions`, `list_locks` and `replication_stats` tools ([#1751](https://github.com/googleapis/mcp-toolbox/issues/1751)) ([5abad5d](https://github.com/googleapis/mcp-toolbox/commit/5abad5d56c6cc5ba86adc5253b948bf8230fa830))


### Bug Fixes

* **tools:** Check for query execution error for pgxpool.Pool ([mcp-toolbox#​1969](https://redirect.github.com/googleapis/mcp-toolbox/issues/1969)) ([2bff138](https://redirect.github.com/googleapis/mcp-toolbox/commit/2bff1384a3570ef46bc03ebebc507923af261987)) ([1da5746](https://github.com/gemini-cli-extensions/alloydb/commit/1da57464893c69c063e73f72b4bad342c5a3efd8))
* **tools/alloydbgetinstance:** Remove parameter duplication ([mcp-toolbox#​1993](https://redirect.github.com/googleapis/mcp-toolbox/issues/1993)) ([0e269a1](https://redirect.github.com/googleapis/mcp-toolbox/commit/0e269a1d125eed16a51ead27db4398e6e48cb948)) ([1da5746](https://github.com/gemini-cli-extensions/alloydb/commit/1da57464893c69c063e73f72b4bad342c5a3efd8))

## [0.1.5](https://github.com/gemini-cli-extensions/alloydb/compare/0.1.4...0.1.5) (2025-11-18)


### Features

* **source/alloydb, source/cloud-sql-postgres,source/cloud-sql-mysql,source/cloud-sql-mssql:** Use project from env for alloydb and cloud sql control plane tools ([mcp-toolbox#​1588](https://redirect.github.com/googleapis/mcp-toolbox/issues/1588)) ([12bdd95](https://redirect.github.com/googleapis/mcp-toolbox/commit/12bdd954597e49d3ec6b247cc104584c5a4d1943)) ([7ca7d46](https://github.com/gemini-cli-extensions/alloydb/commit/7ca7d4691fd47ad3081363b288681da0851d9985))
* Added prompt support for toolbox ([mcp-toolbox#​1798](https://redirect.github.com/googleapis/mcp-toolbox/issues/1798)) ([cd56ea4](https://redirect.github.com/googleapis/mcp-toolbox/commit/cd56ea44fbdd149fcb92324e70ee36ac747635db)) ([7ca7d46](https://github.com/gemini-cli-extensions/alloydb/commit/7ca7d4691fd47ad3081363b288681da0851d9985))

## [0.1.4](https://github.com/gemini-cli-extensions/alloydb/compare/0.1.3...0.1.4) (2025-11-07)


### Features

* **tools/alloydbainl:** update AlloyDB AI NL statement order ([mcp-toolbox#​1753](https://redirect.github.com/googleapis/mcp-toolbox/issues/1753)) ([45933f1](https://github.com/gemini-cli-extensions/alloydb/commit/45933f10e4daafb177bd59c069f8880d7a485ed5))


### Bug Fixes

* **tools/alloydbainl:** AlloyDB AI NL execute\_sql statement order ([mcp-toolbox#​1753](https://redirect.github.com/googleapis/mcp-toolbox/issues/1753)) ([9723cad](https://redirect.github.com/googleapis/mcp-toolbox/commit/9723cadaa181a76d8fdda65a6254f6c887c3cf57)) ([45933f1](https://github.com/gemini-cli-extensions/alloydb/commit/45933f10e4daafb177bd59c069f8880d7a485ed5))

## [0.1.3](https://github.com/gemini-cli-extensions/alloydb/compare/0.1.2...0.1.3) (2025-10-17)


### Bug Fixes

* update context for install instructions ([#70](https://github.com/gemini-cli-extensions/alloydb/issues/70)) ([2889fe5](https://github.com/gemini-cli-extensions/alloydb/commit/2889fe5243b7c121c5b979a16dea1a60a8c4465b))

## [0.1.2](https://github.com/gemini-cli-extensions/alloydb/compare/0.1.1...0.1.2) (2025-10-13)


### Features

* **deps:** update dependency googleapis/mcp-toolbox to v0.17.0 to Support PSC connection ([#66](https://github.com/gemini-cli-extensions/alloydb/issues/66)) ([1280920](https://github.com/gemini-cli-extensions/alloydb/commit/12809204b2e1053bc8e1a101879580b2857d50f6))

## [0.1.1](https://github.com/gemini-cli-extensions/alloydb/compare/0.1.0...0.1.1) (2025-09-30)


### Features

* additional instructions for the context file ([#51](https://github.com/gemini-cli-extensions/alloydb/issues/51)) ([cef0fb6](https://github.com/gemini-cli-extensions/alloydb/commit/cef0fb68dedb400225347adf3a16cb320ff28d20))
* **deps:** update dependency googleapis/mcp-toolbox to v0.16.0 ([#42](https://github.com/gemini-cli-extensions/alloydb/issues/42)) ([6a25cb6](https://github.com/gemini-cli-extensions/alloydb/commit/6a25cb699264d415eb75f4bfdd25b325a372425e))
* standardize mcp server names ([#49](https://github.com/gemini-cli-extensions/alloydb/issues/49)) ([ab738fc](https://github.com/gemini-cli-extensions/alloydb/commit/ab738fc7f669dc3712777cec969b41084b7e5224))
* update context file to use full table name ([dc565f4](https://github.com/gemini-cli-extensions/alloydb/commit/dc565f427db7611c70155109cfd4010591784af4))
* Update context to recommend other observability extension ([#34](https://github.com/gemini-cli-extensions/alloydb/issues/34)) ([874b148](https://github.com/gemini-cli-extensions/alloydb/commit/874b1489989c5945c81b0eeef1592bb65693f6d6))


## 0.1.0 (2025-09-20)


### Features

* create the AlloyDB Extension ([#21](https://github.com/gemini-cli-extensions/alloydb/issues/21)) ([b71218b](https://github.com/gemini-cli-extensions/alloydb/commit/b71218ba1977b906043621f23cf7fff05937e833))
