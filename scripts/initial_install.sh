#!/bin/bash

initial_project_name="vite-react-ts-mui-zustand"

# Define the new project name as the name of the current directory
new_project_name=$(basename "$PWD")

# Check if package.json contains "vite-react-ts-mui-zustand"
if ! grep -q "$initial_project_name" package.json; then
    echo
    echo "It looks like this script has already been run,"
    echo "package.json does not contain '$initial_project_name'."
    echo "Exiting..."
    echo
    exit 1
fi

# Update package.json with the new name
if [[ "$OSTYPE" == "darwin"* ]]; then
  sed -i '' "s/$initial_project_name/$new_project_name/g" package.json
else
  sed -i "s/$initial_project_name/$new_project_name/g" package.json
fi

# Initialize a new git repository
rm -rf .git
git init

# Update all npm packages to their latest versions
npm install -g npm-check-updates
ncu -u
yarn install

# Make initial commit
git add .
git commit -m "Initial commit with custom template and updated packages"

# Provide feedback that the script is done
echo "Project $new_project_name has been set up with updated packages and is ready to use!"
