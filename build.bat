@echo off
setlocal

echo 请选择构建类型：
echo 1. 开发环境构建 (npm run build:dev)
echo 2. 生产环境构建 (npm run build:prod)
set /p choice=输入您的选择 (1-2) 并按回车键:

if "%choice%"=="1" (
    echo 正在执行开发环境构建...
    npm run build:dev
) else if "%choice%"=="2" (
    echo 正在执行生产环境构建...
    npm run build:prod
) else (
    echo 输入无效，请重新运行脚本并选择一个有效的选项。
    pause
    endlocal
    exit /b
)

pause
endlocal