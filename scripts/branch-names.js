import { execSync } from "child_process";

const branchName = execSync("git branch --show-current").toString().trim();
const validBranchPrefixes = ["feature/", "hotfix/", "bugfix/", "test/"];

const isValid = validBranchPrefixes.some((prefix) =>
  branchName.startsWith(prefix)
);

if (!isValid) {
  console.error(`Invalid branch name: ${branchName}`);
  console.error(
    "Branch name must start with one of the following prefixes:",
    validBranchPrefixes.join(", ")
  );
  process.exit(1);
}

