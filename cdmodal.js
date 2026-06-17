const oldStyle = document.getElementById('cdmodal-styles');
if (oldStyle) oldStyle.remove();

const style = document.createElement('style');
style.id = 'cdmodal-styles';
style.textContent = `:root{--cdmodal-primary:#6366f1;--cdmodal-primary-hover:#4f46e5;--cdmodal-overlay-bg:rgba(0,0,0,0.4);--cdmodal-overlay-blur:0.5rem;--cdmodal-modal-bg:rgba(255,255,255,0.95);--cdmodal-modal-border:rgba(255,255,255,0.3);--cdmodal-border-radius:1.75rem;--cdmodal-title-color:#1e293b;--cdmodal-content-color:#475569;--cdmodal-input-bg:rgba(255,255,255,0.9);--cdmodal-input-border:#e2e8f0;--cdmodal-input-text:#1e293b;--cdmodal-cancel-bg:rgba(255,255,255,0.6);--cdmodal-cancel-border:#e2e8f0;--cdmodal-cancel-text:#64748b;--cdmodal-cancel-hover-bg:#f8fafc;--cdmodal-snackbar-bg:#333333cc;--cdmodal-snackbar-text:#ffffff}:root[data-cdmodal-theme="dark"]{--cdmodal-modal-bg:rgba(30,41,59,0.95);--cdmodal-modal-border:rgba(255,255,255,0.1);--cdmodal-title-color:#f1f5f9;--cdmodal-content-color:#cbd5e1;--cdmodal-input-bg:rgba(51,65,85,0.9);--cdmodal-input-border:#475569;--cdmodal-input-text:#f1f5f9;--cdmodal-cancel-bg:rgba(51,65,85,0.6);--cdmodal-cancel-border:#475569;--cdmodal-cancel-text:#cbd5e1;--cdmodal-cancel-hover-bg:#475569;--cdmodal-snackbar-bg:#1e293bcc;--cdmodal-snackbar-text:#f1f5f9}.cdmodal-overlay{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;z-index:10000;font-family:'PingFang',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background-color:var(--cdmodal-overlay-bg);backdrop-filter:blur(var(--cdmodal-overlay-blur));animation:cdmodal-fade-in 0.2s ease}.cdmodal-container{width:22.5rem;max-width:85%;padding:1.5rem 1.375rem;text-align:center;background:var(--cdmodal-modal-bg);backdrop-filter:blur(1.25rem);border-radius:var(--cdmodal-border-radius);box-shadow:0 1.5625rem 2.8125rem-0.75rem rgba(0,0,0,0.35),0 0.25rem 0.75rem rgba(0,0,0,0.1);border:0.0625rem solid var(--cdmodal-modal-border);animation:cdmodal-container-in 0.25s cubic-bezier(0.21,1.11,0.35,1)}.cdmodal-title{margin:0 0 0.625rem 0;font-size:1.35rem;font-weight:600;letter-spacing:-0.01875rem;color:var(--cdmodal-title-color)}.cdmodal-content{margin-bottom:1.5rem;line-height:1.45;font-size:0.9rem;padding:0 0.25rem;color:var(--cdmodal-content-color);white-space:break-spaces;max-height:50vh;overflow-y:auto}.cdmodal-input{width:92%;padding:0.625rem 0.75rem;margin-bottom:1.375rem;border-radius:0.875rem;font-size:0.8125rem;transition:all 0.2s ease;outline:none;font-family:inherit;box-sizing:border-box;background:var(--cdmodal-input-bg);border:0.09375rem solid var(--cdmodal-input-border);color:var(--cdmodal-input-text)}.cdmodal-input:focus{border-color:var(--cdmodal-primary);box-shadow:0 0 0 0.1875rem rgba(99,102,241,0.2)}.cdmodal-buttons{display:flex;justify-content:center;gap:0.625rem;flex-wrap:wrap;margin-top:0.375rem}.cdmodal-btn-primary{padding:0.5rem 1.125rem;border:none;border-radius:2.5rem;cursor:pointer;font-size:0.8125rem;font-weight:500;transition:all 0.2s ease;min-width:4.375rem;background:var(--cdmodal-primary);color:white;box-shadow:0 0.125rem 0.375rem rgba(0,0,0,0.2)}.cdmodal-btn-primary:hover{transform:translateY(-0.0625rem);box-shadow:0 0.25rem 0.75rem rgba(0,0,0,0.25);background:var(--cdmodal-primary-hover)}.cdmodal-btn-secondary{padding:0.5rem 1.125rem;border-radius:2.5rem;cursor:pointer;font-size:0.8125rem;font-weight:500;transition:all 0.2s ease;min-width:4.375rem;background:var(--cdmodal-cancel-bg);border:0.0625rem solid var(--cdmodal-cancel-border);color:var(--cdmodal-cancel-text)}.cdmodal-btn-secondary:hover{background:var(--cdmodal-cancel-hover-bg);transform:translateY(-0.0625rem)}@keyframes cdmodal-fade-in{from{opacity:0}to{opacity:1}}@keyframes cdmodal-fade-out{from{opacity:1}to{opacity:0}}@keyframes cdmodal-container-in{from{opacity:0;transform:scale(0.92)translateY(-0.5rem)}to{opacity:1;transform:scale(1)translateY(0)}}@keyframes cdmodal-container-out{from{opacity:1;transform:scale(1)translateY(0)}to{opacity:0;transform:scale(0.92)translateY(-0.5rem)}}@keyframes cdmodal-snackbar-in{from{opacity:0;transform:translateY(1.25rem)}to{opacity:1;transform:translateY(0)}}@keyframes cdmodal-snackbar-out{from{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-1.25rem)}}.cdmodal-snackbar{display:flex;align-items:center;gap:0.75rem;padding:0.625rem 1rem;border-radius:0.75rem;font-size:0.875rem;backdrop-filter:blur(0.5rem);box-shadow:0 0.25rem 0.75rem rgba(0,0,0,0.15);pointer-events:auto;max-width:18.75rem;word-wrap:break-word;animation:cdmodal-snackbar-in 0.3s ease;background:var(--cdmodal-snackbar-bg);color:var(--cdmodal-snackbar-text)}.cdmodal-snackbar-close{background:rgba(255,255,255,0.2);border:none;width:1.5rem;height:1.5rem;border-radius:0.75rem;cursor:pointer;font-size:0.875rem;display:flex;align-items:center;justify-content:center;transition:background 0.2s;color:inherit}.cdmodal-snackbar-close:hover{background:rgba(255,255,255,0.3)}.cdmodal-snackbar-container{position:fixed;z-index:10001;display:flex;gap:0.625rem;pointer-events:none}`;
document.head.appendChild(style);

export const config = {
    theme: 'light',
    overlayBlur: 8,
    modalBorderRadius: 28,
    primaryColor: '#6366f1',
    titleColor: null,
    contentColor: null,
    overlayBgColor: 'rgba(0, 0, 0, 0.4)',
    modalBgColor: null,
    snackbarBgColor: null,
    snackbarTextColor: null,
    closeOnOverlay: true,
    closeOnEsc: true
};

function applyConfig() {
    const root = document.documentElement;
    const isDark = config.theme === 'dark';
    
    if (isDark) {
        root.setAttribute('data-cdmodal-theme', 'dark');
    } else {
        root.setAttribute('data-cdmodal-theme', 'light');
    }
    
    root.style.setProperty('--cdmodal-primary', config.primaryColor);
    
    // 计算hover色
    if (config.primaryColor && config.primaryColor.startsWith('#')) {
        const num = parseInt(config.primaryColor.slice(1), 16);
        const r = Math.max(0, (num >> 16) * 0.9);
        const g = Math.max(0, ((num >> 8) & 0x00FF) * 0.9);
        const b = Math.max(0, (num & 0x0000FF) * 0.9);
        const hoverColor = `#${(0x1000000 + Math.floor(r) * 0x10000 + Math.floor(g) * 0x100 + Math.floor(b)).toString(16).slice(1)}`;
        root.style.setProperty('--cdmodal-primary-hover', hoverColor);
    }
    
    if (config.titleColor) {
        root.style.setProperty('--cdmodal-title-color', config.titleColor);
    } else {
        root.style.removeProperty('--cdmodal-title-color');
    }
    
    if (config.contentColor) {
        root.style.setProperty('--cdmodal-content-color', config.contentColor);
    } else {
        root.style.removeProperty('--cdmodal-content-color');
    }
    
    root.style.setProperty('--cdmodal-overlay-bg', config.overlayBgColor);
    
    if (config.modalBgColor) {
        root.style.setProperty('--cdmodal-modal-bg', config.modalBgColor);
    } else {
        root.style.removeProperty('--cdmodal-modal-bg');
    }
    
    if (config.snackbarBgColor) {
        root.style.setProperty('--cdmodal-snackbar-bg', config.snackbarBgColor);
    } else {
        root.style.removeProperty('--cdmodal-snackbar-bg');
    }
    
    if (config.snackbarTextColor) {
        root.style.setProperty('--cdmodal-snackbar-text', config.snackbarTextColor);
    } else {
        root.style.removeProperty('--cdmodal-snackbar-text');
    }
    
    root.style.setProperty('--cdmodal-overlay-blur', `${config.overlayBlur / 16}rem`);
    root.style.setProperty('--cdmodal-border-radius', `${config.modalBorderRadius / 16}rem`);
}

// 应用初始配置
applyConfig();

// 消息条容器
const snackbarContainers = {};

function getSnackbarContainer(position) {
    if (!snackbarContainers[position]) {
        const container = document.createElement('div');
        container.className = 'cdmodal-snackbar-container';
        const posMap = {
            '左上角': { top: '1rem', left: '1rem', alignItems: 'flex-start' },
            '顶部居中': { top: '1rem', left: '50%', transform: 'translateX(-50%)', alignItems: 'center' },
            '右上角': { top: '1rem', right: '1rem', alignItems: 'flex-end' },
            '左下角': { bottom: '1rem', left: '1rem', alignItems: 'flex-start', flexDirection: 'column-reverse' },
            '底部居中': { bottom: '1rem', left: '50%', transform: 'translateX(-50%)', alignItems: 'center', flexDirection: 'column-reverse' },
            '右下角': { bottom: '1rem', right: '1rem', alignItems: 'flex-end', flexDirection: 'column-reverse' }
        };
        const posConfig = posMap[position] || posMap['底部居中'];
        Object.assign(container.style, posConfig);
        document.body.appendChild(container);
        snackbarContainers[position] = container;
    }
    return snackbarContainers[position];
}

function removeSnackbar(snackbarEl) {
    if (!snackbarEl.parentNode) return;
    snackbarEl.style.animation = 'cdmodal-snackbar-out 0.3s ease forwards';
    setTimeout(() => snackbarEl.remove(), 300);
}

// 核心弹窗函数
async function showModal(options) {
    return new Promise((resolve) => {
        const closeOnOverlay = options.closeOnOverlay !== undefined ? options.closeOnOverlay : config.closeOnOverlay;
        const closeOnEsc = options.closeOnEsc !== undefined ? options.closeOnEsc : config.closeOnEsc;
        
        const overlay = document.createElement('div');
        overlay.className = 'cdmodal-overlay';
        const container = document.createElement('div');
        container.className = 'cdmodal-container';
        overlay.appendChild(container);
        document.body.appendChild(overlay);
        
        let isResolved = false;
        let escHandler = null;
        
        const cleanup = () => {
            if (isResolved) return;
            isResolved = true;
            if (escHandler) document.removeEventListener('keydown', escHandler);
            overlay.style.animation = 'cdmodal-fade-out 0.2s ease forwards';
            container.style.animation = 'cdmodal-container-out 0.2s ease forwards';
            setTimeout(() => overlay.remove(), 200);
        };
        
        const finalize = (value) => {
            if (isResolved) return;
            cleanup();
            resolve(value);
        };
        
        if (options.title) {
            const titleEl = document.createElement('h3');
            titleEl.textContent = options.title;
            titleEl.className = 'cdmodal-title';
            if (options.titleColor) titleEl.style.color = options.titleColor;
            container.appendChild(titleEl);
        }
        
        const contentEl = document.createElement('div');
        contentEl.textContent = options.content || '';
        contentEl.className = 'cdmodal-content';
        if (options.contentColor) contentEl.style.color = options.contentColor;
        container.appendChild(contentEl);
        
        let inputEl = null;
        if (options.input) {
            inputEl = document.createElement('input');
            inputEl.type = 'text';
            inputEl.placeholder = options.inputPlaceholder || '';
            inputEl.className = 'cdmodal-input';
            container.appendChild(inputEl);
            setTimeout(() => inputEl.focus(), 50);
        }
        
        const buttonsDiv = document.createElement('div');
        buttonsDiv.className = 'cdmodal-buttons';
        
        if (options.choices && options.choices.length > 0) {
            options.choices.forEach((choice) => {
                const btn = document.createElement('button');
                btn.textContent = choice.label || choice;
                btn.className = 'cdmodal-btn-primary';
                btn.addEventListener('click', () => finalize(choice.value !== undefined ? choice.value : choice));
                buttonsDiv.appendChild(btn);
            });
        } else {
            const confirmBtn = document.createElement('button');
            confirmBtn.textContent = options.confirmText || '确定';
            confirmBtn.className = 'cdmodal-btn-primary';
            
            if (options.showCancel) {
                const cancelBtn = document.createElement('button');
                cancelBtn.textContent = options.cancelText || '取消';
                cancelBtn.className = 'cdmodal-btn-secondary';
                cancelBtn.addEventListener('click', () => finalize(options.input ? null : false));
                buttonsDiv.appendChild(cancelBtn);
            }
            
            confirmBtn.addEventListener('click', () => {
                finalize(options.input ? (inputEl?.value || '') : true);
            });
            buttonsDiv.appendChild(confirmBtn);
        }
        
        container.appendChild(buttonsDiv);
        
        if (closeOnOverlay) {
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) {
                    finalize(options.input ? null : (options.choices ? null : false));
                }
            });
        }
        
        if (closeOnEsc) {
            escHandler = (e) => {
                if (e.key === 'Escape') {
                    finalize(options.input ? null : (options.choices ? null : false));
                }
            };
            document.addEventListener('keydown', escHandler);
        }
    });
}

// 消息条函数
export async function snackbar(text, durationSec = 2, position = '底部居中', bgColor = null, textColor = null) {
    return new Promise((resolve) => {
        const container = getSnackbarContainer(position);
        let timer = null;
        let isRemoved = false;
        
        const removeAndResolve = () => {
            if (isRemoved) return;
            isRemoved = true;
            if (timer) clearTimeout(timer);
            removeSnackbar(snackbarEl);
            resolve();
        };
        
        const snackbarEl = document.createElement('div');
        snackbarEl.className = 'cdmodal-snackbar';
        
        if (bgColor) {
            snackbarEl.style.background = bgColor;
        } else if (config.snackbarBgColor) {
            snackbarEl.style.background = config.snackbarBgColor;
        }
        
        if (textColor) {
            snackbarEl.style.color = textColor;
        } else if (config.snackbarTextColor) {
            snackbarEl.style.color = config.snackbarTextColor;
        }
        
        const textSpan = document.createElement('span');
        textSpan.textContent = text;
        textSpan.style.flex = '1';
        snackbarEl.appendChild(textSpan);
        
        const closeBtn = document.createElement('button');
        closeBtn.textContent = '✕';
        closeBtn.className = 'cdmodal-snackbar-close';
        closeBtn.onclick = () => removeAndResolve();
        snackbarEl.appendChild(closeBtn);
        
        container.appendChild(snackbarEl);
        
        if (durationSec > 0) {
            timer = setTimeout(() => removeAndResolve(), durationSec * 1000);
        }
    });
}

// 便捷方法
export const alert = (message, title = '提示') => 
    showModal({ title: String(title), content: String(message), confirmText: '确定', showCancel: false });

export const confirm = (message, title = '确认') => 
    showModal({ title: String(title), content: String(message), confirmText: '确认', cancelText: '取消', showCancel: true })
        .then(r => r === true);

export const prompt = (message, defaultValue = '', title = '输入') => 
    showModal({ 
        title: String(title), 
        content: String(message), 
        confirmText: '提交', 
        cancelText: '取消', 
        showCancel: true, 
        input: true, 
        inputPlaceholder: String(defaultValue) 
    }).then(r => r === null ? '' : String(r));

export const choice = (title, content, choices) => {
    let choicesArray = Array.isArray(choices) ? choices : [choices];
    choicesArray = choicesArray.map(item => 
        typeof item === 'string' ? { label: item, value: item } : item
    );
    if (!choicesArray.length) choicesArray = [{ label: '确定', value: '确定' }];
    return showModal({ 
        title: String(title), 
        content: String(content), 
        choices: choicesArray, 
        closeOnOverlay: false 
    }).then(r => r !== null ? String(r) : '');
};

export const custom = (title, content, confirmText, cancelText = '') => {
    const showCancel = String(cancelText).trim().length > 0;
    return showModal({ 
        title: String(title), 
        content: String(content), 
        confirmText: String(confirmText), 
        cancelText: showCancel ? String(cancelText) : '', 
        showCancel 
    });
};

// 重置配置
export function resetConfig() {
    config.theme = 'light';
    config.overlayBlur = 8;
    config.modalBorderRadius = 28;
    config.primaryColor = '#6366f1';
    config.titleColor = null;
    config.contentColor = null;
    config.overlayBgColor = 'rgba(0, 0, 0, 0.4)';
    config.modalBgColor = null;
    config.snackbarBgColor = null;
    config.snackbarTextColor = null;
    config.closeOnOverlay = true;
    config.closeOnEsc = true;
    applyConfig();
}

// 默认导出
export default {
    config,
    alert,
    confirm,
    prompt,
    choice,
    custom,
    snackbar,
    resetConfig
};