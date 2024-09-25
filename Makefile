################################################################################
# Makefile
################################################################################

#-------------------------------------------------------------------------------
# Environment
#-------------------------------------------------------------------------------

VENV_ROOT := .venv
VENV := $(VENV_ROOT)/bin/activate

################################################################################
# Targets
################################################################################

all: venv init build deploy

venv:
	python -m venv $(VENV_ROOT)

init:
	. $(VENV) && uv sync

build: 
	. $(VENV) && jupyter-book build site/

deploy: build
	. $(VENV) && cd site && ghp-import -n -p -f _build/html


clean: 
	. $(VENV) && jupyter-book clean -a site/
	rm -rf $(VENV_ROOT)

.PHONY: all venv init build deploy clean

