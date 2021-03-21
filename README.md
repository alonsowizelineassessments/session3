# Wizeline Session 3

Artillery

### Installation 🔧

```bash
npm install -g artillery@1.6
npm install faker
```
### Go into project directory
```bash
npm install
```

### Pre-requistes to run in CI/CD pipeline  
_Make sure to set your API token in an environment variable_

* **UNIX** - *Add TOKEN in your enviroment variables (~/.bash_profile, ~/.zshrc, ~/.profile, or ~/.bashrc)" export TOKEN="1328006e5c8ee887807ba4d2cec8bef27127e712"*
* **WINDOWS** - *Add TOKEN in your enviroment variables (System env variables)"*
*️⚠️ **Change project_id to the value where you want to create the tasks, this is in file project.csv ⚠️**️

### Artillery run from CLI

```bash
npm run test
```
