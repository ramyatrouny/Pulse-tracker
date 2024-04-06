# Folder Structure and Entry Points

This document outlines the folder structure and basic entry points for the application.

## Folder Structure

### Key Components

```bash
├── src/
│ ├── bin/
│ │ └── serve.ts      // Start application HTTP server
│ ├── main/
│ │ ├── routes/       // Functionality exposed via HTTP
│ │ ├── repositories/ // Storage abstraction layer
│ │ ├── services/     // Business logic layer
│ │ ├── schema/       // Domain model data structures
│ │ ├── util/         // Helpers and utilities
│ │ ├── app.ts        // Application class (IoC composition root)
│ │ ├── metrics.ts    // Application metrics
│ │ └── ...           // Database drivers, etc., with global lifecycle
│ └── test/           // Test sources
└── out/              // Compiled output (.js and .d.ts files)
    ├── main/
    └── test/
```
