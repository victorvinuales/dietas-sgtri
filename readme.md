# 📌 CHULETA GIT – Flujo básico de trabajo

Cada vez que hagas CAMBIOS en tu proyecto en VS Code, sigue estos pasos en la terminal integrada (Ctrl + `):

---

## 1️⃣ VER EL ESTADO


git status

🔍 Te dice:
- En qué **RAMA** estás (`main`).
- Qué archivos se han MODIFICADO.
- Qué archivos están LISTOS para guardar (staging).

---

## 2️⃣ AÑADIR CAMBIOS


git add .

✔ Añade **TODOS los cambios** al “área de preparación”.  
💡 Si quieres añadir solo un archivo concreto:  


git add NOMBRE-DEL-ARCHIVO


---

## 3️⃣ CREAR UN COMMIT


git commit -m "MENSAJE DESCRIPTIVO"

📝 Guarda un **PUNTO DE CONTROL** en tu historial local.  
Ejemplo:  


git commit -m "Añadir formulario página 1"


⚠️ OJO: todavía está **solo en tu PC**, no en GitHub.

---

## 4️⃣ SUBIR LOS CAMBIOS A GITHUB


git push origin main

⬆ Envía tus commits al repositorio REMOTO en GitHub.  
- `origin` → es GitHub.  
- `main` → es la rama principal.

---

## 5️⃣ (OPCIONAL) TRAER CAMBIOS DE GITHUB


git pull origin main

⬇ Descarga la última versión de GitHub y la combina con la tuya.  
Útil si trabajas en varios PCs o editaste directamente en GitHub.

---

# 🔄 RESUMEN RÁPIDO


git status → ver qué ha cambiado
git add . → preparar los cambios
git commit -m "mensaje" → guardar en local
git push origin main → subir a GitHub


💡 CONSEJO:  
Usa `git log --oneline` para ver un historial rápido de commits.
