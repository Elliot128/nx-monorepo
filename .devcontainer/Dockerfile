# [Choice] Node.js version (use -bullseye variants on local arm64/Apple Silicon): 18, 16, 14, 18-bullseye, 16-bullseye, 14-bullseye, 18-buster, 16-buster, 14-buster
ARG VARIANT=18-bullseye
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:${VARIANT}

ARG GITHUB_USERNAME
ARG GITHUB_EMAIL
ARG GITHUB_PAT


# [Optional] Uncomment this section to install additional OS packages.
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends inotify-tools

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node modules
# RUN su node -c "npm install -g <your-package-list-here>"


RUN git config --global credential.helper cache
RUN git config --global --add --bool push.autoSetupRemote true

# RUN git config --global user.name "${GITHUB_USERNAME}"
# RUN git config --global user.email "${GITHUB_EMAIL}"
# RUN git config --global url."https://{GITHUB_PAT}:@github.com/".insteadOf "https://github.com/"

# RUN git remote set-url origin "https://Elliot128:${GITHUB_PAT}/Elliot128/nx-monorepo.git"
RUN git config --global --add safe.directory '*'