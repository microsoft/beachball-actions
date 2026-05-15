# beachball-actions - moved to [`microsoft/beachball/actions/*`](https://github.com/microsoft/beachball/tree/main/actions)

**These actions have relocated to the `beachball` repo.** `batch-runs` has been deprecated due to limited usefulness ([see notes and alternatives](batch-runs)).

This monorepo contains GitHub Actions, mostly related to [Beachball](https://microsoft.github.io/beachball/), plus a few others.

## Actions

### General

| Name                                                 | Description                                                             |
| ---------------------------------------------------- | ----------------------------------------------------------------------- |
| [batch-runs](batch-runs)                             | Cancels this workflow run if any newer runs are pending for this branch |
| [check-for-modified-files](check-for-modified-files) | Fails the build if it modified any files                                |

### Beachball-specific

| Name                                   | Description                                                                                              |
| -------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| [install-beachball](install-beachball) | Globally installs the version of Beachball specified in the repo root `package.json`'s `devDependencies` |
| [should-release](should-release)       | Determines whether a release workflow run is needed, and cancels it if not                               |

## Development

### Release workflow

When a pull request is merged into main branch, a new minor release is created by GitHub Actions.
See https://github.com/int128/release-typescript-action for details.
