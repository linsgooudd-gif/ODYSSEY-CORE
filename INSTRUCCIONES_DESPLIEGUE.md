# 🚀 Guía de Despliegue de ODYSSEY en Vercel

Sigue estos pasos para subir tu proyecto ODYSSEY a Internet de forma gratuita y obtener un dominio público para tu registro en Google AdSense.

## Paso 1: Subir el código a GitHub

Vercel funciona mejor cuando se conecta directamente a un repositorio de GitHub. Esto permite que cada vez que hagas un cambio, tu sitio web se actualice automáticamente.

1. Ve a [GitHub](https://github.com/) e inicia sesión (o crea una cuenta si no tienes una).
2. Haz clic en el botón verde **"New"** (Nuevo) para crear un nuevo repositorio.
3. Ponle como nombre `odyssey-space-tycoon` (o el que prefieras). Puedes dejarlo como **Público** o **Privado**.
4. Haz clic en **"Create repository"**.
5. Abre la terminal de comandos (o el terminal de VS Code) dentro de la carpeta de tu proyecto de Odyssey (`c:\Users\vikig\.gemini\antigravity\scratch\odyssey`).
6. Ejecuta los siguientes comandos (asegúrate de reemplazar `TU_USUARIO` y `TU_REPO` con la URL de tu nuevo repositorio):

   ```bash
   git init
   git add .
   git commit -m "Versión Inicial de ODYSSEY"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
   git push -u origin main
   ```

## Paso 2: Desplegar en Vercel

1. Ve a [Vercel](https://vercel.com/) y haz clic en **"Sign Up"** (Registrarse).
2. Elige **"Continue with GitHub"** para vincular tu cuenta.
3. Una vez en el panel ("Dashboard") de Vercel, haz clic en **"Add New..."** y selecciona **"Project"**.
4. En la lista de repositorios importables desde GitHub, busca el que acabas de crear (`odyssey-space-tycoon`) y haz clic en el botón **"Import"**.
5. **Configurar el Proyecto**:
   - Vercel detectará automáticamente que es un proyecto de **Next.js**.
   - En "Framework Preset" y demás configuraciones, deja los valores por defecto. Vercel ya sabe cómo manejar Next.js.
6. Haz clic en el botón **"Deploy"**.

## Paso 3: Obtener tu URL Pública

1. Vercel tardará un par de minutos en contruir ("build") el sitio. Verás una pantalla de confirmación con confeti cuando termine 🎉.
2. Haz clic en **"Continue to Dashboard"**.
3. Allí verás el enlace a tu sitio web, que será algo parecido a `https://odyssey-space-tycoon.vercel.app`.

## Paso 4: Finalizar Registro en Google AdSense

1. Entra a tu cuenta de Google AdSense.
2. En la sección **"Sitios"**, añade tu nueva URL de Vercel (`https://odyssey-space-tycoon.vercel.app`).
3. AdSense te pedirá colocar un fragmento de código (script). Ya tenemos preparado el componente `AdSensePlaceholder.tsx` en el proyecto, pero para el script a nivel global puedes añadir el script de AdSense dentro de la etiqueta `<head>` en tu archivo `src/app/layout.tsx`.
4. Una vez colocado el script oficial de AdSense, solicita la revisión en la página de AdSense.

---

> **Nota Adicional:** Vercel te da un dominio `.vercel.app` completamente gratis. Si en el futuro compras un dominio propio (ej. `odyssey-tycoon.com`), puedes añadirlo fácilmente desde el dashboard de Vercel en la pestaña "Settings" -> "Domains".
