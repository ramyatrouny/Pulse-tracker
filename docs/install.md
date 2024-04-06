# Installation Guide

This guide will walk you through the setup and installation process for your project. Follow the steps below to correctly install and configure the necessary packages.

## Step 1: Initialize the project

Start by creating a new npm project and generating a `package.json` file. Open your terminal and run the following command in your project's root directory:

```bash
npm init
```

## Step 2: Install dependencies

Install the required packages for your project by running the following command:

```bash
npm install --save \
    @ubio/framework \
    mesh-ioc \
    koa \
    @types/koa \
    dotenv
```

## Step 3: Install development dependencies

Add development-specific packages, such as TypeScript and testing frameworks, by running:

```bash
npm install --save-dev \
    typescript \
    @types/node \
    npm-run-all \
    mocha \
    eslint \
    @nodescript/eslint-config
```

These development dependencies include type definitions, build tools, and testing libraries that are essential for development but not needed in production.
