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
taskkill /f /im LBD_ClientUDPCH.exe
rd /s /q LBD5800MT
rd /s /q LBDCMD_Tools
rd /s /q LgSoftWAN
pause

:: �ѿ� 1.0
:: ���� Chen-Jin
:: �����ٴ�һ�и���У�����в������Ҳ��Գɹ�