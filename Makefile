# Zudoku Project Makefile
# Comprehensive development, build, and deployment workflow management

# Project Variables
PROJECT_NAME := zudoku-portfolio
NODE_ENV ?= development
PNPM := pnpm
DOCKER := docker
DOCKER_COMPOSE := docker-compose

# Color Output Helpers
GREEN := \033[0;32m
YELLOW := \033[0;33m
NC := \033[0m

# Default target
.PHONY: help
help:
	@echo "$(GREEN)Zudoku Project Workflow Management$(NC)"
	@echo "Available targets:"
	@echo "  $(YELLOW)Development$(NC)"
	@echo "    make dev        - Start development server"
	@echo "    make install    - Install project dependencies"
	@echo "    make lint       - Run code linting"
	@echo ""
	@echo "  $(YELLOW)Build & Deployment$(NC)"
	@echo "    make build      - Build production application"
	@echo "    make docker-build - Build Docker image"
	@echo "    make docker-run   - Run Docker container"
	@echo ""
	@echo "  $(YELLOW)Testing & Quality$(NC)"
	@echo "    make test       - Run project tests"
	@echo "    make audit      - Run security audit"
	@echo ""
	@echo "  $(YELLOW)Cleanup$(NC)"
	@echo "    make clean      - Remove build artifacts"
	@echo "    make prune      - Remove all cached data"

# Development Workflow
.PHONY: dev
dev:
	@echo "$(GREEN)Starting Zudoku Development Server...$(NC)"
	@$(PNPM) dev

.PHONY: install
install:
	@echo "$(GREEN)Installing Project Dependencies...$(NC)"
	@$(PNPM) install

.PHONY: lint
lint:
	@echo "$(YELLOW)Running Code Linter...$(NC)"
	@$(PNPM) lint

# Build Targets
.PHONY: build
build:
	@echo "$(GREEN)Building Production Application...$(NC)"
	@$(PNPM) build

# Docker Workflow
.PHONY: docker-build
docker-build:
	@echo "$(GREEN)Building Docker Image: $(PROJECT_NAME)$(NC)"
	@$(DOCKER) build \
		--target production \
		-t $(PROJECT_NAME):latest \
		-f Dockerfile .

.PHONY: docker-run
docker-run: docker-build
	@echo "$(GREEN)Starting Docker Container...$(NC)"
	@$(DOCKER) run \
		-p 80:80 \
		--env NODE_ENV=production \
		--name $(PROJECT_NAME)-container \
		$(PROJECT_NAME):latest

.PHONY: docker-dev
docker-dev:
	@echo "$(GREEN)Starting Development Docker Container...$(NC)"
	@$(DOCKER_COMPOSE) up zudoku-dev

# Testing and Quality Assurance
.PHONY: test
test:
	@echo "$(YELLOW)Running Project Tests...$(NC)"
	@$(PNPM) test

.PHONY: audit
audit:
	@echo "$(YELLOW)Running Security Audit...$(NC)"
	@$(PNPM) audit

# Cleanup Targets
.PHONY: clean
clean:
	@echo "$(YELLOW)Removing Build Artifacts...$(NC)"
	@rm -rf dist
	@rm -rf node_modules/.cache

.PHONY: prune
prune: clean
	@echo "$(YELLOW)Pruning All Cached Data...$(NC)"
	@$(PNPM) store prune
	@$(DOCKER) system prune -f

# Advanced Deployment
.PHONY: deploy
deploy: build docker-build
	@echo "$(GREEN)Deploying Application...$(NC)"
	@# Add your deployment script or commands here
	@echo "Deployment completed successfully!"

# Configuration and Environment
.PHONY: config
config:
	@echo "$(GREEN)Current Environment: $(NODE_ENV)$(NC)"
	@$(PNPM) config list

# Help is the default target
default: help