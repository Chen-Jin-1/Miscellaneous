@echo off
cd /d "C:\Program Files (x86)\"
taskkill /f /im MMClient.exe
taskkill /f /im CDMPCom.exe
taskkill /f /im CDMPToolsService.exe
taskkill /f /im wincontrol_vdi.exe
taskkill /f /im LBD_TeachClientEx.exe
taskkill /f /im LgClientWebSocketServer.exe
taskkill /f /im LgClientInstallTool.exe
taskkill /f /im LgClientUpdateService.exe
rd /s /q LBD5800MT
rd /s /q LBDCMD_Tools
rd /s /q LgSoftWAN
pause

:: 脱控 1.0
:: 制作 Chen-Jin
:: 已在临川一中高新校区初中部电脑室测试成功
