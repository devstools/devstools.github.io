## fully-qualified path to the current directory
CURRENT_DIR := $(patsubst %/,%,$(dir $(MKFILE_PATH)))
DOCKER_TAG=api-definitions:latest
help:			## Show this help.
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'
 
.PHONY: gen


gen: builder	## Generate go files and swagger files
	@docker run -v ${PWD}:/work --workdir=/work --rm ${DOCKER_TAG}


builder:		## Build docker image
	@docker build -t ${DOCKER_TAG} .
