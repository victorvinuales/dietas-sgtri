# 📌 CHULETA GIT – Flujo básico de trabajo

Cada vez que hagas CAMBIOS en tu proyecto en VS Code, sigue estos pasos en la terminal integrada (Ctrl + `):

---

## 1️⃣ VER EL ESTADO
git status

yaml
Copiar código
🔍 Te dice:
- En qué **RAMA** estás (`main`).
- Qué archivos se han MODIFICADO.
- Qué archivos están LISTOS para guardar (staging).

---

## 2️⃣ AÑADIR CAMBIOS
git add .

css
Copiar código
✔ Añade **TODOS los cambios** al “área de preparación”.  
💡 Si quieres añadir solo un archivo concreto:  
git add NOMBRE-DEL-ARCHIVO

yaml
Copiar código

---

## 3️⃣ CREAR UN COMMIT
git commit -m "MENSAJE DESCRIPTIVO"

bash
Copiar código
📝 Guarda un **PUNTO DE CONTROL** en tu historial local.  
Ejemplo:  
git commit -m "Añadir formulario página 1"

yaml
Copiar código

⚠️ OJO: todavía está **solo en tu PC**, no en GitHub.

---

## 4️⃣ SUBIR LOS CAMBIOS A GITHUB
git push origin main

yaml
Copiar código
⬆ Envía tus commits al repositorio REMOTO en GitHub.  
- `origin` → es GitHub.  
- `main` → es la rama principal.

---

## 5️⃣ (OPCIONAL) TRAER CAMBIOS DE GITHUB
git pull origin main

yaml
Copiar código
⬇ Descarga la última versión de GitHub y la combina con la tuya.  
Útil si trabajas en varios PCs o editaste directamente en GitHub.

---

# 🔄 RESUMEN RÁPIDO
git status → ver qué ha cambiado
git add . → preparar los cambios
git commit -m "mensaje" → guardar en local
git push origin main → subir a GitHub

yaml
Copiar código

💡 CONSEJO:  
Usa `git log --oneline` para ver un historial rápido de commits.

---

# ⚡ ALIAS ÚTILES

Para no escribir siempre los mismos comandos, puedes configurar **alias** en Git.  

### 📌 Alias rápido fijo
Configúralo una vez:
git config --global alias.quick '!git add . && git commit -m "update" && git push origin main'

makefile
Copiar código

Uso:
git quick

yaml
Copiar código
👉 Hace `add + commit "update" + push` en un solo paso.

---

### 📌 Alias flexible con mensaje
Configúralo una vez:
git config --global alias.quick '!f() { git add . && git commit -m "$1" && git push origin main; }; f'

makefile
Copiar código

Uso:
git quick "MENSAJE" 

sql
Copiar código
👉 Hace `add + commit "MENSAJE" + push`.

Ejemplos:
git quick "Corrección de estilos CSS"
git quick "Añadir segunda página del formulario"

yaml
Copiar código

---

### 📌 Ver todos tus alias
git config --get-regexp alias

yaml
Copiar código

---

🚀 Con esto puedes trabajar mucho más rápido sin tener que recordar todos los comandos.