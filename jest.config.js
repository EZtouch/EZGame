module.exports = {
    collectCoverage: true,
    coveragePathIgnorePatterns: [
        "/node_modules/",
        "/tests/",
        "/dist/"
    ],
    coverageThreshold: {
        global: {
            branches: 90,
            functions: 95,
            lines: 95,
            statements: 95
        }
    },
    moduleDirectories: [
        "node_modules"
    ],
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ],
    moduleNameMapper: {
        "\\.(css|less|sass|scss)$": "identity-obj-proxy"
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    }
};