## B1: npx create-react-app old-local-blog --template typescript
## B2: npm install -D prettier eslint-plugin-prettier eslint-config-prettier
## B3: Vào package.json => tại thẻ scripts
    "lint" : "eslint --ext ts,tsx src/",
    "lint:fix" : "eslint --fix --ext ts,tsx src/",
    "prettier": "prettier --check \"src/**/(*.tsx|*.ts|*.css|*.scss)\"",
    "prettier:fix": "prettier --write \"src/**/(*.tsx|*.ts|*.css|*.scss)\""
## B4: Tạo file .prettierrc
    {
        "arrowParens" : "always",
        "semi": false,
        "trailingComma": "none",
        "tabWidth": 4,
        "endOfLine" : "auto",
        "useTabs": false,
        "singleQuote": true,
        "printWidth": 120,
        "jsxSingleQuote": true
    }
## B5: Tạo file .eslintrc
    {
        "extends": ["react-app", "prettier"],
        "plugins": ["react", "prettier"],
        "rules": {
            "prettier/prettier": [
                "warn", {
                    "arrowParens" : "always",
                    "semi": false,
                    "trailingComma": "none",
                    "tabWidth": 4,
                    "endOfLine" : "auto",
                    "useTabs": false,
                    "singleQuote": true,
                    "printWidth": 120,
                    "jsxSingleQuote": true
                }
            ]
        }
    }

## B6: Tạo file .editorconfig
    [*]
    indent_size = 2 
    indent_style = space
## B7: Trong tsconfig.json thêm
    "baseUrl": "src"

## B8: Cài tailwind css react
    npm install -D tailwindcss postcss autoprefixer

## B9: Tạo file tailwind config
    npx tailwindcss init -p

## B10: Trong tailwind.config.js
    /** @type {import('tailwindcss').Config} */
    module.exports = {
        content: [
            "./src/**/*.{ts,tsx}",
        ],
        theme: {
            extend: {},
        },
        plugins: [],
    }

## B11: Cài prettier-plugin-tailwindcss
    npm install -D prettier-plugin-tailwindcss

    Trong index.css import thư viện tailwind
        @tailwind base;
        @tailwind components;
        @tailwind utilities;


## B12: Khi chạy dự án chạy 2 câu lệnh
    npm run prettier:fix
    npm run lint:fix
để sửa các lỗi lên quan đến cú pháp code

## B13: Cài redux-toolkit
    npm install @reduxjs/toolkit react-redux





# Cách setup redux
## 1. Trong src tạo store.ts