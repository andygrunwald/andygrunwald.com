.DEFAULT_GOAL := help

.PHONY: help
help: ## Outputs the help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: clean
clean: ## Removes generated files (e.g., the public/ folder)
	rm -rf public/

.PHONY: build
build: clean ## Generates the static site (aka a production build)
	hugo --gc --minify

.PHONY: serve
serve: ## Starts a Hugo server with file watching (and re-rendering) enabled
	hugo server -w