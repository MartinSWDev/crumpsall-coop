// Enforces branch naming conventions
import { execSync } from 'child_process'

const branchName = execSync('git branch --show-current').toString().trim()
const excludedBranches = ['main']
const validBranchPrefixes = ['feature/', 'hotfix/', 'bugfix/', 'test/']

const isExcluded = excludedBranches.includes(branchName)
const isValid = validBranchPrefixes.some((prefix) =>
    branchName.startsWith(prefix)
)

if (!isExcluded && !isValid) {
    console.error(`Invalid branch name: ${branchName}
Branch name must start with one of the following prefixes:
${validBranchPrefixes.join(', ')}`)
    process.exit(1)
}
